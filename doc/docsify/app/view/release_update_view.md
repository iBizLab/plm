# 编辑发布(release_update_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 值规则
* `start_at` : [开始时间](index/value_rule_index)
* `end_at` : [结束时间](index/value_rule_index)

##### 属性注入
* `开始时间` 注入属性 `disabledDate`

```javascript
(time) => {
    const formC = view.getController('form');
    if (!formC) {
        return false;
    }
    if(!formC.state.data.end_at){
        return false;
    }
    const end_at = new Date(formC.state.data.end_at);
    // 比对天
    end_at.setHours(0, 0, 0, 0);
    time.setHours(0, 0, 0, 0);
    return time.getTime() > end_at.getTime();
}
```

* `发布时间` 注入属性 `disabledDate`

```javascript
(time) => {
    const formC = view.getController('form');
    if (!formC) {
        return false;
    }
    if(!formC.state.data.start_at){
        return false;
    }
    const start_at = new Date(formC.state.data.start_at);
    // 比对天
    start_at.setHours(0, 0, 0, 0);
    time.setHours(0, 0, 0, 0);
    return time.getTime() < start_at.getTime();
}
```


### 关联视图
  * [选择项目(project_pick_up_view)](app/view/project_pick_up_view)
  * [发布类别选择树(release_release_pick_up_tree_view)](app/view/release_release_pick_up_tree_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>