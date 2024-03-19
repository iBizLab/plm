# 页面(Article_page)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/article_pages` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/article_pages/{key}` <i class="fa fa-key"></i>`READ`


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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/article_pages/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/article_pages/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/article_pages/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Delete `POST` `/article_pages/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Favorite `POST` `/article_pages/{key}/favorite` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
GetDraft `GET` `/article_pages/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get_form_stencil `GET` `/article_pages/get_form_stencil` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Recover `POST` `/article_pages/{key}/recover` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Save `POST` `/article_pages/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Save_to_stencil `POST` `/article_pages/{key}/save_to_stencil` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Un_favorite `POST` `/article_pages/{key}/un_favorite` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
FetchDefault `POST` `/article_pages/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchHome_page `POST` `/article_pages/fetchhome_page` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchIs_deleted `POST` `/article_pages/fetchis_deleted` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_favorite_page `POST` `/article_pages/fetchmy_favorite_page` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNo_parent_page `POST` `/article_pages/fetchno_parent_page` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/article_pages/fetchnormal` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/article_pages/importtemplate`

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
数据导出 `POST` `/article_pages/exportdata/{param},/article_pages/exportdata/{param}/{key}`

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
数据导入 `POST` `/article_pages/importdata`

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
数据导入（返回错误excel） `POST` `/article_pages/importdata2`

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
自定义表头导入（异步） `GET` `/article_pages/asyncimportdata2`

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
数据打印 `GET` `/article_pages/printdata/{key}`

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
实体报表 `POST` `/article_pages/report`

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


### SPACE

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/spaces/{pkey}/article_pages` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/spaces/{pkey}/article_pages/{key}` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/spaces/{pkey}/article_pages/{key}` <i class="fa fa-key"></i>`DELETE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键
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
Update `PUT` `/spaces/{pkey}/article_pages/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/spaces/{pkey}/article_pages/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Delete `POST` `/spaces/{pkey}/article_pages/{key}/delete` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Favorite `POST` `/spaces/{pkey}/article_pages/{key}/favorite` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
GetDraft `GET` `/spaces/{pkey}/article_pages/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get_form_stencil `GET` `/spaces/{pkey}/article_pages/get_form_stencil` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "identifier" : null,
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Recover `POST` `/spaces/{pkey}/article_pages/{key}/recover` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Save `POST` `/spaces/{pkey}/article_pages/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Save_to_stencil `POST` `/spaces/{pkey}/article_pages/{key}/save_to_stencil` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
Un_favorite `POST` `/spaces/{pkey}/article_pages/{key}/un_favorite` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `identifier` - 编号
 * `format_type` - 正文格式
 * `sequence` - 序号
 * `content` - 正文
 * `type` - 类型
 * `is_favorite` - 是否星标
 * `is_leaf` - 是否叶子节点
 * `space_identifier` - 空间编号
 * `attachments` - 附件
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `attentions` - 关注
 * `show_identifier` - 编号
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 主题
 * `parent_id` - 父页面标识
 * `space_id` - 空间标识
 * `space_name` - 空间名称
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
  "format_type" : null,
  "sequence" : null,
  "content" : null,
  "type" : null,
  "is_favorite" : null,
  "is_leaf" : null,
  "space_identifier" : null,
  "attachments" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "attentions" : null,
  "show_identifier" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "parent_id" : null,
  "space_id" : null,
  "space_name" : null,
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
FetchDefault `POST` `/spaces/{pkey}/article_pages/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchHome_page `POST` `/spaces/{pkey}/article_pages/fetchhome_page` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchIs_deleted `POST` `/spaces/{pkey}/article_pages/fetchis_deleted` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchMy_favorite_page `POST` `/spaces/{pkey}/article_pages/fetchmy_favorite_page` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNo_parent_page `POST` `/spaces/{pkey}/article_pages/fetchno_parent_page` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/spaces/{pkey}/article_pages/fetchnormal` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 空间主键



<p class="panel-title"><b>Body</b></p>

 * `n_format_type_eq` - 正文格式
 * `n_id_eq` - 标识
 * `n_is_favorite_eq` - 是否星标
 * `n_name_like` - 主题
 * `n_parent_id_eq` - 父页面标识
 * `n_parent_id_isnull` - 父页面标识
 * `n_space_id_eq` - 空间标识
 * `n_space_name_eq` - 空间名称
 * `n_space_name_like` - 空间名称
 * `n_type_eq` - 类型




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_format_type_eq" : null,
  "n_id_eq" : null,
  "n_is_favorite_eq" : null,
  "n_name_like" : null,
  "n_parent_id_eq" : null,
  "n_parent_id_isnull" : null,
  "n_space_id_eq" : null,
  "n_space_name_eq" : null,
  "n_space_name_like" : null,
  "n_type_eq" : null,
}
```


#### **Response**
```json
[
  {
    "identifier" : null,
    "format_type" : null,
    "sequence" : null,
    "content" : null,
    "type" : null,
    "is_favorite" : null,
    "is_leaf" : null,
    "space_identifier" : null,
    "attachments" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "attentions" : null,
    "show_identifier" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "parent_id" : null,
    "space_id" : null,
    "space_name" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/spaces/{pkey}/article_pages/importtemplate`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `空间主键标识`

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
数据导出 `POST` `/spaces/{pkey}/article_pages/exportdata/{param},/spaces/{pkey}/article_pages/exportdata/{param}/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `空间主键标识`
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
数据导入 `POST` `/spaces/{pkey}/article_pages/importdata`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `空间主键标识`

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
数据导入（返回错误excel） `POST` `/spaces/{pkey}/article_pages/importdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `空间主键标识`

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
自定义表头导入（异步） `GET` `/spaces/{pkey}/article_pages/asyncimportdata2`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `空间主键标识`

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
数据打印 `GET` `/spaces/{pkey}/article_pages/printdata/{key}`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `空间主键标识`
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
实体报表 `POST` `/spaces/{pkey}/article_pages/report`

<p class="panel-title"><b>PathVariable</b></p>

* pkey - `空间主键标识`

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
