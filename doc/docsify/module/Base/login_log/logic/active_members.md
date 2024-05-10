## 获取活跃成员图表数据 <!-- {docsify-ignore-all} -->

   获取活跃成员图表中所需要的数据

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
state "开始" as Begin <<start>> [[$./active_members#begin {"开始"}]]
state "执行脚本代码" as RAWSFCODE1  [[$./active_members#rawsfcode1 {"执行脚本代码"}]]
state "准备参数" as PREPAREPARAM1  [[$./active_members#prepareparam1 {"准备参数"}]]
state "结束" as END1 <<end>> [[$./active_members#end1 {"结束"}]]
state "实体数据集" as DEDATASET1  [[$./active_members#dedataset1 {"实体数据集"}]]
state "循环子调用" as LOOPSUBCALL1  [[$./active_members#loopsubcall1 {"循环子调用"}]] #green {
state "执行脚本代码" as RAWSFCODE2  [[$./active_members#rawsfcode2 {"执行脚本代码"}]]
state "准备参数" as PREPAREPARAM2  [[$./active_members#prepareparam2 {"准备参数"}]]
}


Begin --> RAWSFCODE1
RAWSFCODE1 --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> END1
DEDATASET1 --> LOOPSUBCALL1
LOOPSUBCALL1 --> RAWSFCODE2
RAWSFCODE2 --> PREPAREPARAM2


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 执行脚本代码 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
null
```

#### 准备参数 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `active_page(当前用户分页结果)`

#### 实体数据集 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [登录日志(LOGIN_LOG)](module/Base/login_log.md) 数据集合 [数据集(DEFAULT)](module/Base/login_log#数据集合) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`active_page(当前用户分页结果)`

#### 循环子调用 :id=LOOPSUBCALL1<sup class="footnote-symbol"> <font color=gray size=1>[循环子调用]</font></sup>



循环参数`active_page(当前用户分页结果)`，子循环参数使用`active_obj(当前用户数据变量)`
#### 执行脚本代码 :id=RAWSFCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
null
```

#### 准备参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>




    无



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|当前用户数据变量|active_obj|数据对象|[登录日志(LOGIN_LOG)](module/Base/login_log.md)||
|当前用户分页结果|active_page|分页查询|||
