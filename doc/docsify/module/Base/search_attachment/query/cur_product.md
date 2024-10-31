## 当前产品下的附件(cur_product) <!-- {docsify-ignore-all} -->



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

(`(exists(select 1 from idea t2 where t1.owner_id = t2.id and t2.product_id = #{ctx.webcontext.product_id})
or exists(select 1 from ticket t3 where t1.owner_id = t3.id and t3.product_id = #{ctx.webcontext.product_id}))` AND `OWNER_TYPE(所属数据对象)` IN `'TICKET,IDEA'` AND `FILE_ID(文件标识)` ISNOTNULL)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 

WHERE ( (exists(select 1 from idea t2 where t1.owner_id = t2.id and t2.product_id = #{ctx.webcontext.product_id})
or exists(select 1 from ticket t3 where t1.owner_id = t3.id and t3.product_id = #{ctx.webcontext.product_id}))  AND  t1.`OWNER_TYPE` IN ('TICKET','IDEA')  AND  t1.`FILE_ID` IS NOT NULL )
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