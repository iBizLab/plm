# 产品需求(idea)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [需求(IDEA)](module/ProdMgmt/idea)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/ProdMgmt/idea/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|产品|w_product_id|产品(PRODUCT_ID)||
|优先级|w_priority|优先级(PRIORITY)||
|关注人|w_attentions_imp|关注人(ATTENTIONS_IMP)||
|创建人|w_create_man|建立人(CREATE_MAN)||
|创建时间|w_create_time|建立时间(CREATE_TIME)||
|子产品|w_section_id|子产品标识(SECTION_ID)||
|更新人|w_update_man|更新人(UPDATE_MAN)||
|更新时间|w_update_time|更新时间(UPDATE_TIME)||
|状态|w_state|状态(STATE)||
|计划开始时间|w_plan_at_from|计划开始时间(PLAN_AT_FROM)||
|计划结束时间|w_plan_at_to|计划结束时间(PLAN_AT_TO)||
|负责人|w_assignee_id|负责人(ASSIGNEE_ID)||
|需求来源|w_idea_from|需求来源(IDEA_FROM)||
|需求类型|w_idea_type|需求类型(IDEA_TYPE)||

### 指标
##### 常规指标
|    名称col200   | 代码名col150 |  聚合模式col150  | 属性col350      |  备注col500  |
| --------  |------------| -----   |  --------|--------|
|剩余工时|z_remaining_workload|合计|剩余工时(REMAINING_WORKLOAD)||
|登记工时|z_actual_workload|合计|实际工时(ACTUAL_WORKLOAD)||
|预估工时|z_estimated_workload|合计|预估工时(ESTIMATED_WORKLOAD)||
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col500   |  备注col500  |
| --------  |------------| -----   |  --------|
|关联产品需求|z_relation_total_idea|(SELECT COUNT(distinct s1.target_id) FROM RELATION s1 WHERE s1.PRINCIPAL_ID = dataresult.ID AND s1.TARGET_TYPE ='IDEA' and dataresult.is_deleted = 0 and dataresult.product_is_deleted = 0)||
|关联工作项|z_relation_total_work_item|(SELECT COUNT(distinct s1.target_id) FROM RELATION s1 WHERE s1.PRINCIPAL_ID = dataresult.ID AND s1.TARGET_TYPE ='WORK_ITEM' and dataresult.is_deleted = 0 and dataresult.product_is_deleted = 0)||
|关联工单|z_relation_total_ticket|(SELECT COUNT(distinct s1.target_id) FROM RELATION s1 WHERE s1.PRINCIPAL_ID = dataresult.ID AND s1.TARGET_TYPE ='TICKET' and dataresult.is_deleted = 0 and dataresult.product_is_deleted = 0)||
|关联测试用例|z_relation_total_test_case|(SELECT COUNT(distinct s1.target_id) FROM RELATION s1 WHERE s1.PRINCIPAL_ID = dataresult.ID AND s1.TARGET_TYPE ='TEST_CASE' and dataresult.is_deleted = 0 and dataresult.product_is_deleted = 0)||
|客户|z_relation_total_customer|(SELECT COUNT(distinct s1.TARGET_ID) FROM RELATION s1 WHERE s1.PRINCIPAL_ID = dataresult.ID AND s1.TARGET_TYPE ='CUSTOMER' AND dataresult.PRODUCT_IS_DELETED = 0 and dataresult.is_deleted = 0)||
|需求占比|idea_ratio|countif(multiif(param(code_type, '-1') = '10', priority in (params(priority, ('P0'))), param(code_type, '-1') = '20', state in (params(state, ('10'))), param(code_type, '-1') = '30', idea_from in (params(idea_from, ('10'))), param(code_type, '10') = '40', idea_type in (params(idea_type, ('10'))), priority in (params(priority, ('P0')))) and is_deleted = 0 and product_is_deleted = 0) / if(countif(is_deleted = 0 and product_is_deleted = 0) = 0, 1, countif(is_deleted = 0 and product_is_deleted = 0))|统计不同属性产品需求的占比情况。<br>|
|需求数量|idea_number|countif(is_deleted=0 and PRODUCT_IS_DELETED = 0)|统计不同维度下的产品需求数量。<br>|

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