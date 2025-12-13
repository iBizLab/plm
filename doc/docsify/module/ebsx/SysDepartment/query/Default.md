## 数据查询(Default) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
</el-row>

<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `是`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`DDDEPTID`,
t1.`DEPTCODE`,
t1.`DEPTFULLNAME`,
t1.`DEPTID`,
t1.`DEPTLEADER`,
t1.`DEPTLEADERID`,
t1.`DEPTLEVEL`,
t1.`DEPTNAME`,
t1.`DOMAINS`,
t1.`ENABLE`,
t1.`ISVALID`,
t1.`LEADERID`,
t1.`LEADERNAME`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PDEPTID`,
t1.`PDEPTNAME`,
t1.`RESERVER`,
t1.`RESERVER11`,
t1.`RESERVER12`,
t1.`RESERVER13`,
t1.`RESERVER14`,
t1.`RESERVER15`,
t1.`RESERVER16`,
t1.`RESERVER17`,
t1.`RESERVER18`,
t1.`RESERVER19`,
t1.`RESERVER2`,
t1.`RESERVER20`,
t1.`RESERVER3`,
t1.`RESERVER4`,
t1.`RESERVER5`,
t1.`RESERVER6`,
t1.`RESERVER7`,
t1.`RESERVER8`,
t1.`SHORTNAME`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`WXWORKDEPTID`
FROM `` t1 


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