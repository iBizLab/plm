## 基线选择工作项(baseline_choose_work_item) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[基线选择规划工作项](#)
  * `ID(标识)`
  * `WORK_ITEM_TYPE_ID(工作项类型)`
  * `CUR_VERSION_ID(当前版本标识)`
  * `ASSIGNEE_ID(负责人)`
  * `PROJECT_ID(项目)`
  * `PRIORITY(优先级)`
  * `IDENTIFIER(编号)`
  * `TITLE(标题)`
  * `WORK_ITEM_TYPE_NAME(工作项类型)`
  * `STATE(状态)`
  * `ASSIGNEE_NAME(负责人)`



### 查询条件

(`( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )` AND `( <choose><when test="ctx.webcontext.query_attention !=null ">  exists(select 1 from attention t2 where t1.ID = t2.owner_id and t2.user_id =#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )` AND `IS_DELETED(是否已删除)` EQ `'0'`)



### 查询连接
* **RELATION不存在1:N（NOT EXISTS (SELECT)）DERCUSTOM_RELATION_TARGET_WORK_ITEM**<br>
连接关系：[DERCUSTOM_RELATION_TARGET_WORK_ITEM](der/DERCUSTOM_RELATION_TARGET_WORK_ITEM)<br>
连接实体：[工作项](module/ProjMgmt/work_item)<br>
连接条件：(`PRINCIPAL_ID(关联主体标识)` EQ `网页请求上下文.baseline` AND `TARGET_TYPE(关联目标类型)` EQ `'work_item'` AND `PRINCIPAL_TYPE(关联主体类型)` EQ `'baseline'`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`CUR_VERSION_ID`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`PRIORITY`,
t1.`PROJECT_ID`,
t1.`STATE`,
t1.`TITLE`,
t1.`WORK_ITEM_TYPE_ID`,
t11.`NAME` AS `WORK_ITEM_TYPE_NAME`
FROM `WORK_ITEM` t1 
LEFT JOIN `WORK_ITEM_TYPE` t11 ON t1.`WORK_ITEM_TYPE_ID` = t11.`ID` 

WHERE NOT(EXISTS(SELECT * FROM `RELATION` t21 
 WHERE 
 t1.`ID` = t21.`TARGET_ID`  AND  ( t21.`PRINCIPAL_ID` = #{ctx.webcontext.baseline}  AND  t21.`TARGET_TYPE` = 'work_item'  AND  t21.`PRINCIPAL_TYPE` = 'baseline' ) )) AND ( ( <choose><when test="ctx.webcontext.query_recent !=null ">  exists(select 1 from recent t2 where t1.ID = t2.owner_id and t2.create_man=#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  ( <choose><when test="ctx.webcontext.query_attention !=null ">  exists(select 1 from attention t2 where t1.ID = t2.owner_id and t2.user_id =#{ctx.sessioncontext.srfpersonid} )</when><otherwise>1=1</otherwise></choose> )  AND  t1.`IS_DELETED` = 0 )
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