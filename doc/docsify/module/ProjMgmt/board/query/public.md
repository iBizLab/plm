## 公开(public) <!-- {docsify-ignore-all} -->



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
* **PROJECT相关N:1（INNER JOIN）DER1N_BOARD_PROJECT_PROJECT_ID**<br>
连接关系：[DER1N_BOARD_PROJECT_PROJECT_ID](der/DER1N_BOARD_PROJECT_PROJECT_ID)<br>
连接实体：[项目](module/ProjMgmt/project)<br>
连接条件：(`VISIBILITY(可见范围)` EQ `'public'`)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`PROJECT_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `BOARD` t1 
LEFT JOIN `PROJECT` t11 ON t1.`PROJECT_ID` = t11.`ID` 

WHERE ( t11.`VISIBILITY` = 'public' )
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