## 共享自读权限(shared_reader) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[共享只读](#)
  * `ID(标识)`
  * `IS_SHARED(是否开启共享)`
  * `READ_SHARED(共享只读能力)`



### 查询条件

((`IS_SHARED(是否开启共享)` EQ `'1'` OR `READ_SHARED(共享只读能力)` EQ `'1'`) AND `IS_PUBLISHED(是否发布)` EQ `'1'` AND `IS_DELETED(是否已删除)` EQ `'0'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ID`,
t1.`IS_SHARED`,
CASE WHEN EXISTS (SELECT 1 FROM ( select id from page where is_shared = '1' ) AS ids WHERE FIND_IN_SET(ids.id, REPLACE(t1.`CATEGORIES`, '/', ','))) THEN 1 ELSE 0 END AS `READ_SHARED`
FROM `PAGE` t1 

WHERE ( ( t1.`IS_SHARED` = '1'  OR  CASE WHEN EXISTS (SELECT 1 FROM ( select id from page where is_shared = '1' ) AS ids WHERE FIND_IN_SET(ids.id, REPLACE(t1.`CATEGORIES`, '/', ','))) THEN 1 ELSE 0 END = '1' )  AND  t1.`IS_PUBLISHED` = 1  AND  t1.`IS_DELETED` = 0 )
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