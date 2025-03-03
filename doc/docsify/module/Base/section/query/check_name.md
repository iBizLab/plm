## 检查名称是否重复(check_name) <!-- {docsify-ignore-all} -->



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

(`ID(标识)` NOTEQ `数据上下文.id` AND `NAME(名称)` EQ `数据上下文.name` AND `OWNER_ID(所属数据标识)` EQ `数据上下文.owner_id` AND `OWNER_TYPE(所属数据对象)` EQ `数据上下文.owner_type` AND `OWNER_SUBTYPE(所属对象子类型)` EQ `数据上下文.owner_subtype`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `SECTION` t1 

WHERE ( t1.`ID` <> #{ctx.datacontext.id}  AND  t1.`NAME` = #{ctx.datacontext.name}  AND  t1.`OWNER_ID` = #{ctx.datacontext.owner_id}  AND  t1.`OWNER_TYPE` = #{ctx.datacontext.owner_type}  AND  t1.`OWNER_SUBTYPE` = #{ctx.datacontext.owner_subtype} )
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