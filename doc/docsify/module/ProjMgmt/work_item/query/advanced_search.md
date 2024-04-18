## 高级搜索(advanced_search) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[高级搜索](#)
  * `PROJECT_NAME(所属项目)`
  * `STATE(状态)`
  * `TITLE(标题)`
  * `ID(标识)`
  * `PROJECT_ID(项目)`
  * `SHOW_IDENTIFIER(编号)`
  * `PROJECT_IDENTIFIER(项目标识)`



### 查询条件

(`IS_DELETED(是否已删除)` EQ `'0'` AND `exists(select 1 from project t2, project_member t3 where t1.project_id = t2.id and t2.id = t3.project_id and t3.user_id = #{ctx.sessioncontext.srfpersonid})`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ID`,
t1.`PROJECT_ID`,
t11.`IDENTIFIER` AS `PROJECT_IDENTIFIER`,
t11.`NAME` AS `PROJECT_NAME`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`STATE`,
t1.`TITLE`
FROM `WORK_ITEM` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  exists(select 1 from project t2, project_member t3 where t1.project_id = t2.id and t2.id = t3.project_id and t3.user_id = #{ctx.sessioncontext.srfpersonid}) )
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