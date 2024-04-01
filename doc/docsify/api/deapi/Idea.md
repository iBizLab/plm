# 需求(Idea)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/ideas` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/ideas/{key}` <i class="fa fa-key"></i>`READ`


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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/ideas/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/ideas/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Activate `POST` `/ideas/{key}/activate` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Archive `POST` `/ideas/{key}/archive` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Change_state `POST` `/ideas/{key}/change_state` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
CheckKey `POST` `/ideas/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Del_relation `POST` `/ideas/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Delete `POST` `/ideas/{key}/delete` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
GetDraft `GET` `/ideas/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get_attention `GET` `/ideas/{key}/get_attention` <i class="fa fa-key"></i>`READ`


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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Idea_category `POST` `/ideas/{key}/idea_category` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Idea_copy `POST` `/ideas/{key}/idea_copy` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Idea_move `POST` `/ideas/{key}/idea_move` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Idea_re_plan `POST` `/ideas/{key}/idea_re_plan` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Others_relation_idea `POST` `/ideas/others_relation_idea` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Plan_delete_idea `POST` `/ideas/{key}/plan_delete_idea` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Product_get_category `GET` `/ideas/{key}/product_get_category` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Product_idea_re_counters `POST` `/ideas/{key}/product_idea_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Recover `POST` `/ideas/{key}/recover` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Save `POST` `/ideas/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
FetchArchived `POST` `/ideas/fetcharchived` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchComment_notify_assignee `POST` `/ideas/fetchcomment_notify_assignee` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "id" : null,
    "assignee_id" : null,
    "assignee_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchCommon `POST` `/ideas/fetchcommon` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/ideas/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDeleted `POST` `/ideas/fetchdeleted` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_relation_idea `POST` `/ideas/fetchidea_relation_idea` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assign `POST` `/ideas/fetchmy_assign` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee_count `POST` `/ideas/fetchmy_assignee_count` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_attention `POST` `/ideas/fetchmy_attention` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_created `POST` `/ideas/fetchmy_created` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/ideas/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_exsists_relation `POST` `/ideas/fetchnot_exsists_relation` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchPlan_relation_idea `POST` `/ideas/fetchplan_relation_idea` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_idea `POST` `/ideas/fetchrecent_idea` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchTest_case_relation `POST` `/ideas/fetchtest_case_relation` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchTicket_relation_idea `POST` `/ideas/fetchticket_relation_idea` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchWork_item_relation_idea `POST` `/ideas/fetchwork_item_relation_idea` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/ideas/importtemplate`

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
数据导出 `POST` `/ideas/exportdata/{param},/ideas/exportdata/{param}/{key}`

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
数据导入 `POST` `/ideas/importdata`

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
数据导入（返回错误excel） `POST` `/ideas/importdata2`

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
自定义表头导入（异步） `GET` `/ideas/asyncimportdata2`

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
数据打印 `GET` `/ideas/printdata/{key}`

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
实体报表 `POST` `/ideas/report`

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


### PRODUCT

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/products/{pkey}/ideas` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/products/{pkey}/ideas/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/products/{pkey}/ideas/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
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
Update `PUT` `/products/{pkey}/ideas/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Activate `POST` `/products/{pkey}/ideas/{key}/activate` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Archive `POST` `/products/{pkey}/ideas/{key}/archive` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Change_state `POST` `/products/{pkey}/ideas/{key}/change_state` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
CheckKey `POST` `/products/{pkey}/ideas/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Del_relation `POST` `/products/{pkey}/ideas/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Delete `POST` `/products/{pkey}/ideas/{key}/delete` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
GetDraft `GET` `/products/{pkey}/ideas/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get_attention `GET` `/products/{pkey}/ideas/{key}/get_attention` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Idea_category `POST` `/products/{pkey}/ideas/{key}/idea_category` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Idea_copy `POST` `/products/{pkey}/ideas/{key}/idea_copy` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Idea_move `POST` `/products/{pkey}/ideas/{key}/idea_move` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Idea_re_plan `POST` `/products/{pkey}/ideas/{key}/idea_re_plan` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Others_relation_idea `POST` `/products/{pkey}/ideas/others_relation_idea` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}
```


