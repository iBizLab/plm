# 核心产品功能(PSCorePrdFunc)  <!-- {docsify-ignore-all} -->


插件管理


## 属性
|    中文名col150 | 属性名称col200           | 类型col200     | 长度col100    |允许为空col100    |  备注col500  |
| --------   |------------| -----  | -----  | :----: | -------- |
|图标路径|AVATARURL|文本，可指定长度|500|是||
|建立时间|CREATEDATE|日期时间型|8|否||
|建立人|CREATEMAN|文本，可指定长度|60|否||
|当前版本|CURRENTVERSION|文本，可指定长度|100|是||
|完全名称|FULLNAME|文本，可指定长度|1000|是||
|完全路径|FULLPATH|文本，可指定长度|1000|是||
|功能编号|FUNCSN|文本，可指定长度|100|是||
|功能状态|FUNCSTATE|[文本，可指定长度](index/dictionary_index#product_func_state "核心产品功能状态")|100|否||
|功能标记|FUNCTAG|文本，可指定长度|200|是||
|功能标记2|FUNCTAG2|文本，可指定长度|200|是||
|功能类型|FUNCTYPE|文本，可指定长度|50|是||
|功能描述链接|FUNCURL|文本，可指定长度|500|是||
|Http仓库地址|HTTPURLTOREPO|长文本，长度1000|1000|是||
|备注|MEMO|长文本，长度1000|4000|是||
|排序值|ORDERVALUE|整型||是||
|路径|PATH|文本，可指定长度|200|是||
|核心产品功能标识<sup class="footnote-symbol"><font color=orange>[PK]</font></sup>|PSCOREPRDFUNCID|全局唯一标识，文本类型，用户不可见|100|否||
|核心产品功能名称|PSCOREPRDFUNCNAME|文本，可指定长度|200|是||
|核心产品|PSCOREPRDID|文本，可指定长度|100|是||
|核心产品|PSCOREPRDNAME|文本，可指定长度|100|否||
|更新时间|UPDATEDATE|日期时间型|8|否||
|更新人|UPDATEMAN|文本，可指定长度|60|否||


## 行为
| 中文名col200    | 代码名col150    | 类型col150    | 事务col100   | 批处理col100   | 附加操作col100  | 插件col150    |  备注col300  |
| -------- |---------- |----------- |:----:|:----:|---------| ----- | ----- |
|CheckKey|CheckKey|内置方法|默认|不支持||||
|Create|Create|内置方法|默认|不支持||||
|Get|Get|内置方法|默认|不支持||||
|GetDraft|GetDraft|内置方法|默认|不支持||||
|安装|install|用户自定义|默认|不支持||||
|Remove|Remove|内置方法|默认|支持||||
|Save|Save|内置方法|默认|不支持||||
|卸载|uninstall|用户自定义|默认|不支持||||
|Update|Update|内置方法|默认|不支持||||

## 主状态控制

<p class="panel-title"><b>控制属性</b></p>

* `功能状态(FUNCSTATE)` [核心产品功能状态](index/dictionary_index#product_func_state "核心产品功能状态")




<p class="panel-title"><b>操作标识分布</b></p>
<br>
<table>
  <tr>
    <th>操作标识col350</th>
    <th>未安装col150</th>
    <th>已安装col150</th>
    <th>已禁用col150</th>
    <th>备注col600</th>
  </tr>
  <tr>
    <td>删除(DELETE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>启用(ENABLE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>建立(CREATE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>更新(UPDATE)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>
  <tr>
    <td>禁用(DISABLE)</td>
    <td align="center"></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"></td>
    <td></td>
  </tr>
  <tr>
    <td>读取(READ)</td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td align="center"><i class="fa fa-check"></i></td>
    <td></td>
  </tr>

</table>


## 数据查询
| 中文名col200    | 代码名col150    | 默认查询col100 | 权限使用col100 | 自定义SQLcol100 |  备注col600|
| --------  | --------   | :----:  |:----:  | :----:  |----- |
|[数据查询(DEFAULT)](module/extension/PSCorePrdFunc/query/Default)|DEFAULT|是|否 |否 ||
|[默认（全部数据）(VIEW)](module/extension/PSCorePrdFunc/query/View)|VIEW|否|否 |否 ||

## 数据集合
| 中文名col200  | 代码名col150  | 类型col100 | 默认集合col100 |   插件col200|   备注col500|
| --------  | --------   | :----:   | :----:   | ----- |----- |
|[数据集(DEFAULT)](module/extension/PSCorePrdFunc/dataset/Default)|DEFAULT|数据查询|是|||

## 搜索模式
|   搜索表达式col350   |    属性名col200    |    搜索模式col200        |备注col500  |
| -------- |------------|------------|------|
|N_FUNCSTATE_NOTEQ|功能状态|NOTEQ||
|N_FUNCSTATE_EQ|功能状态|EQ||
|N_PSCOREPRDFUNCID_EQ|核心产品功能标识|EQ||
|N_PSCOREPRDFUNCNAME_LIKE|核心产品功能名称|LIKE||
|N_PSCOREPRDID_EQ|核心产品|EQ||

<div style="display: block; overflow: hidden; position: fixed; top: 140px; right: 100px;">

##### 导航
<el-anchor >
<el-anchor-link :href="`#/module/extension/PSCorePrdFunc?id=属性`">
  属性
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSCorePrdFunc?id=行为`">
  行为
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSCorePrdFunc?id=主状态控制`">
  主状态控制
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSCorePrdFunc?id=数据查询`">
  数据查询
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSCorePrdFunc?id=数据集合`">
  数据集合
</el-anchor-link>
<el-anchor-link :href="`#/module/extension/PSCorePrdFunc?id=搜索模式`">
  搜索模式
</el-anchor-link>
</el-anchor>
</div>

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {



      }
    },
    methods: {
    }
  }).use(ElementPlus).mount('#app')
</script>