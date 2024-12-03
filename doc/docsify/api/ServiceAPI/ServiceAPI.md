# ServiceAPI(ServiceAPI) <!-- {docsify-ignore-all} -->



## 概述
<br>
<p class="panel-title"><b>接口类型</b></p>

* `RESTful API`

<p class="panel-title"><b>接口模式</b></p>

* `实体服务接口（指定实体）（默认）`

<p class="panel-title"><b>服务类型</b></p>

* `默认`


## 鉴权
请求Header必须带有srfsystemid（系统标识）、srforgid(组织标识)以及认证token信息


## 使用方式
REST API支持 OPTIONS/GET/PUT/PATCH/POST/DELETE等标准的HTTP请求。
对于GET/DELETE请求，通过querystring传递参数；
对于POST/PUT/PATCH请求，需要在headers中添加"content-type": "application/json"，然后通过body传递参数。
REST API使用HTTP状态码指示已执行操作的状态； 使用response body传递数据。

### 单个资源
当创建、更新、获取、删除单个资源成功时，会返回当前操作的资源。

```
HTTP状态码：200
Body：
{
     "id": "5e05d8448f8461dada9ba29c",
     "name": "名称",
     "desc": "描述",
     "create_man": "liqingfeng",
     "create_time": "2024-03-29 10:52:02",
}
```

### 分页数据
当请求多条数据时， 通过在body中设置page和size，指定第几页的数据和每一页的数据量（page为0时，表示第一页，size默认每一页返回20条）。
在返回的数据结构Head中，X-Page表示当前在第几页，X-Per-Page表示当前每页的数据量，X-Total表示资源总数量

```
HTTP状态码：200
Body：
[
     {
         "id": "5e05d8448f8461dada9ba29c",
         "name": "名称",
         "desc": "描述",
         "create_man": "liqingfeng",
         "create_time": "2024-03-29 10:52:02",
     },
     ...
]

```

### 错误
当请求失败时，会返回错误码和错误信息。

```
HTTP状态码：500
Body：
{
     "code": "100000",
     "message": "Internal Server Error"
}
```

