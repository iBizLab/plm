## 最近访问页面(recent_page) <!-- {docsify-ignore-all} -->



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

(`OWNER_TYPE(所属数据对象)` EQ `'space'` AND `OWNER_SUBTYPE(所属对象子类型)` EQ `'page'` AND `UPDATE_MAN(更新人)` EQ `用户上下文.srfpersonid` AND `exists(SELECT 1 FROM page t3 
inner join space t4 on t4.id = t3.space_id and t4.is_deleted = 0
where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0)`)





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

WHERE ( t1.`OWNER_TYPE` = 'space'  AND  t1.`OWNER_SUBTYPE` = 'page'  AND  t1.`UPDATE_MAN` = #{ctx.sessioncontext.srfpersonid}  AND  exists(SELECT 1 FROM page t3 
inner join space t4 on t4.id = t3.space_id and t4.is_deleted = 0
where t3.id = t1.owner_id and 
 t3.is_archived = 0 and t3.is_deleted =0) )
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