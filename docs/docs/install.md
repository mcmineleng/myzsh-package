# 安装
### 前置依赖
> Python 3.8 +

> zsh
<br></br>
### 下载脚本
**使用curl**
```shell
curl -O https://sh.mcleng.cn/myzshinstall
```

**使用wget**
```shell
wget https://sh.mcleng.cn/myzshinstall
```
***

### 交互式安装
```shell
bash myzshinstall --cli
```
脚本会询问一些信息
```text
MyZsh仓库地址(回车默认): 
Oh-My-Zsh仓库地址: 
安装目录(默认~/.myzsh): 
安装Oh-My-Zsh自带主题 [Y/n]: y
安装Oh-My-Zsh自带插件 [Y/n]: y
```
需要自定义目录的可以自行填写,不需要的也可以一路回车
***
### 非交互式安装
通过环境变量预设参数，实现非交互式安装。


#### 环境变量配置表

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `OMZ_REPO` | Oh-My-Zsh 上游仓库地址，可配置镜像 | `https://github.com/ohmyzsh/ohmyzsh` |
| `MYZSH_REPO` | 本项目仓库地址，可配置镜像 | `https://github.com/mcmineleng/myzsh` |
| `MYZSH_DIR` | 安装路径 | `$HOME/.myzsh` |
| `OMZ_THEMES_INSTALL` | 是否安装 Oh-My-Zsh 内置主题集 | `true` |
| `OMZ_PLUGINS_INSTALL` | 是否安装 Oh-My-Zsh 内置插件集 | `true` |

---

**标准模式**（保留控制台输出便于日志审计）
```shell
bash myzshinstall
```

**静默模式**
```shell
bash myzshinstall > /dev/null
```
> \> /dev/null表示把标准输出给丢弃，会保留错误信息

---
## 手动安装
首先创建安装目录
```shell
mkdir -p ~/.myzsh
```
<br></br>
然后克隆仓库
```shell
git clone --depth 1 https://github.com/mcmineleng/myzsh ~/.myzsh
```
<br></br>
克隆Oh-My-Zsh
```shell
git clone --depth 1 https://github.com/ohmyzsh/ohmyzsh ~/ohmyzsh
```
<br></br>
删除Oh-My-Zsh的random主题（我们已经包含了该主题，Oh-My-Zsh版本的random无法正常工作，需要我的MyZsh专用版本）
```shell
rm ~/ohmyzsh/themes/random.zsh-theme
```
<br></br>
复制Oh-My-Zsh内置主题至MyZsh
```shell
cp -r ~/ohmyzsh/themes ~/.myzsh
```
<br></br>
复制Oh-My-Zsh内置插件至MyZsh
```shell
cp -r ~/ohmyzsh/plugins ~/.myzsh
```
<br></br>
删除Oh-My-Zsh目录
```shell
rm -rf ~/ohmyzsh
```
<br></br>
备份原.zshrc(如有)
```shell
cp ~/.zshrc ~/.zshrc.bak
```
<br></br>
写入新配置
```shell
cat > ~/.zshrc << 'EOF'
MYZSH_DIR="$HOME/.myzsh"
source "$MYZSH_DIR/start/myzsh-load.sh"
EOF
```
<br></br>
重载配置
```shell
exec zsh
```
> 请勿使用 source ~/.zshrc 该命令无法完全重载配置，可能会导致奇怪的问题，exec zsh会重启整个zsh