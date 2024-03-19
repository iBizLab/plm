# MYSQL5 <!-- {docsify-ignore-all} -->

## [活动(ACTIVITIY)](module/Base/Activitiy.md) :id=Activitiy

#### 数据查询(DEFAULT) :id=Activitiy-Default
```sql
SELECT
t1.`AUDITTYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IPADDRESS`,
t1.`NAME`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`OPPERSONID`,
t1.`OPPERSONNAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ACTIVITIY` t1 

```

#### 默认（全部数据）(VIEW) :id=Activitiy-View
```sql
SELECT
t1.`AUDITINFO`,
t1.`AUDITTYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IPADDRESS`,
t1.`NAME`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`OPPERSONID`,
t1.`OPPERSONNAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ACTIVITIY` t1 

```


## [页面(PAGE)](module/Wiki/Article_page.md) :id=Article_page

#### 数据查询(DEFAULT) :id=Article_page-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```

#### 主页(home_page) :id=Article_page-Home_page
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`ID` = #{ctx.webcontext.n_space_id_eq} )
```

#### 已删除页面(is_deleted) :id=Article_page-Is_deleted
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 我的收藏(my_favorite_page) :id=Article_page-My_favorite_page
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 无父页面(no_parent_page) :id=Article_page-No_parent_page
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`PARENT_ID` IS NULL  AND  t1.`ID` <> #{ctx.webcontext.n_space_id_eq}  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 正常(normal) :id=Article_page-Normal
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 默认（全部数据）(VIEW) :id=Article_page-View
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```


## [附件(ATTACHMENT)](module/Base/Attachment.md) :id=Attachment

#### 数据查询(DEFAULT) :id=Attachment-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

```

#### 项目下的交付物(project_deliverable) :id=Attachment-Project_deliverable
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t2.TITLE as `WORK_ITEM_TITLE`,
t2.IDENTIFIER as `WORK_ITEM_IDENTIFIER`
FROM `ATTACHMENT` `t1`, `WORK_ITEM` `t2`
WHERE t1.OWNER_ID = t2.ID and t1.OWNER_TYPE = 'DELIVERABLE'
and t2.is_archived = 0 and t2.is_deleted = 0
and exists(select 1 from `project` t3 where t3.id = t2.project_id and t3.id = #{ctx.webcontext.project_id})
```

#### 默认（全部数据）(VIEW) :id=Attachment-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

```

#### 工作项交付物(work_item_deliverable) :id=Attachment-Work_item_deliverable
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'WORK_ITEM' )
```


## [关注(ATTENTION)](module/Base/Attention.md) :id=Attention

#### 通过主数据标识查询通知对象(attention_by_ownerid) :id=Attention-Attention_by_ownerid
```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.id}  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`OWNER_ID` = #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`TYPE` IN ('30','40') )
```

#### 评论提醒(comment_attention) :id=Attention-Comment_attention
```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( exists(select 1 from `comment` t2 where t1.owner_id = t2.PRINCIPAL_ID and t2.id=#{ctx.webcontext.id})  AND  t1.`TYPE` = '40' )
```

#### 数据查询(DEFAULT) :id=Attention-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `ATTENTION` t1 

```

#### 通知对象(notify) :id=Attention-Notify
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.principal_id} )
```

#### 默认（全部数据）(VIEW) :id=Attention-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `ATTENTION` t1 

```


## [看板(BOARD)](module/ProjMgmt/Board.md) :id=Board

#### 数据查询(DEFAULT) :id=Board-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BOARD` t1 

```

#### 默认（全部数据）(VIEW) :id=Board-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BOARD` t1 

```


## [用例执行历史(CASE_HISTORY)](module/TestMgmt/Case_history.md) :id=Case_history

#### 数据查询(DEFAULT) :id=Case_history-Default
```sql
SELECT
t1.`CASE_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CASE_HISTORY` t1 

```

#### 默认（全部数据）(VIEW) :id=Case_history-View
```sql
SELECT
t1.`CASE_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CASE_HISTORY` t1 

```


## [类别(CATEGORY)](module/Base/Category.md) :id=Category

#### 数据查询(DEFAULT) :id=Category-Default
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

```

#### 无分组的类别（且父标识不为空）(no_section) :id=Category-No_section
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`SECTION_ID` IS NULL  AND  t1.`PID` IS NULL )
```

#### 主模块(product_idea_category) :id=Category-Product_idea_category
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`PID` IS NULL )
```

#### 排期计划类别(product_plan) :id=Category-Product_plan
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'product_plan'  AND  <choose><when test="ctx.webcontext.product !=null ">  t1.`OWNER_ID` = #{ctx.webcontext.product}  </when><otherwise>1=1</otherwise></choose> )
```

#### 空间目录(space_category) :id=Category-Space_category
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'space'  AND  t1.`OWNER_SUBTYPE` = 'space' )
```

#### 空间目录（顶级）(space_category_top) :id=Category-Space_category_top
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'space'  AND  t1.`OWNER_SUBTYPE` = 'space'  AND  t1.`PID` IS NULL )
```

#### 默认（全部数据）(VIEW) :id=Category-View
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

```


## [工单渠道(CHANNEL)](module/ProdMgmt/Channel.md) :id=Channel

#### 数据查询(DEFAULT) :id=Channel-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CHANNEL` t1 

```

#### 默认（全部数据）(VIEW) :id=Channel-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CHANNEL` t1 

```


## [评论(COMMENT)](module/Base/Comment.md) :id=Comment

#### 数据查询(DEFAULT) :id=Comment-Default
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t11.`CONTENT` AS `PCONTENT`,
t11.`CREATE_MAN` AS `PCREATE_MAN`,
t1.`PID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `COMMENT` t1 
LEFT JOIN `COMMENT` t11 ON t1.`PID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Comment-View
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t11.`CONTENT` AS `PCONTENT`,
t11.`CREATE_MAN` AS `PCREATE_MAN`,
t1.`PID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `COMMENT` t1 
LEFT JOIN `COMMENT` t11 ON t1.`PID` = t11.`ID` 

```


## [客户(CUSTOMER)](module/ProdMgmt/Customer.md) :id=Customer

#### 评论通知负责人(comment_notify_assignee) :id=Customer-Comment_notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `CUSTOMER` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}) )
```

#### 数据查询(DEFAULT) :id=Customer-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GRADE_ID`,
t1.`ID`,
t1.`INDUSTRY_ID`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LOGO`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```

#### 需求未关联的客户(idea_notre_customer) :id=Customer-Idea_notre_customer
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GRADE_ID`,
t1.`ID`,
t1.`INDUSTRY_ID`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LOGO`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`TARGET_TYPE` = 'customer'  AND  t21.`PRINCIPAL_TYPE` = 'idea'  AND  t21.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0 )
```

#### 需求关联客户(idea_relation_customer) :id=Customer-Idea_relation_customer
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GRADE_ID`,
t1.`ID`,
t1.`INDUSTRY_ID`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LOGO`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`TARGET_TYPE` = 'customer'  AND  t21.`PRINCIPAL_TYPE` = 'idea'  AND  t21.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` = 0 )
```

#### 正常状态(normal) :id=Customer-Normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GRADE_ID`,
t1.`ID`,
t1.`INDUSTRY_ID`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LOGO`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Customer-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GRADE_ID`,
t1.`ID`,
t1.`INDUSTRY_ID`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LOGO`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```


## [交付物(DELIVERABLE)](module/Base/Deliverable.md) :id=Deliverable

#### 数据查询(DEFAULT) :id=Deliverable-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

```

#### 项目下的交付物(project_deliverable) :id=Deliverable-Project_deliverable
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t2.TITLE as `WORK_ITEM_TITLE`,
t2.IDENTIFIER as `WORK_ITEM_IDENTIFIER`
FROM `ATTACHMENT` `t1`, `WORK_ITEM` `t2`
WHERE t1.OWNER_ID = t2.ID and t1.OWNER_TYPE = 'WORK_ITEM' and t1.OWNER_SUBTYPE = 'DELIVERABLE'
and t2.is_archived = 0 and t2.is_deleted = 0
and exists(select 1 from `project` t3 where t3.id = t2.project_id and t3.id = #{ctx.webcontext.project_id})
```

