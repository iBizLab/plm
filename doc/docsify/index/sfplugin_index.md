# 服务插件 <!-- {docsify-ignore-all} -->

|  对象      |  实体  |  类型  | 插件  |备注|
|  --------  | ----- | -----    |-----    |----    |
|@内容||PSSysTranslatorImpl|[SysAtContentTranslatorRuntime](#UsrSFPlugin0201416283)||
|结束时间边界值||PSSysTranslatorImpl|[SysEndOfDayTranslatorRuntime](#UsrSFPlugin0401275996)||
|工作项通知模板(运行时)||PSSysMsgTemplImpl|[[消息模板]工作项通知模板(运行时)](#UsrSFPlugin0204714710)||
|提交版本(COMMIT)|[版本（temp）(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[CommitVersionDEActionRuntime](#UsrSFPlugin0324806543)||
|恢复指定版本(RESTORE)|[版本（temp）(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[RestoreVersionDEActionRuntime](#UsrSFPlugin0324899435)||
|需求树表查询(requirement_tree)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)||
|树状或平铺表格数据查询(tree_tile_grid_query)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)||

### SysAtContentTranslatorRuntime :id=UsrSFPlugin0201416283


```net.ibizsys.central.res.SysAtContentTranslatorRuntime```

```groovy
null
```
### [消息模板]工作项通知模板(运行时) :id=UsrSFPlugin0204714710


```cn.ibizlab.plm.runtime.msg.WorkItemNotifyMsgTemplRuntime```

```groovy
package cn.ibizlab.plm.runtime.msg

/**
 * 工作项消息模板附加参数
 *
 */
class WorkItemNotifyMsgTemplRuntime extends net.ibizsys.central.msg.SysMsgTemplRuntime {


    @Override
    protected String getTemplContent(String strType, Object data, Map<String, Object> extParams) {
        //额外数据参数扩展
        if (extParams == null) {
            extParams = new HashMap<>()
        }
        extParams.put("param", "param")
        extParams.put("param2", new ArrayList())

        //获取 消息模板 相关配置信息
//        this.getPSSysMsgTempl().getName()
//        this.getPSSysMsgTempl().getUserTag()
//        this.getPSSysMsgTempl().getUserCat()

        //通过SystemRuntime获取其他相关信息
//        this.getSystemRuntime()


        return super.getTemplContent(strType, data, extParams)
    }

}

```
### CommitVersionDEActionRuntime :id=UsrSFPlugin0324806543


```net.ibizsys.central.plugin.version.dataentity.action.CommitVersionDEActionRuntime```

```groovy
null
```
### RestoreVersionDEActionRuntime :id=UsrSFPlugin0324899435


```net.ibizsys.central.plugin.version.dataentity.action.RestoreVersionDEActionRuntime```

```groovy
null
```
### SysEndOfDayTranslatorRuntime :id=UsrSFPlugin0401275996


```net.ibizsys.central.plugin.util.res.SysEndOfDayTranslatorRuntime```

```groovy
null
```
### TreeGridDEDataSetRuntime :id=UsrSFPlugin0407757309


```net.ibizsys.central.plugin.util.dataentity.ds.TreeGridDEDataSetRuntime```

```groovy
null
```






