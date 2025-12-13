## 选择变更工作项类型(choose_target_type) <!-- {docsify-ignore-all} -->



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

> [!ATTENTION|label:存在长文本属性]
>
> `ICON(图标)`



### 查询条件

(`exists(select 1 from `project` t2 where t2.`TYPE` = t1.`PROJECT_TYPE` and t2.`ID` = #{ctx.webcontext.project_id} and t1.`ID` <> #{ctx.webcontext.origin_type})`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CODE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`GROUP`,
t1.`ICON`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`ORGIN_STATE`,
t1.`PROJECT_ID`,
t1.`PROJECT_TYPE`,
t1.`SEQUENCE`,
t1.`SUB_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `WORK_ITEM_TYPE` t1 

WHERE ( exists(select 1 from `project` t2 where t2.`TYPE` = t1.`PROJECT_TYPE` and t2.`ID` = #{ctx.webcontext.project_id} and t1.`ID` <> #{ctx.webcontext.origin_type}) )
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