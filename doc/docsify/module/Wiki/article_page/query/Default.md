## 数据查询(Default) <!-- {docsify-ignore-all} -->



<p class="panel-title"><b>查看SQL语句</b></p>
<br>

<el-row>
&nbsp;<el-tag @click="MYSQL5 = true">MYSQL5</el-tag>
</el-row>

<br>
<p class="panel-title"><b>是否默认查询</b></p>

* `是`

<p class="panel-title"><b>是否权限使用</b></p>

* `否`

<p class="panel-title"><b>是否自定义SQL</b></p>

* `否`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`CATEGORIES`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`CUR_VERSION_ID`,
t1.`CUR_VERSION_NAME`,
t1.`FORMAT_TYPE`,
t1.`ID`,
t1.`IDENTIFIER`,
t1.`IS_ARCHIVED`,
t1.`IS_DELETED`,
(select count(1) from favorite where create_man=#{ctx.sessioncontext.srfpersonid} and OWNER_ID=t1.`ID` ) AS `IS_FAVORITE`,
t1.`IS_LEAF`,
t1.`IS_PUBLISHED`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISHED`,
t1.`PUBLISH_MAN`,
t1.`PUBLISH_NAME`,
t1.`PUBLISH_TIME`,
t1.`SEQUENCE`,
concat(t11.`IDENTIFIER`,'-',t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`,
t1.`SPACE_ID`,
t11.`IDENTIFIER` AS `SPACE_IDENTIFIER`,
t11.`NAME` AS `SPACE_NAME`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 
LEFT JOIN `SPACE` t11 ON t1.`SPACE_ID` = t11.`ID` 


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