## 实体数据关系界面组（同步）(psmodel_sync) <!-- {docsify-ignore-all} -->

用于定义实体数据关系界面组同步的数据

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






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`APP_TAG`,
t1.`APP_VIEW_TAG`,
t1.`CAPTION`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER_VALUE`,
t1.`OWNER_TYPE`,
t1.`SYSTEM_TAG`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`VALID_FLAG`
FROM `` t1 


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