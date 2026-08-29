# myzshpack包管理CLI

## 功能介绍

myzshpack 用于从在线仓库安装/移除主题和插件，支持：
- 多仓库源聚合
- 变量替换
- 手动安装（直接指定 URL）
- 环境变量覆盖

## 前置配置

### 仓库配置文件

位置：`~/.myzsh/config/myzshpack/packages_repo.json`

默认内容：
```json
{
  "repo": [
    {
      "name": "default",
      "index": "https://raw.github.com/mcmineleng/myzsh-package/main/index.json"
    }
  ]
}
```

可添加多个仓库源，索引会被自动合并去重。

### 环境变量配置

位置：`~/.myzsh/config/myzshpack/env`

格式示例：
```ini
[default]
# 最低优先级
REPO_BASE=https://github.com

[global]
# 全局配置，覆盖 index.json 的 env
REPO_BASE=https://github.com

[仓库名]
# 仓库特定配置，覆盖 global
REPO_BASE=https://gitee.com
```

#### 变量优先级（从低到高）

1. `[default]` - 最低优先级
2. index.json 中的 `env` 数组
3. `[global]` - 覆盖 index.json
4. `[仓库名]` - 覆盖 global
5. 预设变量 (`INDEX_BASE_URL`, `INDEX_DOMAIN`) - 最高优先级

## 命令说明

### 更新索引

```shell
myzshpack update
```

从所有配置的仓库源拉取索引并合并。首次使用前必须先执行此命令。

### 安装

**从仓库安装**

```shell
myzshpack install <名称>
```

从仓库安装主题或插件。如果名称只匹配主题或插件，直接安装；如果两者都匹配，会询问选择。

**精确安装主题**

```shell
myzshpack install theme <名称>
```

**精确安装插件**

```shell
myzshpack install plugin <名称>
```

**手动安装（直接指定 URL）**

```shell
myzshpack install theme <URL> [类型]
```

安装主题，类型可选：git（默认）、zip、tar.gz、tar

```shell
myzshpack install plugin <URL> [类型]
```

安装插件，类型可选：git（默认）、zip、tar.gz、tar

示例：

```shell
myzshpack install theme https://github.com/romkatv/powerlevel10k.git
```

安装 Git 仓库主题。

```shell
myzshpack install plugin https://github.com/zsh-users/zsh-autosuggestions.git
```

安装 Git 仓库插件。

```shell
myzshpack install theme https://github.com/dracula/zsh/archive/master.zip zip
```

安装 ZIP 压缩包主题。

```shell
myzshpack install plugin https://github.com/sindresorhus/pure/archive/v1.0.0.tar.gz tar.gz
```

安装 tar.gz 压缩包插件。

### 移除

```shell
myzshpack remove <名称>
```

移除已安装的主题或插件。如果同名主题和插件都存在，会询问移除哪个。

**精确移除主题**

```shell
myzshpack remove theme <名称>
```

**精确移除插件**

```shell
myzshpack remove plugin <名称>
```

### 搜索

```shell
myzshpack search <关键词>
```

在索引中搜索匹配的主题和插件，显示详细信息包括 URL 和类型。

### 列出可用包

```shell
myzshpack list
```

列出所有仓库中可用的主题和插件。

### 列出已安装包

```shell
myzshpack list installed
```

列出本地已安装的主题和插件。

### 查看帮助

```shell
myzshpack help
```

---

# 变量替换功能

index.json 中的 `url` 字段支持变量替换，格式为 `${VAR_NAME}`。

## index.json 示例

```json
{
  "env": [
    {"REPO_BASE": "https://github.com"},
    {"USER": "zsh-users"}
  ],
  "plugins": [
    {
      "id": "zsh-autosuggestions",
      "url": "https://${REPO_BASE}/${USER}/zsh-autosuggestions",
      "type": "git"
    }
  ]
}
```

## 预设变量

更新索引时会自动设置以下变量：
- `INDEX_BASE_URL` - 索引文件的完整 URL
- `INDEX_DOMAIN` - 索引文件的域名（包含协议头）

## 使用场景

通过环境变量可以灵活切换仓库源。

**env 配置示例：**

```ini
[default]
REPO_BASE=https://github.com

[mirror]
REPO_BASE=https://gitee.com
```

这样同一个 index.json 可以在不同环境下使用不同的仓库源，无需修改索引文件。

---

# 常见工作流

## 首次使用

```shell
myzshpack update
```

更新索引。

```shell
myzshpack list
```

查看可用包。

```shell
myzshpack install powerlevel10k
```

安装主题。

```shell
myzshpack install zsh-autosuggestions
```

安装插件。

```shell
myzshpack install zsh-syntax-highlighting
```

安装插件。

```shell
myzsh theme set powerlevel10k
```

设置主题。

```shell
myzsh plugin
```

交互式启用插件。

```shell
myzsh edit myzsh/theme_config
```

编辑主题配置（可选）。

## 日常使用

```shell
myzsh theme set spaceship
```

切换主题。

```shell
myzsh plugin
```

启用/禁用插件。

```shell
myzshpack install plugin git
```

安装新插件。

```shell
myzshpack update
```

更新包索引。

```shell
myzshpack search git
```

搜索包。

```shell
myzshpack remove old-theme
```

移除不需要的包。