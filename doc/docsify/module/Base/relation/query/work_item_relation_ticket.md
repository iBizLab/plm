## 工作项关联工单(work_item_relation_ticket) <!-- {docsify-ignore-all} -->



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

(`PRINCIPAL_ID(关联主体标识)` EQ `网页请求上下文.principal_id` AND `PRINCIPAL_TYPE(关联主体类型)` EQ `'work_item'` AND `TARGET_TYPE(关联目标类型)` EQ `'ticket'`)



### 查询连接
* **TICKET相关N:1（INNER JOIN）DERCUSTOM_RELATION_TARGET_TICKET**<br>
连接关系：[DERCUSTOM_RELATION_TARGET_TICKET](der/DERCUSTOM_RELATION_TARGET_TICKET)<br>
连接实体：[工单](module/ProdMgmt/ticket)<br>
连接条件：(`IS_DELETED(是否已删除)` EQ `'0'`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`LEVEL`,
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
LEFT JOIN `TICKET` t11 ON t1.`TARGET_ID` = t11.`ID` 


WHERE ( t11.`IS_DELETED` = 0 ) AND ( t1.`PRINCIPAL_ID` = #{ctx.webcontext.principal_id}  AND  t1.`PRINCIPAL_TYPE` = 'work_item'  AND  t1.`TARGET_TYPE` = 'ticket' )
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