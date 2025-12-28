# 版本记录(version_work_item_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 列表(list)
#### 搜索栏(searchbar)
#### 工具栏(toolbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [版本(VERSION)](module/Base/version) : [返回](module/Base/version#界面行为)

### 关联视图
  * [版本(version_edit_view)](app/view/version_edit_view)
  * [工作项(work_item_dyna_main_view)](app/view/work_item_dyna_main_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>