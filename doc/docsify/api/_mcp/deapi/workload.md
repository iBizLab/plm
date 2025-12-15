# 工时(workload) :id=workload
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