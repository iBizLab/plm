## 我关注的(my_attention) <!-- {docsify-ignore-all} -->

查询我关注的评审

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




### 查询连接
* **ATTENTION存在1:N（EXISTS (SELECT)）DERCUSTOM_ATTENTION_REVIEW_OWNER_ID**<br>
连接关系：[DERCUSTOM_ATTENTION_REVIEW_OWNER_ID](der/DERCUSTOM_ATTENTION_REVIEW_OWNER_ID)<br>
连接实体：[评审](module/TestMgmt/review)<br>
连接条件：(`USER_ID(关注人)` EQ `用户上下文.srfpersonid` AND `TYPE(关注类型)` IN `'20,30,40'`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

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
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
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