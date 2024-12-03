## 当前项目下的发布阶段(cur_project) <!-- {docsify-ignore-all} -->



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




### 查询连接
* **RELEASE相关N:1（INNER JOIN）DER1N_STAGE_RELEASE_RELEASE_ID**<br>
连接关系：[DER1N_STAGE_RELEASE_RELEASE_ID](der/DER1N_STAGE_RELEASE_RELEASE_ID)<br>
连接实体：[项目发布](module/ProjMgmt/release)<br>
连接条件：(`PROJECT_ID(项目标识)` EQ `网页请求上下文.project`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`COLOR`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_CURRENT`,
t1.`NAME`,
t1.`OPERATED_TIME`,
t1.`PID`,
t11.`NAME` AS `PNAME`,
t11.`COLOR` AS `P_COLOR`,
t11.`SEQUENCE` AS `P_SEQUENCE`,
t11.`TYPE` AS `P_TYPE`,
t1.`RELEASE_ID`,
t1.`SEQUENCE`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `STAGE` t1 
LEFT JOIN `STAGE` t11 ON t1.`PID` = t11.`ID` 
LEFT JOIN `PROJECT_RELEASE` t21 ON t1.`RELEASE_ID` = t21.`ID` 

WHERE ( t21.`PROJECT_ID` = #{ctx.webcontext.project} )
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