# 工时(workload) :id=workload
## 创建工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取工时

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|




##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 删除工时

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新工时

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 检查工时主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 登记工时并更新剩余工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/create_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 填充工时数据

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/{key}/fill_workload_data" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 获取工时草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取重定向数据

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/{key}/get_redirect_data" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|




##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取已登记工时

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/{key}/get_register_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`
修改实际工时表单获取数据行为

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|




##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 保存工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 修改工时并更新剩余工时

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/{key}/update_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`UPDATE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "principal_id" : null,
  "category" : null,
  "owner_type" : null,
  "principal_type" : null,
  "duration" : null,
  "description" : null,
  "recent_parent_name" : null,
  "register_date" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "work_item" : null,
  "idea" : null,
  "test_case" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "type_id" : null,
  "type_name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## BI反查

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_bi_detail" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## BI查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_bi_search" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "create_time" : null,
    "update_time" : null,
    "register_date" : null,
    "identifier" : null,
    "principal_type" : null,
    "owner_type" : null,
    "update_man" : null,
    "name" : null,
    "principal_id" : null,
    "show_identifier" : null,
    "recent_parent" : null,
    "create_man" : null,
    "duration" : null,
    "type_name" : null,
    "work_item" : null,
    "test_case" : null,
    "idea" : null,
    "type_id" : null,
    "id" : null,
  }
]
```

## 工时日历

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_calendar" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 团队下成员维度工时日历

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_group_member_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 产品需求维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_idea_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 产品需求管理维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_idea_management_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 产品需求工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_idea_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工时日志

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_log" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 人员维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_member_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工时日历移动端

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_mob_calendar" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 我的工时日历

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_my_calendar" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 我的产品需求工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_my_idea_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 我登记的工时日志

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_my_log" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工时日志

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_my_mob_log" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`
移动端我的工时日志



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 我的测试用例工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_my_test_case_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 我的工作类别记录

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_my_type_of" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 我的工作项工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_my_work_item_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 我的工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_my_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 测试用例维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_test_case_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 测试用例管理维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_test_case_management_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 测试用例工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_test_case_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工作类别记录

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_type_of" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工作类别维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_type_of_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工作类别管理维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_type_of_management_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 团队维度工时日历查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_user_group_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 团队维度日历链接

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_user_group_link" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 团队工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_user_group_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工作项维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_work_item_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工作项管理维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_work_item_management_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 工作项工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/fetch_work_item_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_eq" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_duration_eq" : null,
  "n_duration_gt" : null,
  "n_duration_gtandeq" : null,
  "n_duration_lt" : null,
  "n_duration_ltandeq" : null,
  "n_id_eq" : null,
  "n_idea_exists_n_assignee_id_eq" : null,
  "n_idea_exists_n_create_man_eq" : null,
  "n_idea_exists_n_description_like" : null,
  "n_idea_exists_n_identifier_like" : null,
  "n_idea_exists_n_is_archived_eq" : null,
  "n_idea_exists_n_priority_eq" : null,
  "n_idea_exists_n_product_id_eq" : null,
  "n_idea_exists_n_state_eq" : null,
  "n_idea_exists_n_title_like" : null,
  "n_identifier_like" : null,
  "n_name_like" : null,
  "n_principal_id_eq" : null,
  "n_recent_parent_eq" : null,
  "n_register_date_eq" : null,
  "n_register_date_gtandeq" : null,
  "n_register_date_in" : null,
  "n_register_date_ltandeq" : null,
  "n_show_identifier_like" : null,
  "n_test_case_exists_n_create_man_eq" : null,
  "n_test_case_exists_n_description_like" : null,
  "n_test_case_exists_n_identifier_eq" : null,
  "n_test_case_exists_n_is_archived_eq" : null,
  "n_test_case_exists_n_level_eq" : null,
  "n_test_case_exists_n_maintenance_id_eq" : null,
  "n_test_case_exists_n_state_eq" : null,
  "n_test_case_exists_n_title_like" : null,
  "n_test_case_exists_n_type_eq" : null,
  "n_type_id_eq" : null,
  "n_type_name_eq" : null,
  "n_type_name_like" : null,
  "n_work_item_exists_n_assignee_id_eq" : null,
  "n_work_item_exists_n_create_man_eq" : null,
  "n_work_item_exists_n_description_like" : null,
  "n_work_item_exists_n_identifier_like" : null,
  "n_work_item_exists_n_is_archived_eq" : null,
  "n_work_item_exists_n_priority_eq" : null,
  "n_work_item_exists_n_project_id_eq" : null,
  "n_work_item_exists_n_risk_eq" : null,
  "n_work_item_exists_n_state_eq" : null,
  "n_work_item_exists_n_title_like" : null,
  "n_work_item_exists_n_work_item_type_id_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "principal_id" : null,
    "category" : null,
    "owner_type" : null,
    "principal_type" : null,
    "duration" : null,
    "description" : null,
    "recent_parent_name" : null,
    "register_date" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "work_item" : null,
    "idea" : null,
    "test_case" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "type_id" : null,
    "type_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/exportdata/{param},/workloads/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workloads/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |




