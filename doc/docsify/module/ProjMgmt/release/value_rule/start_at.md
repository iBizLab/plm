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
state "[条件组]OR" as f976f881c58c31d0a3c01d0d2808bc10 [[$./start_at#af976f881c58c31d0a3c01d0d2808bc10 {"[条件组]OR"}]] {
state " " as f976f881c58c31d0a3c01d0d2808bc10_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as d899918022f00a7c34128e3b56a1978a [[$./start_at#ad899918022f00a7c34128e3b56a1978a {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as d4b5c3609df502e92c6db29ea2fa9897 [[$./start_at#ad4b5c3609df502e92c6db29ea2fa9897 {"[条件组]OR"}]] {
state " " as d4b5c3609df502e92c6db29ea2fa9897_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 2e2132678562756b345e28253735f7ec [[$./start_at#a2e2132678562756b345e28253735f7ec {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as dd11e4f1ed5b0aa9b30cfb66d3d94819 [[$./start_at#add11e4f1ed5b0aa9b30cfb66d3d94819 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as d4b5c3609df502e92c6db29ea2fa9897_exit  <<exitPoint>>
}
state " " as f976f881c58c31d0a3c01d0d2808bc10_exit  <<exitPoint>>
}


start --> f976f881c58c31d0a3c01d0d2808bc10_entry 
f976f881c58c31d0a3c01d0d2808bc10_entry --> d899918022f00a7c34128e3b56a1978a 
d899918022f00a7c34128e3b56a1978a --> f976f881c58c31d0a3c01d0d2808bc10_exit  : yes
d899918022f00a7c34128e3b56a1978a -[#red]-> d4b5c3609df502e92c6db29ea2fa9897_entry  : no

d4b5c3609df502e92c6db29ea2fa9897_entry --> 2e2132678562756b345e28253735f7ec 
2e2132678562756b345e28253735f7ec --> d4b5c3609df502e92c6db29ea2fa9897_exit  : yes
2e2132678562756b345e28253735f7ec -[#red]-> dd11e4f1ed5b0aa9b30cfb66d3d94819  : no

dd11e4f1ed5b0aa9b30cfb66d3d94819 --> d4b5c3609df502e92c6db29ea2fa9897_exit  : yes
dd11e4f1ed5b0aa9b30cfb66d3d94819 -[#red]-> end  : no
d4b5c3609df502e92c6db29ea2fa9897_exit --> f976f881c58c31d0a3c01d0d2808bc10_exit 
f976f881c58c31d0a3c01d0d2808bc10_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=ad899918022f00a7c34128e3b56a1978a



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a2e2132678562756b345e28253735f7ec



`END_AT(发布时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=add11e4f1ed5b0aa9b30cfb66d3d94819



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间







