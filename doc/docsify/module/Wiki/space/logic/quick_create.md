## 获取快速新建空间集合 <!-- {docsify-ignore-all} -->

   用于获取可快速新建的空间集合

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
state "开始" as Begin <<start>> [[$./quick_create#begin {"开始"}]]
state "获取主表格查询数据集" as DEDATASET2  [[$./quick_create#dedataset2 {"获取主表格查询数据集"}]]
state "获取用户快速新建数据集" as DEDATASET4  [[$./quick_create#dedataset4 {"获取用户快速新建数据集"}]]
state "结束" as END2 <<end>> [[$./quick_create#end2 {"结束"}]]
state "判断系统管理员身份" as RAWSFCODE3  [[$./quick_create#rawsfcode3 {"判断系统管理员身份"}]]


Begin --> RAWSFCODE3
RAWSFCODE3 --> DEDATASET4 : [[$./quick_create#rawsfcode3-dedataset4{非系统管理员} 非系统管理员]]
DEDATASET4 --> END2
RAWSFCODE3 --> DEDATASET2 : [[$./quick_create#rawsfcode3-dedataset2{系统管理员} 系统管理员]]
DEDATASET2 --> END2


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 判断系统管理员身份 :id=RAWSFCODE3<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _usercontext = sys.user();
def srfreadonly = _usercontext.testSysUniRes("SYSTEM");
def _default = logic.param("default").real;
if(srfreadonly == true){
    _default.set("srfreadonly",false);
}
```

#### 获取主表格查询数据集 :id=DEDATASET2<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [空间(SPACE)](module/Wiki/space.md) 数据集合 [主表格查询(main)](module/Wiki/space#数据集合) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`spaces`

#### 获取用户快速新建数据集 :id=DEDATASET4<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [空间(SPACE)](module/Wiki/space.md) 数据集合 [快速新建查询（管理用户）(quick_user)](module/Wiki/space#数据集合) ，查询参数为`Default(传入变量)`

将执行结果返回给参数`spaces`

#### 结束 :id=END2<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `spaces`


### 连接条件说明
#### 非系统管理员 :id=RAWSFCODE3-DEDATASET4

`Default(传入变量).srfreadonly` ISNULL
#### 系统管理员 :id=RAWSFCODE3-DEDATASET2

`Default(传入变量).srfreadonly` EQ `false`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|过滤器|||
|spaces|spaces|分页查询|||
