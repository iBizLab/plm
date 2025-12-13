## 排重用户(distinct_userid) <!-- {docsify-ignore-all} -->



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






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`AUTHCODE`,
t1.`AUTHTIME`,
t1.`CITY`,
t1.`COUNTRY`,
t1.`COUNTY`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IP`,
t1.`ISP`,
t1.`LOGIN_METHOD`,
t1.`NAME`,
t1.`PROVINCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_AGENT`,
t1.`USER_ID`,
t1.`USER_NAME`
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