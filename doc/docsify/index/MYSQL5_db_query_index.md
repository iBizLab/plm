# MYSQL5 <!-- {docsify-ignore-all} -->

## [活动(ACTIVITY)](module/Base/activity.md) :id=activity

#### 数据查询(DEFAULT) :id=activity-Default
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
FROM `ACTIVITY` t1 

```

#### 默认（全部数据）(VIEW) :id=activity-View
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
FROM `ACTIVITY` t1 

```


## [组件(ADDON)](module/Base/addon.md) :id=addon

#### 数据查询(DEFAULT) :id=addon-Default
```sql
SELECT
t1.`ADDON_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON` t1 

```

#### 默认（全部数据）(VIEW) :id=addon-View
```sql
SELECT
t1.`ADDON_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SETTING_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON` t1 

```

#### 当前所有者(cur_owner) :id=addon-cur_owner
```sql
SELECT
t1.`ADDON_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.datacontext.owner_id} )
```

#### 预定义组件(predefine) :id=addon-predefine
```sql
SELECT
t1.`ADDON_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON` t1 

WHERE ( t1.`OWNER_ID` IS NULL )
```

#### 实体数据关系界面组（同步）(PSMODEL_SYNC) :id=addon-psmodel_sync
```sql
SELECT
t1.`ADDON_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON` t1 

WHERE ( t1.`OWNER_ID` IS NULL )
```


## [应用插件活动(ADDON_APPLICATION_ACTIVITY)](module/Base/addon_application_activity.md) :id=addon_application_activity

#### 数据查询(DEFAULT) :id=addon_application_activity-Default
```sql
SELECT
t1.`ACTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ELAPSED_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`PID`,
t1.`START_AT`,
t1.`STATE`,
t1.`SYSTEM_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON_APPLICATION_ACTIVITY` t1 

```

#### 默认（全部数据）(VIEW) :id=addon_application_activity-View
```sql
SELECT
t1.`ACTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DEBUG_INFO`,
t1.`ELAPSED_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`INFO`,
t1.`LEVEL`,
t1.`NAME`,
t1.`PID`,
t1.`START_AT`,
t1.`STATE`,
t1.`SYSTEM_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON_APPLICATION_ACTIVITY` t1 

```


## [资源组件(ADDON_RESOURCE)](module/Base/addon_resource.md) :id=addon_resource

#### 数据查询(DEFAULT) :id=addon_resource-Default
```sql
SELECT
t1.`ADDON_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`SETTING_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON` t1 

```

#### 默认（全部数据）(VIEW) :id=addon_resource-View
```sql
SELECT
t1.`ADDON_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`SETTING_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON` t1 

```

#### 资源组件(all) :id=addon_resource-all
```sql
SELECT
t1.`ADDON_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ADDON` t1 

WHERE ( t1.`OWNER_TYPE` = 'all'  AND  t1.`ADDON_TYPE` = 'resource' )
```


## [组件权限成员(ADDON_ROLE_MEMBER)](module/Base/addon_role_member.md) :id=addon_role_member

#### 数据查询(DEFAULT) :id=addon_role_member-Default
```sql
SELECT
t1.`ADDON_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_OBJ_ID`
FROM `ADDON_ROLE_MEMBER` t1 

```

#### 默认（全部数据）(VIEW) :id=addon_role_member-View
```sql
SELECT
t1.`ADDON_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_OBJ_ID`
FROM `ADDON_ROLE_MEMBER` t1 

```


## [应用视图主题(APP_VIEW_THEME)](module/ebsx/app_view_theme.md) :id=app_view_theme

#### 数据查询(DEFAULT) :id=app_view_theme-Default
```sql
SELECT
t1.`APP_TAG`,
t1.`APP_VIEW_TAG`,
t1.`CAPTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_TYPE`,
t1.`SYSTEM_TAG`,
t1.`THEME_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VALID_FLAG`
FROM `APP_VIEW_THEME` t1 

```

#### 默认（全部数据）(VIEW) :id=app_view_theme-View
```sql
SELECT
t1.`APP_TAG`,
t1.`APP_VIEW_TAG`,
t1.`CAPTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_TYPE`,
t1.`SYSTEM_TAG`,
t1.`THEME_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VALID_FLAG`
FROM `APP_VIEW_THEME` t1 

```

#### 当前系统（全局）(CUR_SYSTEM) :id=app_view_theme-cur_system
```sql
SELECT
t1.`APP_TAG`,
t1.`APP_VIEW_TAG`,
t1.`CAPTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_TYPE`,
t1.`SYSTEM_TAG`,
t1.`THEME_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VALID_FLAG`
FROM `APP_VIEW_THEME` t1 

WHERE ( t1.`SYSTEM_TAG` = #{ctx.sessioncontext.srfdcsystemid}  AND  t1.`OWNER_TYPE` = 'SYSTEM' )
```

#### 当前系统全部（含用户）(CUR_SYSTEM_ALL) :id=app_view_theme-cur_system_all
```sql
SELECT
t1.`APP_TAG`,
t1.`APP_VIEW_TAG`,
t1.`CAPTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_TYPE`,
t1.`SYSTEM_TAG`,
t1.`THEME_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VALID_FLAG`
FROM `APP_VIEW_THEME` t1 

WHERE ( t1.`SYSTEM_TAG` = #{ctx.sessioncontext.srfdcsystemid} )
```

#### 当前用户(CUR_USER) :id=app_view_theme-cur_user
```sql
SELECT
t1.`APP_TAG`,
t1.`APP_VIEW_TAG`,
t1.`CAPTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_TYPE`,
t1.`SYSTEM_TAG`,
t1.`THEME_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VALID_FLAG`
FROM `APP_VIEW_THEME` t1 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfuserid}  AND  t1.`SYSTEM_TAG` = #{ctx.sessioncontext.srfdcsystemid} )
```

#### 实体数据关系界面组（同步）(PSMODEL_SYNC) :id=app_view_theme-psmodel_sync
```sql
SELECT
t1.`APP_TAG`,
t1.`APP_VIEW_TAG`,
t1.`CAPTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_TYPE`,
t1.`SYSTEM_TAG`,
t1.`THEME_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VALID_FLAG`
FROM `APP_VIEW_THEME` t1 

WHERE ( t1.`OWNER_TYPE` = 'SYSTEM' )
```


## [页面(PAGE)](module/Wiki/article_page.md) :id=article_page

#### 数据查询(DEFAULT) :id=article_page-Default
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=article_page-View
```sql
SELECT
t1.`ACCESS_PASSWORD`,
(SELECT COUNT( att.ID ) AS comment_count FROM page p LEFT JOIN `attention` att ON p.ID = att.OWNER_ID WHERE p.ID = t1.`ID`) AS `ATTENTION_COUNT`,
t1.`CATEGORIES`,
(SELECT COUNT( com.ID ) AS comment_count FROM page p LEFT JOIN `comment` com ON p.ID = com.PRINCIPAL_ID WHERE p.ID = t1.`ID`) AS `COMMENT_COUNT`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`EXPIRATION_DATE`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_CONTENT`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
CASE WHEN EXISTS (SELECT 1 FROM ( select id from page where is_shared = '1' ) AS ids WHERE FIND_IN_SET(ids.id, REPLACE(t1.`CATEGORIES`, '/', ','))) THEN 1 ELSE 0 END AS `READ_SHARED`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
t1.`SHARED_BY`,
t1.`SHARED_TIME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```

#### 高级搜索(advanced_search) :id=article_page-advanced_search
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  exists(select 1 from space t2, space_member t3 where t1.space_id = t2.id and t2.id = t3.space_id and t3.user_id = #{ctx.sessioncontext.srfpersonid})  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`TYPE` = '1' )
```

#### 全部共享页面查询(all_shared_pages) :id=article_page-all_shared_pages
```sql
SELECT
t1.`EXPIRATION_DATE`,
t1.`ID`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PUBLISH_NAME`,
t1.`SHARED_BY`,
t1.`SHARED_TIME`,
t1.`SPACE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 

WHERE ( t1.`IS_SHARED` = '1'  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1 )
```

#### 基线选择页面(baseline_choose_page) :id=article_page-baseline_choose_page
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_ID` = #{ctx.webcontext.baseline}  AND  t21.`TARGET_TYPE` = 'page'  AND  t21.`PRINCIPAL_TYPE` = 'baseline' ) )) AND ( t1.`IS_DELETED` = 0 )
```

#### 子页面(child_page) :id=article_page-child_page
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`PARENT_ID` IS NOT NULL  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 选择共享页面(choose_shared) :id=article_page-choose_shared
```sql
SELECT
t1.`ICON`,
t1.`ID`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISH_NAME`,
t1.`SPACE_ID`
FROM `PAGE` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1 )
```

#### 草稿页面(draft_page) :id=article_page-draft_page
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 主页(home_page) :id=article_page-home_page
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`ID` = #{ctx.webcontext.n_space_id_eq} )
```

#### 已删除页面(is_deleted) :id=article_page-is_deleted
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 我的收藏(my_favorite_page) :id=article_page-my_favorite_page
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 过滤器默认查询(my_filter) :id=article_page-my_filter
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0  AND  t1.`TYPE` = '1'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_PUBLISHED` = 1 )
```

#### 无父页面(no_parent_page) :id=article_page-no_parent_page
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`PARENT_ID` IS NULL  AND  t1.`ID` <> #{ctx.webcontext.n_space_id_eq}  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1 )
```

#### 正常(normal) :id=article_page-normal
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_PUBLISHED` = 1 )
```

#### 仅页面(only_page) :id=article_page-only_page
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`TYPE` = '1' )
```

#### public :id=article_page-public
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t11.`VISIBILITY` = 'public' )
```

#### reader :id=article_page-reader
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t11.`ID` = t21.`SPACE_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 共享页面(shared_page) :id=article_page-shared_page
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_SHARED` = '1'  AND  t1.`ID` = #{ctx.webcontext.shared_page}  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1 )
```

#### 共享自读权限(shared_reader) :id=article_page-shared_reader
```sql
SELECT
t1.`ID`,
t1.`IS_SHARED`,
CASE WHEN EXISTS (SELECT 1 FROM ( select id from page where is_shared = '1' ) AS ids WHERE FIND_IN_SET(ids.id, REPLACE(t1.`CATEGORIES`, '/', ','))) THEN 1 ELSE 0 END AS `READ_SHARED`
FROM `PAGE` t1 

WHERE ( ( t1.`IS_SHARED` = '1'  OR  CASE WHEN EXISTS (SELECT 1 FROM ( select id from page where is_shared = '1' ) AS ids WHERE FIND_IN_SET(ids.id, REPLACE(t1.`CATEGORIES`, '/', ','))) THEN 1 ELSE 0 END = '1' )  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 共享搜索页面(shared_search) :id=article_page-shared_search
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`TYPE` = '1'  AND  t1.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.shared_page},'%') )
```

#### 共享子页面(shared_sub_pages) :id=article_page-shared_sub_pages
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.shared_page},'%')  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1 )
```

#### 与我共享(shared_with_me) :id=article_page-shared_with_me
```sql
SELECT
t1.`EXPIRATION_DATE`,
t1.`ID`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PUBLISH_NAME`,
t1.`SHARED_BY`,
t1.`SHARED_TIME`,
t1.`SPACE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t21 ON t1.`SPACE_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  t11.`OWNER_TYPE` = 'PAGE'  AND  t11.`OWNER_SUBTYPE` = 'SHARED'  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfuserid} ) ) AND ( t21.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`IS_SHARED` = '1' )
```

#### 与我共享编辑权限(shared_with_me_edit) :id=article_page-shared_with_me_edit
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ICON`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_LOCK`,
t1.`IS_PUBLISHED`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`OWNER_ID`  AND  t21.`OWNER_TYPE` = 'PAGE'  AND  t21.`OWNER_SUBTYPE` = 'SHARED'  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'user' ) ) AND ( t1.`IS_SHARED` = '1'  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`IS_DELETED` = 0 )
```


## [附件(ATTACHMENT)](module/Base/attachment.md) :id=attachment

#### 数据查询(DEFAULT) :id=attachment-Default
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
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

```

#### 默认（全部数据）(VIEW) :id=attachment-View
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
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

```

#### 移动端工作项附件(mob_work_item_attachment) :id=attachment-mob_work_item_attachment
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
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.work_item} )
```

#### 项目下的交付物(project_deliverable) :id=attachment-project_deliverable
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

#### 工作项交付物(work_item_deliverable) :id=attachment-work_item_deliverable
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
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

WHERE ( t1.`OWNER_TYPE` = 'WORK_ITEM' )
```


## [关注(ATTENTION)](module/Base/attention.md) :id=attention

#### 数据查询(DEFAULT) :id=attention-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `ATTENTION` t1 

```

#### 默认（全部数据）(VIEW) :id=attention-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `ATTENTION` t1 

```

#### 通过主数据标识查询通知对象(attention_by_ownerid) :id=attention-attention_by_ownerid
```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.id}  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`OWNER_ID` = #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose>  AND  ( t1.`TYPE` = '30'  OR  t1.`TYPE` = '40' )  AND  t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid} )
```

#### 评论提醒(comment_attention) :id=attention-comment_attention
```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( exists(select 1 from `comment` t2 where t1.owner_id = t2.PRINCIPAL_ID and t2.id=#{ctx.webcontext.id})  AND  t1.`TYPE` = '40'  AND  t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid} )
```

#### 通知对象(notify) :id=attention-notify
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.principal_id} )
```

#### 评审通知(review_notify) :id=attention-review_notify
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `ATTENTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.id}  AND  t1.`OWNER_SUBTYPE` = 'REVIEW'  AND  t1.`OWNER_TYPE` = 'REVIEW'  AND  t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid} )
```


## [认证日志(AUTH_LOG_ADMIN)](module/ebsx/auth_log_admin.md) :id=auth_log_admin

#### 数据查询(DEFAULT) :id=auth_log_admin-Default
```sql
SELECT
t1.`AUTHAGENT`,
t1.`AUTHCODE`,
t1.`AUTHTIME`,
t1.`DOMAINS`,
t1.`IPADDR`,
t1.`LOGID`,
t1.`MACADDR`,
t1.`PERSONNAME`,
t1.`USERAGENT`,
t1.`USERID`,
t1.`USERNAME`
FROM `IBZAUTHLOG` t1 

```

#### 默认（全部数据）(VIEW) :id=auth_log_admin-View
```sql
SELECT
t1.`AUTHAGENT`,
t1.`AUTHCODE`,
t1.`AUTHTIME`,
t1.`DOMAINS`,
t1.`IPADDR`,
t1.`LOGID`,
t1.`MACADDR`,
t1.`PERSONNAME`,
t1.`USERAGENT`,
t1.`USERID`,
t1.`USERNAME`
FROM `IBZAUTHLOG` t1 

```

#### 当前用户(cur_user) :id=auth_log_admin-cur_user
```sql
SELECT
t1.`AUTHAGENT`,
t1.`AUTHCODE`,
t1.`AUTHTIME`,
t1.`DOMAINS`,
t1.`IPADDR`,
t1.`LOGID`,
t1.`MACADDR`,
t1.`PERSONNAME`,
t1.`USERAGENT`,
t1.`USERID`,
t1.`USERNAME`
FROM `IBZAUTHLOG` t1 

WHERE ( t1.`USERID` = #{ctx.sessioncontext.srfpersonid} )
```


## [基线(BASELINE)](module/Base/baseline.md) :id=baseline

#### 数据查询(DEFAULT) :id=baseline-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BASELINE` t1 

```

#### 默认（全部数据）(VIEW) :id=baseline-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BASELINE` t1 

```

#### 基线查询(baseline) :id=baseline-baseline
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BASELINE` t1 

WHERE ( ( t1.`STATUS` = '1'  OR  t1.`STATUS` = '2' ) )
```

#### 规划快照(snapshot) :id=baseline-snapshot
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BASELINE` t1 

WHERE ( t1.`TYPE` = 'plan'  AND  t1.`OWNER_TYPE` = 'PROJECT'  AND  t1.`OWNER_ID` = #{ctx.webcontext.owner_id} )
```


## [看板(BOARD)](module/ProjMgmt/board.md) :id=board

#### 数据查询(DEFAULT) :id=board-Default
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

#### 默认（全部数据）(VIEW) :id=board-View
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

#### 当前项目看板（导入）(cur_board_upload) :id=board-cur_board_upload
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

WHERE ( t1.`PROJECT_ID` = #{ctx.datacontext.unknown} )
```

#### 当前项目下看板(cur_project_board) :id=board-cur_project_board
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

WHERE ( t1.`ID` <> #{ctx.webcontext.project} )
```

#### 公开(public) :id=board-public
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
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( t11.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=board-reader
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
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t21 
 WHERE 
 t11.`ID` = t21.`PROJECT_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```


## [代码分支(BRANCH)](module/DevOps/branch.md) :id=branch

#### 数据查询(DEFAULT) :id=branch-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`REPOSITORY_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BRANCH` t1 

```

#### 默认（全部数据）(VIEW) :id=branch-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`REPOSITORY_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BRANCH` t1 

```


## [分支提交关联(BRANCH_REF_COMMIT)](module/DevOps/branch_ref_commit.md) :id=branch_ref_commit

#### 数据查询(DEFAULT) :id=branch_ref_commit-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`META_ID`,
t1.`NAME`,
t1.`REPOSITORY_ID`,
t1.`SHA`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BRANCH_REF_COMMIT` t1 

```

#### 默认（全部数据）(VIEW) :id=branch_ref_commit-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`META_ID`,
t1.`NAME`,
t1.`REPOSITORY_ID`,
t1.`SHA`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BRANCH_REF_COMMIT` t1 

```


## [用例执行历史(CASE_HISTORY)](module/TestMgmt/case_history.md) :id=case_history

#### 数据查询(DEFAULT) :id=case_history-Default
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

#### 默认（全部数据）(VIEW) :id=case_history-View
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


## [类别(CATEGORY)](module/Base/category.md) :id=category

#### 数据查询(DEFAULT) :id=category-Default
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=category-View
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

```

#### 检查名称是否重复(check_name) :id=category-check_name
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.id !=null ">  t1.`ID` <> #{ctx.datacontext.id}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.datacontext.name !=null ">  t1.`NAME` = #{ctx.datacontext.name}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.datacontext.owner_id !=null ">  t1.`OWNER_ID` = #{ctx.datacontext.owner_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`OWNER_TYPE` = #{ctx.datacontext.owner_type}  AND  <choose><when test="ctx.datacontext.owner_subtype !=null ">  t1.`OWNER_SUBTYPE` = #{ctx.datacontext.owner_subtype}  </when><otherwise>1=1</otherwise></choose> )
```

#### 通用类别（代码表）(common_categories) :id=category-common_categories
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.webcontext.product !=null ">  t1.`OWNER_ID` = #{ctx.webcontext.product}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.project !=null ">  t1.`OWNER_ID` = #{ctx.webcontext.project}  </when><otherwise>1=1</otherwise></choose> )
```

#### 当前产品需求类别(cur_product_idea_category) :id=category-cur_product_idea_category
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'idea'  AND  t1.`OWNER_ID` = #{ctx.datacontext.product} )
```

#### 我的类别(my_category) :id=category-my_category
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 无父类(no_parent) :id=category-no_parent
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`PID` IS NULL )
```

#### 无分组的类别（且父标识不为空）(no_section) :id=category-no_section
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`SECTION_ID` IS NULL  AND  t1.`PID` IS NULL )
```

#### 职位类别(position_category) :id=category-position_category
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'position' )
```

#### 主模块(product_idea_category) :id=category-product_idea_category
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`PID` IS NULL )
```

#### 排期计划类别(product_plan) :id=category-product_plan
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'product_plan'  AND  <choose><when test="ctx.webcontext.product !=null ">  t1.`OWNER_ID` = #{ctx.webcontext.product}  </when><otherwise>1=1</otherwise></choose> )
```

#### 空间目录(space_category) :id=category-space_category
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'space'  AND  t1.`OWNER_SUBTYPE` = 'space' )
```

#### 空间目录（顶级）(space_category_top) :id=category-space_category_top
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'space'  AND  t1.`OWNER_SUBTYPE` = 'space'  AND  t1.`PID` IS NULL )
```


## [工单渠道(CHANNEL)](module/ProdMgmt/channel.md) :id=channel

#### 数据查询(DEFAULT) :id=channel-Default
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

#### 默认（全部数据）(VIEW) :id=channel-View
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


## [评论(COMMENT)](module/Base/comment.md) :id=comment

#### 数据查询(DEFAULT) :id=comment-Default
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_TOP`,
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

#### 默认（全部数据）(VIEW) :id=comment-View
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_TOP`,
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


## [代码提交(COMMIT)](module/DevOps/commit.md) :id=commit

#### 数据查询(DEFAULT) :id=commit-Default
```sql
SELECT
t1.`MESSAGE`,
t1.`SHA`
FROM `scm_commit` t1 

```

#### 默认（全部数据）(VIEW) :id=commit-View
```sql
SELECT
t1.`MESSAGE`,
t1.`SHA`
FROM `scm_commit` t1 

```


## [客户(CUSTOMER)](module/ProdMgmt/customer.md) :id=customer

#### 数据查询(DEFAULT) :id=customer-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=customer-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```

#### 评论通知负责人(comment_notify_assignee) :id=customer-comment_notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `CUSTOMER` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id} and t2.create_man != t1.assignee_id) )
```

#### 当前产品客户(cur_product_customer) :id=customer-cur_product_customer
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`PRODUCT_ID` = #{ctx.webcontext.n_product_id_eq} )
```

#### 需求未关联的客户(idea_notre_customer) :id=customer-idea_notre_customer
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
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

#### 需求关联客户(idea_relation_customer) :id=customer-idea_relation_customer
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
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

#### 正常状态(normal) :id=customer-normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`SCALE`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0 and a.state>='40') AS `TICKET_FINISH`,
(select count(1) from ticket a where a.customer_id=t1.`ID` and a.IS_DELETED=0) AS `TICKET_TOTAL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `CUSTOMER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 客户通知负责人(notify_assignee) :id=customer-notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `CUSTOMER` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.id}  AND  t1.`ASSIGNEE_ID` <> #{ctx.sessioncontext.srfpersonid} )
```


## [数据同步任务(DATA_SYNC_TASK)](module/Base/data_sync_task.md) :id=data_sync_task

#### 数据查询(DEFAULT) :id=data_sync_task-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DATA_SYNC_TASK` t1 

