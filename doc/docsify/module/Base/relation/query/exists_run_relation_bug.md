## 测试用例下存在执行用例关联缺陷(exists_run_relation_bug) <!-- {docsify-ignore-all} -->



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

(`TARGET_TYPE(关联目标类型)` EQ `'work_item'` AND `PRINCIPAL_TYPE(关联主体类型)` EQ `'run'` AND `TARGET_ID(关联目标标识)` EQ `数据上下文.target_id` AND `exists(select 1 from run t2 where t1.principal_id = t2.id and t2.case_id = #{ctx.datacontext.principal_id})`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

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

WHERE ( t1.`TARGET_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_TYPE` = 'run'  AND  t1.`TARGET_ID` = #{ctx.datacontext.target_id}  AND  exists(select 1 from run t2 where t1.principal_id = t2.id and t2.case_id = #{ctx.datacontext.principal_id}) )
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