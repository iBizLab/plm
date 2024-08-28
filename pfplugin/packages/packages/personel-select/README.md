# 人员选择器

该插件基于数据选择（下拉）增强，主要是用于在所有人员或当前登录者所属部门之中去选择负责人。**该插件隶属于编辑器自定义绘制插件（基于数据选择（下拉）进行的扩展）**


## 页面展示

![img](./public/assets/images/scene.png)


## 功能说明

### 支持人员与部门的切换

### 支持ac

### 支持单多选

### 支持默认选择当前操作者

- 当值类型为OBJECTS，并且配置了【user_id】和【user_name】的映射字段

- DEFAULTATNVALUE值是该插件应用于关注时的特殊配置


## 输入参数

| 参数              | 类型       | 默认值 | 说明                                                         |
| ----------------- | ---------- | ------ | ------------------------------------------------------------ |
| URL               | string     | ---    | 人员数据的请求URL，可通过配置${context.xxx}或者${data.xxx}来动态更新URL<br />示例：URL=projects/${context.project}/project_members/fetchdefault |
| DEPTURL           | string     | ---    | 部门人员数据的请求URL，可通过配置${context.xxx}或者${data.xxx}来动态更新URL<br />示例：DEPTURL=/users/fetchdefault |
| SRFNAVPARAM       |            | ---    | 支持配置导航参数，导航参数解析后会在人员或者部门人员请求时被携带上<br />示例：SRFNAVPARAM.n_department_id_eq=%srforgsectorid%,<br/> |
| SRFNAVCTX         |            | ---    | 支持配置导航上下文，导航上下文解析后会在人员或者部门人员的请求Url上进行匹配替换<br />示例：SRFNAVCTX.project=%project% |
| DEPTMAP           |            | ---    | 允许自定义部门人员的【id】和【name】的映射字段，如果未配置，则会直接使用【id】和【name】<br />示例：DEPTMAP={"id":"id","name":"display_name"} |
| USERMAP           |            | ---    | 允许自定义人员的【id】和【name】的映射字段，如果未配置，则会直接使用【id】和【name】<br />示例：USERMAP={"id":"user_id","name":"name"} |
| USERMETHOD        | post\| get | post   | 人员请求接口的请求方式<br />示例：USERMETHOD='post'          |
| DEPTMETHOD        | post\| get | post   | 部门人员请求接口的请求方式<br />示例：DEPTMETHOD='get'       |
| DEFAULTSELCURUSER | boolean    | false  | 为true时默认选中当前用户, 值类型为OBJECTS时生效              |
| VALUETYPE         | string     | ---    | 值类型                                                       |
| SELFFILLMAP       | OBJECT     | {}     | 当值类型为OBJECTS, 允许自定义选择人的【user_id】和【user_name】的映射字段  <br />示例：{"user_id":"user_id","user_name":"name"} |
| DEFAULTATNVALUE   | string     | ---    | 在人员或部门中选中当前操作者时，指定默认的关注类型。<br />   |
| ISADDSYMBOL       | boolean    | false  | 是否附加符号 多选且开启附加符号并且选择值为多个时，每个选择值前后都拼接上单引号后再抛出去 |
| ISSHOWTAB         | boolean    | true   | 是否显示人员、部门分类，不启用时，只启用并显示全部人员，对应的人员地址需要配置在URL上 |

### SELFFILLMAP

| 参数      | 类型   | 默认值 | 说明                                          |
| --------- | ------ | ------ | --------------------------------------------- |
| user_id   | string | ---    | 当值类型为OBJECTS, 回显时用于映射用户id属性   |
| user_name | string | ---    | 当值类型为OBJECTS, 回显时用于映射用户name属性 |

注：如果在表格里进行配置，需要开启行编辑， 同时如果只想表格列只读，需要在编辑器参数中设置readonly=true， 如果允许进行行编辑，需要配置对应的值项。

### 配置示例

```
URL=projects/${context.project}/project_members/fetchdefault
DEPTURL=/users/fetchdefault
SRFNAVPARAM.n_department_id_eq=%srforgsectorid%
SRFNAVPARAM.n_project_id_eq=%project%
SRFNAVCTX.project=%project%
USERMAP={"id":"user_id","name":"name"}
DEPTMAP={"id":"id","name":"display_name"}
USERMETHOD=post
DEPTMETHOD=get

readonly=true
```


## 附录

### 人员选择器插件

```json
[
  {
    "plugintype": "EDITOR_CUSTOMSTYLE",
    "rtobjectrepo": "@ibiz-template-plm/person-select@0.0.2-dev.132",
    "codename": "UsrPFPlugin0105821976",
    "plugintag": "PERSON_SELECT",
    "rtobjectmode": 2,
    "rtobjectname": "IBizPersonelSelect",
    "pssyspfpluginname": "人员选择"
  }
]
```

### 编辑器样式

```json
[
  {
    "codename": "PERSONEL_SELECT",
    "pssyspfpluginid": "UsrPFPlugin0105821976",
    "repdefault": 0,
    "validflag": 1,
    "pssyseditorstylename": "人员选择器",
    "pseditortypeid": "PICKEREX_TRIGGER"
  }
]
```
