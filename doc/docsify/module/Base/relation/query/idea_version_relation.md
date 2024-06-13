## 版本需求关联数据(idea_version_relation) <!-- {docsify-ignore-all} -->

主实体版本创建时，查询关联principal_type为需求的数据存入version_data

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



### 查询条件

(`PRINCIPAL_TYPE(关联主体类型)` EQ `'idea'` AND (`TARGET_TYPE(关联目标类型)` EQ `'customer'` OR `TARGET_TYPE(关联目标类型)` EQ `'idea'` OR `TARGET_TYPE(关联目标类型)` EQ `'ticket'` OR `TARGET_TYPE(关联目标类型)` EQ `'work_item'` OR `TARGET_TYPE(关联目标类型)` EQ `'test_case'`))





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

WHERE ( t1.`PRINCIPAL_TYPE` = 'idea'  AND  ( t1.`TARGET_TYPE` = 'customer'  OR  t1.`TARGET_TYPE` = 'idea'  OR  t1.`TARGET_TYPE` = 'ticket'  OR  t1.`TARGET_TYPE` = 'work_item'  OR  t1.`TARGET_TYPE` = 'test_case' ) )
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