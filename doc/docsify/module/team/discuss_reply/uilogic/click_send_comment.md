## 点击发表评论 <!-- {docsify-ignore-all} -->

   未完成

### 处理过程

```plantuml
@startuml
hide footbox
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./click_send_comment#begin {开始}]]
state "准备参数" as PREPAREJSPARAM1  [[$./click_send_comment#preparejsparam1 {准备参数}]]




@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>




#### 准备参数 :id=PREPAREJSPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).post_id` 设置给  `ctx(上下文变量).discuss_post`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|ctrl|ctrl|当前容器对象||
|上下文变量|ctx|导航视图参数绑定参数||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
