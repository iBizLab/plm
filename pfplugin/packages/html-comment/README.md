# 评论富文本

评论富文本插件基于 html 富文本增强，主要功能有折叠展开、@提及用户、#提及工作项、上传附件、代码段、页面等，**该插件隶属于编辑器自定义绘制插件（基于 HTML 编辑器进行的扩展）**。

![image](./public/assets/images/scene.png)

## 功能说明

### 折叠功能

- 默认状态下，隐藏富文本工具栏，且高度设置为编辑器参数 MINHEIGHT 对应的值。

- 当输入框 focus 时，展开富文本，显示工具栏，高度为编辑器参数 MAXHEIGHT 对应的值。

- 当输入框 blur 且输入框无值时，再次折叠输入框。

![image](./public/assets/images/collapse.png)

### 编辑、回复评论功能

- 插件控制器暴露 setReply 方法，通过该方法设置回复评论数据

- 插件控制器暴露 setValue 方法，通过该方法设置富文本内容

- 插件控制器暴露 removeReply、clear 方法，对应清空回复与清空所有

  ![image](./public/assets/images/reply.png)

### 图片预览功能

- 点击图片将打开图片的预览弹框，同时支持放大缩小、旋转等预览功能

  ![image](./public/assets/images/preview.png)

### 默认模式

- 识别 MAXHEIGHT 参数，内容高度超过它时出现展开更多（收起更多按钮）按钮

![image](./public/assets/images/default.png)

### 提及用户功能

| 属性名       | 描述                             | 类型       | 默认值                                 |
| ------------ | -------------------------------- | ---------- | -------------------------------------- |
| USERURL      | 请求用户列表 url                 | string     |                                        |
| USERFIELDMAP | 用户属性映射表，用于转换用户数据 | Object     | {id: 'id', name:'name'}                |
| USERMETHOD   | 请求用户数据方法                 | post / get | post                                   |
| USERSCRIPT   | 选中提及用户时编辑器抛出的值格式 | string     | @{userid=${data.id},name=${data.name}} |
| USERINSCRIPT | 解析提及用户数据格式脚本         | string     |                                        |

- 输入@或点击@菜单时弹出用户列表（通过添加注册 mention 节点支持，用户列表数据根据 USERURL、USERFIELDMAP、USERMETHOD 支持）
- 支持 ac 过滤
- 支持上下选择，回车选中
- 支持自定义数据格式（选中数据后根据 USERSCRIPT 来解析数据并返回最终数据格式）
- 支持编辑评论时回显（根据 USERINSCRIPT 参数来对数据进行逆解析，转换为富文本能识别的格式并绘制）

![image](./public/assets/images/mention.png)

### 提及工作项

| 属性名        | 描述                                 | 类型       | 默认值                                                                              |
| ------------- | ------------------------------------ | ---------- | ----------------------------------------------------------------------------------- |
| QUOTEURL      | 请求工作项列表 url                   | string     |                                                                                     |
| QUOTEFIELDMAP | 工作项属性映射表，用于转换工作项数据 | Object     | {id: 'id', name:'name'}                                                             |
| QUOTEMETHOD   | 请求用户数据方法                     | post / get | post                                                                                |
| QUOTEPARAMS   | 请求参数                             | Object     |                                                                                     |
| QUOTESCRIPT   | 选中提及工作项时编辑器抛出的值格式   | string     | \#{id=${data.id},name=${data.name},identifier=${data.identifier},icon=${data.icon}} |
| QUOTEINSCRIPT | 解析提及工作项数据格式脚本           | string     |                                                                                     |

- 输入#或点击#菜单时弹出用户列表（通过添加注册 marker 节点支持，工作项列表数据根据 QUOTEURL、QUOTEFIELDMAP、QUOTEMETHOD、QUOTEPARAMS 支持）
- 支持 ac 过滤
- 支持上下选择，回车选中
- 支持自定义数据格式（选中数据后根据 QUOTESCRIPT 来解析数据并返回最终数据格式）
- 支持编辑评论时回显（根据 QUOTEINSCRIPT 参数来对数据进行逆解析，转换为富文本能识别的格式并绘制）

![image](./public/assets/images/marker.png)

### 上传文件功能

暂未支持

### 上传代码段

暂未支持

### 上传页面

暂未支持

## 输入参数

| 属性名      | 描述                                               | 类型            | 默认值  |
| ----------- | -------------------------------------------------- | --------------- | ------- |
| MINHEIGHT   | 折叠时的输入框高度                                 | number          | 48      |
| MAXHEIGHT   | 展开时的富文本高度                                 | number          | 315     |
| MODE        | 模式，default 时为富文本样式，comment 时为评论模式 | comment/default | comment |
| REPLYSCRIPT | 回复脚本，回复的项绘制器脚本代码                   | string          |         |

## 基本使用

在具体项目中，先通过模型导入前端界面插件和编辑器插件，然后在具体的视图配置动态文本，然后将其编辑器类型改为 HTML 编辑框，编辑器类型选择“HTML（评论）”

## 附录：

### 编辑器插件

```json
[
  {
    "codename": "COMMENT_PROJECT",
    "pssyspfpluginid": "UsrPFPlugin0104147761",
    "repdefault": 0,
    "validflag": 1,
    "pssyseditorstylename": "HTML（评论）（项目）",
    "ctrlparams": "USERURL=`projects/${context.project}/project_members/fetchdefault`\nSRFNAVPARAM.n_department_id_eq=%srforgsectorid%\nUSERFIELDMAP={\"id\":\"user_id\",\"name\":\"name\"}",
    "pseditortypeid": "HTMLEDITOR"
  }
]
```

### 前端界面插件

```
[
  {
    "plugintype": "EDITOR_CUSTOMSTYLE",
    "rtobjectrepo": "@ibiz-template-plm/html-comment@0.0.2-dev.26",
    "codename": "UsrPFPlugin0104147761",
    "plugintag": "COMMENT",
    "rtobjectmode": 2,
    "rtobjectname": "IBizHtmlComment",
    "pssyspfpluginname": "HTML（评论）"
  }
]
```
