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
state "[条件组]OR" as bf30967062dc91c56dd06799b8e492e3 [[$./end_at#abf30967062dc91c56dd06799b8e492e3 {"[条件组]OR"}]] {
state " " as bf30967062dc91c56dd06799b8e492e3_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 07755696280011bd3362fce7c6230d1c [[$./end_at#a07755696280011bd3362fce7c6230d1c {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as ce1ca9d600bb4baa4ccf0e8dd99cdea5 [[$./end_at#ace1ca9d600bb4baa4ccf0e8dd99cdea5 {"[条件组]OR"}]] {
state " " as ce1ca9d600bb4baa4ccf0e8dd99cdea5_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 5f5d5e0c01181111dc57eab499ff1caa [[$./end_at#a5f5d5e0c01181111dc57eab499ff1caa {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 3d41dbf134ff45fbcd80e52c5d28c941 [[$./end_at#a3d41dbf134ff45fbcd80e52c5d28c941 {"[常规条件] 值为空(Nil)"}]]
state " " as ce1ca9d600bb4baa4ccf0e8dd99cdea5_exit  <<exitPoint>>
}
state " " as bf30967062dc91c56dd06799b8e492e3_exit  <<exitPoint>>
}


start --> bf30967062dc91c56dd06799b8e492e3_entry 
bf30967062dc91c56dd06799b8e492e3_entry --> 07755696280011bd3362fce7c6230d1c 
07755696280011bd3362fce7c6230d1c --> bf30967062dc91c56dd06799b8e492e3_exit  : yes
07755696280011bd3362fce7c6230d1c -[#red]-> ce1ca9d600bb4baa4ccf0e8dd99cdea5_entry  : no

ce1ca9d600bb4baa4ccf0e8dd99cdea5_entry --> 5f5d5e0c01181111dc57eab499ff1caa 
5f5d5e0c01181111dc57eab499ff1caa --> ce1ca9d600bb4baa4ccf0e8dd99cdea5_exit  : yes
5f5d5e0c01181111dc57eab499ff1caa -[#red]-> 3d41dbf134ff45fbcd80e52c5d28c941  : no

3d41dbf134ff45fbcd80e52c5d28c941 --> ce1ca9d600bb4baa4ccf0e8dd99cdea5_exit  : yes
3d41dbf134ff45fbcd80e52c5d28c941 -[#red]-> end  : no
ce1ca9d600bb4baa4ccf0e8dd99cdea5_exit --> bf30967062dc91c56dd06799b8e492e3_exit 
bf30967062dc91c56dd06799b8e492e3_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a3d41dbf134ff45fbcd80e52c5d28c941



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a07755696280011bd3362fce7c6230d1c



`END_AT(发布时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a5f5d5e0c01181111dc57eab499ff1caa



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间







