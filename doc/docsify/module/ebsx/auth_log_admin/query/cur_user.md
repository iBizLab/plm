## 当前用户(cur_user) <!-- {docsify-ignore-all} -->



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

(`USERID(用户全局标识)` EQ `用户上下文.srfpersonid`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`AUTHAGENT`,
t1.`AUTHCODE`,
t1.`AUTHTIME`,
t1.`DOMAINS`,
t1.`IPADDR`,
t1.`LOGID`,
t1.`MACADDR`,
t1.`PERSONNAME`,
t1.`USERAGENT`,
t1.`USERID`,
t1.`USERNAME`
FROM `IBZAUTHLOG` t1 

WHERE ( t1.`USERID` = #{ctx.sessioncontext.srfpersonid} )
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