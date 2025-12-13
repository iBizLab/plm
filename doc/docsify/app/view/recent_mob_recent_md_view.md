# 最近访问(recent_mob_recent_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * [移动端最近访问跳转其他视图](module/Base/recent/uilogic/mob_recent_jump_other_view)
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面逻辑
  * [最近访问(RECENT)](module/Base/recent) : [移动端最近访问跳转其他视图](module/Base/recent/uilogic/mob_recent_jump_other_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>