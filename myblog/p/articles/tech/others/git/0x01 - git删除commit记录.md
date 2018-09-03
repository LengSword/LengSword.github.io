# git删除commit记录
## 方法1
    $ git clone --depth=1
## 方法2
```
rm -rf .git
git init
git add .
git commit -m "[commit name]"
git remote add origin [your git remote repository]
git push -u --force origin master
```