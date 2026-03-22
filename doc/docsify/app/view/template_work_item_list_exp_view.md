# 工作项列表导航(template_work_item_list_exp_view)  <!-- {docsify-ignore-all} -->


系统自动添加



## 控件
#### CAPTIONBAR(captionbar)
#### 列表视图导航栏(listexpbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
* `onMounted`
```javascript
view.layoutPanel.panelItems.apply.state.keepAlive = true;
view.layoutPanel.panelItems.nav_pos.state.keepAlive = true;
view.layoutPanel.panelItems.no_data_container.state.keepAlive = true;

view.layoutPanel.panelItems.apply.state.visible = false;
view.layoutPanel.panelItems.nav_pos.state.visible = false;
view.layoutPanel.panelItems.no_data_container.state.visible = true;
```
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [通用模板(TEMPLATE)](module/Base/template) : [使用此模板](module/Base/template#界面行为)
  * [通用模板(TEMPLATE)](module/Base/template) : [新建工作项模板](module/Base/template#界面行为)

### 关联视图
  * [新建模板(template_create_work_item_template_view)](app/view/template_create_work_item_template_view)
  * [模板(template_show_view)](app/view/template_show_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>