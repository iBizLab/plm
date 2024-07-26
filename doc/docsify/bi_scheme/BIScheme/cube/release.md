# 发布(release)  <!-- {docsify-ignore-all} -->


<br>
<p class="panel-title"><b>实体</b></p>

* [项目发布(RELEASE)](module/ProjMgmt/release)



<p class="panel-title"><b>数据集合</b></p>

* [BI查询(bi_search)](module/ProjMgmt/release/dataset/bi_search)

### 维度
##### 常规维度
|    名称col200   | 代码名col150      | 属性col350    |  备注col500  |
| --------  |------------| -----   |  --------|
|创建人|w_create_man|建立人(CREATE_MAN)||
|创建时间|w_create_time|建立时间(CREATE_TIME)||
|发布时间|w_end_at|发布时间(END_AT)||
|开始时间|w_start_at|开始时间(START_AT)||
|负责人|w_assignee_id|负责人标识(ASSIGNEE_ID)||
|阶段|w_status|阶段(STATUS)||
|项目|w_project_id|项目标识(PROJECT_ID)||

### 指标
##### 计算式指标
|    名称col200   | 代码名col150  |  计算公式col500   |  备注col500  |
| --------  |------------| -----   |  --------|
|发布数量|release_number|count(id)|统计不同维度下发布的数量。<br>|

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