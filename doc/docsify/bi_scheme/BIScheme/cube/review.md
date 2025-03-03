# 测试评审(review)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [评审(REVIEW)](module/TestMgmt/review)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/TestMgmt/review/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|创建人|w_create_man|建立人(CREATE_MAN)||
|创建时间|w_create_time|建立时间(CREATE_TIME)||
|完成时间|w_completed_at|完成时间(COMPLETED_AT)||
|提交人|w_submitted_id|提交人标识(SUBMITTER_ID)||
|提交时间|w_submitted_at|提交时间(SUBMITTED_AT)||
|测试库|w_library_id|测试库标识(LIBRARY_ID)||
|状态|w_state|评审状态(STATE)||

### 指标
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col501   |  备注col500  |
| --------  |------------| -----   |  --------|
|评审完成周期|review_completed_cycle|sumif(dateDiff(COMPLETED_AT, SUBMITTED_AT, 'day'), state=60 and library_is_deleted = 0) / if(countif(library_is_deleted = 0) = 0, 1, countif(library_is_deleted = 0))|统计评审计划下从开始到评审完成的耗时，反映测试团队的评审效率。|
|评审数量|reviews|countif(library_is_deleted = 0)|统计不同维度下用例评审的数量。|

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