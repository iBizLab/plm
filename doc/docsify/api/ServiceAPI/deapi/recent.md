# 最近访问(recent) :id=recent
## 创建最近访问

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">owner_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">owner_subtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问类型|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取最近访问

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/{key}" type="info" :closable="false" ></el-alert>
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
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 删除最近访问

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新最近访问

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/{key}" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">owner_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">owner_subtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问类型|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 检查最近访问主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">owner_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">owner_subtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问类型|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 获取最近访问草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">owner_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">owner_subtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问类型|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 我负责的事项

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/{key}/my_charge_entry" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">owner_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">owner_subtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问类型|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 我创建的事项

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/{key}/my_created_entry" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">owner_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">owner_subtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问类型|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 保存最近访问

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">owner_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">owner_type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据对象|
|<el-row justify="space-between"><el-col :span="20">owner_subtype</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">type</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问类型|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">recent_parent_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类名称|
|<el-row justify="space-between"><el-col :span="20">recent_parent</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">show_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">recent_parent_identifier</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类编号|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|



##### 请求示例： {docsify-ignore}
```json
{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "identifier" : null,
  "owner_id" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "type" : null,
  "is_deleted" : null,
  "recent_parent_name" : null,
  "recent_parent" : null,
  "show_identifier" : null,
  "recent_parent_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 移动端首页_最近访问

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_mob_home_recent_access" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近使用（10条）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_only_ten_access_use" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近访问

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_access" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近访问（逻辑生成）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_access_logic" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览当前产品内工单

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_curproduct_ticket" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览当前项目子工作项

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_curproject_child_work_item" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览当前项目工作项

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_curproject_work_item" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览_需求

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_idea" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近访问页面

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_page" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近访问项目

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_project" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览_用例

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_test_case" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近访问的用例_首页

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_test_case_index" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览_工单

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_ticket" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近使用

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_use" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览_工作项

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_work_item" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览工作项且不含缺陷

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_work_item_and_nobug" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览_缺陷

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_work_item_bug" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 最近浏览_工作项(依赖)

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_recent_work_item_dependency" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 本人最新访问

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/recents/fetch_user" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_owner_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属数据标识|
|<el-row justify="space-between"><el-col :span="20">n_owner_subtype_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属对象子类型|
|<el-row justify="space-between"><el-col :span="20">n_recent_parent_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|访问父类|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_recent_parent_eq" : null,
  "n_show_identifier_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "owner_id" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "type" : null,
    "is_deleted" : null,
    "recent_parent_name" : null,
    "recent_parent" : null,
    "show_identifier" : null,
    "recent_parent_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
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
<el-alert title="/recents/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/recents/exportdata/{param},/recents/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/recents/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/recents/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/recents/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/recents/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/recents/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


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