## 切换显示模式 <!-- {docsify-ignore-all} -->

   

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
state "开始" as Begin <<start>> [[$./switch_show_mode#begin {开始}]]
state "视图部件调用" as VIEWCTRLINVOKE1  [[$./switch_show_mode#viewctrlinvoke1 {视图部件调用}]]
state "准备参数" as PREPAREJSPARAM1  [[$./switch_show_mode#preparejsparam1 {准备参数}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> VIEWCTRLINVOKE1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin




#### 视图部件调用 :id=VIEWCTRLINVOKE1



调用`treegrid(树表部件)`的方法`switchShowMode`，参数为`op_params(操作参数)`
#### 准备参数 :id=PREPAREJSPARAM1



1. 将`当前视图参数[showMode] ==> op_params[showMode]` 设置给  `op_params(操作参数).showMode`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|树表部件|treegrid|部件对象||
|操作参数|op_params|数据对象||
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