```

#### 默认（全部数据）(VIEW) :id=data_sync_task-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DATA_SYNC_TASK` t1 

```


## [交付物(DELIVERABLE)](module/Base/deliverable.md) :id=deliverable

#### 数据查询(DEFAULT) :id=deliverable-Default
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

#### 默认（全部数据）(VIEW) :id=deliverable-View
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

#### 我的交付物(my_deliverable) :id=deliverable-my_deliverable
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

WHERE ( t1.`OWNER_TYPE` = 'WORK_ITEM'  AND  t1.`OWNER_SUBTYPE` = 'DELIVERABLE'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 项目下的交付物(project_deliverable) :id=deliverable-project_deliverable
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
t2.IDENTIFIER as `WORK_ITEM_IDENTIFIER`,
t2.WORK_ITEM_TYPE_ID as `WORK_ITEM_TYPE_ID`
FROM `ATTACHMENT` `t1`, `WORK_ITEM` `t2`
WHERE t1.OWNER_ID = t2.ID and t1.OWNER_TYPE = 'WORK_ITEM' and t1.OWNER_SUBTYPE = 'DELIVERABLE'
and t2.is_archived = 0 and t2.is_deleted = 0
and exists(select 1 from `project` t3 where t3.id = t2.project_id and t3.id = #{ctx.webcontext.project_id})
```


## [依赖(DEPENDENCY)](module/Base/dependency.md) :id=dependency

#### DEFAULT :id=dependency-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `relation` t1 

```

#### 默认（全部数据）(VIEW) :id=dependency-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `relation` t1 

```

#### 工作项依赖(dependency_work_items) :id=dependency-dependency_work_items
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `relation` t1 

WHERE ( t1.`PRINCIPAL_TYPE` = 'dependency' )
```


## [数据字典(DICTIONARY)](module/Base/dictionary_data.md) :id=dictionary_data

#### 数据查询(DEFAULT) :id=dictionary_data-Default
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

```

#### 默认（全部数据）(VIEW) :id=dictionary_data-View
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

```

#### 需求(idea) :id=dictionary_data-idea
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` LIKE '%idea%' )
```

#### 需求优先级(idea_priority) :id=dictionary_data-idea_priority
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'idea_priority' )
```

#### 需求来源(idea_source) :id=dictionary_data-idea_source
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'idea_source' )
```

#### 需求状态(idea_state) :id=dictionary_data-idea_state
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'idea_state' )
```

#### 需求类型(idea_type) :id=dictionary_data-idea_type
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'idea_type' )
```

#### 发布阶段(release_stage) :id=dictionary_data-release_stage
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'release_stage' )
```

#### 测试用例(test_case) :id=dictionary_data-test_case
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` LIKE '%test_case%' )
```

#### 测试用例重要程度(test_case_level) :id=dictionary_data-test_case_level
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'test_case_level' )
```

#### 测试用例状态(test_case_status) :id=dictionary_data-test_case_status
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'test_case_status' )
```

#### 测试用例测试类型(test_case_test_type) :id=dictionary_data-test_case_test_type
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'test_case_test_type' )
```

#### 测试用例类型(test_case_type) :id=dictionary_data-test_case_type
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'test_case_type' )
```

#### 工单(ticket) :id=dictionary_data-ticket
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` LIKE '%ticket%' )
```

#### 工单优先级(ticket_priority) :id=dictionary_data-ticket_priority
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'ticket_priority' )
```

#### 工单解决方案(ticket_solution) :id=dictionary_data-ticket_solution
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'ticket_solution' )
```

#### 工单状态(ticket_state) :id=dictionary_data-ticket_state
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'ticket_state' )
```

#### 工作项(work_item) :id=dictionary_data-work_item
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` LIKE '%work_item%' )
```

#### 工作项任务类别(work_item_category) :id=dictionary_data-work_item_category
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'work_item_category' )
```

#### 工作项优先级(work_item_priority) :id=dictionary_data-work_item_priority
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'work_item_priority' )
```

#### 工作项复现概率(work_item_probability) :id=dictionary_data-work_item_probability
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'work_item_probability' )
```

#### 工作项风险(work_item_risk) :id=dictionary_data-work_item_risk
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'work_item_risk' )
```

#### 工作项严重程度(work_item_severity) :id=dictionary_data-work_item_severity
```sql
SELECT
t1.`CATALOG`,
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `DICTIONARY` t1 

WHERE ( t1.`CATALOG` = 'work_item_severity' )
```


## [协作成员(DISCUSS_MEMBER)](module/Team/discuss_member.md) :id=discuss_member

#### 数据查询(DEFAULT) :id=discuss_member-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 

```

#### 默认（全部数据）(VIEW) :id=discuss_member-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 

```


## [讨论(DISCUSS_POST)](module/Team/discuss_post.md) :id=discuss_post

#### 数据查询(DEFAULT) :id=discuss_post-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=discuss_post-View
```sql
SELECT
(SELECT COUNT( att.ID ) AS comment_count FROM discuss_post tc LEFT JOIN `attention` att ON tc.ID = att.OWNER_ID WHERE tc.ID = t1.`ID`) AS `ATTENTION_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM discuss_post tc LEFT JOIN `comment` com ON tc.ID = com.PRINCIPAL_ID WHERE tc.ID = t1.`ID`) AS `COMMENT_COUNT`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

```

#### 已删除(deleted) :id=discuss_post-deleted
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 讨论集合(mob_discuss_post_list) :id=discuss_post-mob_discuss_post_list
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE ( t11.`IS_ARCHIVED` = 0  AND  t11.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0 )
```

#### 我关注的(my_attention) :id=discuss_post-my_attention
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `ATTENTION` t21 
 WHERE 
 t1.`ID` = t21.`OWNER_ID`  AND  t21.`OWNER_TYPE` = 'DISCUSS_POST'  AND  t21.`OWNER_SUBTYPE` = 'DISCUSS_POST'  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`TYPE` IN ('20','30','40') ) ) AND ( t11.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0 )
```

#### 我发起的(my_create) :id=discuss_post-my_create
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_DELETED` = 0 )
```

#### 我的讨论(my_post) :id=discuss_post-my_post
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 我回复的(my_reply) :id=discuss_post-my_reply
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `DISCUSS_REPLY` t21 
 WHERE 
 t1.`ID` = t21.`POST_ID`  AND  ( t21.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t11.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0 )
```

#### 正常状态讨论(normal) :id=discuss_post-normal
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 父未删除(parent_not_deleted) :id=discuss_post-parent_not_deleted
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE ( t11.`IS_DELETED` = 0 )
```

#### 公开(public) :id=discuss_post-public
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE ( t11.`VISIBILITY` = 'public' ) AND ( t1.`IS_DELETED` = 0 )
```

#### 只读用户(reader) :id=discuss_post-reader
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `MEMBER` t21 
 WHERE 
 t11.`ID` = t21.`OWNER_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`OWNER_TYPE` = 'DISCUSS' ) ) AND ( t1.`IS_DELETED` = 0 )
```

#### 最新讨论(recent) :id=discuss_post-recent
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
(select count(1) as read_count from recent r where r.OWNER_ID = t1.`ID` and r.OWNER_TYPE = 'discuss' and r.OWNER_SUBTYPE = 'post') AS `READ_COUNT`,
(SELECT COUNT( reply.ID ) AS reply_count FROM DISCUSS_REPLY reply LEFT JOIN discuss_post dis ON dis.ID = reply.POST_ID WHERE dis.ID = t1.`ID`) AS `REPLIES`,
t1.`STATUS`,
t1.`TOPIC_ID`,
t11.`IDENTIFIER` AS `TOPIC_IDENTIFIER`,
t11.`NAME` AS `TOPIC_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_POST` t1 
LEFT JOIN `DISCUSS_TOPIC` t11 ON t1.`TOPIC_ID` = t11.`ID` 

WHERE ( t11.`IS_DELETED` = 0 ) AND ( DATEDIFF(sysdate(),t1.`CREATE_TIME`) <= 30  AND  t1.`IS_DELETED` = 0 )
```


## [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply.md) :id=discuss_reply

#### 数据查询(DEFAULT) :id=discuss_reply-Default
```sql
SELECT
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_NUM`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`NAME` AS `DISCUSS_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`POST_ID`,
t11.`TOPIC_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_REPLY` t1 
LEFT JOIN `DISCUSS_POST` t11 ON t1.`POST_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=discuss_reply-View
```sql
SELECT
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_NUM`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`NAME` AS `DISCUSS_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`POST_ID`,
t11.`TOPIC_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_REPLY` t1 
LEFT JOIN `DISCUSS_POST` t11 ON t1.`POST_ID` = t11.`ID` 

```

#### 我的全部回复(my_all_reply) :id=discuss_reply-my_all_reply
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`NAME` AS `DISCUSS_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`POST_ID`,
t11.`TOPIC_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_REPLY` t1 
LEFT JOIN `DISCUSS_POST` t11 ON t1.`POST_ID` = t11.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 我的回复(my_reply) :id=discuss_reply-my_reply
```sql
SELECT
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_NUM`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`NAME` AS `DISCUSS_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`POST_ID`,
t11.`TOPIC_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_REPLY` t1 
LEFT JOIN `DISCUSS_POST` t11 ON t1.`POST_ID` = t11.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(select 1 from discuss_post t2, discuss_topic t3 where t2.topic_id = t3.id 
 and t1.post_id = t2.id and t3.id = #{ctx.webcontext.discuss_topic}) )
```

#### 最新回复(recent) :id=discuss_reply-recent
```sql
SELECT
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM DISCUSS_REPLY reply LEFT JOIN `COMMENT` com ON reply.ID = com.PRINCIPAL_ID WHERE reply.ID = t1.`ID`) AS `COMMENT_NUM`,
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`NAME` AS `DISCUSS_NAME`,
t1.`ID`,
t1.`NAME`,
t1.`POST_ID`,
t11.`TOPIC_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `DISCUSS_REPLY` t1 
LEFT JOIN `DISCUSS_POST` t11 ON t1.`POST_ID` = t11.`ID` 

WHERE ( DATEDIFF(sysdate(),t1.`CREATE_TIME`) <= 30  AND  exists(select 1 from `discuss_post` t2, `member` t3 where t1.post_id = t2.id and t2.topic_id = t3.owner_id and t3.user_id = #{ctx.sessioncontext.srfpersonid})  AND  exists(select 1 from discuss_post t2, discuss_topic t3 where t2.topic_id = t3.id 
 and t1.post_id = t2.id and t3.id = #{ctx.webcontext.discuss_topic}) )
```


## [话题(DISCUSS_TOPIC)](module/Team/discuss_topic.md) :id=discuss_topic

#### 数据查询(DEFAULT) :id=discuss_topic-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

```

#### 默认（全部数据）(VIEW) :id=discuss_topic-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

```

#### 管理员(admin) :id=discuss_topic-admin
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'admin'  AND  t11.`OWNER_TYPE` = 'DISCUSS' ) )
```

#### 已归档(archived) :id=discuss_topic-archived
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 已归档星标话题(archived_favorite) :id=discuss_topic-archived_favorite
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 已归档未星标话题(archived_unfavorite) :id=discuss_topic-archived_unfavorite
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 当前话题(cur_discuss_topic) :id=discuss_topic-cur_discuss_topic
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.discuss_topic} )
```

#### 已删除(deleted) :id=discuss_topic-deleted
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 星标话题(favorite) :id=discuss_topic-favorite
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 星标话题（管理用户）(favorite_user) :id=discuss_topic-favorite_user
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`ROLE_ID` <> 'reader'  AND  t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`OWNER_TYPE` = 'DISCUSS' ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 团队话题(group) :id=discuss_topic-group
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t1.`SCOPE_TYPE` = 'user_group' )
```

#### 正常状态话题(normal) :id=discuss_topic-normal
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 组织话题(org) :id=discuss_topic-org
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t1.`SCOPE_TYPE` = 'organization' )
```

#### 开源社区查询(oss_main) :id=discuss_topic-oss_main
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  ( t1.`VISIBILITY` = 'public'  OR  EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) ) )
```

#### 公开(public) :id=discuss_topic-public
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=discuss_topic-reader
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'reader'  AND  t11.`OWNER_TYPE` = 'DISCUSS' ) )
```

#### 未星标话题(unfavorite) :id=discuss_topic-unfavorite
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 未星标话题（管理用户）(unfavorite_user) :id=discuss_topic-unfavorite_user
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`ROLE_ID` <> 'reader'  AND  t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`OWNER_TYPE` = 'DISCUSS' ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 操作用户(user) :id=discuss_topic-user
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
(select count(1) today_post_count from discuss_post p where p.TOPIC_ID = t1.`ID` and DATE(p.UPDATE_TIME) = curdate() ) AS `TODAY_POST_COUNT`,
(select count(1) today_read_count from recent r where r.OWNER_TYPE = 'discuss' and r.RECENT_PARENT = t1.`ID` and DATE(r.UPDATE_TIME) = curdate() ) AS `TODAY_READ_COUNT`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `DISCUSS_TOPIC` t1 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'user'  AND  t11.`OWNER_TYPE` = 'DISCUSS' ) )
```


## [动态应用菜单(DYNA_APPMENU)](module/Base/dyna_appmenu.md) :id=dyna_appmenu

#### 数据查询(DEFAULT) :id=dyna_appmenu-Default
```sql
SELECT
t1.`APPID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`MODELID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNA_APPMENU` t1 

```

#### 默认（全部数据）(VIEW) :id=dyna_appmenu-View
```sql
SELECT
t1.`APPID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`MODEL`,
t1.`MODELID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNA_APPMENU` t1 

```


## [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard.md) :id=dyna_dashboard

#### 数据查询(DEFAULT) :id=dyna_dashboard-Default
```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`EXAMPLE_CHART`,
t1.`IS_SYSTEM`,
t1.`MODELID`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`SEQUENCES`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNADASHBOARD` t1 

```

#### 默认（全部数据）(VIEW) :id=dyna_dashboard-View
```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DESC`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`EXAMPLE_CHART`,
t1.`IS_SYSTEM`,
t1.`MODEL`,
t1.`MODELID`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`SEQUENCES`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNADASHBOARD` t1 

```

#### 示例图(example_chart) :id=dyna_dashboard-example_chart
```sql
SELECT
t1.`APPID`,
t1.`DESC`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`EXAMPLE_CHART`,
t1.`IS_SYSTEM`,
t1.`MODELID`,
t1.`SEQUENCES`,
t1.`TYPE`
FROM `DYNADASHBOARD` t1 

WHERE ( t1.`IS_SYSTEM` = 1 )
```

#### 系统仪表盘(is_system) :id=dyna_dashboard-is_system
```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`EXAMPLE_CHART`,
t1.`IS_SYSTEM`,
t1.`MODELID`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`SEQUENCES`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNADASHBOARD` t1 

WHERE ( t1.`IS_SYSTEM` = 1 )
```

#### 我的看板(my_dashboard) :id=dyna_dashboard-my_dashboard
```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`EXAMPLE_CHART`,
t1.`IS_SYSTEM`,
t1.`MODELID`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`SEQUENCES`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNADASHBOARD` t1 

WHERE ( t1.`CREATEMAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 正常数据(normal) :id=dyna_dashboard-normal
```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`EXAMPLE_CHART`,
t1.`IS_SYSTEM`,
t1.`MODELID`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`SEQUENCES`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNADASHBOARD` t1 

```


## [看板栏(ENTRY)](module/ProjMgmt/entry.md) :id=entry

#### 数据查询(DEFAULT) :id=entry-Default
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

#### 默认（全部数据）(VIEW) :id=entry-View
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


## [执行人(EXECUTOR)](module/Base/executor.md) :id=executor

#### 数据查询(DEFAULT) :id=executor-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IS_ASSIGNEE`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`USER_NAME`
FROM `EXECUTOR` t1 

```

#### 默认（全部数据）(VIEW) :id=executor-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ESTIMATED_WORKLOAD`,
t1.`ID`,
t1.`IS_ASSIGNEE`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`USER_NAME`
FROM `EXECUTOR` t1 

```

#### 评论通知工作项执行人(comment_work_item_executor) :id=executor-comment_work_item_executor
```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `EXECUTOR` t1 

WHERE ( exists (select 1 from comment t2 where t1.OWNER_ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id})  AND  t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid} )
```

#### 通过主数据标识查询通知对象(executor_by_ownerid) :id=executor-executor_by_ownerid
```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `EXECUTOR` t1 

WHERE ( t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` = #{ctx.webcontext.id} )
```


## [扩展日志(EXTEND_LOG)](module/Base/extend_log.md) :id=extend_log

#### 数据查询(DEFAULT) :id=extend_log-Default
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

#### 默认（全部数据）(VIEW) :id=extend_log-View
```sql
SELECT
t1.`CATEGORY`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DEBUG_INFO`,
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


## [扩展存储(EXTEND_STORAGE)](module/Base/extend_storage.md) :id=extend_storage

#### 数据查询(DEFAULT) :id=extend_storage-Default
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

#### 默认（全部数据）(VIEW) :id=extend_storage-View
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


## [收藏(FAVORITE)](module/Base/favorite.md) :id=favorite

#### 数据查询(DEFAULT) :id=favorite-Default
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

#### 默认（全部数据）(VIEW) :id=favorite-View
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

#### 我的收藏(my_favorite) :id=favorite-my_favorite
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```


## [团队(GROUP)](module/Base/group.md) :id=group

#### 数据查询(DEFAULT) :id=group-Default
```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `USER_GROUP` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=group-View
```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `USER_GROUP` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

```

#### 无分组(no_section) :id=group-no_section
```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `USER_GROUP` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`SECTION_ID` IS NULL )
```

#### 公开(public) :id=group-public
```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `USER_GROUP` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`VISIBILITY` = 'public' )
```

#### 团队成员(user) :id=group-user
```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `USER_GROUP` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`OWNER_ID`  AND  t21.`OWNER_TYPE` = 'GROUP'  AND  t21.`OWNER_SUBTYPE` = 'GROUP'  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`OWNER_TYPE` = 'GROUP' ) )
```

#### 团队管理员(user_group_admin) :id=group-user_group_admin
```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `USER_GROUP` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`OWNER_ID`  AND  t21.`OWNER_TYPE` = 'GROUP'  AND  t21.`OWNER_SUBTYPE` = 'GROUP'  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`OWNER_TYPE` = 'GROUP'  AND  t21.`ROLE_ID` = 'admin' ) )
```


## [流程准则(GUIDELINE)](module/TestMgmt/guideline.md) :id=guideline

#### 数据查询(DEFAULT) :id=guideline-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`OBJECT_TYPE`,
t1.`REVIEW_ACTION_RULE`,
t1.`REVIEW_RULE`,
t1.`REVIEW_STAGE`,
t1.`SCOPE_ID`,
t1.`SUBJECT_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `GUIDELINE` t1 

```

#### 默认（全部数据）(VIEW) :id=guideline-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`OBJECT_TYPE`,
t1.`REVIEW_ACTION_RULE`,
t1.`REVIEW_RULE`,
t1.`REVIEW_STAGE`,
t1.`SCOPE_ID`,
t1.`SUBJECT_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `GUIDELINE` t1 

```

#### 基础准则(base) :id=guideline-base
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`OBJECT_TYPE`,
t1.`REVIEW_ACTION_RULE`,
t1.`REVIEW_RULE`,
t1.`REVIEW_STAGE`,
t1.`SCOPE_ID`,
t1.`SUBJECT_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `GUIDELINE` t1 

WHERE ( t1.`SCOPE_ID` IS NULL )
```

#### 正常状态(normal) :id=guideline-normal
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`OBJECT_TYPE`,
t1.`SCOPE_ID`,
t1.`SUBJECT_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `GUIDELINE` t1 

WHERE ( t1.`IS_ENABLED` = 1 )
```

#### 测试库下流程准则(under_library) :id=guideline-under_library
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`OBJECT_TYPE`,
t1.`REVIEW_ACTION_RULE`,
t1.`REVIEW_RULE`,
t1.`REVIEW_STAGE`,
t1.`SCOPE_ID`,
t1.`SUBJECT_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `GUIDELINE` t1 

WHERE ( t1.`SCOPE_ID` = #{ctx.webcontext.library} )
```


## [需求(IDEA)](module/ProdMgmt/idea.md) :id=idea

#### 数据查询(DEFAULT) :id=idea-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

```

#### 默认（全部数据）(VIEW) :id=idea-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
(SELECT COUNT( att.ID ) AS comment_count FROM idea tc LEFT JOIN `attention` att ON tc.ID = att.OWNER_ID WHERE tc.ID = t1.`ID`) AS `ATTENTION_COUNT`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
(SELECT COUNT( com.ID ) AS comment_count FROM idea tc LEFT JOIN `comment` com ON tc.ID = com.PRINCIPAL_ID WHERE tc.ID = t1.`ID`) AS `COMMENT_COUNT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='CUSTOMER') AS `RELATION_TOTAL_CUSTOMER`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='IDEA') AS `RELATION_TOTAL_IDEA`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TEST_CASE') AS `RELATION_TOTAL_TEST_CASE`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TICKET') AS `RELATION_TOTAL_TICKET`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='WORK_ITEM') AS `RELATION_TOTAL_WORK_ITEM`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

