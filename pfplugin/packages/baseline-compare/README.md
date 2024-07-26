# 基线比对插件

该插件基于表格部件进行扩展，使用两个table用来比较指定两个版本之间数据的差异变化情况。

## 主要功能

使用该插件需要配置数据接口地址，加载对比下拉列表数据，关闭表格的默认加载，初始加载由下拉选择器控制，表格数据将会根据版本下拉框的值变化而刷新。

## 页面展示

![image-20240726120504891](public/assets/images/scene.png)



## 输入参数

| 参数            | 值                                                   | 说明                 |
| --------------- | ---------------------------------------------------- | -------------------- |
| requestUrl      | projects/${context.project}/baselines/fetch_baseline | 下拉版本数据请求地址 |
| requestMethod   | post                                                 | 请求方式             |
| responseMap     | {"id":"id","name":"name"}                            | UI转化               |
| n_owner_id_eq   | ${context.project}                                   | 请求数据，视图上下文 |
| n_owner_type_eq | 'project'                                            | 请求数据，视图参数   |