#### 默认（全部数据）(VIEW) :id=Deliverable-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

```


## [动态数据看板(DYNADASHBOARD)](module/Base/Dynadashboard.md) :id=Dynadashboard

#### 数据查询(DEFAULT) :id=Dynadashboard-Default
```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`MODELID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNADASHBOARD` t1 

```

#### 默认（全部数据）(VIEW) :id=Dynadashboard-View
```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`MODEL`,
t1.`MODELID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNADASHBOARD` t1 

```


## [看板栏(ENTRY)](module/ProjMgmt/Entry.md) :id=Entry

#### 数据查询(DEFAULT) :id=Entry-Default
```sql
SELECT
t1.`BOARD_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SPLIT`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`SHOWORDER`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ENTRY` t1 

```

#### 默认（全部数据）(VIEW) :id=Entry-View
```sql
SELECT
t1.`BOARD_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SPLIT`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`SHOWORDER`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ENTRY` t1 

```


## [扩展日志(EXTEND_LOG)](module/Base/Extend_log.md) :id=Extend_log

#### 数据查询(DEFAULT) :id=Extend_log-Default
```sql
SELECT
t1.`CATEGORY`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ELAPSED_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `EXTEND_LOG` t1 

```

#### 默认（全部数据）(VIEW) :id=Extend_log-View
```sql
SELECT
t1.`CATEGORY`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ELAPSED_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`INFO`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `EXTEND_LOG` t1 

```


## [扩展存储(EXTEND_STORAGE)](module/Base/Extend_storage.md) :id=Extend_storage

#### 数据查询(DEFAULT) :id=Extend_storage-Default
```sql
SELECT
t1.`BIGINT_VALUE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DATETIME_VALUE`,
t1.`DECIMAL_VALUE`,
t1.`DOUBLE_VALUE`,
t1.`ID`,
t1.`INT_VALUE`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`STRING_VALUE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `EXTEND_STORAGE` t1 

```

#### 默认（全部数据）(VIEW) :id=Extend_storage-View
```sql
SELECT
t1.`BIGINT_VALUE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DATETIME_VALUE`,
t1.`DECIMAL_VALUE`,
t1.`DOUBLE_VALUE`,
t1.`ID`,
t1.`INT_VALUE`,
t1.`LONGSTRING_VALUE`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`STRING_VALUE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `EXTEND_STORAGE` t1 

```


## [收藏(FAVORITE)](module/Base/Favorite.md) :id=Favorite

#### 数据查询(DEFAULT) :id=Favorite-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `FAVORITE` t1 

```

#### 默认（全部数据）(VIEW) :id=Favorite-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `FAVORITE` t1 

```


## [需求(IDEA)](module/ProdMgmt/Idea.md) :id=Idea

#### 已归档(archived) :id=Idea-Archived
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 评论通知负责人(comment_notify_assignee) :id=Idea-Comment_notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `IDEA` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}) )
```

#### 通用需求查询(common) :id=Idea-Common
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.category_id !=null ">  t21.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.category_id !=null ">  t1.`CATEGORY_ID` = #{ctx.webcontext.category_id}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 数据查询(DEFAULT) :id=Idea-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

```

#### 已删除(deleted) :id=Idea-Deleted
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 产品需求关联需求(idea_relation_idea) :id=Idea-Idea_relation_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t41.`TARGET_TYPE` = 'idea'  AND  t41.`PRINCIPAL_TYPE` = 'idea' ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 我负责的产品需求(my_assign) :id=Idea-My_assign
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  OR  t1.`ASSIGNEE_NAME` = #{ctx.sessioncontext.srfpersonname} )  AND  t1.`IS_DELETED` = 0 )
```

#### 我关注的需求(my_attention) :id=Idea-My_attention
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  exists(select 1 from `attention` t2 where t2.owner_id = t1.id and t2.`type` in ('20', '30', '40') and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 我创建的(my_created) :id=Idea-My_created
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  OR  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonname} ) )
```

#### 正常状态(normal) :id=Idea-Normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  <choose><when test="ctx.webcontext.section_id !=null ">  t21.`SECTION_ID` = #{ctx.webcontext.section_id}  </when><otherwise>1=1</otherwise></choose> )
```

#### 未关联的需求(not_exsists_relation) :id=Idea-Not_exsists_relation
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`TARGET_TYPE` = #{ctx.webcontext.target_type}  AND  t41.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  AND  t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.category_id !=null ">  t21.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.category_id !=null ">  t1.`CATEGORY_ID` = #{ctx.webcontext.category_id}  </when><otherwise>1=1</otherwise></choose> )  AND  t1.`ID` <> #{ctx.webcontext.principal_id} )
```

#### 计划关联需求(plan_relation_idea) :id=Idea-Plan_relation_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t41.`TARGET_TYPE` = 'idea'  AND  t41.`PRINCIPAL_TYPE` = 'product_plan' ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 最近浏览(recent_idea) :id=Idea-Recent_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  exists(select 1 from recent t2 where t1.id=t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )  AND  NOT EXISTS(SELECT 1 FROM `RELATION` t3 WHERE t1.`ID` = t3.`TARGET_ID` AND  t3.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}   ) )
```

#### 测试用例关联需求(test_case_relation) :id=Idea-Test_case_relation
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t41.`TARGET_TYPE` = 'idea'  AND  t41.`PRINCIPAL_TYPE` = 'test_case' ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 工单关联需求(ticket_relation_idea) :id=Idea-Ticket_relation_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t41.`TARGET_TYPE` = 'idea'  AND  t41.`PRINCIPAL_TYPE` = 'ticket' ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 默认（全部数据）(VIEW) :id=Idea-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

```

#### 工作项关联需求(work_item_relation_idea) :id=Idea-Work_item_relation_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_GRANULARITY`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t41.`TARGET_TYPE` = 'idea'  AND  t41.`PRINCIPAL_TYPE` = 'work_item' ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```


## [洞察力(INSIGHT)](module/Base/Insight.md) :id=Insight

#### 数据查询(DEFAULT) :id=Insight-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GROUP`,
t1.`ID`,
t1.`NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `INSIGHT` t1 

```

#### 工作项分布(property_distribution) :id=Insight-Property_distribution
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GROUP`,
t1.`ID`,
t1.`NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `INSIGHT` t1 

```

#### 默认（全部数据）(VIEW) :id=Insight-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESC`,
t1.`GROUP`,
t1.`ID`,
t1.`NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VIEW_URL`
FROM `INSIGHT` t1 

```


## [测试库(LIBRARY)](module/TestMgmt/Library.md) :id=Library

#### 管理员(admin) :id=Library-Admin
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`LIBRARY_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'admin' ) )
```

#### 已归档(archived) :id=Library-Archived
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 数据查询(DEFAULT) :id=Library-Default
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

```

#### 已删除(deleted) :id=Library-Deleted
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 查询星标(favorite) :id=Library-Favorite
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 正常状态(normal) :id=Library-Normal
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 与项目关联的测试库(project_relation_library) :id=Library-Project_relation_library
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from test_plan t2 where t1.ID=t2.LIBRARY_ID and t2.PROJECT_ID = #{ctx.webcontext.project_id}) )
```

#### 普通成员(user) :id=Library-User
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`LIBRARY_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'user' ) )
```

#### 默认（全部数据）(VIEW) :id=Library-View
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

```


## [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/Library_member.md) :id=Library_member

#### 当前测试库成员(cur_library_member) :id=Library_member-Cur_library_member
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.library_id !=null ">  t1.`LIBRARY_ID` = #{ctx.datacontext.library_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`LIBRARY_ID` = #{ctx.datacontext.id} )
```

#### 数据查询(DEFAULT) :id=Library_member-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Library_member-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```


## [页面版本(PAGE_VERSION)](module/Wiki/Page_version.md) :id=Page_version

#### 数据查询(DEFAULT) :id=Page_version-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PAGE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE_VERSION` t1 

