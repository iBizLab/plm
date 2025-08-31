## 附件(attachments) <!-- {docsify-ignore-all} -->



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
* **WORK_ITEM相关N:1（INNER JOIN）DERCUSTOM_WORK_ITEM_ATTACHMENT**<br>
连接关系：[DERCUSTOM_WORK_ITEM_ATTACHMENT](der/DERCUSTOM_WORK_ITEM_ATTACHMENT)<br>
连接实体：[工作项](module/ProjMgmt/work_item)<br>




<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`FILE_ID`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PARENT_VERSION_ID`,
t1.`TITLE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `ATTACHMENT` t1 
LEFT JOIN `WORK_ITEM` t11 ON t1.`OWNER_ID` = t11.`ID` 
 AND t1.`OWNER_TYPE` = 'ATTACHMENT' AND t1.`OWNER_SUBTYPE` IS NULL


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