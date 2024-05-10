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
t1.`BIZKEY`,
t1.`BIZTYPE`,
t1.`CLOBPARAM01`,
t1.`CLOBPARAM02`,
t1.`CONTENT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CREATEMANNAME`,
t1.`DCSYSTEMID`,
t1.`DCSYSTEMNAME`,
t1.`DUEDATE`,
t1.`ISREAD`,
t1.`LINKURL`,
t1.`ORGID`,
t1.`PARAM01`,
t1.`PARAM02`,
t1.`PARAM03`,
t1.`PARAM04`,
t1.`PARAM05`,
t1.`PARAM06`,
t1.`PARAM07`,
t1.`PARAM08`,
t1.`PARAM09`,
t1.`PROCESSDATE`,
t1.`TITLE`,
t1.`TODOID`,
t1.`TODOSTATE`,
t1.`TODOSUBTYPE`,
t1.`TODOTYPE`,
t1.`TODOURLTYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEMANNAME`,
t1.`USERID`
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