## 证件号码(CERTCODE) <!-- {docsify-ignore-all} -->

   

### 默认规则 :id=Default

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
state "默认字符串长度" as 18b2c00a47f9b7b0bcc7c974078c6e54 [[$./CertCode#a18b2c00a47f9b7b0bcc7c974078c6e54 {"默认字符串长度"}]]


start --> 18b2c00a47f9b7b0bcc7c974078c6e54 
18b2c00a47f9b7b0bcc7c974078c6e54 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a18b2c00a47f9b7b0bcc7c974078c6e54


*关键条件*


`CERTCODE(证件号码)` 属性长度在区间 `(0 , 100]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[100]







