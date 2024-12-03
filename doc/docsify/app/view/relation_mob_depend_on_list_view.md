# 关联(relation_mob_depend_on_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * [获取关联列表总条数](module/Base/relation/uilogic/get_list_total)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [关联(RELATION)](module/Base/relation) : [添加依赖后置任务（移动端）](module/Base/relation#界面行为)
  * [关联(RELATION)](module/Base/relation) : [添加依赖前置任务（移动端）](module/Base/relation#界面行为)

### 关联视图
  * [选择工作项(work_item_mob_depend_mpick_up_view)](app/view/work_item_mob_depend_mpick_up_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>