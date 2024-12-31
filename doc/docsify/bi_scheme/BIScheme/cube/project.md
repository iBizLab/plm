# 项目(project)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [项目(PROJECT)](module/ProjMgmt/project)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/ProjMgmt/project/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|创建人|w_create_man|建立人(CREATE_MAN)||
|创建时间|w_create_time|建立时间(CREATE_TIME)||
|开始时间|w_start_at|开始时间(START_AT)||
|归档状态|w_is_archived|是否已归档(IS_ARCHIVED)||
|成员|w_members|成员(MEMBERS)||
|更新人|w_update_man|更新人(UPDATE_MAN)||
|更新时间|w_update_time|更新时间(UPDATE_TIME)||
|状态|w_state|项目状态(STATE)||
|结束时间|w_end_at|结束时间(END_AT)||
|负责人|w_assignee_id|负责人标识(ASSIGNEE_ID)||
|项目类型|w_type|类型(TYPE)||

### 指标
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col501   |  备注col500  |
| --------  |------------| -----   |  --------|
|项目平均进度|average_project_progress|sum(if(ALL_WORK_ITEMS = 0, 0, COMPLETED_WORK_ITEMS / ALL_WORK_ITEMS)) / if(countif(is_deleted = 0) = 0, 1, countif(is_deleted = 0))|统计项目的进展情况。|
|项目数量|project_number|countif(is_deleted=0)|统计不同维度下项目的数量。<br>|
|项目风险占比|project_risk_rate|countif(state in (params(state,('delay'))) and is_deleted = 0) / if(countif(is_deleted = 0) = 0, 1, countif(is_deleted = 0))|统计不同风险项目的占比，反映项目的进度风险情况。<br>|

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