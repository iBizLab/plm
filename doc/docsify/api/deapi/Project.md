# 项目(Project)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/projects` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/projects/{key}` <i class="fa fa-key"></i>`READ`


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
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/projects/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/projects/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
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
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Activate `POST` `/projects/{key}/activate` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
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
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
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
Archive `POST` `/projects/{key}/archive` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
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
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
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
CheckKey `POST` `/projects/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
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
Delete `POST` `/projects/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
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
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
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
Favorite `POST` `/projects/{key}/favorite` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
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
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
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
GetDraft `GET` `/projects/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get_major_data `GET` `/projects/{key}/get_major_data` <i class="fa fa-key"></i>`READ`


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
  "id" : null,
  "type" : null,
  "state" : null,
  "visibility" : null,
  "name" : null,
  "identifier" : null,
  "color" : null,
  "create_man" : null,
  "update_man" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "is_favorite" : null,
  "end_at" : null,
  "start_at" : null,
  "update_time" : null,
  "create_time" : null,
  "is_deleted" : null,
  "is_local_configure" : null,
  "is_archived" : null,
  "description" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Recover `POST` `/projects/{key}/recover` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
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
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
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
Remove_from_project_set `POST` `/projects/remove_from_project_set` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/projects/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
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
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
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
Un_favorite `POST` `/projects/{key}/un_favorite` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `visibility` - 可见范围
 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `color` - 主题色
 * `type` - 类型
 * `identifier` - 项目标识
 * `is_archived` - 是否已归档
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `is_local_configure` - 是否本地配置
 * `members` - 成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 项目名称
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
  "visibility" : null,
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "color" : null,
  "type" : null,
  "identifier" : null,
  "is_archived" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "is_local_configure" : null,
  "members" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
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
FetchAdmin `POST` `/projects/fetchadmin` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchArchived `POST` `/projects/fetcharchived` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchChoose_project `POST` `/projects/fetchchoose_project` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchCurrent `POST` `/projects/fetchcurrent` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/projects/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDeleted `POST` `/projects/fetchdeleted` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchFavorite `POST` `/projects/fetchfavorite` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/projects/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchSame_type `POST` `/projects/fetchsame_type` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchUnder_project_portfolio `POST` `/projects/fetchunder_project_portfolio` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchUser `POST` `/projects/fetchuser` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchWork_project `POST` `/projects/fetchwork_project` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 项目标识
 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 项目名称
 * `n_state_eq` - 状态
 * `n_type_eq` - 类型
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_identifier_like" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
  "n_type_eq" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "visibility" : null,
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "color" : null,
    "type" : null,
    "identifier" : null,
    "is_archived" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "is_local_configure" : null,
    "members" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/projects/importtemplate`

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
数据导出 `POST` `/projects/exportdata/{param},/projects/exportdata/{param}/{key}`

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
数据导入 `POST` `/projects/importdata`

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
数据导入（返回错误excel） `POST` `/projects/importdata2`

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
自定义表头导入（异步） `GET` `/projects/asyncimportdata2`

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
数据打印 `GET` `/projects/printdata/{key}`

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
实体报表 `POST` `/projects/report`

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