#### **Response**
```json

{
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Plan_delete_idea `POST` `/products/{pkey}/ideas/{key}/plan_delete_idea` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Product_get_category `GET` `/products/{pkey}/ideas/{key}/product_get_category` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Product_idea_re_counters `POST` `/products/{pkey}/ideas/{key}/product_idea_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Recover `POST` `/products/{pkey}/ideas/{key}/recover` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
Save `POST` `/products/{pkey}/ideas/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `priority` - 优先级
 * `suite` - 模块
 * `plan_at` - 计划时间
 * `plan_at_from` - 计划开始时间
 * `plan_at_to` - 计划结束时间
 * `plan_at_granularity` - 计划时间周期单位
 * `real_at` - 实际时间
 * `real_at_from` - 实际开始时间
 * `real_at_to` - 实际结束时间
 * `real_at_granularity` - 计划时间周期单位
 * `progress` - 进度
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `assignee_name` - 负责人
 * `product_identifier` - 产品标识
 * `assignee_id` - 负责人标识
 * `section_name` - 子产品名称
 * `attachments` - 附件
 * `section_id` - 子产品标识
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `categories` - 类别路径
 * `workload_schedule` - 工时进度
 * `estimated_workload` - 预估工时
 * `remaining_workload` - 剩余工时
 * `actual_workload` - 实际工时
 * `category_id` - 类别标识
 * `category_name` - 名称
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `product_id` - 产品标识
 * `product_name` - 所属产品
 * `update_man` - 更新人
 * `update_time` - 更新时间




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
  "identifier" : null,
  "title" : null,
  "state" : null,
  "priority" : null,
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
  "section_name" : null,
  "attachments" : null,
  "section_id" : null,
  "attentions" : null,
  "show_identifier" : null,
  "categories" : null,
  "workload_schedule" : null,
  "estimated_workload" : null,
  "remaining_workload" : null,
  "actual_workload" : null,
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
FetchArchived `POST` `/products/{pkey}/ideas/fetcharchived` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchComment_notify_assignee `POST` `/products/{pkey}/ideas/fetchcomment_notify_assignee` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "id" : null,
    "assignee_id" : null,
    "assignee_name" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchCommon `POST` `/products/{pkey}/ideas/fetchcommon` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/products/{pkey}/ideas/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchDeleted `POST` `/products/{pkey}/ideas/fetchdeleted` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_relation_idea `POST` `/products/{pkey}/ideas/fetchidea_relation_idea` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assign `POST` `/products/{pkey}/ideas/fetchmy_assign` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_assignee_count `POST` `/products/{pkey}/ideas/fetchmy_assignee_count` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_attention `POST` `/products/{pkey}/ideas/fetchmy_attention` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_created `POST` `/products/{pkey}/ideas/fetchmy_created` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/products/{pkey}/ideas/fetchnormal` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNot_exsists_relation `POST` `/products/{pkey}/ideas/fetchnot_exsists_relation` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchPlan_relation_idea `POST` `/products/{pkey}/ideas/fetchplan_relation_idea` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_idea `POST` `/products/{pkey}/ideas/fetchrecent_idea` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchTest_case_relation `POST` `/products/{pkey}/ideas/fetchtest_case_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchTicket_relation_idea `POST` `/products/{pkey}/ideas/fetchticket_relation_idea` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchWork_item_relation_idea `POST` `/products/{pkey}/ideas/fetchwork_item_relation_idea` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_category_id_eq` - 类别标识
 * `n_category_name_eq` - 名称
 * `n_category_name_like` - 名称
 * `n_create_man_eq` - 建立人
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_plan_at_granularity_eq` - 计划时间周期单位
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_real_at_granularity_eq` - 计划时间周期单位
 * `n_section_id_eq` - 子产品标识
 * `n_show_identifier_like` - 编号
 * `n_state_eq` - 状态
 * `n_state_notin` - 状态
 * `n_suite_eq` - 模块
 * `n_title_like` - 标题




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_create_man_eq" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_plan_at_granularity_eq" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_real_at_granularity_eq" : null,
  "n_section_id_eq" : null,
  "n_show_identifier_like" : null,
  "n_state_eq" : null,
  "n_state_notin" : null,
  "n_suite_eq" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "title" : null,
    "state" : null,
    "priority" : null,
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
    "section_name" : null,
    "attachments" : null,
    "section_id" : null,
    "attentions" : null,
    "show_identifier" : null,
    "categories" : null,
    "workload_schedule" : null,
    "estimated_workload" : null,
    "remaining_workload" : null,
    "actual_workload" : null,
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
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/products/{pkey}/ideas/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
数据导出 `POST` `/products/{pkey}/ideas/exportdata/{param},/products/{pkey}/ideas/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`
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
数据导入 `POST` `/products/{pkey}/ideas/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
数据导入（返回错误excel） `POST` `/products/{pkey}/ideas/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
自定义表头导入（异步） `GET` `/products/{pkey}/ideas/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
数据打印 `GET` `/products/{pkey}/ideas/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`
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
实体报表 `POST` `/products/{pkey}/ideas/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `产品主键标识`

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