```

#### 默认（全部数据）(VIEW) :id=Page_version-View
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PAGE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE_VERSION` t1 

```


## [文件夹(PORTFOLIO)](module/Base/Portfolio.md) :id=Portfolio

#### 管理员(admin) :id=Portfolio-Admin
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PORTFOLIO` t1 

WHERE EXISTS(SELECT * FROM `PORTFOLIO_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PORTFOLIO_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'admin' ) )
```

#### 选择项目集(choose_project_portfolio) :id=Portfolio-Choose_project_portfolio
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PORTFOLIO` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  not exists(select 1 from `work` t2 where t2.id = t1.id and t2.portfolio_id = #{ctx.webcontext.portfolio})  AND  not exists(select 1 from `work` t2 where t1.id = t2.portfolio_id and t2.principal_type = 'project_portfolio')  AND  t1.`ID` <> #{ctx.webcontext.portfolio} )
```

#### 数据查询(DEFAULT) :id=Portfolio-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PORTFOLIO` t1 

```

#### 查询星标(favorite) :id=Portfolio-Favorite
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PORTFOLIO` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 已删除的项目集(project_set_deleted) :id=Portfolio-Project_set_deleted
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PORTFOLIO` t1 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 进行中的项目集(project_set_going) :id=Portfolio-Project_set_going
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PORTFOLIO` t1 

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 普通成员(user) :id=Portfolio-User
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PORTFOLIO` t1 

WHERE EXISTS(SELECT * FROM `PORTFOLIO_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PORTFOLIO_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'user' ) )
```

#### 默认（全部数据）(VIEW) :id=Portfolio-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PORTFOLIO` t1 

```

#### 工作下的项目集(work_project_portfolio) :id=Portfolio-Work_project_portfolio
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PORTFOLIO` t1 

WHERE ( exists(select 1 from `work` t2 where t2.principal_id= t1.id and t2.portfolio_id = #{ctx.webcontext.project_portfolio})  AND  t1.`IS_DELETED` = 0 )
```


## [文件夹成员(PORTFOLIO_MEMBER)](module/Base/Portfolio_member.md) :id=Portfolio_member

#### 数据查询(DEFAULT) :id=Portfolio_member-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PORTFOLIO_ID`,
t11.`IDENTIFIER` AS `PORTFOLIO_IDENTIFIER`,
t11.`NAME` AS `PORTFOLIO_NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PORTFOLIO_MEMBER` t1 
LEFT JOIN `PORTFOLIO` t11 ON t1.`PORTFOLIO_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Portfolio_member-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PORTFOLIO_ID`,
t11.`IDENTIFIER` AS `PORTFOLIO_IDENTIFIER`,
t11.`NAME` AS `PORTFOLIO_NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PORTFOLIO_MEMBER` t1 
LEFT JOIN `PORTFOLIO` t11 ON t1.`PORTFOLIO_ID` = t11.`ID` 

```


## [产品(PRODUCT)](module/ProdMgmt/Product.md) :id=Product

#### 管理员(admin) :id=Product-Admin
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PRODUCT_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'admin' ) )
```

#### 已归档(archived) :id=Product-Archived
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 数据查询(DEFAULT) :id=Product-Default
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

```

#### 已删除(deleted) :id=Product-Deleted
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 查询星标(favorite) :id=Product-Favorite
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1'  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 正常状态(normal) :id=Product-Normal
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 操作用户(user) :id=Product-User
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PRODUCT_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'user' ) )
```

#### 默认（全部数据）(VIEW) :id=Product-View
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

```


## [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/Product_member.md) :id=Product_member

#### 当前产品(cur_product) :id=Product_member-Cur_product
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PRODUCT_MEMBER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.product_id !=null ">  t1.`PRODUCT_ID` = #{ctx.datacontext.product_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`PRODUCT_ID` = #{ctx.datacontext.id} )
```

#### 数据查询(DEFAULT) :id=Product_member-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PRODUCT_MEMBER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Product_member-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PRODUCT_MEMBER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```


## [排期(PRODUCT_PLAN)](module/ProdMgmt/Product_plan.md) :id=Product_plan

#### 类别下的计划(category_plan) :id=Product_plan-Category_plan
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

WHERE ( t1.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%')  AND  t1.`IS_DELETED` = 0 )
```

#### 数据查询(DEFAULT) :id=Product_plan-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

```

#### 正常状态(normal) :id=Product_plan-Normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`PRODUCT_ID` = #{ctx.webcontext.product} )
```

#### 当前计划(this_plan) :id=Product_plan-This_plan
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.product_plan}  AND  t1.`IS_DELETED` = 0 )
```

#### 默认（全部数据）(VIEW) :id=Product_plan-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CATEGORIES_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

```


## [产品标签(PRODUCT_TAG)](module/ProdMgmt/Product_tag.md) :id=Product_tag

#### 数据查询(DEFAULT) :id=Product_tag-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_TAG` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Product_tag-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_TAG` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```


## [产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/Product_ticket_type.md) :id=Product_ticket_type

#### 数据查询(DEFAULT) :id=Product_ticket_type-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`TICKET_TYPE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_TICKET_TYPE` t1 

```

#### 默认（全部数据）(VIEW) :id=Product_ticket_type-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`TICKET_TYPE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_TICKET_TYPE` t1 

```


## [项目进度(PROGRESS)](module/ProjMgmt/Progress.md) :id=Progress

#### 数据查询(DEFAULT) :id=Progress-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROGRESS` t1 

```

#### 默认（全部数据）(VIEW) :id=Progress-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROGRESS` t1 

```


## [项目(PROJECT)](module/ProjMgmt/Project.md) :id=Project

#### 管理员(admin) :id=Project-Admin
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PROJECT_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'admin' ) )
```

#### 已归档(archived) :id=Project-Archived
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 选择项目(choose_project) :id=Project-Choose_project
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  not exists(select 1 from `work` t2 where t1.id = t2.principal_id and t2.portfolio_id = #{ctx.webcontext.portfolio_id}) )
```

#### 当前项目(current) :id=Project-Current
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE ( <choose><when test="ctx.webcontext.project !=null ">  t1.`ID` = #{ctx.webcontext.project}  </when><otherwise>1=1</otherwise></choose> )
```

#### 数据查询(DEFAULT) :id=Project-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

```

#### 已删除(deleted) :id=Project-Deleted
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 查询星标(favorite) :id=Project-Favorite
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE ( (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 正常状态(normal) :id=Project-Normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 相同类型工作项(same_type) :id=Project-Same_type
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from project t2 where  t1.`type` = t2.`type` and t2.id = #{ctx.webcontext.project})  AND  t1.`ID` <> #{ctx.webcontext.project} )
```

#### 项目集下的项目(under_project_portfolio) :id=Project-Under_project_portfolio
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from `work` t2 where t2.principal_id = t1.id and t2.portfolio_id = #{ctx.webcontext.n_portfolio_id_eq
}) )
```

#### 操作用户(user) :id=Project-User
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PROJECT_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'user' ) )
```

#### 默认（全部数据）(VIEW) :id=Project-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

```

#### 项目集工作下的项目(work_project) :id=Project-Work_project
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from `work` t2 where t2.principal_id = t1.id and t2.portfolio_id = #{ctx.webcontext.project_portfolio}) )
```


## [项目成员(PROJECT_MEMBER)](module/ProjMgmt/Project_member.md) :id=Project_member

#### 当前项目成员(CUR_PROJECT) :id=Project_member-Cur_project
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`WEEKDAY`
FROM `PROJECT_MEMBER` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.project_id !=null ">  t1.`PROJECT_ID` = #{ctx.datacontext.project_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`PROJECT_ID` = #{ctx.datacontext.id} )
```

#### 数据查询(DEFAULT) :id=Project_member-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`WEEKDAY`
FROM `PROJECT_MEMBER` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Project_member-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DAY_CAPACITIES`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`ROLE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`WEEKDAY`
FROM `PROJECT_MEMBER` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```


## [项目标签(PROJECT_TAG)](module/ProjMgmt/Project_tag.md) :id=Project_tag

#### 数据查询(DEFAULT) :id=Project_tag-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_TAG` t1 

```

#### 默认（全部数据）(VIEW) :id=Project_tag-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_TAG` t1 

```


## [最近访问(RECENT)](module/Base/Recent.md) :id=Recent

#### 数据查询(DEFAULT) :id=Recent-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

```

#### 最近访问(recent_access) :id=Recent-Recent_access
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`TYPE` = '2'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 最近浏览当前产品内工单(recent_curproduct_ticket) :id=Recent-Recent_curproduct_ticket
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'ticket'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  exists(select 1 from ticket t2 where t1.owner_id = t2.id   and t2.is_deleted = 0 and t2.is_archived = 0 and t2.customer_id is null ) )
```

#### 最近浏览当前项目工作项(recent_curproject_work_item) :id=Recent-Recent_curproject_work_item
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  exists(select 1 from work_item t2 where t1.owner_id = t2.id and t2.project_id = #{ctx.webcontext.project} and t2.is_deleted = 0 and t2.is_archived = 0 and (t2.pid <> #{ctx.webcontext.principal_id} or t2.pid is null) ) )
```

