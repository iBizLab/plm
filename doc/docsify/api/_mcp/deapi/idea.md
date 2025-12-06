# 需求(idea) :id=idea
## 获取需求

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ideas/{key}" type="info" :closable="false" ></el-alert>
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
  "title" : null,
  "state" : null,
  "priority" : null,
  "format_type" : null,
  "suite" : null,
  "plan_at" : null,
  "plan_at_from" : null,
  "plan_at_to" : null,
  "plan_at_granularity" : null,
  "real_at" : null,
  "real_at_from" : null,
  "real_at_to" : null,
  "real_at_granularity" : null,
  "progress" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "assignee_name" : null,
  "product_identifier" : null,
  "assignee_id" : null,
  "cur_version_id" : null,
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "idea_from" : null,
  "idea_type" : null,
  "relation_total_idea" : null,
  "relation_total_ticket" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "relation_total_work_item" : null,
  "relation_total_test_case" : null,
  "review_result_state" : null,
  "remaining_workload" : null,
  "relation_total_customer" : null,
  "actual_workload" : null,
  "attention_count" : null,
  "comment_count" : null,
  "product_is_deleted" : null,
  "product_is_archived" : null,
  "cur_version_name" : null,
  "choose_version_id" : null,
  "choose_version_name" : null,
  "attentions_imp" : null,
  "recent_create_days" : null,
  "sequence" : null,
  "category_id" : null,
  "category_name" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "product_name" : null,
  "update_man" : null,
  "update_time" : null,
  "user_tag" : null,
  "user_tag2" : null,
}

```

## 普通需求

<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ideas/fetch_common" type="info" :closable="false" ></el-alert>
</div>
</el-row>
权限标识：`READ`
状态非删除，如果上下文传递了类别参数，显示该类别下数据



##### 请求参数 {docsify-ignore}
|字段col300|类型col150|备注col400|
|---|---|----|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnotnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_id_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_assignee_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|负责人|
|<el-row justify="space-between"><el-col :span="20">n_attentions_exists_n_user_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|关注|
|<el-row justify="space-between"><el-col :span="20">n_categories_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别路径|
|<el-row justify="space-between"><el-col :span="20">n_category_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|类别标识|
|<el-row justify="space-between"><el-col :span="20">n_category_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_category_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_description_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|描述|
|<el-row justify="space-between"><el-col :span="20">n_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_in</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_id_noteq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标识|
|<el-row justify="space-between"><el-col :span="20">n_idea_from_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求来源|
|<el-row justify="space-between"><el-col :span="20">n_idea_type_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|需求类型|
|<el-row justify="space-between"><el-col :span="20">n_identifier_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_identifier_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_is_archived_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已归档|
|<el-row justify="space-between"><el-col :span="20">n_is_deleted_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|是否已删除|
|<el-row justify="space-between"><el-col :span="20">n_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|名称|
|<el-row justify="space-between"><el-col :span="20">n_plan_at_from_gtandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|计划开始时间|
|<el-row justify="space-between"><el-col :span="20">n_plan_at_granularity_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|计划时间周期单位|
|<el-row justify="space-between"><el-col :span="20">n_plan_at_to_lt</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Timestamp|计划结束时间|
|<el-row justify="space-between"><el-col :span="20">n_priority_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|优先级|
|<el-row justify="space-between"><el-col :span="20">n_product_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品|
|<el-row justify="space-between"><el-col :span="20">n_product_id_isnull</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|产品|
|<el-row justify="space-between"><el-col :span="20">n_product_name_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属产品|
|<el-row justify="space-between"><el-col :span="20">n_product_name_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|所属产品|
|<el-row justify="space-between"><el-col :span="20">n_real_at_granularity_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|计划时间周期单位|
|<el-row justify="space-between"><el-col :span="20">n_recent_create_days_ltandeq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|Integer|最近创建日期|
|<el-row justify="space-between"><el-col :span="20">n_review_result_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|评审结果|
|<el-row justify="space-between"><el-col :span="20">n_section_id_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|子产品标识|
|<el-row justify="space-between"><el-col :span="20">n_show_identifier_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|编号|
|<el-row justify="space-between"><el-col :span="20">n_state_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_state_notin</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|状态|
|<el-row justify="space-between"><el-col :span="20">n_suite_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|模块|
|<el-row justify="space-between"><el-col :span="20">n_title_like</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|标题|
|<el-row justify="space-between"><el-col :span="20">n_user_tag2_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记2|
|<el-row justify="space-between"><el-col :span="20">n_user_tag_eq</el-col><el-col :span="4" style="text-align:right"><el-text size="small" type="success">可选</el-text></el-col> </el-row>|String|用户标记|



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
  "n_assignee_id_noteq" : null,
  "n_assignee_id_notin" : null,
  "n_assignee_name_eq" : null,
  "n_assignee_name_like" : null,
  "n_attentions_exists_n_user_id_eq" : null,
  "n_categories_like" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_create_man_in" : null,
  "n_create_man_isnotnull" : null,
  "n_create_man_isnull" : null,
  "n_create_man_noteq" : null,
  "n_create_man_notin" : null,
  "n_create_time_eq" : null,
  "n_create_time_gtandeq" : null,
  "n_create_time_ltandeq" : null,
  "n_description_like" : null,
  "n_id_eq" : null,
  "n_id_in" : null,
  "n_id_noteq" : null,
  "n_idea_from_eq" : null,
  "n_idea_type_eq" : null,
  "n_identifier_eq" : null,
  "n_identifier_isnull" : null,
  "n_identifier_like" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_from_gtandeq" : null,
  "n_plan_at_granularity_eq" : null,
  "n_plan_at_to_lt" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_id_isnull" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_recent_create_days_ltandeq" : null,
  "n_review_result_state_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
  "n_update_time_gtandeq" : null,
  "n_update_time_ltandeq" : null,
  "n_user_tag2_eq" : null,
  "n_user_tag_eq" : null,
}
```


