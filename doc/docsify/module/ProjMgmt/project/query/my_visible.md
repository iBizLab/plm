## 我的可见项目(my_visible) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[扩展属性组](#)
  * `VISIBILITY(可见范围)`
  * `STATE(项目状态)`
  * `START_AT(开始时间)`
  * `END_AT(结束时间)`
  * `COLOR(主题色)`
  * `TYPE(类型)`
  * `IDENTIFIER(项目标识)`
  * `IS_ARCHIVED(是否已归档)`
  * `DESCRIPTION(描述)`
  * `IS_DELETED(是否已删除)`
  * `IS_FAVORITE(是否星标)`
  * `SCOPE_TYPE(所属)`
  * `SCOPE_ID(所属对象)`
  * `IS_LOCAL_CONFIGURE(是否本地配置)`
  * `MEMBERS(成员)`
  * `ASSIGNEE_NAME(负责人)`
  * `ASSIGNEE_ID(负责人标识)`
  * `COMPLETED_WORK_ITEMS(已完成工作项数)`
  * `ALL_WORK_ITEMS(全部工作项数)`
  * `SCHEDULE(进度)`
  * `ACTUAL_START_AT(实际开始时间)`
  * `ACTUAL_END_AT(实际结束时间)`
  * `EXPECTED_TIME(预计工时)`
  * `CONSUME_TIME(消耗工时)`
  * `STATE_TYPE(状态类型)`
  * `CREATE_MAN(建立人)`
  * `CREATE_TIME(建立时间)`
  * `ID(标识)`
  * `NAME(项目名称)`
  * `UPDATE_MAN(更新人)`
  * `UPDATE_TIME(更新时间)`



### 查询条件

(`IS_DELETED(是否已删除)` EQ `'0'` AND `IS_ARCHIVED(是否已归档)` EQ `'0'` AND (`VISIBILITY(可见范围)` EQ `'public'` OR `EXISTS(SELECT * FROM `PROJECT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PROJECT_ID` AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) )`))





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ACTUAL_END_AT`,
t1.`ACTUAL_START_AT`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND PROJECT_ID = t1.`ID`) AS `ALL_WORK_ITEMS`,
t1.`ASSIGNEE_ID`,
t1.`ASSIGNEE_NAME`,
t1.`COLOR`,
(SELECT count(1) FROM work_item WHERE IS_DELETED = '0' AND `STATE` in (select ID from work_item_state where TYPE = 'completed') AND PROJECT_ID = t1.`ID`) AS `COMPLETED_WORK_ITEMS`,
t1.`CONSUME_TIME`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`DESCRIPTION`,
t1.`END_AT`,
t1.`EXPECTED_TIME`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LOCAL_CONFIGURE`,
t1.`NAME`,
t1.`SCOPE_ID`,
t1.`SCOPE_TYPE`,
t1.`START_AT`,
t1.`STATE`,
t11.`TYPE` AS `STATE_TYPE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VISIBILITY`
FROM `PROJECT` t1 
LEFT JOIN `PROJECT_STATE` t11 ON t1.`STATE` = t11.`ID` 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_ARCHIVED` = 0  AND  ( t1.`VISIBILITY` = 'public'  OR  EXISTS(SELECT * FROM `PROJECT_MEMBER` t11 
 WHERE 
 t1.`ID` = t11.`PROJECT_ID` AND  ( t11.`USER_ID` = #{ctx.sessioncontext.srfpersonid} ) ) ) )
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