## 与我共享编辑权限(shared_with_me_edit) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
</el-row>

<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `否`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`



### 查询条件

(`IS_SHARED(是否开启共享)` EQ `'1'` AND `IS_PUBLISHED(是否发布)` EQ `'1'` AND `IS_DELETED(是否已删除)` EQ `'0'`)



### 查询连接
* **MEMBER存在1:N（EXISTS (SELECT)）DERCUSTOM_MEMBER_PAGE_OWNER_ID**<br>
连接关系：[DERCUSTOM_MEMBER_PAGE_OWNER_ID](der/DERCUSTOM_MEMBER_PAGE_OWNER_ID)<br>
连接实体：[页面](module/Wiki/article_page)<br>
连接条件：(`USER_ID(登录名)` EQ `用户上下文.srfpersonid` AND `ROLE_ID(角色)` EQ `'user'`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

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

</el-dialog>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
                MYSQL5 : false
        
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>