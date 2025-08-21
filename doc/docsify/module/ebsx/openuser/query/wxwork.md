## 企业微信(wxwork) <!-- {docsify-ignore-all} -->



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

(`OPEN_TYPE(第三方用户类型)` EQ `'wxwork'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEPTS`,
t1.`ISBINDING`,
t1.`MOBILE`,
t1.`OPENUSERCODE`,
t1.`OPENUSERID`,
t1.`OPENUSERNAME`,
t1.`OPEN_TYPE`,
t1.`ORGID`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERID`
FROM `IBZOPENUSER` t1 

WHERE ( t1.`OPEN_TYPE` = 'wxwork' )
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