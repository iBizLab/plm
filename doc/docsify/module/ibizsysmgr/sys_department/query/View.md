## 默认（全部数据）(View) <!-- {docsify-ignore-all} -->



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






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`BUSINESS_CATEGORY`,
t1.`CREATE_TIME`,
t1.`CREATOR`,
t1.`DC`,
t1.`DEPARTMENT_NAME`,
t1.`DEPARTMENT_NUMBER`,
t1.`DESCRIPTION`,
concat_ws(',',t1.`DEPARTMENT_NAME`,t1.`PARENT_NAME`,t1.`ORGANIZATION_NAME`) AS `DN`,
t1.`ENABLED`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`ORGANIZATION_ID`,
t1.`ORGANIZATION_NAME`,
t1.`ORGANIZATION_NUMBER`,
t1.`PARENT_ID`,
t1.`PARENT_NAME`,
case when t1.`PARENT_ID` is null or t1.`PARENT_ID`='' then t1.`ORGANIZATION_ID` else t1.`PARENT_ID` end AS `PARENT_UNIT_ID`,
case when t1.`PARENT_NAME` is null or t1.`PARENT_NAME`='' then t1.`ORGANIZATION_NAME` else t1.`PARENT_NAME` end AS `PARENT_UNIT_NAME`,
t1.`SHORT_NAME`,
t1.`SORT`,
t1.`UPDATER`,
t1.`UPDATE_TIME`
FROM `` t1 

WHERE t1.ENABLED = 1
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