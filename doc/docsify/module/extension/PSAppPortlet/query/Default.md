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
t1.`CODENAME`,
t1.`DYNAMODELFLAG`,
t1.`MEMO`,
t1.`PORTLETTYPE`,
t1.`PSAPPPORTLETID`,
t1.`PSAPPPORTLETNAME`,
t1.`PSDECHARTID`,
t1.`PSDECHARTNAME`,
t1.`PSDEDATAVIEWID`,
t1.`PSDEDATAVIEWNAME`,
t1.`PSDEFORMID`,
t1.`PSDEFORMNAME`,
t1.`PSDEID`,
t1.`PSDELISTID`,
t1.`PSDELISTNAME`,
t1.`PSDENAME`,
t1.`PSDEREPORTID`,
t1.`PSDEREPORTNAME`,
t1.`PSDETOOLBARID`,
t1.`PSDETOOLBARNAME`,
t1.`PSDEUAGROUPID`,
t1.`PSDEUAGROUPNAME`,
t1.`PSDEVIEWID`,
t1.`PSDEVIEWNAME`,
t1.`PSSYSAPPID`,
t1.`PSSYSAPPNAME`,
t1.`PSSYSCALENDARID`,
t1.`PSSYSCALENDARNAME`,
t1.`PSSYSMAPVIEWID`,
t1.`PSSYSMAPVIEWNAME`,
t1.`PSSYSPORTLETCATID`,
t1.`PSSYSPORTLETCATNAME`,
t1.`SHOWTITLEBAR`,
t1.`VALIDFLAG`
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