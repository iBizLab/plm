## 校验共享访问密码 <!-- {docsify-ignore-all} -->

   校验共享访问密码

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
state "开始" as Begin <<start>> [[$./access_password#begin {"开始"}]]
state "获取共享空间" as DEACTION1  [[$./access_password#deaction1 {"获取共享空间"}]]
state "填充校验标识" as PREPAREPARAM3  [[$./access_password#prepareparam3 {"填充校验标识"}]]
state "查询共享空间密码信息" as RAWSQLCALL1  [[$./access_password#rawsqlcall1 {"查询共享空间密码信息"}]]
state "解密密码信息" as DELOGIC1  [[$./access_password#delogic1 {"解密密码信息"}]]
state "校验链接是否有效" as RAWSFCODE1  [[$./access_password#rawsfcode1 {"校验链接是否有效"}]]
state "密码正确" as PREPAREPARAM1  [[$./access_password#prepareparam1 {"密码正确"}]]
state "密码错误" as PREPAREPARAM2  [[$./access_password#prepareparam2 {"密码错误"}]]
state "结束" as END1 <<end>> [[$./access_password#end1 {"结束"}]]


Begin --> PREPAREPARAM3 : [[$./access_password#begin-prepareparam3{已输入密码} 已输入密码]]
PREPAREPARAM3 --> DEACTION1
DEACTION1 --> RAWSQLCALL1
RAWSQLCALL1 --> DELOGIC1
DELOGIC1 --> RAWSFCODE1
RAWSFCODE1 --> PREPAREPARAM1 : [[$./access_password#rawsfcode1-prepareparam1{密码正确} 密码正确]]
PREPAREPARAM1 --> END1
RAWSFCODE1 --> PREPAREPARAM2 : [[$./access_password#rawsfcode1-prepareparam2{密码错误} 密码错误]]
PREPAREPARAM2 --> END1
RAWSFCODE1 --> END1 : [[$./access_password#rawsfcode1-end1{链接已失效} 链接已失效]]


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 填充校验标识 :id=PREPAREPARAM3<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).ID(标识)` 设置给  `check_space(校验空间).ID(标识)`

#### 获取共享空间 :id=DEACTION1<sup class="footnote-symbol"> <font color=gray size=1>[实体行为]</font></sup>



调用实体 [共享空间(SHARED_SPACE)](module/Wiki/shared_space.md) 行为 [Get](module/Wiki/shared_space#行为) ，行为参数为`check_space(校验空间)`

将执行结果返回给参数`check_space(校验空间)`

#### 查询共享空间密码信息 :id=RAWSQLCALL1<sup class="footnote-symbol"> <font color=gray size=1>[直接SQL调用]</font></sup>



<p class="panel-title"><b>执行sql语句</b></p>

```sql
select `ACCESS_PASSWORD` from `space` where id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`check_space(校验空间)`，并将执行sql结果赋值给参数`check_space(校验空间)`

#### 解密密码信息 :id=DELOGIC1<sup class="footnote-symbol"> <font color=gray size=1>[实体逻辑]</font></sup>



调用实体 [共享空间(SHARED_SPACE)](module/Wiki/shared_space.md) 处理逻辑 [访问密码解密]((module/Wiki/shared_space/logic/decrypt_access_key.md)) ，行为参数为`check_space(校验空间)`
将执行结果返回给参数`check_space(校验空间)`

#### 校验链接是否有效 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('default').getReal()
def check_space = logic.param('check_space').getReal()
def expiration_date = check_space.get('expiration_date')
_default.set('effective', 1)
_default.set('check_access_password', 0)
if(expiration_date != null){
    java.time.LocalDateTime expirationDateTime = expiration_date.toLocalDateTime();
    // 获取当前时间的 java.time.LocalDateTime 对象
    def currentDateTime = java.time.LocalDateTime.now()
    // 将 LocalDateTime 转换为 LocalDate
    def currentDate = currentDateTime.toLocalDate()
    def expirationDate = expirationDateTime.toLocalDate()
    if (expirationDate.isBefore(currentDate)) {
        // 超过有效期
        _default.set('effective', 0)
    }
}
```

#### 密码正确 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`1` 设置给  `Default(传入变量).check_access_password`

#### 密码错误 :id=PREPAREPARAM2<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`0` 设置给  `Default(传入变量).check_access_password`

#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `Default(传入变量)`


### 连接条件说明
#### 已输入密码 :id=Begin-PREPAREPARAM3

`Default(传入变量).ACCESS_PASSWORD(访问密码)` ISNOTNULL
#### 密码正确 :id=RAWSFCODE1-PREPAREPARAM1

 AND `Default(传入变量).effective` EQ `1`
#### 密码错误 :id=RAWSFCODE1-PREPAREPARAM2

 AND `Default(传入变量).effective` EQ `1`
#### 链接已失效 :id=RAWSFCODE1-END1

`Default(传入变量).effective` EQ `0`


### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[共享空间(SHARED_SPACE)](module/Wiki/shared_space.md)||
|校验空间|check_space|数据对象|[共享空间(SHARED_SPACE)](module/Wiki/shared_space.md)||
