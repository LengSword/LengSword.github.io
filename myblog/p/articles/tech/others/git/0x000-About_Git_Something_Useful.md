# 0x000-About Git Something Useful

## 0x01. Simple Usage

```shell
git init      #[1]
git add .     #[2]
git commit -m "<commit name>"     #[3]
git remote add origin <your git remote repository>    #[4]
git push -u -f origin master     #[5]
```

> [1] 创建新的git仓库
>
> [2] 自动判断并全部添加当前目录下的文件到git仓库
>
> [3] 提交更改;`-m`选项指定该commit的提交信息
>
> [4] 添加git远程仓库到`origin`主机
>
> [5] `-u`选项指定`origin`为默认主机;`-f`选项指定强制push;该命令将`master`分支推送到`origin`主机

## 0x02. Using Git To Delete Commit Logs

### Method I

> 使用--depth参数只克隆最近一次commit

```shell
git clone --depth=1
```

### Method II

> 删除git仓库(.git文件夹)然后重建并强制push

```shell
rm -rf .git
git init
git add .
git commit -m "[commit name]"
git remote add origin <your git remote repository>
git push -u -f origin master
```

## 0x03. References

> [1] [GitHub Pages 必备技巧：删除“commit”记录](https://www.v2ex.com/amp/t/461577)
>  
> [2] Others...
