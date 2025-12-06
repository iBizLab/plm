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
t1.`AIAGENTTAG`,
t1.`CODENAME`,
t1.`CONTENT`,
t1.`DSTPSDLPARAMID`,
t1.`DSTPSDLPARAMNAME`,
t1.`ISPSDLPARAMID`,
t1.`ISPSDLPARAMNAME`,
t1.`LOGICNODESUBTYPE`,
t1.`LOGICNODETYPE`,
t1.`ORDERVALUE`,
t1.`OSPSDLPARAMID`,
t1.`OSPSDLPARAMNAME`,
t1.`PARALLELOUTPUT`,
t1.`PARAM1`,
t1.`PARAM10`,
t1.`PARAM11`,
t1.`PARAM12`,
t1.`PARAM13`,
t1.`PARAM4`,
t1.`PARAM7`,
t1.`PARAM8`,
t1.`PARAM9`,
t1.`PROJECT_ID`,
t1.`PROJECT_NAME`,
t1.`PSDELOGICID`,
t1.`PSDELOGICNODEID`,
t1.`PSDELOGICNODENAME`,
t1.`PSSYSAICHATAGENTID`,
t1.`PSSYSAIFACTORYID`,
t1.`PSSYSMSGTEMPLID`,
t1.`RETPSDLPARAMID`,
t1.`RETPSDLPARAMNAME`,
t1.`SRCPSDLPARAMID`,
t1.`SRCPSDLPARAMNAME`,
t1.`TITLE`,
t1.`WORK_ITEM_TYPE_ID`,
t1.`WORK_ITEM_TYPE_NAME`
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