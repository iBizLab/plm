## x <!-- {docsify-ignore-all} -->

   不确定干嘛的，慎删

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
state "开始" as Begin <<start>> [[$./x#begin {开始}]]
state "调试逻辑参数" as DEBUGPARAM1  [[$./x#debugparam1 {调试逻辑参数}]]
state "消息弹窗" as MSGBOX1  [[$./x#msgbox1 {消息弹窗}]]
state "拷贝参数" as COPYPARAM1  [[$./x#copyparam1 {拷贝参数}]]
state "重置参数" as RESETPARAM1  [[$./x#resetparam1 {重置参数}]]
state "注入脚本代码" as RAWJSCODE1  [[$./x#rawjscode1 {注入脚本代码}]]
state "实体数据集" as DEDATASET1  [[$./x#dedataset1 {实体数据集}]]
state "界面行为" as DEUIACTION1  [[$./x#deuiaction1 {界面行为}]]
state "重新建立参数" as RENEWPARAM1  [[$./x#renewparam1 {重新建立参数}]]
state "抛出异常" as THROWEXCEPTION1  [[$./x#throwexception1 {抛出异常}]]
state "实体行为" as DEACTION1  [[$./x#deaction1 {实体行为}]]
state "视图部件调用" as VIEWCTRLINVOKE1  [[$./x#viewctrlinvoke1 {视图部件调用}]]
state "视图部件事件触发" as VIEWCTRLFIREEVENT1  [[$./x#viewctrlfireevent1 {视图部件事件触发}]]
state "绑定参数" as BINDPARAM1  [[$./x#bindparam1 {绑定参数}]]
state "结束" as END1 <<end>> [[$./x#end1 {结束}]]
state "准备参数" as PREPAREJSPARAM1  [[$./x#preparejsparam1 {准备参数}]]
state "实体处理逻辑" as DELOGIC1  [[$./x#delogic1 {实体处理逻辑}]]


Begin --> PREPAREJSPARAM1
PREPAREJSPARAM1 --> VIEWCTRLINVOKE1
VIEWCTRLINVOKE1 --> VIEWCTRLFIREEVENT1
VIEWCTRLFIREEVENT1 --> RAWJSCODE1
VIEWCTRLFIREEVENT1 --> DEBUGPARAM1
VIEWCTRLFIREEVENT1 --> MSGBOX1
MSGBOX1 --> DEACTION1 : [[$./x#msgbox1-deaction1{yes} yes]]
DEACTION1 --> DEUIACTION1
DEUIACTION1 --> DELOGIC1
DELOGIC1 --> DEDATASET1
DEDATASET1 --> END1
DEUIACTION1 -[#red]-> THROWEXCEPTION1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin




#### 调试逻辑参数 :id=DEBUGPARAM1



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`传入变量`的详细信息

#### 消息弹窗 :id=MSGBOX1




#### 拷贝参数 :id=COPYPARAM1



拷贝参数`ctrl` 到 `Default(传入变量)`

#### 重置参数 :id=RESETPARAM1



重置参数```Default(传入变量)```
#### 注入脚本代码 :id=RAWJSCODE1



<p class="panel-title"><b>执行代码</b></p>

```javascript
safsadfsdfasdfsdfsdf
```

#### 实体数据集 :id=DEDATASET1




#### 界面行为 :id=DEUIACTION1



调用实体 [用例步骤(STEP)](module/TestMgmt/Step.md) 界面行为 [建立数据](module/TestMgmt/Step#界面行为) ，行为参数为`view`

#### 重新建立参数 :id=RENEWPARAM1



重建参数
#### 抛出异常 :id=THROWEXCEPTION1



> [!ATTENTION|label:抛出异常|icon:fa fa-warning]
> 错误信息：业务属数据错误

#### 实体行为 :id=DEACTION1



调用实体 [需求(IDEA)](module/ProdMgmt/Idea.md) 行为 [Get](module/ProdMgmt/Idea#行为) ，行为参数为`Default(传入变量)`

#### 视图部件调用 :id=VIEWCTRLINVOKE1



调用`ctrl`的方法`fffa`，参数为`Default(传入变量)`
#### 视图部件事件触发 :id=VIEWCTRLFIREEVENT1



触发`view`的事件`change`
#### 绑定参数 :id=BINDPARAM1



绑定参数`Default(传入变量)` 到 `view`
#### 结束 :id=END1




#### 准备参数 :id=PREPAREJSPARAM1



1. 将`Default(传入变量)` 设置给  `Default(传入变量)`

#### 实体处理逻辑 :id=DELOGIC1



调用处理逻辑异常，请检查配置平台相关配置

### 连接条件说明
#### yes :id=MSGBOX1-DEACTION1

```view(view)``` EQ ```yes```


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型      |备注 |
| --------| --------| --------  | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象||
|filter|filter|过滤器||
|view|view|当前视图对象||
|page|page|分页查询||
|ctrl|ctrl|当前部件对象||