#### 最近浏览_需求(recent_idea) :id=Recent-Recent_idea
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'idea'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} )  AND  exists(SELECT 1 FROM idea t3 where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0) )
```

#### 最近访问页面(recent_page) :id=Recent-Recent_page
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'space'  AND  t1.`OWNER_SUBTYPE` = 'page'  AND  t1.`UPDATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(SELECT 1 FROM page t3 where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0) )
```

#### 最近访问项目(recent_project) :id=Recent-Recent_project
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`UPDATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_TYPE` = 'project'  AND  ( t1.`OWNER_SUBTYPE` = 'scrum'  OR  t1.`OWNER_SUBTYPE` = 'kanban'  OR  t1.`OWNER_SUBTYPE` = 'waterfall' ) )
```

#### 最近浏览_用例(recent_test_case) :id=Recent-Recent_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'library'  AND  t1.`OWNER_SUBTYPE` = 'test_case'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose>  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} )  AND  exists(SELECT 1 FROM test_case t3 where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0) )
```

#### 最近访问的用例_首页(recent_test_case_index) :id=Recent-Recent_test_case_index
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'library'  AND  t1.`OWNER_SUBTYPE` = 'test_case'  AND  t1.`UPDATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(SELECT 1 FROM test_case t3 where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0) )
```

#### 最近浏览_工单(recent_ticket) :id=Recent-Recent_ticket
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'ticket'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} )  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  exists(SELECT 1 FROM ticket t3 where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0) )
```

#### 最近使用(recent_use) :id=Recent-Recent_use
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`TYPE` = '1' )
```

#### 最近浏览_工作项(recent_work_item) :id=Recent-Recent_work_item
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(select 1 from work_item t3 where t1.owner_id = t3.id and t3.is_archived = 0 and t3.is_deleted = 0)  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id})  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id} )
```

#### 最近浏览工作项且不含缺陷(recent_work_item_and_nobug) :id=Recent-Recent_work_item_and_nobug
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} and t2.principal_type not like '%bug%')  AND  exists(SELECT 1 FROM work_item t3,work_item_type t4 where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0 and t3.WORK_ITEM_TYPE_ID = t4.ID and t4.`group` <> 'bug') )
```

#### 最近浏览_缺陷(recent_work_item_bug) :id=Recent-Recent_work_item_bug
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} )  AND  exists(SELECT 1 FROM work_item t3,work_item_type t4 where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0 and t3.WORK_ITEM_TYPE_ID = t4.ID and t4.`group` =  'bug') )
```

#### 默认（全部数据）(VIEW) :id=Recent-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RECENT` t1 

```


## [关联(RELATION)](module/Base/Relation.md) :id=Relation

#### 数据查询(DEFAULT) :id=Relation-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

```

#### 默认（全部数据）(VIEW) :id=Relation-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

```


## [项目发布(RELEASE)](module/ProjMgmt/Release.md) :id=Release

#### 数据查询(DEFAULT) :id=Release-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PROGRESS`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Release-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PROGRESS`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```


## [执行用例(RUN)](module/TestMgmt/Run.md) :id=Run

#### 评论通知执行人(comment_notify_executor) :id=Run-Comment_notify_executor
```sql
SELECT
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`
FROM `RUN` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}) )
```

#### 数据查询(DEFAULT) :id=Run-Default
```sql
SELECT
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t11.`PRECONDITION`,
t1.`REMARK`,
t11.`STATE`,
t1.`STATUS`,
t31.`SUITES`,
t11.`SUITE_ID`,
t31.`NAME` AS `SUITE_NAME`,
t11.`TEST_TYPE`,
t11.`TITLE`,
t11.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RUN` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`CASE_ID` = t11.`ID` 
LEFT JOIN `TEST_PLAN` t21 ON t1.`PLAN_ID` = t21.`ID` 
LEFT JOIN `TEST_SUITE` t31 ON t11.`SUITE_ID` = t31.`ID` 
LEFT JOIN `LIBRARY` t41 ON t21.`LIBRARY_ID` = t41.`ID` 

```

#### 当前模块下用例(normal) :id=Run-Normal
```sql
SELECT
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t11.`PRECONDITION`,
t1.`REMARK`,
t11.`STATE`,
t1.`STATUS`,
t31.`SUITES`,
t11.`SUITE_ID`,
t31.`NAME` AS `SUITE_NAME`,
t11.`TEST_TYPE`,
t11.`TITLE`,
t11.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RUN` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`CASE_ID` = t11.`ID` 
LEFT JOIN `TEST_PLAN` t21 ON t1.`PLAN_ID` = t21.`ID` 
LEFT JOIN `TEST_SUITE` t31 ON t11.`SUITE_ID` = t31.`ID` 
LEFT JOIN `LIBRARY` t41 ON t21.`LIBRARY_ID` = t41.`ID` 