```

#### 管理员(admin) :id=idea-admin
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t41 
 WHERE 
 t11.`ID` = t41.`PRODUCT_ID`  AND  ( t41.`ROLE_ID` = 'admin'  AND  t41.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 高级搜索(advanced_search) :id=idea-advanced_search
```sql
SELECT
t1.`ID`,
t1.`IDENTIFIER`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`TITLE`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  exists(select 1 from product t2, product_member t3 where t1.product_id = t2.id and t2.id = t3.product_id and t3.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 已归档(archived) :id=idea-archived
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 基线选择需求(baseline_choose_idea) :id=idea-baseline_choose_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`TARGET_TYPE` = 'idea'  AND  t41.`PRINCIPAL_TYPE` = 'baseline'  AND  t41.`PRINCIPAL_ID` = #{ctx.webcontext.baseline} ) )) AND ( t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.category_id !=null ">  t1.`CATEGORY_ID` = #{ctx.webcontext.category_id}  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.category_id !=null ">  t21.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%')  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 基线需求(baseline_idea) :id=idea-baseline_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`TARGET_TYPE` = 'idea'  AND  t41.`PRINCIPAL_TYPE` = 'baseline'  AND  <choose><when test="ctx.webcontext.baseline !=null ">  t41.`PRINCIPAL_ID` = #{ctx.webcontext.baseline}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### BI反查(bi_detail) :id=idea-bi_detail
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

```

#### BI查询(bi_search) :id=idea-bi_search
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
t1.`IDENTIFIER`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PLAN_AT`,
t1.`PLAN_AT_FROM`,
t1.`PLAN_AT_TO`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t31.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t31.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_TO`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='CUSTOMER') AS `RELATION_TOTAL_CUSTOMER`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='IDEA') AS `RELATION_TOTAL_IDEA`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TEST_CASE') AS `RELATION_TOTAL_TEST_CASE`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TICKET') AS `RELATION_TOTAL_TICKET`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='WORK_ITEM') AS `RELATION_TOTAL_WORK_ITEM`,
t11.`SECTION_ID`,
t21.`NAME` AS `SECTION_NAME`,
concat(t31.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 
LEFT JOIN `SECTION` t21 ON t11.`SECTION_ID` = t21.`ID` 
LEFT JOIN `PRODUCT` t31 ON t1.`PRODUCT_ID` = t31.`ID` 

```

#### 评论通知负责人(comment_notify_assignee) :id=idea-comment_notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `IDEA` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id} and t2.create_man != t1.assignee_id) )
```

#### 通用需求查询(common) :id=idea-common
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.category_id !=null ">  t21.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.category_id !=null ">  t1.`CATEGORY_ID` = #{ctx.webcontext.category_id}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 特定用户(customer_user) :id=idea-customer_user
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t41 
 WHERE 
 t11.`ID` = t41.`PRODUCT_ID`  AND  ( t41.`ROLE_ID` = 'customer'  AND  t41.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 已删除(deleted) :id=idea-deleted
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 需求未归档集合过滤（移动端）(mob_not_archived) :id=idea-mob_not_archived
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.category_id !=null ">  t21.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.category_id !=null ">  t1.`CATEGORY_ID` = #{ctx.webcontext.category_id}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 移动需求(move_idea) :id=idea-move_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`PRODUCT_ID` = #{ctx.webcontext.product} )
```

#### 我负责的产品需求(my_assign) :id=idea-my_assign
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  OR  t1.`ASSIGNEE_NAME` = #{ctx.sessioncontext.srfpersonname} )  AND  t1.`IS_DELETED` = 0 )
```

#### 我关注的需求(my_attention) :id=idea-my_attention
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  exists(select 1 from `attention` t2 where t2.owner_id = t1.id and t2.`type` in ('20', '30', '40') and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 我创建的(my_created) :id=idea-my_created
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  OR  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonname} )  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 过滤器默认查询(my_filter) :id=idea-my_filter
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0 )
```

#### 我的事项需求(my_summary_idea) :id=idea-my_summary_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t11.`IS_ARCHIVED` = 0  AND  t11.`IS_DELETED` = 0 ) AND ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t1.state in ( select val from dictionary where CATALOG = 'idea_state' and type = 'in_progress') )
```

#### 正常状态(normal) :id=idea-normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  <choose><when test="ctx.webcontext.section_id !=null ">  t21.`SECTION_ID` = #{ctx.webcontext.section_id}  </when><otherwise>1=1</otherwise></choose> )
```

#### 未关联的需求(not_exsists_relation) :id=idea-not_exsists_relation
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`TARGET_TYPE` = #{ctx.webcontext.target_type}  AND  t41.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  AND  t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.category_id !=null ">  t21.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.category_id !=null ">  t1.`CATEGORY_ID` = #{ctx.webcontext.category_id}  </when><otherwise>1=1</otherwise></choose> )  AND  t1.`ID` <> #{ctx.webcontext.principal_id} )
```

#### 需求通知负责人(notify_assignee) :id=idea-notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `IDEA` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.id}  AND  t1.`ASSIGNEE_ID` <> #{ctx.sessioncontext.srfpersonid} )
```

#### 计划关联需求(plan_relation_idea) :id=idea-plan_relation_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t41.`TARGET_TYPE` = 'idea'  AND  t41.`PRINCIPAL_TYPE` = 'product_plan' ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 公开(public) :id=idea-public
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t11.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=idea-reader
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t41 
 WHERE 
 t11.`ID` = t41.`PRODUCT_ID`  AND  ( t41.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 最近浏览(recent_idea) :id=idea-recent_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  exists(select 1 from recent t2 where t1.id=t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )  AND  NOT EXISTS(SELECT 1 FROM `RELATION` t3 WHERE t1.`ID` = t3.`TARGET_ID` AND  t3.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}   ) )
```

#### 关联需求(relation_idea) :id=idea-relation_idea
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t41 
 WHERE 
 t1.`ID` = t41.`TARGET_ID`  AND  ( t41.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t41.`PRINCIPAL_TYPE` = 'idea'  AND  t41.`TARGET_TYPE` = 'idea' ) ) AND ( t1.`IS_DELETED` <> 1 )
```

#### 普通用户(user) :id=idea-user
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDEA_FROM`,
t1.`IDEA_TYPE`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
t1.`PROGRESS`,
t1.`REAL_AT`,
t1.`REAL_AT_FROM`,
t1.`REAL_AT_GRANULARITY`,
t1.`REAL_AT_TO`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `IDEA` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t41 
 WHERE 
 t11.`ID` = t41.`PRODUCT_ID`  AND  ( t41.`ROLE_ID` = 'user'  AND  t41.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```


## [需求模板(IDEA_TEMPLATE)](module/ProdMgmt/idea_template.md) :id=idea_template

#### 数据查询(DEFAULT) :id=idea_template-Default
```sql
SELECT
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA_TEMPLATE` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

```

#### 默认（全部数据）(VIEW) :id=idea_template-View
```sql
SELECT
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA_TEMPLATE` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

```

#### 全局需求模板(global) :id=idea_template-global
```sql
SELECT
t21.`CATEGORIES`,
t1.`CATEGORY_ID`,
t21.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`NAME` AS `PRODUCT_NAME`,
t21.`SECTION_ID`,
t31.`NAME` AS `SECTION_NAME`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `IDEA_TEMPLATE` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 
LEFT JOIN `CATEGORY` t21 ON t1.`CATEGORY_ID` = t21.`ID` 
LEFT JOIN `SECTION` t31 ON t21.`SECTION_ID` = t31.`ID` 

WHERE ( ( t1.`IS_GLOBAL` = 1  OR  t1.`PRODUCT_ID` = #{ctx.webcontext.product_id} ) )
```


## [洞察力(INSIGHT)](module/Base/insight.md) :id=insight

#### 数据查询(DEFAULT) :id=insight-Default
```sql
SELECT
t1.`BELONG`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESC`,
t1.`GROUP`,
t1.`ID`,
t1.`NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `INSIGHT` t1 

```

#### 默认（全部数据）(VIEW) :id=insight-View
```sql
SELECT
t1.`BELONG`,
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

#### 工作项分布(property_distribution) :id=insight-property_distribution
```sql
SELECT
t1.`BELONG`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESC`,
t1.`GROUP`,
t1.`ID`,
t1.`NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `INSIGHT` t1 

```


## [效能成员(INSIGHT_MEMBER)](module/Insight/insight_member.md) :id=insight_member

#### 数据查询(DEFAULT) :id=insight_member-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 

```

#### 默认（全部数据）(VIEW) :id=insight_member-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 

```


## [效能报表(INSIGHT_REPORT)](module/Insight/insight_report.md) :id=insight_report

#### 数据查询(DEFAULT) :id=insight_report-Default
```sql
SELECT
t1.`CATEGORIES`,
t1.`CHART_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESC`,
t1.`GROUP`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VIEW_ID`,
t11.`NAME` AS `VIEW_NAME`
FROM `INSIGHT_REPORT` t1 
LEFT JOIN `INSIGHT_VIEW` t11 ON t1.`VIEW_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=insight_report-View
```sql
SELECT
t1.`CATEGORIES`,
t1.`CHART_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESC`,
t1.`GROUP`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`TEMPLATE_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VIEW_ID`,
t11.`NAME` AS `VIEW_NAME`
FROM `INSIGHT_REPORT` t1 
LEFT JOIN `INSIGHT_VIEW` t11 ON t1.`VIEW_ID` = t11.`ID` 

```

#### 模板报表(is_system) :id=insight_report-is_system
```sql
SELECT
t1.`CATEGORIES`,
t1.`CHART_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESC`,
t1.`GROUP`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`TEMPLATE_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VIEW_ID`,
t11.`NAME` AS `VIEW_NAME`
FROM `INSIGHT_REPORT` t1 
LEFT JOIN `INSIGHT_VIEW` t11 ON t1.`VIEW_ID` = t11.`ID` 

WHERE ( t1.`IS_SYSTEM` = 1 )
```

#### 正常数据(normal) :id=insight_report-normal
```sql
SELECT
t1.`CATEGORIES`,
t1.`CHART_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESC`,
t1.`GROUP`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VIEW_ID`,
t11.`NAME` AS `VIEW_NAME`
FROM `INSIGHT_REPORT` t1 
LEFT JOIN `INSIGHT_VIEW` t11 ON t1.`VIEW_ID` = t11.`ID` 

```


## [效能视图(INSIGHT_VIEW)](module/Insight/insight_view.md) :id=insight_view

#### 数据查询(DEFAULT) :id=insight_view-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

```

#### 默认（全部数据）(VIEW) :id=insight_view-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

```

#### 管理员(admin) :id=insight_view-admin
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'admin'  AND  t11.`OWNER_TYPE` = 'INSIGHT' ) )
```

#### 已删除(deleted) :id=insight_view-deleted
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 星标页面(favorite) :id=insight_view-favorite
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 正常状态(normal) :id=insight_view-normal
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 公开(public) :id=insight_view-public
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

WHERE ( t1.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=insight_view-reader
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'reader'  AND  t11.`OWNER_TYPE` = 'INSIGHT' ) )
```

#### 非星标(unfavorite) :id=insight_view-unfavorite
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 操作用户(user) :id=insight_view-user
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `INSIGHT_VIEW` t1 

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'user'  AND  t11.`OWNER_TYPE` = 'INSIGHT' ) )
```


## [关键结果(KEY_RESULT)](module/Team/key_result.md) :id=key_result

#### 数据查询(DEFAULT) :id=key_result-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OBJECTIVE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `KEY_RESULT` t1 

```

#### 默认（全部数据）(VIEW) :id=key_result-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OBJECTIVE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `KEY_RESULT` t1 

```


## [测试库(LIBRARY)](module/TestMgmt/library.md) :id=library

#### 数据查询(DEFAULT) :id=library-Default
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

```

#### 默认（全部数据）(VIEW) :id=library-View
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

```

#### 管理员(admin) :id=library-admin
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`LIBRARY_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'admin' ) )
```

#### 已归档(archived) :id=library-archived
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 当前测试库(cur_library) :id=library-cur_library
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.library} )
```

#### 已删除(deleted) :id=library-deleted
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 查询星标(favorite) :id=library-favorite
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 查询星标（管理用户）(favorite_user) :id=library-favorite_user
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`LIBRARY_ID`  AND  ( t11.`ROLE_ID` <> 'reader'  AND  t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1' )
```

#### 正常状态(normal) :id=library-normal
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 与项目关联的测试库(project_relation_library) :id=library-project_relation_library
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from test_plan t2 where t1.ID=t2.LIBRARY_ID and t2.PROJECT_ID = #{ctx.webcontext.project_id}) )
```

#### 公开(public) :id=library-public
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=library-reader
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`LIBRARY_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'reader' ) )
```

#### 非星标测试库(unfavorite) :id=library-unfavorite
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 非星标测试库（管理用户）(unfavorite_user) :id=library-unfavorite_user
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`LIBRARY_ID`  AND  ( t11.`ROLE_ID` <> 'reader'  AND  t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 普通成员(user) :id=library-user
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `LIBRARY` t1 

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`LIBRARY_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'user' ) )
```


## [测试库成员(LIBRARY_MEMBER)](module/TestMgmt/library_member.md) :id=library_member

#### 数据查询(DEFAULT) :id=library_member-Default
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=library_member-View
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```

#### 当前测试库成员(cur_library_member) :id=library_member-cur_library_member
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.library_id !=null ">  t1.`LIBRARY_ID` = #{ctx.datacontext.library_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`LIBRARY_ID` = #{ctx.datacontext.id} )
```

#### 移动端当前测试库成员(mob_cur_member) :id=library_member-mob_cur_member
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```

#### 未关注用户(测试用例)(no_attention) :id=library_member-no_attention
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `LIBRARY_MEMBER` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

WHERE ( ( USER_ID NOT IN (SELECT user_id from attention t2 where t2.OWNER_ID = #{ctx.webcontext.test_case} )) )
```


## [部门(LOCAL_DEPARTMENT)](module/Base/local_department.md) :id=local_department

#### 数据查询(DEFAULT) :id=local_department-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAD_ID`,
t1.`ID`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `LOCAL_DEPARTMENT` t1 

```

#### 默认（全部数据）(VIEW) :id=local_department-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`HEAD_ID`,
t1.`ID`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `LOCAL_DEPARTMENT` t1 

```


## [企业用户(LOCAL_USER)](module/Base/local_user.md) :id=local_user

#### 数据查询(DEFAULT) :id=local_user-Default
```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DEPARTMENT_ID`,
t11.`NAME` AS `DEPARTMENT_NAME`,
t1.`DISPLAY_NAME`,
t1.`EMAIL`,
t1.`EMPLOYEE_NUMBER`,
t1.`ID`,
t1.`MOBILE`,
t1.`NAME`,
t1.`ORGANIZATION_ID`,
t1.`PASSWORD`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `LOCAL_USER` t1 
LEFT JOIN `LOCAL_DEPARTMENT` t11 ON t1.`DEPARTMENT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=local_user-View
```sql
SELECT
t1.`AVATAR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DEPARTMENT_ID`,
t11.`NAME` AS `DEPARTMENT_NAME`,
t1.`DISPLAY_NAME`,
t1.`EMAIL`,
t1.`EMPLOYEE_NUMBER`,
t1.`ID`,
t1.`MOBILE`,
t1.`NAME`,
t1.`ORGANIZATION_ID`,
t1.`PASSWORD`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `LOCAL_USER` t1 
LEFT JOIN `LOCAL_DEPARTMENT` t11 ON t1.`DEPARTMENT_ID` = t11.`ID` 

```


## [成员(MEMBER)](module/Base/member.md) :id=member

#### 数据查询(DEFAULT) :id=member-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`POSITION_ID`,
t11.`NAME` AS `POSITION_NAME`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 
LEFT JOIN `POSITION` t11 ON t1.`POSITION_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=member-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`POSITION_ID`,
t11.`NAME` AS `POSITION_NAME`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 
LEFT JOIN `POSITION` t11 ON t1.`POSITION_ID` = t11.`ID` 

```

#### 未关注成员(no_attention) :id=member-no_attention
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`POSITION_ID`,
t11.`NAME` AS `POSITION_NAME`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 
LEFT JOIN `POSITION` t11 ON t1.`POSITION_ID` = t11.`ID` 

WHERE ( ( USER_ID NOT IN (SELECT user_id from attention t2 where t2.OWNER_ID = #{ctx.webcontext.principal_id} )) )
```

#### 共享页面_非空间成员(shared_page_member) :id=member-shared_page_member
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`POSITION_ID`,
t11.`NAME` AS `POSITION_NAME`,
t1.`ROLE_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `MEMBER` t1 
LEFT JOIN `POSITION` t11 ON t1.`POSITION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.shared_page}  AND  t1.`OWNER_TYPE` = 'PAGE'  AND  t1.`OWNER_SUBTYPE` = 'SHARED' )
```

#### 团队管理员(user_group_admin) :id=member-user_group_admin
```sql
SELECT
t1.`ID`,
t1.`USER_ID`
FROM `MEMBER` t1 

WHERE ( t1.`ROLE_ID` = 'admin'  AND  t1.`OWNER_TYPE` = 'GROUP' )
```


## [目标(OBJECTIVE)](module/Team/objective.md) :id=objective

#### 数据查询(DEFAULT) :id=objective-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PERIOD_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `OBJECTIVE` t1 

```

#### 默认（全部数据）(VIEW) :id=objective-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PERIOD_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `OBJECTIVE` t1 

```


## [第三方用户(OPENUSER)](module/ebsx/openuser.md) :id=openuser

#### 数据查询(DEFAULT) :id=openuser-Default
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEPTS`,
t1.`ISBINDING`,
t1.`MOBILE`,
t1.`OPENUSERCODE`,
t1.`OPENUSERID`,
t1.`OPENUSERNAME`,
t1.`OPEN_TYPE`,
t1.`ORGID`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERID`
FROM `IBZOPENUSER` t1 

```

#### 默认（全部数据）(VIEW) :id=openuser-View
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEPTS`,
t1.`ISBINDING`,
t1.`MOBILE`,
t1.`OPENUSERCODE`,
t1.`OPENUSERID`,
t1.`OPENUSERNAME`,
t1.`OPEN_TYPE`,
t1.`ORGID`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERID`
FROM `IBZOPENUSER` t1 

```

#### 企业微信(wxwork) :id=openuser-wxwork
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEPTS`,
t1.`ISBINDING`,
t1.`MOBILE`,
t1.`OPENUSERCODE`,
t1.`OPENUSERID`,
t1.`OPENUSERNAME`,
t1.`OPEN_TYPE`,
t1.`ORGID`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERID`
FROM `IBZOPENUSER` t1 

WHERE ( t1.`OPEN_TYPE` = 'wxwork' )
```


## [页面版本(PAGE_VERSION)](module/Wiki/page_version.md) :id=page_version

#### 数据查询(DEFAULT) :id=page_version-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DATA`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_NAMED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `version` t1 

```

#### 默认（全部数据）(VIEW) :id=page_version-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DATA`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_NAMED`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `version` t1 

```


## [系统参数(PARAMETER)](module/Base/parameter.md) :id=parameter

#### 数据查询(DEFAULT) :id=parameter-Default
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
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `PARAMETER` t1 

```

#### 默认（全部数据）(VIEW) :id=parameter-View
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
t1.`UPDATE_TIME`,
t1.`VAL`
FROM `PARAMETER` t1 

```


## [周期(PERIOD)](module/Team/period.md) :id=period

#### 数据查询(DEFAULT) :id=period-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PERIOD` t1 

```

#### 默认（全部数据）(VIEW) :id=period-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PERIOD` t1 

```


## [文件夹(PORTFOLIO)](module/Base/portfolio.md) :id=portfolio

#### 数据查询(DEFAULT) :id=portfolio-Default
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

#### 默认（全部数据）(VIEW) :id=portfolio-View
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

#### 管理员(admin) :id=portfolio-admin
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

#### 选择项目集(choose_project_portfolio) :id=portfolio-choose_project_portfolio
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

#### 查询星标(favorite) :id=portfolio-favorite
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

#### 已删除的项目集(project_set_deleted) :id=portfolio-project_set_deleted
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

#### 进行中的项目集(project_set_going) :id=portfolio-project_set_going
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

#### 只读用户(reader) :id=portfolio-reader
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
 t1.`ID` = t11.`PORTFOLIO_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'reader' ) )
```

#### 普通成员(user) :id=portfolio-user
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

#### 工作下的项目集(work_project_portfolio) :id=portfolio-work_project_portfolio
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


## [文件夹成员(PORTFOLIO_MEMBER)](module/Base/portfolio_member.md) :id=portfolio_member

#### 数据查询(DEFAULT) :id=portfolio_member-Default
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

#### 默认（全部数据）(VIEW) :id=portfolio_member-View
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

#### 当前项目集下成员(cur_project_set) :id=portfolio_member-cur_project_set
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

WHERE ( t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid}  AND  t1.`PORTFOLIO_ID` = #{ctx.datacontext.id} )
```


## [职位(POSITION)](module/Base/position.md) :id=position

#### 数据查询(DEFAULT) :id=position-Default
```sql
SELECT
t1.`CATEGORY_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ENABLE`,
t1.`ID`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `POSITION` t1 

WHERE t1.ENABLE = 1
```

#### 默认（全部数据）(VIEW) :id=position-View
```sql
SELECT
t1.`CATEGORY_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ENABLE`,
t1.`ID`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `POSITION` t1 

WHERE t1.ENABLE = 1
```

#### 无分组(no_category) :id=position-no_category
```sql
SELECT
t1.`CATEGORY_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ENABLE`,
t1.`ID`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `POSITION` t1 

WHERE t1.ENABLE = 1 AND ( t1.`CATEGORY_ID` IS NULL )
```


## [产品(PRODUCT)](module/ProdMgmt/product.md) :id=product

#### 数据查询(DEFAULT) :id=product-Default
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

```

#### 默认（全部数据）(VIEW) :id=product-View
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

```

#### 管理员(admin) :id=product-admin
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PRODUCT_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'admin' ) )
```

#### 已归档(archived) :id=product-archived
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 当前产品(cur_product) :id=product-cur_product
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.product} )
```

