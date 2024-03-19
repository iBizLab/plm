# 工单(Ticket)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/tickets` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Get `GET` `/tickets/{key}` <i class="fa fa-key"></i>`READ`


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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Remove `DELETE` `/tickets/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/tickets/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Allocate_person `POST` `/tickets/{key}/allocate_person` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Archive `POST` `/tickets/{key}/archive` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
CheckKey `POST` `/tickets/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Choose_tag `POST` `/tickets/{key}/choose_tag` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Customer_choose_ticket `POST` `/tickets/customer_choose_ticket` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Customer_del_ticket `POST` `/tickets/{key}/customer_del_ticket` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Del_relation `POST` `/tickets/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Delete `POST` `/tickets/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
GetDraft `GET` `/tickets/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Get_attention `GET` `/tickets/{key}/get_attention` <i class="fa fa-key"></i>`READ`


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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Others_relation_ticket `POST` `/tickets/others_relation_ticket` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Product_ticket_re_counters `POST` `/tickets/{key}/product_ticket_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Recover `POST` `/tickets/{key}/recover` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Save `POST` `/tickets/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
FetchArchived `POST` `/tickets/fetcharchived` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchComment_notify_assignee `POST` `/tickets/fetchcomment_notify_assignee` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "id" : null,
    "assignee_name" : null,
    "assignee_id" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchCommon `POST` `/tickets/fetchcommon` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchCustomer_notre_ticket `POST` `/tickets/fetchcustomer_notre_ticket` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchCustomer_relation_ticket `POST` `/tickets/fetchcustomer_relation_ticket` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchDefault `POST` `/tickets/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchDeleted `POST` `/tickets/fetchdeleted` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchIdea_relation_ticket `POST` `/tickets/fetchidea_relation_ticket` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchMy_assign `POST` `/tickets/fetchmy_assign` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchMy_assignee_count `POST` `/tickets/fetchmy_assignee_count` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchMy_attention `POST` `/tickets/fetchmy_attention` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchMy_created `POST` `/tickets/fetchmy_created` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchNormal `POST` `/tickets/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchNot_exsists_relation `POST` `/tickets/fetchnot_exsists_relation` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchRecent_ticket `POST` `/tickets/fetchrecent_ticket` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchTicket_re_product_tag `POST` `/tickets/fetchticket_re_product_tag` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchTicket_relation_ticket `POST` `/tickets/fetchticket_relation_ticket` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchWork_item_relation_ticket `POST` `/tickets/fetchwork_item_relation_ticket` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
下载导入模板 `GET` `/tickets/importtemplate`

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
数据导出 `POST` `/tickets/exportdata/{param},/tickets/exportdata/{param}/{key}`

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
数据导入 `POST` `/tickets/importdata`

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
数据导入（返回错误excel） `POST` `/tickets/importdata2`

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
自定义表头导入（异步） `GET` `/tickets/asyncimportdata2`

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
数据打印 `GET` `/tickets/printdata/{key}`

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
实体报表 `POST` `/tickets/report`

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
Create `POST` `/products/{pkey}/tickets` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Get `GET` `/products/{pkey}/tickets/{key}` <i class="fa fa-key"></i>`READ`


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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Remove `DELETE` `/products/{pkey}/tickets/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/products/{pkey}/tickets/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Allocate_person `POST` `/products/{pkey}/tickets/{key}/allocate_person` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Archive `POST` `/products/{pkey}/tickets/{key}/archive` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
CheckKey `POST` `/products/{pkey}/tickets/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Choose_tag `POST` `/products/{pkey}/tickets/{key}/choose_tag` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Customer_choose_ticket `POST` `/products/{pkey}/tickets/customer_choose_ticket` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Customer_del_ticket `POST` `/products/{pkey}/tickets/{key}/customer_del_ticket` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Del_relation `POST` `/products/{pkey}/tickets/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Delete `POST` `/products/{pkey}/tickets/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
GetDraft `GET` `/products/{pkey}/tickets/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Get_attention `GET` `/products/{pkey}/tickets/{key}/get_attention` <i class="fa fa-key"></i>`READ`


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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Others_relation_ticket `POST` `/products/{pkey}/tickets/others_relation_ticket` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Product_ticket_re_counters `POST` `/products/{pkey}/tickets/{key}/product_ticket_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Recover `POST` `/products/{pkey}/tickets/{key}/recover` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
Save `POST` `/products/{pkey}/tickets/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `title` - 标题
 * `state` - 状态
 * `type` - 类型
 * `solution` - 解决方案
 * `priority` - 优先级
 * `channel` - 渠道
 * `description` - 描述
 * `submitted_at` - 提交时间
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `estimated_at` - 预计时间
 * `assignee_name` - 负责人
 * `tags` - 标签
 * `assignee_id` - 负责人标识
 * `submitter_id` - 提交人标识
 * `submitter_name` - 提交人
 * `attachments` - 附件
 * `show_identifier` - 编号
 * `product_identifier` - 产品标识
 * `attentions` - 关注
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `customer_id` - 客户标识
 * `customer_name` - 客户
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
  "type" : null,
  "solution" : null,
  "priority" : null,
  "channel" : null,
  "description" : null,
  "submitted_at" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "estimated_at" : null,
  "assignee_name" : null,
  "tags" : null,
  "assignee_id" : null,
  "submitter_id" : null,
  "submitter_name" : null,
  "attachments" : null,
  "show_identifier" : null,
  "product_identifier" : null,
  "attentions" : null,
  "create_man" : null,
  "create_time" : null,
  "customer_id" : null,
  "customer_name" : null,
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
FetchArchived `POST` `/products/{pkey}/tickets/fetcharchived` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchComment_notify_assignee `POST` `/products/{pkey}/tickets/fetchcomment_notify_assignee` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
  "n_title_like" : null,
}
```


#### **Response**
```json
[
  {
    "id" : null,
    "assignee_name" : null,
    "assignee_id" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchCommon `POST` `/products/{pkey}/tickets/fetchcommon` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchCustomer_notre_ticket `POST` `/products/{pkey}/tickets/fetchcustomer_notre_ticket` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchCustomer_relation_ticket `POST` `/products/{pkey}/tickets/fetchcustomer_relation_ticket` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchDefault `POST` `/products/{pkey}/tickets/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchDeleted `POST` `/products/{pkey}/tickets/fetchdeleted` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchIdea_relation_ticket `POST` `/products/{pkey}/tickets/fetchidea_relation_ticket` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchMy_assign `POST` `/products/{pkey}/tickets/fetchmy_assign` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchMy_assignee_count `POST` `/products/{pkey}/tickets/fetchmy_assignee_count` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchMy_attention `POST` `/products/{pkey}/tickets/fetchmy_attention` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchMy_created `POST` `/products/{pkey}/tickets/fetchmy_created` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchNormal `POST` `/products/{pkey}/tickets/fetchnormal` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchNot_exsists_relation `POST` `/products/{pkey}/tickets/fetchnot_exsists_relation` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchRecent_ticket `POST` `/products/{pkey}/tickets/fetchrecent_ticket` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchTicket_re_product_tag `POST` `/products/{pkey}/tickets/fetchticket_re_product_tag` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchTicket_relation_ticket `POST` `/products/{pkey}/tickets/fetchticket_relation_ticket` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
FetchWork_item_relation_ticket `POST` `/products/{pkey}/tickets/fetchwork_item_relation_ticket` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_create_man_eq` - 建立人
 * `n_customer_id_eq` - 客户标识
 * `n_customer_name_eq` - 客户
 * `n_customer_name_like` - 客户
 * `n_identifier_like` - 编号
 * `n_id_eq` - 标识
 * `n_id_noteq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_name_like` - 名称
 * `n_priority_eq` - 优先级
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 所属产品
 * `n_product_name_like` - 所属产品
 * `n_show_identifier_like` - 编号
 * `n_solution_eq` - 解决方案
 * `n_state_eq` - 状态
 * `n_state_noteq` - 状态
 * `n_state_notin` - 状态
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
  "n_create_man_eq" : null,
  "n_customer_id_eq" : null,
  "n_customer_name_eq" : null,
  "n_customer_name_like" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_id_noteq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_name_like" : null,
  "n_priority_eq" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
  "n_show_identifier_like" : null,
  "n_solution_eq" : null,
  "n_state_eq" : null,
  "n_state_noteq" : null,
  "n_state_notin" : null,
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
    "type" : null,
    "solution" : null,
    "priority" : null,
    "channel" : null,
    "description" : null,
    "submitted_at" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "estimated_at" : null,
    "assignee_name" : null,
    "tags" : null,
    "assignee_id" : null,
    "submitter_id" : null,
    "submitter_name" : null,
    "attachments" : null,
    "show_identifier" : null,
    "product_identifier" : null,
    "attentions" : null,
    "create_man" : null,
    "create_time" : null,
    "customer_id" : null,
    "customer_name" : null,
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
下载导入模板 `GET` `/products/{pkey}/tickets/importtemplate`

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
数据导出 `POST` `/products/{pkey}/tickets/exportdata/{param},/products/{pkey}/tickets/exportdata/{param}/{key}`

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
数据导入 `POST` `/products/{pkey}/tickets/importdata`

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
数据导入（返回错误excel） `POST` `/products/{pkey}/tickets/importdata2`

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
自定义表头导入（异步） `GET` `/products/{pkey}/tickets/asyncimportdata2`

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
数据打印 `GET` `/products/{pkey}/tickets/printdata/{key}`

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
实体报表 `POST` `/products/{pkey}/tickets/report`

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