WHERE ( ( <choose><when test="ctx.webcontext.suite_id !=null ">  t11.`SUITE_ID` = #{ctx.webcontext.suite_id}  </when><otherwise>1=1</otherwise></choose>  OR  t31.`SUITES` LIKE CONCAT('%',#{ctx.webcontext.suite_id},'%') ) )
```

#### 默认（全部数据）(VIEW) :id=Run-View
```sql
SELECT
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t11.`PRECONDITION`,
t1.`REMARK`,
t11.`STATE`,
t1.`STATUS`,
t1.`STEPS`,
t31.`SUITES`,
t11.`SUITE_ID`,
t31.`NAME` AS `SUITE_NAME`,
t11.`TEST_TYPE`,
t11.`TITLE`,
t11.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RUN` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`CASE_ID` = t11.`ID` 
LEFT JOIN `TEST_PLAN` t21 ON t1.`PLAN_ID` = t21.`ID` 
LEFT JOIN `TEST_SUITE` t31 ON t11.`SUITE_ID` = t31.`ID` 
LEFT JOIN `LIBRARY` t41 ON t21.`LIBRARY_ID` = t41.`ID` 

```


## [执行结果(RUN_HISTORY)](module/TestMgmt/Run_history.md) :id=Run_history

#### 数据查询(DEFAULT) :id=Run_history-Default
```sql
SELECT
t11.`CASE_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`REMARK`,
t1.`RUN_ID`,
t21.`TITLE` AS `RUN_TITLE`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RUN_HISTORY` t1 
LEFT JOIN `RUN` t11 ON t1.`RUN_ID` = t11.`ID` 
LEFT JOIN `TEST_CASE` t21 ON t11.`CASE_ID` = t21.`ID` 

```

#### 当前用例执行结果(this) :id=Run_history-This
```sql
SELECT
t11.`CASE_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`REMARK`,
t1.`RUN_ID`,
t21.`TITLE` AS `RUN_TITLE`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RUN_HISTORY` t1 
LEFT JOIN `RUN` t11 ON t1.`RUN_ID` = t11.`ID` 
LEFT JOIN `TEST_CASE` t21 ON t11.`CASE_ID` = t21.`ID` 

WHERE ( t1.`RUN_ID` = #{ctx.webcontext.run} )
```

#### 默认（全部数据）(VIEW) :id=Run_history-View
```sql
SELECT
t11.`CASE_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`REMARK`,
t1.`RUN_ID`,
t21.`TITLE` AS `RUN_TITLE`,
t1.`STATUS`,
t1.`STEPS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RUN_HISTORY` t1 
LEFT JOIN `RUN` t11 ON t1.`RUN_ID` = t11.`ID` 
LEFT JOIN `TEST_CASE` t21 ON t11.`CASE_ID` = t21.`ID` 

```


## [分组(SECTION)](module/Base/Section.md) :id=Section

#### 数据查询(DEFAULT) :id=Section-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SECTION` t1 

```

#### 产品排期分组(this_product_section) :id=Section-This_product_section
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SECTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.productid}  AND  t1.`OWNER_TYPE` = 'product_plan' )
```

#### 默认（全部数据）(VIEW) :id=Section-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SECTION` t1 

```


## [序列(SEQUENCE_GENERATOR)](module/Base/Sequence_generator.md) :id=Sequence_generator

#### 数据查询(DEFAULT) :id=Sequence_generator-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CURRENT_VALUE`,
t1.`GROUP_TAG`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SEQUENCE_GENERATOR` t1 

```

#### 默认（全部数据）(VIEW) :id=Sequence_generator-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CURRENT_VALUE`,
t1.`GROUP_TAG`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SEQUENCE_GENERATOR` t1 

```


## [空间(SPACE)](module/Wiki/Space.md) :id=Space

#### 管理员(admin) :id=Space-Admin
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`SPACE_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'admin' ) )
```

#### 已归档(archived) :id=Space-Archived
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 目录下空间(category_space) :id=Space-Category_space
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( t1.`CATEGORY_ID` = #{ctx.webcontext.category_id}  OR  t11.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%') ) )
```

#### 数据查询(DEFAULT) :id=Space-Default
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

```

#### 已删除(deleted) :id=Space-Deleted
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 查询星标(favorite) :id=Space-Favorite
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1'  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 未存在目录中的空间(no_category_space) :id=Space-No_category_space
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`CATEGORY_ID` IS NULL )
```

#### 未关联的空间（产品）(no_re_space_product) :id=Space-No_re_space_product
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_TYPE` = #{ctx.datacontext.principal_type}  AND  t21.`TARGET_TYPE` = #{ctx.datacontext.target_type}  AND  t21.`PRINCIPAL_ID` = #{ctx.datacontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 正常状态(normal) :id=Space-Normal
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 产品关联的空间(product_re_space) :id=Space-Product_re_space
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_TYPE` = #{ctx.datacontext.principal_type}  AND  t21.`TARGET_TYPE` = #{ctx.datacontext.target_type}  AND  <choose><when test="ctx.datacontext.principal_id !=null ">  t21.`PRINCIPAL_ID` = #{ctx.datacontext.principal_id}  </when><otherwise>1=1</otherwise></choose> ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 操作用户(user) :id=Space-User
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`SPACE_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'user' ) )
```

#### 默认（全部数据）(VIEW) :id=Space-View
```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

```


## [空间成员(SPACE_MEMBER)](module/Wiki/Space_member.md) :id=Space_member

#### 数据查询(DEFAULT) :id=Space_member-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ROLE_ID`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `SPACE_MEMBER` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Space_member-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ROLE_ID`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `SPACE_MEMBER` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```


## [迭代(SPRINT)](module/ProjMgmt/Sprint.md) :id=Sprint

#### 移动至(choose_move) :id=Sprint-Choose_move
```sql
select null as id, '待分配工作项' as name
union all
select t1.id, t1.name
from `sprint` `t1`

WHERE (`id` <> #{ctx.webcontext.sprint_id} and `status` <>  '3' )
```

#### 数据查询(DEFAULT) :id=Sprint-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`NAME` AS `PROJECT_NAME`,
t1.`SPRINT_CATEGORY_ID`,
t31.`NAME` AS `SPRINT_CATEGORY_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 
LEFT JOIN `SPRINT_CATEGORY` t31 ON t1.`SPRINT_CATEGORY_ID` = t31.`ID` 

```

#### 未结束的迭代(not_finish) :id=Sprint-Not_finish
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`NAME` AS `PROJECT_NAME`,
t1.`SPRINT_CATEGORY_ID`,
t31.`NAME` AS `SPRINT_CATEGORY_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 
LEFT JOIN `SPRINT_CATEGORY` t31 ON t1.`SPRINT_CATEGORY_ID` = t31.`ID` 

WHERE ( t1.`STATUS` <> '3' )
```

#### 默认（全部数据）(VIEW) :id=Sprint-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`NAME` AS `PROJECT_NAME`,
t1.`SPRINT_CATEGORY_ID`,
t31.`NAME` AS `SPRINT_CATEGORY_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 
LEFT JOIN `SPRINT_CATEGORY` t31 ON t1.`SPRINT_CATEGORY_ID` = t31.`ID` 

```


## [迭代类别(SPRINT_CATEGORY)](module/ProjMgmt/Sprint_category.md) :id=Sprint_category

#### 数据查询(DEFAULT) :id=Sprint_category-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SPRINT_SECTION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT_CATEGORY` t1 
LEFT JOIN `SPRINT_SECTION` t11 ON t1.`SPRINT_SECTION_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Sprint_category-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SPRINT_SECTION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT_CATEGORY` t1 
LEFT JOIN `SPRINT_SECTION` t11 ON t1.`SPRINT_SECTION_ID` = t11.`ID` 

```


## [迭代分组(SPRINT_SECTION)](module/ProjMgmt/Sprint_section.md) :id=Sprint_section

#### 数据查询(DEFAULT) :id=Sprint_section-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT_SECTION` t1 

```

#### 默认（全部数据）(VIEW) :id=Sprint_section-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT_SECTION` t1 

```


## [发布阶段(STAGE)](module/ProjMgmt/Stage.md) :id=Stage

#### 数据查询(DEFAULT) :id=Stage-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`RELEASE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`
FROM `STAGE` t1 

```

#### 默认（全部数据）(VIEW) :id=Stage-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`RELEASE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`
FROM `STAGE` t1 

```


## [页面模板(STENCIL)](module/Wiki/Stencil.md) :id=Stencil

#### 数据查询(DEFAULT) :id=Stencil-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`SPACE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STENCIL` t1 

```

#### 非空间下模板(no_space_stencil) :id=Stencil-No_space_stencil
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`SPACE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STENCIL` t1 

WHERE ( t1.`SPACE_ID` IS NULL )
```

#### 空间下页面模板(space_stencil) :id=Stencil-Space_stencil
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`SPACE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STENCIL` t1 

WHERE ( t1.`SPACE_ID` = #{ctx.webcontext.space} )
```

#### 默认（全部数据）(VIEW) :id=Stencil-View
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`SPACE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STENCIL` t1 

```


## [泳道(SWIMLANE)](module/ProjMgmt/Swimlane.md) :id=Swimlane

#### 数据查询(DEFAULT) :id=Swimlane-Default
```sql
SELECT
t1.`BOARD_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SWIMLANE` t1 

```

#### 默认（全部数据）(VIEW) :id=Swimlane-View
```sql
SELECT
t1.`BOARD_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SWIMLANE` t1 

```


## [用例(TEST_CASE)](module/TestMgmt/Test_case.md) :id=Test_case

#### 评论通知维护人(comment_notify_maintenance) :id=Test_case-Comment_notify_maintenance
```sql
SELECT
t1.`ID`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`
FROM `TEST_CASE` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}) )
```

#### 数据查询(DEFAULT) :id=Test_case-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

```

#### 已删除(deleted) :id=Test_case-Deleted
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 需求关联测试用例(idea_relation_test_case) :id=Test_case-Idea_relation_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = 'test_case'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t31.`PRINCIPAL_TYPE` = 'idea' ) ) AND ( t1.`IS_DELETED` = 0 )
```

