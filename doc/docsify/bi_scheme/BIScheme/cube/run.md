# 执行用例(run)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [执行用例(RUN)](module/TestMgmt/run)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/TestMgmt/run/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|优先级|w_priority|优先级(PRIORITY)||
|执行人|w_executor_id|执行人标识(EXECUTOR_ID)||
|执行时间|w_executed_at|执行时间(EXECUTED_AT)||
|执行结果|w_status|执行结果(STATUS)||
|测试库|w_library_id|测试库标识(LIBRARY_ID)||
|测试计划|w_plan_id|bi测试计划名称(BI_PLAN_NAME)||

### 指标
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col500   |  备注col500  |
| --------  |------------| -----   |  --------|
|执行用例数量|run_number|countif(library_is_deleted = 0)|统计测试计划下的执行用例数量。<br>|
|测试执行率|test_run_rate|countif(relation_total_history > 0 and library_is_deleted = 0) / if(countif(library_is_deleted = 0) = 0, 1, countif(library_is_deleted = 0))|统计测试计划下被执行过的用例占比，反映测试团队的测试进度。<br>|
|测试执行通过率|test_run_pass_rate|countif(status = 10 and library_is_deleted = 0) / if(countif(library_is_deleted = 0) = 0, 1, countif(library_is_deleted = 0))|统计测试计划下，执行通过的用例占比，反映测试团队的执行情况。	<br>|
|缺陷数|bug_number|sumif(relation_total_bug, library_is_deleted = 0)|统计关联了执行用例的缺陷数。<br>|

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