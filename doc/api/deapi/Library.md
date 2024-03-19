# 测试库(Library)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/libraries` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
  "identifier" : null,
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
Get `GET` `/libraries/{key}` <i class="fa fa-key"></i>`READ`


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
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
Remove `DELETE` `/libraries/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/libraries/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
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
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
  "identifier" : null,
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
Activate `POST` `/libraries/{key}/activate` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
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
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
Archive `POST` `/libraries/{key}/archive` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
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
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
CheckKey `POST` `/libraries/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
Delete `POST` `/libraries/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
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
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
Favorite `POST` `/libraries/{key}/favorite` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
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
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
GetDraft `GET` `/libraries/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
  "identifier" : null,
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
Recover `POST` `/libraries/{key}/recover` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
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
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
Save `POST` `/libraries/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
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
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
Un_favorite `POST` `/libraries/{key}/un_favorite` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 测试库标识
 * `visibility` - 可见范围
 * `color` - 主题色
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `members` - 成员
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 测试库名称
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
  "visibility" : null,
  "color" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "members" : null,
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
FetchAdmin `POST` `/libraries/fetchadmin` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 测试库名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "visibility" : null,
    "color" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "members" : null,
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
FetchArchived `POST` `/libraries/fetcharchived` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 测试库名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "visibility" : null,
    "color" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "members" : null,
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
FetchDefault `POST` `/libraries/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 测试库名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "visibility" : null,
    "color" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "members" : null,
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
FetchDeleted `POST` `/libraries/fetchdeleted` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 测试库名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "visibility" : null,
    "color" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "members" : null,
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
FetchFavorite `POST` `/libraries/fetchfavorite` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 测试库名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "visibility" : null,
    "color" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "members" : null,
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
FetchNormal `POST` `/libraries/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 测试库名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "visibility" : null,
    "color" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "members" : null,
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
FetchProject_relation_library `POST` `/libraries/fetchproject_relation_library` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 测试库名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "visibility" : null,
    "color" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "members" : null,
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
FetchUser `POST` `/libraries/fetchuser` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_is_archived_eq` - 是否已归档
 * `n_is_deleted_eq` - 是否已删除
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 测试库名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_is_archived_eq" : null,
  "n_is_deleted_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_visibility_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "visibility" : null,
    "color" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "members" : null,
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
下载导入模板 `GET` `/libraries/importtemplate`

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
数据导出 `POST` `/libraries/exportdata/{param},/libraries/exportdata/{param}/{key}`

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
数据导入 `POST` `/libraries/importdata`

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
数据导入（返回错误excel） `POST` `/libraries/importdata2`

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
自定义表头导入（异步） `GET` `/libraries/asyncimportdata2`

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
数据打印 `GET` `/libraries/printdata/{key}`

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
实体报表 `POST` `/libraries/report`

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