#### 我负责的测试用例(my_assign) :id=Test_case-My_assign
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`MAINTENANCE_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 我关注的测试用例(my_attention) :id=Test_case-My_attention
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from `attention` t2 where t2.owner_id = t1.id and t2.`type` in ('20', '30', '40') and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 我创建的测试用例(my_created) :id=Test_case-My_created
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 正常状态(normal) :id=Test_case-Normal
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.suite_id !=null ">  t11.`SUITES` LIKE CONCAT('%',#{ctx.webcontext.suite_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.suite_id !=null ">  t1.`SUITE_ID` = #{ctx.webcontext.suite_id}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 无模块用例(nosuite_test_case) :id=Test_case-Nosuite_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`SUITE_ID` IS NULL )
```

#### 未添加过的用例(not_add_case) :id=Test_case-Not_add_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( not exists(select 1 from run t2 
where 
t1.ID= t2.CASE_ID 
and
t2.PLAN_ID = #{ctx.webcontext.test_plan})  AND  t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.suite_id !=null ">  t11.`SUITES` LIKE CONCAT('%',#{ctx.webcontext.suite_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.suite_id !=null ">  t1.`SUITE_ID` = #{ctx.webcontext.suite_id}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 未关联的用例(not_exsists_relation) :id=Test_case-Not_exsists_relation
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  AND  t31.`TARGET_TYPE` = #{ctx.webcontext.target_type}  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0 )
```

#### 最近浏览(recent_test_case) :id=Test_case-Recent_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  NOT EXISTS(SELECT 1 FROM `RELATION` t3 WHERE t1.`ID` = t3.`TARGET_ID` AND  t3.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}   )  AND  exists(select 1 from recent t2 where t1.id=t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} ) )
```

#### 当前模块下用例(suites_test_case) :id=Test_case-Suites_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE ( INSTR(t1.suites, #{ctx.webcontext.principal_id} ) )
```

#### 默认（全部数据）(VIEW) :id=Test_case-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`STEPS`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

```

#### 工作项关联测试用例(work_item_relation_test_case) :id=Test_case-Work_item_relation_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
concat(t21.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t11.`SUITES`,
t1.`SUITE_ID`,
t11.`NAME` AS `SUITE_NAME`,
t1.`TEST_LIBRARY_ID`,
t21.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_CASE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( ( t31.`PRINCIPAL_TYPE` = 'work_item'  OR  t31.`PRINCIPAL_TYPE` = 'bug' )  AND  t31.`TARGET_TYPE` = 'test_case'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```


## [测试计划(TEST_PLAN)](module/TestMgmt/Test_plan.md) :id=Test_plan

#### 数据查询(DEFAULT) :id=Test_plan-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t51.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t31.`NAME` AS `VERSION_NAME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `VERSION` t31 ON t1.`VERSION_ID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `PROJECT_RELEASE` t51 ON t1.`RELEASE_ID` = t51.`ID` 

WHERE ( <choose><when test="ctx.webcontext.type !=null ">  t1.`TYPE` = #{ctx.webcontext.type}  </when><otherwise>1=1</otherwise></choose> )
```

#### 我负责的(my_assignee) :id=Test_plan-My_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t51.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t31.`NAME` AS `VERSION_NAME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `VERSION` t31 ON t1.`VERSION_ID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `PROJECT_RELEASE` t51 ON t1.`RELEASE_ID` = t51.`ID` 

WHERE ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid} )
```

#### 我的进行中的(my_in_progress) :id=Test_plan-My_in_progress
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t51.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t31.`NAME` AS `VERSION_NAME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `VERSION` t31 ON t1.`VERSION_ID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `PROJECT_RELEASE` t51 ON t1.`RELEASE_ID` = t51.`ID` 

WHERE ( t1.`STATUS` = 'in_progress' )
```

#### 我参与的(my_participate) :id=Test_plan-My_participate
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t51.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t31.`NAME` AS `VERSION_NAME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `VERSION` t31 ON t1.`VERSION_ID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `PROJECT_RELEASE` t51 ON t1.`RELEASE_ID` = t51.`ID` 