#### 特定用户(customer_user) :id=product-customer_user
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PRODUCT_ID`  AND  ( t11.`ROLE_ID` = 'customer'  AND  t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 已删除(deleted) :id=product-deleted
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 查询星标(favorite) :id=product-favorite
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1'  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 查询星标（管理用户）(favorite_user) :id=product-favorite_user
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PRODUCT_ID`  AND  ( t11.`ROLE_ID` <> 'reader'  AND  t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1'  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 未关联项目(no_relation) :id=product-no_relation
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t11 
 WHERE 
 t1.`ID` = t11.`TARGET_ID`  AND  ( t11.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0 )
```

#### 正常状态(normal) :id=product-normal
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 公开(public) :id=product-public
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( t1.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=product-reader
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PRODUCT_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'reader' ) )
```

#### 未星标产品(unfavorite) :id=product-unfavorite
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 未星标产品（管理用户）(unfavorite_user) :id=product-unfavorite_user
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PRODUCT_ID`  AND  ( t11.`ROLE_ID` <> 'reader'  AND  t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 操作用户(user) :id=product-user
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
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `PRODUCT` t1 

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PRODUCT_ID`  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t11.`ROLE_ID` = 'user' ) )
```


## [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md) :id=product_member

#### 数据查询(DEFAULT) :id=product_member-Default
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PRODUCT_MEMBER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=product_member-View
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PRODUCT_MEMBER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

```

#### 当前产品(cur_product) :id=product_member-cur_product
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PRODUCT_MEMBER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.product_id !=null ">  t1.`PRODUCT_ID` = #{ctx.datacontext.product_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`PRODUCT_ID` = #{ctx.datacontext.id} )
```

#### 产品下成员(with_product) :id=product_member-with_product
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `PRODUCT_MEMBER` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( t1.`PRODUCT_ID` = #{ctx.webcontext.product_id} )
```


## [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan.md) :id=product_plan

#### 数据查询(DEFAULT) :id=product_plan-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`SEQUENCE`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

```

#### 默认（全部数据）(VIEW) :id=product_plan-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`SEQUENCE`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

```

#### 类别下的计划(category_plan) :id=product_plan-category_plan
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`SEQUENCE`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

WHERE ( t1.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%')  AND  t1.`IS_DELETED` = 0 )
```

#### 正常状态(normal) :id=product_plan-normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`SEQUENCE`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`PRODUCT_ID` = #{ctx.webcontext.product} )
```

#### 当前计划(this_plan) :id=product_plan-this_plan
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`SEQUENCE`,
t1.`START_AT`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_PLAN` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.product_plan}  AND  t1.`IS_DELETED` = 0 )
```


## [产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag.md) :id=product_tag

#### 数据查询(DEFAULT) :id=product_tag-Default
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

#### 默认（全部数据）(VIEW) :id=product_tag-View
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

#### 当前项目标签(cur_product_tag) :id=product_tag-cur_product_tag
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

WHERE ( t1.`PRODUCT_ID` = #{ctx.datacontext.product} )
```


## [产品工单类型(PRODUCT_TICKET_TYPE)](module/ProdMgmt/product_ticket_type.md) :id=product_ticket_type

#### 数据查询(DEFAULT) :id=product_ticket_type-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`TICKET_TYPE_ID`,
t11.`NAME` AS `TICKET_TYPE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_TICKET_TYPE` t1 
LEFT JOIN `TICKET_TYPE` t11 ON t1.`TICKET_TYPE_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=product_ticket_type-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t11.`DESCRIPTION`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT_ID`,
t1.`TICKET_TYPE_ID`,
t11.`NAME` AS `TICKET_TYPE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PRODUCT_TICKET_TYPE` t1 
LEFT JOIN `TICKET_TYPE` t11 ON t1.`TICKET_TYPE_ID` = t11.`ID` 

```


## [项目进度(PROGRESS)](module/ProjMgmt/progress.md) :id=progress

#### 数据查询(DEFAULT) :id=progress-Default
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

#### 默认（全部数据）(VIEW) :id=progress-View
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


## [项目(PROJECT)](module/ProjMgmt/project.md) :id=project

#### 数据查询(DEFAULT) :id=project-Default
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=project-View
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND PROJECT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND PROJECT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`NOTICE`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

```

#### 管理员(admin) :id=project-admin
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`PROJECT_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'admin' ) )
```

#### 已归档(archived) :id=project-archived
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### BI反查(bi_detail) :id=project-bi_detail
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

```

#### BI查询(bi_search) :id=project-bi_search
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND PROJECT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND PROJECT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 

```

#### 选择项目(choose_project) :id=project-choose_project
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  not exists(select 1 from `work` t2 where t1.id = t2.principal_id and t2.portfolio_id = #{ctx.webcontext.portfolio_id}) )
```

#### 当前项目(cur_project) :id=project-cur_project
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`ID` = #{ctx.webcontext.project} )
```

#### 当前项目(current) :id=project-current
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( <choose><when test="ctx.webcontext.project !=null ">  t1.`ID` = #{ctx.webcontext.project}  </when><otherwise>1=1</otherwise></choose> )
```

#### 已删除(deleted) :id=project-deleted
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 查询星标(favorite) :id=project-favorite
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 查询星标（管理用户）(favorite_user) :id=project-favorite_user
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`PROJECT_ID`  AND  ( t21.`ROLE_ID` <> 'reader'  AND  t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 未关联的项目(no_relation) :id=project-no_relation
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 正常状态(normal) :id=project-normal
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 产品关联项目(product_re_project) :id=project-product_re_project
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_ID` = #{ctx.webcontext.product} ) )
```

#### 公开(public) :id=project-public
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=project-reader
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`PROJECT_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'reader' ) )
```

#### 相同类型项目(same_type) :id=project-same_type
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from project t2 where  t1.`type` = t2.`type` and t2.id = #{ctx.webcontext.project}) )
```

#### 项目集下的项目(under_project_portfolio) :id=project-under_project_portfolio
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from `work` t2 where t2.principal_id = t1.id and t2.portfolio_id = #{ctx.webcontext.n_portfolio_id_eq
}) )
```

#### 非星标项目(unfavorite) :id=project-unfavorite
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 非星标项目（管理用户）(unfavorite_user) :id=project-unfavorite_user
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`PROJECT_ID`  AND  ( t21.`ROLE_ID` <> 'reader'  AND  t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0' )
```

#### 操作用户(user) :id=project-user
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`PROJECT_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'user' ) )
```

#### 项目集工作下的项目(work_project) :id=project-work_project
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from `work` t2 where t2.principal_id = t1.id and t2.portfolio_id = #{ctx.webcontext.project_portfolio}) )
```


## [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member.md) :id=project_member

#### 数据查询(DEFAULT) :id=project_member-Default
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`WEEKDAY`
FROM `PROJECT_MEMBER` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=project_member-View
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`WEEKDAY`
FROM `PROJECT_MEMBER` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### 当前项目成员(cur_project) :id=project_member-cur_project
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`WEEKDAY`
FROM `PROJECT_MEMBER` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.project_id !=null ">  t1.`PROJECT_ID` = #{ctx.datacontext.project_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`PROJECT_ID` = #{ctx.datacontext.id}  AND  t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid} )
```

#### 未关注用户(工作项)(no_attention) :id=project_member-no_attention
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`,
t1.`WEEKDAY`
FROM `PROJECT_MEMBER` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( ( USER_ID NOT IN (SELECT user_id from attention t2 where t2.OWNER_ID = #{ctx.webcontext.work_item} )) )
```


## [项目状态(PROJECT_STATE)](module/ProjMgmt/project_state.md) :id=project_state

#### 数据查询(DEFAULT) :id=project_state-Default
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_STATE` t1 

```

#### 默认（全部数据）(VIEW) :id=project_state-View
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_STATE` t1 

```


## [项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag.md) :id=project_tag

#### 数据查询(DEFAULT) :id=project_tag-Default
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

#### 默认（全部数据）(VIEW) :id=project_tag-View
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


## [拉取提交(PULL_REQUEST)](module/DevOps/pull_request.md) :id=pull_request

#### 数据查询(DEFAULT) :id=pull_request-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`REPOSITORY_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PULL_REQUEST` t1 

```

#### 默认（全部数据）(VIEW) :id=pull_request-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`REPOSITORY_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PULL_REQUEST` t1 

```


## [最近访问(RECENT)](module/Base/recent.md) :id=recent

#### 数据查询(DEFAULT) :id=recent-Default
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

#### 默认（全部数据）(VIEW) :id=recent-View
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

#### 最近访问(recent_access) :id=recent-recent_access
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

WHERE ( t1.`TYPE` = '2'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_DELETED` = 0 )
```

#### 最近浏览当前产品内工单(recent_curproduct_ticket) :id=recent-recent_curproduct_ticket
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

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'ticket'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  exists(select 1 from ticket t2 where t1.owner_id = t2.id   and t2.is_deleted = 0  and t2.customer_id is null ) )
```

#### 最近浏览当前项目子工作项(recent_curproject_child_work_item) :id=recent-recent_curproject_child_work_item
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

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  exists(select 1 from work_item t2 where t1.owner_id = t2.id and t2.project_id = #{ctx.webcontext.project} and t2.is_deleted = 0 AND FIND_IN_SET(t2.WORK_ITEM_TYPE_ID, #{ctx.webcontext.n_work_item_type_id_in} ) > 0 and (t2.pid <> #{ctx.webcontext.principal_id} or t2.pid is null) ) )
```

#### 最近浏览当前项目工作项(recent_curproject_work_item) :id=recent-recent_curproject_work_item
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

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  exists(select 1 from work_item t2 where t1.owner_id = t2.id and t2.project_id = #{ctx.webcontext.project} and t2.is_deleted = 0 and (t2.pid <> #{ctx.webcontext.principal_id} or t2.pid is null) ) )
```

#### 最近浏览_需求(recent_idea) :id=recent-recent_idea
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

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'idea'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} )  AND  exists(SELECT 1 FROM idea t3 where t3.id = t1.owner_id and t3.is_deleted =0) )
```

#### 最近访问页面(recent_page) :id=recent-recent_page
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

WHERE ( t1.`OWNER_TYPE` = 'space'  AND  t1.`OWNER_SUBTYPE` = 'page'  AND  t1.`UPDATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(SELECT 1 FROM page t3 
inner join space t4 on t4.id = t3.space_id and t4.is_deleted = 0
where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0) )
```

#### 最近访问项目(recent_project) :id=recent-recent_project
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

WHERE ( t1.`UPDATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_TYPE` = 'project'  AND  ( t1.`OWNER_SUBTYPE` = 'scrum'  OR  t1.`OWNER_SUBTYPE` = 'kanban'  OR  t1.`OWNER_SUBTYPE` = 'waterfall'  OR  t1.`OWNER_SUBTYPE` = 'hybrid' ) )
```

#### 最近浏览_用例(recent_test_case) :id=recent-recent_test_case
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

WHERE ( t1.`OWNER_TYPE` = 'library'  AND  t1.`OWNER_SUBTYPE` = 'test_case'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose>  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} )  AND  exists(SELECT 1 FROM test_case t3 where t3.id = t1.owner_id  and t3.is_deleted =0) )
```

#### 最近访问的用例_首页(recent_test_case_index) :id=recent-recent_test_case_index
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

#### 最近浏览_工单(recent_ticket) :id=recent-recent_ticket
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

WHERE ( t1.`OWNER_TYPE` = 'product'  AND  t1.`OWNER_SUBTYPE` = 'ticket'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} )  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  exists(SELECT 1 FROM ticket t3 where t3.id = t1.owner_id and t3.is_deleted =0) )
```

#### 最近使用(recent_use) :id=recent-recent_use
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`TYPE` = '1'  AND  t1.`IS_DELETED` = 0 )
```

#### 最近浏览_工作项(recent_work_item) :id=recent-recent_work_item
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

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(select 1 from work_item t3 where t1.owner_id = t3.id and t3.is_deleted = 0)  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} and principal_type <> 'dependency')  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id} )
```

#### 最近浏览工作项且不含缺陷(recent_work_item_and_nobug) :id=recent-recent_work_item_and_nobug
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

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} and t2.principal_type not like '%bug%')  AND  exists(SELECT 1 FROM work_item t3,work_item_type t4 where t3.id = t1.owner_id and t3.is_deleted =0 and t3.WORK_ITEM_TYPE_ID = t4.ID and t4.`group` <> 'bug') )
```

#### 最近浏览_缺陷(recent_work_item_bug) :id=recent-recent_work_item_bug
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

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  not exists(select 1 from relation t2 where t2.target_id = t1.owner_id and t2.principal_id = #{ctx.webcontext.principal_id} )  AND  exists(SELECT 1 FROM work_item t3,work_item_type t4 where t3.id = t1.owner_id and t3.is_deleted =0 and t3.WORK_ITEM_TYPE_ID = t4.ID and t4.`group` =  'bug') )
```

#### 最近浏览_依赖工作项(recent_work_item_dependency) :id=recent-recent_work_item_dependency
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

WHERE ( t1.`OWNER_TYPE` = 'project'  AND  t1.`OWNER_SUBTYPE` = 'work_item'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(select 1 from work_item t3 where t1.owner_id = t3.id and t3.project_id = #{ctx.webcontext.project} and t3.is_deleted = 0)  AND  t1.`OWNER_ID` <> #{ctx.webcontext.principal_id}  AND  not exists(select  1 from relation t3 where (t1.owner_id = t3.principal_id or  t1.owner_id = t3.target_id) and t3.principal_type = 'dependency') )
```

#### 本人最新访问(user) :id=recent-user
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```


## [关联(RELATION)](module/Base/relation.md) :id=relation

#### 数据查询2(DATAQUERY2) :id=relation-DataQuery2
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

```

#### 数据查询(DEFAULT) :id=relation-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

```

#### 默认（全部数据）(VIEW) :id=relation-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

```

#### 全部数据(all) :id=relation-all
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

```

#### 基线下的工作项(baseline_relation_work_item) :id=relation-baseline_relation_work_item
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.baseline}  AND  t1.`PRINCIPAL_TYPE` = 'baseline'  AND  t1.`TARGET_TYPE` = 'work_item' )
```

#### 工作项依赖(dependency_work_items) :id=relation-dependency_work_items
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( ( exists(select 1 from work_item t2 where t1.principal_id = t2.id and t1.principal_id = #{ctx.webcontext.principal_id} and t2.is_deleted = 0)  OR  exists(select 1 from work_item t2 where t1.target_id= t2.id and t1.target_id= #{ctx.webcontext.principal_id} and t2.is_deleted = 0) )  AND  t1.`PRINCIPAL_TYPE` = 'dependency' )
```

#### 测试用例下存在执行用例关联缺陷(exists_run_relation_bug) :id=relation-exists_run_relation_bug
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`TARGET_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_TYPE` = 'run'  AND  exists(select 1 from run t2 where t1.principal_id = t2.id and t2.case_id = #{ctx.datacontext.principal_id})  AND  t1.`TARGET_ID` = #{ctx.datacontext.target_id} )
```

#### 需求关联客户(idea_re_customer) :id=relation-idea_re_customer
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `CUSTOMER` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_TYPE` = 'idea'  AND  t1.`TARGET_TYPE` = 'customer'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} )
```

#### 需求关联需求(idea_re_idea) :id=relation-idea_re_idea
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `IDEA` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`PRINCIPAL_TYPE` = 'idea'  AND  t1.`TARGET_TYPE` = 'idea' )
```

#### 需求关联测试用例(idea_re_test_case) :id=relation-idea_re_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`PRINCIPAL_TYPE` = 'idea'  AND  t1.`TARGET_TYPE` = 'test_case' )
```

#### 需求关联工单(idea_re_ticket) :id=relation-idea_re_ticket
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `TICKET` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`PRINCIPAL_TYPE` = 'idea'  AND  t1.`TARGET_TYPE` = 'ticket' )
```

#### 需求关联工作项(idea_re_work_item) :id=relation-idea_re_work_item
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`PRINCIPAL_TYPE` = 'idea'  AND  t1.`TARGET_TYPE` = 'work_item' )
```

#### 版本需求关联数据(idea_version_relation) :id=relation-idea_version_relation
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`PRINCIPAL_TYPE` = 'idea'  AND  ( t1.`TARGET_TYPE` = 'customer'  OR  t1.`TARGET_TYPE` = 'idea'  OR  t1.`TARGET_TYPE` = 'ticket'  OR  t1.`TARGET_TYPE` = 'work_item'  OR  t1.`TARGET_TYPE` = 'test_case' ) )
```

#### 我的关联(my_relation) :id=relation-my_relation
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 排期下需求(product_plan_idea) :id=relation-product_plan_idea
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.product_plan}  AND  t1.`RELATION_TYPE` = 'product_plan'  AND  t1.`TARGET_TYPE` = 'idea' )
```

#### 产品关联项目(product_re_project) :id=relation-product_re_project
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `PROJECT` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`TARGET_TYPE` = 'project'  AND  t1.`PRINCIPAL_TYPE` = 'product' )
```

#### 项目关联产品(project_re_product) :id=relation-project_re_product
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`TARGET_TYPE` = 'product'  AND  t1.`PRINCIPAL_TYPE` = 'project' )
```

#### 评审关联测试用例(review_re_test_case) :id=relation-review_re_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`PRINCIPAL_TYPE` = 'test_case'  AND  t1.`TARGET_TYPE` = 'idea'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  EXISTS (
        SELECT 1
        FROM `test_case` t2
        WHERE t1.`TARGET_ID` = t2.`ID`
        AND t2.`is_deleted` = 0
    ) )
```

#### 执行用例关联缺陷(run_re_bug) :id=relation-run_re_bug
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`TARGET_ID` = t11.`ID` 

LEFT JOIN `WORK_ITEM_TYPE` t21 ON t11.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t11.`IS_DELETED` = 0  AND  t21.`GROUP` = 'bug' ) AND ( t1.`PRINCIPAL_TYPE` = 'run'  AND  t1.`TARGET_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.run} )
```

#### 执行用例关联需求(run_re_idea) :id=relation-run_re_idea
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `IDEA` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_TYPE` = 'test_case'  AND  t1.`TARGET_TYPE` = 'idea'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} )
```

#### 执行用例关联工作项(run_re_work_item) :id=relation-run_re_work_item
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`TARGET_ID` = t11.`ID` 

LEFT JOIN `WORK_ITEM_TYPE` t21 ON t11.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t11.`IS_DELETED` = 0  AND  t21.`GROUP` <> 'bug' ) AND ( t1.`PRINCIPAL_TYPE` = 'test_case'  AND  t1.`TARGET_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} )
```

#### 测试用例关联缺陷(test_case_re_bug) :id=relation-test_case_re_bug
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`TARGET_ID` = t11.`ID` 

LEFT JOIN `WORK_ITEM_TYPE` t21 ON t11.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t11.`IS_DELETED` = 0  AND  t21.`GROUP` = 'bug' ) AND ( t1.`PRINCIPAL_TYPE` = 'test_case'  AND  t1.`TARGET_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} )
```

#### 测试用例关联需求(test_case_re_idea) :id=relation-test_case_re_idea
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `IDEA` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_TYPE` = 'test_case'  AND  t1.`TARGET_TYPE` = 'idea'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} )
```

#### 测试用例关联工作项(test_case_re_work_item) :id=relation-test_case_re_work_item
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`TARGET_ID` = t11.`ID` 

LEFT JOIN `WORK_ITEM_TYPE` t21 ON t11.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t11.`IS_DELETED` = 0  AND  t21.`GROUP` <> 'bug' ) AND ( t1.`PRINCIPAL_TYPE` = 'test_case'  AND  t1.`TARGET_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} )
```

#### 版本用例关联数据(test_case_version_relation) :id=relation-test_case_version_relation
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`PRINCIPAL_TYPE` = 'test_case'  AND  ( t1.`TARGET_TYPE` = 'work_item'  OR  t1.`TARGET_TYPE` = 'idea' ) )
```

#### 工单关联产品需求(ticket_re_idea) :id=relation-ticket_re_idea
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `IDEA` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`PRINCIPAL_TYPE` = 'ticket'  AND  t1.`TARGET_TYPE` = 'idea' )
```

#### 工单关联工单(ticket_re_self) :id=relation-ticket_re_self
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `TICKET` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`TARGET_TYPE` = 'ticket'  AND  t1.`PRINCIPAL_TYPE` = 'ticket' )
```

#### 工单关联工作项(ticket_re_work_item) :id=relation-ticket_re_work_item
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`TARGET_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_TYPE` = 'ticket' )
```

#### 工作项关联产品需求(work_item_relation_idea) :id=relation-work_item_relation_idea
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `IDEA` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`PRINCIPAL_TYPE` = 'work_item'  AND  t1.`TARGET_TYPE` = 'idea' )
```

#### 工作项关联工作项(work_item_relation_self) :id=relation-work_item_relation_self
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`PRINCIPAL_TYPE` = 'work_item'  AND  t1.`TARGET_TYPE` = 'work_item' )
```

#### 工作项关联测试用例(work_item_relation_test_case) :id=relation-work_item_relation_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`TARGET_TYPE` = 'test_case' )
```

#### 工作项关联工单(work_item_relation_ticket) :id=relation-work_item_relation_ticket
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 
LEFT JOIN `TICKET` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`PRINCIPAL_TYPE` = 'work_item'  AND  t1.`TARGET_TYPE` = 'ticket' )
```

#### 版本工作项关联数据(work_item_version_relation) :id=relation-work_item_version_relation
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`PRINCIPAL_TYPE` = 'work_item'  AND  ( t1.`TARGET_TYPE` = 'run'  OR  t1.`TARGET_TYPE` = 'idea'  OR  t1.`TARGET_TYPE` = 'ticket'  OR  t1.`TARGET_TYPE` = 'test_case'  OR  t1.`TARGET_TYPE` = 'work_item' ) )
```


## [项目发布(RELEASE)](module/ProjMgmt/release.md) :id=release

#### 数据查询(DEFAULT) :id=release-Default
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=release-View
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
t1.`CHANGELOG`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### BI反查(bi_detail) :id=release-bi_detail
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### BI查询(bi_search) :id=release-bi_search
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### 选择发布关联(choose_relese_relation) :id=release-choose_relese_relation
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`PRINCIPAL_ID`  AND  ( t21.`TARGET_TYPE` = 'sprint'  AND  t21.`PRINCIPAL_TYPE` = 'release'  AND  t21.`TARGET_ID` = #{ctx.webcontext.sprint} ) ))
```

