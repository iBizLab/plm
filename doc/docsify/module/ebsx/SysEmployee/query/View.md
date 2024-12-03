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
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`BIRTHDAY`,
t1.`CERTCODE`,
t1.`CREATEDATE`,
t1.`DDUNIONID`,
t1.`DDUSERID`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`FONTSIZE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`LOGINNAME`,
t1.`MDEPTID`,
t1.`MDEPTNAME`,
t1.`MEMO`,
t1.`MSGTYPE`,
t1.`NICKNAME`,
t1.`ORGID`,
t1.`ORGNAME`,
t1.`PASSWORD`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`POSTID`,
t1.`POSTNAME`,
t1.`RESERVER`,
t1.`RESERVER10`,
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
t1.`RESERVER9`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`STATE`,
t1.`SUPERUSER`,
t1.`THEME`,
t1.`UAAUSERID`,
t1.`UPDATEDATE`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`,
t1.`WXWORKUNIONID`,
t1.`WXWORKUSERID`
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