WHERE EXISTS(SELECT * FROM `RUN` t61 
 WHERE 
 t1.`ID` = t61.`PLAN_ID`  AND  ( t61.`EXECUTOR_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 未开始和进行中的计划(pending_and_in_progress) :id=Test_plan-Pending_and_in_progress
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t51.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t31.`NAME` AS `VERSION_NAME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `VERSION` t31 ON t1.`VERSION_ID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `PROJECT_RELEASE` t51 ON t1.`RELEASE_ID` = t51.`ID` 

WHERE ( t1.`STATUS` <> 'completed' )
```

#### 查询未移入过的计划(query_no_shift_in) :id=Test_plan-Query_no_shift_in
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t51.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t31.`NAME` AS `VERSION_NAME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `VERSION` t31 ON t1.`VERSION_ID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `PROJECT_RELEASE` t51 ON t1.`RELEASE_ID` = t51.`ID` 

WHERE ( not exists (select 1 from run t2 where t1.ID = t2.PLAN_ID and t2.CASE_ID= #{ctx.webcontext.testcaseid}) )
```

#### 未加入计划(un_join_plan) :id=Test_plan-Un_join_plan
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t51.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t31.`NAME` AS `VERSION_NAME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `VERSION` t31 ON t1.`VERSION_ID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `PROJECT_RELEASE` t51 ON t1.`RELEASE_ID` = t51.`ID` 

WHERE ( t1.`STATUS` <> 'completed'  AND  EXISTS (
    SELECT 1 
    FROM `test_case` 
    LEFT JOIN `run` ON `test_case`.`ID` = `run`.`CASE_ID`
) and NOT EXISTS (
    SELECT 1 
    FROM `run` 
    WHERE `run`.`CASE_ID` = #{ctx.webcontext.test_case}
    AND `run`.`PLAN_ID` = t1.`ID`
) )
```

#### 默认（全部数据）(VIEW) :id=Test_plan-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LIBRARY_ID`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t51.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t31.`NAME` AS `VERSION_NAME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `VERSION` t31 ON t1.`VERSION_ID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `PROJECT_RELEASE` t51 ON t1.`RELEASE_ID` = t51.`ID` 

```


## [用例模块(TEST_SUITE)](module/TestMgmt/Test_suite.md) :id=Test_suite

#### 数据查询(DEFAULT) :id=Test_suite-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`LIBRARY_ID`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`SEQUENCE`,
t1.`SUITES`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_SUITE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 

```

#### 无父类(no_parent) :id=Test_suite-No_parent
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`LIBRARY_ID`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`SEQUENCE`,
t1.`SUITES`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_SUITE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`PID` IS NULL )
```

#### 正常(normal) :id=Test_suite-Normal
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`LIBRARY_ID`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`SEQUENCE`,
t1.`SUITES`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_SUITE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 

```

#### 顶级模块(root) :id=Test_suite-Root
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`LIBRARY_ID`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`SEQUENCE`,
t1.`SUITES`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_SUITE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 

WHERE ( t1.`PID` IS NULL )
```

#### 默认（全部数据）(VIEW) :id=Test_suite-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`LIBRARY_ID`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`SEQUENCE`,
t1.`SUITES`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_SUITE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 

```


## [工单(TICKET)](module/ProdMgmt/Ticket.md) :id=Ticket

#### 已归档(archived) :id=Ticket-Archived
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 1 )
```

#### 评论通知负责人(comment_notify_assignee) :id=Ticket-Comment_notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `TICKET` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}) )
```

#### 普通工单(common) :id=Ticket-Common
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 客户未关联工单(customer_notre_ticket) :id=Ticket-Customer_notre_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`CUSTOMER_ID` IS NULL )
```

#### 客户关联工单(customer_relation_ticket) :id=Ticket-Customer_relation_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = 'ticket'  AND  t31.`PRINCIPAL_TYPE` = 'customer'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 数据查询(DEFAULT) :id=Ticket-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

```

#### 已删除(deleted) :id=Ticket-Deleted
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 产品需求关联工单(idea_relation_ticket) :id=Ticket-Idea_relation_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t31.`TARGET_TYPE` = 'ticket'  AND  t31.`PRINCIPAL_TYPE` = 'idea' ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 我负责的(my_assign) :id=Ticket-My_assign
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 我关注的工单(my_attention) :id=Ticket-My_attention
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from `attention` t2 where t2.owner_id = t1.id and t2.`type` in ('20', '30', '40') and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 我创建的(my_created) :id=Ticket-My_created
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 正常状态(normal) :id=Ticket-Normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 未关联的工单(not_exsists_relation) :id=Ticket-Not_exsists_relation
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = #{ctx.webcontext.target_type}  AND  t31.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 最近浏览(recent_ticket) :id=Ticket-Recent_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from recent t2 where t1.id=t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )  AND  NOT EXISTS(SELECT 1 FROM `RELATION` t3 WHERE t1.`ID` = t3.`TARGET_ID` AND  t3.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}   ) )
```

#### 当前标签下工单(ticket_re_product_tag) :id=Ticket-Ticket_re_product_tag
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE ( t1.`TAGS` LIKE CONCAT('%',#{ctx.webcontext.product_tag},'%')  AND  t1.`IS_DELETED` = 0 )
```

#### 工单关联工单(ticket_relation_ticket) :id=Ticket-Ticket_relation_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t31.`TARGET_TYPE` = 'ticket'  AND  t31.`PRINCIPAL_TYPE` = 'ticket' ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 默认（全部数据）(VIEW) :id=Ticket-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

```

#### 工作项关联工单(work_item_relation_ticket) :id=Ticket-Work_item_relation_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`DESCRIPTION`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CUSTOMER` t21 ON t1.`CUSTOMER_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = 'ticket'  AND  t31.`PRINCIPAL_TYPE` = 'work_item'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```


## [工单类型(TICKET_TYPE)](module/ProdMgmt/Ticket_type.md) :id=Ticket_type

#### 数据查询(DEFAULT) :id=Ticket_type-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET_TYPE` t1 

```

#### 默认（全部数据）(VIEW) :id=Ticket_type-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET_TYPE` t1 

```


## [流转记录(TRANSITION_HISTORY)](module/ProjMgmt/Transition_history.md) :id=Transition_history

#### 数据查询(DEFAULT) :id=Transition_history-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FROM_STATE`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TO_STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TRANSITION_HISTORY` t1 

```

#### 默认（全部数据）(VIEW) :id=Transition_history-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FROM_STATE`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TO_STATE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TRANSITION_HISTORY` t1 

```


## [版本（temp）(VERSION)](module/ProjMgmt/Version.md) :id=Version

#### 数据查询(DEFAULT) :id=Version-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PROGRESS`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_CATEGORY_ID`
FROM `VERSION` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Version-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PROGRESS`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_CATEGORY_ID`
FROM `VERSION` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```


## [发布类别(VERSION_CATEGORY)](module/ProjMgmt/Version_category.md) :id=Version_category

#### 数据查询(DEFAULT) :id=Version_category-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_SECTION_ID`
FROM `VERSION_CATEGORY` t1 

```

#### 默认（全部数据）(VIEW) :id=Version_category-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_SECTION_ID`
FROM `VERSION_CATEGORY` t1 

```


## [发布分组(VERSION_SECTION)](module/ProjMgmt/Version_section.md) :id=Version_section

#### 数据查询(DEFAULT) :id=Version_section-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `VERSION_SECTION` t1 

```

#### 默认（全部数据）(VIEW) :id=Version_section-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `VERSION_SECTION` t1 

```


## [工作(WORK)](module/Base/Work.md) :id=Work

#### 数据查询(DEFAULT) :id=Work-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PILOT_ID`,
t1.`PORTFOLIO_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK` t1 

```

#### 项目集下的工作(item_set_owner) :id=Work-Item_set_owner
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PILOT_ID`,
t1.`PORTFOLIO_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK` t1 

```

#### 默认（全部数据）(VIEW) :id=Work-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PILOT_ID`,
t1.`PORTFOLIO_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK` t1 

```


## [工作项(WORK_ITEM)](module/ProjMgmt/Work_item.md) :id=Work_item

#### 已归档(archived) :id=Work_item-Archived
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 缺陷工作项(bug) :id=Work_item-Bug
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t21.`GROUP` = 'bug' )
```

#### 缺陷状态分布表格(bug_state_group_grid) :id=Work_item-Bug_state_group_grid
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t21.`GROUP` = 'bug' )
```

#### 变更父工作项(change_parent) :id=Work_item-Change_parent
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 选择子工作项(choose_child) :id=Work_item-Choose_child
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`ID` <> #{ctx.webcontext.principal_id}  AND  t1.`PROJECT_ID` = #{ctx.webcontext.project_id}  AND  ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  ( t1.`PID` <> #{ctx.webcontext.principal_id}  OR  t1.`PID` IS NULL ) )
```

#### 评论通知负责人(comment_notify_assignee) :id=Work_item-Comment_notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `WORK_ITEM` t1 

WHERE EXISTS(SELECT * FROM `ATTENTION` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  t11.`OWNER_TYPE` = 'WORK_ITEM'  AND  t11.`OWNER_SUBTYPE` = 'WORK_ITEM'  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfuserid} ) ) AND ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}) )
```

#### 普通工作项(common) :id=Work_item-Common
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`SEVERITY`,
t1.`START_AT`,
t1.`STATE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`PID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 普通状态缺陷(common_bug) :id=Work_item-Common_bug
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`SEVERITY`,
t1.`START_AT`,
t1.`STATE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t21.`GROUP` = 'bug' )
```

#### 数据查询(DEFAULT) :id=Work_item-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

```

#### 已删除(deleted) :id=Work_item-Deleted
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 需求关联工作项(idea_relation_work_item) :id=Work_item-Idea_relation_work_item
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t91.`TARGET_TYPE` = 'work_item'  AND  t91.`PRINCIPAL_TYPE` = 'idea' ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 里程碑(milestone) :id=Work_item-Milestone
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`WORK_ITEM_TYPE_ID` = 'waterfall_milestone' )
```

#### 我负责的(my_assignee) :id=Work_item-My_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 我关注的(my_attention) :id=Work_item-My_attention
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from `attention` t2 where t2.owner_id = t1.id and t2.`type` in ('20', '30', '40') and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 我创建的(my_created) :id=Work_item-My_created
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 过滤器默认查询(my_filter) :id=Work_item-My_filter
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  <choose><when test="ctx.webcontext.my_join !=null ">  exists(select 1 from `attention` t2 where t1.id = t2.owner_id and t2.user_id = #{ctx.sessioncontext.srfpersonid}) </when><otherwise>1=1</otherwise></choose> )
```

#### 我待完成的(my_todo) :id=Work_item-My_todo
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t1.`STATE` <> '40' )
```

#### 排除缺陷类型的工作项(no_bug_work_item) :id=Work_item-No_bug_work_item
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`PRINCIPAL_TYPE` = 'test_case'  AND  t91.`TARGET_TYPE` = 'work_item'  AND  t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t21.`GROUP` <> 'bug' )
```

