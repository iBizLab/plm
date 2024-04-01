# 最近访问(Recent)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/recents` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `owner_id` - 所属数据标识
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `type` - 访问类型
 * `is_deleted` - 是否已删除
 * `recent_parent_name` - 访问父类名称
 * `recent_parent` - 访问父类
 * `show_identifier` - 编号
 * `recent_parent_identifier` - 访问父类编号
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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/recents/{key}` <i class="fa fa-key"></i>`READ`


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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/recents/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/recents/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `owner_id` - 所属数据标识
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `type` - 访问类型
 * `is_deleted` - 是否已删除
 * `recent_parent_name` - 访问父类名称
 * `recent_parent` - 访问父类
 * `show_identifier` - 编号
 * `recent_parent_identifier` - 访问父类编号
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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/recents/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `owner_id` - 所属数据标识
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `type` - 访问类型
 * `is_deleted` - 是否已删除
 * `recent_parent_name` - 访问父类名称
 * `recent_parent` - 访问父类
 * `show_identifier` - 编号
 * `recent_parent_identifier` - 访问父类编号
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


#### **Response**
```json
INT


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/recents/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `owner_id` - 所属数据标识
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `type` - 访问类型
 * `is_deleted` - 是否已删除
 * `recent_parent_name` - 访问父类名称
 * `recent_parent` - 访问父类
 * `show_identifier` - 编号
 * `recent_parent_identifier` - 访问父类编号
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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
My_charge_entry `POST` `/recents/{key}/my_charge_entry` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `owner_id` - 所属数据标识
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `type` - 访问类型
 * `is_deleted` - 是否已删除
 * `recent_parent_name` - 访问父类名称
 * `recent_parent` - 访问父类
 * `show_identifier` - 编号
 * `recent_parent_identifier` - 访问父类编号
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


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
My_created_entry `POST` `/recents/{key}/my_created_entry` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `owner_id` - 所属数据标识
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `type` - 访问类型
 * `is_deleted` - 是否已删除
 * `recent_parent_name` - 访问父类名称
 * `recent_parent` - 访问父类
 * `show_identifier` - 编号
 * `recent_parent_identifier` - 访问父类编号
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


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/recents/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `owner_id` - 所属数据标识
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `type` - 访问类型
 * `is_deleted` - 是否已删除
 * `recent_parent_name` - 访问父类名称
 * `recent_parent` - 访问父类
 * `show_identifier` - 编号
 * `recent_parent_identifier` - 访问父类编号
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


#### **Response**
```json
void

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchDefault `POST` `/recents/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_access `POST` `/recents/fetchrecent_access` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_access_logic `POST` `/recents/fetchrecent_access_logic` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_curproduct_ticket `POST` `/recents/fetchrecent_curproduct_ticket` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_curproject_work_item `POST` `/recents/fetchrecent_curproject_work_item` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_idea `POST` `/recents/fetchrecent_idea` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_page `POST` `/recents/fetchrecent_page` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_project `POST` `/recents/fetchrecent_project` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_test_case `POST` `/recents/fetchrecent_test_case` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_test_case_index `POST` `/recents/fetchrecent_test_case_index` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_ticket `POST` `/recents/fetchrecent_ticket` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_use `POST` `/recents/fetchrecent_use` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_work_item `POST` `/recents/fetchrecent_work_item` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_work_item_and_nobug `POST` `/recents/fetchrecent_work_item_and_nobug` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchRecent_work_item_bug `POST` `/recents/fetchrecent_work_item_bug` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_create_man_eq` - 建立人
 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_recent_parent_eq` - 访问父类
 * `n_show_identifier_like` - 编号




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



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


#### **Response**
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
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/recents/importtemplate`

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
数据导出 `POST` `/recents/exportdata/{param},/recents/exportdata/{param}/{key}`

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
数据导入 `POST` `/recents/importdata`

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
数据导入（返回错误excel） `POST` `/recents/importdata2`

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
自定义表头导入（异步） `GET` `/recents/asyncimportdata2`

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
数据打印 `GET` `/recents/printdata/{key}`

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
实体报表 `POST` `/recents/report`

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


