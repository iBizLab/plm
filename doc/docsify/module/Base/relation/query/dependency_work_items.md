## 工作项依赖(dependency_work_items) <!-- {docsify-ignore-all} -->



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

* `全部数据`



### 查询条件

((`exists(select 1 from work_item t2 where t1.principal_id = t2.id and t1.principal_id = #{ctx.webcontext.principal_id} and t2.is_deleted = 0)` OR `exists(select 1 from work_item t2 where t1.target_id= t2.id and t1.target_id= #{ctx.webcontext.principal_id} and t2.is_deleted = 0)`) AND `PRINCIPAL_TYPE(关联主体类型)` EQ `'dependency'`)





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

WHERE ( ( exists(select 1 from work_item t2 where t1.principal_id = t2.id and t1.principal_id = #{ctx.webcontext.principal_id} and t2.is_deleted = 0)  OR  exists(select 1 from work_item t2 where t1.target_id= t2.id and t1.target_id= #{ctx.webcontext.principal_id} and t2.is_deleted = 0) )  AND  t1.`PRINCIPAL_TYPE` = 'dependency' )
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