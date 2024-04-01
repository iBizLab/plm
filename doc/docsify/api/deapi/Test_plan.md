# 测试计划(Test_plan)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/test_plans` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json

{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/test_plans/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json

{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/test_plans/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Update `PUT` `/test_plans/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json

{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/test_plans/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json
INT


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
End_test_plan `POST` `/test_plans/{key}/end_test_plan` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/test_plans/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json

{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/test_plans/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Start_test_plan `POST` `/test_plans/{key}/start_test_plan` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/test_plans/fetchdefault` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee `POST` `/test_plans/fetchmy_assignee` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_in_progress `POST` `/test_plans/fetchmy_in_progress` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_participate `POST` `/test_plans/fetchmy_participate` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchPending_and_in_progress `POST` `/test_plans/fetchpending_and_in_progress` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchQuery_no_shift_in `POST` `/test_plans/fetchquery_no_shift_in` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchUn_join_plan `POST` `/test_plans/fetchun_join_plan` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/test_plans/importtemplate`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入模板标识`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

#### **Response**
```file
数据导入模板.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导出 `POST` `/test_plans/exportdata/{param},/test_plans/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* param - `导出集合方法名称`
* key - `数据主键`

<p class="panel-title"><b>RequestParam</b></p>

* srfexporttag - `导出模板标识`

<p class="panel-title"><b>Body</b></p>

* page - `page`
* size - `分页大小`
* n_xxx_eq - `过滤参数`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
fetchdefult
```

<p class="panel-title"><b>RequestParam</b></p>

```json
srfexporttag=EXPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```json
参考param对应的集合请求参数
```

#### **Response**
```file
数据导出.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入 `POST` `/test_plans/importdata`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```json
{
  1:导入错误信息,
  2:导入错误信息,
  3:导入错误信息,
  ...
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入（返回错误excel） `POST` `/test_plans/importdata2`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```file
导入错误.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
自定义表头导入（异步） `GET` `/test_plans/asyncimportdata2`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`
* srfossfileid - `导入文件`
* srfimportschemaid - `表头定义`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
srfossfileid=b87cee52cfb88072b5733d9a796d8dca
srfimportschemaid=81593a65e81b7a07fcf84bd3e93cf3b8
```

#### **Response**
```json
{
  "actiontype": "DEIMPORTDATA2",
  "srfdcid": null,
  "updateman": null,
  "fulltopictag": null,
  "actionstate": 10,
  "dcsystemid": null,
  "createdate": null,
  "asyncacitonid": "1ea54b415c09d459de668eff641aa9aa",
  "asyncacitonname": "[导入]数据导入作业[dataimport]",
  "actionparam2": "dataimport",
  "createman": null,
  "updatedate": null,
  "actionparam": null
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据打印 `GET` `/test_plans/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* key - `打印数据key`

<p class="panel-title"><b>RequestParam</b></p>

* srfprinttag - `打印标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
key
```

<p class="panel-title"><b>RequestParam</b></p>

```
srfprinttag=PRINTTAG
srfcontenttype=PDF
```

#### **Response**
```file

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
实体报表 `POST` `/test_plans/report`

<p class="panel-title"><b>RequestParam</b></p>

* srfreporttag - `报表标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```
srfreporttag=DRX
srfcontenttype=PDF
```

<p class="panel-title"><b>Body</b></p>

```json
{
  "":"",
  "":"",
  ...
}
```

#### **Response**
```

```
<!-- tabs:end -->
<!-- panels:end -->


### LIBRARY

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/libraries/{pkey}/test_plans` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json

{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/libraries/{pkey}/test_plans/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json

{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/libraries/{pkey}/test_plans/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识





<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```




#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Update `PUT` `/libraries/{pkey}/test_plans/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json

{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/libraries/{pkey}/test_plans/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json
INT


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
End_test_plan `POST` `/libraries/{pkey}/test_plans/{key}/end_test_plan` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/libraries/{pkey}/test_plans/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json

{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/libraries/{pkey}/test_plans/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Start_test_plan `POST` `/libraries/{pkey}/test_plans/{key}/start_test_plan` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `status` - 状态
 * `type` - 测试分类
 * `start_at` - 计划开始
 * `end_at` - 计划结束
 * `summary` - 测试报告概要
 * `categories` - 类别
 * `work_item_relations` - 关联缺陷
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `project_type` - 项目类型
 * `library_identifier` - 测试库名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `library_id` - 测试库标识
 * `library_name` - 所属测试库
 * `name` - 计划名称
 * `project_id` - 关联项目
 * `project_name` - 关联项目
 * `release_id` - 项目发布标识
 * `release_name` - 名称
 * `sprint_id` - 关联迭代
 * `sprint_name` - 关联迭代
 * `update_man` - 更新人
 * `update_time` - 更新时间
 * `version_id` - 关联发布
 * `version_name` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**
<p class="panel-title"><b>PathVariable</b></p>

```json
key
```


<p class="panel-title"><b>Body</b></p>

```json
{
  "status" : null,
  "type" : null,
  "start_at" : null,
  "end_at" : null,
  "summary" : null,
  "categories" : null,
  "work_item_relations" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "project_type" : null,
  "library_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "library_id" : null,
  "library_name" : null,
  "name" : null,
  "project_id" : null,
  "project_name" : null,
  "release_id" : null,
  "release_name" : null,
  "sprint_id" : null,
  "sprint_name" : null,
  "update_man" : null,
  "update_time" : null,
  "version_id" : null,
  "version_name" : null,
}
```


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/libraries/{pkey}/test_plans/fetchdefault` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee `POST` `/libraries/{pkey}/test_plans/fetchmy_assignee` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_in_progress `POST` `/libraries/{pkey}/test_plans/fetchmy_in_progress` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_participate `POST` `/libraries/{pkey}/test_plans/fetchmy_participate` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchPending_and_in_progress `POST` `/libraries/{pkey}/test_plans/fetchpending_and_in_progress` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchQuery_no_shift_in `POST` `/libraries/{pkey}/test_plans/fetchquery_no_shift_in` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchUn_join_plan `POST` `/libraries/{pkey}/test_plans/fetchun_join_plan` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 测试库主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_assignee_name_eq` - 负责人
 * `n_categories_like` - 类别
 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_library_id_eq` - 测试库标识
 * `n_library_name_eq` - 所属测试库
 * `n_library_name_like` - 所属测试库
 * `n_name_like` - 计划名称
 * `n_project_id_eq` - 关联项目
 * `n_project_name_eq` - 关联项目
 * `n_project_name_like` - 关联项目
 * `n_release_id_eq` - 项目发布标识
 * `n_release_name_eq` - 名称
 * `n_release_name_like` - 名称
 * `n_sprint_id_eq` - 关联迭代
 * `n_sprint_name_eq` - 关联迭代
 * `n_sprint_name_like` - 关联迭代
 * `n_status_eq` - 状态
 * `n_type_eq` - 测试分类
 * `n_version_id_eq` - 关联发布
 * `n_version_name_eq` - 关联发布
 * `n_version_name_like` - 关联发布




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_assignee_name_eq" : null,
  "n_categories_like" : null,
  "n_create_man_eq" : null,
  "n_id_eq" : null,
  "n_library_id_eq" : null,
  "n_library_name_eq" : null,
  "n_library_name_like" : null,
  "n_name_like" : null,
  "n_project_id_eq" : null,
  "n_project_name_eq" : null,
  "n_project_name_like" : null,
  "n_release_id_eq" : null,
  "n_release_name_eq" : null,
  "n_release_name_like" : null,
  "n_sprint_id_eq" : null,
  "n_sprint_name_eq" : null,
  "n_sprint_name_like" : null,
  "n_status_eq" : null,
  "n_type_eq" : null,
  "n_version_id_eq" : null,
  "n_version_name_eq" : null,
  "n_version_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "status" : null,
    "type" : null,
    "start_at" : null,
    "end_at" : null,
    "summary" : null,
    "categories" : null,
    "work_item_relations" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "project_type" : null,
    "library_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "library_id" : null,
    "library_name" : null,
    "name" : null,
    "project_id" : null,
    "project_name" : null,
    "release_id" : null,
    "release_name" : null,
    "sprint_id" : null,
    "sprint_name" : null,
    "update_man" : null,
    "update_time" : null,
    "version_id" : null,
    "version_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/libraries/{pkey}/test_plans/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入模板标识`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

#### **Response**
```file
数据导入模板.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导出 `POST` `/libraries/{pkey}/test_plans/exportdata/{param},/libraries/{pkey}/test_plans/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`
* param - `导出集合方法名称`
* key - `数据主键`

<p class="panel-title"><b>RequestParam</b></p>

* srfexporttag - `导出模板标识`

<p class="panel-title"><b>Body</b></p>

* page - `page`
* size - `分页大小`
* n_xxx_eq - `过滤参数`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
fetchdefult
```

<p class="panel-title"><b>RequestParam</b></p>

```json
srfexporttag=EXPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```json
参考param对应的集合请求参数
```

#### **Response**
```file
数据导出.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入 `POST` `/libraries/{pkey}/test_plans/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```json
{
  1:导入错误信息,
  2:导入错误信息,
  3:导入错误信息,
  ...
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据导入（返回错误excel） `POST` `/libraries/{pkey}/test_plans/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`

<p class="panel-title"><b>Body</b></p>

* file - `导入数据.xlsx`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
```

<p class="panel-title"><b>Body</b></p>

```
file=导入数据.xlsx
```

#### **Response**
```file
导入错误.xlsx
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
自定义表头导入（异步） `GET` `/libraries/{pkey}/test_plans/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfimporttag - `导入标识`
* srfossfileid - `导入文件`
* srfimportschemaid - `表头定义`

<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```json
srfimporttag=IMPORTTAG
srfossfileid=b87cee52cfb88072b5733d9a796d8dca
srfimportschemaid=81593a65e81b7a07fcf84bd3e93cf3b8
```

#### **Response**
```json
{
  "actiontype": "DEIMPORTDATA2",
  "srfdcid": null,
  "updateman": null,
  "fulltopictag": null,
  "actionstate": 10,
  "dcsystemid": null,
  "createdate": null,
  "asyncacitonid": "1ea54b415c09d459de668eff641aa9aa",
  "asyncacitonname": "[导入]数据导入作业[dataimport]",
  "actionparam2": "dataimport",
  "createman": null,
  "updatedate": null,
  "actionparam": null
}
```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
数据打印 `GET` `/libraries/{pkey}/test_plans/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`
* key - `打印数据key`

<p class="panel-title"><b>RequestParam</b></p>

* srfprinttag - `打印标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>PathVariable</b></p>

```json
key
```

<p class="panel-title"><b>RequestParam</b></p>

```
srfprinttag=PRINTTAG
srfcontenttype=PDF
```

#### **Response**
```file

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
实体报表 `POST` `/libraries/{pkey}/test_plans/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `测试库主键标识`

<p class="panel-title"><b>RequestParam</b></p>

* srfreporttag - `报表标识`
* srfcontenttype - `报表类型`


<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**

<p class="panel-title"><b>RequestParam</b></p>

```
srfreporttag=DRX
srfcontenttype=PDF
```

<p class="panel-title"><b>Body</b></p>

```json
{
  "":"",
  "":"",
  ...
}
```

#### **Response**
```

```
<!-- tabs:end -->
<!-- panels:end -->