#### 正常状态(normal) :id=Work_item-Normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 未关联的缺陷(not_exsists_bug_relation) :id=Work_item-Not_exsists_bug_relation
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  AND  t91.`TARGET_TYPE` = #{ctx.webcontext.target_type}  AND  t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`WORK_ITEM_TYPE_ID` LIKE '%bug%'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 未关联的工作项(not_exsists_relation) :id=Work_item-Not_exsists_relation
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( <choose><when test="ctx.webcontext.principal_type !=null ">  t91.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.target_type !=null ">  t91.`TARGET_TYPE` = #{ctx.webcontext.target_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`ID` <> #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> )
```

#### 未关联且不为缺陷工作项(notbug_exsists_relation) :id=Work_item-Notbug_exsists_relation
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( <choose><when test="ctx.webcontext.principal_type !=null ">  t91.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.target_type !=null ">  t91.`TARGET_TYPE` = #{ctx.webcontext.target_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`WORK_ITEM_TYPE_ID` <> 'kanban_bug'  AND  t1.`WORK_ITEM_TYPE_ID` <> 'scrum_bug'  AND  t1.`WORK_ITEM_TYPE_ID` <> 'waterfall_bug'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`ID` <> #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> )
```

#### 项目概览-工作项统计(overview_chart) :id=Work_item-Overview_chart
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 规划工作项(plan) :id=Work_item-Plan
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  ( t1.`RELEASE_ID` <> #{ctx.webcontext.release_id}  OR  t1.`RELEASE_ID` IS NULL ) )
```

#### 最近浏览(recent_work_item) :id=Work_item-Recent_work_item
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  exists(select 1 from recent t2 where t1.id=t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )  AND  NOT EXISTS(SELECT 1 FROM `RELATION` t3 WHERE t1.`ID` = t3.`TARGET_ID` AND  t3.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}   ) )
```

#### 需求工作项(requirement) :id=Work_item-Requirement
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t21.`GROUP` = 'requirement'  AND  t1.`IS_DELETED` = 0 )
```

#### 执行用例关联缺陷(run_relation_bug) :id=Work_item-Run_relation_bug
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t91.`PRINCIPAL_TYPE` = 'run'  AND  t91.`TARGET_TYPE` = 'work_item' ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t21.`GROUP` = 'bug' )
```

#### 执行用例关联缺陷(run_relation_work_item) :id=Work_item-Run_relation_work_item
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`TARGET_TYPE` = 'bug'  AND  t91.`PRINCIPAL_ID` = #{ctx.webcontext.run}  AND  ( t91.`PRINCIPAL_TYPE` = 'run'  OR  t91.`PRINCIPAL_TYPE` = 'test_case' ) ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 测试用例关联缺陷(test_case_relation_bug) :id=Work_item-Test_case_relation_bug
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t91.`PRINCIPAL_TYPE` = 'test_case'  AND  t91.`TARGET_TYPE` = 'bug' ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 测试用例关联工作项(test_case_relation_work_item) :id=Work_item-Test_case_relation_work_item
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t91.`TARGET_TYPE` = 'work_item'  AND  t91.`PRINCIPAL_TYPE` = 'test_case' ) ) AND ( t1.WORK_ITEM_TYPE_ID not like '%bug%'  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 测试计划关联缺陷(test_plan_relation_bug) :id=Work_item-Test_plan_relation_bug
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t21.`GROUP` = 'bug'  AND  (
    EXISTS (
      -- 与计划ID关联的RUN的WORK_ITEM
      SELECT 1
      FROM `relation` rel
      INNER JOIN `RUN` ru ON ru.`ID` = rel.`PRINCIPAL_ID`
      WHERE
        rel.`TARGET_ID` = t1.`ID`
        AND ru.`PLAN_ID` = #{ctx.webcontext.principal_id}
        AND rel.`TARGET_TYPE` = 'bug'
        AND rel.`PRINCIPAL_TYPE` = 'run'
    )
    OR EXISTS (
      -- 直接与计划ID关联的WORK_ITEM
      SELECT 1
      FROM `relation` r
      WHERE
        r.`TARGET_ID` = t1.`ID`
        AND r.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}
        AND r.`TARGET_TYPE` = 'work_item'
        AND r.`PRINCIPAL_TYPE` = 'test_plan'
    )
		) )
```

#### 工单关联工作项(ticket_relation_work_item) :id=Work_item-Ticket_relation_work_item
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t91.`TARGET_TYPE` = 'work_item'  AND  t91.`PRINCIPAL_TYPE` = 'ticket' ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 顶层数据查询(top) :id=Work_item-Top
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`PID` IS NULL  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 树表查询(tree_grid) :id=Work_item-Tree_grid
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`TOP_ID` IS NULL )
```

#### 项目集工作下的工作项(under_work) :id=Work_item-Under_work
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  ( exists (select 1 from `work` t2, project t3 where t1.PROJECT_ID = t3.id and t2.PRINCIPAL_ID = t3.id 
and t2.PRINCIPAL_TYPE = 'project' and t2.PORTFOLIO_ID =#{ctx.webcontext.portfolio_id})  OR  exists (select 1 from project t2 where t1.PROJECT_ID = t2.id and t2.IS_ARCHIVED = 0 and t2.IS_DELETED  = 0)
and exists (select 1 from `work` a1, `work` a2 where a1.PORTFOLIO_ID  = a2.PRINCIPAL_ID   and a1.PRINCIPAL_ID = t1.project_id and a2.PORTFOLIO_ID = #{ctx.webcontext.portfolio_id}) ) )
```

#### 默认（全部数据）(VIEW) :id=Work_item-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

```

#### 工作项关联工作项(work_item_relation_work_item) :id=Work_item-Work_item_relation_work_item
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t51.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t41.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`JOB_TYPE`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RELEASE_ID`,
t1.`REMAINING_WORKLOAD`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t81.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t61.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VERSION_ID`,
t71.`NAME` AS `VERSION_NAME`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `WORK_ITEM` t61 ON t1.`TOP_ID` = t61.`ID` 
LEFT JOIN `VERSION` t71 ON t1.`VERSION_ID` = t71.`ID` 
LEFT JOIN `SPRINT` t81 ON t1.`SPRINT_ID` = t81.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t91 
 WHERE 
 t1.`ID` = t91.`TARGET_ID`  AND  ( t91.`TARGET_TYPE` = 'work_item'  AND  t91.`PRINCIPAL_TYPE` = 'work_item'  AND  t91.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```


## [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/Work_item_state.md) :id=Work_item_state

#### 数据查询(DEFAULT) :id=Work_item_state-Default
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM_STATE` t1 

```

#### 默认（全部数据）(VIEW) :id=Work_item_state-View
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM_STATE` t1 

```


## [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/Work_item_type.md) :id=Work_item_type

#### 数据查询(DEFAULT) :id=Work_item_type-Default
```sql
SELECT
t1.`CODE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GROUP`,
t1.`ICON`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

```

#### 项目工作项类型(project_work_item_type) :id=Work_item_type-Project_work_item_type
```sql
SELECT
t1.`CODE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GROUP`,
t1.`ICON`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

WHERE ( `PROJECT_TYPE` = (select type from project where id= #{ctx.webcontext.project_id}) )
```

#### 非缺陷的工作项类型(project_work_item_type_not_bug) :id=Work_item_type-Project_work_item_type_not_bug
```sql
SELECT
t1.`CODE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GROUP`,
t1.`ICON`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

WHERE ( `PROJECT_TYPE` = (select type from project where id=#{ctx.webcontext.project_id}) and `group` <> 'bug' )
```

#### 默认（全部数据）(VIEW) :id=Work_item_type-View
```sql
SELECT
t1.`CODE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GROUP`,
t1.`ICON`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

```


## [工时(WORKLOAD)](module/Base/Workload.md) :id=Workload

#### 数据查询(DEFAULT) :id=Workload-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`DURATION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
t1.`REGISTER_DATE`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE_ID`,
t11.`NAME` AS `TYPE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORKLOAD` t1 
LEFT JOIN `WORKLOAD_TYPE` t11 ON t1.`TYPE_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=Workload-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`DURATION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RECENT_PARENT`,
t1.`RECENT_PARENT_IDENTIFIER`,
t1.`RECENT_PARENT_NAME`,
t1.`REGISTER_DATE`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE_ID`,
t11.`NAME` AS `TYPE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORKLOAD` t1 
LEFT JOIN `WORKLOAD_TYPE` t11 ON t1.`TYPE_ID` = t11.`ID` 

```


## [工时类别(WORKLOAD_TYPE)](module/Base/Workload_type.md) :id=Workload_type

#### 数据查询(DEFAULT) :id=Workload_type-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORKLOAD_TYPE` t1 

```

#### 默认（全部数据）(VIEW) :id=Workload_type-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORKLOAD_TYPE` t1 

```

