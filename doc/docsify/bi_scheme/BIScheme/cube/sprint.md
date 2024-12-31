# 迭代(sprint)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [迭代(SPRINT)](module/ProjMgmt/sprint)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/ProjMgmt/sprint/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|开始时间|w_start_at|开始时间(START_AT)||
|状态|w_status|状态(STATUS)||
|结束时间|w_end_at|结束时间(END_AT)||
|负责人|w_assignee_id|负责人标识(ASSIGNEE_ID)||
|项目|w_project_id|项目标识(PROJECT_ID)||

### 指标
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col501   |  备注col500  |
| --------  |------------| -----   |  --------|
|迭代延期数|sprint_delay_number|countif(status <> 3 and end_at < now() and project_is_deleted = 0)|统计延期迭代的数量。<br>|
|迭代延期率|sprint_delay_rate|countif(status <> 3 and end_at < now() and project_is_deleted = 0) / if(countif(project_is_deleted = 0) = 0, 1, countif(project_is_deleted = 0))|统计延期迭代数的占比，反映迭代的延期情况。<br>|
|迭代按时交付数|sprint_deliver_on_time|countif(status = 3 and end_at < now() and project_is_deleted = 0)|统计迭代按时结束的数量。<br>|
|迭代按时交付率|sprint_delivery_on_time_rate|countif(status = 3 and end_at < now() and project_is_deleted = 0) / if(countif(project_is_deleted = 0) = 0, 1, countif(project_is_deleted = 0))|统计迭代按时交付树的占比，反映迭代的交付情况。<br>|
|迭代数量|sprint_number|countif(project_is_deleted = 0)|统计不同维度下迭代的数量。|

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