## 根据工时类别创建工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



## 根据工时类别获取工时

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|
|key|String|标识|




## 根据工时类别删除工时

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|
|key|String|标识|




## 根据工时类别更新工时

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



## 根据工时类别检查工时主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



## 根据工时类别登记工时并更新剩余工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/create_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



## 根据工时类别填充工时数据

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/{key}/fill_workload_data" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



## 根据工时类别获取工时草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



## 根据工时类别获取重定向数据

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/{key}/get_redirect_data" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|
|key|String|标识|




## 根据工时类别获取已登记工时

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/{key}/get_register_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>
修改实际工时表单获取数据行为

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|
|key|String|标识|




## 根据工时类别保存工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



## 根据工时类别修改工时并更新剩余工时

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/{key}/update_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">principal_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">category</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">principal_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体类型|
|<el-row justify="space-between"><el-col :span="20">duration</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">register_date</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">work_item</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|工作项|
|<el-row justify="space-between"><el-col :span="20">idea</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|需求|
|<el-row justify="space-between"><el-col :span="20">test_case</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|用例|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">type_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">type_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



## 根据工时类别BI反查

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_bi_detail" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别BI查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_bi_search" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工时日历

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_calendar" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别团队下成员维度工时日历

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_group_member_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别产品需求维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_idea_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别产品需求管理维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_idea_management_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别产品需求工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_idea_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工时日志

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_log" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别人员维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_member_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工时日历移动端

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_mob_calendar" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别我的工时日历

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_my_calendar" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别我的产品需求工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_my_idea_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别我登记的工时日志

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_my_log" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工时日志

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_my_mob_log" type="info" :closable="false" ></el-alert>
</div>
</el-row>
移动端我的工时日志

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别我的测试用例工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_my_test_case_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别我的工作类别记录

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_my_type_of" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别我的工作项工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_my_work_item_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别我的工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_my_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别测试用例维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_test_case_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别测试用例管理维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_test_case_management_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别测试用例工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_test_case_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工作类别记录

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_type_of" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工作类别维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_type_of_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工作类别管理维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_type_of_management_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别团队维度工时日历查询

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_user_group_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别团队维度日历链接

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_user_group_link" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别团队工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_user_group_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工作项维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_work_item_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工作项管理维度

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_work_item_management_dimension" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|



## 根据工时类别工作项工时

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/fetch_work_item_workload" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|工时类别主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_category_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时类别|
|<el-row justify="space-between"><el-col :span="20">n_duration_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_duration_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|BigDecimal|时长|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_idea_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|事项|
|<el-row justify="space-between"><el-col :span="20">n_principal_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工时主体标识|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_register_date_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_register_date_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|工作日期|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_level_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_maintenance_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_test_case_exists_n_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用例|
|<el-row justify="space-between"><el-col :span="20">n_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_type_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_type_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_create_man_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_project_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_risk_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|
|<el-row justify="space-between"><el-col :span="20">n_work_item_exists_n_work_item_type_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|工作项|




## 根据工时类别下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/importtemplate" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |



## 根据工时类别数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/exportdata/{param},/workload_types/{pkey}/workloads/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|
|param|String|导出集合方法名称|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|
|srfexporttag|String|导出模板标识|

##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|page|Integer|page|
|size|Integer|分页大小|
|n_xxx_eq|String|过滤参数|


## 根据工时类别数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/importdata" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 根据工时类别数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/importdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |

##### 请求参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| file | file | 导入数据文具 |

## 根据工时类别自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/asyncimportdata2" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfimporttag | String | 导入标识 |
| srfossfileid | String | 导入文件 |
| srfimportschemaid | String | 表头定义 |


## 根据工时类别数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/printdata/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|
|key|String|数据主键|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfprinttag | String | 打印标识 |
| srfcontenttype | String | 打印类型 |



## 根据工时类别报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/workload_types/{pkey}/workloads/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|标识|

##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |



<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    },
    methods: {

    }
  }).use(ElementPlus).mount('#app')
</script>