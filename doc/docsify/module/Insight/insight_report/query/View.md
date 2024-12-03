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

> [!ATTENTION|label:存在长文本属性]
>
> `DESC(描述)`
>
> `TEMPLATE_MODEL(模板模型)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CATEGORIES`,
t1.`CHART_TYPE`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESC`,
t1.`GROUP`,
t1.`ID`,
t1.`IS_SYSTEM`,
t1.`NAME`,
t1.`TEMPLATE_MODEL`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VIEW_ID`,
t11.`NAME` AS `VIEW_NAME`
FROM `INSIGHT_REPORT` t1 
LEFT JOIN `INSIGHT_VIEW` t11 ON t1.`VIEW_ID` = t11.`ID` 


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