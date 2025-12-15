## 工作流类别(wf_category) <!-- {docsify-ignore-all} -->



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

(`OWNER_TYPE(所属数据对象)` EQ `'workflow'` AND `IS_DELETED(是否删除)` EQ `'0'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_DELETED`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
t1.`IS_LEAF3`,
case when t1.`IS_LEAF`+t1.`IS_LEAF2`=2 then 1 else 0 end AS `LEAF_FLAG`,
t1.`NAME`,
t1.`OWNER_ID`,
t1.`OWNER_SUBTYPE`,
t1.`OWNER_TYPE`,
t1.`PID`,
t1.`SECTION_ID`,
t11.`NAME` AS `SECTION_NAME`,
t1.`SEQUENCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_TAG`,
t1.`USER_TAG2`,
t1.`WF_VERSION_ID`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( t1.`OWNER_TYPE` = 'workflow'  AND  t1.`IS_DELETED` = 0 )
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