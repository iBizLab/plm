## 当前项目迭代且未完成(cur_sprint_not_finish) <!-- {docsify-ignore-all} -->



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

(`STATUS(状态)` NOTEQ `'3'` AND `PROJECT_ID(产品标识)` EQ `数据上下文.project`)





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
t1.`PID`,
t11.`NAME` AS `PNAME`,
t1.`PROJECT_ID`,
t21.`NAME` AS `PROJECT_NAME`,
t1.`START_AT`,
t1.`STATUS`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SPRINT` t1 
LEFT JOIN `SPRINT` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT` t21 ON t1.`PROJECT_ID` = t21.`ID` 

WHERE ( t1.`STATUS` <> '3'  AND  t1.`PROJECT_ID` = #{ctx.datacontext.project} )
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