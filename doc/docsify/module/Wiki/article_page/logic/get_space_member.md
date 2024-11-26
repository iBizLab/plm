## 获取知识空间成员 <!-- {docsify-ignore-all} -->

   获取知识空间成员信息，用于判断当前用户权限

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
state "开始" as Begin <<start>> [[$./get_space_member#begin {"开始"}]]
state "结束" as END2 <<end>> [[$./get_space_member#end2 {"结束"}]]
state "执行脚本代码" as RAWSFCODE4  [[$./get_space_member#rawsfcode4 {"执行脚本代码"}]]
state "获取知识空间ID并设置过滤参数" as PREPAREPARAM2  [[$./get_space_member#prepareparam2 {"获取知识空间ID并设置过滤参数"}]]
state "查询当前用户是否为知识空间成员" as DEDATASET3  [[$./get_space_member#dedataset3 {"查询当前用户是否为知识空间成员"}]]
state "绑定用户数据到for_obj" as PREPAREPARAM5  [[$./get_space_member#prepareparam5 {"绑定用户数据到for_obj"}]]
state "只读权限" as RAWSFCODE1  [[$./get_space_member#rawsfcode1 {"只读权限"}]]
state "非只读权限" as RAWSFCODE2  [[$./get_space_member#rawsfcode2 {"非只读权限"}]]
state "结束" as END6 <<end>> [[$./get_space_member#end6 {"结束"}]]
state "判断系统管理员身份" as RAWSFCODE3  [[$./get_space_member#rawsfcode3 {"判断系统管理员身份"}]]


Begin --> RAWSFCODE3 : [[$./get_space_member#begin-rawsfcode3{连接名称} 连接名称]]
RAWSFCODE3 --> PREPAREPARAM2 : [[$./get_space_member#rawsfcode3-prepareparam2{非系统管理员} 非系统管理员]]
PREPAREPARAM2 --> DEDATASET3
DEDATASET3 --> RAWSFCODE1 : [[$./get_space_member#dedataset3-rawsfcode1{不在知识空间中的成员} 不在知识空间中的成员]]
RAWSFCODE1 --> END6
DEDATASET3 --> PREPAREPARAM5 : [[$./get_space_member#dedataset3-prepareparam5{当前用户为知识空间成员} 当前用户为知识空间成员]]
PREPAREPARAM5 --> RAWSFCODE2 : [[$./get_space_member#prepareparam5-rawsfcode2{非只读成员} 非只读成员]]
RAWSFCODE2 --> END6
PREPAREPARAM5 --> RAWSFCODE1 : [[$./get_space_member#prepareparam5-rawsfcode1{只读成员} 只读成员]]
RAWSFCODE3 --> END2 : [[$./get_space_member#rawsfcode3-end2{系统管理员} 系统管理员]]
Begin --> RAWSFCODE4 : [[$./get_space_member#begin-rawsfcode4{连接名称} 连接名称]]
RAWSFCODE4 --> END6


@enduml
```


### 处理步骤说明

#### 绑定用户数据到for_obj :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`members(成员).0` 绑定给  `for_obj(循环临时变量)`

#### 非只读权限 :id=RAWSFCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
```

#### 执行脚本代码 :id=RAWSFCODE4<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```

#### 结束 :id=END6<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

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

#### 获取知识空间ID并设置过滤参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).SPACE_ID(空间标识)` 设置给  `filter(过滤器).N_SPACE_ID_EQ`
2. 将`用户全局对象.srfpersonid` 设置给  `filter(过滤器).N_USER_ID_EQ`

#### 查询当前用户是否为知识空间成员 :id=DEDATASET3<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [空间成员(SPACE_MEMBER)](module/Wiki/space_member.md) 数据集合 [数据集(DEFAULT)](module/Wiki/space_member#数据集合) ，查询参数为`filter(过滤器)`

将执行结果返回给参数`members(成员)`

#### 只读权限 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
```

#### 结束 :id=END2<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



*- N/A*


### 连接条件说明
#### 连接名称 :id=Begin-RAWSFCODE3

`Default(传入变量).IS_DELETED(是否已删除)` EQ `0` AND `Default(传入变量).IS_ARCHIVED(是否已归档)` EQ `0`
#### 非系统管理员 :id=RAWSFCODE3-PREPAREPARAM2

`Default(传入变量).srfreadonly` ISNULL
#### 不在知识空间中的成员 :id=DEDATASET3-RAWSFCODE1

`members(成员).size` EQ `0`
#### 当前用户为知识空间成员 :id=DEDATASET3-PREPAREPARAM5

`members(成员).size` EQ `1`
#### 非只读成员 :id=PREPAREPARAM5-RAWSFCODE2

`for_obj(循环临时变量).role_id` NOTEQ `reader`
#### 只读成员 :id=PREPAREPARAM5-RAWSFCODE1

`for_obj(循环临时变量).role_id` EQ `reader`
#### 系统管理员 :id=RAWSFCODE3-END2

`Default(传入变量).srfreadonly` EQ `false`
#### 连接名称 :id=Begin-RAWSFCODE4

(`Default(传入变量).IS_DELETED(是否已删除)` EQ `1` OR `Default(传入变量).IS_ARCHIVED(是否已归档)` EQ `1`)


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[页面(PAGE)](module/Wiki/article_page.md)||
|过滤器|filter|过滤器|||
|循环临时变量|for_obj|数据对象|||
|成员|members|分页查询|||