#### 未已发布(not_published) :id=release-not_published
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `WORK_ITEM` t21 
 WHERE 
 t1.`ID` = t21.`RELEASE_ID`  AND  ( t21.`ID` = #{ctx.webcontext.work_item} ) )) AND ( not exists(select 1 from `stage` s1, `stage` s2 where t1.`STATUS`  = s1.`id` and s1.`pid` = s2.`id` and s2.`TYPE` = 'published' and s1.`RELEASE_ID`= t1.`id`) )
```

#### 产品所属发布(product_re_project_published) :id=release-product_re_project_published
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( t1.project_id in (select r1.target_id from relation r1 where r1.PRINCIPAL_TYPE = 'product' and r1.TARGET_TYPE = 'project' and r1.PRINCIPAL_ID = #{ctx.webcontext.product})  AND  exists(select 1 from `stage` s1, `stage` s2 where t1.`STATUS`  = s1.`id` and s1.`pid` = s2.`id` and s2.`TYPE` = 'published' and s1.`RELEASE_ID`= t1.`id`)  AND  t1.`END_AT` IS NOT NULL )
```

#### 已发布(published) :id=release-published
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( exists(select 1 from `stage` s1, `stage` s2 where t1.`STATUS`  = s1.`id` and s1.`pid` = s2.`id` and s2.`TYPE` = 'published' and s1.`RELEASE_ID`= t1.`id`)  AND  t1.`END_AT` IS NOT NULL )
```

#### 只读用户(reader) :id=release-reader
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t21 
 WHERE 
 t11.`ID` = t21.`PROJECT_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 迭代关联发布(sprint_relation) :id=release-sprint_relation
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND RELEASE_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND RELEASE_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
(year(t1.`END_AT`)) AS `END_YEAR`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PROJECT_RELEASE` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`PRINCIPAL_ID`  AND  ( t21.`TARGET_TYPE` = 'sprint'  AND  t21.`PRINCIPAL_TYPE` = 'release'  AND  t21.`TARGET_ID` = #{ctx.webcontext.sprint} ) )
```


## [评审(REVIEW)](module/TestMgmt/review.md) :id=review

#### 数据查询(DEFAULT) :id=review-Default
```sql
SELECT
t1.`CATEGORIES`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GUIDELINE_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`NEXT_REVIEWER`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`REVIEWER`,
concat(t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=review-View
```sql
SELECT
t1.`ACTION_RULE`,
t1.`CATEGORIES`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GUIDELINE_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`NEXT_REVIEWER`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`REVIEWER`,
t1.`RULE`,
concat(t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STAGE`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```

#### BI查询(bi_search) :id=review-bi_search
```sql
SELECT
t1.`CATEGORIES`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GUIDELINE_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`LIBRARY_ID`,
t11.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
concat(t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```

#### 我关注的(my_attention) :id=review-my_attention
```sql
SELECT
t1.`CATEGORIES`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GUIDELINE_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`NEXT_REVIEWER`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`REVIEWER`,
concat(t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `ATTENTION` t21 
 WHERE 
 t1.`ID` = t21.`OWNER_ID`  AND  t21.`OWNER_TYPE` = 'REVIEW'  AND  t21.`OWNER_SUBTYPE` = 'REVIEW'  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`TYPE` IN ('20','30','40') ) )
```

#### 我评审的(my_reviewed) :id=review-my_reviewed
```sql
SELECT
t1.`CATEGORIES`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GUIDELINE_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`NEXT_REVIEWER`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`REVIEWER`,
concat(t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUBMITTED_AT`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

WHERE ( t1.`STAGE` LIKE CONCAT('%',#{ctx.sessioncontext.srfpersonid},'%') )
```


## [评审内容扩展(REVIEW_CONTENT_EXTEND)](module/TestMgmt/review_content_extend.md) :id=review_content_extend

#### 数据查询(DEFAULT) :id=review_content_extend-Default
```sql
SELECT
t1.`CHANGE_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FINAL_STAGE_RESULTS`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW_CONTENT_EXTEND` t1 

```

#### 默认（全部数据）(VIEW) :id=review_content_extend-View
```sql
SELECT
t1.`CHANGE_TYPE`,
t1.`CHANGE_VERSION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FINAL_STAGE_RESULTS`,
t1.`ID`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW_CONTENT_EXTEND` t1 

```


## [评审结果(REVIEW_RESULT)](module/TestMgmt/review_result.md) :id=review_result

#### 数据查询(DEFAULT) :id=review_result-Default
```sql
SELECT
t1.`COMMENT`,
t1.`CONTENT_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`RESULT_STATE`,
t1.`REVIEWER`,
t1.`SEQUENCES`,
t1.`STAGE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
(SELECT CASE WHEN EXISTS (SELECT 1 FROM review_content_extend t1 JOIN relation t2 ON t2.id = t1.id JOIN review t3 ON t3.id = t2.PRINCIPAL_ID  WHERE t1.id = t1.`CONTENT_ID`  AND t3.state = '20') THEN 1 ELSE 0 END AS result) AS `WHETHER_REVIEW`
FROM `REVIEW_RESULT` t1 

```

#### 默认（全部数据）(VIEW) :id=review_result-View
```sql
SELECT
t1.`COMMENT`,
t1.`CONTENT_ID`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`RESULT_STATE`,
t1.`REVIEWER`,
t1.`SEQUENCES`,
t1.`STAGE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
(SELECT CASE WHEN EXISTS (SELECT 1 FROM review_content_extend t1 JOIN relation t2 ON t2.id = t1.id JOIN review t3 ON t3.id = t2.PRINCIPAL_ID  WHERE t1.id = t1.`CONTENT_ID`  AND t3.state = '20') THEN 1 ELSE 0 END AS result) AS `WHETHER_REVIEW`
FROM `REVIEW_RESULT` t1 

```


## [评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard.md) :id=review_wizard

#### 数据查询(DEFAULT) :id=review_wizard-Default
```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GUIDELINE_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
concat(t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=review_wizard-View
```sql
SELECT
t1.`ACTION_RULE`,
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`GUIDELINE_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`LIBRARY_ID`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`RULE`,
concat(t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STAGE`,
t1.`STATE`,
t1.`SUBMITTER_ID`,
t1.`SUBMITTER_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `REVIEW` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`LIBRARY_ID` = t11.`ID` 

```


## [执行用例(RUN)](module/TestMgmt/run.md) :id=run

#### 数据查询(DEFAULT) :id=run-Default
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

```

#### 执行结果分布(ImplementationResults) :id=run-ImplementationResults
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

```

#### 默认（全部数据）(VIEW) :id=run-View
```sql
SELECT
(SELECT COUNT( att.ID ) AS attention_count FROM RUN r LEFT JOIN `attention` att ON r.ID = att.OWNER_ID WHERE r.ID = t1.`ID`) AS `ATTENTION_COUNT`,
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
(SELECT COUNT( com.ID ) AS comment_count FROM RUN r LEFT JOIN `comment` com ON r.ID = com.PRINCIPAL_ID WHERE r.ID = t1.`ID`) AS `COMMENT_COUNT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t11.`PRECONDITION`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
(SELECT count(1) FROM relation t2 inner join work_item t3 on t3.id = t2.TARGET_ID and  t3.IS_DELETED = 0 inner join work_item_type t4 on t4.ID = t3.WORK_ITEM_TYPE_ID and t4.`GROUP` = 'bug' where t1.id = t2.PRINCIPAL_ID AND t2.TARGET_TYPE = 'work_item') AS `RELATION_TOTAL_BUG`,
(select count(1) from run_history where run_id = t1.`ID`) AS `RELATION_TOTAL_HISTORY`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

```

#### BI反查(bi_detail) :id=run-bi_detail
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

```

#### BI查询(bi_search) :id=run-bi_search
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
(SELECT count(1) FROM relation t2 inner join work_item t3 on t3.id = t2.TARGET_ID and  t3.IS_DELETED = 0 inner join work_item_type t4 on t4.ID = t3.WORK_ITEM_TYPE_ID and t4.`GROUP` = 'bug' where t1.id = t2.PRINCIPAL_ID AND t2.TARGET_TYPE = 'work_item') AS `RELATION_TOTAL_BUG`,
(select count(1) from run_history where run_id = t1.`ID`) AS `RELATION_TOTAL_HISTORY`,
t11.`STATE`,
t1.`STATUS`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

```

#### 评论通知执行人(comment_notify_executor) :id=run-comment_notify_executor
```sql
SELECT
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`
FROM `RUN` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id} and t2.create_man != t1.executor_id ) )
```

#### 当前项目用例(cur_library) :id=run-cur_library
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

```

#### 每日执行用例趋势(dailyTendencies) :id=run-dailyTendencies
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

```

#### 每日测试次数统计(everydayTest) :id=run-everydayTest
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

```

#### 过滤器默认查询(my_filter) :id=run-my_filter
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

WHERE ( t41.`IS_DELETED` = 0 )
```

#### 当前模块下用例(normal) :id=run-normal
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

WHERE ( ( <choose><when test="ctx.webcontext.suite_id !=null ">  t11.`SUITE_ID` = #{ctx.webcontext.suite_id}  </when><otherwise>1=1</otherwise></choose>  OR  t31.`SUITES` LIKE CONCAT('%',#{ctx.webcontext.suite_id},'%') ) )
```

#### 测试计划内执行历史(plan_run_history) :id=run-plan_run_history
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

WHERE ( t1.`STATUS` IS NOT NULL )
```

#### 优先级分布(priorityDistributions) :id=run-priorityDistributions
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

```

#### 公开(public) :id=run-public
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

WHERE ( t41.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=run-reader
```sql
SELECT
concat(t41.`IDENTIFIER`,'-',t21.`NAME`) AS `BI_PLAN_NAME`,
t1.`CASE_ID`,
t11.`NAME` AS `CASE_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`EXECUTED_AT`,
t1.`EXECUTOR_ID`,
t1.`EXECUTOR_NAME`,
t1.`ID`,
t11.`IDENTIFIER`,
t1.`IS_NEWEST`,
t11.`LEVEL`,
t21.`LIBRARY_ID`,
t41.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t51.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t51.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t41.`NAME` AS `LIBRARY_NAME`,
t11.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PARENT_VERSION_ID`,
t1.`PLAN_ID`,
t21.`NAME` AS `PLAN_NAME`,
t1.`PRIORITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REMARK`,
t11.`REVIEW_RESULT_STATE`,
concat(t41.`IDENTIFIER`,'-',t11.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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
LEFT JOIN `LIBRARY` t51 ON t11.`TEST_LIBRARY_ID` = t51.`ID` 

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t61 
 WHERE 
 t41.`ID` = t61.`LIBRARY_ID`  AND  ( t61.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```


## [执行用例结果附件(RUN_ATTACHMENT)](module/TestMgmt/run_attachment.md) :id=run_attachment

#### 数据查询(DEFAULT) :id=run_attachment-Default
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

#### 默认（全部数据）(VIEW) :id=run_attachment-View
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


## [执行结果(RUN_HISTORY)](module/TestMgmt/run_history.md) :id=run_history

#### 数据查询(DEFAULT) :id=run_history-Default
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

#### 默认（全部数据）(VIEW) :id=run_history-View
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

#### 当前用例执行结果(this) :id=run_history-this
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


## [代码评审(SCM_REVIEW)](module/DevOps/scm_review.md) :id=scm_review

#### 数据查询(DEFAULT) :id=scm_review-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PULL_REQUEST_ID`,
t1.`REPOSITORY_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SCM_REVIEW` t1 

```

#### 默认（全部数据）(VIEW) :id=scm_review-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PULL_REQUEST_ID`,
t1.`REPOSITORY_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SCM_REVIEW` t1 

```


## [附件搜索(SEARCH_ATTACHMENT)](module/Base/search_attachment.md) :id=search_attachment

#### 数据查询(DEFAULT) :id=search_attachment-Default
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
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

```

#### 默认（全部数据）(VIEW) :id=search_attachment-View
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
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

```

#### 当前产品下的附件(cur_product) :id=search_attachment-cur_product
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
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

WHERE ( (exists(select 1 from idea t2 where t1.owner_id = t2.id and t2.product_id = #{ctx.webcontext.product_id})
or exists(select 1 from ticket t3 where t1.owner_id = t3.id and t3.product_id = #{ctx.webcontext.product_id}))  AND  t1.`OWNER_TYPE` IN ('TICKET','IDEA')  AND  t1.`FILE_ID` IS NOT NULL )
```

#### 当前项目下的附件(cur_project) :id=search_attachment-cur_project
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
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

WHERE ( exists(select 1 from work_item t2 where t1.owner_id = t2.id and t2.project_id = #{ctx.webcontext.project_id})  AND  t1.`OWNER_TYPE` = 'WORK_ITEM'  AND  t1.`FILE_ID` IS NOT NULL )
```

#### 关联查询(relation) :id=search_attachment-relation
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
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

WHERE 1=1 AND  (<choose><when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'project'"> 
        exists(select 1 from work_item t2, project_member t3 where t2.project_id = t3.project_id 
        and t3.user_id = #{ctx.sessioncontext.srfpersonid} and t1.owner_id = t2.id and t1.owner_type = 'WORK_ITEM' and t1.owner_subtype is null
        and t2.is_deleted = 0<if test="ctx.webcontext.project_id!=null and ctx.webcontext.project_id!=''"> and t2.project_id = #{ctx.webcontext.project_id}</if>)</when>
    <when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'product'"> 
        exists(select 1 from idea t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_type='IDEA' 
        and t1.owner_id=t2.id and t2.is_deleted=0<if test="ctx.webcontext.product_id != null and ctx.webcontext.product_id!=''"> and t2.product_id=#{ctx.webcontext.product_id}  </if>)
        or exists(select 1 from ticket t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_type='TICKET'
        and t1.owner_id=t2.id and t2.is_deleted=0 <if test="ctx.webcontext.product_id!=null and ctx.webcontext.product_id!=''"> and t2.product_id=#{ctx.webcontext.product_id}  </if>)
        or exists(select 1 from customer t2, product_member t3 where t2.product_id = t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_type='CUSTOMER'
        and t1.owner_id=t2.id and t2.is_deleted=0 <if test="ctx.webcontext.product_id!=null and ctx.webcontext.product_id!=''"> and t2.product_id=#{ctx.webcontext.product_id}  </if>)
    </when>
    <when test="ctx.webcontext.search_module!=null and ctx.webcontext.search_module=='library'"> 
        exists(select 1 from test_case t2, library_member t3 where t2.test_library_id=t3.library_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_id=t2.id and t1.owner_type='TEST_CASE'
        and t2.is_deleted=0<if test="ctx.webcontext.library_id!=null and ctx.webcontext.library_id!=''"> and t2.test_library_id=#{ctx.webcontext.library_id}  </if>)
    </when>
    <when test="ctx.webcontext.search_module!=null and ctx.webcontext.search_module=='space'"> 
        exists(select 1 from page t2, space_member t3 where t2.space_id=t3.space_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_id=t2.id and t1.owner_type='PAGE'
        and t2.is_deleted=0<if test="ctx.webcontext.space_id!=null and ctx.webcontext.space_id!=''"> and t2.space_id=#{ctx.webcontext.space_id}</if>)
    </when>
    <otherwise>exists(select 1 from work_item t2, project_member t3 where t2.project_id=t3.project_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_type='WORK_ITEM' and t1.owner_subtype is null and t1.owner_id=t2.id and t2.is_deleted=0)
  or exists(select 1 from idea t2, product_member t3 where t2.product_id=t3.product_id 
  and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_type='IDEA' 
  and t1.owner_id=t2.id and t2.is_deleted=0 )
  or exists(select 1 from ticket t2, product_member t3 where t2.product_id=t3.product_id 
  and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_type='TICKET' 
  and t1.owner_id=t2.id and t2.is_deleted=0)
  or exists(select 1 from customer t2, product_member t3 where t2.product_id=t3.product_id and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_type='CUSTOMER' and t1.owner_id=t2.id and t2.is_deleted=0) or exists(select 1 from test_case t2, library_member t3 where t2.test_library_id=t3.library_id and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.owner_type='TEST_CASE' and t1.owner_id=t2.id and t2.is_deleted=0 ) or exists(select 1 from page t2, space_member t3 where t2.space_id=t3.space_id  and t3.user_id = #{ctx.sessioncontext.srfpersonid} and t1.owner_type='PAGE' and t1.owner_id=t2.id and t2.is_deleted=0)</otherwise></choose>)
```


## [评论搜索(SEARCH_COMMENT)](module/Base/search_comment.md) :id=search_comment

#### 数据查询(DEFAULT) :id=search_comment-Default
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `COMMENT` t1 

```

#### 默认（全部数据）(VIEW) :id=search_comment-View
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `COMMENT` t1 

```

#### 关联查询(relation) :id=search_comment-relation
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `COMMENT` t1 

WHERE 1=1 AND ( <choose><when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'project'"> exists(select 1 from work_item t2, project_member t3 where t2.project_id=t3.project_id  and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_id=t2.id and t1.principal_type='WORK_ITEM' and t2.is_deleted=0 <if test="ctx.webcontext.project_id != null and ctx.webcontext.project_id != ''"> and t2.project_id=#{ctx.webcontext.project_id}  </if>)</when><when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'product'"> exists(select 1 from idea t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='IDEA' 
        and t1.principal_id=t2.id and t2.is_deleted=0 <if test="ctx.webcontext.product_id != null and ctx.webcontext.product_id != ''"> and t2.product_id=#{ctx.webcontext.product_id}  </if>)
        or exists(select 1 from ticket t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='TICKET'  
        and t1.principal_id=t2.id and t2.is_deleted=0 <if test="ctx.webcontext.product_id != null and ctx.webcontext.product_id != ''"> and t2.product_id=#{ctx.webcontext.product_id}  </if>)
        or exists(select 1 from customer t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='CUSTOMER'  
        and t1.principal_id=t2.id and t2.is_deleted=0 <if test="ctx.webcontext.product_id != null and ctx.webcontext.product_id != ''"> and t2.product_id=#{ctx.webcontext.product_id}</if>)</when>
    <when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'library'"> exists(select 1 from test_case t2, library_member t3 where t2.test_library_id=t3.library_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_id=t2.id and t1.principal_type='TEST_CASE'  and t2.is_deleted=0 <if test="library_id != null and library_id != ''"> and t2.test_library_id=#{ctx.webcontext.library_id}  </if>)</when>
    <when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'space'"> exists(select 1 from page t2, space_member t3 where t2.space_id=t3.space_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_id=t2.id and t1.principal_type='PAGE'
        and t2.is_deleted=0 <if test="ctx.webcontext.space_id != null and ctx.webcontext.space_id != ''"> and t2.space_id=#{ctx.webcontext.space_id} </if>)</when>
    <otherwise> exists(select 1 from work_item t2, project_member t3 where t2.project_id=t3.project_id  and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='WORK_ITEM' and t1.principal_id=t2.id and t2.is_deleted=0)
        or exists(select 1 from idea t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='IDEA' 
        and t1.principal_id=t2.id and t2.is_deleted=0)
        or exists(select 1 from ticket t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='TICKET' 
        and t1.principal_id=t2.id and t2.is_deleted=0)
        or exists(select 1 from customer t2, product_member t3 where t2.product_id=t3.product_id and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='CUSTOMER' and t1.principal_id=t2.id and t2.is_deleted=0) or exists(select 1 from test_case t2, library_member t3 where t2.test_library_id=t3.library_id and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_id='TEST_CASE' and t1.principal_id=t2.id and t2.is_deleted=0) or exists(select 1 from page t2, space_member t3 where t2.space_id = t3.space_id and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='PAGE' and t1.principal_id=t2.id and t2.is_deleted=0) </otherwise></choose>)
```


## [分组(SECTION)](module/Base/section.md) :id=section

#### 数据查询(DEFAULT) :id=section-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `SECTION` t1 

```

#### 默认（全部数据）(VIEW) :id=section-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `SECTION` t1 

```

#### 检查名称是否重复(check_name) :id=section-check_name
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `SECTION` t1 

WHERE ( t1.`ID` <> #{ctx.datacontext.id}  AND  t1.`NAME` = #{ctx.datacontext.name}  AND  t1.`OWNER_ID` = #{ctx.datacontext.owner_id}  AND  t1.`OWNER_TYPE` = #{ctx.datacontext.owner_type}  AND  t1.`OWNER_SUBTYPE` = #{ctx.datacontext.owner_subtype} )
```

#### 需求子产品(idea_section) :id=section-idea_section
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `SECTION` t1 

WHERE ( t1.`OWNER_SUBTYPE` = 'idea' )
```

#### 我的分组(my_section) :id=section-my_section
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `SECTION` t1 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 产品排期分组(this_product_section) :id=section-this_product_section
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`
FROM `SECTION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.webcontext.productid}  AND  t1.`OWNER_TYPE` = 'product_plan' )
```


## [序列(SEQUENCE_GENERATOR)](module/Base/sequence_generator.md) :id=sequence_generator

#### 数据查询(DEFAULT) :id=sequence_generator-Default
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

#### 默认（全部数据）(VIEW) :id=sequence_generator-View
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


## [共享空间(SHARED_SPACE)](module/Wiki/shared_space.md) :id=shared_space

#### 数据查询(DEFAULT) :id=shared_space-Default
```sql
SELECT
t1.`ACCESS_PASSWORD`,
t1.`EXPIRATION_DATE`,
t1.`ID`,
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_TYPE`,
t1.`SHARED_BY`,
t1.`SHARED_PAGES`,
t1.`SHARED_TIME`,
t1.`SHOW_LOGO`,
t1.`SHOW_TITLE`
FROM `SPACE` t1 

```

#### 默认（全部数据）(VIEW) :id=shared_space-View
```sql
SELECT
t1.`ACCESS_PASSWORD`,
t1.`EXPIRATION_DATE`,
t1.`ID`,
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_TYPE`,
t1.`SHARED_BY`,
t1.`SHARED_PAGES`,
t1.`SHARED_TIME`,
t1.`SHOW_LOGO`,
t1.`SHOW_TITLE`
FROM `SPACE` t1 

```

#### 管理员(admin) :id=shared_space-admin
```sql
SELECT
t1.`ACCESS_PASSWORD`,
t1.`EXPIRATION_DATE`,
t1.`ID`,
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_TYPE`,
t1.`SHARED_BY`,
t1.`SHARED_PAGES`,
t1.`SHARED_TIME`,
t1.`SHOW_LOGO`,
t1.`SHOW_TITLE`
FROM `SPACE` t1 

WHERE ( exists(select 1 from `space_member` t2 where t2.`SPACE_ID` = t1.`ID` and 
t2.ROLE_ID = 'admin' and t2.USER_ID = #{ctx.sessioncontext.srfpersonid}) )
```

#### 共享空间(shared) :id=shared_space-shared
```sql
SELECT
t1.`ACCESS_PASSWORD`,
t1.`EXPIRATION_DATE`,
t1.`ID`,
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_TYPE`,
t1.`SHARED_BY`,
t1.`SHARED_PAGES`,
t1.`SHARED_TIME`,
t1.`SHOW_LOGO`,
t1.`SHOW_TITLE`
FROM `SPACE` t1 

WHERE ( t1.`IS_SHARED` <> '0' )
```


## [空间(SPACE)](module/Wiki/space.md) :id=space

#### 数据查询(DEFAULT) :id=space-Default
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=space-View
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

```

#### 管理员(admin) :id=space-admin
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`SPACE_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'admin' ) )
```

#### 已归档(archived) :id=space-archived
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 目录下空间(category_space) :id=space-category_space
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( t1.`CATEGORY_ID` = #{ctx.webcontext.category_id}  OR  t11.`CATEGORIES` LIKE CONCAT('%',#{ctx.webcontext.category_id},'%') ) )
```

#### 当前空间(cur_space) :id=space-cur_space
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

```

#### 当前空间(current) :id=space-current
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.webcontext.space !=null ">  t1.`ID` = #{ctx.webcontext.space}  </when><otherwise>1=1</otherwise></choose> )
```

#### 已删除(deleted) :id=space-deleted
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 查询星标(favorite) :id=space-favorite
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1'  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 查询星标（管理用户）(favorite_user) :id=space-favorite_user
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`SPACE_ID`  AND  ( t21.`ROLE_ID` <> 'reader'  AND  t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '1'  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 移动端非星标空间(mob_unfavorite) :id=space-mob_unfavorite
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 
where 
 t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0'  AND  t1.`IS_ARCHIVED` = 0 
 ORDER BY t1.`UPDATE_TIME` DESC


```

#### 未存在目录中的空间(no_category_space) :id=space-no_category_space
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`CATEGORY_ID` IS NULL )
```

#### 未关联的空间（产品）(no_re_space_product) :id=space-no_re_space_product
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_TYPE` = #{ctx.datacontext.principal_type}  AND  t21.`TARGET_TYPE` = #{ctx.datacontext.target_type}  AND  t21.`PRINCIPAL_ID` = #{ctx.datacontext.principal_id} ) )) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 正常状态(normal) :id=space-normal
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 产品关联的空间(product_re_space) :id=space-product_re_space
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_TYPE` = #{ctx.datacontext.principal_type}  AND  t21.`TARGET_TYPE` = #{ctx.datacontext.target_type}  AND  <choose><when test="ctx.datacontext.principal_id !=null ">  t21.`PRINCIPAL_ID` = #{ctx.datacontext.principal_id}  </when><otherwise>1=1</otherwise></choose> ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 公开(public) :id=space-public
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=space-reader
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`SPACE_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'reader' ) )
```

#### 非星标空间(unfavorite) :id=space-unfavorite
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0'  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 非星标空间（管理用户）(unfavorite_user) :id=space-unfavorite_user
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`SPACE_ID`  AND  ( t21.`ROLE_ID` <> 'reader'  AND  t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t1.`IS_DELETED` = 0  AND  (select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) = '0'  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 操作用户(user) :id=space-user
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
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t1.`ID` = t21.`SPACE_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t21.`ROLE_ID` = 'user' ) )
```


## [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md) :id=space_member

#### 数据查询(DEFAULT) :id=space_member-Default
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `SPACE_MEMBER` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=space_member-View
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `SPACE_MEMBER` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```

#### 当前空间下成员(cur_space) :id=space_member-cur_space
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `SPACE_MEMBER` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`USER_ID` <> #{ctx.sessioncontext.srfpersonid}  AND  t1.`SPACE_ID` = #{ctx.datacontext.id} )
```

#### 未关注用户(测试用例)(no_attention) :id=space_member-no_attention
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
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_ID`
FROM `SPACE_MEMBER` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( ( USER_ID NOT IN (SELECT user_id from attention t2 where t2.OWNER_ID = #{ctx.webcontext.test_case} )) )
```


## [迭代(SPRINT)](module/ProjMgmt/sprint.md) :id=sprint

#### 数据查询(DEFAULT) :id=sprint-Default
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

```

#### 默认（全部数据）(VIEW) :id=sprint-View
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

```

#### 主表格查询(all) :id=sprint-all
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

```

#### BI反查(bi_detail) :id=sprint-bi_detail
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

```

#### BI查询(bi_search) :id=sprint-bi_search
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

```

#### 移动至(choose_move) :id=sprint-choose_move
```sql
select null as id, '待分配工作项' as name
union all
select t1.id, t1.name
from `sprint` `t1`

WHERE (`id` <> #{ctx.webcontext.sprint_id} and `status` <>  '3' )
```

#### 选择关联的迭代(choose_sprint_relation) :id=sprint-choose_sprint_relation
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`PRINCIPAL_ID`  AND  ( t31.`TARGET_TYPE` = 'release'  AND  t31.`PRINCIPAL_TYPE` = 'sprint'  AND  t31.`TARGET_ID` = #{ctx.webcontext.release} ) ))
```

#### 当前项目迭代且未完成(cur_sprint_not_finish) :id=sprint-cur_sprint_not_finish
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

WHERE ( t1.`STATUS` <> '3'  AND  t1.`PROJECT_ID` = #{ctx.datacontext.project} )
```

#### 未结束的迭代(not_finish) :id=sprint-not_finish
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `WORK_ITEM` t31 
 WHERE 
 t1.`ID` = t31.`SPRINT_ID`  AND  ( t31.`ID` = #{ctx.webcontext.work_item} ) )) AND ( t1.`STATUS` <> '3' )
```

#### 公开(public) :id=sprint-public
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

WHERE ( t21.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=sprint-reader
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t31 
 WHERE 
 t21.`ID` = t31.`PROJECT_ID`  AND  ( t31.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 发布关联迭代(release_relation) :id=sprint-release_relation
```sql
SELECT
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND SPRINT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CATEGORIES`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND SPRINT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ID`,
t1.`NAME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t21.`NAME` AS `PROJECT_NAME`,
t21.`TYPE` AS `PROJECT_TYPE`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`PRINCIPAL_ID`  AND  ( t31.`PRINCIPAL_TYPE` = 'sprint'  AND  t31.`TARGET_TYPE` = 'release'  AND  t31.`TARGET_ID` = #{ctx.webcontext.release} ) )
```


## [迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration.md) :id=sprint_alteration

#### 数据查询(DEFAULT) :id=sprint_alteration-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t11.`IS_DELETED`,
t1.`NAME`,
t1.`SPRINT_ID`,
t21.`NAME` AS `SPRINT_NAME`,
t1.`SPRINT_STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t11.`COMPLETED_AT` AS `WORK_ITEM_COMPLETED_AT`,
t1.`WORK_ITEM_ID`,
t11.`PRIORITY` AS `WORK_ITEM_PRIORITY`,
t11.`TITLE` AS `WORK_ITEM_TITLE`
FROM `SPRINT_ALTERATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`WORK_ITEM_ID` = t11.`ID` 
LEFT JOIN `SPRINT` t21 ON t1.`SPRINT_ID` = t21.`ID` 

```

#### 默认（全部数据）(VIEW) :id=sprint_alteration-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t11.`IS_DELETED`,
t1.`NAME`,
t1.`SPRINT_ID`,
t21.`NAME` AS `SPRINT_NAME`,
t1.`SPRINT_STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t11.`COMPLETED_AT` AS `WORK_ITEM_COMPLETED_AT`,
t1.`WORK_ITEM_ID`,
t11.`PRIORITY` AS `WORK_ITEM_PRIORITY`,
t11.`TITLE` AS `WORK_ITEM_TITLE`
FROM `SPRINT_ALTERATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`WORK_ITEM_ID` = t11.`ID` 
LEFT JOIN `SPRINT` t21 ON t1.`SPRINT_ID` = t21.`ID` 

```

#### 工作项迭代变更记录(change) :id=sprint_alteration-change
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t11.`IS_DELETED`,
t1.`NAME`,
t1.`SPRINT_ID`,
t21.`NAME` AS `SPRINT_NAME`,
t1.`SPRINT_STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t11.`COMPLETED_AT` AS `WORK_ITEM_COMPLETED_AT`,
t1.`WORK_ITEM_ID`,
t11.`PRIORITY` AS `WORK_ITEM_PRIORITY`,
t11.`TITLE` AS `WORK_ITEM_TITLE`
FROM `SPRINT_ALTERATION` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`WORK_ITEM_ID` = t11.`ID` 
LEFT JOIN `SPRINT` t21 ON t1.`SPRINT_ID` = t21.`ID` 

```


## [发布阶段(STAGE)](module/ProjMgmt/stage.md) :id=stage

#### 数据查询(DEFAULT) :id=stage-Default
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_CURRENT`,
t1.`NAME`,
t1.`OPERATED_TIME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t11.`COLOR` AS `P_COLOR`,
t11.`SEQUENCE` AS `P_SEQUENCE`,
t11.`TYPE` AS `P_TYPE`,
t1.`RELEASE_ID`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STAGE` t1 
LEFT JOIN `STAGE` t11 ON t1.`PID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=stage-View
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_CURRENT`,
t1.`NAME`,
t1.`OPERATED_TIME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t11.`COLOR` AS `P_COLOR`,
t11.`SEQUENCE` AS `P_SEQUENCE`,
t11.`TYPE` AS `P_TYPE`,
t1.`RELEASE_ID`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STAGE` t1 
LEFT JOIN `STAGE` t11 ON t1.`PID` = t11.`ID` 

```

#### 当前项目下的发布阶段(cur_project) :id=stage-cur_project
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_CURRENT`,
t1.`NAME`,
t1.`OPERATED_TIME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t11.`COLOR` AS `P_COLOR`,
t11.`SEQUENCE` AS `P_SEQUENCE`,
t11.`TYPE` AS `P_TYPE`,
t1.`RELEASE_ID`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STAGE` t1 
LEFT JOIN `STAGE` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT_RELEASE` t21 ON t1.`RELEASE_ID` = t21.`ID` 

WHERE ( t21.`PROJECT_ID` = #{ctx.webcontext.project} )
```

#### 发布所属阶段(cur_stage) :id=stage-cur_stage
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_CURRENT`,
t1.`NAME`,
t1.`OPERATED_TIME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t11.`COLOR` AS `P_COLOR`,
t11.`SEQUENCE` AS `P_SEQUENCE`,
t11.`TYPE` AS `P_TYPE`,
t1.`RELEASE_ID`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STAGE` t1 
LEFT JOIN `STAGE` t11 ON t1.`PID` = t11.`ID` 

WHERE ( t1.`RELEASE_ID` = #{ctx.datacontext.release} )
```

#### 发布所属阶段(owner) :id=stage-owner
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_CURRENT`,
t1.`NAME`,
t1.`OPERATED_TIME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t11.`COLOR` AS `P_COLOR`,
t11.`SEQUENCE` AS `P_SEQUENCE`,
t11.`TYPE` AS `P_TYPE`,
t1.`RELEASE_ID`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STAGE` t1 
LEFT JOIN `STAGE` t11 ON t1.`PID` = t11.`ID` 

WHERE ( t1.`ID` = #{ctx.datacontext.owner_id} )
```

#### 全局级发布阶段(system) :id=stage-system
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_CURRENT`,
t1.`NAME`,
t1.`OPERATED_TIME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t11.`COLOR` AS `P_COLOR`,
t11.`SEQUENCE` AS `P_SEQUENCE`,
t11.`TYPE` AS `P_TYPE`,
t1.`RELEASE_ID`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STAGE` t1 
LEFT JOIN `STAGE` t11 ON t1.`PID` = t11.`ID` 

WHERE ( t1.`RELEASE_ID` IS NULL )
```


## [页面模板(STENCIL)](module/Wiki/stencil.md) :id=stencil

#### 数据查询(DEFAULT) :id=stencil-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`SPACE_ID`,
t11.`NAME` AS `SPACE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STENCIL` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```

#### 默认（全部数据）(VIEW) :id=stencil-View
```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`SPACE_ID`,
t11.`NAME` AS `SPACE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STENCIL` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

```

#### 非空间下模板(no_space_stencil) :id=stencil-no_space_stencil
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`SPACE_ID`,
t11.`NAME` AS `SPACE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STENCIL` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`SPACE_ID` IS NULL )
```

#### 只读用户(reader) :id=stencil-reader
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`SPACE_ID`,
t11.`NAME` AS `SPACE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STENCIL` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE EXISTS(SELECT * FROM `SPACE_MEMBER` t21 
 WHERE 
 t11.`ID` = t21.`SPACE_ID`  AND  ( t21.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 空间下页面模板(space_stencil) :id=stencil-space_stencil
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IS_GLOBAL`,
t1.`NAME`,
t1.`SPACE_ID`,
t11.`NAME` AS `SPACE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STENCIL` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 

WHERE ( t1.`SPACE_ID` = #{ctx.webcontext.space} )
```


## [泳道(SWIMLANE)](module/ProjMgmt/swimlane.md) :id=swimlane

#### 数据查询(DEFAULT) :id=swimlane-Default
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

#### 默认（全部数据）(VIEW) :id=swimlane-View
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


## [用例(TEST_CASE)](module/TestMgmt/test_case.md) :id=test_case

#### 数据查询(DEFAULT) :id=test_case-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 执行结果分布(ImplementationResults) :id=test_case-ImplementationResults
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 用例维护人分布(PersonDistributions) :id=test_case-PersonDistributions
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 默认（全部数据）(VIEW) :id=test_case-View
```sql
SELECT
(SELECT COUNT( att.ID ) AS attention_count FROM test_case tc LEFT JOIN `attention` att ON tc.ID = att.OWNER_ID WHERE tc.ID = t1.`ID`) AS `ATTENTION_COUNT`,
(SELECT COUNT( com.ID ) AS comment_count FROM test_case tc LEFT JOIN `comment` com ON tc.ID = com.PRINCIPAL_ID WHERE tc.ID = t1.`ID`) AS `COMMENT_COUNT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 高级搜索(advanced_search) :id=test_case-advanced_search
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 评审结果分布(assessmentResult) :id=test_case-assessmentResult
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 基线选择用例(baseline_choose_case) :id=test_case-baseline_choose_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = 'test_case'  AND  t31.`PRINCIPAL_TYPE` = 'baseline'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.baseline} ) )) AND ( t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.suite_id !=null ">  t11.`SUITES` LIKE CONCAT('%',#{ctx.webcontext.suite_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.suite_id !=null ">  t1.`SUITE_ID` = #{ctx.webcontext.suite_id}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 基线用例(baseline_test_case) :id=test_case-baseline_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = 'test_case'  AND  t31.`PRINCIPAL_TYPE` = 'baseline'  AND  <choose><when test="ctx.webcontext.baseline !=null ">  t31.`PRINCIPAL_ID` = #{ctx.webcontext.baseline}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### BI反查(bi_detail) :id=test_case-bi_detail
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### BI查询(bi_search) :id=test_case-bi_search
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t11.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t11.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`REVIEW_RESULT_STATE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`SUITE_ID`,
t1.`TEST_LIBRARY_ID`,
t11.`NAME` AS `TEST_LIBRARY_NAME`,
t1.`TEST_TYPE`,
t1.`TITLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`
FROM `TEST_CASE` t1 
LEFT JOIN `LIBRARY` t11 ON t1.`TEST_LIBRARY_ID` = t11.`ID` 

```

#### 用例成员分布(casePerson) :id=test_case-casePerson
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 用例类型分布(caseType) :id=test_case-caseType
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 评论通知维护人(comment_notify_maintenance) :id=test_case-comment_notify_maintenance
```sql
SELECT
t1.`ID`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`
FROM `TEST_CASE` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}  and t2.create_man != t1.maintenance_id ) )
```

#### 每日执行用例趋势(dailyTendencies) :id=test_case-dailyTendencies
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 测试用例重要程度分布(degreeImportance) :id=test_case-degreeImportance
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 已删除(deleted) :id=test_case-deleted
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 每日测试次数统计(everydayTest) :id=test_case-everydayTest
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 需求关联测试用例(idea_relation_test_case) :id=test_case-idea_relation_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = 'test_case'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t31.`PRINCIPAL_TYPE` = 'idea' ) ) AND ( t1.`IS_DELETED` = 0 )
```

#### 我负责的测试用例(my_assign) :id=test_case-my_assign
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t1.`MAINTENANCE_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 我关注的测试用例(my_attention) :id=test_case-my_attention
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from `attention` t2 where t2.owner_id = t1.id and t2.`type` in ('20', '30', '40') and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 我创建的测试用例(my_created) :id=test_case-my_created
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 过滤器默认查询(my_filter) :id=test_case-my_filter
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t21.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0 )
```

#### 我的事项测试用例(my_summary_case) :id=test_case-my_summary_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t21.`IS_ARCHIVED` = 0  AND  t21.`IS_DELETED` = 0 ) AND ( t1.`MAINTENANCE_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`STATE` = '10' )
```

#### 正常状态(normal) :id=test_case-normal
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.suite_id !=null ">  t11.`SUITES` LIKE CONCAT('%',#{ctx.webcontext.suite_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.suite_id !=null ">  t1.`SUITE_ID` = #{ctx.webcontext.suite_id}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 无模块用例(nosuite_test_case) :id=test_case-nosuite_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`SUITE_ID` IS NULL )
```

#### 未添加过的用例(not_add_case) :id=test_case-not_add_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( not exists(select 1 from run t2 
where 
t1.ID= t2.CASE_ID 
and
t2.PLAN_ID = #{ctx.webcontext.test_plan})  AND  t1.`IS_DELETED` = 0  AND  ( <choose><when test="ctx.webcontext.suite_id !=null ">  t11.`SUITES` LIKE CONCAT('%',#{ctx.webcontext.suite_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.suite_id !=null ">  t1.`SUITE_ID` = #{ctx.webcontext.suite_id}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 未关联的用例(not_exsists_relation) :id=test_case-not_exsists_relation
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  AND  t31.`TARGET_TYPE` = #{ctx.webcontext.target_type}  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( ( <choose><when test="ctx.webcontext.suite_id !=null ">  t11.`SUITES` LIKE CONCAT('%',#{ctx.webcontext.suite_id},'%')  </when><otherwise>1=1</otherwise></choose>  OR  <choose><when test="ctx.webcontext.suite_id !=null ">  t1.`SUITE_ID` = #{ctx.webcontext.suite_id}  </when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 用例通知维护人(notify_assignee) :id=test_case-notify_assignee
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t1.`ID` = #{ctx.webcontext.id}  AND  t1.`MAINTENANCE_ID` <> #{ctx.sessioncontext.srfpersonid} )
```

#### 优先级分布(priorityDistributions) :id=test_case-priorityDistributions
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 测试用例规划分析(program_analyze) :id=test_case-program_analyze
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 公开(public) :id=test_case-public
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t21.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=test_case-reader
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE EXISTS(SELECT * FROM `LIBRARY_MEMBER` t31 
 WHERE 
 t21.`ID` = t31.`LIBRARY_ID`  AND  ( t31.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 最近浏览(recent_test_case) :id=test_case-recent_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  NOT EXISTS(SELECT 1 FROM `RELATION` t3 WHERE t1.`ID` = t3.`TARGET_ID` AND  t3.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}   )  AND  exists(select 1 from recent t2 where t1.id=t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} ) )
```

#### 关联测试用例(relation_test_case) :id=test_case-relation_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t31.`PRINCIPAL_TYPE` = 'idea'  AND  t31.`TARGET_TYPE` = 'test_case' ) ) AND ( t1.`IS_DELETED` <> 1 )
```

#### 当前模块下用例(suites_test_case) :id=test_case-suites_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE ( INSTR(t1.suites, #{ctx.webcontext.principal_id} ) )
```

#### 测试用例活动情况(test_case_maneuver_context) :id=test_case-test_case_maneuver_context
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

#### 测试计划用例(test_plan_test_case) :id=test_case-test_plan_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE EXISTS(SELECT * FROM `RUN` t31 
 WHERE 
 t1.`ID` = t31.`CASE_ID`  AND  ( <choose><when test="ctx.webcontext.test_plan !=null ">  t31.`PLAN_ID` = #{ctx.webcontext.test_plan}  </when><otherwise>1=1</otherwise></choose> ) )
```

#### 工作项关联测试用例(work_item_relation_test_case) :id=test_case-work_item_relation_test_case
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t21.`IDENTIFIER` AS `LIBRARY_IDENTIFIER`,
t21.`IS_ARCHIVED` AS `LIBRARY_IS_ARCHIVED`,
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t1.`MAINTENANCE_ID`,
t1.`MAINTENANCE_NAME`,
t1.`NAME`,
t1.`PRECONDITION`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`REVIEW_RESULT_STATE`,
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

WHERE EXISTS(SELECT * FROM `RELATION` t31 
 WHERE 
 t1.`ID` = t31.`TARGET_ID`  AND  ( ( t31.`PRINCIPAL_TYPE` = 'work_item'  OR  t31.`PRINCIPAL_TYPE` = 'bug' )  AND  t31.`TARGET_TYPE` = 'test_case'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` = 0 )
```


## [用例模板(TEST_CASE_TEMPLATE)](module/TestMgmt/test_case_template.md) :id=test_case_template

#### 数据查询(DEFAULT) :id=test_case_template-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t1.`NAME`,
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
FROM `TEST_CASE_TEMPLATE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

```

#### 默认（全部数据）(VIEW) :id=test_case_template-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`LEVEL`,
t1.`NAME`,
t1.`PRECONDITION`,
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
FROM `TEST_CASE_TEMPLATE` t1 
LEFT JOIN `TEST_SUITE` t11 ON t1.`SUITE_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`TEST_LIBRARY_ID` = t21.`ID` 

```


## [测试计划(TEST_PLAN)](module/TestMgmt/test_plan.md) :id=test_plan

#### 数据查询(DEFAULT) :id=test_plan-Default
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

WHERE ( <choose><when test="ctx.webcontext.type !=null ">  t1.`TYPE` = #{ctx.webcontext.type}  </when><otherwise>1=1</otherwise></choose> )
```

#### 默认（全部数据）(VIEW) :id=test_plan-View
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`SUMMARY`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

```

#### BI反查(bi_detail) :id=test_plan-bi_detail
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

```

#### BI查询(bi_search) :id=test_plan-bi_search
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

```

#### 当前项目(cur_project) :id=test_plan-cur_project
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

WHERE ( t1.`PROJECT_ID` = #{ctx.webcontext.n_project_id_eq} )
```

#### 我负责的(my_assignee) :id=test_plan-my_assignee
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

WHERE ( t21.`IS_DELETED` = 0 ) AND ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid} )
```

#### 我的进行中的(my_in_progress) :id=test_plan-my_in_progress
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

WHERE ( t21.`IS_DELETED` = 0 ) AND ( t1.`STATUS` = 'in_progress' )
```

#### 我参与的(my_participate) :id=test_plan-my_participate
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

WHERE EXISTS(SELECT * FROM `RUN` t51 
 WHERE 
 t1.`ID` = t51.`PLAN_ID`  AND  ( t51.`EXECUTOR_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t21.`IS_DELETED` = 0 )
```

#### 未开始和进行中的计划(pending_and_in_progress) :id=test_plan-pending_and_in_progress
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

WHERE ( t1.`STATUS` <> 'completed' )
```

#### 查询未移入过的计划(query_no_shift_in) :id=test_plan-query_no_shift_in
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

WHERE ( not exists (select 1 from run t2 where t1.ID = t2.PLAN_ID and t2.CASE_ID= #{ctx.webcontext.testcaseid}) )
```

#### 测试计划(test_plan) :id=test_plan-test_plan
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

```

#### 未加入计划(un_join_plan) :id=test_plan-un_join_plan
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
t21.`IS_DELETED` AS `LIBRARY_IS_DELETED`,
t21.`NAME` AS `LIBRARY_NAME`,
t1.`NAME`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`RELEASE_ID`,
t41.`NAME` AS `RELEASE_NAME`,
t1.`SPRINT_ID`,
t31.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TEST_PLAN` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `LIBRARY` t21 ON t1.`LIBRARY_ID` = t21.`ID` 
LEFT JOIN `SPRINT` t31 ON t1.`SPRINT_ID` = t31.`ID` 
LEFT JOIN `PROJECT_RELEASE` t41 ON t1.`RELEASE_ID` = t41.`ID` 

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


## [用例模块(TEST_SUITE)](module/TestMgmt/test_suite.md) :id=test_suite

#### 数据查询(DEFAULT) :id=test_suite-Default
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

#### 默认（全部数据）(VIEW) :id=test_suite-View
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

#### 当前测试库用例模块(cur_test_suite) :id=test_suite-cur_test_suite
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

WHERE ( t1.`LIBRARY_ID` = #{ctx.datacontext.library} )
```

#### 无父类(no_parent) :id=test_suite-no_parent
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

#### 正常(normal) :id=test_suite-normal
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

#### 顶级模块(root) :id=test_suite-root
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


## [工单(TICKET)](module/ProdMgmt/ticket.md) :id=ticket

#### 数据查询(DEFAULT) :id=ticket-Default
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 默认（全部数据）(VIEW) :id=ticket-View
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
(SELECT COUNT( att.ID ) AS comment_count FROM ticket tc LEFT JOIN `attention` att ON tc.ID = att.OWNER_ID WHERE tc.ID = t1.`ID`) AS `ATTENTION_COUNT`,
t1.`CHANNEL`,
(SELECT COUNT( com.ID ) AS comment_count FROM ticket tc LEFT JOIN `comment` com ON tc.ID = com.PRINCIPAL_ID WHERE tc.ID = t1.`ID`) AS `COMMENT_COUNT`,
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
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 管理员(admin) :id=ticket-admin
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t31 
 WHERE 
 t11.`ID` = t31.`PRODUCT_ID`  AND  ( t31.`ROLE_ID` = 'admin'  AND  t31.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 高级搜索(advanced_search) :id=ticket-advanced_search
```sql
SELECT
t1.`ID`,
t1.`PRODUCT_ID`,
t11.`NAME` AS `PRODUCT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`TITLE`
FROM `TICKET` t1 
LEFT JOIN `PRODUCT` t11 ON t1.`PRODUCT_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  exists(select 1 from product t2, product_member t3 where t1.product_id = t2.id and t2.id = t3.product_id and t3.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 已归档(archived) :id=ticket-archived
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### BI反查(bi_detail) :id=ticket-bi_detail
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### BI查询(bi_search) :id=ticket-bi_search
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
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

#### 评论通知负责人(comment_notify_assignee) :id=ticket-comment_notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `TICKET` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id} and t2.create_man != t1.assignee_id) )
```

#### 普通工单(common) :id=ticket-common
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 客户未关联工单(customer_notre_ticket) :id=ticket-customer_notre_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 客户关联工单(customer_relation_ticket) :id=ticket-customer_relation_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 特定用户(customer_user) :id=ticket-customer_user
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t31 
 WHERE 
 t11.`ID` = t31.`PRODUCT_ID`  AND  ( t31.`ROLE_ID` = 'customer'  AND  t31.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) AND ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 已删除(deleted) :id=ticket-deleted
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 产品需求关联工单(idea_relation_ticket) :id=ticket-idea_relation_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t31.`TARGET_TYPE` = 'ticket'  AND  t31.`PRINCIPAL_TYPE` = 'idea' ) ) AND ( t1.`IS_DELETED` = 0 )
```

#### 产品工单集合（移动端）(mob_ticket_list) :id=ticket-mob_ticket_list
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 我负责的(my_assign) :id=ticket-my_assign
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 我关注的工单(my_attention) :id=ticket-my_attention
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 我创建的(my_created) :id=ticket-my_created
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 过滤器默认查询(my_filter) :id=ticket-my_filter
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0 )
```

#### 我的事项工单(my_summary_ticket) :id=ticket-my_summary_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

WHERE ( t11.`IS_ARCHIVED` = 0  AND  t11.`IS_DELETED` = 0 ) AND ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t1.state in ( select val from dictionary where CATALOG = 'ticket_state' and type = 'in_progress') )
```

#### 正常状态(normal) :id=ticket-normal
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 未关联的工单(not_exsists_relation) :id=ticket-not_exsists_relation
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 工单通知负责人(notify_assignee) :id=ticket-notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `TICKET` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.id}  AND  t1.`ASSIGNEE_ID` <> #{ctx.sessioncontext.srfpersonid} )
```

#### 公开(public) :id=ticket-public
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

WHERE ( t11.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=ticket-reader
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t31 
 WHERE 
 t11.`ID` = t31.`PRODUCT_ID`  AND  ( t31.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 最近浏览(recent_ticket) :id=ticket-recent_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 关联工单(relation_ticket) :id=ticket-relation_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = 'ticket'  AND  t31.`PRINCIPAL_TYPE` = 'idea'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` <> 1 )
```

#### 当前标签下工单(ticket_re_product_tag) :id=ticket-ticket_re_product_tag
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

#### 工单关联工单(ticket_relation_ticket) :id=ticket-ticket_relation_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t31.`TARGET_TYPE` = 'ticket'  AND  t31.`PRINCIPAL_TYPE` = 'ticket' ) ) AND ( t1.`IS_DELETED` = 0 )
```

#### 工单统计(ticket_statistics) :id=ticket-ticket_statistics
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t31.`TARGET_TYPE` = 'ticket'  AND  t31.`PRINCIPAL_TYPE` = 'idea' ) ) AND ( t1.`IS_DELETED` = 0 )
```

#### 普通用户(user) :id=ticket-user
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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

WHERE EXISTS(SELECT * FROM `PRODUCT_MEMBER` t31 
 WHERE 
 t11.`ID` = t31.`PRODUCT_ID`  AND  ( t31.`ROLE_ID` = 'user'  AND  t31.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 工作项关联工单(work_item_relation_ticket) :id=ticket-work_item_relation_ticket
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CHANNEL`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMER_ID`,
t21.`NAME` AS `CUSTOMER_NAME`,
t1.`ESTIMATED_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`NAME`,
t1.`PRIORITY`,
t1.`PRODUCT_ID`,
t11.`IDENTIFIER` AS `PRODUCT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PRODUCT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PRODUCT_IS_DELETED`,
t11.`NAME` AS `PRODUCT_NAME`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
1 AS `REP_NUM`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION`,
t1.`SOLUTION_WAY`,
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
 t1.`ID` = t31.`TARGET_ID`  AND  ( t31.`TARGET_TYPE` = 'ticket'  AND  t31.`PRINCIPAL_TYPE` = 'work_item'  AND  t31.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` = 0 )
```


## [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type.md) :id=ticket_type

#### 数据查询(DEFAULT) :id=ticket_type-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET_TYPE` t1 

```

#### 默认（全部数据）(VIEW) :id=ticket_type-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET_TYPE` t1 

```

#### 不存在的产品工单类型(not_exists_ticket_type) :id=ticket_type-not_exists_ticket_type
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `TICKET_TYPE` t1 

WHERE NOT(EXISTS(SELECT * FROM `PRODUCT_TICKET_TYPE` t11 
 WHERE 
 t1.`ID` = t11.`TICKET_TYPE_ID`  AND  ( t11.`PRODUCT_ID` = #{ctx.webcontext.product} ) ))
```


## [流转记录(TRANSITION_HISTORY)](module/ProjMgmt/transition_history.md) :id=transition_history

#### 数据查询(DEFAULT) :id=transition_history-Default
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

#### 默认（全部数据）(VIEW) :id=transition_history-View
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


## [进展(UPDATE_RECORD)](module/Team/update_record.md) :id=update_record

#### 数据查询(DEFAULT) :id=update_record-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`KEY_RESULT_ID`,
t1.`NAME`,
t1.`OBJECTIVE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `UPDATE_RECORD` t1 

```

#### 默认（全部数据）(VIEW) :id=update_record-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`KEY_RESULT_ID`,
t1.`NAME`,
t1.`OBJECTIVE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `UPDATE_RECORD` t1 

```


## [版本(VERSION)](module/Base/version.md) :id=version

#### 数据查询(DEFAULT) :id=version-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_NAMED`,
t1.`MANUAL`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`RESTORABLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `VERSION` t1 

```

#### 默认（全部数据）(VIEW) :id=version-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DATA`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_NAMED`,
t1.`MANUAL`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`RESTORABLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `VERSION` t1 

```

#### 命名版本(name_version) :id=version-name_version
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_NAMED`,
t1.`MANUAL`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`RESTORABLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `VERSION` t1 

WHERE ( t1.`IS_NAMED` = 1 )
```

#### 所属对象版本(owner) :id=version-owner
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_NAMED`,
t1.`MANUAL`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`RESTORABLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `VERSION` t1 

WHERE ( t1.`OWNER_ID` = #{ctx.datacontext.owner_id} )
```


## [附加数据版本(VERSION_DATA)](module/Base/version_data.md) :id=version_data

#### 数据查询(DEFAULT) :id=version_data-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DATA`,
t1.`DESCRIPTION`,
t1.`FILTER`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`PARENT_ID`,
t1.`PARENT_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `VERSION_DATA` t1 

```

#### 默认（全部数据）(VIEW) :id=version_data-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DATA`,
t1.`DESCRIPTION`,
t1.`FILTER`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`PARENT_ID`,
t1.`PARENT_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `VERSION_DATA` t1 

```


## [工作(WORK)](module/Base/work.md) :id=work

#### 数据查询(DEFAULT) :id=work-Default
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

#### 默认（全部数据）(VIEW) :id=work-View
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

#### 项目集下的工作(item_set_owner) :id=work-item_set_owner
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


## [工作项(WORK_ITEM)](module/ProjMgmt/work_item.md) :id=work_item

#### 数据查询(DEFAULT) :id=work_item-Default
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

```

#### 默认（全部数据）(VIEW) :id=work_item-View
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
(SELECT COUNT( att.ID ) AS attention_count FROM work_item w LEFT JOIN `attention` att ON w.ID = att.OWNER_ID WHERE w.ID = t1.`ID`) AS `ATTENTION_COUNT`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
(SELECT COUNT( com.ID ) AS comment_count FROM work_item p LEFT JOIN `comment` com ON p.ID = com.PRINCIPAL_ID WHERE p.ID = t1.`ID`) AS `COMMENT_COUNT`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='IDEA') AS `RELATION_TOTAL_IDEA`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TEST_CASE') AS `RELATION_TOTAL_TEST_CASE`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TICKET') AS `RELATION_TOTAL_TICKET`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='WORK_ITEM') AS `RELATION_TOTAL_WORK_ITEM`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

```

#### 高级搜索(advanced_search) :id=work_item-advanced_search
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  exists(select 1 from project t2, project_member t3 where t1.project_id = t2.id and t2.id = t3.project_id and t3.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 已归档(archived) :id=work_item-archived
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 1  AND  t1.`IS_DELETED` = 0 )
```

#### 基线选择工作项(baseline_choose_work_item) :id=work_item-baseline_choose_work_item
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t1.`STATE`,
t1.`TITLE`,
t1.`WORK_ITEM_TYPE_ID`,
t11.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `WORK_ITEM_TYPE` t11 ON t1.`WORK_ITEM_TYPE_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_ID` = #{ctx.webcontext.baseline}  AND  t21.`TARGET_TYPE` = 'work_item'  AND  t21.`PRINCIPAL_TYPE` = 'baseline' ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  ( <choose><when test="ctx.webcontext.query_attention !=null ">  exists(select 1 from attention t2 where t1.ID = t2.owner_id and t2.user_id =#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0 )
```

#### BI反查(bi_detail) :id=work_item-bi_detail
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
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`JOB_TYPE`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`REAPPEAR_PROBABILITY`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='IDEA') AS `RELATION_TOTAL_IDEA`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TEST_CASE') AS `RELATION_TOTAL_TEST_CASE`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TICKET') AS `RELATION_TOTAL_TICKET`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='WORK_ITEM') AS `RELATION_TOTAL_WORK_ITEM`,
t1.`RELEASE_ID`,
t71.`NAME` AS `RELEASE_NAME`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t61.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t31.`TYPE` AS `STATE_TYPE`,
t1.`TAGS`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `SPRINT` t61 ON t1.`SPRINT_ID` = t61.`ID` 
LEFT JOIN `PROJECT_RELEASE` t71 ON t1.`RELEASE_ID` = t71.`ID` 

```

#### BI查询(bi_search) :id=work_item-bi_search
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
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`JOB_TYPE`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t1.`REAPPEAR_PROBABILITY`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='IDEA') AS `RELATION_TOTAL_IDEA`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TEST_CASE') AS `RELATION_TOTAL_TEST_CASE`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='TICKET') AS `RELATION_TOTAL_TICKET`,
(SELECT COUNT(1) FROM RELATION WHERE PRINCIPAL_ID = t1.`ID` AND TARGET_TYPE ='WORK_ITEM') AS `RELATION_TOTAL_WORK_ITEM`,
t1.`RELEASE_ID`,
t71.`NAME` AS `RELEASE_NAME`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t61.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t31.`TYPE` AS `STATE_TYPE`,
t1.`TAGS`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID` 
LEFT JOIN `ENTRY` t41 ON t1.`ENTRY_ID` = t41.`ID` 
LEFT JOIN `BOARD` t51 ON t1.`BOARD_ID` = t51.`ID` 
LEFT JOIN `SPRINT` t61 ON t1.`SPRINT_ID` = t61.`ID` 
LEFT JOIN `PROJECT_RELEASE` t71 ON t1.`RELEASE_ID` = t71.`ID` 

WHERE ( t11.`IS_DELETED` = 0 )
```

#### 缺陷工作项(bug) :id=work_item-bug
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t21.`GROUP` = 'bug' )
```

#### 缺陷工作项(bug_work_item) :id=work_item-bug_work_item
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t21.`GROUP` = 'bug' )
```

#### 变更父工作项(change_parent) :id=work_item-change_parent
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  ( <choose><when test="ctx.webcontext.query_attention !=null ">  exists(select 1 from attention t2 where t1.ID = t2.owner_id and t2.user_id =#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> ) )
```

#### 查询子工作项(child) :id=work_item-child
```sql
SELECT
t1.`ID`,
t1.`PID`,
t1.`PROJECT_ID`,
t1.`TOP_ID`
FROM `WORK_ITEM` t1 

```

#### 选择工作项(choose) :id=work_item-choose
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`PROJECT_ID` = #{ctx.webcontext.project_id}  AND  ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  ( <choose><when test="ctx.webcontext.query_attention !=null ">  exists(select 1 from attention t2 where t1.ID = t2.owner_id and t2.user_id =#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> ) )
```

#### 选择子工作项(choose_child) :id=work_item-choose_child
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`ID` <> #{ctx.webcontext.principal_id}  AND  t1.`PROJECT_ID` = #{ctx.webcontext.project_id}  AND  ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  ( <choose><when test="ctx.webcontext.query_attention !=null ">  exists(select 1 from attention t2 where t1.ID = t2.owner_id and t2.user_id =#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  ( t1.`PID` <> #{ctx.webcontext.principal_id}  OR  t1.`PID` IS NULL ) )
```

#### 选择依赖(choose_dependency) :id=work_item-choose_dependency
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`ID` <> #{ctx.webcontext.principal_id}  AND  ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  ( <choose><when test="ctx.webcontext.query_attention !=null ">  exists(select 1 from attention t2 where t1.ID = t2.owner_id and t2.user_id =#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  not exists(select 1 from `relation` t2 where (t1.id = t2.principal_id or t1.id = t2.target_id) and t2.principal_type = 'dependency') )
```

#### 选择父工作项(choose_parent_work_item) :id=work_item-choose_parent_work_item
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t21.`SUB_TYPE` LIKE CONCAT('%',#{ctx.webcontext.work_item_type_id},'%') ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 评论通知负责人(comment_notify_assignee) :id=work_item-comment_notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `WORK_ITEM` t1 

WHERE ( exists (select 1 from comment t2 where t1.ID = t2.PRINCIPAL_ID and t2.ID = #{ctx.webcontext.id}  and t2.create_man != t1.assignee_id) )
```

#### 普通工作项(common) :id=work_item-common
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(CASE WHEN t21.`TYPE` <> 'completed' and t21.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t21.`TYPE` AS `STATE_TYPE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t21 ON t1.`STATE` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 普通状态缺陷(common_bug) :id=work_item-common_bug
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(CASE WHEN t21.`TYPE` <> 'completed' and t21.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t21.`TYPE` AS `STATE_TYPE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t21 ON t1.`STATE` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t51 ON t1.`WORK_ITEM_TYPE_ID` = t51.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t51.`GROUP` = 'bug' )
```

#### 已删除(deleted) :id=work_item-deleted
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 1 )
```

#### 需求关联工作项(idea_relation_work_item) :id=work_item-idea_relation_work_item
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t101 
 WHERE 
 t11.`ID` = t101.`PRINCIPAL_ID`  AND  ( t101.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) ) AND ( t1.`IS_DELETED` = 0 )
```

#### 看板工作项(kanban_work_item) :id=work_item-kanban_work_item
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`BOARD_ID` IS NOT NULL  AND  t1.`ENTRY_ID` IS NOT NULL )
```

#### 里程碑(milestone) :id=work_item-milestone
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  ( t1.`WORK_ITEM_TYPE_ID` = 'waterfall_milestone'  OR  t1.`WORK_ITEM_TYPE_ID` = 'hybrid_milestone' ) )
```

#### 移动工作项(move_work_item) :id=work_item-move_work_item
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`PROJECT_ID` = #{ctx.datacontext.project_id} )
```

#### 我负责的(my_assignee) :id=work_item-my_assignee
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  OR  exists(select 1 from executor t2 where t1.id = t2.owner_id and t2.owner_type = 'WORK_ITEM' and t2.owner_subtype = 'WORK_ITEM' and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 我关注的(my_attention) :id=work_item-my_attention
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  exists(select 1 from `attention` t2 where t2.owner_id = t1.id and t2.`type` in ('20', '30', '40') and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )
```

#### 我创建的(my_created) :id=work_item-my_created
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 过滤器默认查询(my_filter) :id=work_item-my_filter
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`IS_DELETED` = 0 )
```

#### 我的事项_缺陷数(my_summary_bug) :id=work_item-my_summary_bug
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t11.`IS_DELETED` = 0  AND  t11.`IS_ARCHIVED` = 0 ) AND ( ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  OR  exists(select 1 from executor t2 where t1.id = t2.owner_id and t2.owner_type = 'WORK_ITEM' and t2.owner_subtype = 'WORK_ITEM' and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t21.`GROUP` = 'bug'  AND  t41.`TYPE` = 'in_progress' )
```

#### 我的事项_其他工作项数(my_summary_other) :id=work_item-my_summary_other
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t11.`IS_DELETED` = 0  AND  t11.`IS_ARCHIVED` = 0 ) AND ( ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  OR  exists(select 1 from executor t2 where t1.id = t2.owner_id and t2.owner_type = 'WORK_ITEM' and t2.owner_subtype = 'WORK_ITEM' and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )  AND  t21.`GROUP` <> 'bug'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t21.`GROUP` <> 'task'  AND  t41.`TYPE` = 'in_progress' )
```

#### 我的事项_任务数(my_summary_task) :id=work_item-my_summary_task
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t11.`IS_DELETED` = 0  AND  t11.`IS_ARCHIVED` = 0 ) AND ( ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  OR  exists(select 1 from executor t2 where t1.id = t2.owner_id and t2.owner_type = 'WORK_ITEM' and t2.owner_subtype = 'WORK_ITEM' and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )  AND  t21.`GROUP` = 'task'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t41.`TYPE` = 'in_progress' )
```

#### 我待完成的(my_todo) :id=work_item-my_todo
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( ( t1.`ASSIGNEE_ID` = #{ctx.sessioncontext.srfpersonid}  OR  exists(select 1 from executor t2 where t1.id = t2.owner_id and t2.owner_type = 'WORK_ITEM' and t2.owner_subtype = 'WORK_ITEM' and t2.user_id = #{ctx.sessioncontext.srfpersonid}) )  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t41.`TYPE` <> 'completed' )
```

#### 排除缺陷类型的工作项(no_bug_work_item) :id=work_item-no_bug_work_item
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t101 
 WHERE 
 t1.`ID` = t101.`TARGET_ID`  AND  ( t101.`PRINCIPAL_TYPE` = 'test_case'  AND  t101.`TARGET_TYPE` = 'work_item'  AND  t101.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t21.`GROUP` <> 'bug' )
```

#### 未完成(no_completed) :id=work_item-no_completed
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(CASE WHEN t21.`TYPE` <> 'completed' and t21.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t21.`TYPE` AS `STATE_TYPE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t21 ON t1.`STATE` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  t21.`TYPE` <> 'completed' )
```

#### 正常状态(normal) :id=work_item-normal
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0 )
```

#### 未关联的缺陷(not_exsists_bug_relation) :id=work_item-not_exsists_bug_relation
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t101 
 WHERE 
 t1.`ID` = t101.`TARGET_ID`  AND  ( t101.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  AND  t101.`TARGET_TYPE` = #{ctx.webcontext.target_type}  AND  t101.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id} ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t21.`GROUP` = 'bug'  AND  t1.`IS_DELETED` = 0 )
```

#### 未关联的工作项(not_exsists_relation) :id=work_item-not_exsists_relation
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t101 
 WHERE 
 t1.`ID` = t101.`TARGET_ID`  AND  ( <choose><when test="ctx.webcontext.principal_type !=null ">  t101.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.target_type !=null ">  t101.`TARGET_TYPE` = #{ctx.webcontext.target_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t101.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`ID` <> #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> )
```

#### 未关联且不为缺陷工作项(notbug_exsists_relation) :id=work_item-notbug_exsists_relation
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t101 
 WHERE 
 t1.`ID` = t101.`TARGET_ID`  AND  ( <choose><when test="ctx.webcontext.principal_type !=null ">  t101.`PRINCIPAL_TYPE` = #{ctx.webcontext.principal_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.target_type !=null ">  t101.`TARGET_TYPE` = #{ctx.webcontext.target_type}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t101.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`WORK_ITEM_TYPE_ID` <> 'kanban_bug'  AND  t1.`WORK_ITEM_TYPE_ID` <> 'scrum_bug'  AND  t1.`WORK_ITEM_TYPE_ID` <> 'waterfall_bug'  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  <choose><when test="ctx.webcontext.principal_id !=null ">  t1.`ID` <> #{ctx.webcontext.principal_id}  </when><otherwise>1=1</otherwise></choose> )
```

#### 工作项通知负责人(notify_assignee) :id=work_item-notify_assignee
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`ID`
FROM `WORK_ITEM` t1 

WHERE ( t1.`ID` = #{ctx.webcontext.id}  AND  t1.`ASSIGNEE_ID` <> #{ctx.sessioncontext.srfpersonid} )
```

#### 逾期工作项(overdue_work_item) :id=work_item-overdue_work_item
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(CASE WHEN t21.`TYPE` <> 'completed' and t21.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t21.`TYPE` AS `STATE_TYPE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t21 ON t1.`STATE` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 

WHERE ( IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) IS NOT NULL  AND  IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) > '0' )
```

#### 项目概览-工作项统计(overview_chart) :id=work_item-overview_chart
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 新建规划快照时查询工作项(plan_snapshot) :id=work_item-plan_snapshot
```sql
SELECT
t1.`CUR_VERSION_ID`,
t1.`ID`
FROM `WORK_ITEM` t1 

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 项目资源分配(project_resource) :id=work_item-project_resource
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`START_AT`,
t1.`STATE`,
t1.`TITLE`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( t1.START_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  t1.END_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  (t1.start_at <= #{ctx.webcontext.n_date_scope_gtandeq}
and t1.end_at >= #{ctx.webcontext.n_date_scope_ltandeq}) ) )
```

#### 公开(public) :id=work_item-public
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t11.`VISIBILITY` = 'public' )
```

#### 只读用户(reader) :id=work_item-reader
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE EXISTS(SELECT * FROM `PROJECT_MEMBER` t101 
 WHERE 
 t11.`ID` = t101.`PROJECT_ID`  AND  ( t101.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )
```

#### 最近浏览(recent_work_item) :id=work_item-recent_work_item
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  exists(select 1 from recent t2 where t1.id=t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )  AND  NOT EXISTS(SELECT 1 FROM `RELATION` t3 WHERE t1.`ID` = t3.`TARGET_ID` AND  t3.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}   ) )
```

#### 关联工作项(relation_work_item) :id=work_item-relation_work_item
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE EXISTS(SELECT * FROM `RELATION` t101 
 WHERE 
 t1.`ID` = t101.`TARGET_ID`  AND  ( t101.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t101.`PRINCIPAL_TYPE` = 'idea'  AND  t101.`TARGET_TYPE` = 'work_item' ) ) AND ( t1.`IS_DELETED` <> 1 )
```

#### 项目发布下工作项(release) :id=work_item-release
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(CASE WHEN t21.`TYPE` <> 'completed' and t21.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t21.`TYPE` AS `STATE_TYPE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t21 ON t1.`STATE` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 项目发布规划工作项(release_plan) :id=work_item-release_plan
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  ( t1.`RELEASE_ID` <> #{ctx.webcontext.release_id}  OR  t1.`RELEASE_ID` IS NULL ) )
```

#### 发布工作项统计(release_work_item_chart) :id=work_item-release_work_item_chart
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`RELEASE_ID` = #{ctx.webcontext.release} )
```

#### 需求工作项(requirement) :id=work_item-requirement
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(CASE WHEN t21.`TYPE` <> 'completed' and t21.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`NAME` AS `PROJECT_NAME`,
t31.`TITLE` AS `PTITLE`,
t1.`REAPPEAR_PROBABILITY`,
t1.`RISK`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPRINT_ID`,
t41.`NAME` AS `SPRINT_NAME`,
t1.`START_AT`,
t1.`STATE`,
t21.`TYPE` AS `STATE_TYPE`,
t1.`TITLE`,
t1.`TOP_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t21 ON t1.`STATE` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `SPRINT` t41 ON t1.`SPRINT_ID` = t41.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t51 ON t1.`WORK_ITEM_TYPE_ID` = t51.`ID` 

WHERE ( t51.`GROUP` = 'requirement'  AND  t1.`IS_DELETED` = 0 )
```

#### 资源分配(resource) :id=work_item-resource
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( t1.START_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  t1.END_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  (t1.start_at <= #{ctx.webcontext.n_date_scope_gtandeq}
and t1.end_at >= #{ctx.webcontext.n_date_scope_ltandeq}) ) )
```

#### 用户故事（normal）(scrum_story_normal) :id=work_item-scrum_story_normal
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`WORK_ITEM_TYPE_ID` LIKE '%story%' )
```

#### 七天内创建或完成的工作项(seven_days) :id=work_item-seven_days
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( ( DATEDIFF(sysdate(),t1.`CREATE_TIME`) < 7  OR  DATEDIFF(sysdate(),t1.`COMPLETED_AT`) < 7 )  AND  t1.`IS_DELETED` = 0 )
```

#### 迭代下完成的工作项(sprint_completed) :id=work_item-sprint_completed
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`COMPLETED_AT` IS NOT NULL  AND  t41.`TYPE` = 'completed' )
```

#### 迭代工作项统计(sprint_work_item_chart) :id=work_item-sprint_work_item_chart
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`SPRINT_ID` = #{ctx.webcontext.sprint} )
```

#### 测试计划关联缺陷(test_plan_relation_bug) :id=work_item-test_plan_relation_bug
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t21.`GROUP` = 'bug'  AND  (
            EXISTS (
                    SELECT 1
                    FROM `relation` rel
                             INNER JOIN `RUN` ru ON ru.`ID` = rel.`PRINCIPAL_ID`
                    WHERE
                            rel.`TARGET_ID` = t1.`ID`
                      AND ru.`PLAN_ID` = #{ctx.webcontext.principal_id}
                      AND rel.`TARGET_TYPE` = 'work_item'
                      AND rel.`PRINCIPAL_TYPE` = 'run'
                )
            OR EXISTS (
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

#### 顶层数据查询(top) :id=work_item-top
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`PID` IS NULL  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0 )
```

#### 未删除的(un_deletd) :id=work_item-un_deletd
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_DELETED` = 0 )
```

#### 项目集工作下的工作项(under_work) :id=work_item-under_work
```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`BACKLOG_FROM`,
t1.`BACKLOG_TYPE`,
t1.`BOARD_ID`,
t81.`NAME` AS `BOARD_NAME`,
t1.`COMPLETED_AT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`END_AT`,
t1.`ENTRY_ID`,
t71.`NAME` AS `ENTRY_NAME`,
t1.`ENTRY_POSITION`,
t1.`ENTRY_STATUS`,
t1.`FINISHER`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
(CASE WHEN t41.`TYPE` <> 'completed' and t41.`TYPE` <> 'closed' and t1.`END_AT` < CURDATE() THEN 1 else 0 END) AS `IS_OVERTIME`,
t1.`JOB_TYPE`,
t1.`MULTIPLE_PEOPLE`,
IFNULL((TIMESTAMPDIFF(DAY,t1.`END_AT`,IFNULL(t1.`ACTUAL_END_AT`,CURDATE()))),NULL) AS `OVERDUE_TIME`,
t1.`PID`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`IS_ARCHIVED` AS `PROJECT_IS_ARCHIVED`,
t11.`IS_DELETED` AS `PROJECT_IS_DELETED`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
t31.`TITLE` AS `PTITLE`,
t31.`WORK_ITEM_TYPE_ID` AS `P_WORK_ITEM_TYPE_ID`,
t1.`REAPPEAR_PROBABILITY`,
DATEDIFF(CURDATE(), t1.`CREATE_TIME`) AS `RECENT_CREATE_DAYS`,
t1.`RELEASE_ID`,
t61.`NAME` AS `RELEASE_NAME`,
t61.`STATUS` AS `RELEASE_STATUS`,
1 AS `REP_NUM`,
t1.`RISK`,
t1.`SEQUENCE`,
t1.`SEVERITY`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SOLUTION_WAY`,
t1.`SPRINT_ID`,
t51.`NAME` AS `SPRINT_NAME`,
t51.`STATUS` AS `SPRINT_STATUS`,
t1.`START_AT`,
t1.`STATE`,
t41.`TYPE` AS `STATE_TYPE`,
t1.`SWIMLANE_ID`,
t1.`TAGS`,
t1.`TITLE`,
t1.`TOP_ID`,
t91.`TITLE` AS `TOP_TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t21.`ORGIN_STATE` AS `WORK_ITEM_ORIGIN_STATE`,
t21.`SUB_TYPE` AS `WORK_ITEM_SUB_TYPE`,
t21.`GROUP` AS `WORK_ITEM_TYPE_GROUP`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`,
t21.`SEQUENCE` AS `WORK_ITEM_TYPE_SEQUENCE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 
LEFT JOIN `WORK_ITEM` t31 ON t1.`PID` = t31.`ID` 
LEFT JOIN `WORK_ITEM_STATE` t41 ON t1.`STATE` = t41.`ID` 
LEFT JOIN `SPRINT` t51 ON t1.`SPRINT_ID` = t51.`ID` 
LEFT JOIN `PROJECT_RELEASE` t61 ON t1.`RELEASE_ID` = t61.`ID` 
LEFT JOIN `ENTRY` t71 ON t1.`ENTRY_ID` = t71.`ID` 
LEFT JOIN `BOARD` t81 ON t1.`BOARD_ID` = t81.`ID` 
LEFT JOIN `WORK_ITEM` t91 ON t1.`TOP_ID` = t91.`ID` 

WHERE ( t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  ( exists (select 1 from `work` t2, project t3 where t1.PROJECT_ID = t3.id and t2.PRINCIPAL_ID = t3.id 
and t2.PRINCIPAL_TYPE = 'project' and t2.PORTFOLIO_ID =#{ctx.webcontext.portfolio_id})  OR  exists (select 1 from project t2 where t1.PROJECT_ID = t2.id and t2.IS_ARCHIVED = 0 and t2.IS_DELETED  = 0)
and exists (select 1 from `work` a1, `work` a2 where a1.PORTFOLIO_ID  = a2.PRINCIPAL_ID   and a1.PRINCIPAL_ID = t1.project_id and a2.PORTFOLIO_ID = #{ctx.webcontext.portfolio_id}) ) )
```

#### 项目集工作下的资源工作项(under_work_resource) :id=work_item-under_work_resource
```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`END_AT`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
t11.`TYPE` AS `PROJECT_TYPE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`START_AT`,
t1.`STATE`,
t1.`TITLE`,
t1.`WORK_ITEM_TYPE_ID`,
t21.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 
LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  ( exists (select 1 from `work` t2, project t3 where t1.PROJECT_ID = t3.id and t2.PRINCIPAL_ID = t3.id 
and t2.PRINCIPAL_TYPE = 'project' and t2.PORTFOLIO_ID =#{ctx.webcontext.portfolio_id})  OR  exists (select 1 from project t2 where t1.PROJECT_ID = t2.id and t2.IS_ARCHIVED = 0 and t2.IS_DELETED  = 0)
and exists (select 1 from `work` a1, `work` a2 where a1.PORTFOLIO_ID  = a2.PRINCIPAL_ID   and a1.PRINCIPAL_ID = t1.project_id and a2.PORTFOLIO_ID = #{ctx.webcontext.portfolio_id}) )  AND  ( t1.START_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  t1.END_AT BETWEEN #{ctx.webcontext.n_date_scope_gtandeq}
AND #{ctx.webcontext.n_date_scope_ltandeq}  OR  (t1.start_at <= #{ctx.webcontext.n_date_scope_gtandeq}
and t1.end_at >= #{ctx.webcontext.n_date_scope_ltandeq}) ) )
```

#### 获取指定工作项的类型(work_item_type) :id=work_item-work_item_type
```sql
SELECT
t1.`ID`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM` t1 

```


## [工作项状态(WORK_ITEM_STATE)](module/ProjMgmt/work_item_state.md) :id=work_item_state

#### BI报表(BI_FORM) :id=work_item_state-BI_FORM
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM_STATE` t1 

WHERE ( ( t1.`TYPE` = 'closed'  OR  t1.`TYPE` = 'completed' ) )
```

#### 数据查询(DEFAULT) :id=work_item_state-Default
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM_STATE` t1 

```

#### 默认（全部数据）(VIEW) :id=work_item_state-View
```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM_STATE` t1 

```


## [工作项类型(WORK_ITEM_TYPE)](module/ProjMgmt/work_item_type.md) :id=work_item_type

#### 数据查询(DEFAULT) :id=work_item_type-Default
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
t1.`ORGIN_STATE`,
t1.`PROJECT_ID`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`SUB_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

```

#### 默认（全部数据）(VIEW) :id=work_item_type-View
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
t1.`ORGIN_STATE`,
t1.`PROJECT_ID`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`SUB_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

```

#### 选择变更工作项类型(choose_target_type) :id=work_item_type-choose_target_type
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
t1.`ORGIN_STATE`,
t1.`PROJECT_ID`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`SUB_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

WHERE ( exists(select 1 from `project` t2 where t2.`TYPE` = t1.`PROJECT_TYPE` and t2.`ID` = #{ctx.webcontext.project_id} and t1.`ID` <> #{ctx.webcontext.origin_type}) )
```

#### 当前项目工作项类型(cur_project_type) :id=work_item_type-cur_project_type
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
t1.`ORGIN_STATE`,
t1.`PROJECT_ID`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`SUB_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

WHERE ( `PROJECT_TYPE` = (select type from project where id=#{ctx.datacontext.project}) )
```

#### 原始状态分组(group_by_origin_state) :id=work_item_type-group_by_origin_state
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
t1.`ORGIN_STATE`,
t1.`PROJECT_ID`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`SUB_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

```

#### 项目工作项类型(project_work_item_type) :id=work_item_type-project_work_item_type
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
t1.`ORGIN_STATE`,
t1.`PROJECT_ID`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`SUB_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

WHERE ( `PROJECT_TYPE` = (select type from project where id=#{ctx.webcontext.project_id}) )
```

#### 非缺陷的工作项类型(project_work_item_type_not_bug) :id=work_item_type-project_work_item_type_not_bug
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
t1.`ORGIN_STATE`,
t1.`PROJECT_ID`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`SUB_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

WHERE ( `PROJECT_TYPE` = (select type from project where id=#{ctx.webcontext.project_id}) and `group` <> 'bug' )
```


## [工时(WORKLOAD)](module/Base/workload.md) :id=workload

#### 数据查询(DEFAULT) :id=workload-Default
```sql
SELECT
t1.`CATEGORY`,
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

#### 默认（全部数据）(VIEW) :id=workload-View
```sql
SELECT
t1.`CATEGORY`,
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

#### BI反查(bi_detail) :id=workload-bi_detail
```sql
SELECT
t1.`CATEGORY`,
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

#### BI查询(bi_search) :id=workload-bi_search
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DURATION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RECENT_PARENT`,
t1.`REGISTER_DATE`,
concat(t1.`RECENT_PARENT_IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`TYPE_ID`,
t11.`NAME` AS `TYPE_NAME`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORKLOAD` t1 
LEFT JOIN `WORKLOAD_TYPE` t11 ON t1.`TYPE_ID` = t11.`ID` 

```

#### 工时日历(calendar) :id=workload-calendar
```sql
SELECT
t1.`CATEGORY`,
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

#### 产品需求工时(idea_workload) :id=workload-idea_workload
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`PRINCIPAL_TYPE` = 'IDEA' )
```

#### 工时日志(log) :id=workload-log
```sql
SELECT
t1.`CATEGORY`,
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

#### 我的工时日历(my_calendar) :id=workload-my_calendar
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 我的产品需求工时(my_idea_workload) :id=workload-my_idea_workload
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`PRINCIPAL_TYPE` = 'IDEA'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 我登记的工时日志(my_log) :id=workload-my_log
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 工时日志(my_mob_log) :id=workload-my_mob_log
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 我的测试用例工时(my_test_case_workload) :id=workload-my_test_case_workload
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`PRINCIPAL_TYPE` = 'TEST_CASE'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 我的工作类别记录(my_type_of) :id=workload-my_type_of
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  <choose><when test="ctx.webcontext.type_id !=null ">  t1.`TYPE_ID` = #{ctx.webcontext.type_id}  </when><otherwise>t1.`TYPE_ID` is null</otherwise></choose> )
```

#### 我的工作项工时(my_work_item_workload) :id=workload-my_work_item_workload
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`PRINCIPAL_TYPE` = 'WORK_ITEM'  AND  t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 我的工时(my_workload) :id=workload-my_workload
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`CREATE_MAN` = #{ctx.sessioncontext.srfpersonid} )
```

#### 测试用例工时(test_case_workload) :id=workload-test_case_workload
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`PRINCIPAL_TYPE` = 'TEST_CASE' )
```

#### 工作类别记录(type_of) :id=workload-type_of
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( <choose><when test="ctx.webcontext.type_id !=null ">  t1.`TYPE_ID` = #{ctx.webcontext.type_id}  </when><otherwise>t1.`TYPE_ID` is null</otherwise></choose> )
```

#### 团队维度日历链接(user_group_link) :id=workload-user_group_link
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( exists(select 1 from `user_group` t2, `member` t3 where t1.create_man = t3.user_id and t2.id = t3.owner_id and t3.owner_type = 'GROUP' and t2.id = #{ctx.webcontext.user_group_id}) )
```

#### 团队工时(user_group_workload) :id=workload-user_group_workload
```sql
select t2.ID as `principal_id`,
t2.NAME,  
t1.DURATION,
t1.register_date,
t1.ID
from `workload` t1,  `user_group` t2
WHERE exists (select 1 from `member` t3 where t3.USER_ID = t1.CREATE_MAN and t2.id = t3.OWNER_ID  and t3.OWNER_TYPE = 'GROUP')
```

#### 工作项工时(work_item_workload) :id=workload-work_item_workload
```sql
SELECT
t1.`CATEGORY`,
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

WHERE ( t1.`PRINCIPAL_TYPE` = 'WORK_ITEM' )
```


## [工时类别(WORKLOAD_TYPE)](module/Base/workload_type.md) :id=workload_type

#### 数据查询(DEFAULT) :id=workload_type-Default
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORKLOAD_TYPE` t1 

```

#### 默认（全部数据）(VIEW) :id=workload_type-View
```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORKLOAD_TYPE` t1 

```

