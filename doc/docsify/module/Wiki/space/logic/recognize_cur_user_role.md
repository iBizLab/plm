## 判断当前用户角色 <!-- {docsify-ignore-all} -->

   判断当前用户角色

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
state "开始" as Begin <<start>> [[$./recognize_cur_user_role#begin {"开始"}]]
state "获取项目ID并设置过滤参数" as PREPAREPARAM2  [[$./recognize_cur_user_role#prepareparam2 {"获取项目ID并设置过滤参数"}]]
state "获取产品ID并设置过滤参数" as PREPAREPARAM6  [[$./recognize_cur_user_role#prepareparam6 {"获取产品ID并设置过滤参数"}]]
state "查询当前用户是否为产品成员" as DEDATASET2  [[$./recognize_cur_user_role#dedataset2 {"查询当前用户是否为产品成员"}]]
state "返回系统管理员权限" as PREPAREPARAM3  [[$./recognize_cur_user_role#prepareparam3 {"返回系统管理员权限"}]]
state "结束" as END2 <<end>> [[$./recognize_cur_user_role#end2 {"结束"}]]
state "查询当前用户是否为项目成员" as DEDATASET3  [[$./recognize_cur_user_role#dedataset3 {"查询当前用户是否为项目成员"}]]
state "只读参数设置为空" as PREPAREPARAM4  [[$./recognize_cur_user_role#prepareparam4 {"只读参数设置为空"}]]
state "绑定用户数据到for_obj" as PREPAREPARAM5  [[$./recognize_cur_user_role#prepareparam5 {"绑定用户数据到for_obj"}]]
state "普通用户" as RAWSFCODE6  [[$./recognize_cur_user_role#rawsfcode6 {"普通用户"}]]
state "绑定用户数据到for_obj" as PREPAREPARAM7  [[$./recognize_cur_user_role#prepareparam7 {"绑定用户数据到for_obj"}]]
state "管理员" as RAWSFCODE5  [[$./recognize_cur_user_role#rawsfcode5 {"管理员"}]]
state "只读权限" as RAWSFCODE1  [[$./recognize_cur_user_role#rawsfcode1 {"只读权限"}]]
state "管理员" as RAWSFCODE2  [[$./recognize_cur_user_role#rawsfcode2 {"管理员"}]]
state "普通用户" as RAWSFCODE7  [[$./recognize_cur_user_role#rawsfcode7 {"普通用户"}]]
state "结束" as END6 <<end>> [[$./recognize_cur_user_role#end6 {"结束"}]]
state "判断系统管理员身份" as RAWSFCODE3  [[$./recognize_cur_user_role#rawsfcode3 {"判断系统管理员身份"}]]
state "只读权限" as RAWSFCODE4  [[$./recognize_cur_user_role#rawsfcode4 {"只读权限"}]]


Begin --> PREPAREPARAM4
PREPAREPARAM4 --> RAWSFCODE3
RAWSFCODE3 --> PREPAREPARAM2 : [[$./recognize_cur_user_role#rawsfcode3-prepareparam2{非系统管理员(项目)} 非系统管理员(项目)]]
PREPAREPARAM2 --> DEDATASET3
DEDATASET3 --> RAWSFCODE1 : [[$./recognize_cur_user_role#dedataset3-rawsfcode1{不在项目中的成员} 不在项目中的成员]]
RAWSFCODE1 --> END6
DEDATASET3 --> PREPAREPARAM5 : [[$./recognize_cur_user_role#dedataset3-prepareparam5{当前用户为项目成员} 当前用户为项目成员]]
PREPAREPARAM5 --> RAWSFCODE2 : [[$./recognize_cur_user_role#prepareparam5-rawsfcode2{非只读成员} 非只读成员]]
RAWSFCODE2 --> END6
PREPAREPARAM5 --> RAWSFCODE1 : [[$./recognize_cur_user_role#prepareparam5-rawsfcode1{只读成员} 只读成员]]
PREPAREPARAM5 --> RAWSFCODE7
RAWSFCODE7 --> END6
RAWSFCODE3 --> PREPAREPARAM3 : [[$./recognize_cur_user_role#rawsfcode3-prepareparam3{系统管理员} 系统管理员]]
PREPAREPARAM3 --> END2
RAWSFCODE3 --> PREPAREPARAM6 : [[$./recognize_cur_user_role#rawsfcode3-prepareparam6{非系统管理员（产品）} 非系统管理员（产品）]]
PREPAREPARAM6 --> DEDATASET2
DEDATASET2 --> PREPAREPARAM7 : [[$./recognize_cur_user_role#dedataset2-prepareparam7{当前用户为产品成员} 当前用户为产品成员]]
PREPAREPARAM7 --> RAWSFCODE5 : [[$./recognize_cur_user_role#prepareparam7-rawsfcode5{连接名称} 连接名称]]
RAWSFCODE5 --> END6
PREPAREPARAM7 --> RAWSFCODE6 : [[$./recognize_cur_user_role#prepareparam7-rawsfcode6{连接名称} 连接名称]]
RAWSFCODE6 --> END6
PREPAREPARAM7 --> RAWSFCODE4 : [[$./recognize_cur_user_role#prepareparam7-rawsfcode4{只读成员} 只读成员]]
RAWSFCODE4 --> END6
DEDATASET2 --> RAWSFCODE4 : [[$./recognize_cur_user_role#dedataset2-rawsfcode4{不在产品中的成员} 不在产品中的成员]]


@enduml
```


### 处理步骤说明

#### 管理员 :id=RAWSFCODE2<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
defaultObj.set("user_role", "admin");
```

#### 绑定用户数据到for_obj :id=PREPAREPARAM5<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`members(成员).0` 绑定给  `for_obj(循环临时变量)`

#### 普通用户 :id=RAWSFCODE7<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
defaultObj.set("user_role", "user");
```

#### 获取项目ID并设置过滤参数 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).project` 设置给  `project_filter(项目过滤器).N_PROJECT_ID_EQ`
2. 将`用户全局对象.srfpersonid` 设置给  `project_filter(项目过滤器).N_USER_ID_EQ`

#### 查询当前用户是否为项目成员 :id=DEDATASET3<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [项目成员(PROJECT_MEMBER)](module/ProjMgmt/project_member.md) 数据集合 [数据集(DEFAULT)](module/ProjMgmt/project_member#数据集合) ，查询参数为`project_filter(项目过滤器)`

将执行结果返回给参数`members(成员)`

#### 只读权限 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");

defaultObj.set("srfreadonly", true);
defaultObj.set("user_role", "reader");
```

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 只读参数设置为空 :id=PREPAREPARAM4<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`空值（NULL）` 设置给  `Default(传入变量).srfreadonly`

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

#### 结束 :id=END6<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 获取产品ID并设置过滤参数 :id=PREPAREPARAM6<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).product` 设置给  `product_filter(产品过滤器).N_PRODUCT_ID_EQ`
2. 将`用户全局对象.srfpersonid` 设置给  `product_filter(产品过滤器).N_USER_ID_EQ`

#### 查询当前用户是否为产品成员 :id=DEDATASET2<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [产品成员(PRODUCT_MEMBER)](module/ProdMgmt/product_member.md) 数据集合 [数据集(DEFAULT)](module/ProdMgmt/product_member#数据集合) ，查询参数为`product_filter(产品过滤器)`

将执行结果返回给参数`members(成员)`

#### 只读权限 :id=RAWSFCODE4<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", true);
defaultObj.set("user_role", "reader");
```

#### 返回系统管理员权限 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`sys_admin` 设置给  `Default(传入变量).user_role`

#### 结束 :id=END2<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`

#### 普通用户 :id=RAWSFCODE6<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
defaultObj.set("user_role", "user");
```

#### 绑定用户数据到for_obj :id=PREPAREPARAM7<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`members(成员).0` 绑定给  `for_obj(循环临时变量)`

#### 管理员 :id=RAWSFCODE5<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[JavaScript]</b></p>

```javascript
var defaultObj = logic.getParam("default");
defaultObj.set("srfreadonly", false);
defaultObj.set("user_role", "admin");
```


### 连接条件说明
#### 非系统管理员(项目) :id=RAWSFCODE3-PREPAREPARAM2

`Default(传入变量).srfreadonly` ISNULL AND `Default(传入变量).project` ISNOTNULL
#### 不在项目中的成员 :id=DEDATASET3-RAWSFCODE1

`members(成员).size` EQ `0`
#### 当前用户为项目成员 :id=DEDATASET3-PREPAREPARAM5

`members(成员).size` EQ `1`
#### 非只读成员 :id=PREPAREPARAM5-RAWSFCODE2

`for_obj(循环临时变量).role_id` EQ `admin`
#### 只读成员 :id=PREPAREPARAM5-RAWSFCODE1

`for_obj(循环临时变量).role_id` EQ `reader`
#### 系统管理员 :id=RAWSFCODE3-PREPAREPARAM3

`Default(传入变量).srfreadonly` EQ `false`
#### 非系统管理员（产品） :id=RAWSFCODE3-PREPAREPARAM6

`Default(传入变量).product` ISNOTNULL AND `Default(传入变量).srfreadonly` ISNULL
#### 当前用户为产品成员 :id=DEDATASET2-PREPAREPARAM7

`members(成员).size` EQ `1`
#### 连接名称 :id=PREPAREPARAM7-RAWSFCODE5

`for_obj(循环临时变量).ROLE_ID` EQ `admin`
#### 连接名称 :id=PREPAREPARAM7-RAWSFCODE6

`for_obj(循环临时变量).ROLE_ID` EQ `user`
#### 只读成员 :id=PREPAREPARAM7-RAWSFCODE4

`for_obj(循环临时变量).ROLE_ID` EQ `reader`
#### 不在产品中的成员 :id=DEDATASET2-RAWSFCODE4

`members(成员).size` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[空间(SPACE)](module/Wiki/space.md)||
|循环临时变量|for_obj|数据对象|||
|成员|members|分页查询|||
|产品过滤器|product_filter|过滤器|||
|项目过滤器|project_filter|过滤器|||
|当前登录人|user|数据对象|||
