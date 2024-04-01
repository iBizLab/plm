# 人员(Sys_person)




<!-- panels:start -->
<!-- div:left-panel -->
CheckKey `POST` `/sys_people/checkkey`




<p class="panel-title"><b>Body</b></p>

 * `creator` - Creator
 * `updater` - Updater
 * `dc` - Dc
 * `display_name` - Display_name
 * `user_password` - User_password
 * `employee_number` - Employee_number
 * `employee_type` - Employee_type
 * `title` - Title
 * `mail` - Mail
 * `telephone_number` - Telephone_number
 * `mobile` - Mobile
 * `identification_number` - Identification_number
 * `postal_address` - Postal_address
 * `description` - Description
 * `mdepartment_name` - Mdepartment_name
 * `dn` - Dn
 * `mdepartment_id` - Mdepartment_id
 * `uid` - Uid
 * `create_time` - Create_time
 * `id` - Id
 * `update_time` - Update_time




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "create_time" : null,
  "id" : null,
  "update_time" : null,
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
Create `POST` `/sys_people`




<p class="panel-title"><b>Body</b></p>

 * `creator` - Creator
 * `updater` - Updater
 * `dc` - Dc
 * `display_name` - Display_name
 * `user_password` - User_password
 * `employee_number` - Employee_number
 * `employee_type` - Employee_type
 * `title` - Title
 * `mail` - Mail
 * `telephone_number` - Telephone_number
 * `mobile` - Mobile
 * `identification_number` - Identification_number
 * `postal_address` - Postal_address
 * `description` - Description
 * `mdepartment_name` - Mdepartment_name
 * `dn` - Dn
 * `mdepartment_id` - Mdepartment_id
 * `uid` - Uid
 * `create_time` - Create_time
 * `id` - Id
 * `update_time` - Update_time




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "create_time" : null,
  "id" : null,
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
Get `GET` `/sys_people/{key}`


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
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "create_time" : null,
  "id" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
GetDraft `GET` `/sys_people/getdraft`




<p class="panel-title"><b>Body</b></p>

 * `creator` - Creator
 * `updater` - Updater
 * `dc` - Dc
 * `display_name` - Display_name
 * `user_password` - User_password
 * `employee_number` - Employee_number
 * `employee_type` - Employee_type
 * `title` - Title
 * `mail` - Mail
 * `telephone_number` - Telephone_number
 * `mobile` - Mobile
 * `identification_number` - Identification_number
 * `postal_address` - Postal_address
 * `description` - Description
 * `mdepartment_name` - Mdepartment_name
 * `dn` - Dn
 * `mdepartment_id` - Mdepartment_id
 * `uid` - Uid
 * `create_time` - Create_time
 * `id` - Id
 * `update_time` - Update_time




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "create_time" : null,
  "id" : null,
  "update_time" : null,
}
```


#### **Response**
```json

{
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "create_time" : null,
  "id" : null,
  "update_time" : null,
}


```
<!-- tabs:end -->
<!-- panels:end -->

<!-- panels:start -->
<!-- div:left-panel -->
Remove `DELETE` `/sys_people/{key}`


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
Save `POST` `/sys_people/{key}/save`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键



<p class="panel-title"><b>Body</b></p>

 * `creator` - Creator
 * `updater` - Updater
 * `dc` - Dc
 * `display_name` - Display_name
 * `user_password` - User_password
 * `employee_number` - Employee_number
 * `employee_type` - Employee_type
 * `title` - Title
 * `mail` - Mail
 * `telephone_number` - Telephone_number
 * `mobile` - Mobile
 * `identification_number` - Identification_number
 * `postal_address` - Postal_address
 * `description` - Description
 * `mdepartment_name` - Mdepartment_name
 * `dn` - Dn
 * `mdepartment_id` - Mdepartment_id
 * `uid` - Uid
 * `create_time` - Create_time
 * `id` - Id
 * `update_time` - Update_time




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
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "create_time" : null,
  "id" : null,
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
Update `PUT` `/sys_people/{key}`


<p class="panel-title"><b>PathVariable</b></p>

 * `key` - 主键



<p class="panel-title"><b>Body</b></p>

 * `creator` - Creator
 * `updater` - Updater
 * `dc` - Dc
 * `display_name` - Display_name
 * `user_password` - User_password
 * `employee_number` - Employee_number
 * `employee_type` - Employee_type
 * `title` - Title
 * `mail` - Mail
 * `telephone_number` - Telephone_number
 * `mobile` - Mobile
 * `identification_number` - Identification_number
 * `postal_address` - Postal_address
 * `description` - Description
 * `mdepartment_name` - Mdepartment_name
 * `dn` - Dn
 * `mdepartment_id` - Mdepartment_id
 * `uid` - Uid
 * `create_time` - Create_time
 * `id` - Id
 * `update_time` - Update_time




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
  "creator" : null,
  "updater" : null,
  "dc" : null,
  "display_name" : null,
  "user_password" : null,
  "employee_number" : null,
  "employee_type" : null,
  "title" : null,
  "mail" : null,
  "telephone_number" : null,
  "mobile" : null,
  "identification_number" : null,
  "postal_address" : null,
  "description" : null,
  "mdepartment_name" : null,
  "dn" : null,
  "mdepartment_id" : null,
  "uid" : null,
  "create_time" : null,
  "id" : null,
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
DEFAULT `POST` `/sys_people/fetchdefault`




<p class="panel-title"><b>Body</b></p>

 * `n_dc_eq` - N_DC_EQ
 * `n_id_eq` - N_ID_EQ




<!-- div:right-panel -->
<!-- tabs:start -->

#### **Request**



```json
{
  "page" : 0,
  "size" : 20,
  "sort" : null,
  "n_dc_eq" : null,
  "n_id_eq" : null,
}
```


#### **Response**
```json
[
  {
    "creator" : null,
    "updater" : null,
    "dc" : null,
    "display_name" : null,
    "user_password" : null,
    "employee_number" : null,
    "employee_type" : null,
    "title" : null,
    "mail" : null,
    "telephone_number" : null,
    "mobile" : null,
    "identification_number" : null,
    "postal_address" : null,
    "description" : null,
    "mdepartment_name" : null,
    "dn" : null,
    "mdepartment_id" : null,
    "uid" : null,
    "create_time" : null,
    "id" : null,
    "update_time" : null,
  }
]

```
<!-- tabs:end -->
<!-- panels:end -->


