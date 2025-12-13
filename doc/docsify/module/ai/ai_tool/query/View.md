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

> [!ATTENTION|label:存在长文本属性]
>
> `ACCESS_KEY(访问密钥)`
>
> `BEARER_TOKEN(Bearer令牌)`
>
> `CLIENT_SECRET(客户端密钥)`
>
> `INPUT_SCHEMA(输入参数 Schema)`
>
> `SECRET_KEY(安全密钥)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ACCESS_KEY`,
t1.`API_AUTH_TYPE`,
t1.`API_HEADERS`,
t1.`API_KEY`,
t1.`API_METHOD`,
t1.`API_URL`,
t1.`BEARER_TOKEN`,
t1.`CLIENT_ID`,
t1.`CLIENT_SECRET`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`INPUT_SCHEMA`,
t1.`NAME`,
t1.`SECRET_KEY`,
t1.`TIMEOUT`,
t1.`TOKEN_URL`,
t1.`TOOL_TAG`,
t1.`TOOL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `AI_TOOL` t1 


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