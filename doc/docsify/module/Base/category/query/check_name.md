## 检查名称是否重复(check_name) <!-- {docsify-ignore-all} -->



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

(`ID(标识)` NOTEQ `数据上下文.id` AND `NAME(名称)` EQ `数据上下文.name` AND `OWNER_ID(所属数据标识)` EQ `数据上下文.owner_id` AND `OWNER_TYPE(所属数据对象)` EQ `数据上下文.owner_type` AND `OWNER_SUBTYPE(所属对象子类型)` EQ `数据上下文.owner_subtype`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IS_LEAF`,
t1.`IS_LEAF2`,
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
t1.`UPDATE_TIME`
FROM `CATEGORY` t1 
LEFT JOIN `SECTION` t11 ON t1.`SECTION_ID` = t11.`ID` 

WHERE ( <choose><when test="ctx.datacontext.id !=null ">  t1.`ID` <> #{ctx.datacontext.id}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.datacontext.name !=null ">  t1.`NAME` = #{ctx.datacontext.name}  </when><otherwise>1=1</otherwise></choose>  AND  <choose><when test="ctx.datacontext.owner_id !=null ">  t1.`OWNER_ID` = #{ctx.datacontext.owner_id}  </when><otherwise>1=1</otherwise></choose>  AND  t1.`OWNER_TYPE` = #{ctx.datacontext.owner_type}  AND  <choose><when test="ctx.datacontext.owner_subtype !=null ">  t1.`OWNER_SUBTYPE` = #{ctx.datacontext.owner_subtype}  </when><otherwise>1=1</otherwise></choose> )
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