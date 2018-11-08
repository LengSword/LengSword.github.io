# **0x000-OverTheWire-Bandit-Level_0~30_Guides**

- OS Environment: Windows 10
- Terminal: Xshell 6
- Target_Host: bandit.labs.overthewire.org
- Target_Port: 2220

## 0x00. Learning Resources Recommended

> - Linux在线资源
> [1] [菜鸟教程](http://www.runoob.com/linux/linux-tutorial.html)
> [2] [Linux在线命令大全手册](http://man.linuxde.net/)
> [3] [Linux思维导图整理](https://www.jianshu.com/p/59f759207862)
> - Shell在线资源
> [1] [Shell脚本编程30分钟入门](https://github.com/qinjx/30min_guides/blob/master/shell.md)
> [2] [shell命令行分解分析[EN]](https://explainshell.com/)
> - 实体书籍
> [1] 《鸟哥的Linux私房菜 基础学习篇 第四版》(京东,当当均有售)

## 0x01. Level 0

### I. Goal

> The goal of this level is for you to log into the game using SSH. The host to which you need to connect is bandit.labs.overthewire.org, on port 2220. The username is bandit0 and the password is bandit0. Once logged in, go to the Level 1 page to find out how to beat Level 1.

### II. Commands you may need to solve this level

- ssh

### III. Commands List

- ssh
- ls
- cat

### IV. Intro

最难的一关,因为你还要会看懂英文XDDDDD...

因为我用的是Xshell,配置好了以后直接就可以很方便地ssh连上去了.

而且用Xshell的话,可以在"会话设置 - 连接 - 保持活动状态",选中第一个选项,间隔我填的是25秒,这样的话,ssh上去以后,只要你不断网,就会一直保持与OverTheWire那里的服务器的连接状态.否则如果你无活动一段时间后,是会与服务器断开连接的.

### V. Solution

- Windows(安装了ssh for windows以后)
- Ubuntu(其他Linux系统估计也可以)

`注: 第一次登录会需要验证,输入yes就可以`

```shell
$ ssh -p 2220 bandit0@bandit.labs.overthewire.org
This is a OverTheWire game server. More information on http://www.overthewire.org/wargames

bandit0@bandit.labs.overthewire.org's password:
```

然后输入题目提供的密码`bandit0`就进去了.(以下略)

这关没啥思路,就是`ls`和`cat`命令最简单的使用.
解法如下:

```shell
$ ls
readme
$ cat readme
boJ9jbbUNNfktd78OOpsqOltutMc3MY1
```

`bandit1_password = boJ9jbbUNNfktd78OOpsqOltutMc3MY1`

------

## 0x02. Level - 1

### I. Goal

> The password for the next level is stored in a file called - located in the home directory

### II. Commands you may need to solve this level

- ls, cd, cat, file, du, find

### III. Commands List

- ls
- cat

### IV. Intro

看Level Goal,知道我们要找的密码文件在home目录里.
所以就开始找吧...

这里开始需要一些基础的Linux知识了.

### V. Solution

- Windows(安装了ssh for windows以后)
- Ubuntu(其他Linux系统估计也可以)

```shell
$ exit
logout

$ ssh -p 2220 bandit1@bandit.labs.overthewire.org
This is a OverTheWire game server. More information on http://www.overthewire.org/wargames

bandit1@bandit.labs.overthewire.org's password:
```

上来先一波ls操作,不要怂2333

```shell
$ ls
-
```

换参数继续

```shell
$ ls -l
total 4
-rw-r----- 1 bandit2 bandit1 33 Oct 16 14:00 -
```

这里就要说到Linux的文件属性了.
上面的一行输出,除了`total 4`之外
第一个字符代表这个文件的类型.
具体情况如下:

- `d` = directory 目录
- `-` = 普通文件
- `l` = link file 链接文件
- `b` 装置文件里面的可供储存的接口设备(可随机存取装置)
- `c` 装置文件里面的串行端口设备,例如键盘,鼠标(一次性读取装置)

> 建议大家在看这篇文章之前先学点基础再来看,不然不懂还是要回去看的,毕竟Linux知识很多很繁杂...

这里顺便说下一个小知识:

- `.` 代表当前目录
- `..` 代表上一级目录
- `~` 代表用户的home目录
- `/` 代表根目录

因此,用cat输出的时候需要在前面加上`./`.

所以这个文件名叫`-`的其实是个文件,应该就是我们要找的了.

> 其实我们也可以用推荐命令中的`file`命令查看这个文件的类型.
>  
> 比如输入`file ./*`就能列出当前目录下的所有文件类型了.
>  
> ```shell
> $ file ./*
> ./-: ASCII text
> ```

```shell
$ cat ./-
CV1DtqXWVFXTvM2F0k09SHz0YwRINYA9
```

> 注:其实自动补全功能强大的shell的话,一直按tab键就能补全啦(个人建议安装个比较好看又强大的终端,比如oh_my_zsh)

```python
bandit2_password = CV1DtqXWVFXTvM2F0k09SHz0YwRINYA9
```
