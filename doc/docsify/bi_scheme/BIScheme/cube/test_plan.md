# 测试计划(test_plan)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/TestMgmt/test_plan/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|关联迭代|w_sprint_id|关联迭代(SPRINT_ID)||
|关联项目|w_project_id|关联项目(PROJECT_ID)||
|创建人|w_create_man|建立人(CREATE_MAN)||
|创建时间|w_create_time|建立时间(CREATE_TIME)||
|测试库|w_library_id|测试库标识(LIBRARY_ID)||
|状态|w_status|状态(STATUS)||
|计划开始|w_start_at|计划开始(START_AT)||
|计划结束|w_end_at|计划结束(END_AT)||
|负责人|w_assignee_id|负责人标识(ASSIGNEE_ID)||

### 指标
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col500   |  备注col500  |
| --------  |------------| -----   |  --------|
|测试交付周期|plan_cycle|sumif(dateDiff(end_at, start_at, 'day'), status='completed')  / if(count(id) = 0, 1, count(id))|统计测试计划从开始到交付的耗时，反映测试团队的交付效率。|
|计划数量|plans|count(id)|统计不同维度下测试计划的数量。|

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