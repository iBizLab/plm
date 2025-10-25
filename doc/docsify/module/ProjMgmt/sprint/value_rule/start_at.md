## 开始时间(START_AT) <!-- {docsify-ignore-all} -->

   

### 开始时间 :id=START_AT

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

state "start" as start  <<start>>
state "end" as end <<end>>
state "[条件组]OR" as 1dc4317fee03e220cc571b093b00b211 [[$./start_at#a1dc4317fee03e220cc571b093b00b211 {"[条件组]OR"}]] {
state " " as 1dc4317fee03e220cc571b093b00b211_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 82d386d3451c0a11a26822b79adf28cb [[$./start_at#a82d386d3451c0a11a26822b79adf28cb {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 27ad31c495d02545d0f4e1c0242f2a61 [[$./start_at#a27ad31c495d02545d0f4e1c0242f2a61 {"[条件组]OR"}]] {
state " " as 27ad31c495d02545d0f4e1c0242f2a61_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as e17dbe244473d3bd2e1841d7bd83ffad [[$./start_at#ae17dbe244473d3bd2e1841d7bd83ffad {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as bbb1c9ac31ea755d421a74a6a3c06eb6 [[$./start_at#abbb1c9ac31ea755d421a74a6a3c06eb6 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 27ad31c495d02545d0f4e1c0242f2a61_exit  <<exitPoint>>
}
state " " as 1dc4317fee03e220cc571b093b00b211_exit  <<exitPoint>>
}


start --> 1dc4317fee03e220cc571b093b00b211_entry 
1dc4317fee03e220cc571b093b00b211_entry --> 82d386d3451c0a11a26822b79adf28cb 
82d386d3451c0a11a26822b79adf28cb --> 1dc4317fee03e220cc571b093b00b211_exit  : yes
82d386d3451c0a11a26822b79adf28cb -[#red]-> 27ad31c495d02545d0f4e1c0242f2a61_entry  : no

27ad31c495d02545d0f4e1c0242f2a61_entry --> e17dbe244473d3bd2e1841d7bd83ffad 
e17dbe244473d3bd2e1841d7bd83ffad --> 27ad31c495d02545d0f4e1c0242f2a61_exit  : yes
e17dbe244473d3bd2e1841d7bd83ffad -[#red]-> bbb1c9ac31ea755d421a74a6a3c06eb6  : no

bbb1c9ac31ea755d421a74a6a3c06eb6 --> 27ad31c495d02545d0f4e1c0242f2a61_exit  : yes
bbb1c9ac31ea755d421a74a6a3c06eb6 -[#red]-> end  : no
27ad31c495d02545d0f4e1c0242f2a61_exit --> 1dc4317fee03e220cc571b093b00b211_exit 
1dc4317fee03e220cc571b093b00b211_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ae17dbe244473d3bd2e1841d7bd83ffad



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a82d386d3451c0a11a26822b79adf28cb



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=abbb1c9ac31ea755d421a74a6a3c06eb6



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







