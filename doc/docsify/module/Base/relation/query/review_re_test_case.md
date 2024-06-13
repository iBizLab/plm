## 评审关联测试用例(review_re_test_case) <!-- {docsify-ignore-all} -->



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

(`PRINCIPAL_TYPE(关联主体类型)` EQ `'test_case'` AND `TARGET_TYPE(关联目标类型)` EQ `'idea'` AND `PRINCIPAL_ID(关联主体标识)` EQ `网页请求上下文.principal_id` AND `EXISTS (
        SELECT 1
        FROM `test_case` t2
        WHERE t1.`TARGET_ID` = t2.`ID`
        AND t2.`is_deleted` = 0
    )`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_TYPE`,
t1.`RELATION_TYPE`,
t1.`TARGET_ID`,
t1.`TARGET_TYPE`,
t1.`TARGET_VERSION_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `RELATION` t1 

WHERE ( t1.`PRINCIPAL_TYPE` = 'test_case'  AND  t1.`TARGET_TYPE` = 'idea'  AND  t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  EXISTS (
        SELECT 1
        FROM `test_case` t2
        WHERE t1.`TARGET_ID` = t2.`ID`
        AND t2.`is_deleted` = 0
    ) )
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