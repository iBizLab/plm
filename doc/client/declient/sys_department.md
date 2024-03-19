# 部门(Sys_department)




<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/sys_departments/checkkey`




<p class="panel-title"><b>Body</b></p>

 * `id` - Id
 * `department_name` - Department_name
 * `creator` - Creator
 * `create_time` - Create_time
 * `updater` - Updater
 * `update_time` - Update_time
 * `dc` - Dc
 * `department_number` - Department_number
 * `description` - Description
 * `short_name` - Short_name
 * `sort` - Sort
 * `business_category` - Business_category
 * `parent_unit_id` - Parent_unit_id
 * `parent_id` - Parent_id
 * `parent_unit_name` - Parent_unit_name
 * `dn` - Dn
 * `parent_name` - Parent_name
 * `organization_id` - Organization_id
 * `organization_name` - Organization_name
 * `organization_number` - Organization_number




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
}
```


#### **Response**
```json
UNKNOWN


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Create `POST` `/sys_departments`




<p class="panel-title"><b>Body</b></p>

 * `id` - Id
 * `department_name` - Department_name
 * `creator` - Creator
 * `create_time` - Create_time
 * `updater` - Updater
 * `update_time` - Update_time
 * `dc` - Dc
 * `department_number` - Department_number
 * `description` - Description
 * `short_name` - Short_name
 * `sort` - Sort
 * `business_category` - Business_category
 * `parent_unit_id` - Parent_unit_id
 * `parent_id` - Parent_id
 * `parent_unit_name` - Parent_unit_name
 * `dn` - Dn
 * `parent_name` - Parent_name
 * `organization_id` - Organization_id
 * `organization_name` - Organization_name
 * `organization_number` - Organization_number




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
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
Get `GET` `/sys_departments/{key}`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键





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
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/sys_departments/getdraft`




<p class="panel-title"><b>Body</b></p>

 * `id` - Id
 * `department_name` - Department_name
 * `creator` - Creator
 * `create_time` - Create_time
 * `updater` - Updater
 * `update_time` - Update_time
 * `dc` - Dc
 * `department_number` - Department_number
 * `description` - Description
 * `short_name` - Short_name
 * `sort` - Sort
 * `business_category` - Business_category
 * `parent_unit_id` - Parent_unit_id
 * `parent_id` - Parent_id
 * `parent_unit_name` - Parent_unit_name
 * `dn` - Dn
 * `parent_name` - Parent_name
 * `organization_id` - Organization_id
 * `organization_name` - Organization_name
 * `organization_number` - Organization_number




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
}
```


#### **Response**
```json

{
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/sys_departments/{key}`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键





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
Save `POST` `/sys_departments/{key}/save`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键



<p class="panel-title"><b>Body</b></p>

 * `id` - Id
 * `department_name` - Department_name
 * `creator` - Creator
 * `create_time` - Create_time
 * `updater` - Updater
 * `update_time` - Update_time
 * `dc` - Dc
 * `department_number` - Department_number
 * `description` - Description
 * `short_name` - Short_name
 * `sort` - Sort
 * `business_category` - Business_category
 * `parent_unit_id` - Parent_unit_id
 * `parent_id` - Parent_id
 * `parent_unit_name` - Parent_unit_name
 * `dn` - Dn
 * `parent_name` - Parent_name
 * `organization_id` - Organization_id
 * `organization_name` - Organization_name
 * `organization_number` - Organization_number




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
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
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
Update `PUT` `/sys_departments/{key}`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键



<p class="panel-title"><b>Body</b></p>

 * `id` - Id
 * `department_name` - Department_name
 * `creator` - Creator
 * `create_time` - Create_time
 * `updater` - Updater
 * `update_time` - Update_time
 * `dc` - Dc
 * `department_number` - Department_number
 * `description` - Description
 * `short_name` - Short_name
 * `sort` - Sort
 * `business_category` - Business_category
 * `parent_unit_id` - Parent_unit_id
 * `parent_id` - Parent_id
 * `parent_unit_name` - Parent_unit_name
 * `dn` - Dn
 * `parent_name` - Parent_name
 * `organization_id` - Organization_id
 * `organization_name` - Organization_name
 * `organization_number` - Organization_number




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
  "id" : null,
  "department_name" : null,
  "creator" : null,
  "create_time" : null,
  "updater" : null,
  "update_time" : null,
  "dc" : null,
  "department_number" : null,
  "description" : null,
  "short_name" : null,
  "sort" : null,
  "business_category" : null,
  "parent_unit_id" : null,
  "parent_id" : null,
  "parent_unit_name" : null,
  "dn" : null,
  "parent_name" : null,
  "organization_id" : null,
  "organization_name" : null,
  "organization_number" : null,
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
DEFAULT `POST` `/sys_departments/fetchdefault`




<p class="panel-title"><b>Body</b></p>

 * `n_department_name_like` - N_DEPARTMENT_NAME_LIKE
 * `n_id_eq` - N_ID_EQ




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_department_name_like" : null,
  "n_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "id" : null,
    "department_name" : null,
    "creator" : null,
    "create_time" : null,
    "updater" : null,
    "update_time" : null,
    "dc" : null,
    "department_number" : null,
    "description" : null,
    "short_name" : null,
    "sort" : null,
    "business_category" : null,
    "parent_unit_id" : null,
    "parent_id" : null,
    "parent_unit_name" : null,
    "dn" : null,
    "parent_name" : null,
    "organization_id" : null,
    "organization_name" : null,
    "organization_number" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


