## 示例图(example_chart) <!-- {docsify-ignore-all} -->



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
*  **属性组：**[示例图](#)
  * `IS_SYSTEM(是否系统类型)`
  * `EXAMPLE_CHART(示例图)`
  * `APPID(应用标识)`
  * `DESC(描述)`
  * `DYNADASHBOARDID(动态数据看板标识)`
  * `TYPE(看板类型)`
  * `MODELID(模型标识)`
  * `SEQUENCES(序号)`
  * `DYNADASHBOARDNAME(名称)`

> [!ATTENTION|label:存在长文本属性]
>
> `EXAMPLE_CHART(示例图)`
>
> `DESC(描述)`



### 查询条件

(`IS_SYSTEM(是否系统类型)` EQ `'1'`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`APPID`,
t1.`DESC`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`EXAMPLE_CHART`,
t1.`IS_SYSTEM`,
t1.`MODELID`,
t1.`SEQUENCES`,
t1.`TYPE`
FROM `DYNADASHBOARD` t1 

WHERE ( t1.`IS_SYSTEM` = 1 )
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