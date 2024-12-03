## 获取需求中客户信息 <!-- {docsify-ignore-all} -->

   获取需求中客户信息

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
state "开始" as Begin <<start>> [[$./get_idea_customer_info#begin {"开始"}]]
state "结束" as END1 <<end>> [[$./get_idea_customer_info#end1 {"结束"}]]
state "设置过滤器" as PREPAREPARAM1  [[$./get_idea_customer_info#prepareparam1 {"设置过滤器"}]]
state "获取需求关联的客户" as DEDATASET1  [[$./get_idea_customer_info#dedataset1 {"获取需求关联的客户"}]]
state "计算分数" as RAWSFCODE1  [[$./get_idea_customer_info#rawsfcode1 {"计算分数"}]]


Begin --> PREPAREPARAM1
PREPAREPARAM1 --> DEDATASET1
DEDATASET1 --> RAWSFCODE1
RAWSFCODE1 --> END1


@enduml
```


### 处理步骤说明

#### 开始 :id=Begin<sup class="footnote-symbol"> <font color=gray size=1>[开始]</font></sup>



*- N/A*
#### 结束 :id=END1<sup class="footnote-symbol"> <font color=gray size=1>[结束]</font></sup>



返回 `result(返回结果)`

#### 设置过滤器 :id=PREPAREPARAM1<sup class="footnote-symbol"> <font color=gray size=1>[准备参数]</font></sup>



1. 将`Default(传入变量).idea` 设置给  `filter(过滤器).N_PRINCIPAL_ID_EQ`
2. 将`customer` 设置给  `filter(过滤器).N_TARGET_TYPE_EQ`

#### 获取需求关联的客户 :id=DEDATASET1<sup class="footnote-symbol"> <font color=gray size=1>[实体数据集]</font></sup>



调用实体 [关联(RELATION)](module/Base/relation.md) 数据集合 [全部数据(all)](module/Base/relation#数据集合) ，查询参数为`filter(过滤器)`

将执行结果返回给参数`relation_page(关系分页结果)`

#### 计算分数 :id=RAWSFCODE1<sup class="footnote-symbol"> <font color=gray size=1>[直接后台代码]</font></sup>



<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def list = logic.param("relation_page").getReal().content
def result = logic.param("result").getReal()
def score = 0
def customer_num = list.size()
def very_important = 0
def very_important_precent = 0
def important = 0
def important_precent = 0
def normal = 0
def normal_precent = 0
def unknown = 0
def unknown_precent = 0
def not_important = 0
def not_important_precent = 0
def score_precent = 0

list.each{ item -> 
    sys.info('level', item.get("level"))
    switch(item.get("level")) {
        case '10':
            score += 3
            very_important++
            break
        case '20':
            score += 2
            important++
            break
        case '30':
            score += 1
            normal++
            break
        case '40':
            score += 0
            not_important++
            break
        case '50':
            score += 1
            unknown++
            break
        default:
            score += 0;
    }
}

if (customer_num != 0) {
    very_important_precent = very_important / customer_num
    important_precent = important / customer_num
    normal_precent = normal / customer_num
    unknown_precent = unknown / customer_num
    not_important_precent = not_important / customer_num
    score_precent = score / (customer_num * 3)
}

result.set("score", score + "分")
result.set("customer_num", customer_num)
result.set("very_important", very_important)
result.set("important", important)
result.set("normal", normal)
result.set("unknown", unknown)
result.set("not_important", not_important)
result.set("very_important_precent", very_important_precent)
result.set("important_precent", important_precent)
result.set("normal_precent", normal_precent)
result.set("unknown_precent", unknown_precent)
result.set("not_important_precent", not_important_precent)
result.set("score_precent", score_precent)
```



### 实体逻辑参数

|    中文名   |    代码名    |  数据类型    |  实体   |备注 |
| --------| --------| -------- | -------- | --------   |
|传入变量(<i class="fa fa-check"/></i>)|Default|数据对象|[客户(CUSTOMER)](module/ProdMgmt/customer.md)||
|过滤器|filter|过滤器|||
|关系分页结果|relation_page|分页查询|||
|返回结果|result|数据对象|[客户(CUSTOMER)](module/ProdMgmt/customer.md)||
