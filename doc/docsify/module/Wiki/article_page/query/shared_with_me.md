## 与我共享(shared_with_me) <!-- {docsify-ignore-all} -->



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

* `指定属性组`
*  **属性组：**[共享属性](#)
  * `ID(标识)`
  * `NAME(主题)`
  * `IS_SHARED(是否开启共享)`
  * `IS_SHARED_SUBSET(是否同时共享子页面)`
  * `EXPIRATION_DATE(共享有效期)`
  * `PUBLISH_NAME(发布主题)`
  * `UPDATE_TIME(更新时间)`
  * `UPDATE_MAN(更新人)`
  * `SHARED_BY(共享人)`
  * `SHARED_TIME(共享时间)`
  * `SPACE_ID(空间标识)`



### 查询条件

(`IS_DELETED(是否已删除)` EQ `'0'` AND `IS_PUBLISHED(是否发布)` EQ `'1'` AND `IS_SHARED(是否开启共享)` EQ `'1'`)



### 查询连接
* **MEMBER存在1:N（EXISTS (SELECT)）DERCUSTOM_MEMBER_PAGE_OWNER_ID**<br>
连接关系：[DERCUSTOM_MEMBER_PAGE_OWNER_ID](der/DERCUSTOM_MEMBER_PAGE_OWNER_ID)<br>
连接实体：[页面](module/Wiki/article_page)<br>
连接条件：(`USER_ID(登录名)` EQ `用户上下文.srfuserid`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

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

WHERE EXISTS(SELECT * FROM `MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`OWNER_ID`  AND  t11.`OWNER_TYPE` = 'PAGE'  AND  t11.`OWNER_SUBTYPE` = 'SHARED'  AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfuserid} ) ) AND ( t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`IS_SHARED` = '1' )
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