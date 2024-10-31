# 交付物(deliverable_mob_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [交付物(DELIVERABLE)](module/Base/deliverable) : [新建交付目标（移动端）](module/Base/deliverable#界面行为)

### 关联视图
  * [交付物(deliverable_mob_create_view)](app/view/deliverable_mob_create_view)
  * [交付物(deliverable_mob_display_view)](app/view/deliverable_mob_display_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>