## 发布时间(END_AT) <!-- {docsify-ignore-all} -->

   

### 结束时间 :id=END_AT

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
state "[条件组]OR" as 0cfb8eb50b94f6c0c61a7d81ca5097c1 [[$./end_at#a0cfb8eb50b94f6c0c61a7d81ca5097c1 {"[条件组]OR"}]] {
state " " as 0cfb8eb50b94f6c0c61a7d81ca5097c1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 0445047af566df700400d30b87bc836f [[$./end_at#a0445047af566df700400d30b87bc836f {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as d3377632ae8a036b8572890ce1ae56e5 [[$./end_at#ad3377632ae8a036b8572890ce1ae56e5 {"[条件组]OR"}]] {
state " " as d3377632ae8a036b8572890ce1ae56e5_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as b27ee2d980f6917c6fbb43929c78ab92 [[$./end_at#ab27ee2d980f6917c6fbb43929c78ab92 {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as adc8626c97132f75eb9a6a99ce412dc9 [[$./end_at#aadc8626c97132f75eb9a6a99ce412dc9 {"[常规条件] 值为空(Nil)"}]]
state " " as d3377632ae8a036b8572890ce1ae56e5_exit  <<exitPoint>>
}
state " " as 0cfb8eb50b94f6c0c61a7d81ca5097c1_exit  <<exitPoint>>
}


start --> 0cfb8eb50b94f6c0c61a7d81ca5097c1_entry 
0cfb8eb50b94f6c0c61a7d81ca5097c1_entry --> 0445047af566df700400d30b87bc836f 
0445047af566df700400d30b87bc836f --> 0cfb8eb50b94f6c0c61a7d81ca5097c1_exit  : yes
0445047af566df700400d30b87bc836f -[#red]-> d3377632ae8a036b8572890ce1ae56e5_entry  : no

d3377632ae8a036b8572890ce1ae56e5_entry --> b27ee2d980f6917c6fbb43929c78ab92 
b27ee2d980f6917c6fbb43929c78ab92 --> d3377632ae8a036b8572890ce1ae56e5_exit  : yes
b27ee2d980f6917c6fbb43929c78ab92 -[#red]-> adc8626c97132f75eb9a6a99ce412dc9  : no

adc8626c97132f75eb9a6a99ce412dc9 --> d3377632ae8a036b8572890ce1ae56e5_exit  : yes
adc8626c97132f75eb9a6a99ce412dc9 -[#red]-> end  : no
d3377632ae8a036b8572890ce1ae56e5_exit --> 0cfb8eb50b94f6c0c61a7d81ca5097c1_exit 
0cfb8eb50b94f6c0c61a7d81ca5097c1_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a0445047af566df700400d30b87bc836f



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=aadc8626c97132f75eb9a6a99ce412dc9



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ab27ee2d980f6917c6fbb43929c78ab92



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







