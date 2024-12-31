## 迭代关联发布(sprint_relation) <!-- {docsify-ignore-all} -->



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
* **RELATION存在1:N（EXISTS (SELECT)）DERCUSTOM_RELATION_RELEASE**<br>
连接关系：[DERCUSTOM_RELATION_RELEASE](der/DERCUSTOM_RELATION_RELEASE)<br>
连接实体：[项目发布](module/ProjMgmt/release)<br>
连接条件：(`TARGET_TYPE(关联目标类型)` EQ `'sprint'` AND `PRINCIPAL_TYPE(关联主体类型)` EQ `'release'` AND `TARGET_ID(目标主体标识)` EQ `网页请求上下文.sprint`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

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