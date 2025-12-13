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
t1.`AGGTYPE`,
t1.`BIREPITEMPARAMS`,
t1.`BIREPITEMTAG`,
t1.`BIREPITEMTAG2`,
t1.`BIREPITEMTYPE`,
t1.`DATA`,
t1.`PLACEMENT`,
t1.`PLACETYPE`,
t1.`PSSYSBICUBEDIMENSIONID`,
t1.`PSSYSBICUBEDIMENSIONNAME`,
t1.`PSSYSBICUBEID`,
t1.`PSSYSBICUBEMEASUREID`,
t1.`PSSYSBICUBEMEASURENAME`,
t1.`PSSYSBICUBENAME`,
t1.`PSSYSBIREPORTID`,
t1.`PSSYSBIREPORTITEMID`,
t1.`PSSYSBIREPORTITEMNAME`,
t1.`REFTYPE`,
t1.`STDDATATYPE`,
t1.`VALIDFLAG`,
t1.`VALUEFORMAT`
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