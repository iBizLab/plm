# 报表详情插件

该插件基于图表部件增强，主要功能是在显示配置的图表的基础上，同时绘制一个简单表格去辅助图表进行数据展示。

## 页面示例：

![image-20240326194229054](./public/assets/images/scene.png)

## 主要功能

**动态序列：**

 允许设置图表序列为动态序列，可以根据搜索项的值去动态显示每一个序列对应表示的图表。

**绘制表格：**

* 自定义表格列：在使用动态序列时，每个序列可以定义自己对应的表格，也可以统一在图表自定义参数里进行配置，使用同一个表格；在使用静态序列时，表格列只允许在图表自定义参数里进行配置。

* 根据序列绘制表格：当序列都为静态序列时，如果此时这些序列配置了同一分组模式，那么此时需要在图表上配置参数【gridHeaders】,配置格式如下：

  `EC.gridHeaders=[{"id":"srfgroup","name":"日期"}]`

  配置了此参数，那么表格就将以配置的序列作为表格的列来绘制。

## 输入参数

| 输入参数        | 类型     | 默认值 | 说明                                     |
| --------------- | -------- | ------ | ---------------------------------------- |
| gridHeaders     | JSON数组 |        | 这个参数必须配置，值为一个JSON数组。     |
| showGridCaption | boolean  | false  | 是否显示表格控制，设置为true后可收缩表格 |
| isDynamicChart  | boolean  | false  | 表示当前序列是否为动态序列               |

**注：**当图表中配置了序列为动态序列时,那么图表中的动态序列就会随搜索的状态变化而切换显示，序列根据配置的序列名称与搜索表单项中的groupcond的值一一对应，当启用动态序列时，可在序列里面配置参数【gridHeaders】,那么当切换到对应的动态序列时，表格就展示为当前序列配置的表格。

表格的列可以自定义，JSON数组的顺序就是表格列的顺序（从左至右），在表格中，默认支持了百分比（id为【srfpercent】,使用返回数据中的count进行计算）,当图表所有序列都为静态序列时，表格只允许在图表自定义参数上进行配置，此时插件支持属性【srfgroup】,如果所有序列都配置了同一分组模式时，即可将每一个序列作为表格的一个列进行绘制。

配置示例

```
EC.gridHeaders=[{"id":"filter_type","name":"状态"},{"id":"count","name":"需求数"},{"id":"srfpercent","name":"百分比"}]
EC.showGridCaption=true
```



## 附录

### 插件模型

```
[
  {
    "plugintype": "CHART_RENDER",
    "rtobjectrepo": "@ibiz-template-plm/chart-grid@0.0.3-dev.36",
    "codename": "UsrPFPlugin0318166417",
    "plugintag": "CHART_GRID",
    "rtobjectmode": 2,
    "rtobjectname": "ChartGrid",
    "pssyspfpluginname": "图表-报表详情插件"
  }
]
```