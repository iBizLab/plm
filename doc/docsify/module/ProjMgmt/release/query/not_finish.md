## 未完成的发布(not_finish) <!-- {docsify-ignore-all} -->



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

(`STATUS(状态)` NOTEQ `'30'`)



### 查询连接
* **WORK_ITEM不存在1:N（NOT EXISTS (SELECT)）DER1N_WORK_ITEM_RELEASE_RELEASE_ID**<br>
连接关系：[DER1N_WORK_ITEM_RELEASE_RELEASE_ID](der/DER1N_WORK_ITEM_RELEASE_RELEASE_ID)<br>
连接实体：[项目发布](module/ProjMgmt/release)<br>
连接条件：(`ID(标识)` NOTEQ `网页请求上下文.work_item`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

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

WHERE NOT(EXISTS(SELECT * FROM `WORK_ITEM` t21 
 WHERE 
 t1.`ID` = t21.`RELEASE_ID`  AND  ( t21.`ID` <> #{ctx.webcontext.work_item} ) )) AND ( t1.`STATUS` <> '30' )
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