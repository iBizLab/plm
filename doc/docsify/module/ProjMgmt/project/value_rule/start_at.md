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
state "[条件组]OR" as 244bf056bd33e88cabd8a578711092f9 [[$./start_at#a244bf056bd33e88cabd8a578711092f9 {"[条件组]OR"}]] {
state " " as 244bf056bd33e88cabd8a578711092f9_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as ea76d1c39a0ee66f8969197a5ed95f30 [[$./start_at#aea76d1c39a0ee66f8969197a5ed95f30 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 9b0b262bb50da67c4d6fe30f4801402c [[$./start_at#a9b0b262bb50da67c4d6fe30f4801402c {"[条件组]OR"}]] {
state " " as 9b0b262bb50da67c4d6fe30f4801402c_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 3dca7a19f674cd9244f983ecc790c1f7 [[$./start_at#a3dca7a19f674cd9244f983ecc790c1f7 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 6a34d259fe777768be6a371dc9f79a22 [[$./start_at#a6a34d259fe777768be6a371dc9f79a22 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 9b0b262bb50da67c4d6fe30f4801402c_exit  <<exitPoint>>
}
state " " as 244bf056bd33e88cabd8a578711092f9_exit  <<exitPoint>>
}


start --> 244bf056bd33e88cabd8a578711092f9_entry 
244bf056bd33e88cabd8a578711092f9_entry --> ea76d1c39a0ee66f8969197a5ed95f30 
ea76d1c39a0ee66f8969197a5ed95f30 --> 244bf056bd33e88cabd8a578711092f9_exit  : yes
ea76d1c39a0ee66f8969197a5ed95f30 -[#red]-> 9b0b262bb50da67c4d6fe30f4801402c_entry  : no

9b0b262bb50da67c4d6fe30f4801402c_entry --> 3dca7a19f674cd9244f983ecc790c1f7 
3dca7a19f674cd9244f983ecc790c1f7 --> 9b0b262bb50da67c4d6fe30f4801402c_exit  : yes
3dca7a19f674cd9244f983ecc790c1f7 -[#red]-> 6a34d259fe777768be6a371dc9f79a22  : no

6a34d259fe777768be6a371dc9f79a22 --> 9b0b262bb50da67c4d6fe30f4801402c_exit  : yes
6a34d259fe777768be6a371dc9f79a22 -[#red]-> end  : no
9b0b262bb50da67c4d6fe30f4801402c_exit --> 244bf056bd33e88cabd8a578711092f9_exit 
244bf056bd33e88cabd8a578711092f9_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a3dca7a19f674cd9244f983ecc790c1f7



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=aea76d1c39a0ee66f8969197a5ed95f30



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a6a34d259fe777768be6a371dc9f79a22



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间







