### **安装说明**
####  前提条件

- CPU >= 4 核
- RAM >= 16 GB
- Disk >= 50 GB
- Docker >= 24.0.0 & Docker Compose >= v2.26.1
  > 如果你并没有在本机安装 Docker（Windows、Mac，或者 Linux）, 可以参考文档 [Install Docker Engine](https://docs.docker.com/engine/install/) 自行安装。

#### 启动PLM服务
1. 克隆仓库：

   ```bash
   $ git clone https://gitee.com/ibizlab/plm.git
   ```

3. 进入 **compose** 文件夹，利用提前编译好的 Docker 镜像启动服务器：

> [!CAUTION]
> 请注意，目前官方提供的所有 Docker 镜像均基于 x86 架构构建，并不提供基于 ARM64 的 Docker 镜像。

   ```bash
   $ cd plm/deploy/compose
   $ docker compose -f docker-compose.yml --env-file .env up -d

   # 如果使用开发模式，根据变量注释提示调整**.dev**文件内对应参数,将启动包含ModelingIDE和code-server的构型:
   # docker compose -f docker-compose-dev.yml --env-file .dev up -d
   ```

   > [!TIP]
   > 如果你遇到 Docker 镜像拉不下来的问题，可以在 **deploy/compose/.env** 文件内根据变量 `IMAGE_URL` 的注释提示选择青云（需登录）或者阿里云的相应镜像。
   >
   > - 青云镜像名：`dockerhub.qingcloud.com/ibizlab/`
   > - 阿里云镜像名：`registry.cn-shanghai.aliyuncs.com/1024find/`
   > 
   > 如果你想修改MySQL、ZooKeeper、Redis、Nacos、EMQX服务为本地服务（开发模式不支持），可以在 **deploy/compose/.env** 文件内根据变量注释提示调整对应参数；调整MySQL服务为本地服务需要预先导入deploy/compose/init.sql。

4. 服务器启动成功后再次确认服务器状态：

   ```bash
   $ docker logs -f plmservice
   ```

   _出现以下界面提示说明服务器启动成功：_

   ```bash
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : 系统[ibizplm]已经注册
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Heap Memory Usage:
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Init: 786432000
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Used: 1489565680
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Committed: 4904714240
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Max: 11169955840
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Non-Heap Memory Usage:
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Init: 2555904
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Used: 222739928
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Committed: 231342080
	[DEBUG] n.i.central.cloud.core.ServiceHubBase    : Max: -1
   ```

等待启动完成访问http://xxx.xxx.xxx.xxx:30250/ibizplm-plmweb/

#### 数据卷
> [!CAUTION]
> 请注意，本次更新替换文件映射为Docker数据卷，升级前请做好数据备份。

- mysql_data：MySQL数据库的数据卷

- allinone_data：ibiz-ebsx-allinone服务存放文件的数据卷，例如：图片，附件等

- task_data：task服务存放文件的数据卷：发布文件、模型文件