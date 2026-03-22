# 关注(attention_mob_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [关注(ATTENTION)](module/Base/attention) : [添加测试库关注（移动端）](module/Base/attention#界面行为)
  * [关注(ATTENTION)](module/Base/attention) : [取消关注](module/Base/attention#界面行为)

### 关联视图
  * [测试库成员(library_member_mob_attention_mdpickup_view)](app/view/library_member_mob_attention_mdpickup_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>