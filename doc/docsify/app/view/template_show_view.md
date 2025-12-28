# 模板(template_show_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(toolbar)

## 视图界面逻辑
* `onMounted`
```javascript
view.parentView.layoutPanel.panelItems.apply.state.visible = true;
view.parentView.layoutPanel.panelItems.nav_pos.state.visible = true;
view.parentView.layoutPanel.panelItems.no_data_container.state.visible = false;
```
* `onBeforeDestroy`
```javascript
view.parentView.layoutPanel.panelItems.apply.state.visible = false;
view.parentView.layoutPanel.panelItems.nav_pos.state.visible = false;
view.parentView.layoutPanel.panelItems.no_data_container.state.visible = true;
```


### 关联界面行为
  * [通用模板(TEMPLATE)](module/Base/template) : [编辑用例模板](module/Base/template#界面行为)
  * [通用模板(TEMPLATE)](module/Base/template) : [编辑需求模板](module/Base/template#界面行为)
  * [通用模板(TEMPLATE)](module/Base/template) : [删除模板](module/Base/template#界面行为)
  * [通用模板(TEMPLATE)](module/Base/template) : [编辑工作项模板](module/Base/template#界面行为)

### 关联视图
  * [编辑模板(template_edit_idea_template_view)](app/view/template_edit_idea_template_view)
  * [编辑模板(template_edit_test_case_template_view)](app/view/template_edit_test_case_template_view)
  * [编辑模板(template_edit_work_item_template_view)](app/view/template_edit_work_item_template_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>