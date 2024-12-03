# 工单(ticket)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [工单(TICKET)](module/ProdMgmt/ticket)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/ProdMgmt/ticket/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|产品|w_product_id|产品标识(PRODUCT_ID)||
|优先级|w_priority|优先级(PRIORITY)||
|关注人|w_attentions_imp|关注人(ATTENTIONS_IMP)||
|创建人|w_create_man|建立人(CREATE_MAN)||
|创建时间|w_create_time|建立时间(CREATE_TIME)||
|客户|w_customer_id|客户标识(CUSTOMER_ID)||
|工单类型|w_type|类型(TYPE)||
|提交人|w_submitter_id|提交人标识(SUBMITTER_ID)||
|更新人|w_update_man|更新人(UPDATE_MAN)||
|更新时间|w_update_time|更新时间(UPDATE_TIME)||
|标签|w_tags|标签(TAGS)||
|渠道|w_channel|渠道(CHANNEL)||
|状态|w_state|状态(STATE)||
|解决方案|w_solution|解决方案(SOLUTION)||
|负责人|w_assignee_id|负责人标识(ASSIGNEE_ID)||

### 指标
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col500   |  备注col500  |
| --------  |------------| -----   |  --------|
|工单占比|ticket_ratio|countif(multiif(param(code_type, '-1') = '10', priority in (params(priority, ('P0'))), param(code_type, '-1') = '20', state in (params(state, ('10'))), param(code_type, '-1') = '30', type in (params(type, ('10'))), param(code_type, '-1') = '40', channel in (params(channel, ('10'))), param(code_type, '-1') = '50', solution in (params(solution, ('10'))), priority in (params(priority, ('P0')))) and is_deleted = 0 and product_is_deleted = 0) / if(countif(is_deleted = 0 and product_is_deleted = 0) = 0, 1, countif(is_deleted = 0 and product_is_deleted = 0))|统计不同属性工单的占比情况。	|
|工单数量|tickets|countif(is_deleted=0 and product_is_deleted = 0)|统计不同维度下的工单数量。|

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