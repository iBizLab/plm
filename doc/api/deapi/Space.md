# 空间(Space)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/spaces` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "visibility" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Get `GET` `/spaces/{key}` <i class="fa fa-key"></i>`READ`


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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Remove `DELETE` `/spaces/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/spaces/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Activate `POST` `/spaces/{key}/activate` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Add_space `POST` `/spaces/{key}/add_space` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Archive `POST` `/spaces/{key}/archive` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
CheckKey `POST` `/spaces/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "visibility" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Del_relation `POST` `/spaces/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Delete `POST` `/spaces/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Favorite `POST` `/spaces/{key}/favorite` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
GetDraft `GET` `/spaces/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "visibility" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Move_out_category `POST` `/spaces/{key}/move_out_category` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Other_re_space `POST` `/spaces/{key}/other_re_space` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Recover `POST` `/spaces/{key}/recover` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Save `POST` `/spaces/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
Un_favorite `POST` `/spaces/{key}/un_favorite` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 空间标识
 * `visibility` - 可见范围
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `is_favorite` - 是否星标
 * `categories` - 分类路径
 * `members` - 成员
 * `category_id` - 分类
 * `category_name` - 分类
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 空间名称
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
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "is_favorite" : null,
  "categories" : null,
  "members" : null,
  "category_id" : null,
  "category_name" : null,
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
FetchAdmin `POST` `/spaces/fetchadmin` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchArchived `POST` `/spaces/fetcharchived` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchCategory_space `POST` `/spaces/fetchcategory_space` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchDefault `POST` `/spaces/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchDeleted `POST` `/spaces/fetchdeleted` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchFavorite `POST` `/spaces/fetchfavorite` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchNo_category_space `POST` `/spaces/fetchno_category_space` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchNo_re_space `POST` `/spaces/fetchno_re_space` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchNormal `POST` `/spaces/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchOther_re_space `POST` `/spaces/fetchother_re_space` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
FetchUser `POST` `/spaces/fetchuser` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_category_id_eq` - 分类
 * `n_category_name_eq` - 分类
 * `n_category_name_like` - 分类
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 空间名称
 * `n_visibility_eq` - 可见范围




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_category_id_eq" : null,
  "n_category_name_eq" : null,
  "n_category_name_like" : null,
  "n_id_eq" : null,
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
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "is_favorite" : null,
    "categories" : null,
    "members" : null,
    "category_id" : null,
    "category_name" : null,
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
下载导入模板 `GET` `/spaces/importtemplate`

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
数据导出 `POST` `/spaces/exportdata/{param},/spaces/exportdata/{param}/{key}`

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
数据导入 `POST` `/spaces/importdata`

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
数据导入（返回错误excel） `POST` `/spaces/importdata2`

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
自定义表头导入（异步） `GET` `/spaces/asyncimportdata2`

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
数据打印 `GET` `/spaces/printdata/{key}`

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
实体报表 `POST` `/spaces/report`

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


