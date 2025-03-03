# 工时(workload)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [工时(WORKLOAD)](module/Base/workload)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/Base/workload/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|工作日期|w_register_date|工作日期(REGISTER_DATE)||
|工作类别|w_type_id|类别(TYPE_ID)||
|登记人|w_register_man|建立人(CREATE_MAN)||

### 指标
##### 常规指标
|    名称col200   | 代码名col150 |  聚合模式col150  | 属性col350      |  备注col500  |
| --------  |------------| -----   |  --------|--------|
|登记工时|z_register_workload|合计|时长(DURATION)|说明：统计登记工时的总量<br>规则：求和（登记工时）|
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col501   |  备注col500  |
| --------  |------------| -----   |  --------|
|工时类别占比|workload_type_ratio|countif(type_id in (params(type_id, ('1')))) / if(count(id) = 0, 1, count(id))|统计登记工时的所属类别情况。	|
|登记次数|register_number|count(id)|统计登记工时的操作次数。|

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {
      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>