## 生成阶段排序值 <!-- {docsify-ignore-all} -->

   

### 处理过程

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

hide empty description
state "开始" as Begin <<start>> [[$./fill_stage_order#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./fill_stage_order#end1 {"结束"}]]
state "准备参数" as PREPAREPARAM1  [[$./fill_stage_order#prepareparam1 {"准备参数"}]]
state "准备参数" as PREPAREPARAM3  [[$./fill_stage_order#prepareparam3 {"准备参数"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./fill_stage_order#loopsubcall1 {"循环子调用"}]] #green {
state "调试逻辑参数" as DEBUGPARAM2  [[$./fill_stage_order#debugparam2 {"调试逻辑参数"}]]
state "准备参数" as PREPAREPARAM2  [[$./fill_stage_order#prepareparam2 {"准备参数"}]]
}


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> DEBUGPARAM2
DEBUGPARAM2 --> PREPAREPARAM2
LOOPSUBCALL1 --> PREPAREPARAM3
PREPAREPARAM3 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).REVIEW_STAGE(评审阶段)` 绑定给  `stage_list(阶段列表)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`stage_list(阶段列表)`，子循环参数使用`for_stage(循环阶段数据)`
#### 准备参数 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`stage_arr(阶段数组)` 设置给  `Default(传入变量).REVIEW_STAGE(评审阶段)`

#### 调试逻辑参数 :id=DEBUGPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[调试逻辑参数]</font></sup>



> [!NOTE|label:调试信息|icon:fa fa-bug]
> 调试输出参数`for_stage(循环阶段数据)`的详细信息


#### 准备参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`for_stage(循环阶段数据).srfordervalue` 设置给  `for_stage(循环阶段数据).ORDER(顺序)`
2. 将`for_stage(循环阶段数据)` 追加到  `stage_arr(阶段数组)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[流程准则(GUIDELINE)](module/TestMgmt/guideline.md)||
|循环阶段数据|for_stage|数据对象|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|阶段数组|stage_arr|数据对象列表|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
|阶段列表|stage_list|数据对象列表|[评审阶段(REVIEW_STAGE)](module/TestMgmt/review_stage.md)||
