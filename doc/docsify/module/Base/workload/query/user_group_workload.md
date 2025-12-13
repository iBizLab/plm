## 团队工时(user_group_workload) <!-- {docsify-ignore-all} -->



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

* `是`

<p class="panel-title"><b>查询列级别</b></p>

* `默认（全部查询列）`

> [!ATTENTION|label:存在长文本属性]
>
> `DESCRIPTION(描述)`






<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
select t2.ID as `principal_id`,
t2.NAME,  
t1.DURATION,
t1.register_date,
t1.ID
from `workload` t1,  `user_group` t2
WHERE exists (select 1 from `member` t3 where t3.USER_ID = t1.CREATE_MAN and t2.id = t3.OWNER_ID  and t3.OWNER_TYPE = 'GROUP')
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