##### 响应示例： {docsify-ignore}
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
    "format_type" : null,
    "suite" : null,
    "plan_at" : null,
    "plan_at_from" : null,
    "plan_at_to" : null,
    "plan_at_granularity" : null,
    "real_at" : null,
    "real_at_from" : null,
    "real_at_to" : null,
    "real_at_granularity" : null,
    "progress" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "assignee_name" : null,
    "product_identifier" : null,
    "assignee_id" : null,
    "cur_version_id" : null,
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "idea_from" : null,
    "idea_type" : null,
    "relation_total_idea" : null,
    "relation_total_ticket" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "relation_total_work_item" : null,
    "relation_total_test_case" : null,
    "review_result_state" : null,
    "remaining_workload" : null,
    "relation_total_customer" : null,
    "actual_workload" : null,
    "attention_count" : null,
    "comment_count" : null,
    "product_is_deleted" : null,
    "product_is_archived" : null,
    "cur_version_name" : null,
    "choose_version_id" : null,
    "choose_version_name" : null,
    "attentions_imp" : null,
    "recent_create_days" : null,
    "sequence" : null,
    "category_id" : null,
    "category_name" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "product_name" : null,
    "update_man" : null,
    "update_time" : null,
    "user_tag" : null,
    "user_tag2" : null,
  }
]
```



## 下载导入模板
<el-row>
<div style="width: 80px">
<el-alert center title="GET" type="success" :closable="false" ></el-alert>
</div>
<div style="margin-left:5px;width: calc(100% - 85px)">
<el-alert title="/ideas/importtemplate" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ideas/exportdata/{param},/ideas/exportdata/{param}/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ideas/importdata" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ideas/importdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ideas/asyncimportdata2" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ideas/printdata/{key}" type="info" :closable="false" ></el-alert>
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
<el-alert title="/ideas/report" type="info" :closable="false" ></el-alert>
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