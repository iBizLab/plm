## 测试库下流程准则(under_library) <!-- {docsify-ignore-all} -->



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

* `指定属性组`
*  **属性组：**[主属性组](#)
  * `REVIEW_ACTION_RULE(评审后置动作)`
  * `REVIEW_RULE(评审规则)`
  * `REVIEW_STAGE(评审阶段)`
  * `SUBJECT_TYPE(主题类型)`
  * `OBJECT_TYPE(对象类型)`
  * `SCOPE_ID(所属主体标识)`
  * `UPDATE_MAN(更新人)`
  * `ID(标识)`
  * `UPDATE_TIME(更新时间)`
  * `NAME(名称)`
  * `CREATE_TIME(建立时间)`
  * `CREATE_MAN(建立人)`
  * `IS_ENABLED(是否启用)`



### 查询条件

(`SCOPE_ID(所属主体标识)` EQ `网页请求上下文.library`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_ENABLED`,
t1.`NAME`,
t1.`OBJECT_TYPE`,
t1.`REVIEW_ACTION_RULE`,
t1.`REVIEW_RULE`,
t1.`REVIEW_STAGE`,
t1.`SCOPE_ID`,
t1.`SUBJECT_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `GUIDELINE` t1 

WHERE ( t1.`SCOPE_ID` = #{ctx.webcontext.library} )
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