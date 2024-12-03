## 最近浏览当前项目工作项(recent_curproject_work_item) <!-- {docsify-ignore-all} -->



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

(`OWNER_TYPE(所属数据对象)` EQ `'project'` AND `OWNER_SUBTYPE(所属对象子类型)` EQ `'work_item'` AND `CREATE_MAN(建立人)` EQ `用户上下文.srfpersonid` AND `OWNER_ID(所属数据标识)` NOTEQ `网页请求上下文.principal_id` AND `exists(select 1 from work_item t2 where t1.owner_id = t2.id and t2.project_id = #{ctx.webcontext.project} and t2.is_deleted = 0 and (t2.pid <> #{ctx.webcontext.principal_id} or t2.pid is null) )`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

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