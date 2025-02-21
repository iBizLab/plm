# 使用Docker Compose安装PLM

### 安装准备
拉取青云镜像需要登录，可以参照官方文档创建用户：[https://docsv4.qingcloud.com/user_guide/container/dockerhub/manual/user_manage/](https://docsv4.qingcloud.com/user_guide/container/dockerhub/manual/user_manage/)

使用创建的docker用户在命令行执行以下命令
```
docker login -u <username> -p <password> dockerhub.qingcloud.com
```

### 安装
##### 克隆此存储库：

```
git clone https://gitee.com/ibizlab/plm.git
```

##### 切换到此目录：

```
cd plm/deploy/compose
```

##### 复制示例`.env`文件并编辑要更改的任何值：

```
cp .env.example .env
vim .env
```

##### 启动容器：

```
docker-compose --env-file=.env up -d
```

等待启动完成访问http://localhost:30250/ibizplm-plmweb/

##### 持久化目录：

mysql_data：数据库的持久化目录

rt_data：allinone存放文件的持久化目录，例如：图片，附件等

### 升级

##### 切换到此目录：

```
cd plm/deploy/compose
```

##### 从存储库中检索任何更改：

```
git pull https://gitee.com/ibizlab/plm.git
```

##### 重新启动容器：

```
docker-compose --env-file=.env up -d
```

### 卸载

##### 您可以使用以下命令删除：

```
docker-compose down
```

### 故障排除

```
docker-compose logs -n 1000
```

