## 选择共享页面(choose_shared) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[名称](#)
  * `PUBLISH_NAME(发布主题)`
  * `NAME(主题)`
  * `SPACE_ID(空间标识)`
  * `ID(标识)`
  * `PARENT_ID(父页面标识)`
  * `ICON(图标)`



### 查询条件

(`IS_DELETED(是否已删除)` EQ `'0'` AND `IS_PUBLISHED(是否发布)` EQ `'1'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`ICON`,
t1.`ID`,
t1.`NAME`,
t1.`PARENT_ID`,
t1.`PUBLISH_NAME`,
t1.`SPACE_ID`
FROM `PAGE` t1 

WHERE ( t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1 )
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