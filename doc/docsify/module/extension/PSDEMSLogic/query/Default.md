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
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNAMODELFLAG`,
t1.`EXTENSION_TAG`,
t1.`EXTENSION_TAG2`,
t1.`EXTENSION_TAG3`,
t1.`EXTENSION_TAG4`,
t1.`LOGICTYPE`,
t1.`PSDEID`,
t1.`PSDELOGICID`,
t1.`PSDELOGICNAME`,
t1.`PSDENAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
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