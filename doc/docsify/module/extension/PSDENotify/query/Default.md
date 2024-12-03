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
t1.`BEGINPSDEFID`,
t1.`BEGINPSDEFNAME`,
t1.`CHECKTIMER`,
t1.`CODENAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUSTOMCOND`,
t1.`ENDPSDEFID`,
t1.`ENDPSDEFNAME`,
t1.`MSGTYPE`,
t1.`NOTIFYEND`,
t1.`NOTIFYSTART`,
t1.`NOTIFYSUBTYPE`,
t1.`NOTIFYTAG`,
t1.`NOTIFYTAG2`,
t1.`PSDEDSID`,
t1.`PSDEDSNAME`,
t1.`PSDEID`,
t1.`PSDENAME`,
t1.`PSDENOTIFYID`,
t1.`PSDENOTIFYNAME`,
t1.`PSSYSMSGQUEUEID`,
t1.`PSSYSMSGQUEUENAME`,
t1.`PSSYSMSGTEMPLID`,
t1.`PSSYSMSGTEMPLNAME`,
t1.`PSSYSSFPLUGINID`,
t1.`PSSYSSFPLUGINNAME`,
t1.`TASKMODE`,
t1.`TIMERMODE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
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