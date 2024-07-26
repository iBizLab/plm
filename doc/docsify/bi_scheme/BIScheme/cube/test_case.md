# 测试用例(test_case)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [用例(TEST_CASE)](module/TestMgmt/test_case)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/TestMgmt/test_case/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|关注人|w_attentions_imp|关注人(ATTENTIONS_IMP)||
|创建人|w_create_man|建立人(CREATE_MAN)||
|创建时间|w_create_time|建立时间(CREATE_TIME)||
|测试库|w_library_id|测试库(TEST_LIBRARY_ID)||
|测试类型|w_test_type|测试类型(TEST_TYPE)||
|状态|w_state|状态(STATE)||
|用例类型|w_type|用例类型(TYPE)||
|维护人|w_maintenance_id|维护人(MAINTENANCE_ID)||
|评审结果|w_review_result_state|评审结果(REVIEW_RESULT_STATE)||
|重要程度|w_level|重要程度(LEVEL)||

### 指标
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col500   |  备注col500  |
| --------  |------------| -----   |  --------|
|用例占比|case_rate|countif(multiif(param(code_type, '-1') = '10', level in (params(level, ('P1'))), param(code_type, '-1') = '20', state in (params(state, ('-1'))), param(code_type, '-1') = '30', type in (params(case_type, ('-1'))), level in (params(level, ('P1')))) and is_deleted = 0) / if(countif(is_deleted = 0) = 0, 1, countif(is_deleted = 0))|统计不同用例类型的占比，反映测试用例的类型分布情况。|
|用例数量|case_number|count(id)|统计测试团队编写的用例数量，反映测试团队的产出及需求复杂度、产品质量等。<br>|

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