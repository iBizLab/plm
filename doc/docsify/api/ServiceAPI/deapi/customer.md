# 客户(customer) :id=customer
## 创建客户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取客户

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}" type="info" :closable="false" ></el-alert>
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 删除客户

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`DELETE`

##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|key|String|标识|





## 更新客户

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 添加至类别

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}/add_categories" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 检查客户主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
Integer
```

## 客户选择工单

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}/customer_choose_ticket" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 客户只读用户判断

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}/customer_readonly_recognize" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 取消关联

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}/del_relation" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 删除类别

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/delete_categories" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`NONE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取关注人

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}/get_attention" type="info" :closable="false" ></el-alert>
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 获取客户草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 其他实体关联客户

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}/others_relation_customer" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 产品客户关联分页计数器

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/{key}/product_customer_re_counters" type="info" :closable="false" ></el-alert>
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
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```



## 保存客户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`CREATE`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



##### 请求示例： {docsify-ignore}
```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


##### 响应示例： {docsify-ignore}
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "attentions_imp" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}

```

## 评论通知负责人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/fetch_comment_notify_assignee" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_id_in" : null,
  "n_assignee_id_isnotnull" : null,
  "n_assignee_id_isnull" : null,
  "n_assignee_id_notin" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "assignee_id" : null,
    "assignee_name" : null,
  }
]
```

## 数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_id_in" : null,
  "n_assignee_id_isnotnull" : null,
  "n_assignee_id_isnull" : null,
  "n_assignee_id_notin" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "attentions_imp" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 需求未关联的客户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/fetch_idea_notre_customer" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_id_in" : null,
  "n_assignee_id_isnotnull" : null,
  "n_assignee_id_isnull" : null,
  "n_assignee_id_notin" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "attentions_imp" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 需求关联客户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/fetch_idea_relation_customer" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_id_in" : null,
  "n_assignee_id_isnotnull" : null,
  "n_assignee_id_isnull" : null,
  "n_assignee_id_notin" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "attentions_imp" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 正常状态

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/fetch_normal" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_id_in" : null,
  "n_assignee_id_isnotnull" : null,
  "n_assignee_id_isnull" : null,
  "n_assignee_id_notin" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "attentions_imp" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]
```

## 客户通知负责人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/fetch_notify_assignee" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



##### 请求示例： {docsify-ignore}
```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_id_in" : null,
  "n_assignee_id_isnotnull" : null,
  "n_assignee_id_isnull" : null,
  "n_assignee_id_notin" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_notin" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "id" : null,
    "assignee_id" : null,
    "assignee_name" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/customers/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/customers/exportdata/{param},/customers/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/customers/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/customers/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/customers/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/customers/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/customers/report" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 查询参数 {docsify-ignore}

|字段col300|类型col150|备注col400|
|---|---|----|
| srfreporttag | String | 报表标识 |
| srfcontenttype | String | 报表类型 |




## 根据产品创建客户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品获取客户

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




## 根据产品删除客户

<el-row>
<div style="width: 80px">
<el-alert center title="DELETE" type="error" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




## 根据产品更新客户

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品添加至类别

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}/add_categories" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品检查客户主键

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/check_key" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品客户选择工单

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}/customer_choose_ticket" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品客户只读用户判断

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}/customer_readonly_recognize" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品取消关联

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}/del_relation" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品删除类别

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/delete_categories" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品获取关注人

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}/get_attention" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




## 根据产品获取客户草稿

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/get_draft" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品其他实体关联客户

<el-row>
<div style="width: 80px">
<el-alert center title="PUT" type="warning" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}/others_relation_customer" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品产品客户关联分页计数器

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/{key}/product_customer_re_counters" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|
|key|String|标识|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品保存客户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/save" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">scale</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|规模|
|<el-row justify="space-between"><el-col :span="20">description</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">is_archived</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">is_deleted</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">logo</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|品牌标识|
|<el-row justify="space-between"><el-col :span="20">grade_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">industry_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">categories</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">categories_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">product_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">assignee_name</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">assignee_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">attentions</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Object|关注|
|<el-row justify="space-between"><el-col :span="20">ticket_total</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|工单总数|
|<el-row justify="space-between"><el-col :span="20">ticket_finish</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|已完成工单数|
|<el-row justify="space-between"><el-col :span="20">attentions_imp</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注人|
|<el-row justify="space-between"><el-col :span="20">id</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">name</el-col><el-col :span="4" style="text-align:right"></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">product_id</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|



## 根据产品评论通知负责人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/fetch_comment_notify_assignee" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



## 根据产品数据集

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/fetch_default" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



## 根据产品需求未关联的客户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/fetch_idea_notre_customer" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



## 根据产品需求关联客户

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/fetch_idea_relation_customer" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



## 根据产品正常状态

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/fetch_normal" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|



## 根据产品客户通知负责人

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/fetch_notify_assignee" type="info" :closable="false" ></el-alert>
</div>
</el-row>


##### 路径参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|pkey|String|产品主键|




##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人标识|
|<el-row justify="space-between"><el-col :span="20">n_categorys_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_categorys_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别|
|<el-row justify="space-between"><el-col :span="20">n_grade_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|等级|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_industry_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|行业|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|客户名称|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品标识|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品名称|




## 根据产品下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/importtemplate" type="info" :closable="false" ></el-alert>
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



## 根据产品数据导出

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/exportdata/{param},/products/{pkey}/customers/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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


## 根据产品数据导入

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/importdata" type="info" :closable="false" ></el-alert>
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

## 根据产品数据导入（返回错误excel）

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/importdata2" type="info" :closable="false" ></el-alert>
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

## 根据产品自定义表头导入（异步）
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/asyncimportdata2" type="info" :closable="false" ></el-alert>
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


## 根据产品数据打印
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/printdata/{key}" type="info" :closable="false" ></el-alert>
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



## 根据产品报表打印

<el-row>
<div style="width: 80px">
<el-alert center title="POST" style="background-color: rgba(52, 143, 228, 0.1);color: #348fe4;" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/products/{pkey}/customers/report" type="info" :closable="false" ></el-alert>
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