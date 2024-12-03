# 帐号设置(user_account_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)

##### 值规则
* `new_password` : [密码](index/sys_value_rule_index#UsrValueRule0407250158)
* `sure_password` : [密码](index/sys_value_rule_index#UsrValueRule0407250158)
* `sure_password` : [两次密码不一致](index/value_rule_index)
* `new_password` : [两次密码不一致](index/value_rule_index)


<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>