# 文件夹(Portfolio)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/portfolios` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
Get `GET` `/portfolios/{key}` <i class="fa fa-key"></i>`READ`


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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
Remove `DELETE` `/portfolios/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/portfolios/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
CheckKey `POST` `/portfolios/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
Delete_project_set `POST` `/portfolios/{key}/delete_project_set` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
Favorite `POST` `/portfolios/{key}/favorite` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
GetDraft `GET` `/portfolios/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
Recover_project_set `POST` `/portfolios/{key}/recover_project_set` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
Remove_from_project_set `POST` `/portfolios/remove_from_project_set` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
Save `POST` `/portfolios/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
Un_favorite `POST` `/portfolios/{key}/un_favorite` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `state` - 状态
 * `start_at` - 开始时间
 * `end_at` - 结束时间
 * `identifier` - 文件夹标识
 * `description` - 描述
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 项目集成员
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
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
  "state" : null,
  "start_at" : null,
  "end_at" : null,
  "identifier" : null,
  "description" : null,
  "is_deleted" : null,
  "is_favorite" : null,
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
FetchAdmin `POST` `/portfolios/fetchadmin` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 文件夹标识
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 名称
 * `n_state_eq` - 状态




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
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
}
```


#### **Response**
```json
[
  {
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "identifier" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
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
FetchChoose_project_portfolio `POST` `/portfolios/fetchchoose_project_portfolio` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 文件夹标识
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 名称
 * `n_state_eq` - 状态




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
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
}
```


#### **Response**
```json
[
  {
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "identifier" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
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
FetchDefault `POST` `/portfolios/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 文件夹标识
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 名称
 * `n_state_eq` - 状态




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
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
}
```


#### **Response**
```json
[
  {
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "identifier" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
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
FetchFavorite `POST` `/portfolios/fetchfavorite` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 文件夹标识
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 名称
 * `n_state_eq` - 状态




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
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
}
```


#### **Response**
```json
[
  {
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "identifier" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
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
FetchProject_set_deleted `POST` `/portfolios/fetchproject_set_deleted` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 文件夹标识
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 名称
 * `n_state_eq` - 状态




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
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
}
```


#### **Response**
```json
[
  {
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "identifier" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
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
FetchProject_set_going `POST` `/portfolios/fetchproject_set_going` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 文件夹标识
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 名称
 * `n_state_eq` - 状态




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
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
}
```


#### **Response**
```json
[
  {
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "identifier" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
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
FetchUser `POST` `/portfolios/fetchuser` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 文件夹标识
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 名称
 * `n_state_eq` - 状态




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
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
}
```


#### **Response**
```json
[
  {
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "identifier" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
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
FetchWork_project_portfolio `POST` `/portfolios/fetchwork_project_portfolio` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_identifier_like` - 文件夹标识
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 名称
 * `n_state_eq` - 状态




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
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_state_eq" : null,
}
```


#### **Response**
```json
[
  {
    "state" : null,
    "start_at" : null,
    "end_at" : null,
    "identifier" : null,
    "description" : null,
    "is_deleted" : null,
    "is_favorite" : null,
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
下载导入模板 `GET` `/portfolios/importtemplate`

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
数据导出 `POST` `/portfolios/exportdata/{param},/portfolios/exportdata/{param}/{key}`

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
数据导入 `POST` `/portfolios/importdata`

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
数据导入（返回错误excel） `POST` `/portfolios/importdata2`

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
自定义表头导入（异步） `GET` `/portfolios/asyncimportdata2`

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
数据打印 `GET` `/portfolios/printdata/{key}`

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
实体报表 `POST` `/portfolios/report`

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


