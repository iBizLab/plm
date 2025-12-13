## 源节点相关连线(CurItemBySrcNode) <!-- {docsify-ignore-all} -->



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

(`SRCPSDELOGICNODEID(源节点)` EQ `数据上下文.PSDELOGICNODE`)





<el-dialog v-model="MYSQL5" title="MYSQL5">

```sql
SELECT
t1.`DSTPSDELOGICNODEID`,
t1.`PSDELOGICID`,
t1.`PSDELOGICLINKID`,
t1.`PSDELOGICLINKNAME`,
t1.`SRCPSDELOGICNODEID`
FROM `` t1 

WHERE ( t1.`SRCPSDELOGICNODEID` = #{ctx.datacontext.psdelogicnode} )
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