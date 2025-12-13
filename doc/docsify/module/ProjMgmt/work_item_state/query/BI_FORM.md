## BI报表(BI_FORM) <!-- {docsify-ignore-all} -->

类型为已完成或者已关闭

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

((`TYPE(状态类型)` EQ `'closed'` OR `TYPE(状态类型)` EQ `'completed'`))





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`SEQUENCE`,
t1.`STYLE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`WORK_ITEM_TYPE_ID`
FROM `WORK_ITEM_STATE` t1 

WHERE ( ( t1.`TYPE` = 'closed'  OR  t1.`TYPE` = 'completed' ) )
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