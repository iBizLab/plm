## 项目下迭代（移动端） <!-- {docsify-ignore-all} -->

   设置进度条信息

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
state "开始" as Begin <<start>> [[$./mob_project_sprint#begin {"开始"}]]
state "设置过滤器" as PREPAREPARAM1  [[$./mob_project_sprint#prepareparam1 {"设置过滤器"}]]
state "项目下迭代" as DEDATASET1  [[$./mob_project_sprint#dedataset1 {"项目下迭代"}]]
state "填充进度信息" as RAWSFCODE1  [[$./mob_project_sprint#rawsfcode1 {"填充进度信息"}]]
state "结束" as END1 <<end>> [[$./mob_project_sprint#end1 {"结束"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> RAWSFCODE1
RAWSFCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 设置过滤器 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).project` 设置给  `filter(过滤器).N_PROJECT_ID_EQ`

#### 项目下迭代 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [迭代(SPRINT)](module/ProjMgmt/sprint.md) 数据集合 [数据集(DEFAULT)](module/ProjMgmt/sprint#数据集合) ，查询参数为`filter(过滤器)`

将执行结果返回给参数`sprint_page_result(迭代分页查询结果)`

#### 填充进度信息 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def sprint_page_result = logic.param('sprint_page_result').getReal()
sprint_page_result.each { sprint ->
    def all_work_items = sprint.get('all_work_items')
    def completed_work_items = sprint.get('completed_work_items')
    def schedule = 0
    if (all_work_items != 0 && completed_work_items != 0) {
        schedule = Math.round(completed_work_items / all_work_items * 100)
    }
    sprint.set('schedule', schedule)
    sprint.set('schedule_text', "${schedule}%")
}

```

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `sprint_page_result(迭代分页查询结果)`



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|过滤器|filter|过滤器|||
|迭代分页查询结果|sprint_page_result|分页查询|||
