# 成员(member_mob_shared_md_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
* `onMounted`
```javascript
view.layoutPanel.panelItems.check_type.setDataValue('reader');
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [成员(MEMBER)](module/Base/member) : [移动端添加共享成员（test）](module/Base/member#界面行为)
  * [成员(MEMBER)](module/Base/member) : [删除页面共享成员](module/Base/member#界面行为)

### 关联界面逻辑
  * [成员(MEMBER)](module/Base/member) : [成员权限值变更](module/Base/member/uilogic/member_role_change)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>