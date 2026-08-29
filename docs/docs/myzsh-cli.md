# myzsh管理CLI

## 功能介绍

myzsh 用于管理已安装的主题和插件，包括：
- 切换主题
- 启用/禁用插件
- 编辑配置文件
- 设置编辑器

## 命令说明

### 主题管理

**设置主题**

```shell
myzsh theme set <主题名>
```

主题名需与 `~/.myzsh/themes/` 目录下的文件名一致。Oh-My-Zsh内置主题可以直接设置，安装的主题需要，主题安装名/具体文件(一般和主题安装名一致)

**设置主题配置文件**

```shell
myzsh theme config <路径>
```

指定主题的配置文件路径，用于自定义主题样式。

**列出已安装主题**

```shell
myzsh theme list
```

显示所有已安装的主题，当前使用的主题会以绿色星标突出显示。

### 插件管理

**交互式插件管理**

```shell
myzsh plugin
```

进入交互式界面，使用上下键选择插件，空格切换启用/禁用状态，Enter 确认保存，ESC 取消。

**启用插件**

```shell
myzsh plugin add <插件名1> [插件名2] ...
```

启用一个或多个已安装的插件。

**禁用插件**

```shell
myzsh plugin remove <插件名1> [插件名2] ...
```

禁用一个或多个已启用的插件。

**列出插件**

```shell
myzsh plugin list
```

列出所有已安装插件，未启用的显示为 ○，已启用的显示为 ●。

```shell
myzsh plugin list true
```

仅列出已启用的插件。

### 配置编辑

**编辑配置文件**

```shell
myzsh edit <路径>
```

编辑 `~/.myzsh/config/` 目录下的配置文件。路径相对于配置目录。

示例：
```shell
myzsh edit myzsh/theme
```

编辑主题设置。

```shell
myzsh edit myzsh/plugins
```

编辑插件列表。

```shell
myzsh edit custom/my.conf
```

编辑自定义配置文件。

**设置默认编辑器**

```shell
myzsh edit set <编辑器命令>
```

设置编辑配置文件时使用的编辑器。

示例：
```shell
myzsh edit set vim
```

```shell
myzsh edit set /usr/bin/nano
```

**查看帮助**

```shell
myzsh help
```