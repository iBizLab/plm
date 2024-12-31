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
t1.`AVATARURL`,
t1.`CATEGORY`,
t1.`CHANGELOG`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CURRENTVERSION`,
t1.`FULLNAME`,
t1.`FULLPATH`,
t1.`FUNCSN`,
t1.`FUNCSTATE`,
t1.`FUNCTAG`,
t1.`FUNCTAG2`,
t1.`FUNCTYPE`,
t1.`FUNCURL`,
t1.`HTTPURLTOREPO`,
t1.`INFO`,
t1.`MEMO`,
t1.`ORDERVALUE`,
t1.`PATH`,
t1.`PSCOREPRDFUNCID`,
t1.`PSCOREPRDFUNCNAME`,
t1.`PSCOREPRDID`,
t1.`PSCOREPRDNAME`,
t1.`SETTINGS`,
t1.`SETTINGURL`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`VERS`
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