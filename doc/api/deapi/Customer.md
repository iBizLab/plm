# 客户(Customer)




<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/customers` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/customers/{key}` <i class="fa fa-key"></i>`READ`


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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/customers/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/customers/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Add_categories `POST` `/customers/{key}/add_categories` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
CheckKey `POST` `/customers/checkkey` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
Del_relation `POST` `/customers/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
GetDraft `GET` `/customers/getdraft` <i class="fa fa-key"></i>`CREATE`




<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Get_attention `GET` `/customers/{key}/get_attention` <i class="fa fa-key"></i>`READ`


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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Others_relation_customer `POST` `/customers/others_relation_customer` <i class="fa fa-key"></i>`NONE`




<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Product_customer_re_counters `POST` `/customers/{key}/product_customer_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
Save `POST` `/customers/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
FetchComment_notify_assignee `POST` `/customers/fetchcomment_notify_assignee` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
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
FetchDefault `POST` `/customers/fetchdefault` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_notre_customer `POST` `/customers/fetchidea_notre_customer` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_relation_customer `POST` `/customers/fetchidea_relation_customer` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/customers/fetchnormal` <i class="fa fa-key"></i>`READ`




<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/customers/importtemplate`

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
数据导出 `POST` `/customers/exportdata/{param},/customers/exportdata/{param}/{key}`

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
数据导入 `POST` `/customers/importdata`

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
数据导入（返回错误excel） `POST` `/customers/importdata2`

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
自定义表头导入（异步） `GET` `/customers/asyncimportdata2`

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
数据打印 `GET` `/customers/printdata/{key}`

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
实体报表 `POST` `/customers/report`

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
Create `POST` `/products/{pkey}/customers` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get `GET` `/products/{pkey}/customers/{key}` <i class="fa fa-key"></i>`READ`


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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/products/{pkey}/customers/{key}` <i class="fa fa-key"></i>`DELETE`


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
Update `PUT` `/products/{pkey}/customers/{key}` <i class="fa fa-key"></i>`UPDATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Add_categories `POST` `/products/{pkey}/customers/{key}/add_categories` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
CheckKey `POST` `/products/{pkey}/customers/checkkey` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
Del_relation `POST` `/products/{pkey}/customers/{key}/del_relation` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
GetDraft `GET` `/products/{pkey}/customers/getdraft` <i class="fa fa-key"></i>`CREATE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Get_attention `GET` `/products/{pkey}/customers/{key}/get_attention` <i class="fa fa-key"></i>`READ`


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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Others_relation_customer `POST` `/products/{pkey}/customers/others_relation_customer` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
 * `update_man` - 更新人
 * `update_time` - 更新时间




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
  "update_man" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
Product_customer_re_counters `POST` `/products/{pkey}/customers/{key}/product_customer_re_counters` <i class="fa fa-key"></i>`NONE`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
Save `POST` `/products/{pkey}/customers/{key}/save` 


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键
 * `key` - 标识



<p class="panel-title"><b>Body</b></p>

 * `scale` - 规模
 * `description` - 描述
 * `is_archived` - 是否已归档
 * `is_deleted` - 是否已删除
 * `logo` - 品牌标识
 * `grade_id` - 等级
 * `industry_id` - 行业
 * `categories` - 类别
 * `categories_name` - 类别
 * `product_name` - 产品名称
 * `assignee_name` - 负责人
 * `assignee_id` - 负责人标识
 * `attentions` - 关注
 * `ticket_total` - 工单总数
 * `ticket_finish` - 已完成工单数
 * `create_man` - 建立人
 * `create_time` - 建立时间
 * `id` - 标识
 * `name` - 客户名称
 * `product_id` - 产品标识
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
  "scale" : null,
  "description" : null,
  "is_archived" : null,
  "is_deleted" : null,
  "logo" : null,
  "grade_id" : null,
  "industry_id" : null,
  "categories" : null,
  "categories_name" : null,
  "product_name" : null,
  "assignee_name" : null,
  "assignee_id" : null,
  "attentions" : null,
  "ticket_total" : null,
  "ticket_finish" : null,
  "create_man" : null,
  "create_time" : null,
  "id" : null,
  "name" : null,
  "product_id" : null,
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
FetchComment_notify_assignee `POST` `/products/{pkey}/customers/fetchcomment_notify_assignee` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
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
FetchDefault `POST` `/products/{pkey}/customers/fetchdefault` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_notre_customer `POST` `/products/{pkey}/customers/fetchidea_notre_customer` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchIdea_relation_customer `POST` `/products/{pkey}/customers/fetchidea_relation_customer` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->
<!-- panels:start -->
<!-- div:left-panel -->
FetchNormal `POST` `/products/{pkey}/customers/fetchnormal` <i class="fa fa-key"></i>`READ`


<p class="panel-title"><b>PathVariable</b></p>

 * `pkey` - 产品主键



<p class="panel-title"><b>Body</b></p>

 * `n_assignee_id_eq` - 负责人标识
 * `n_categorys_isnull` - 类别
 * `n_categorys_like` - 类别
 * `n_grade_id_eq` - 等级
 * `n_id_eq` - 标识
 * `n_industry_id_eq` - 行业
 * `n_name_like` - 客户名称
 * `n_product_id_eq` - 产品标识
 * `n_product_name_eq` - 产品名称
 * `n_product_name_like` - 产品名称




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_assignee_id_eq" : null,
  "n_categorys_isnull" : null,
  "n_categorys_like" : null,
  "n_grade_id_eq" : null,
  "n_id_eq" : null,
  "n_industry_id_eq" : null,
  "n_name_like" : null,
  "n_product_id_eq" : null,
  "n_product_name_eq" : null,
  "n_product_name_like" : null,
}
```


#### **Response**
```json
[
  {
    "scale" : null,
    "description" : null,
    "is_archived" : null,
    "is_deleted" : null,
    "logo" : null,
    "grade_id" : null,
    "industry_id" : null,
    "categories" : null,
    "categories_name" : null,
    "product_name" : null,
    "assignee_name" : null,
    "assignee_id" : null,
    "attentions" : null,
    "ticket_total" : null,
    "ticket_finish" : null,
    "create_man" : null,
    "create_time" : null,
    "id" : null,
    "name" : null,
    "product_id" : null,
    "update_man" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


<!-- panels:start -->
<!-- div:left-panel -->
下载导入模板 `GET` `/products/{pkey}/customers/importtemplate`

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
数据导出 `POST` `/products/{pkey}/customers/exportdata/{param},/products/{pkey}/customers/exportdata/{param}/{key}`

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
数据导入 `POST` `/products/{pkey}/customers/importdata`

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
数据导入（返回错误excel） `POST` `/products/{pkey}/customers/importdata2`

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
自定义表头导入（异步） `GET` `/products/{pkey}/customers/asyncimportdata2`

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
数据打印 `GET` `/products/{pkey}/customers/printdata/{key}`

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
实体报表 `POST` `/products/{pkey}/customers/report`

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
