## 当前空间(current) <!-- {docsify-ignore-all} -->



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

(`ID(标识)` EQ `网页请求上下文.space`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t11.`CATEGORIES`,
t1.`CATEGORY_ID`,
t11.`NAME` AS `CATEGORY_NAME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_SHARED`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`VISIBILITY`
FROM `SPACE` t1 
LEFT JOIN `CATEGORY` t11 ON t1.`CATEGORY_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.webcontext.space !=null ">  t1.`ID` = #{ctx.webcontext.space}  </when><otherwise>1=1</otherwise></choose> )
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