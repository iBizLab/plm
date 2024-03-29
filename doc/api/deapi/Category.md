# 类别(Category)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/categories` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `owner_id` - 所属数据标识
 * `sequence` - 序号
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `is_leaf` - 是否叶子节点
 * `categories` - 类别路径
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `pid` - 父标识
 * `section_id` - 分组标识
 * `section_name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/categories/{key}` <i class="fa fa-key"></i>`READ`


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
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/categories/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/categories/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `owner_id` - 所属数据标识
 * `sequence` - 序号
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `is_leaf` - 是否叶子节点
 * `categories` - 类别路径
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `pid` - 父标识
 * `section_id` - 分组标识
 * `section_name` - 名称
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
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/categories/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `owner_id` - 所属数据标识
 * `sequence` - 序号
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `is_leaf` - 是否叶子节点
 * `categories` - 类别路径
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `pid` - 父标识
 * `section_id` - 分组标识
 * `section_name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
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
Delete_child_category `POST` `/categories/{key}/delete_child_category` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `owner_id` - 所属数据标识
 * `sequence` - 序号
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `is_leaf` - 是否叶子节点
 * `categories` - 类别路径
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `pid` - 父标识
 * `section_id` - 分组标识
 * `section_name` - 名称
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
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
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
GetDraft `GET` `/categories/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `owner_id` - 所属数据标识
 * `sequence` - 序号
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `is_leaf` - 是否叶子节点
 * `categories` - 类别路径
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `pid` - 父标识
 * `section_id` - 分组标识
 * `section_name` - 名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Save `POST` `/categories/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `owner_id` - 所属数据标识
 * `sequence` - 序号
 * `owner_type` - 所属数据对象
 * `owner_subtype` - 所属对象子类型
 * `is_leaf` - 是否叶子节点
 * `categories` - 类别路径
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 名称
 * `pid` - 父标识
 * `section_id` - 分组标识
 * `section_name` - 名称
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
  "owner_id" : null,
  "sequence" : null,
  "owner_type" : null,
  "owner_subtype" : null,
  "is_leaf" : null,
  "categories" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "pid" : null,
  "section_id" : null,
  "section_name" : null,
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
FetchDefault `POST` `/categories/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_owner_type_eq` - 所属数据对象
 * `n_pid_eq` - 父标识
 * `n_pid_isnotnull` - 父标识
 * `n_pid_isnull` - 父标识
 * `n_section_id_eq` - 分组标识
 * `n_section_name_eq` - 名称
 * `n_section_name_like` - 名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_owner_type_eq" : null,
  "n_pid_eq" : null,
  "n_pid_isnotnull" : null,
  "n_pid_isnull" : null,
  "n_section_id_eq" : null,
  "n_section_name_eq" : null,
  "n_section_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "owner_id" : null,
    "sequence" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "is_leaf" : null,
    "categories" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "section_id" : null,
    "section_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNo_section `POST` `/categories/fetchno_section` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_owner_type_eq` - 所属数据对象
 * `n_pid_eq` - 父标识
 * `n_pid_isnotnull` - 父标识
 * `n_pid_isnull` - 父标识
 * `n_section_id_eq` - 分组标识
 * `n_section_name_eq` - 名称
 * `n_section_name_like` - 名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_owner_type_eq" : null,
  "n_pid_eq" : null,
  "n_pid_isnotnull" : null,
  "n_pid_isnull" : null,
  "n_section_id_eq" : null,
  "n_section_name_eq" : null,
  "n_section_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "owner_id" : null,
    "sequence" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "is_leaf" : null,
    "categories" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "section_id" : null,
    "section_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchProduct_idea_category `POST` `/categories/fetchproduct_idea_category` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_owner_type_eq` - 所属数据对象
 * `n_pid_eq` - 父标识
 * `n_pid_isnotnull` - 父标识
 * `n_pid_isnull` - 父标识
 * `n_section_id_eq` - 分组标识
 * `n_section_name_eq` - 名称
 * `n_section_name_like` - 名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_owner_type_eq" : null,
  "n_pid_eq" : null,
  "n_pid_isnotnull" : null,
  "n_pid_isnull" : null,
  "n_section_id_eq" : null,
  "n_section_name_eq" : null,
  "n_section_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "owner_id" : null,
    "sequence" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "is_leaf" : null,
    "categories" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "section_id" : null,
    "section_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchProduct_plan `POST` `/categories/fetchproduct_plan` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_owner_type_eq` - 所属数据对象
 * `n_pid_eq` - 父标识
 * `n_pid_isnotnull` - 父标识
 * `n_pid_isnull` - 父标识
 * `n_section_id_eq` - 分组标识
 * `n_section_name_eq` - 名称
 * `n_section_name_like` - 名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_owner_type_eq" : null,
  "n_pid_eq" : null,
  "n_pid_isnotnull" : null,
  "n_pid_isnull" : null,
  "n_section_id_eq" : null,
  "n_section_name_eq" : null,
  "n_section_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "owner_id" : null,
    "sequence" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "is_leaf" : null,
    "categories" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "section_id" : null,
    "section_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchSpace_category `POST` `/categories/fetchspace_category` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_owner_type_eq` - 所属数据对象
 * `n_pid_eq` - 父标识
 * `n_pid_isnotnull` - 父标识
 * `n_pid_isnull` - 父标识
 * `n_section_id_eq` - 分组标识
 * `n_section_name_eq` - 名称
 * `n_section_name_like` - 名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_owner_type_eq" : null,
  "n_pid_eq" : null,
  "n_pid_isnotnull" : null,
  "n_pid_isnull" : null,
  "n_section_id_eq" : null,
  "n_section_name_eq" : null,
  "n_section_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "owner_id" : null,
    "sequence" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "is_leaf" : null,
    "categories" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "section_id" : null,
    "section_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchSpace_category_top `POST` `/categories/fetchspace_category_top` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_id_eq` - 标识
 * `n_name_like` - 名称
 * `n_owner_id_eq` - 所属数据标识
 * `n_owner_subtype_eq` - 所属对象子类型
 * `n_owner_type_eq` - 所属数据对象
 * `n_pid_eq` - 父标识
 * `n_pid_isnotnull` - 父标识
 * `n_pid_isnull` - 父标识
 * `n_section_id_eq` - 分组标识
 * `n_section_name_eq` - 名称
 * `n_section_name_like` - 名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_id_eq" : null,
  "n_name_like" : null,
  "n_owner_id_eq" : null,
  "n_owner_subtype_eq" : null,
  "n_owner_type_eq" : null,
  "n_pid_eq" : null,
  "n_pid_isnotnull" : null,
  "n_pid_isnull" : null,
  "n_section_id_eq" : null,
  "n_section_name_eq" : null,
  "n_section_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "owner_id" : null,
    "sequence" : null,
    "owner_type" : null,
    "owner_subtype" : null,
    "is_leaf" : null,
    "categories" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "pid" : null,
    "section_id" : null,
    "section_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/categories/importtemplate`

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
数据导出 `POST` `/categories/exportdata/{param},/categories/exportdata/{param}/{key}`

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
数据导入 `POST` `/categories/importdata`

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
数据导入（返回错误excel） `POST` `/categories/importdata2`

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
自定义表头导入（异步） `GET` `/categories/asyncimportdata2`

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
数据打印 `GET` `/categories/printdata/{key}`

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
实体报表 `POST` `/categories/report`

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


