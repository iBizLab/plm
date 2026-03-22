# 服务插件 <!-- {docsify-ignore-all} -->

|  对象      |  实体  |  类型  | 插件  |备注|
|  --------  | ----- | -----    |-----    |----    |
|项目工作项代码表||PSCodeListImpl|[MSLogicCodeListRuntimeEx](#UsrSFPlugin0623056576)||
|AI凭证同步组件||PSSysUtilImpl|[CredentialDESyncUtilRuntime](#CredentialDESyncUtilRuntime)||
|AI模型同步组件||PSSysUtilImpl|[AIAgentDESyncUtilRuntime](#AIAgentDESyncUtilRuntime)||
|AI工具同步组件||PSSysUtilImpl|[AIToolDESyncUtilRuntime](#AIToolDESyncUtilRuntime)||
|KB同步组件||PSSysUtilImpl|[KBAgentDESyncUtilRuntime](#KBAgentDESyncUtilRuntime)||
|SysDEBIReportProxyUtilRuntime||PSSysUtilImpl|[SysDEBIReportProxyUtilRuntime](#UsrSFPlugin0702700490)||
|知识库组件||PSSysUtilImpl|[SysKnowledgeBaseUtilRuntime](#SysKnowledgeBaseUtilRuntime)|知识库功能组件运行时|
|SysMcpServerUtil||PSSysUtilImpl|[PlmSysMcpServerUtilRuntime](#PlmSysMcpServerUtilRuntime)|自动初始化AITOOL数据|
|SysPSDEModelUtilRuntime||PSSysUtilImpl|[PLMSysPSDEModelUtilRuntime](#PLMSysPSDEModelUtilRuntime)||
|任务调度组件||PSSysUtilImpl|[DefaultSysDETaskUtilRuntime](#DefaultSysDETaskUtilRuntime)||
|用户导入增强||PSSysTranslatorImpl|[One2ManyUserImpTransRuntime](#UsrSFPlugin0424744613)|参数名               说明                                   默认值<br>username       指定从用户实体对象中获取值名称名称             display_name<br>userdename     指定用户数据实体名称                          user<br>one2manyfield  指定转换器属性映射的1对多集合属性名称          attentions<br>one2manyuserid 指定映射的1对多集合属性中存储用户标识属性名称   user_id|
|结束时间边界值||PSSysTranslatorImpl|[SysEndOfDayTranslatorRuntime](#UsrSFPlugin0401275996)||
|交付物导入增强||PSSysTranslatorImpl|[One2ManyDeliverableImpTransRuntime](#UsrSFPlugin1119809482)|导入工作项时，生成交付物<br>多个交付物以“；”进行隔开|
|@内容||PSSysTranslatorImpl|[SysAtContentTranslatorRuntime](#UsrSFPlugin0201416283)|评论@转换器|
|用例步骤导入增强||PSSysTranslatorImpl|[One2ManyCaseStepImpTransRuntime](#UsrSFPlugin0515997865)|用例步骤导入增强|
|工作项通知模板(运行时)||PSSysMsgTemplImpl|[[消息模板]工作项通知模板(运行时)](#UsrSFPlugin0204714710)||
|检查新版本(CheckVersion)|[关于(ABOUT)](module/extension/ABOUT)|PSDEUserCustomActionImpl|[CheckUpdateDEActionRuntime](#CheckUpdateDEActionRuntime)|检查系统新版本|
|智能体业务上下文(AI_AGENT_CONTEXT)||PSDataEntityImpl|[AIAgentContextDERuntime](#AIAgentContextDERuntime)||
|树表数据集合(tree)|[知识库文档分块(AI_KB_CHUNK)](module/ai/ai_kb_chunk)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)|数据集合获取树表格层级数据|
|提取元数据(extract_meta_data)|[知识库文档(AI_KB_DOCUMENT)](module/ai/ai_kb_document)|PSDEUserCustomActionImpl|[ExtractMetaDataDEActionRuntime](#ExtractMetaDataDEActionRuntime)||
|填充产品需求版本数据(fill_version_data)|[基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|填充页面版本数据(fill_version_data)|[基线页面(BASELINE_PAGE)](module/Wiki/baseline_page)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|填充测试用例版本数据(fill_version_data)|[基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|填充工作项版本数据(fill_version_data)|[基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|拷贝(Copy)|[看板(BOARD)](module/ProjMgmt/board)|PSDEBuiltinActionImpl|[BoardCopyDEActionRuntime](#BoardCopyDEActionRuntime)|看板拷贝增强插件|
|产品需求导入|[需求(IDEA)](module/ProdMgmt/idea)|PSDEDataImportImpl|[DynaFieldDEDataImportRuntimeEx](#DynaFieldDEDataImportRuntimeEx)|支持动态属性导入|
|空间页面(移动端)(normal_tree_page)|[页面(PAGE)](module/Wiki/article_page)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)|数据集合获取树表格层级数据|
|多类型页面数据导入|[页面(PAGE)](module/Wiki/article_page)|PSDEDataImportImpl|[PageDataImportRuntimeEx](#PageDataImportRuntimeEx)|页面导入使用|
|version|[页面(PAGE)](module/Wiki/article_page)|PSDEUtilImpl|[DEVersionControlUtilRuntimeEx](#UsrSFPlugin0628633282)|排除新建模式行为自动建立版本|
|复制(Copy)|[项目(PROJECT)](module/ProjMgmt/project)|PSDEBuiltinActionImpl|[ProjectCopyDEActionRuntime](#ProjectCopyDEActionRuntime)|项目拷贝增强插件|
|安装特定版本(INSTALLSPECVER)|[核心产品功能(PSCOREPRDFUNC)](module/extension/PSCorePrdFunc)|PSDEUserCustomActionImpl|[InstallSpecDEActionRuntime](#InstallSpecDEActionRuntime)||
|版本数据存储|[关联(RELATION)](module/Base/relation)|PSDEUtilImpl|[DEVersionStorageUtilRuntimeEx](#UsrSFPlugin0425071911)|查询版本关联数据|
|版本数据存储|[执行用例(RUN)](module/TestMgmt/run)|PSDEUtilImpl|[DEVersionStorageUtilRuntimeEx](#UsrSFPlugin0425071911)|查询版本关联数据|
|测试用例导入|[用例(TEST_CASE)](module/TestMgmt/test_case)|PSDEDataImportImpl|[DynaFieldDEDataImportRuntimeEx](#DynaFieldDEDataImportRuntimeEx)|支持动态属性导入|
|用例导出|[用例(TEST_CASE)](module/TestMgmt/test_case)|PSDEDataExportImpl|[TestCasePOIDEDataExportRuntimeEx](#UsrSFPlugin0521277606)|测试用例自定义导出|
|产品工单导入|[工单(TICKET)](module/ProdMgmt/ticket)|PSDEDataImportImpl|[DynaFieldDEDataImportRuntimeEx](#DynaFieldDEDataImportRuntimeEx)|支持动态属性导入|
|提交版本(COMMIT)|[版本(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[CommitVersionDEActionRuntime](#UsrSFPlugin0324806543)|创建版本数据|
|修复版本(FixCommit)|[版本(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[FixCommitVersionDEActionRuntime](#UsrSFPlugin0424197954)|初始化版本数据（修复版本）|
|恢复指定版本(RESTORE)|[版本(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[RestoreVersionDEActionRuntime](#UsrSFPlugin0324899435)||
|人员维度(member_dimension)|[工时(WORKLOAD)](module/Base/workload)|PSDEDataSetImpl|[MemberWorklaodDEDataSetRuntime](#UsrSFPlugin0508758798)|工时管理，人员维度数据集合后台插件|
|工时日历移动端(mob_calendar)|[工时(WORKLOAD)](module/Base/workload)|PSDEDataSetImpl|[GroupNestedFieldsDEDataSetRuntime](#UsrSFPlugin1018391929)|分组数据集填充嵌套数据|
|看板工作项移动位置(board_move_position)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEUserCustomActionImpl|[BoardMovePositionDEActionRuntime](#UsrSFPlugin0618803950)|看板工作项移动排序|
|需求树表查询(requirement_tree)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)|数据集合获取树表格层级数据|
|树表数据集合(tree)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)|数据集合获取树表格层级数据|
|瀑布需求导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|Scrum工作项缺陷导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|Scrum工作项需求导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|瀑布缺陷导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|看板工作项导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|敏捷工作项导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|瀑布工作项导入|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataImportImpl|[NestedDataImportRuntimeEx](#NestedDataImportRuntimeEx)||
|扩展增强|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEUtilImpl|[DynaEditViewModelExUtilRuntime](#DynaEditViewModelExUtilRuntime)|增强动态视图表单获取能力|

### AIAgentContextDERuntime :id=AIAgentContextDERuntime


```cn.ibizlab.plm.user.plugin.groovy.dataentity.AIAgentContextDERuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity

import net.ibizsys.central.cloud.core.dataentity.DataEntityRuntime
import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.central.util.ISearchContextDTO
import net.ibizsys.model.dataentity.IPSDataEntity
import net.ibizsys.model.dataentity.action.IPSDEAction
import net.ibizsys.model.dataentity.ds.IPSDEDataSet
import net.ibizsys.runtime.IDynaInstRuntime
import net.ibizsys.runtime.util.IEntityBase
import net.ibizsys.runtime.util.ISearchContextBase
import org.springframework.util.StringUtils

public class AIAgentContextDERuntime extends DataEntityRuntime {

    private IDataEntityRuntime AIAgentDERuntime = null;

    protected IDataEntityRuntime getAIAgentDERuntimeDERuntime() {
        if(this.AIAgentDERuntime == null) {
            this.AIAgentDERuntime = this.getSystemRuntime().getDataEntityRuntime("AI_AGENT");
        }
        return this.AIAgentDERuntime;
    }

    @Override
    protected void translateEntitiesAfterProceed(ISearchContextBase arg0, List<? extends IEntityBase> list, String strDataSetName, IPSDEDataSet iPSDEDataSet, IPSDataEntity iPSDataEntity, IDynaInstRuntime iDynaInstRuntime, Object actionData) throws Throwable {
        super.translateEntitiesAfterProceed(arg0, list, strDataSetName, iPSDEDataSet, iPSDataEntity, iDynaInstRuntime, actionData);
        Map<String,List<IEntityBase>> cacheDtoMap = new LinkedHashMap<>();
        for(IEntityBase item : list) {
            IEntityDTO aiAgentContextDTO = null;
            if (item instanceof IEntityDTO) {
                aiAgentContextDTO = (IEntityDTO) item;
            }

            if (aiAgentContextDTO == null) {
                return;
            }
            if (StringUtils.hasLength(aiAgentContextDTO.get("ai_agent_id"))) {
                String agentId = aiAgentContextDTO.get("ai_agent_id") as String;
                if(!cacheDtoMap.containsKey(agentId)){
                    List<IEntityBase> dtoList = new ArrayList<>();
                    cacheDtoMap.put(agentId,dtoList);
                    dtoList.add(aiAgentContextDTO)
                }else {
                    cacheDtoMap.get(agentId).add(aiAgentContextDTO)
                }
            }
        }
        for (Map.Entry<String, List<String>> entry : cacheDtoMap.entrySet()) {
            String agentId = entry.getKey();

            List<IEntityBase> dtoList = entry.getValue();
            List<String> idList = new ArrayList<>();
            for(IEntityBase item : dtoList) {
                IEntityDTO aiAgentContextDTO = null;
                if (item instanceof IEntityDTO) {
                    aiAgentContextDTO = (IEntityDTO) item;
                }
                if (aiAgentContextDTO == null) {
                    return;
                }
                idList.add(aiAgentContextDTO.get("ai_agent_id") as String);
            }

            IDataEntityRuntime iDataEntityRuntime = this.getAIAgentDERuntimeDERuntime();
            ISearchContextDTO iSearchContextDTO =  iDataEntityRuntime.createSearchContext();
            iSearchContextDTO.all().in(iDataEntityRuntime.getKeyPSDEField().getCodeName(),idList)
            List<IEntityDTO> resList = iDataEntityRuntime.selectDataSet("full_info",iSearchContextDTO);
            for(IEntityDTO item : resList) {
                for(IEntityBase item2 : dtoList) {
                    IEntityDTO aiAgentContextDTO = null;
                    if (item2 instanceof IEntityDTO) {
                        aiAgentContextDTO = (IEntityDTO) item2;
                    }
                    if (aiAgentContextDTO == null) {
                        return;
                    }
                    if (item.getId().equals(aiAgentContextDTO.get("ai_agent_id"))) {
                        Iterator<Map.Entry<String, Object>> it = aiAgentContextDTO.any().entrySet().iterator();
                        while (it.hasNext()) {
                            Map.Entry<String, Object> itentry = it.next();
                            Object value = itentry.getValue();

                            if (value == null) {
                                it.remove();
                            }
                        }
                        item.copyToIf(aiAgentContextDTO)
                        if (aiAgentContextDTO.get("ai_agent_tool_rels")){
                            def tool_refs = aiAgentContextDTO.get("ai_agent_tool_rels")
                            def tags = tool_refs.findAll { it.tool_type == 'mcp' || it.tool_type == 'mcp_built_in_extension'}
                                    .collect { it.tool_tag }
                                    .join(',')
                            aiAgentContextDTO.set("mcp_server_tags",tags)
                        }
                        if (aiAgentContextDTO.get("ai_agent_knowledge_rels")){
                            def kb_refs = aiAgentContextDTO.get("ai_agent_knowledge_rels")
                            def tags = kb_refs.collect { it.ai_knowledge_base_id }
                                    .join(',')
                            aiAgentContextDTO.set("kb_tags",tags)
                        }
                    }
                }
            }
        }
    }

    @Override
    protected void translateEntityAfterProceed(Object arg0, Object objRet, String strActionName, IPSDEAction iPSDEAction, IPSDataEntity iPSDataEntity, IDynaInstRuntime iDynaInstRuntime, Object actionData) throws Throwable {
        super.translateEntityAfterProceed(arg0, objRet, strActionName, iPSDEAction, iPSDataEntity, iDynaInstRuntime, actionData)
        if (objRet instanceof IEntityDTO && "fill_with_agent".equalsIgnoreCase(strActionName)) {
            IEntityDTO aiAgentContextDTO = (IEntityDTO) objRet;
            if (StringUtils.hasLength(aiAgentContextDTO.get("ai_agent_id"))) {
                IDataEntityRuntime iDataEntityRuntime = this.getAIAgentDERuntimeDERuntime();
                ISearchContextDTO iSearchContextDTO =  iDataEntityRuntime.createSearchContext();
                iSearchContextDTO.all().in(iDataEntityRuntime.getKeyPSDEField().getCodeName(),aiAgentContextDTO.get("ai_agent_id"))
                List<IEntityDTO> resList = iDataEntityRuntime.selectDataSet("full_info",iSearchContextDTO);
                for(IEntityDTO item : resList) {
                    Iterator<Map.Entry<String, Object>> it = aiAgentContextDTO.any().entrySet().iterator();
                    while (it.hasNext()) {
                        Map.Entry<String, Object> itentry = it.next();
                        Object value = itentry.getValue();

                        if (value == null) {
                            it.remove();
                        }
                    }
                    item.copyToIf(aiAgentContextDTO)
                    if (aiAgentContextDTO.get("ai_agent_tool_rels")){
                        def tool_refs = aiAgentContextDTO.get("ai_agent_tool_rels")
                        def tags = tool_refs.findAll { it.tool_type == 'mcp' || it.tool_type == 'mcp_built_in_extension'}
                                .collect { it.tool_tag }
                                .join(',')
                        aiAgentContextDTO.set("mcp_server_tags",tags)
                    }
                    if (aiAgentContextDTO.get("ai_agent_knowledge_rels")){
                        def kb_refs = aiAgentContextDTO.get("ai_agent_knowledge_rels")
                        def tags = kb_refs.collect { it.ai_knowledge_base_id }
                                .join(',')
                        aiAgentContextDTO.set("kb_tags",tags)
                    }
                }
            }
        }
    }
}
```
### AIAgentDESyncUtilRuntime :id=AIAgentDESyncUtilRuntime


```net.ibizsys.central.plugin.util.sysutil.AIAgentDESyncUtilRuntime```

```groovy
null
```
### AIToolDESyncUtilRuntime :id=AIToolDESyncUtilRuntime


```net.ibizsys.central.plugin.util.sysutil.AIToolDESyncUtilRuntime```

```groovy
package net.ibizsys.central.plugin.util.sysutil;

import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

import net.ibizsys.central.cloud.core.spring.rt.ServiceHub;
import net.ibizsys.central.cloud.core.util.domain.Credential;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.model.dataentity.action.IPSDEAction;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import net.ibizsys.central.cloud.core.util.domain.AIAccess;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.expression.ExpressionUtils;
import net.ibizsys.model.codelist.IPSCodeItem;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.runtime.codelist.ICodeListRuntime;
import net.ibizsys.runtime.dataentity.IDataEntityRuntimeContext;
import net.ibizsys.runtime.util.DataTypeUtils;
import net.ibizsys.runtime.util.DateUtils;
import net.ibizsys.runtime.util.JsonUtils;
import net.ibizsys.runtime.util.YamlUtils;

public class AIToolDESyncUtilRuntime extends SysCloudConfigDESyncUtilRuntimeBase{

	private static final Log log = LogFactory.getLog(AIToolDESyncUtilRuntime.class);
	private boolean bRawGet = false;
	private static String mcpPrefix = "mcp";
	private static String mcpBuiltInExtension = "mcp_built_in_extension";
	private static String builtInExtensionUrlFormat = "http://%s:%s/%s/extension/mcp/%s/sse"
	/**
	 * 路径参数：组件标识
	 */
	public final static String UTILPARAM_UTIL = "util";

	/**
	 * 预定义属性：TYPE 工具类型
	 */
	public final static String PREDEFINEDFIELD_TOOL_TYPE = "TOOL_TYPE";

	/**
	 * 预定义属性：API 地址
	 */
	public final static String PREDEFINEDFIELD_API_URL = "API_URL";

	/**
	 * 预定义属性：工具标识
	 */
	public final static String PREDEFINEDFIELD_TOOL_TAG = "TOOL_TAG";

	/**
	 * 预定义属性：TYPE 凭证类型
	 */
	public final static String PREDEFINEDFIELD_API_AUTH_TYPE = "API_AUTH_TYPE";

	/**
	 * 预定义属性：ACCESS_KEY
	 */
	public final static String PREDEFINEDFIELD_ACCESS_KEY = "ACCESS_KEY";

	/**
	 * 预定义属性：SECRET_KEY
	 */
	public final static String PREDEFINEDFIELD_SECRET_KEY = "SECRET_KEY";

	/**
	 * 预定义属性：TOKEN_URL
	 */
	public final static String PREDEFINEDFIELD_TOKEN_URL = "TOKEN_URL";

	/**
	 * 预定义属性：DIGEST/api密钥
	 */
	public final static String PREDEFINEDFIELD_DIGEST = "DIGEST";

	/**
	 * 预定义属性：BEARER_TOKEN
	 */
	public final static String PREDEFINEDFIELD_BEARER_TOKEN = "BEARER_TOKEN";

	/**
	 * 预定义属性：CLIENT_ID
	 */
	public final static String PREDEFINEDFIELD_CLIENT_ID = "CLIENT_ID";

	/**
	 * 预定义属性：CLIENT_SECRET
	 */
	public final static String PREDEFINEDFIELD_CLIENT_SECRET = "CLIENT_SECRET";

	/**
	 * 预定义属性：过期时间
	 */
	public final static String PREDEFINEDFIELD_EXPIRATION_DATE = "EXPIRATION_DATE";

	/**
	 * 预定义属性：凭证状态
	 */
	public final static String PREDEFINEDFIELD_STATUS = "STATUS";


	public final static String STATUS_ACTIVE = "active";

	public final static String STATUS_EXPIRED = "expired";

	public final static String STATUS_DISABLED = "disabled";





	@Override
	protected void onInit() throws Exception {
		this.bRawGet = DataTypeUtils.asBoolean(this.getUtilParam("rawget", (String)null), false);
		super.onInit();
	}

	@Override
	protected String getConfig(IDataEntityRuntimeContext iDataEntityRuntimeContext, IEntityDTO iEntityDTO) throws Throwable {
		String strConfig = super.getConfig(iDataEntityRuntimeContext, iEntityDTO);
		if(StringUtils.hasLength(strConfig)) {
			return strConfig;
		}
		Map<String, Object> map = this.getConfigMap(iDataEntityRuntimeContext, iEntityDTO);
		String strToolType = "";
		String strToolTag = "";
		IPSDEField toolTagPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_TOOL_TAG, true);
		if(toolTagPSDEField != null) {
			Object toolTag = iEntityDTO.get(toolTagPSDEField.getLowerCaseName());
			if(!ObjectUtils.isEmpty(toolTag)) {
				strToolTag = String.valueOf(toolTag);
			}
		}

		IPSDEField toolTypePSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_TOOL_TYPE, true);
		if(toolTypePSDEField != null) {
			Object toolType = iEntityDTO.get(toolTypePSDEField.getLowerCaseName());
			if (!ObjectUtils.isEmpty(toolType)) {
				strToolType = String.valueOf(toolType);
			}
		}

		if(!map.containsKey(AIAccess.FIELD_SERVICEURL)) {
			IPSDEField iPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_API_URL, true);
			if(iPSDEField != null) {
				Object value = iEntityDTO.get(iPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(value)) {
					String strValue = String.valueOf(value);
					map.put(AIAccess.FIELD_SERVICEURL, strValue);
				}else if(mcpBuiltInExtension.equals(strToolType)){
					String strBaseUrl = String.format(getBuiltInExtensionUrlFormat(), ServiceHub.getInstance().getIPAddress(), ServiceHub.getInstance().getPort(), this.getSystemRuntime().getServiceId(),strToolTag);
					map.put(AIAccess.FIELD_SERVICEURL, strBaseUrl);
				}
			}
		}

		if(!map.containsKey(PREDEFINEDFIELD_API_AUTH_TYPE)) {
			IPSDEField typePSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_API_AUTH_TYPE, true);
			if(typePSDEField != null) {
				Object type = iEntityDTO.get(typePSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(type)) {
					String strType = String.valueOf(type);
					map.put(PREDEFINEDFIELD_API_AUTH_TYPE.toLowerCase(), strType);
					if(typePSDEField.getPSCodeList() != null) {
						ICodeListRuntime iCodeListRuntime = this.getSystemRuntime().getCodeListRuntime(typePSDEField.getPSCodeList().getId(), true);
						if(iCodeListRuntime != null) {
							IPSCodeItem iPSCodeItem = iCodeListRuntime.getPSCodeItem(strType, true);
							if(iPSCodeItem!=null && StringUtils.hasLength(iPSCodeItem.getUserData())) {
								map.put(PREDEFINEDFIELD_API_AUTH_TYPE.toLowerCase(), iPSCodeItem.getUserData());
							}
						}
					}
				}
			}
		}

		if(!map.containsKey(Credential.FIELD_ACCESSKEY)) {
			IPSDEField iPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_ACCESS_KEY, true);
			if(iPSDEField != null) {
				Object value = iEntityDTO.get(iPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(value)) {
					String strValue = String.valueOf(value);
					map.put(Credential.FIELD_ACCESSKEY, strValue);
				}
			}
		}

		if(!map.containsKey(Credential.FIELD_SECRETKEY)) {
			IPSDEField iPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_SECRET_KEY, true);
			if(iPSDEField != null) {
				Object value = iEntityDTO.get(iPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(value)) {
					String strValue = String.valueOf(value);
					map.put(Credential.FIELD_SECRETKEY, strValue);
				}
			}
		}

		if(!map.containsKey(Credential.FIELD_TOKENURL)) {
			IPSDEField iPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_TOKEN_URL, true);
			if(iPSDEField != null) {
				Object value = iEntityDTO.get(iPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(value)) {
					String strValue = String.valueOf(value);
					map.put(Credential.FIELD_TOKENURL, strValue);
				}
			}
		}

		if(!map.containsKey(Credential.FIELD_CONTENT)) {
			IPSDEField iPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_DIGEST, true);
			if(iPSDEField != null) {
				Object value = iEntityDTO.get(iPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(value)) {
					String strValue = String.valueOf(value);
					map.put(Credential.FIELD_CONTENT, strValue);
				}
			}
		}

		if(!map.containsKey(Credential.FIELD_ACCESSTOKEN)) {
			IPSDEField iPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_BEARER_TOKEN, true);
			if(iPSDEField != null) {
				Object value = iEntityDTO.get(iPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(value)) {
					String strValue = String.valueOf(value);
					map.put(Credential.FIELD_ACCESSTOKEN, strValue);
				}else if (mcpBuiltInExtension.equals(strToolType)){
					map.put(Credential.FIELD_ACCESSTOKEN, strToolTag);
				}
			}
		}

		if(!map.containsKey(Credential.FIELD_CLIENTID)) {
			IPSDEField iPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_CLIENT_ID, true);
			if(iPSDEField != null) {
				Object value = iEntityDTO.get(iPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(value)) {
					String strValue = String.valueOf(value);
					map.put(Credential.FIELD_CLIENTID, strValue);
				}
			}
		}

		if(!map.containsKey(Credential.FIELD_CLIENTSECRET)) {
			IPSDEField iPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_CLIENT_SECRET, true);
			if(iPSDEField != null) {
				Object value = iEntityDTO.get(iPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(value)) {
					String strValue = String.valueOf(value);
					map.put(Credential.FIELD_CLIENTSECRET, strValue);
				}
			}
		}

		if(!map.containsKey(Credential.FIELD_DISABLED)) {
			map.put(Credential.FIELD_DISABLED, 0);
			IPSDEField statusPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_STATUS, true);
			if(statusPSDEField != null) {
				Object status = iEntityDTO.get(statusPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(status)) {
					String strStatus = String.valueOf(status);
					if(STATUS_ACTIVE.equalsIgnoreCase(strStatus) || STATUS_DISABLED.equalsIgnoreCase(strStatus) || STATUS_EXPIRED.equalsIgnoreCase(strStatus)) {
						if(STATUS_EXPIRED.equalsIgnoreCase(strStatus) || STATUS_DISABLED.equalsIgnoreCase(strStatus)) {
							map.put(Credential.FIELD_DISABLED, 1);
						}
					}
					else {
						if(statusPSDEField.getPSCodeList() != null) {
							ICodeListRuntime iCodeListRuntime = this.getSystemRuntime().getCodeListRuntime(statusPSDEField.getPSCodeList().getId(), true);
							if(iCodeListRuntime != null) {
								IPSCodeItem iPSCodeItem = iCodeListRuntime.getPSCodeItem(strStatus, true);
								if(iPSCodeItem!=null && StringUtils.hasLength(iPSCodeItem.getUserData())) {
									if(STATUS_EXPIRED.equalsIgnoreCase(iPSCodeItem.getUserData()) || STATUS_DISABLED.equalsIgnoreCase(iPSCodeItem.getUserData())) {
										map.put(Credential.FIELD_DISABLED, 1);
									}
								}
							}
						}
					}
				}
			}
		}

		return this.getConfig(iDataEntityRuntimeContext, map, iEntityDTO);
	}

	protected String getBuildInAccessTokenConfig(IDataEntityRuntimeContext iDataEntityRuntimeContext, IEntityDTO iEntityDTO) throws Throwable {
		String strConfig = super.getConfig(iDataEntityRuntimeContext, iEntityDTO);
		if(StringUtils.hasLength(strConfig)) {
			return strConfig;
		}

		Map<String, Object> map = this.getConfigMap(iDataEntityRuntimeContext, iEntityDTO);

		if(!map.containsKey(AIAccess.FIELD_EXPIRESTIME)) {
			IPSDEField expirationDatePSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_EXPIRATION_DATE, true);
			if(expirationDatePSDEField != null) {
				Object expirationDate = iEntityDTO.get(expirationDatePSDEField.getLowerCaseName());
				if(expirationDate != null) {
					if(expirationDate instanceof String) {
						map.put(AIAccess.FIELD_EXPIRESTIME, expirationDate);
					}
					else
					if(expirationDate instanceof Date) {
						map.put(AIAccess.FIELD_EXPIRESTIME, DateUtils.toDateTimeString((Date)expirationDate));
					}
					else
					{
						try {
							map.put(AIAccess.FIELD_EXPIRESTIME, DateUtils.toDateTimeString(DataTypeUtils.asDateTime(expirationDate)));
						}
						catch (Throwable ex) {
							log.error(String.format("过期时间[%1$s]类型不支持", expirationDate));
						}
					}
				}
			}
		}

		return this.getConfig(iDataEntityRuntimeContext, map, iEntityDTO);
	}
	protected String getConfig(IDataEntityRuntimeContext iDataEntityRuntimeContext, Map<String, Object> map, IEntityDTO iEntityDTO) throws Throwable {
		return YamlUtils.toString(map);
	}


	@Override
	protected String getCloudConfigId(IDataEntityRuntimeContext iDataEntityRuntimeContext, Map<String, Object> map, IEntityDTO iEntityDTO) throws Exception {
		if (!map.containsKey(PARAM_KEY)) {
			IPSDEField toolTagPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_TOOL_TAG, true);
			if(toolTagPSDEField != null) {
				Object toolTag = iEntityDTO.get(toolTagPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(toolTag)) {
					String strToolTag = String.valueOf(toolTag);
					map.put(PARAM_KEY, strToolTag);
				}
			}
		}

		if(!map.containsKey(UTILPARAM_UTIL)) {
			map.put(UTILPARAM_UTIL, this.getUtilParam(UTILPARAM_UTIL, "unknown"));
		}

		return super.getCloudConfigId(iDataEntityRuntimeContext, map, iEntityDTO);
	}

	protected String getBuildInCloudAccessTokenId(IDataEntityRuntimeContext iDataEntityRuntimeContext, Map<String, Object> map, IEntityDTO iEntityDTO) throws Exception {
		if (!map.containsKey(PARAM_KEY)) {
			IPSDEField toolTagPSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_TOOL_TAG, true);
			if(toolTagPSDEField != null) {
				Object toolTag = iEntityDTO.get(toolTagPSDEField.getLowerCaseName());
				if(!ObjectUtils.isEmpty(toolTag)) {
					String strToolTag = String.valueOf(toolTag);
					map.put(PARAM_KEY, strToolTag);
					map.put(AIAccess.FIELD_ACCESSTOKEN, strToolTag);
				}
			}
		}

		if(!map.containsKey(UTILPARAM_UTIL)) {
			map.put(UTILPARAM_UTIL, this.getUtilParam(UTILPARAM_UTIL, "unknown"));
		}
		if(!map.containsKey(PARAM_SYSTEM)) {
			map.put(PARAM_SYSTEM, this.getSystemRuntime().getDeploySystemId());
		}
		return ExpressionUtils.getValue(this.getDefaultCloudAccessTokenFormat(iDataEntityRuntimeContext), map).toLowerCase();
	}

	protected void onAfterCreate(IDataEntityRuntimeContext iDataEntityRuntimeContext, IPSDEAction iPSDEAction, IEntityDTO iEntityDTO) throws Throwable {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		IPSDEField toolTypePSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_TOOL_TYPE, true);
		if(toolTypePSDEField != null) {
			Object toolType = iEntityDTO.get(toolTypePSDEField.getLowerCaseName());
			if(!ObjectUtils.isEmpty(toolType)) {
				String strToolType = String.valueOf(toolType);
				if (strToolType.equals(mcpBuiltInExtension)) {
					if (this.bRawGet) {
						IEntityDTO rawEntityDTO = ((IDataEntityRuntime) iDataEntityRuntimeContext.getDataEntityRuntime()).rawGet(iDataEntityRuntimeContext.getDataEntityRuntime().getKeyFieldValue(iEntityDTO));
						String strConfigId = this.getBuildInCloudAccessTokenId(iDataEntityRuntimeContext, map, rawEntityDTO);
						String strConfig = this.getBuildInAccessTokenConfig(iDataEntityRuntimeContext, rawEntityDTO);
						ServiceHub.getInstance().publishConfig(strConfigId, strConfig);
					} else {
						String strConfigId = this.getBuildInCloudAccessTokenId(iDataEntityRuntimeContext, map, iEntityDTO);
						String strConfig = this.getBuildInAccessTokenConfig(iDataEntityRuntimeContext, iEntityDTO);
						ServiceHub.getInstance().publishConfig(strConfigId, strConfig);
					}
				}else if(!strToolType.startsWith(mcpPrefix)) {
					return;
				}
			}
		}


		super.onAfterCreate(iDataEntityRuntimeContext, iPSDEAction, iEntityDTO);
	}

	protected void onAfterUpdate(IDataEntityRuntimeContext iDataEntityRuntimeContext, IPSDEAction iPSDEAction, IEntityDTO iEntityDTO) throws Throwable {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		IPSDEField toolTypePSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_TOOL_TYPE, true);
		if(toolTypePSDEField != null) {
			Object toolType = iEntityDTO.get(toolTypePSDEField.getLowerCaseName());
			if (!ObjectUtils.isEmpty(toolType)) {
				String strToolType = String.valueOf(toolType);
				if (strToolType.equals(mcpBuiltInExtension)) {
					if (this.bRawGet) {
						IEntityDTO rawEntityDTO = ((IDataEntityRuntime) iDataEntityRuntimeContext.getDataEntityRuntime()).rawGet(iDataEntityRuntimeContext.getDataEntityRuntime().getKeyFieldValue(iEntityDTO));
						String strConfigId = this.getBuildInCloudAccessTokenId(iDataEntityRuntimeContext, map, rawEntityDTO);
						String strConfig = this.getBuildInAccessTokenConfig(iDataEntityRuntimeContext, rawEntityDTO);
						ServiceHub.getInstance().publishConfig(strConfigId, strConfig);
					} else {
						String strConfigId = this.getBuildInCloudAccessTokenId(iDataEntityRuntimeContext, map, iEntityDTO);
						String strConfig = this.getBuildInAccessTokenConfig(iDataEntityRuntimeContext, iEntityDTO);
						ServiceHub.getInstance().publishConfig(strConfigId, strConfig);
					}
				}else if(!strToolType.startsWith(mcpPrefix)) {
					return;
				}
			}
		}
		super.onAfterUpdate(iDataEntityRuntimeContext, iPSDEAction, iEntityDTO);
	}

	protected void onBeforeRemove(IDataEntityRuntimeContext iDataEntityRuntimeContext, IPSDEAction iPSDEAction, IEntityDTO iEntityDTO) throws Throwable {
		Map<String, Object> map = new LinkedHashMap<String, Object>();
		IPSDEField toolTypePSDEField = iDataEntityRuntimeContext.getDataEntityRuntime().getPSDEFieldByTag(PREDEFINEDFIELD_TOOL_TYPE, true);
		if(toolTypePSDEField != null) {
			Object toolType = iEntityDTO.get(toolTypePSDEField.getLowerCaseName());
			if (!ObjectUtils.isEmpty(toolType)) {
				String strToolType = String.valueOf(toolType);
				if (strToolType.equals(mcpBuiltInExtension)) {
					//同步移除
					if (this.bRawGet) {
						IEntityDTO rawEntityDTO = ((IDataEntityRuntime) iDataEntityRuntimeContext.getDataEntityRuntime()).rawGet(iDataEntityRuntimeContext.getDataEntityRuntime().getKeyFieldValue(iEntityDTO));
						String strConfigId = this.getBuildInCloudAccessTokenId(iDataEntityRuntimeContext, map, rawEntityDTO);
						ServiceHub.getInstance().removeConfig(strConfigId);
					} else {
						String strConfigId = this.getBuildInCloudAccessTokenId(iDataEntityRuntimeContext, map, iEntityDTO);
						ServiceHub.getInstance().removeConfig(strConfigId);
					}
				}else if(!strToolType.startsWith(mcpPrefix)) {
					return;
				}
			}
		}
		super.onBeforeRemove(iDataEntityRuntimeContext, iPSDEAction, iEntityDTO);
	}
	@Override
	protected String getDefaultCloudConfigIdFormat(IDataEntityRuntimeContext iDataEntityRuntimeContext) throws Exception {
		return "cloud-ai-mcp-{key}";
	}
	
	protected String getDefaultCloudAccessTokenFormat(IDataEntityRuntimeContext iDataEntityRuntimeContext) throws Exception {
		return "accesstoken-{system}-sysutil-extension_mcp_{key}--{accesstoken}";
	}

	protected String getBuiltInExtensionUrlFormat() throws Exception {
		return builtInExtensionUrlFormat;
	}
}

```
### BoardCopyDEActionRuntime :id=BoardCopyDEActionRuntime
看板拷贝增强插件

```cn.ibizlab.plm.user.plugin.groovy.dataentity.action.BoardCopyDEActionRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.action

import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.plugin.util.dataentity.action.CopyDEActionRuntime
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.der.IPSDER1NBase
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.runtime.util.ActionSession
import net.ibizsys.runtime.util.ActionSessionManager
import org.springframework.util.ObjectUtils

public class BoardCopyDEActionRuntime extends CopyDEActionRuntime {

    private static String PROJECT_ID_DEFIELD = "project_id";
    @Override
    protected Object onExecute(IEntityDTO iEntityDTO) throws Throwable {
        ActionSession actionSession = ActionSessionManager.getCurrentSessionMust();
        Object objKeyValue = this.getDataEntityRuntime().getKeyFieldValue(iEntityDTO);
        if (ObjectUtils.isEmpty(objKeyValue)) {
            throw new Exception("传入数据键值无效");
        } else {
            IEntityDTO ret = this.getDataEntityRuntime().get(objKeyValue);
            boolean defaultBoards = false;
            if(objKeyValue.equals(ret.get(PROJECT_ID_DEFIELD))){
                defaultBoards = true;
            }
            this.getDataEntityRuntime().rebuildCopyEntityDTO(ret, true, true);
            List<IPSDEField> psDEFields = this.getDataEntityRuntime().getPSDEFields(true);
            if (psDEFields != null) {
                for(IPSDEField iPSDEField : psDEFields) {
                    if (!iPSDEField.isKeyDEField() && iEntityDTO.contains(iPSDEField.getLowerCaseName())) {
                        ret.set(iPSDEField.getLowerCaseName(), iEntityDTO.get(iPSDEField.getLowerCaseName()));
                    }
                }
            }

            List<IPSDERBase> psDERBaseList = this.getDataEntityRuntime().getPSDERBases(true);
            if (!ObjectUtils.isEmpty(psDERBaseList)) {
                for(IPSDERBase iPSDERBase : psDERBaseList) {
                    if (iPSDERBase instanceof IPSDER1NBase) {
                        IPSDER1NBase iPSDER1NBase = (IPSDER1NBase)iPSDERBase;
                        if (iPSDER1NBase.getCloneOrder() >= 0) {
                            IPSDEField pickupPSDEField = iPSDER1NBase.getPickupPSDEFieldMust();
                            Object value = ret.get(pickupPSDEField.getLowerCaseName());
                            if (value != null) {
                                String strTag = String.format("_COPYSOURCE__%s__%s", iPSDER1NBase.getMajorPSDataEntityMust().getId(), value);
                                Object cache = actionSession.getActionParam(strTag);
                                if (cache instanceof IEntityDTO) {
                                    IDataEntityRuntime majorDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDER1NBase.getMajorPSDataEntityMust().getId());
                                    IEntityDTO cacheEntityDTO = (IEntityDTO)cache;
                                    ret.set(pickupPSDEField.getLowerCaseName(), majorDataEntityRuntime.getKeyFieldValue(cacheEntityDTO));
                                }
                            }
                        }
                    }
                }
            }
            //移除默认看板子数据
            if(defaultBoards){
                String defaultBoardKey = ret.get(PROJECT_ID_DEFIELD);
                ret = this.getDataEntityRuntime().get(defaultBoardKey);
                List<IPSDER1NBase> clonelist = this.getDataEntityRuntime().getClonePSDER1Ns(true);
                if (!ObjectUtils.isEmpty(clonelist)) {
                    for(IPSDER1NBase iPSDERBase : clonelist) {
                        this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntity().getName()).removeByForeignKey(iPSDERBase.getPickupPSDEField(),defaultBoardKey,iPSDERBase);
                    }
                }
            }else{
                this.getDataEntityRuntime().rawCreate(Arrays.asList(ret),true);
            }
            String strTag = String.format("_COPYSOURCE__%s__%s", this.getDataEntityRuntime().getId(), objKeyValue);
            actionSession.setActionParam(strTag, ret);
            List<IPSDER1NBase> clonelist = this.getDataEntityRuntime().getClonePSDER1Ns(true);
            if (!ObjectUtils.isEmpty(clonelist)) {
                for(IPSDER1NBase iPSDERBase : clonelist) {
                    this.onCopyPSDER1NBase(iEntityDTO, ret, iPSDERBase);
                }
            }
//            throw new Exception("TestCopy");
		    iEntityDTO.reload(ret, true);
            return ret;
        }
    }
}
```
### CheckUpdateDEActionRuntime :id=CheckUpdateDEActionRuntime
检查系统新版本

```cn.ibizlab.plm.user.plugin.groovy.dataentity.action.CheckUpdateDEActionRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.action

import net.ibizsys.central.cloud.core.util.domain.V2DeploySystem
import net.ibizsys.central.plugin.util.dataentity.action.DEActionRuntimeBase
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.model.IPSSystem
import org.apache.commons.logging.LogFactory

import java.time.Duration
import java.time.Instant

public class CheckUpdateDEActionRuntime extends DEActionRuntimeBase {

    private static final org.apache.commons.logging.Log log = LogFactory.getLog(CheckUpdateDEActionRuntime.class);

    public CheckUpdateDEActionRuntime() {

    }


    class VersionComparator {
        static int compare(String version1, String version2) {
            // 处理空值
            if (version1 == null && version2 == null) return 0
            if (version1 == null) return -1
            if (version2 == null) return 1
            if (version1 == version2) return 0

            // 标准化版本
            def (nums1, pre1) = parseVersion(version1)
            def (nums2, pre2) = parseVersion(version2)

            // 比较数字部分
            for (int i = 0; i < 3; i++) {
                if (nums1[i] != nums2[i]) {
                    return nums1[i] > nums2[i] ? 1 : -1
                }
            }

            // 比较预发布部分
            return comparePreRelease(pre1, pre2)
        }
        static boolean hasNewVersion(String currentVersion, String latestVersion) {
            return compare(latestVersion, currentVersion) > 0
        }
        private static def parseVersion(String version) {
            // 去掉v前缀，转小写
            String v = version.toLowerCase().replace('v', '')

            // 分离预发布标识
            def parts = v.split('-', 2)
            String mainPart = parts[0]
            String preRelease = parts.length > 1 ? parts[1] : null

            // 分离数字部分
            def numParts = mainPart.split('\\.')
            int major = numParts.size() > 0 ? toInt(numParts[0]) : 0
            int minor = numParts.size() > 1 ? toInt(numParts[1]) : 0
            int patch = numParts.size() > 2 ? toInt(numParts[2]) : 0

            return [[major, minor, patch], preRelease]
        }
        private static int comparePreRelease(String pre1, String pre2) {
            // 都没有预发布标识 -> 相等
            if (!pre1 && !pre2) return 0
            // 有预发布标识的 < 没有预发布标识的
            if (!pre1) return 1
            if (!pre2) return -1

            // 预发布标识优先级
            def order = [
                    'dev': 0,
                    'snapshot': 1,
                    'alpha': 2,
                    'beta': 3,
                    'rc': 4,
                    'release': 4
            ]

            // 提取预发布类型和编号
            def (type1, num1) = parsePreRelease(pre1)
            def (type2, num2) = parsePreRelease(pre2)

            // 获取类型优先级
            int order1 = order[type1] ?: 0
            int order2 = order[type2] ?: 0

            // 比较类型优先级
            if (order1 != order2) {
                return order1 > order2 ? 1 : -1
            }

            // 类型相同，比较编号
            int n1 = num1 ?: 0
            int n2 = num2 ?: 0

            return n1 <=> n2
        }

        private static def parsePreRelease(String preRelease) {
            if (!preRelease) return [null, null]

            // 匹配类型和数字
            def matcher = preRelease =~ /([a-z]+)(?:\.?(\d+))?/
            if (matcher.find()) {
                String type = matcher.group(1)
                Integer num = matcher.group(2) ? matcher.group(2).toInteger() : null
                return [type, num]
            }
            return [preRelease, null]
        }
        private static int toInt(String str) {
            try {
                return str.toInteger()
            } catch (e) {
                // 尝试提取数字
                def matcher = str =~ /(\d+)/
                return matcher.find() ? matcher.group(1).toInteger() : 0
            }
        }

    }

    /**
     * 使用Java 8 Time API计算天数差
     */
    static long getDaysDifferenceWithTimeAPI(long timestamp1, long timestamp2) {
        Instant instant1 = Instant.ofEpochMilli(timestamp1)
        Instant instant2 = Instant.ofEpochMilli(timestamp2)
        return Duration.between(instant2, instant1).toHours()
    }

    private static IEntityDTO currentVersion;
    private static int errorCount = 0;

    @Override
    protected Object onExecute(IEntityDTO entity) throws Throwable {
        
        boolean needcache = entity.getBoolean("needcache",false);

        if(needcache && currentVersion!=null && getDaysDifferenceWithTimeAPI(System.currentTimeMillis(),currentVersion.getLong("check_time",System.currentTimeMillis()))<8)
            return currentVersion;

        IPSSystem psSystem = this.getSystemRuntime().getPSSystem();
        entity.set("name", psSystem.getLogicName());
        String current = psSystem.getDefaultPSSysSFPub().getVersionString();
        entity.set("version", current);
        entity.set("id", this.getSystemRuntime().getDeploySystemId());
        entity.set("description", psSystem.getMemo());
        entity.set("license", "MIT");
        boolean checkForUpdates = this.getSystemRuntime().getSystemRuntimeSetting().getParam("check_for_updates",true);
        entity.set("check_for_updates", checkForUpdates);
        entity.set("check_time", System.currentTimeMillis());

        String productId = sys.getDeploySystemId();
        try {
            V2DeploySystem v2DeploySystem = this.getSystemRuntime().getV2DeploySystem();
            if(v2DeploySystem != null && v2DeploySystem.getProductId() != null)
                productId = v2DeploySystem.getProductId();
            String updateCheckUrl = sys.getSystemRuntimeSetting().getParam("update_check_url", "https://release.ibizlab.cn/versions/${productId}/latest.json");
            updateCheckUrl = updateCheckUrl+"?current=${current}&t=${System.currentTimeMillis()}";
            if (checkForUpdates) {
                def response = sys.webclient().get(updateCheckUrl,null,null,null,HashMap.class,null);
                if (response!=null && response.getStatusCode() == 200) {
                    String latest = response.getBody().get("version");
                    entity.set("latest_version",latest);
                    entity.set("latest", response.getBody());
                    boolean hasUpdate = VersionComparator.hasNewVersion(current, latest);
                    entity.set("has_update",hasUpdate);

                }
            }
            if (needcache)
                currentVersion = entity;
        }catch (Exception ex) {
            errorCount ++;
            if(errorCount>3 && needcache)
                currentVersion = entity;
        }


        return entity;
    }

    static void main(String[] args) {
        println "${CheckUpdateDEActionRuntime.getDaysDifferenceWithTimeAPI(System.currentTimeMillis(),System.currentTimeMillis()-8*60*60*1000)}"
        println "${CheckUpdateDEActionRuntime.VersionComparator.hasNewVersion("V1.0-alpha","V1.0.1-alpha.20251223")}"
    }
}
```
### CredentialDESyncUtilRuntime :id=CredentialDESyncUtilRuntime


```net.ibizsys.central.plugin.util.sysutil.CredentialDESyncUtilRuntime```

```groovy
null
```
### DefaultSysDETaskUtilRuntime :id=DefaultSysDETaskUtilRuntime


```net.ibizsys.central.plugin.task.sysutil.DefaultSysDETaskUtilRuntime```

```groovy
null
```
### DynaEditViewModelExUtilRuntime :id=DynaEditViewModelExUtilRuntime
增强动态视图表单获取能力

```cn.ibizlab.plm.user.plugin.groovy.dataentity.util.DynaEditViewModelExUtilRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.util

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.databind.node.ArrayNode
import com.fasterxml.jackson.databind.node.ObjectNode
import groovy.transform.CompileStatic
import net.ibizsys.central.cloud.core.util.domain.V2SystemExtensionForm
import net.ibizsys.central.cloud.core.util.domain.V2SystemExtensionSuite
import net.ibizsys.central.plugin.extension.dataentity.util.DEExtensionUtilRuntime
import net.ibizsys.central.plugin.extension.psmodel.util.ExtensionUtils
import net.ibizsys.model.PSModelEnums
import net.ibizsys.model.app.IPSApplication
import net.ibizsys.model.app.dataentity.IPSAppDataEntity
import net.ibizsys.model.app.view.IPSAppDEView
import net.ibizsys.model.app.view.IPSAppView
import net.ibizsys.model.app.view.PSAppDEViewImpl
import net.ibizsys.model.app.view.PSAppViewImpl
import net.ibizsys.model.app.view.PSAppViewRefImpl
import net.ibizsys.model.control.form.IPSDEForm
import net.ibizsys.model.control.form.PSDEFormImpl
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.der.IPSDER1N
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.model.dataentity.der.IPSDERCustom
import net.ibizsys.psmodel.core.domain.PSDEForm
import net.ibizsys.psmodel.runtime.util.PSModelRTServiceBase
import net.ibizsys.psmodel.runtime.util.PSModelRTServiceFactory
import net.ibizsys.runtime.util.JsonUtils
import org.springframework.util.ObjectUtils
import org.springframework.util.StringUtils

import java.util.stream.Collectors

@CompileStatic
public class DynaEditViewModelExUtilRuntime extends DEExtensionUtilRuntime {
    @Override
    protected ObjectNode getPSAppDEEditViewModel(IPSAppDEView iPSAppDEView, String strWFTag, Object param) throws Throwable {
        ObjectNode originViewNode = super.getPSAppDEEditViewModel(iPSAppDEView, strWFTag, param);
        V2SystemExtensionSuite v2SystemExtensionSuite = this.getV2SystemExtensionSuite(false);
        String srfParentDEName = null;
        String srfParentKey = null;
        String strFormTagPrefix = null;
        String strDataType;
        if (param instanceof Map) {
            Map map = (Map)param;
            srfParentDEName = (String)map.get("srfparentdename");
            srfParentKey = (String)map.get("srfparentkey");
            strDataType = (String)map.get("srfdatatype");
        } else {
            strDataType = null;
        }

        if (StringUtils.hasLength(srfParentDEName) && StringUtils.hasLength(srfParentKey)) {
            List<IPSDERBase> psDERBases = this.getPSDataEntity().getMinorPSDERs();
            if (psDERBases != null) {
                Iterator var14 = psDERBases.iterator();

                while(var14.hasNext()) {
                    IPSDERBase iPSDERBase = (IPSDERBase)var14.next();
                    if (iPSDERBase.getMajorPSDataEntity().getName().equalsIgnoreCase(srfParentDEName)) {
                        if (iPSDERBase instanceof IPSDER1N) {
                            IPSDER1N iPSDER1N = (IPSDER1N)iPSDERBase;
                            strFormTagPrefix = String.format("FIELD__%s__%s", iPSDER1N.getPSPickupDEFieldMust().getName().toUpperCase(), srfParentKey);
                            break;
                        }

                        if (iPSDERBase instanceof IPSDERCustom) {
                            IPSDERCustom iPSDERCustom = (IPSDERCustom)iPSDERBase;
                            IPSDEField iPSDEField = iPSDERCustom.getPickupPSDEField();
                            if (iPSDEField != null) {
                                strFormTagPrefix = String.format("FIELD__%s__%s", iPSDEField.getName().toUpperCase(), srfParentKey);
                                break;
                            }
                        }
                    }
                }
            }
        }
        JsonNode node = originViewNode.get(PSAppViewImpl.ATTR_GETPSCONTROLS);
        if(node == null) {
            //尝试从视图面板中获取
            JsonNode viewLayoutPanelNode = originViewNode.get(PSAppViewImpl.ATTR_GETPSVIEWLAYOUTPANEL);
            if(viewLayoutPanelNode instanceof ObjectNode) {
                node = ((ObjectNode)viewLayoutPanelNode).get(PSAppViewImpl.ATTR_GETPSCONTROLS);
            }
        }
        Map<String, String> formCodeNameMap = new HashMap<String, String>();
        //以下代码调整为从当前实体表单提取表单标记，usertag=原始表单usertag
        IPSApplication iPSApplication = iPSAppDEView.getParentPSModelObject(IPSApplication.class);
        List<IPSDEForm> psDEFormList = new ArrayList<IPSDEForm>();
        List<IPSAppView> curDEViews = iPSApplication.getAllPSAppViews().stream().filter {it->return it.getPSAppDataEntity()!=null && it.getPSAppDataEntity().getPSDataEntity().getName().equals(this.getPSDataEntity().getName())}.collect().toList()
        for(IPSAppView iPSAppView : curDEViews) {
            net.ibizsys.psmodel.runtime.util.PSModelRTServiceBase.fillPSControlList(IPSDEForm.class, iPSAppView, psDEFormList);
        }
        int dynaSysMode = 1;
        if(node instanceof ArrayNode) {
            //循环表单
            ArrayNode arrayNode = (ArrayNode) node;
            for (int i = 0; i < arrayNode.size(); i++) {
                ObjectNode ctrlNode = (ObjectNode) arrayNode.get(i);
                JsonNode dynaSysModeNode = ctrlNode.get("dynaSysMode");
                if (dynaSysModeNode != null && dynaSysModeNode.asInt() > 1) {
                    dynaSysMode = dynaSysModeNode.asInt();
                }
            }
        }
        //查出原始表单
        Map<String, IPSDEForm> psDEFormMap = new HashMap<String, IPSDEForm>();
        for(IPSDEForm iPSDEForm : psDEFormList) {
//            if("dynamic_update".equals(iPSDEForm.getUserTag())||"dynamic_create".equals(iPSDEForm.getUserTag())){
            if(dynaSysMode == 2) {
                if ("dynamic_update".equals(iPSDEForm.getUserTag())) {
                    psDEFormMap.put(iPSDEForm.getName(), iPSDEForm);
                    formCodeNameMap.put(iPSDEForm.getCodeName(), "");
                    ArrayNode arrayNode = (ArrayNode) node;
                    ObjectNode form = iPSDEForm.getObjectNode();
                    arrayNode.add(form);
                }
            }
        }

        Map<String, V2SystemExtensionForm> v2SystemExtensionFormMap = new HashMap<String, V2SystemExtensionForm>();
        Map<String, V2SystemExtensionForm> extraV2SystemExtensionFormMap = new HashMap<String, V2SystemExtensionForm>();
        List<ObjectNode> list = new ArrayList<ObjectNode>();
        //查出表单
        List<V2SystemExtensionForm> v2SystemExtensionFormList = v2SystemExtensionSuite.getForms();
        if(!ObjectUtils.isEmpty(v2SystemExtensionFormList)) {
            for(V2SystemExtensionForm v2SystemExtensionForm : v2SystemExtensionFormList) {
                if(!StringUtils.hasLength(v2SystemExtensionForm.getRuntimeModel())) {
                    continue;
                }

                if(!StringUtils.hasLength(v2SystemExtensionForm.getExtensionModel())) {
                    continue;
                }

                if(!this.getDataEntityTag().equals(v2SystemExtensionForm.getDataEntityTag())){
                    continue;
                }
                //过滤参数，非当前视图实体表单计算可能会出现异常
                String[] formTags = v2SystemExtensionForm.getFormTag().split("[@]");
                if(formTags != null && formTags.length > 1){
                    if(!formTags[0].equalsIgnoreCase(strFormTagPrefix)){
                        continue;
                    }
                }
                PSDEForm psDEForm = JsonUtils.as(v2SystemExtensionForm.getExtensionModel(), PSDEForm.class);

                if(formCodeNameMap.containsKey(psDEForm.getCodeName().toLowerCase())) {
                    //避免重复写入覆盖
                    if(!v2SystemExtensionFormMap.containsKey(psDEForm.getCodeName().toLowerCase()) || v2SystemExtensionForm.getFormTag().contains("@")){
                        v2SystemExtensionFormMap.put(psDEForm.getCodeName().toLowerCase(), v2SystemExtensionForm);
                    }
                }else {
                    extraV2SystemExtensionFormMap.put(psDEForm.getCodeName().toLowerCase(), v2SystemExtensionForm);
                }

            }
        }
        //templForm
        ObjectNode templForm;
        if(node instanceof ArrayNode) {
            //循环表单
            ArrayNode arrayNode = (ArrayNode)node;
            for(int i = 0 ;i<arrayNode.size();i++) {
                ObjectNode ctrlNode = (ObjectNode) arrayNode.get(i);
                String strName = ctrlNode.get("name").asText();
                if(strName.equals("form")){
                    templForm = ctrlNode;
                }
                if(!(strName.equals("form")||strName.startsWith("_form_"))){
                    list.add(ctrlNode);
                }
                else {
                    String strCodeName = null;
                    JsonNode codeNameNode = ctrlNode.get("codeName");
                    if(codeNameNode != null) {
                        strCodeName = codeNameNode.asText();
                    }
                    V2SystemExtensionForm v2SystemExtensionForm = StringUtils.hasLength(strCodeName)? v2SystemExtensionFormMap.remove(strCodeName.toLowerCase()): null;
                    if(v2SystemExtensionForm == null) {
                        list.add(ctrlNode);
                    }
                    else {
                        String strRuntimeModel = ExtensionUtils.replaceRuntimeModel(v2SystemExtensionForm.getRuntimeModel(), iPSApplication, false);
                        ObjectNode form = JsonUtils.toObjectNode(strRuntimeModel);
                        //ObjectNode form = JsonUtils.toObjectNode(v2SystemExtensionForm.getRuntimeModel());
                        ObjectNode newForm = ctrlNode.deepCopy();// JsonUtils.toObjectNode(ctrlNode.toString());
                        newForm.set(PSDEFormImpl.ATTR_GETPSDEFORMITEMUPDATES, form.get(PSDEFormImpl.ATTR_GETPSDEFORMITEMUPDATES));
                        newForm.set(PSDEFormImpl.ATTR_GETPSDEFORMPAGES, form.get(PSDEFormImpl.ATTR_GETPSDEFORMPAGES));
                        newForm.set(PSDEFormImpl.ATTR_GETPSDEFORMITEMVRS, form.get(PSDEFormImpl.ATTR_GETPSDEFORMITEMVRS));
                        newForm.set(PSDEFormImpl.ATTR_GETCODENAME, form.get(PSDEFormImpl.ATTR_GETCODENAME));
                        newForm.set(PSDEFormImpl.ATTR_GETLOGICNAME, form.get(PSDEFormImpl.ATTR_GETLOGICNAME));
                        if(form.get(PSDEFormImpl.ATTR_ISNOTABHEADER)!=null) {
                            newForm.set(PSDEFormImpl.ATTR_ISNOTABHEADER, form.get(PSDEFormImpl.ATTR_ISNOTABHEADER));
                        }

                        ArrayNode newPSAppCounterRefNodes = null;
                        if(newForm.has(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS)) {
                            newPSAppCounterRefNodes = (ArrayNode)newForm.get(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS);
                        }
                        else {
                            newPSAppCounterRefNodes = newForm.putArray(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS);
                        }

                        if(form.has(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS)) {
                            ArrayNode psAppCounterRefNodes = (ArrayNode)form.get(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS);
                            newPSAppCounterRefNodes.addAll(psAppCounterRefNodes);
                        }


                        newForm.remove(PSDEFormImpl.ATTR_GETPSDEFORMITEMS);
                        newForm.remove(PSDEFormImpl.ATTR_GETDYNAMODELFILEPATH);

                        list.add(newForm);
                    }
                }
            }

            //判断剩余表单是否为新增表单
            for(V2SystemExtensionForm v2SystemExtensionForm : extraV2SystemExtensionFormMap.values()) {
                if(!StringUtils.hasLength(v2SystemExtensionForm.getExtensionModel())) {
                    continue;
                }
                PSDEForm psDEForm = JsonUtils.as(v2SystemExtensionForm.getExtensionModel(), PSDEForm.class);
//                if ((strDataType != null && strDataType.equals(psDEForm.getDataType()))) {
                String strRuntimeModel = ExtensionUtils.replaceRuntimeModel(v2SystemExtensionForm.getRuntimeModel(), iPSApplication, false);
                ObjectNode form = JsonUtils.toObjectNode(strRuntimeModel);
                ObjectNode newForm = templForm.deepCopy();
                newForm.set(PSDEFormImpl.ATTR_GETPSDEFORMITEMUPDATES, form.get(PSDEFormImpl.ATTR_GETPSDEFORMITEMUPDATES));
                newForm.set(PSDEFormImpl.ATTR_GETPSDEFORMPAGES, form.get(PSDEFormImpl.ATTR_GETPSDEFORMPAGES));
                newForm.set(PSDEFormImpl.ATTR_GETPSDEFORMITEMVRS, form.get(PSDEFormImpl.ATTR_GETPSDEFORMITEMVRS));
                newForm.set(PSDEFormImpl.ATTR_GETCODENAME, form.get(PSDEFormImpl.ATTR_GETCODENAME));
                newForm.set(PSDEFormImpl.ATTR_GETLOGICNAME, form.get(PSDEFormImpl.ATTR_GETLOGICNAME));
                if(form.get(PSDEFormImpl.ATTR_ISNOTABHEADER)!=null) {
                    newForm.set(PSDEFormImpl.ATTR_ISNOTABHEADER, form.get(PSDEFormImpl.ATTR_ISNOTABHEADER));
                }

                ArrayNode newPSAppCounterRefNodes = null;
                if(newForm.has(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS)) {
                    newPSAppCounterRefNodes = (ArrayNode)newForm.get(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS);
                }
                else {
                    newPSAppCounterRefNodes = newForm.putArray(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS);
                }

                if(form.has(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS)) {
                    ArrayNode psAppCounterRefNodes = (ArrayNode)form.get(PSDEFormImpl.ATTR_GETPSAPPCOUNTERREFS);
                    newPSAppCounterRefNodes.addAll(psAppCounterRefNodes);
                }

                if(form.get("dataType")!=null) {
                    newForm.put("name", "_form_" + form.get("dataType").asText())
                    newForm.put("dataType", form.get("dataType").asText())
                }
                if(form.get("userTag")!=null){
                    newForm.put("userTag",form.get("userTag").asText())
                }
                newForm.remove(PSDEFormImpl.ATTR_GETPSDEFORMITEMS);
                newForm.remove(PSDEFormImpl.ATTR_GETDYNAMODELFILEPATH);
                list.add(newForm);
//                }
            }
            //仅保留新建表单
            if(dynaSysMode == 1){
                list = list.stream().filter({ item -> (item.get("userTag") == null || item.get("userTag").asText().equals("dynamic_create"))}).collect(Collectors.toList());
            }
            //高级动态模式(过滤当前指定类型表单)
            if(dynaSysMode == 2){
                list = list.stream().filter({ item -> (item.get("dataType") != null && item.get("dataType").asText().equals(strDataType)) || item.get("dataType") == null }).collect(Collectors.toList());
                list = list.stream().filter({ item -> (item.get("userTag") == null || item.get("userTag").asText().equals("dynamic_update"))}).collect(Collectors.toList());
            }
            arrayNode.removeAll();
            arrayNode.addAll(list);
            return originViewNode;
        }
    }
}
```
### DynaFieldDEDataImportRuntimeEx :id=DynaFieldDEDataImportRuntimeEx
支持动态属性导入

```cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport.DynaFieldDEDataImportRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport

import com.fasterxml.jackson.databind.node.ObjectNode
import groovy.transform.CompileStatic
import net.ibizsys.central.cloud.core.dataentity.IDataEntityRuntime
import net.ibizsys.central.cloud.core.dataentity.util.IDEExtensionUtilRuntime;
import net.ibizsys.central.plugin.extension.dataentity.util.DEExtensionUtilRuntimeBase;
import net.ibizsys.central.plugin.poi.dataentity.dataimport.POIDEDataImportRuntime
import net.ibizsys.model.IPSModelObjectRuntime
import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.dataimport.IPSDEDataImportItem
import net.ibizsys.model.dataentity.dataimport.PSDEDataImportItemImpl;
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.der.IPSDER1N
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.runtime.security.IUserContext;
import net.ibizsys.runtime.util.IWebContext
import net.ibizsys.runtime.util.JsonUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils

@CompileStatic
public class DynaFieldDEDataImportRuntimeEx extends POIDEDataImportRuntime  {
    private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(DynaFieldDEDataImportRuntimeEx.class);

    private List<String> extendParentKeys = new ArrayList<>();

    private IDEExtensionUtilRuntime iDEExtensionUtilRuntime = null;

    @Override
    protected void onInit() throws Exception {
        if(this.getDataEntityRuntime().isEnableExtension() && this.getDataEntityRuntime().getDEExtensionUtilRuntime()!=null) {
            this.iDEExtensionUtilRuntime = this.getDataEntityRuntime().getDEExtensionUtilRuntime();
        }

        List<IPSDERBase> minorPSDERs = getDataEntityRuntime().getPSDataEntity().getMinorPSDERs();
        if (!ObjectUtils.isEmpty(minorPSDERs)) {
            for (IPSDERBase iPSDERBase : minorPSDERs) {
                if (iPSDERBase instanceof IPSDER1N) {
                    IPSDER1N iPSDER1N = (IPSDER1N) iPSDERBase;
                    if ((iPSDER1N.getMasterRS() & PSModelEnums.DER1NMasterRS.EXTENSION.value) == PSModelEnums.DER1NMasterRS.EXTENSION.value) {
                        extendParentKeys.add(iPSDER1N.getPSPickupDEFieldMust().getName());
                    }
                    continue;
                }

                if (iPSDERBase instanceof IPSDERCustom) {
                    IPSDERCustom iPSDERCustom = (IPSDERCustom) iPSDERBase;
                    if (PSModelEnums.DERSubType.DER1N.value.equals(iPSDERCustom.getDERSubType()) || PSModelEnums.DERSubType.DER11.value.equals(iPSDERCustom.getDERSubType())) {
                        if (iPSDERCustom.getPickupPSDEField() != null && ((iPSDERCustom.getMasterRS() & PSModelEnums.DER1NMasterRS.EXTENSION.value) == PSModelEnums.DER1NMasterRS.EXTENSION.value)) {
                            extendParentKeys.add(iPSDERCustom.getPickupPSDEField().getName());
                        }
                    }
                    continue;
                }
            }
        }
        super.onInit();
    }

    @Override
    public IDataEntityRuntime getDataEntityRuntime() {
        return (IDataEntityRuntime)super.getDataEntityRuntime();
    }
    protected Map<String, IPSDEDataImportItem> getPSDEDataImportItems(IUserContext iUserContext) throws Throwable {
        Map<String, IPSDEDataImportItem> map = super.getPSDEDataImportItems(iUserContext);
        if(!ObjectUtils.isEmpty(extendParentKeys) && getDEExtensionUtilRuntime() != null) {
            IWebContext iWebContext = iUserContext.getWebContext();
            if(iWebContext != null) {
                for (String extendParentKey : extendParentKeys) {
                    String strDataType = iWebContext.getParameter(extendParentKey);
                    if (!StringUtils.hasLength(strDataType)) {
                        continue;
                    }
                    List<IPSDEField> psDEFieldList = this.getDEExtensionUtilRuntime().getPSDEFields(String.format(DEExtensionUtilRuntimeBase.FIELD_EXTENSION_FORMAT, extendParentKey.toUpperCase(), strDataType));
                    int defaultOrderValue = 99900;
                    if (!ObjectUtils.isEmpty(psDEFieldList)) {
                        for (IPSDEField iPSDEField : psDEFieldList) {
                            if (!StringUtils.hasLength(iPSDEField.getLogicName())) {
                                continue;
                            }
                            if (map.containsKey(iPSDEField.getLogicName())) {
                                log.warn(String.format("扩展属性[%s]标题[%s]已经存在，忽略导入", iPSDEField.getName(), iPSDEField.getLogicName()));
                                continue;
                            }

                            ObjectNode objectNode = JsonUtils.createObjectNode();
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETID, iPSDEField.getLowerCaseName());
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETNAME, iPSDEField.getLowerCaseName());
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETCAPTION, iPSDEField.getLogicName());

                            // int iOrderValue = iPSDEField.getImportOrder() != 0 ? iPSDEField.getImportOrder() : iPSDEField.getOrderValue();
                            int iOrderValue = iPSDEField.getImportOrder();
                            if (iOrderValue == 0) {
                                iOrderValue = defaultOrderValue++;
                            }
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETORDERVALUE, iOrderValue);

                            IPSDEDataImportItem iPSDEDataImportItem = this.getSystemRuntime().getPSSystemService().createAndInitPSModelObject((IPSModelObjectRuntime) this.getPSDEDataImport(), IPSDEDataImportItem.class, objectNode);
                            if (iPSDEDataImportItem instanceof PSDEDataImportItemImpl) {
                                PSDEDataImportItemImpl psDEDataImportItemImpl = (PSDEDataImportItemImpl) iPSDEDataImportItem;
                                psDEDataImportItemImpl.setPSDEField(iPSDEField);
                                if (iPSDEField.getInlinePSCodeList() != null) {
                                    psDEDataImportItemImpl.setPSCodeList(iPSDEField.getInlinePSCodeList());
                                } else {
                                    psDEDataImportItemImpl.setPSCodeList(iPSDEField.getPSCodeList());
                                }
                                map.put(psDEDataImportItemImpl.getCaption(), psDEDataImportItemImpl);
                            }
                        }
                    }
                }
            }
        }
        return map;
    }

    protected IDEExtensionUtilRuntime getDEExtensionUtilRuntime() {
        return this.iDEExtensionUtilRuntime;
    }
}
```
### EventHookDENotifyRuntimeEx :id=EventHookDENotifyRuntimeEx
运行时事件通知增强插件

```cn.ibizlab.plm.user.plugin.groovy.dataentity.notify.EventHookDENotifyRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.notify

import groovy.transform.CompileStatic;
import net.ibizsys.central.dataentity.notify.DENotifyRuntime
import net.ibizsys.central.util.SearchGroupCond
import net.ibizsys.model.util.JsonUtils
import net.ibizsys.psmodel.core.util.Conditions
import net.ibizsys.psmodel.core.util.DataTypeUtils
import net.ibizsys.runtime.util.IEntity
import net.ibizsys.runtime.util.ISearchCond
import net.ibizsys.runtime.util.ISearchFieldCond
import org.springframework.util.StringUtils;

@CompileStatic
public class EventHookDENotifyRuntimeEx extends DENotifyRuntime{

    @Override
    protected void onSend(IEntity iEntity, Map<String, Object> params) throws Throwable {
        Object eventData = params.get(NOTIFY_PARAM_EVENTDATA);
        // 自定义条件
        String strsearchCond = this.getPSDENotify().getCustomCond();
        if(StringUtils.hasLength(strsearchCond)){
             SearchGroupCond searchGroupCond = SearchGroupCond.from(JsonUtils.asMap(strsearchCond),true);
             if(!testDomainField((IEntity)eventData,searchGroupCond)) {
                 return;
             }
        }
        super.onSend(iEntity,params)
    }

    protected boolean testDomainField(IEntity entity, SearchGroupCond searchGroupCond) throws Exception {
        Boolean testResult = true;
        if(StringUtils.hasLength(this.getPSDENotify().getUserTag())){
            if (!this.getPSDENotify().getUserTag().equals(entity.get("work_item_type_id"))) {
                return false;
            }
        }
        String groupType = searchGroupCond.getCondOp();
        Boolean andMode = groupType.equals("AND")?true:false;
        List<ISearchCond> searchConds = searchGroupCond.getSearchConds();
        for (ISearchCond searchCond : searchConds) {
            if(searchCond instanceof ISearchFieldCond) {
                Object value = entity.get(searchCond.getFieldName()) ;
                if(!testSingleDomainField(value,searchCond.getCondOp(),searchCond.getValue())) {
                    if(andMode) {
                        testResult = testResult && false;
                        break;
                    }else {
                        testResult = testResult || false;
                    }

                }else {
                    if(!andMode) {
                        testResult = testResult || true;
                    }
                }
            }
        }
        return testResult;
    }

    protected boolean testSingleDomainField(Object value, String strCondition,Object condValue){
        if (Conditions.EQ.equals(strCondition) || Conditions.ABSEQ.equals(strCondition)) {
            if (value instanceof String) {
                return ((String) value).equalsIgnoreCase(condValue.toString());
            }
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) == 0;
        }

        if (Conditions.GT.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) > 0;
        }

        if (Conditions.GTANDEQ.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) >= 0;
        }

        if (Conditions.LT.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) < 0;
        }

        if (Conditions.LTANDEQ.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) <= 0;
        }

        if (Conditions.NOTEQ.equals(strCondition)) {
            if (value instanceof String) {
                return !((String) value).equalsIgnoreCase(condValue.toString());
            }
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) != 0;
        }

        if (Conditions.IN.equals(strCondition)) {
            return  Arrays.stream((condValue.toString()).split(",")).filter({ cond -> !cond.isEmpty() && cond.equals((String) value) }).count() > 0;
        }

        if (Conditions.NOTIN.equals(strCondition)) {
            return  Arrays.stream((condValue.toString()).split(",")).filter({ cond -> !cond.isEmpty() && cond.equals((String) value) }).count() <= 0;
        }

        if (Conditions.LIKE.equals(strCondition)) {
            return value.toString().toUpperCase().indexOf(condValue.toString().toUpperCase()) != -1;
        }
        if(Conditions.ISNOTNULL.equals(strCondition)) {
            return value != null;
        }
        if(Conditions.ISNULL.equals(strCondition)) {
            return value == null;
        }
        return false;
    }
}

```
### ExtractMetaDataDEActionRuntime :id=ExtractMetaDataDEActionRuntime


```cn.ibizlab.plm.user.plugin.groovy.dataentity.action.ExtractMetaDataDEActionRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.action

import net.ibizsys.model.util.JsonUtils
import groovy.transform.CompileStatic
import net.ibizsys.central.dataentity.action.DEActionRuntimeBase
import net.ibizsys.central.util.IEntityDTO
import com.vladsch.flexmark.ast.Image;
import com.vladsch.flexmark.ast.Link;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.ast.Document;
import com.vladsch.flexmark.util.ast.NodeVisitor;
import com.vladsch.flexmark.util.ast.VisitHandler
import groovy.json.JsonSlurper
import java.text.SimpleDateFormat

@CompileStatic
class ExtractMetaDataDEActionRuntime extends DEActionRuntimeBase {
    private static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")

    @Override
    protected Object onExecute(IEntityDTO iEntityDTO) throws Throwable {
        def parsed_content = iEntityDTO.get('parsed_content').toString()
        if (parsed_content) {
            def meta_data = [:]
            def references = []
            // 解析Markdown内容
            Parser parser = Parser.builder().build()
            Document document = parser.parse(parsed_content)
            // 收集所有图片节点
            List<Image> images = []
            NodeVisitor imageCollector = new NodeVisitor(new VisitHandler<>(Image, images.&add))
            imageCollector.visit(document)

            // 收集所有链接节点
            List<Link> links = []
            NodeVisitor linkCollector = new NodeVisitor(new VisitHandler<>(Link, links.&add))
            linkCollector.visit(document)

            // 处理图片
            images.each { image ->
                def path = image.getUrl().toString()
                def name = image.getText().toString()
                def position = image.getLineNumber()
                def source_markdown = image.getChars().toString()
                references.add([
                        type: "image",
                        path: path,
                        name: name,
                        position: position,
                        source_markdown: source_markdown
                ])
            }

            // 处理链接（仅包含/ibizutil/download）
            links.each { link ->
                def path = link.getUrl().toString()
                // 仅处理包含指定路径的链接
                if (path.contains("/ibizutil/download")) {
                    def name = link.getText().toString()
                    def position = link.getLineNumber()
                    def source_markdown = link.getChars().toString()
                    references.add([
                            type: "url",
                            path: path,
                            name: name,
                            position: position,
                            source_markdown : source_markdown
                    ])
                }
            }

            // 更新_meta_data
            def sourceType = iEntityDTO.get('source_type')
            meta_data.put('source_type', sourceType)
            def _type = iEntityDTO.get('type')
            if (_type == 'file'){
                def fileJson = iEntityDTO.get('file').toString()
                def file = new JsonSlurper().parseText(fileJson)as ArrayList
                def fileName = file[0].getAt("name")
                def fileType = iEntityDTO.get('file_type').toString()
                def fileSize = file[0].getAt("size")
                meta_data.put('file_size', fileSize)
                meta_data.put('file_type', fileType)
                meta_data.put('title', fileName)
                meta_data.put('source_type', "file")
            }
            def now = new Date()
            def nowStr = sdf.format(now)
            meta_data.put('parsed_at', nowStr)
            meta_data.put('references', references)
            def metaDataJson = JsonUtils.getMapper().writerWithDefaultPrettyPrinter().writeValueAsString(meta_data);
            iEntityDTO.set('meta_data', metaDataJson)
        }
        return iEntityDTO;
    }
}
```
### FieldChangeDENotifyRuntimeEx :id=FieldChangeDENotifyRuntimeEx
运行时属性变更通知增强插件

```cn.ibizlab.plm.user.plugin.groovy.dataentity.notify.FieldChangeDENotifyRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.notify

import groovy.transform.CompileStatic
import net.ibizsys.central.dataentity.notify.DENotifyRuntime
import net.ibizsys.central.util.SearchGroupCond
import net.ibizsys.model.util.JsonUtils
import net.ibizsys.psmodel.core.util.Conditions
import net.ibizsys.psmodel.core.util.DataTypeUtils
import net.ibizsys.runtime.util.IEntity
import net.ibizsys.runtime.util.ISearchCond
import net.ibizsys.runtime.util.ISearchFieldCond
import org.springframework.util.StringUtils

@CompileStatic
public class FieldChangeDENotifyRuntimeEx extends DENotifyRuntime{
    @Override
    protected void onSend(IEntity iEntity, Map<String, Object> params) throws Throwable {
        Object eventData = params.get(NOTIFY_PARAM_EVENTDATA);
        // 自定义条件
        String strsearchCond = this.getPSDENotify().getCustomCond();
         if(StringUtils.hasLength(strsearchCond)){
             SearchGroupCond searchGroupCond = SearchGroupCond.from(JsonUtils.asMap(strsearchCond),true);
             if(!testDomainField((IEntity)eventData,searchGroupCond)) {
                 return;
             }
        }
        super.onSend(iEntity,params)
    }

    protected boolean testDomainField(IEntity entity, SearchGroupCond searchGroupCond) throws Exception {
        Boolean testResult = true;
        if(StringUtils.hasLength(this.getPSDENotify().getUserTag())){
            if (!this.getPSDENotify().getUserTag().equals(entity.get("work_item_type_id"))) {
                return false;
            }
        }
        String groupType = searchGroupCond.getCondOp();
        Boolean andMode = groupType.equals("AND")?true:false;
        List<ISearchCond> searchConds = searchGroupCond.getSearchConds();
        for (ISearchCond searchCond : searchConds) {
            if(searchCond instanceof ISearchFieldCond) {
                Object value = entity.get(searchCond.getFieldName()) ;
                if(!testSingleDomainField(value,searchCond.getCondOp(),searchCond.getValue())) {
                    if(andMode) {
                        testResult = testResult && false;
                        break;
                    }else {
                        testResult = testResult || false;
                    }

                }else {
                    if(!andMode) {
                        testResult = testResult || true;
                    }
                }
            }
        }
        return testResult;
    }

    protected boolean testSingleDomainField(Object value, String strCondition,Object condValue){
        if (Conditions.EQ.equals(strCondition) || Conditions.ABSEQ.equals(strCondition)) {
            if (value instanceof String) {
                return ((String) value).equalsIgnoreCase(condValue.toString());
            }
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) == 0;
        }

        if (Conditions.GT.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) > 0;
        }

        if (Conditions.GTANDEQ.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) >= 0;
        }

        if (Conditions.LT.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) < 0;
        }

        if (Conditions.LTANDEQ.equals(strCondition)) {
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) <= 0;
        }

        if (Conditions.NOTEQ.equals(strCondition)) {
            if (value instanceof String) {
                return !((String) value).equalsIgnoreCase(condValue.toString());
            }
            int nDataType = DataTypeUtils.getObjectDataType(value);
            return DataTypeUtils.compare(nDataType, value, condValue) != 0;
        }

        if (Conditions.IN.equals(strCondition)) {
            return  Arrays.stream((condValue.toString()).split(",")).filter({ cond -> !cond.isEmpty() && cond.equals((String) value) }).count() > 0;
        }

        if (Conditions.NOTIN.equals(strCondition)) {
            return  Arrays.stream((condValue.toString()).split(",")).filter({ cond -> !cond.isEmpty() && cond.equals((String) value) }).count() <= 0;
        }

        if (Conditions.LIKE.equals(strCondition)) {
            return value.toString().toUpperCase().indexOf(condValue.toString().toUpperCase()) != -1;
        }
        if(Conditions.ISNOTNULL.equals(strCondition)) {
            return value != null;
        }
        if(Conditions.ISNULL.equals(strCondition)) {
            return value == null;
        }
        return false;
    }
}

```
### DynaDataEntityRuntime :id=GLOBAL_DATAENTITYRUNTIME
全局实体运行时插件

```net.ibizsys.central.plugin.util.dataentity.DynaDataEntityRuntime```

```groovy
null
```
### InstallSpecDEActionRuntime :id=InstallSpecDEActionRuntime


```cn.ibizlab.plm.user.plugin.groovy.dataentity.action.InstallSpecDEActionRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.action

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.node.ArrayNode
import net.ibizsys.central.cloud.core.spring.rt.ServiceHub
import net.ibizsys.central.cloud.core.util.domain.V2System
import net.ibizsys.central.cloud.core.util.domain.V2SystemMerge
import net.ibizsys.central.cloud.core.util.domain.V2SystemSource
import net.ibizsys.central.cloud.core.util.domain.V2SystemVersion
import net.ibizsys.central.cloud.core.util.domain.V2SystemVersionType
import net.ibizsys.central.plugin.extension.psmodel.service.PSCorePrdFuncRTService
import net.ibizsys.central.plugin.extension.psmodel.util.IExtensionPSModelRTServiceSession
import net.ibizsys.central.plugin.extension.sysutil.HubSysExtensionUtilRuntime
import net.ibizsys.central.plugin.extension.sysutil.ISysExtensionUtilRuntime
import net.ibizsys.central.plugin.util.dataentity.action.DEActionRuntimeBase
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.central.util.SearchContextDTO
import net.ibizsys.psmodel.core.domain.PSCorePrdFunc
import net.ibizsys.psmodel.core.util.IPSModelServiceSession
import net.ibizsys.psmodel.core.util.PSModelServiceSession
import net.ibizsys.psmodel.core.util.PSModels
import net.ibizsys.psmodel.runtime.util.PSModelRTServiceFactory
import net.ibizsys.runtime.util.JsonUtils
import net.ibizsys.runtime.util.ZipUtils
import org.apache.commons.io.FileUtils
import org.apache.commons.logging.LogFactory
import org.eclipse.jgit.api.CloneCommand
import org.eclipse.jgit.api.Git
import org.eclipse.jgit.api.PullCommand
import org.eclipse.jgit.api.errors.CheckoutConflictException
import org.eclipse.jgit.api.errors.WrongRepositoryStateException
import org.eclipse.jgit.internal.storage.file.FileRepository
import org.springframework.data.domain.Page
import org.springframework.util.DigestUtils
import org.springframework.util.ObjectUtils
import org.springframework.util.StringUtils
import org.yaml.snakeyaml.Yaml
import org.apache.commons.compress.utils.IOUtils


import java.nio.file.Paths
import java.util.zip.ZipInputStream


public class InstallSpecDEActionRuntime extends DEActionRuntimeBase {
    private static final org.apache.commons.logging.Log log = LogFactory.getLog(InstallSpecDEActionRuntime.class);

    private HubSysExtensionUtilRuntime hubSysExtensionUtilRuntime ;

    private HubSysExtensionUtilRuntime getHubSysExtensionUtilRuntime() {
        if(hubSysExtensionUtilRuntime == null) {
            ISysExtensionUtilRuntime iSysExtensionUtilRuntime = this.getSystemRuntime().getSysUtilRuntime(ISysExtensionUtilRuntime.class, false);
            if(iSysExtensionUtilRuntime instanceof HubSysExtensionUtilRuntime ) {
                hubSysExtensionUtilRuntime = (HubSysExtensionUtilRuntime) iSysExtensionUtilRuntime;
            }
        }
        return hubSysExtensionUtilRuntime;
    }


    @Override
    protected Object onExecute(IEntityDTO entity) throws Throwable {


        IPSModelServiceSession iPSModelServiceSession = getHubSysExtensionUtilRuntime().createPSModelServiceSession(this.getSystemRuntime());
        IPSModelServiceSession lastPSModelServiceSession = PSModelServiceSession.getCurrent(true);

        PSModelRTServiceFactory lastPSModelRTServiceFactory = PSModelRTServiceFactory.getCurrent(true);
        PSModelRTServiceFactory.setCurrent(getHubSysExtensionUtilRuntime().getPSModelRTServiceFactory(this.getSystemRuntime()));
        PSModelServiceSession.setCurrent(iPSModelServiceSession);
        try{


            PSCorePrdFuncRTService service = (PSCorePrdFuncRTService) iPSModelServiceSession.getPSModelService(PSModels.PSCOREPRDFUNC);
            PSCorePrdFunc m = service.getDomain(entity);
            String specVersion = entity.getString("version","latest").toLowerCase();
            String majorSystemId =  this.getSystemRuntime().getV2DeploySystem().getSystemId();

            String strHttpUrlToRepo = entity.getString("http_url_to_repo",entity.getString("httpurltorepo",""))
            String strBranch = entity.getString("default_branch",entity.getString("defaultbranch",""))
            String zipfile = entity.getString("zipfile","")
            if(StringUtils.hasLength(zipfile)) {
                JsonNode node = JsonUtils.toJsonNode(zipfile);
                if(node instanceof ArrayNode) {
                    node = ((ArrayNode)node).get(0);
                }
                net.ibizsys.runtime.util.domain.File ossFile = JsonUtils.as(node, net.ibizsys.runtime.util.domain.File.class);
                m.set("ossfile",ossFile)
            }
            m.setHttpUrlToRepo(strHttpUrlToRepo)

            m.set("default_branch",strBranch)

            if (!specVersion.equalsIgnoreCase("latest")) {
                if (!StringUtils.hasLength(m.getPSCorePrdFuncId())) {
                    m.setPSCorePrdFuncId("${m.getFuncType()}.${majorSystemId}.${m.getFuncSN()}");
                }
                PSCorePrdFunc existFunc = null;
                try {
                    existFunc = service.get(m.getPSCorePrdFuncId(),false)
                }catch (Exception ex) {
                    existFunc = new PSCorePrdFunc()
                    m.copyTo(existFunc)
                }

                V2System v2System = service.getV2SystemIf(existFunc);
                if(v2System!=null) {
                    List<V2SystemVersion> v2SystemVersionList = new ArrayList<V2SystemVersion>();

                    Map<String, V2SystemVersion> v2SystemVersionMap = new HashMap<String, V2SystemVersion>();
                    if (true) {
                        SearchContextDTO searchContextDTO = new SearchContextDTO();
                        searchContextDTO.all();
                        // searchContextDTO.eq(V2SystemVersion.FIELD_TYPE, "CORE");
                        Page<V2SystemVersion> v2SystemVersionPage = getHubSysExtensionUtilRuntime().getCloudExtensionClient().fetchSystemVersions(v2System.getId(), searchContextDTO);
                        if (!ObjectUtils.isEmpty(v2SystemVersionPage) && !ObjectUtils.isEmpty(v2SystemVersionPage.getContent())) {
                            v2SystemVersionList.addAll(v2SystemVersionPage.getContent());
                            for (V2SystemVersion v2SystemVersion : v2SystemVersionPage.getContent()) {
                                if (V2SystemVersionType.CORE.value.equals(v2SystemVersion.getType())) {
                                    v2SystemVersionMap.put(v2SystemVersion.getName().toLowerCase(), v2SystemVersion);
                                }
                            }
                        }
                    }
                    V2SystemVersion v2SystemVersion = v2SystemVersionMap.get(specVersion);
                    if(v2SystemVersion == null) {
                        v2SystemVersion = new V2SystemVersion();
                        v2SystemVersion.setType(V2SystemVersionType.CORE.value);
                        v2SystemVersion.setName(specVersion);

                        net.ibizsys.runtime.util.domain.File ossFile = m.get("ossfile");

                        V2SystemSource v2SystemSource = getSystemSource(v2System, m.getHttpUrlToRepo(),(String)m.get("default_branch"),ossFile,specVersion);

                        v2SystemVersion.setSystemSourceId(v2SystemSource.getId());
                        v2SystemVersion = getHubSysExtensionUtilRuntime().getCloudExtensionClient().createSystemVersion(v2System.getId(), v2SystemVersion);
                    }

                    String systemSourceId = v2SystemVersion.getSystemSourceId();
                    m.set(V2SystemMerge.FIELD_MERGE_SYSTEM_SOURCE_ID,systemSourceId);

                }
            }
            service.install(m);
            return entity;

        } finally {
            PSModelServiceSession.setCurrent(lastPSModelServiceSession);
            PSModelRTServiceFactory.setCurrent(lastPSModelRTServiceFactory);
        }
    }


    def processOssFile(net.ibizsys.runtime.util.domain.File ossFile) {
        def inputStream = null
        def zipInputStream = null

        try {
            
            if(!StringUtils.hasLength(ossFile.getOSSId()))
                ossFile.setOSSId(ossFile.getFileId());

            net.ibizsys.runtime.util.domain.File tempFile = this.getSystemRuntime().getSysFileUtilRuntime().getOSSFile(ossFile.getOSSId(), ossFile.getFolder(), true);

            // 获取输入流
            inputStream = this.getSystemRuntime()
                    .getSysFileUtilRuntime(false)
                    .getInputStream(tempFile)

            // 将流复制到字节数组
            def byteArrayOutputStream = new ByteArrayOutputStream()
            IOUtils.copy(inputStream, byteArrayOutputStream)
            def byteArray = byteArrayOutputStream.toByteArray()

            // 计算MD5并设置
            def md5Hex = DigestUtils.md5DigestAsHex(byteArray)
            println "计算得到的MD5: ${md5Hex}"
            ossFile.setDigestCode(md5Hex)  // 设置到ossFile对象

            // 检查ZIP根目录是否有系统模型文件
            zipInputStream = new ZipInputStream(new ByteArrayInputStream(byteArray))
            def zipEntry = zipInputStream.getNextEntry()
            def foundFiles = []

            while (zipEntry != null) {
                def entryName = zipEntry.name

                // 只检查根目录文件
                if (!entryName.contains("/") && !entryName.contains("\\")) {
                    if (entryName == "ibizmodel.yaml"   ||
                            entryName == "PSSYSTEM.json") {
                        foundFiles << entryName
                    }
                }

                zipEntry = zipInputStream.getNextEntry()
            }

            if (foundFiles.isEmpty()) {
                throw new RuntimeException("ZIP包不合法：根目录未找到系统模型文件(ibizmodel.yaml或PSSYSTEM.json)")
            }

            println "ZIP包校验通过，找到系统模型文件: ${foundFiles.join(', ')}"
            return true

        } finally {
            IOUtils.closeQuietly(zipInputStream)
            IOUtils.closeQuietly(inputStream)
        }
    }

    public V2SystemSource getSystemSource(V2System v2System, String strHttpUrlToRepo,String strBranch, net.ibizsys.runtime.util.domain.File ossFile,String version) {

        V2SystemSource v2SystemSource = null;

        String systemId = v2System.getId()

        if (!StringUtils.hasLength(strBranch)) {
            strBranch = "master"
        }
        if(ossFile!=null && processOssFile(ossFile)) {

            v2SystemSource = new V2SystemSource();
            v2SystemSource.setName(version);
            v2SystemSource.setOssFile(ossFile.getOSSId());


            v2SystemSource.setDigest(ossFile.getDigestCode());
            v2SystemSource.setVersion(1);
            v2SystemSource = getHubSysExtensionUtilRuntime().getCloudExtensionClient().createSystemSource(systemId, v2SystemSource);
            return v2SystemSource
        }

        boolean bGitMode = true
        String strSubFolder = null
        String strSystemPath = v2System.getName()

        if (StringUtils.hasLength(strHttpUrlToRepo)) {
            // 处理可能的子文件夹路径（如：http://example.com/repo.zip#subfolder）
            String[] parts = strHttpUrlToRepo.split("[#]")
            if (parts.length == 2) {
                strHttpUrlToRepo = parts[0]
                strSubFolder = parts[1]
                bGitMode = false
            }

            // 提取系统路径名称
            String[] items = strHttpUrlToRepo.split("[/]")
            String strLastItem = items[-1]  // Groovy 简写，获取最后一个元素

            if (bGitMode) {
                // Git 仓库
                int nPos = strLastItem.lastIndexOf(".git")
                if (nPos != -1 && nPos == strLastItem.length() - 4) {
                    strSystemPath = strLastItem[0..<nPos]
                } else {
                    bGitMode = false
                    nPos = strLastItem.lastIndexOf(".zip")
                    if (nPos != -1 && nPos == strLastItem.length() - 4) {
                        strSystemPath = strLastItem[0..<nPos]
                    }
                }
            } else {
                // Zip 文件
                int nPos = strLastItem.lastIndexOf(".zip")
                if (nPos != -1 && nPos == strLastItem.length() - 4) {
                    strSystemPath = strLastItem[0..<nPos]
                }
            }
        }

        strSystemPath = "${strSystemPath}-${version}"

        String strFilePath = Paths.get(
                ServiceHub.getInstance().getServiceHubSetting().getSystemModelFolder(),
                "systemsources3",
                systemId,
                strSystemPath,
                strBranch
        ).toString()

        File file = new File(strFilePath)
        String strPath = file.canonicalPath

        if (bGitMode && StringUtils.hasLength(strHttpUrlToRepo)) {
            log.debug("插件系统[${systemId}]使用Git路径：${strHttpUrlToRepo}")

            try {
                if (file.exists()) {
                    // 使用 withCloseable 自动管理资源
                    new FileRepository(new File("${strPath}${File.separator}.git")).withCloseable { fr ->
                        new Git(fr).withCloseable { git ->
                            PullCommand pullCommand = git.pull().setRemoteBranchName(strBranch)
                            pullCommand.call()
                        }
                    }
                    log.debug("Git仓库[${systemId}]拉取成功")
                } else {
                    // 创建目录
                    if (file.mkdirs()) {
                        log.debug("创建目录: ${file.canonicalPath}")
                    }

                    // 克隆仓库
                    CloneCommand cloneCommand = Git.cloneRepository()
                            .setURI(strHttpUrlToRepo)
                            .setDirectory(file)
                            .setBranch(strBranch)
                            .setCloneSubmodules(true)  // 如果有子模块，一并克隆



                    cloneCommand.call().withCloseable { git ->
                        log.debug("Git仓库[${systemId}]克隆成功")
                    }
                }
            } catch (WrongRepositoryStateException | CheckoutConflictException ex) {
                log.error("Git仓库状态异常，${ex.message}。执行清除目录操作[${file.canonicalPath}]", ex)
                try {
                    FileUtils.deleteDirectory(file)
                    log.info("已清除异常目录: ${file.canonicalPath}")
                } catch (IOException e) {
                    log.warn("清除目录失败: ${e.message}")
                }
                throw new Exception("签出Git项目发生异常: ${ex.message}", ex)
            } catch (Exception ex) {
                log.error("Git操作失败[${systemId}]: ${ex.message}", ex)
                throw new Exception("Git操作失败: ${ex.message}", ex)
            }
        }
        else {
            // Zip模式
            if (!StringUtils.hasLength(strHttpUrlToRepo)) {
                throw new Exception("未提供有效的代码仓库地址")
            }

            log.debug("插件系统[${systemId}]使用Zip路径：${strHttpUrlToRepo}")

            if (!file.exists()) {
                File tempFile = null
                try {
                    // 创建临时文件
                    tempFile = File.createTempFile("resource_${systemId}_${System.currentTimeMillis()}", ".zip")
                    log.debug("下载Zip文件到临时文件: ${tempFile.absolutePath}")

                    // 下载文件
                    this.getSystemRuntime().getDefaultWebClient().download(strHttpUrlToRepo, tempFile)

                    // 解压文件
                    ZipUtils.unzip(tempFile, file)
                    log.debug("Zip文件解压成功: ${file.canonicalPath}")
                } catch (Exception ex) {
                    log.error("下载或解压Zip文件失败[${systemId}]: ${ex.message}", ex)
                    throw new Exception("下载或解压文件发生异常: ${ex.message}", ex)
                } finally {
                    // 清理临时文件
                    if (tempFile?.exists()) {
                        if (!tempFile.delete()) {
                            log.warn("无法删除临时文件: ${tempFile.absolutePath}")
                        }
                    }
                }
            } else {
                log.debug("Zip目录已存在: ${file.canonicalPath}")
            }

            // 处理子文件夹
            if (StringUtils.hasLength(strSubFolder)) {
                file = new File(file.absolutePath + File.separator + strSubFolder)
                if (!file.exists() || !file.isDirectory()) {
                    throw new Exception("指定的子文件夹不存在: ${strSubFolder}")
                }
                strPath = file.canonicalPath
            }
        }

        File modelFolder = null;
        // 检查是否有ibizmodel.yaml配置文件
        File modelFile = new File("${strPath}${File.separator}ibizmodel.yaml")
        if (modelFile.exists()) {
            try {
                Yaml yaml = new Yaml()
                InputStream inputStream = null
                try {
                    inputStream = new FileInputStream(modelFile)
                    Map config = yaml.loadAs(inputStream, Map)
                    if (config?.modelfolder) {
                        String strModelFolder = config.modelfolder as String
                        modelFolder = new File(strPath + File.separator + strModelFolder)

                    }
                } finally {
                    inputStream?.close()
                }
            } catch (Exception ex) {
                log.error("加载系统模型配置发生异常: ${ex.message}", ex)
                throw new Exception("加载系统模型配置发生异常: ${ex.message}", ex)
            }
        }

        if (modelFolder == null || !modelFolder.exists() || !modelFolder.isDirectory()) {
            File systemModelFile = new File("${strPath}${File.separator}PSSYSTEM.json")
            if (systemModelFile.exists()) {
                modelFolder = file
            }
        }

        if (modelFolder!=null && modelFolder.exists() && modelFolder.isDirectory()) {
            // 建立模型压缩文件
            File zipTempFile = File.createTempFile("model_" + strSystemPath, ".zip");
            ZipUtils.zip(modelFolder, zipTempFile);
            String strFileHashCode = "";
            FileInputStream fis = null
            try {
                fis = new FileInputStream(zipTempFile)
                strFileHashCode = DigestUtils.md5DigestAsHex(fis)
            } finally {
                fis?.close()
            }
            String strOSSCat = net.ibizsys.central.cloud.core.sysutil.ISysExtensionUtilRuntime.OSSCAT_DYNAMODEL;
            ossFile = this.getSystemRuntime().getSysFileUtilRuntime(false).createOSSFile(zipTempFile, strOSSCat);

            v2SystemSource = new V2SystemSource();
            v2SystemSource.setName(version);
            v2SystemSource.setOssFile(ossFile.getOSSId());
            v2SystemSource.setDigest(strFileHashCode);
            v2SystemSource.setVersion(1);
            v2SystemSource = getHubSysExtensionUtilRuntime().getCloudExtensionClient().createSystemSource(systemId, v2SystemSource);

        }
        if (v2SystemSource == null)
            throw new Exception("根目录未找到系统模型文件(ibizmodel.yaml或PSSYSTEM.json)")
        return v2SystemSource;
    }
}

```
### KBAgentDESyncUtilRuntime :id=KBAgentDESyncUtilRuntime


```net.ibizsys.central.plugin.util.sysutil.KBAgentDESyncUtilRuntime```

```groovy
null
```
### NestedDataImportRuntimeEx :id=NestedDataImportRuntimeEx


```cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport.NestedDataImportRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.node.ObjectNode
import groovy.transform.CompileStatic
import net.ibizsys.central.cloud.core.dataentity.IDataEntityRuntime
import net.ibizsys.central.cloud.core.dataentity.util.IDEExtensionUtilRuntime;
import net.ibizsys.central.cloud.core.util.domain.V2ImportSchema
import net.ibizsys.central.plugin.extension.dataentity.util.DEExtensionUtilRuntimeBase;
import net.ibizsys.central.plugin.poi.dataentity.dataimport.POIDEDataImportRuntime
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.model.IPSModelObjectRuntime
import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.dataimport.IPSDEDataImportItem
import net.ibizsys.model.dataentity.dataimport.PSDEDataImportItemImpl;
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.der.IPSDER1N
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.runtime.dataentity.DataEntityRuntimeException
import net.ibizsys.runtime.security.IUserContext;
import net.ibizsys.runtime.util.IEntity
import net.ibizsys.runtime.util.IWebContext
import net.ibizsys.runtime.util.JsonUtils;
import org.apache.poi.ss.usermodel.Workbook
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils

@CompileStatic
public class NestedDataImportRuntimeEx extends POIDEDataImportRuntime  {
    private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(NestedDataImportRuntimeEx.class);

    public final static String PARAM_NESTEDNAMEFIELD = "nestednamefield";
    public final static String PARAM_NESTEDPKEYFIELD = "nestedpkeyfield";
    public final static String PARAM_NESTEDSYMBOL = "nestedsymbol";

    private String strNestedNameField = null;
    private String strNestedPKeyField = null;
    private String strNestedSymbol = null;

    private List<String> extendParentKeys = new ArrayList<>();

    private IDEExtensionUtilRuntime iDEExtensionUtilRuntime = null;

    @Override
    protected void onInit() throws Exception {
        this.strNestedNameField =  this.getImportParam(PARAM_NESTEDNAMEFIELD,"");
        this.strNestedPKeyField =  this.getImportParam(PARAM_NESTEDPKEYFIELD,"pid");
        this.strNestedSymbol = this.getImportParam(PARAM_NESTEDSYMBOL, "→");
        if(this.getDataEntityRuntime().isEnableExtension() && this.getDataEntityRuntime().getDEExtensionUtilRuntime()!=null) {
            this.iDEExtensionUtilRuntime = this.getDataEntityRuntime().getDEExtensionUtilRuntime();
        }

        List<IPSDERBase> minorPSDERs = getDataEntityRuntime().getPSDataEntity().getMinorPSDERs();
        if (!ObjectUtils.isEmpty(minorPSDERs)) {
            for (IPSDERBase iPSDERBase : minorPSDERs) {
                if (iPSDERBase instanceof IPSDER1N) {
                    IPSDER1N iPSDER1N = (IPSDER1N) iPSDERBase;
                    if ((iPSDER1N.getMasterRS() & PSModelEnums.DER1NMasterRS.EXTENSION.value) == PSModelEnums.DER1NMasterRS.EXTENSION.value) {
                        extendParentKeys.add(iPSDER1N.getPSPickupDEFieldMust().getName());
                    }
                    continue;
                }

                if (iPSDERBase instanceof IPSDERCustom) {
                    IPSDERCustom iPSDERCustom = (IPSDERCustom) iPSDERBase;
                    if (PSModelEnums.DERSubType.DER1N.value.equals(iPSDERCustom.getDERSubType()) || PSModelEnums.DERSubType.DER11.value.equals(iPSDERCustom.getDERSubType())) {
                        if (iPSDERCustom.getPickupPSDEField() != null && ((iPSDERCustom.getMasterRS() & PSModelEnums.DER1NMasterRS.EXTENSION.value) == PSModelEnums.DER1NMasterRS.EXTENSION.value)) {
                            extendParentKeys.add(iPSDERCustom.getPickupPSDEField().getName());
                        }
                    }
                    continue;
                }
            }
        }
        super.onInit();
    }

    @Override
    public IDataEntityRuntime getDataEntityRuntime() {
        return (IDataEntityRuntime)super.getDataEntityRuntime();
    }
    protected Map<String, IPSDEDataImportItem> getPSDEDataImportItems(IUserContext iUserContext) throws Throwable {
        Map<String, IPSDEDataImportItem> map = super.getPSDEDataImportItems(iUserContext);
        if(!ObjectUtils.isEmpty(extendParentKeys) && getDEExtensionUtilRuntime() != null) {
            IWebContext iWebContext = iUserContext.getWebContext();
            if(iWebContext != null) {
                for (String extendParentKey : extendParentKeys) {
                    String strDataType = iWebContext.getParameter(extendParentKey);
                    if (!StringUtils.hasLength(strDataType)) {
                        continue;
                    }
                    List<IPSDEField> psDEFieldList = this.getDEExtensionUtilRuntime().getPSDEFields(String.format(DEExtensionUtilRuntimeBase.FIELD_EXTENSION_FORMAT, extendParentKey.toUpperCase(), strDataType));
                    int defaultOrderValue = 99900;
                    if (!ObjectUtils.isEmpty(psDEFieldList)) {
                        for (IPSDEField iPSDEField : psDEFieldList) {
                            if (!StringUtils.hasLength(iPSDEField.getLogicName())) {
                                continue;
                            }
                            if (map.containsKey(iPSDEField.getLogicName())) {
                                log.warn(String.format("扩展属性[%s]标题[%s]已经存在，忽略导入", iPSDEField.getName(), iPSDEField.getLogicName()));
                                continue;
                            }

                            ObjectNode objectNode = JsonUtils.createObjectNode();
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETID, iPSDEField.getLowerCaseName());
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETNAME, iPSDEField.getLowerCaseName());
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETCAPTION, iPSDEField.getLogicName());

                            //int iOrderValue = iPSDEField.getImportOrder() != 0 ? iPSDEField.getImportOrder() : iPSDEField.getOrderValue();
                            int iOrderValue = iPSDEField.getImportOrder();
                            if (iOrderValue == 0) {
                                iOrderValue = defaultOrderValue++;
                            }
                            objectNode.put(PSDEDataImportItemImpl.ATTR_GETORDERVALUE, iOrderValue);

                            IPSDEDataImportItem iPSDEDataImportItem = this.getSystemRuntime().getPSSystemService().createAndInitPSModelObject((IPSModelObjectRuntime) this.getPSDEDataImport(), IPSDEDataImportItem.class, objectNode);
                            if (iPSDEDataImportItem instanceof PSDEDataImportItemImpl) {
                                PSDEDataImportItemImpl psDEDataImportItemImpl = (PSDEDataImportItemImpl) iPSDEDataImportItem;
                                psDEDataImportItemImpl.setPSDEField(iPSDEField);
                                if (iPSDEField.getInlinePSCodeList() != null) {
                                    psDEDataImportItemImpl.setPSCodeList(iPSDEField.getInlinePSCodeList());
                                } else {
                                    psDEDataImportItemImpl.setPSCodeList(iPSDEField.getPSCodeList());
                                }
                                map.put(psDEDataImportItemImpl.getCaption(), psDEDataImportItemImpl);
                            }
                        }
                    }
                }
            }
        }
        return map;
    }

    @Override
    protected List<Map<String, Object>> doResolveData(IEntity baseEntity, Workbook wb, V2ImportSchema importSchema) throws Throwable {
        List<Map<String, Object>> dataList = super.doResolveData(baseEntity, wb, importSchema);
        //进一步解析1对多数据对象导入数据
        Map<String, IPSDEDataImportItem> psDEDataImportItemMap = getPSDEDataImportItems();
        if (psDEDataImportItemMap == null || psDEDataImportItemMap.size() == 0) {
            throw new DataEntityRuntimeException(this.getDataEntityRuntimeBase(), this, String.format("没有定义任何导入项"));
        }
        String strNestedNameFieldTag = "";
        String strNestedKeyTag = "";
        String strNestedPKeyTag = "";
        boolean enableNestedImport = false;
        for (java.util.Map.Entry<String, IPSDEDataImportItem> entry : psDEDataImportItemMap.entrySet()) {
            IPSDEField iPSDEField = entry.getValue().getPSDEFieldMust();
            if(!StringUtils.hasLength(strNestedNameField)){
                strNestedNameField = this.getDataEntityRuntime().getMajorPSDEField().getLowerCaseName();
            }
            if (iPSDEField.getLowerCaseName().equalsIgnoreCase(strNestedNameField)) {
                strNestedNameFieldTag = entry.getKey();
            }
            if (iPSDEField.getLowerCaseName().equalsIgnoreCase(strNestedPKeyField)) {
                strNestedPKeyTag = entry.getKey();
            }
            if (iPSDEField.getLowerCaseName().equalsIgnoreCase(this.getDataEntityRuntime().getKeyPSDEField().getLowerCaseName())) {
                strNestedKeyTag = entry.getKey();
            }
            if(StringUtils.hasLength(strNestedNameFieldTag) && StringUtils.hasLength(strNestedPKeyTag) && StringUtils.hasLength(strNestedKeyTag) ){
                enableNestedImport = true;
            }
        }
        if(!enableNestedImport){
            return dataList;
        }
        List<String> parentKeyList = new ArrayList<>();
        for (Map<String, Object> paramMap : dataList){
            //生成主键用于后续绑定嵌套
            IEntityDTO iEntityDTO = this.getDataEntityRuntime().createEntity(paramMap);
            this.getDataEntityRuntime().fillEntityKeyValue(iEntityDTO);
            String strKeyPSDEFieldName = this.getDataEntityRuntime().getKeyPSDEField().getLowerCaseName();
            String strKey = (String)iEntityDTO.get(strKeyPSDEFieldName);
            paramMap.put(strNestedKeyTag,strKey);
            String nestedContent = (String) paramMap.get(strNestedNameFieldTag);
            if(StringUtils.hasLength(nestedContent)&& nestedContent.startsWith(strNestedSymbol)){
                int nestCount = 0;
                while (nestedContent.startsWith(strNestedSymbol)){
                    nestedContent = nestedContent.substring(1);
                    paramMap.put(strNestedPKeyTag,parentKeyList.get(nestCount));
                    nestCount++;
                }
                if(parentKeyList.size() > nestCount){
                    parentKeyList.set(nestCount,strKey);
                }else {
                    parentKeyList.add(strKey);
                }
            }else {
                parentKeyList.clear();
                parentKeyList.add(strKey);
            }
            paramMap.put(strNestedNameFieldTag,nestedContent);
        }
        return dataList;
    }

    protected String getImportParam(String strKey, String strDefault) {
        if (this.getPSDEDataImport().getImpParams() != null) {
            JsonNode node = this.getPSDEDataImport().getImpParams().get(strKey);
            if (node != null) {
                return node.asText(strDefault);
            }
        }
        return strDefault;
    }

    protected IDEExtensionUtilRuntime getDEExtensionUtilRuntime() {
        return this.iDEExtensionUtilRuntime;
    }
}
```
### PLMAIAgentLogicNodeRuntime :id=PLMAIAgentLogicNodeRuntime
AI智能体交互逻辑节点

```cn.ibizlab.plm.user.plugin.groovy.dataentity.logic.PLMAIAgentLogicNodeRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.logic;

import groovy.transform.CompileStatic
import net.ibizsys.central.cloud.core.IServiceSystemRuntime
import net.ibizsys.central.cloud.core.ai.ISysAIChatAgentRuntime
import net.ibizsys.central.cloud.core.ai.ISysAIFactoryRuntime
import net.ibizsys.central.cloud.core.dataentity.logic.DELogicSysAIChatAgentNodeRuntime
import net.ibizsys.central.cloud.core.util.ChatMessagesBuilder
import net.ibizsys.central.cloud.core.util.domain.ChatCompletionRequest
import net.ibizsys.central.cloud.core.util.domain.ChatCompletionResult
import net.ibizsys.central.cloud.core.util.domain.ChatCompletionResultEx
import net.ibizsys.central.cloud.core.util.domain.ChatMessage
import net.ibizsys.central.dataentity.logic.IDELogicParamRuntime
import net.ibizsys.central.dataentity.logic.IDELogicRuntimeContext
import net.ibizsys.central.dataentity.logic.IDELogicSession
import net.ibizsys.model.dataentity.logic.IPSDELogicNode
import net.ibizsys.model.dataentity.logic.IPSDESysAIChatAgentLogic
import net.ibizsys.model.util.JsonUtils
import net.ibizsys.runtime.util.Entity
import org.springframework.util.ObjectUtils

import java.util.regex.Matcher
import java.util.regex.Pattern

@CompileStatic
class PLMAIAgentLogicNodeRuntime extends DELogicSysAIChatAgentNodeRuntime {


	@Override
	protected void onExecute(IDELogicRuntimeContext iDELogicRuntimeContext, IDELogicSession iDELogicSession, IPSDELogicNode iPSDELogicNode) throws Throwable {
		super.onExecute(iDELogicRuntimeContext,iDELogicSession,iPSDELogicNode);
	}

	@Override
	protected void onExecuteChatDefault(IDELogicRuntimeContext iDELogicRuntimeContext, IDELogicSession iDELogicSession, IPSDESysAIChatAgentLogic iPSDESysAIChatAgentLogic, Map<String, Object> params) throws Throwable {
		IServiceSystemRuntime iServiceSystemRuntime = (IServiceSystemRuntime)iDELogicRuntimeContext.getSystemRuntime();
		ISysAIFactoryRuntime iSysAIFactoryRuntime = iServiceSystemRuntime.getSysAIFactoryRuntime(iPSDESysAIChatAgentLogic.getPSSysAIFactoryMust().getId(), false);
		ISysAIChatAgentRuntime iSysAIChatAgentRuntime = iSysAIFactoryRuntime.getAIChatAgentRuntime(iPSDESysAIChatAgentLogic.getPSSysAIChatAgentMust().getCodeName(), false);
		IDELogicParamRuntime iDELogicParamRuntime = iDELogicRuntimeContext.getDELogicRuntime().getDELogicParamRuntime(iPSDESysAIChatAgentLogic.getDstPSDELogicParamMust().getCodeName(), false);

		ChatCompletionResult chatCompletionResult = null;
		ChatCompletionRequest chatCompletionRequest = null;
		Object objParam = iDELogicParamRuntime.getParamObject(iDELogicSession);
		if(objParam instanceof ChatCompletionRequest || objParam instanceof String) {
			chatCompletionRequest = new ChatCompletionRequest();
			if(objParam instanceof ChatCompletionRequest) {
				ChatCompletionRequest chatCompletionRequest2 = (ChatCompletionRequest)objParam;
                chatCompletionRequest2.copyTo(chatCompletionRequest);
				//放入历史消息
				if(iPSDESysAIChatAgentLogic.getHistoryCount() > 0 && !ObjectUtils.isEmpty(chatCompletionRequest2.getMessages()) && chatCompletionRequest2.getMessages().size() > iPSDESysAIChatAgentLogic.getHistoryCount()) {
					List<ChatMessage> list = chatCompletionRequest2.getMessages().subList(chatCompletionRequest2.getMessages().size() - iPSDESysAIChatAgentLogic.getHistoryCount(), chatCompletionRequest2.getMessages().size());
					chatCompletionRequest.setMessages(list);
				}
				else {
					chatCompletionRequest.setMessages(chatCompletionRequest2.getMessages());
				}
			}
			else
			if(objParam instanceof String) {
				chatCompletionRequest.setMessages(new ChatMessagesBuilder().user(objParam.toString()).build());
			}

			//指定智能体
			Map<String, String> options = JsonUtils.asMap(iPSDESysAIChatAgentLogic.getNodeParams());
			if(options.get("aiagenttag")!=null){
				chatCompletionRequest.set("srfaiagenttag",options.get("aiagenttag"));
			}
			chatCompletionResult = iSysAIChatAgentRuntime.chatCompletion(new Entity() , chatCompletionRequest, new LinkedHashMap<String, Object>(), true, false);
		}
		else {
			chatCompletionRequest = new ChatCompletionRequest();
			chatCompletionRequest.from(objParam)
			//指定智能体
			Map<String, String> options = JsonUtils.asMap(iPSDESysAIChatAgentLogic.getNodeParams());
			if(options.get("aiagenttag")!=null){
				chatCompletionRequest.set("srfaiagenttag",options.get("aiagenttag"));
			}
			chatCompletionResult = iSysAIChatAgentRuntime.chatCompletion(objParam , chatCompletionRequest, new LinkedHashMap<String, Object>(), true, true);
		}

		Object objRet = this.getRealResult(iDELogicRuntimeContext, iDELogicSession, iPSDESysAIChatAgentLogic, chatCompletionResult, chatCompletionRequest, objParam);

		iDELogicSession.setLastReturn(chatCompletionResult);

		if(iPSDESysAIChatAgentLogic.getRetPSDELogicParam() != null) {
			IDELogicParamRuntime retDELogicParamRuntime = iDELogicRuntimeContext.getDELogicRuntime().getDELogicParamRuntime(iPSDESysAIChatAgentLogic.getRetPSDELogicParam().getCodeName(), false);
			if(retDELogicParamRuntime.getReal() instanceof ChatCompletionResult){
				iDELogicSession.setLastReturn(chatCompletionResult);
				retDELogicParamRuntime.bind(iDELogicSession, chatCompletionResult);
			}else {
				iDELogicSession.setLastReturn(objRet);
				retDELogicParamRuntime.bind(iDELogicSession, objRet);
			}
		}
	}

	protected Object getRealResult(IDELogicRuntimeContext iDELogicRuntimeContext, IDELogicSession iDELogicSession, IPSDESysAIChatAgentLogic iPSDESysAIChatAgentLogic, ChatCompletionResult chatCompletionResult, ChatCompletionRequest chatCompletionRequest, Object objParam) throws Exception {
		java.lang.Object realResult = super.getRealResult(iDELogicRuntimeContext, iDELogicSession, iPSDESysAIChatAgentLogic, chatCompletionResult, chatCompletionRequest, objParam);
		if (realResult) {
			if (realResult instanceof String) {
				List<Map<String, Object>>  patterns = [
						[p: /```json\s*([\s\S]*?)\s*```/, c: { String it -> it.replace('```json', '').replace('```', '').trim() } as Closure<String>],
						[p: /```\s*([\s\S]*?)\s*```/,     c: { String it -> it.replace('```', '').trim() } as Closure<String>],
						[p: /\{[\s\S]*?\}(?=\s*[\n\r]|$)/, c: { String it -> it.trim() } as Closure<String>],
						[p: /\[[\s\S]*?\](?=\s*[\n\r]|$)/, c: { String it -> it.trim() } as Closure<String>]
				] as List<Map<String, Object>>;

				groovy.json.JsonSlurper slurper = new groovy.json.JsonSlurper()

				for (Map<String, Object> e : patterns) {
					Pattern pattern = Pattern.compile ((String)e.get('p'))
					Matcher m = pattern.matcher(realResult)
					if (m.find()) {
						String raw = m.group(0)
						Closure<String> cleanFn = (Closure<String>) e.get('c')
						String clean = cleanFn.call(raw)

						if (clean && !clean.isEmpty()) {
							try {
								Object data = slurper.parseText(clean)
								return data
							} catch (groovy.json.JsonException ignored) {
								// 继续尝试下一个模式
							}
						}
					}
				}
			}
		}
		return realResult;
	}
}
```
### PLMSysPSDEModelUtilRuntime :id=PLMSysPSDEModelUtilRuntime


```cn.ibizlab.plm.user.plugin.groovy.sysutil.PLMSysPSDEModelUtilRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.sysutil;


import net.ibizsys.central.plugin.extension.sysutil.SysPSDEModelUtilRuntime;
import net.ibizsys.central.plugin.extension.sysutil.addin.ISysPSDEModelUtilRTAddin;
import net.ibizsys.central.plugin.extension.sysutil.addin.PSDESearchBarSyncTool;
import net.ibizsys.runtime.plugin.RuntimeObjectFactory;

public class PLMSysPSDEModelUtilRuntime extends SysPSDEModelUtilRuntime {
    static {
        RuntimeObjectFactory.getInstance().registerObjectIf(ISysPSDEModelUtilRTAddin.class, "*:PSDEMODELSYNCTOOL:PSSYSSEARCHBAR", PSDESearchBarSyncTool.class);
    }
}

```
### PageDataImportRuntimeEx :id=PageDataImportRuntimeEx
页面导入使用

```cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport.PageDataImportRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport

import com.fasterxml.jackson.databind.JsonNode
import groovy.transform.CompileStatic;
import net.ibizsys.central.cloud.core.util.domain.V2ImportSchema;
import net.ibizsys.central.plugin.poi.dataentity.dataimport.POIDEDataImportRuntime
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.dataimport.IPSDEDataImportItem;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.runtime.dataentity.DataEntityRuntimeException;
import net.ibizsys.runtime.util.IEntity;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CompileStatic
public class PageDataImportRuntimeEx extends POIDEDataImportRuntime  {


}
```
### PlmSysMcpServerUtilRuntime :id=PlmSysMcpServerUtilRuntime
自动初始化AITOOL数据

```cn.ibizlab.plm.user.plugin.groovy.sysutil.PlmSysMcpServerUtilRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.sysutil

import groovy.transform.CompileStatic
import net.ibizsys.central.cloud.core.IServiceSystemRuntime
import net.ibizsys.central.cloud.core.ServiceSystemRuntime
import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.plugin.ai.sysutil.SysMcpServerUtilRuntime;
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.runtime.util.DataTypeUtils;
import net.ibizsys.runtime.util.ExceptionUtils;
import net.ibizsys.runtime.util.IAction
import net.ibizsys.runtime.util.KeyValueUtils

@CompileStatic
public class PlmSysMcpServerUtilRuntime extends SysMcpServerUtilRuntime {

    public final static String DEFAULT_TOOLTAG_FORMAT = "%s";
    public final static String DEFAULT_TOOLNAME_FORMAT = "%s内置Mcp服务";
    public final static String DEFAULT_TOOLTYPE = "mcp";
    public final static String DEFAULT_AUTHTYPE = "bearer_token";

    private IDataEntityRuntime aiToolDERuntime = null;
    protected IDataEntityRuntime getAIToolDERuntime() {
        if (this.aiToolDERuntime == null) {
            this.aiToolDERuntime = this.getMainSystemRuntime().getDataEntityRuntime("AI_TOOL");
        }

        return this.aiToolDERuntime;
    }

    @Override
    protected void onInit() throws Exception {

        super.onInit();

        // prepareAITools();
    }
    protected void onInstall() throws Exception {
        prepareAITools();
    }
    /**
     * 准备默认MCPTool数据
     * @throws Exception
     */
    protected void prepareAITools() throws Exception {
        try {
            this.getSystemRuntime().executeUserContextAction(new IAction() {
                @Override
                public Object execute(Object[] args) throws Throwable {
                    onPrepareAITools();
                    return null;
                }
            }, null);

        } catch (Throwable ex) {
            ex = ExceptionUtils.unwrapThrowable(ex);
            throw new Exception(String.format("准备AITools发生异常，%s", ex.getMessage()), ex);
        }
    }

    protected void onPrepareAITools() throws Throwable {
        IEntityDTO iEntityDTO = this.getAIToolDERuntime().createEntity();
        String toolTag = String.format(DEFAULT_TOOLTAG_FORMAT,this.getSystemRuntime().getDeploySystemId());
        String toolName = "";
        if(((ServiceSystemRuntime)this.getSystemRuntime()).getV2DeploySystem()!=null){
            toolName = String.format(DEFAULT_TOOLNAME_FORMAT,((ServiceSystemRuntime)this.getSystemRuntime()).getV2DeploySystem().getSystemName());
        }
        else if(((ServiceSystemRuntime)this.getSystemRuntime()).getV2SystemMerge()!=null){
            toolName = String.format(DEFAULT_TOOLNAME_FORMAT,((ServiceSystemRuntime)this.getSystemRuntime()).getV2SystemMerge().getMergeSystemName());
        }
        String baseUrl = this.getBaseUrl();
        iEntityDTO.set("tool_tag",toolTag);
        if(!this.getAIToolDERuntime().rawSelect(iEntityDTO,true)) {
            iEntityDTO.set("name",toolName);
            iEntityDTO.set("tool_type",DEFAULT_TOOLTYPE);
            iEntityDTO.set("api_url",baseUrl);
            iEntityDTO.set("active",1);
            iEntityDTO.set("api_auth_type", DEFAULT_AUTHTYPE);
            iEntityDTO.set("bearer_token", KeyValueUtils.genMD5Ex(toolTag));
            this.getAIToolDERuntime().execute(new IAction() {
                @Override
                public Object execute(Object[] args) throws Throwable {
                    aiToolDERuntime.create(iEntityDTO);
                    return null;
                }
            }, null);
        }else if (DataTypeUtils.getIntegerValue(iEntityDTO.get("active"), 0) == 0){
            iEntityDTO.set("active",1);
            this.getAIToolDERuntime().execute(new IAction() {
                @Override
                public Object execute(Object[] args) throws Throwable {
                    aiToolDERuntime.sysUpdate(iEntityDTO);
                    return null;
                }
            }, null);
        }
    }

    @Override
    protected void onUninstall() throws Throwable {
        IEntityDTO iEntityDTO = this.getAIToolDERuntime().createEntity();
        String toolTag = String.format(DEFAULT_TOOLTAG_FORMAT,this.getSystemRuntime().getDeploySystemId());
        iEntityDTO.set("tool_tag",toolTag);
        if(this.getAIToolDERuntime().rawSelect(iEntityDTO,true) && ((ServiceSystemRuntime)this.getSystemRuntime()).getMainSystemRuntime(true) != null) {
            iEntityDTO.set("active",0);
            this.getAIToolDERuntime().execute(new IAction() {
                @Override
                public Object execute(Object[] args) throws Throwable {
                    aiToolDERuntime.sysUpdate(iEntityDTO);
                    return null;
                }
            }, null);
        }
    }

    /**
     * 获取主系统运行时
     * @return
     */
    public IServiceSystemRuntime getMainSystemRuntime() {
        IServiceSystemRuntime mainSystemRuntime =((ServiceSystemRuntime) this.getSystemRuntime()).getMainSystemRuntime(true);
        if(mainSystemRuntime == null) {
            mainSystemRuntime = (IServiceSystemRuntime) this.getSystemRuntime();
        }
        return mainSystemRuntime;
    }
}

```
### ProjectCopyDEActionRuntime :id=ProjectCopyDEActionRuntime
项目拷贝增强插件

```cn.ibizlab.plm.user.plugin.groovy.dataentity.action.ProjectCopyDEActionRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.action

import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.plugin.util.dataentity.action.CopyDEActionRuntime
import net.ibizsys.central.util.IEntity
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.central.util.ISearchContextDTO
import net.ibizsys.central.util.Inflector
import net.ibizsys.model.PSModelEnums
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.der.IPSDER1N
import net.ibizsys.model.dataentity.der.IPSDER1NBase
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.model.dataentity.der.IPSDERCustom
import net.ibizsys.model.dataentity.ds.IPSDEDataSet
import net.ibizsys.model.dataentity.service.IPSDEMethodDTOField
import net.ibizsys.runtime.dataentity.DETypes
import net.ibizsys.runtime.util.ActionSession
import net.ibizsys.runtime.util.ActionSessionManager
import net.ibizsys.runtime.util.Conditions
import net.ibizsys.runtime.util.DataTypeUtils
import org.springframework.util.ObjectUtils
import org.springframework.util.StringUtils;

public class ProjectCopyDEActionRuntime extends CopyDEActionRuntime {

    private boolean bCopyComment = true;
    private static String WORK_ITEM_DENAME = "WORK_ITEM";
    private static String COMMENT_DENAME = "COMMENT";
    private static String COMMENTS_DEFIELD = "comments";

    @Override
    protected Object onExecute(IEntityDTO iEntityDTO) throws Throwable {
        IEntityDTO ret = super.onExecute(iEntityDTO);
        iEntityDTO.reload(ret, true);
        return ret;
    }

    @Override
    protected void onCopyPSDER1NBase(IEntityDTO srcEntityDTO, IEntityDTO retEntityDTO, IPSDER1NBase iPSDERBase) throws Throwable {
        IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntityMust().getId());
        if(WORK_ITEM_DENAME.equals(refDataEntityRuntime.getName())){
            Object objKeyValue = this.getDataEntityRuntime().getKeyFieldValue(srcEntityDTO);
            // 找到外键
            IPSDEField pickupPSDEField = null;
            IPSDEField parentTypePSDEField = null;
            IPSDEField parentSubTypePSDEField = null;

            String strParentSubType = null;
            String strParentType = null;

            IPSDEDataSet nestedPSDEDataSet = null;

            if (iPSDERBase instanceof IPSDER1N) {
                pickupPSDEField = ((IPSDER1N) iPSDERBase).getPSPickupDEFieldMust();
                nestedPSDEDataSet = ((IPSDER1N) iPSDERBase).getNestedPSDEDataSet();
            } else if (iPSDERBase instanceof IPSDERCustom) {
                IPSDERCustom iPSDERCustom = (IPSDERCustom) iPSDERBase;
                pickupPSDEField = iPSDERCustom.getPickupPSDEField();
                nestedPSDEDataSet = iPSDERCustom.getNestedPSDEDataSet();
                if (refDataEntityRuntime.getDEType() == DETypes.DYNAATTACHED || PSModelEnums.DERSubType.DER1N.value.equalsIgnoreCase(iPSDERCustom.getDERSubType())) {
                    parentTypePSDEField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTTYPE, refDataEntityRuntime.getDEType() != DETypes.DYNAATTACHED);
                    if (parentTypePSDEField != null) {
                        strParentType = iPSDERCustom.getParentType();
                        if (!StringUtils.hasLength(strParentType)) {
                            // strParentType = this.getName();
                            strParentType = this.getDataEntityRuntime().getDERParentType();
                        }
                    }
                    parentSubTypePSDEField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTSUBTYPE, true);
                    if (parentSubTypePSDEField != null) {
                        strParentSubType = iPSDERCustom.getParentSubType();
                        if (!StringUtils.hasLength(strParentSubType)) {
                            strParentSubType = iPSDERBase.getMinorCodeName();
                        }
                    }
                }
            }
            if (pickupPSDEField == null) {
                throw new Exception(String.format("克隆关系[%s]未定义连接属性", iPSDERBase.getName()));
            }

            ISearchContextDTO iSearchContextDTO = refDataEntityRuntime.createSearchContext();
            iSearchContextDTO.all().count(false);
            refDataEntityRuntime.setSearchCondition(iSearchContextDTO, pickupPSDEField, Conditions.EQ, objKeyValue);
            if (parentTypePSDEField != null) {
                refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentTypePSDEField, Conditions.EQ, strParentType);
            }
            if (parentSubTypePSDEField != null) {
                if (StringUtils.hasLength(strParentSubType)) {
                    refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentSubTypePSDEField, Conditions.EQ, DataTypeUtils.convert(parentSubTypePSDEField.getStdDataType(), strParentSubType));
                } else {
                    refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentSubTypePSDEField, Conditions.ISNULL, null);
                }
            }

            // 设置排序信息
            IPSDEField orderValuePSDEField = refDataEntityRuntime.getOrderValuePSDEField();
            if (orderValuePSDEField != null) {
                refDataEntityRuntime.setSearchSort(iSearchContextDTO, orderValuePSDEField, PSModelEnums.SortDir.ASC.value);
            }
            List<IEntityDTO> lastList = null;
            if (nestedPSDEDataSet != null) {
                lastList = refDataEntityRuntime.selectDataSet(nestedPSDEDataSet, iSearchContextDTO);
            } else {
                lastList = refDataEntityRuntime.select(iSearchContextDTO);
            }

            //以上与常规拷贝一致，下方为工作项批量拷贝
            Map<String, IEntity[]> cloneEntityDtosMap= new LinkedHashMap<>();
            if (!ObjectUtils.isEmpty(lastList)) {
                //嵌套数据列表集合
                List<IPSDER1NBase> clonelist = refDataEntityRuntime.getClonePSDER1Ns(true);
                if (!ObjectUtils.isEmpty(clonelist)) {
                    for (IPSDER1NBase clonePSDERBase : clonelist) {
                        //预处理COMMENT评论数据
                        if (COMMENT_DENAME.equals(clonePSDERBase.getMinorPSDataEntity().getName()) && bCopyComment) {
                            IDataEntityRuntime nestDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime((clonePSDERBase.getMinorPSDataEntity().getName()));
                            List<IEntityDTO> copyComments = getCopyrefs(refDataEntityRuntime, nestDataEntityRuntime, lastList, clonePSDERBase);
                            if (!ObjectUtils.isEmpty(copyComments)) {
                                for(IEntityDTO iEntityDTO :copyComments){
                                    nestDataEntityRuntime.rebuildCopyEntityDTO(iEntityDTO,true,true);
                                }
                                for (IEntityDTO item : lastList) {
                                    item.put(COMMENTS_DEFIELD,copyComments.findAll {item.get(refDataEntityRuntime.getKeyPSDEField().getLowerCaseName()).equals(it.get(clonePSDERBase.getPickupPSDEField().getLowerCaseName()))})
                                }
                            }
                        }
                    }
                    for (IEntityDTO item : lastList) {
                        refDataEntityRuntime.rebuildCopyEntityDTO(item,true,true);
                        //获取嵌套实体的克隆数据
                        for (IPSDER1NBase clonePSDERBase : clonelist) {
                            List<IEntityDTO> allNestDTOList = cloneEntityDtosMap.get(clonePSDERBase.getMinorPSDataEntity().getName());
                            if(ObjectUtils.isEmpty(allNestDTOList)){
                                allNestDTOList = new ArrayList<IEntityDTO>();
                                cloneEntityDtosMap.put(clonePSDERBase.getMinorPSDataEntity().getName(), allNestDTOList);
                            }
                            List<IEntityDTO> curItemNestDTOList =  refDataEntityRuntime.getNestedDERValue(item, clonePSDERBase);
                            if(ObjectUtils.isEmpty(curItemNestDTOList)){
                                curItemNestDTOList = item.get(Inflector.getInstance().pluralize(clonePSDERBase.getMinorPSDataEntity().getLowerCamelCodeName()));
                            }
                            if(!ObjectUtils.isEmpty(curItemNestDTOList)){
                                allNestDTOList.addAll(curItemNestDTOList);
                                IPSDEMethodDTOField iPSDEMethodDTOField = item.getDEMethodDTORuntime().getPSDEMethodDTOFieldByDER(clonePSDERBase.getId(), true);
                                if(!ObjectUtils.isEmpty(iPSDEMethodDTOField)){
                                    //排除嵌套数据，后续批保存提升速度
                                    item.reset(iPSDEMethodDTOField.getLowerCaseName());
                                }
                            }

                        }
                    }
                }

                //再次执行父键转化
                for (IPSDER1NBase clonePSDERBase : clonelist) {
                    List<IEntityDTO> allNestDTOList = cloneEntityDtosMap.get(clonePSDERBase.getMinorPSDataEntity().getName());
                    reTranstransParentId(clonePSDERBase.getMinorPSDataEntity().getName(),allNestDTOList);
                }
                refDataEntityRuntime.rawCreate(lastList,true);
            }
//            throw new Exception("TestCopy");
            //优化保存速度
            for (java.util.Map.Entry<String, Map<Object, List<String>>> entry : cloneEntityDtosMap.entrySet()) {
                if(!ObjectUtils.isEmpty(entry.value)){
                    IDataEntityRuntime nestDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(entry.key);
                    if(nestDataEntityRuntime != null){
                        nestDataEntityRuntime.rawCreate(entry.value,true);
                    }

                }
            }
        }else {
            super.onCopyPSDER1NBase(srcEntityDTO, retEntityDTO, iPSDERBase)
        }
    }

    private List<IEntityDTO> getCopyrefs(IDataEntityRuntime  srcDataEntityRuntime, IDataEntityRuntime  refDataEntityRuntime, List<IEntityDTO> srcList,IPSDER1NBase iPSDERBase){
        List<String> ids = srcList.collect {
            it.get("id")
        } as List;
        IPSDEField pickupPSDEField = null;
        IPSDEField parentTypePSDEField = null;
        IPSDEField parentSubTypePSDEField = null;
        String strParentSubType = null;
        String strParentType = null;
        IPSDEDataSet nestedPSDEDataSet = null;
        if (iPSDERBase instanceof IPSDER1N) {
            pickupPSDEField = ((IPSDER1N)iPSDERBase).getPSPickupDEFieldMust();
            nestedPSDEDataSet = ((IPSDER1N)iPSDERBase).getNestedPSDEDataSet();
        } else if (iPSDERBase instanceof IPSDERCustom) {
            IPSDERCustom iPSDERCustom = (IPSDERCustom)iPSDERBase;
            pickupPSDEField = iPSDERCustom.getPickupPSDEField();
            nestedPSDEDataSet = iPSDERCustom.getNestedPSDEDataSet();
            if (refDataEntityRuntime.getDEType() == 4 || PSModelEnums.DERSubType.DER1N.value.equalsIgnoreCase(iPSDERCustom.getDERSubType())) {
                parentTypePSDEField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTTYPE, refDataEntityRuntime.getDEType() != 4);
                if (parentTypePSDEField != null) {
                    strParentType = iPSDERCustom.getParentType();
                    if (!StringUtils.hasLength(strParentType)) {
                        strParentType = srcDataEntityRuntime.getDERParentType();
                    }
                }

                parentSubTypePSDEField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTSUBTYPE, true);
                if (parentSubTypePSDEField != null) {
                    strParentSubType = iPSDERCustom.getParentSubType();
                    if (!StringUtils.hasLength(strParentSubType)) {
                        strParentSubType = iPSDERBase.getMinorCodeName();
                    }
                }
            }
        }
        ISearchContextDTO iSearchContextDTO = refDataEntityRuntime.createSearchContext();
        iSearchContextDTO.all().count(false);
        //以下为批量查询
        iSearchContextDTO.in(pickupPSDEField.getName(),ids);
        if (parentTypePSDEField != null) {
            refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentTypePSDEField, "EQ", strParentType);
        }

        if (parentSubTypePSDEField != null) {
            if (StringUtils.hasLength(strParentSubType)) {
                refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentSubTypePSDEField, "EQ", DataTypeUtils.convert(parentSubTypePSDEField.getStdDataType(), strParentSubType));
            } else {
                refDataEntityRuntime.setSearchCondition(iSearchContextDTO, parentSubTypePSDEField, "ISNULL", (Object)null);
            }
        }

        IPSDEField orderValuePSDEField = refDataEntityRuntime.getOrderValuePSDEField();
        if (orderValuePSDEField != null) {
            refDataEntityRuntime.setSearchSort(iSearchContextDTO, orderValuePSDEField, PSModelEnums.SortDir.ASC.value);
        }

        List<IEntityDTO> lastList = null;
        if (nestedPSDEDataSet != null) {
            lastList = refDataEntityRuntime.selectDataSet(nestedPSDEDataSet, iSearchContextDTO);
        } else {
            lastList = refDataEntityRuntime.select(iSearchContextDTO);
        }
        return lastList;
    }

    private List<IEntityDTO> reTranstransParentId(String DEName, List<IEntityDTO> srcList){
        IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(DEName);
        ActionSession actionSession = ActionSessionManager.getCurrentSession();
        for (IEntityDTO iEntityDTO :srcList){
            if (!ObjectUtils.isEmpty(refDataEntityRuntime.getPSDERBases())) {
                for(IPSDERBase ipsderBase : refDataEntityRuntime.getPSDERBases()) {
                    if (ipsderBase instanceof IPSDER1NBase) {
                        IPSDER1NBase iPSDER1N = (IPSDER1NBase)ipsderBase;
                        if (iPSDER1N.getPickupPSDEField() != null) {
                            Object value = iEntityDTO.get(iPSDER1N.getPickupPSDEField().getLowerCaseName());
                            if (!ObjectUtils.isEmpty(value)) {
                                String strTag = String.format("_COPYSOURCE__%s__%s", iPSDER1N.getMajorPSDataEntityMust().getId(), value);
                                Object cache = actionSession.getActionParam(strTag);
                                if (cache instanceof IEntityDTO) {
                                    IDataEntityRuntime majorDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDER1N.getMajorPSDataEntityMust().getId());
                                    IEntityDTO cacheEntityDTO = (IEntityDTO)cache;
                                    iEntityDTO.set(iPSDER1N.getPickupPSDEField().getLowerCaseName(), majorDataEntityRuntime.getKeyFieldValue(cacheEntityDTO));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```
### SysKnowledgeBaseUtilRuntime :id=SysKnowledgeBaseUtilRuntime
知识库功能组件运行时

```net.ibizsys.central.plugin.ai.sysutil.SysKnowledgeBaseUtilRuntime```

```groovy
null
```
### SysMcpServerUtilRuntime :id=SysMcpServerUtilRuntime


```net.ibizsys.central.plugin.ai.sysutil.SysMcpServerUtilRuntime```

```groovy
null
```
### SysAtContentTranslatorRuntime :id=UsrSFPlugin0201416283
评论@转换器

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
创建版本数据

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
数据集合获取树表格层级数据

```net.ibizsys.central.plugin.util.dataentity.ds.TreeGridDEDataSetRuntime```

```groovy
null
```
### FillVersionDataDEDataSetRuntime :id=UsrSFPlugin0421357755
cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime

```cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.ds;

import groovy.transform.CompileStatic;

import java.util.function.Predicate
import java.util.stream.Collectors;

import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.plugin.util.dataentity.ds.DEDataSetRuntimeBase;
import net.ibizsys.model.PSModelEnums;
import org.springframework.data.domain.Page;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.central.util.PageImpl;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

@CompileStatic
class FillVersionDataDEDataSetRuntime extends DEDataSetRuntimeBase {

	@Override
	protected Page<?> doFetchReal(ISearchContextDTO iSearchContextDTO) throws Throwable {

		if (this.getDataEntityRuntime().getSystemPersistentAdapter() == null) {
			throw new Exception("实体未提供系统持久化设置器");
		}


		Page<?> ret = this.getDataEntityRuntime().getSystemPersistentAdapter().fetchDataSet(this.getDataEntityRuntime(), this.getPSDEDataSet(), iSearchContextDTO, null);
		Page<IEntityDTO> page = this.getDataEntityRuntime().getEntityDTOPage(ret, this.getPSDEDataSet(), iSearchContextDTO.getPageable());

		return new PageImpl<IEntityDTO>(fillVersionData(page.getContent(),iSearchContextDTO), iSearchContextDTO.getPageable(), ret.getTotalElements(), page.getTotalPages());

	}

	@Override
	public boolean isValid(Object[] args) {
		return true;
	}

	protected List<IEntityDTO> fillVersionData(List<IEntityDTO> dtos,ISearchContextDTO iSearchContextDTO){
		List<IEntityDTO> entityDTOList = new ArrayList<IEntityDTO>();
		//后续可以用参数指定
		String ownerDataKeyFieldName = "target_id";
		String ownerDataVersionKeyFieldName = "target_version_id";
		String ownerDataEntityTypeFieldName = "target_type";
		String ownerDataEntityName = "";
		List<String> fetchVersionIdList = new ArrayList<String>();
		for (IEntityDTO dto : dtos) {
			ownerDataEntityName = (String) dto.get(ownerDataEntityTypeFieldName);
			if (dto.get(ownerDataVersionKeyFieldName) == null) {
				continue;
			}
			fetchVersionIdList.add((String) dto.get(ownerDataVersionKeyFieldName));
		}
		if(!StringUtils.hasLength(ownerDataEntityName)){
			ownerDataEntityName = (String)iSearchContextDTO.get("owner_type");
		}
		if(!StringUtils.hasLength(ownerDataEntityName)){
			return dtos;
		}
		IDataEntityRuntime versionOwnerDERutime = this.getSystemRuntime().getDataEntityRuntime(ownerDataEntityName.toUpperCase());
		Map<String, IEntityDTO> versionDateMap = new LinkedHashMap<>();
		List<String> fetchLatestDataIdList = new ArrayList<String>();
		Map<String, IEntityDTO> latestVersionDateMap = new LinkedHashMap<>();
		if(versionOwnerDERutime.getDEVersionControlUtilRuntime() != null) {
			IDataEntityRuntime versionDERuntime = versionOwnerDERutime.getDEVersionControlUtilRuntime().getVersionDataEntityRuntime();
			try {
				ISearchContextDTO versionSearchContextDTO = versionDERuntime.createSearchContext();
				versionSearchContextDTO.count(false).limit(1000).in(versionDERuntime.getKeyPSDEField().getLowerCaseName(), fetchVersionIdList);
				List versionQueryRet = versionDERuntime.getSystemPersistentAdapter().query(versionDERuntime, versionDERuntime.getViewPSDEDataQuery(), versionSearchContextDTO, null);
				List<IEntityDTO> versionDTOList = versionDERuntime.getEntityDTOList(versionQueryRet, versionDERuntime.getViewPSDEDataQuery());
				for (IEntityDTO versionDTO : versionDTOList) {
					String strVersionDataId = versionDTO.getString(versionDERuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTID.value, false).getLowerCaseName(), null);
					String strVersionData = versionDTO.getString("data", null);
					if (!StringUtils.isEmpty(strVersionDataId) && !StringUtils.isEmpty(strVersionData)) {
						IEntityDTO versionDataDTO = (IEntityDTO) versionOwnerDERutime.deserializeEntity(strVersionData);
						//移除ID源对象ID字段
						versionDataDTO.reset(versionOwnerDERutime.getKeyPSDEField().getLowerCaseName());
						versionDateMap.put(strVersionDataId, versionDataDTO);
					}
					if (StringUtils.isEmpty(strVersionData)) {
						fetchLatestDataIdList.add(strVersionDataId);
					}
				}
				if (fetchLatestDataIdList.size() > 0) {
					ISearchContextDTO versionOwnerSearchContextDTO = versionDERuntime.createSearchContext();
					versionOwnerSearchContextDTO.count(false).limit(1000).in(versionOwnerDERutime.getKeyPSDEField().getLowerCaseName(), fetchLatestDataIdList);
					Page<?> ownerDataFetchRet = versionOwnerDERutime.getSystemPersistentAdapter().fetchDataSet(versionOwnerDERutime, versionOwnerDERutime.getDefaultPSDEDataSet(), versionOwnerSearchContextDTO, null);
					Page<IEntityDTO> ownerDataPage = versionOwnerDERutime.getEntityDTOPage(ownerDataFetchRet, versionOwnerDERutime.getDefaultPSDEDataSet(), versionOwnerSearchContextDTO.getPageable());
					for (IEntityDTO ownerDataDTO : ownerDataPage.getContent()) {
						String strOwnerDataDTOId = ownerDataDTO.getString(versionOwnerDERutime.getKeyPSDEField().getLowerCaseName(), null);
						ownerDataDTO.reset(versionOwnerDERutime.getKeyPSDEField().getLowerCaseName());
						latestVersionDateMap.put(strOwnerDataDTOId, ownerDataDTO);
					}
				}

			} catch (Throwable e) {
				throw new RuntimeException("查询目标版本数据异常");
			}
		}
		for(IEntityDTO dto : dtos) {
			String strVersionOwnerId = (String) dto.get(ownerDataKeyFieldName);
			if(versionDateMap.containsKey(strVersionOwnerId)){
				dto.putAll(versionDateMap.get(strVersionOwnerId).any());
			}
			if(latestVersionDateMap.containsKey(strVersionOwnerId)){
				dto.putAll(latestVersionDateMap.get(strVersionOwnerId).any());
			}
			entityDTOList.add(dto);
		}
		entityDTOList = filterVersionData(entityDTOList,iSearchContextDTO);
		return entityDTOList;
	}

	protected List<IEntityDTO> filterVersionData(List<IEntityDTO> dtos,ISearchContextDTO iSearchContextDTO){
		List<IEntityDTO> filterDtos = new ArrayList<>();
		//轻量级过滤
		Map<String, Object> params = iSearchContextDTO.any();
		List<String> strSearchConds = params.keySet().stream().filter({ key -> key.startsWith("n_") && key.split("_").length == 3 && this.getDataEntityRuntime().getPSDEFieldByCodeName(key.split("_")[1], true) != null }).collect(Collectors.toList());
		for (int i = 0;i< strSearchConds.size();i++ ) {
			String key = strSearchConds.get(i)
			List<IEntityDTO> filterResults = new ArrayList<>();
            Object objValue = params.get(key);
            String fieldName = key.split("_")[1];
            String operator = key.split("_")[2];
            if (operator.equalsIgnoreCase("eq")) {
				filterDtos.addAll(dtos.stream().filter({IEntityDTO iEntityDTO -> !ObjectUtils.isEmpty(iEntityDTO.get(fieldName)) && iEntityDTO.get(fieldName).equals(objValue)} as Predicate<IEntityDTO>).collect(Collectors.toList()));
            } else if (operator.equalsIgnoreCase("isnull")) {
				filterDtos.addAll(dtos.stream().filter({IEntityDTO iEntityDTO -> ObjectUtils.isEmpty(iEntityDTO.get(fieldName)) } as Predicate<IEntityDTO>).collect(Collectors.toList()));
            } else if (operator.equalsIgnoreCase("isnotnull")) {
				filterDtos.addAll(dtos.stream().filter({IEntityDTO iEntityDTO -> !ObjectUtils.isEmpty(iEntityDTO.get(fieldName)) } as Predicate<IEntityDTO>).collect(Collectors.toList()));
            }
        }
		if(strSearchConds.size() == 0){
			return dtos;
		}
		return filterDtos;
	}
}

```
### POIDEDataImportRuntimeEx :id=UsrSFPlugin0423541619
暂不使用

```cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport.POIDEDataImportRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataimport;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.CellValue;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.DataValidation;
import org.apache.poi.ss.usermodel.DataValidationConstraint;
import org.apache.poi.ss.usermodel.DataValidationHelper;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.FormulaEvaluator;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.ss.util.CellRangeAddressList;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;

import net.ibizsys.central.plugin.poi.dataentity.dataimport.POIDEDataImportRuntime;
import net.ibizsys.central.cloud.core.util.domain.V2ImportSchema;
import net.ibizsys.central.cloud.core.util.domain.V2ImportSchemaField;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.sysutil.ISysOSSUtilRuntime;
import net.ibizsys.central.util.domain.ImportDataResult;
import net.ibizsys.model.codelist.IPSCodeItem;
import net.ibizsys.model.codelist.IPSCodeList;
import net.ibizsys.model.dataentity.dataimport.IPSDEDataImportItem;
import net.ibizsys.runtime.codelist.ICodeListRuntime;
import net.ibizsys.runtime.dataentity.DataEntityRuntimeException;
import net.ibizsys.runtime.security.IUserContext;
import net.ibizsys.runtime.sysutil.ISysFileUtilRuntime;
import net.ibizsys.runtime.util.EntityError;
import net.ibizsys.runtime.util.IEntity;

public class POIDEDataImportRuntimeEx extends POIDEDataImportRuntime  {
    
}
```
### FixCommitVersionDEActionRuntime :id=UsrSFPlugin0424197954
初始化版本数据（修复版本）

```net.ibizsys.central.plugin.version.dataentity.action.FixCommitVersionDEActionRuntime```

```groovy
null
```
### One2ManyUserImpTransRuntime :id=UsrSFPlugin0424744613
参数名               说明                                   默认值
username       指定从用户实体对象中获取值名称名称             display_name
userdename     指定用户数据实体名称                          user
one2manyfield  指定转换器属性映射的1对多集合属性名称          attentions
one2manyuserid 指定映射的1对多集合属性中存储用户标识属性名称   user_id

```cn.ibizlab.plm.plugin.util.res.One2ManyUserImpTransRuntime```

```groovy
package cn.ibizlab.plm.plugin.util.res;

import groovy.transform.CompileStatic;

import net.ibizsys.central.plugin.util.res.SysTranslatorRuntimeBase;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.defield.IPSOne2ManyDataDEField;
import net.ibizsys.model.dataentity.der.IPSDERBase;
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.runtime.dataentity.defield.DEFPredefinedTypes;
import org.springframework.data.domain.Page;
import org.springframework.util.ObjectUtils;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.runtime.dataentity.IDataEntityRuntime;

import java.util.ArrayList;
import java.util.List;

@CompileStatic
class One2ManyUserImpTransRuntime extends SysTranslatorRuntimeBase {

	private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(One2ManyUserImpTransRuntime.class);



	public final static String PARAM_USERNAME = "username";

	public final static String PARAM_USERDENAME = "userdename";

	public final static String PARAM_ONE2MANYFIELD = "one2manyfield";

	public final static String PARAM_ONE2MANYUSERID = "one2manyuserid";

	private String strUserDEName = null;

	private String strUserNameField = null;

	private String strOne2ManyField = null;

	private String strOne2ManyUserId = null;
	@Override
	protected void onInit() throws Exception {

		this.strUserDEName = this.getTranslatorParam(PARAM_USERDENAME, "USER");
		this.strUserNameField = this.getTranslatorParam(PARAM_USERNAME, "display_name");
		this.strOne2ManyField = this.getTranslatorParam(PARAM_ONE2MANYFIELD, "attentions");
		this.strOne2ManyUserId = this.getTranslatorParam(PARAM_ONE2MANYUSERID, "user_id");
		super.onInit();
	}

	@Override
	protected Object onTranslate(Object objValue, boolean bIn, IEntityDTO iEntityDTO, IPSDEField iPSDEField, IDataEntityRuntime entityDataEntityRuntime) throws Throwable {
		if (bIn && !ObjectUtils.isEmpty(objValue) && iEntityDTO!=null ) {
			IPSDEField iPSDEField2 = entityDataEntityRuntime.getPSDEField(strOne2ManyField);
			if (PSModelEnums.DEFDataType.ONE2MANYDATA.value.equals(iPSDEField2.getDataType())) {
				if (!(objValue instanceof String)) {
					return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
				}
                objValue = ((String)objValue).replace("，",",");
				IPSOne2ManyDataDEField iPSOne2ManyDataDEField = (IPSOne2ManyDataDEField) iPSDEField2;
				IPSDERBase iPSDERBase = iPSOne2ManyDataDEField.getPSDER();
				if (iPSDERBase == null) {
					throw new RuntimeException(String.format("关系集合属性未绑定关系"));
				}
				IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntityMust().getId(), false);
				IDataEntityRuntime UserDataEntityRuntime = getSystemRuntime().getDataEntityRuntime(strUserDEName);
				if (refDataEntityRuntime instanceof net.ibizsys.central.dataentity.IDataEntityRuntime) {
					IPSDEField parentIdField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTID, true);
					IPSDEField parentTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTTYPE, true);
					IPSDEField parentSubTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTSUBTYPE.value, true);
					List one2manyDatas = new ArrayList<>();
					ISearchContextDTO searchContextDTO = (ISearchContextDTO) UserDataEntityRuntime.createSearchContext();
					searchContextDTO.all().count(false).in(strUserNameField, objValue);
                    def args = [searchContextDTO] as Object[]
					Page<IEntityDTO> page = (Page<IEntityDTO>) (UserDataEntityRuntime).fetchDataSet(null, UserDataEntityRuntime.getDefaultPSDEDataSet(), args);
					if (page.getContent().size() > 0) {
						for (IEntityDTO itemDTO : page.getContent()) {
							IEntityDTO refEntityDTO = ((net.ibizsys.central.dataentity.IDataEntityRuntime) refDataEntityRuntime).createEntity();
							refEntityDTO.set(refDataEntityRuntime.getMajorPSDEField().getLowerCaseName(), itemDTO.get(strUserNameField));
							refEntityDTO.set(strOne2ManyUserId.toLowerCase(), itemDTO.get(UserDataEntityRuntime.getKeyPSDEField().getLowerCaseName()));
							if(parentIdField!=null) {
								refEntityDTO.set(parentIdField.getLowerCaseName(), iEntityDTO.get(entityDataEntityRuntime.getKeyPSDEField().getLowerCaseName()));
							}
							if(parentTypeField!=null) {
								refEntityDTO.set(parentTypeField.getLowerCaseName(), entityDataEntityRuntime.getName());
							}
							if(parentSubTypeField != null && iPSDERBase instanceof IPSDERCustom){
								refEntityDTO.set(parentSubTypeField.getLowerCaseName(),((IPSDERCustom)iPSDERBase).getTypeValue());
						}

							one2manyDatas.add(refEntityDTO);
						}
					}
					iEntityDTO.set(strOne2ManyField.toLowerCase(), one2manyDatas);
				}
			}
		}
		return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
	}

}

```
### DEVersionStorageUtilRuntimeEx :id=UsrSFPlugin0425071911
查询版本关联数据

```cn.ibizlab.plm.user.plugin.groovy.dataentity.util.DEVersionStorageUtilRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.util;

import groovy.transform.CompileStatic;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.dataentity.ds.DEDQJoinTypes;
import net.ibizsys.central.dataentity.util.DEVersionStorageUtilRuntime;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.central.util.SearchContextDTO;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.model.dataentity.der.IPSDER1N;
import net.ibizsys.model.dataentity.der.IPSDERBase;
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.model.dataentity.ds.IPSDEDQJoin;
import net.ibizsys.model.dataentity.ds.IPSDEDataQuery;
import net.ibizsys.model.dataentity.ds.IPSDEDataSet;
import net.ibizsys.runtime.util.ISearchCond;
import org.springframework.util.ObjectUtils;

import java.util.ArrayList;
import java.util.Map;
import java.util.LinkedHashMap;
import java.util.List;

@CompileStatic
public class DEVersionStorageUtilRuntimeEx extends DEVersionStorageUtilRuntime {

    @Override
    protected void prepareVersionDataEntityRuntime() throws Exception {
        super.prepareVersionDataEntityRuntime();
    }

    @Override
    protected List<IEntityDTO> filterEntityDTOList(List<IEntityDTO> list, IPSDEDataSet iPSDEDataSet, ISearchContextDTO iSearchContextDTO) throws Throwable {
        List<IEntityDTO> filterList = super.filterEntityDTOList(list,iPSDEDataSet,iSearchContextDTO);
        Map<String, Object> params = new LinkedHashMap<>();
        if(iSearchContextDTO.any()!=null) {
            params.putAll(iSearchContextDTO.any());
        }
        List<IPSDEDataQuery> psDEDataQueryList = iPSDEDataSet.getPSDEDataQueries();
        if(!ObjectUtils.isEmpty(psDEDataQueryList)) {
            for(IPSDEDataQuery iPSDEDataQuery : psDEDataQueryList) {
                if(iPSDEDataQuery.getPSDEDQMain() != null
                        && iPSDEDataQuery.getPSDEDQMain().getPSDEDQGroupCondition() != null) {
                    List<IPSDEDQJoin> childPSDEDQJoins =  iPSDEDataQuery.getPSDEDQMain().getChildPSDEDQJoins();
                    //只识别第一层
                    for (IPSDEDQJoin childPSDEDQJoin: childPSDEDQJoins) {
                        if (DEDQJoinTypes.TYPE_N1.equals(childPSDEDQJoin.getJoinType())) {
                            ISearchCond joinPSDESearchCond = super.getSearchCond(childPSDEDQJoin.getPSDEDQGroupCondition(), params);
                            IPSDERBase joinPSDER = childPSDEDQJoin.getJoinPSDER();
                            IPSDEField pickupPSDEField = null;
                            IDataEntityRuntime joinPSDERuntime = this.getSystemRuntime().getDataEntityRuntime(childPSDEDQJoin.getJoinPSDataEntity().getName());

                            if (joinPSDER instanceof IPSDER1N) {
                                IPSDER1N iPSDER1N = (IPSDER1N) joinPSDER;
                                pickupPSDEField = iPSDER1N.getPSPickupDEFieldMust();
                            } else if (joinPSDER instanceof IPSDERCustom) {
                                IPSDERCustom iPSDERCustom = (IPSDERCustom) joinPSDER;
                                pickupPSDEField = iPSDERCustom.getPickupPSDEField();
                            } else{
                                continue;
                            }
                            
                            Map<String, IEntityDTO> entityDTOMap = new LinkedHashMap<>();
                            for (IEntityDTO iEntityDTO : filterList) {
                                entityDTOMap.put((String) iEntityDTO.get(pickupPSDEField.getLowerCaseName()), iEntityDTO);
                            }
                            SearchContextDTO joinPSDESearchContextDTO = (SearchContextDTO) joinPSDERuntime.createSearchContext(params);
                            List joinPSDESearchCondList = new ArrayList();
                            joinPSDESearchCondList.add(joinPSDESearchCond);
                            joinPSDESearchContextDTO.setSearchConds(joinPSDESearchCondList);
                            joinPSDESearchContextDTO.all().count(false).in(joinPSDERuntime.getKeyPSDEField().getLowerCaseName(), entityDTOMap.keySet());
                            List<IEntityDTO> joinDEList = joinPSDERuntime.selectDataSet(joinPSDERuntime.getDefaultPSDEDataSet(), joinPSDESearchContextDTO);
                            List joinfilterList = new ArrayList();
                            for (IEntityDTO iEntityDTO : joinDEList) {
                                Object key = joinPSDERuntime.getKeyFieldValue(iEntityDTO);
                                if (entityDTOMap.containsKey(key)) {
                                    joinfilterList.add(entityDTOMap.get(key));
                                }
                            }
                            filterList.clear();
                            filterList.addAll(joinfilterList);
                        }
                    }
                }
            }
        }
        return filterList;
    }
}

```
### MemberWorklaodDEDataSetRuntime :id=UsrSFPlugin0508758798
工时管理，人员维度数据集合后台插件

```cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.MemberWorklaodDEDataSetRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.ds;

import groovy.transform.CompileStatic
import net.ibizsys.runtime.util.ISearchCond
import net.ibizsys.runtime.util.SearchFieldCond
import net.ibizsys.runtime.util.SearchGroupCond
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.plugin.util.dataentity.ds.DEDataSetRuntimeBase;
import org.springframework.data.domain.Page;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.central.util.PageImpl
import org.springframework.data.domain.Pageable;

@CompileStatic
class MemberWorklaodDEDataSetRuntime extends DEDataSetRuntimeBase {

	@Override
	protected Page<?> doFetchReal(ISearchContextDTO iSearchContextDTO) throws Throwable {

		if (this.getDataEntityRuntime().getSystemPersistentAdapter() == null) {
			throw new Exception("实体未提供系统持久化设置器");
		}

        // 获取User实体
        IDataEntityRuntime userDERutime = this.getSystemRuntime().getDataEntityRuntime("USER");
        ISearchContextDTO userSearchContextDTO = userDERutime.createSearchContext();
		userSearchContextDTO.setPageable(iSearchContextDTO.getPageable());
		userSearchContextDTO.sort("display_name,desc");
		// 判断搜索条件中是否包含登记人
        String objValue = null;
		for (ISearchCond first : iSearchContextDTO.searchConds) {
			SearchGroupCond firstSearchGroupCond = (SearchGroupCond)first;
			if (firstSearchGroupCond.searchConds.size() > 0) {
				for (ISearchCond second : firstSearchGroupCond.searchConds) {
					if (second instanceof SearchGroupCond){
						SearchGroupCond secondSearchGroupCond = (SearchGroupCond)second;
						if (secondSearchGroupCond.searchConds.size() > 0){
							for (ISearchCond third : secondSearchGroupCond.searchConds) {
								if (third instanceof SearchFieldCond){
									SearchFieldCond searchFieldCond = (SearchFieldCond)third;
									if (searchFieldCond.getFieldName() == "create_man"){
                                        objValue = String.valueOf(searchFieldCond.getValue());
										if (!Objects.isNull(objValue)){
											objValue = objValue.replaceAll("'", "");
										}
                                        print "连接符" + searchFieldCond.getCondOp();
										//userSearchContextDTO.setFieldCond("id", searchFieldCond.getCondOp(), objValue);
									}
								}
							}
						}
					}
				}
			}
		}
        if (!Objects.isNull(objValue)) {
            List<IEntityDTO> dtos = new ArrayList<>();
            String[] strArr= objValue.split(",");
            for (int i = 0; i < strArr.length; i++){
                IEntityDTO userDTO = userDERutime.createEntity();
                userDTO.put("id", strArr[i]);
                dtos.add(userDTO);
            }
            int pageNum = strArr.length == 0 ? 1 : (int)Math.ceil((double)strArr.length / (double)userSearchContextDTO.getPageable().getPageSize());
            return new CustomPageImpl<IEntityDTO>(fillWorkloadData(dtos, iSearchContextDTO), userSearchContextDTO.getPageable(), strArr.length, pageNum);
        }
        // 调用User的workload数据集合
        Object[] args = [userSearchContextDTO];
		Page<?> ret = (Page<?>)userDERutime.fetchDataSet("workload", null, args);
		Page<IEntityDTO> page = userDERutime.getEntityDTOPage(ret, userDERutime.getDefaultPSDEDataSet(), userSearchContextDTO.getPageable());
		return new CustomPageImpl<IEntityDTO>(fillWorkloadData(page.getContent(), iSearchContextDTO), userSearchContextDTO.getPageable(), ret.getTotalElements(), page.getTotalPages());
	}

	@Override
	public boolean isValid(Object[] args) {
		return true;
	}

	protected List<IEntityDTO> fillWorkloadData(List<IEntityDTO> dtos,ISearchContextDTO iSearchContextDTO){
		List<String> fetchUserIdList = new ArrayList<String>();
		// 查询工时日志
		for (IEntityDTO dto : dtos) {
			fetchUserIdList.add(dto.getString("id", ""));
		}
		iSearchContextDTO.count(false).limit(10000)//in("create_man", fetchUserIdList);
		List<IEntityDTO> worklaodDTOList = this.getDataEntityRuntime().selectDataQuery("calendar", iSearchContextDTO);
		if(worklaodDTOList != null && worklaodDTOList.size() > 0){
			for (IEntityDTO user : dtos) {
				boolean userExistsWorkload = false;
				for (IEntityDTO workload : worklaodDTOList) {
					if(user.getString("id", "") == workload.getString("create_man", "")){
						userExistsWorkload = true;
						break;
					}
				}
				if(!userExistsWorkload){
					IEntityDTO entityDTO = this.getDataEntityRuntime().createEntity();
					entityDTO.put("create_man", user.getString("id", ""));
					entityDTO.put("duration", 0);
					worklaodDTOList.add(entityDTO);
				}
			}
			return worklaodDTOList;
		}
		List<IEntityDTO> emptyDTOList = new ArrayList<IEntityDTO>();
		for (IEntityDTO user : dtos) {
			IEntityDTO entityDTO = this.getDataEntityRuntime().createEntity();
			entityDTO.put("create_man", user.getString("id", ""));
			entityDTO.put("duration", 0);
			emptyDTOList.add(entityDTO);
		}

		return emptyDTOList;
	}

	class CustomPageImpl<T> extends net.ibizsys.central.util.PageImpl<T> {
		private final long total;
		public CustomPageImpl(List<T> content, Pageable pageable, long total, int totalPages) {
			super(content, pageable, total,totalPages);
			this.total = total;
		}

		@Override
		long getTotalElements() {
			return total;
		}
	}
}
```
### One2ManyCaseStepImpTransRuntime :id=UsrSFPlugin0515997865
用例步骤导入增强

```cn.ibizlab.plm.plugin.util.res.One2ManyCaseStepImpTransRuntime```

```groovy
package cn.ibizlab.plm.plugin.util.res;

import groovy.transform.CompileStatic;

import net.ibizsys.central.plugin.util.res.SysTranslatorRuntimeBase;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.defield.IPSOne2ManyDataDEField;
import net.ibizsys.model.dataentity.der.IPSDERBase;
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.runtime.dataentity.defield.DEFPredefinedTypes
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.util.ObjectUtils;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.defield.IPSDEField;
import net.ibizsys.runtime.dataentity.IDataEntityRuntime;

import java.util.ArrayList;
import java.util.List
import java.util.Map.Entry
import java.util.regex.Matcher
import java.util.regex.Pattern;

@CompileStatic
class One2ManyCaseStepImpTransRuntime extends SysTranslatorRuntimeBase {

    private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(One2ManyCaseStepImpTransRuntime.class);

    private static final String STEP_VALUE = "STEP_VALUE_IMP";

    private String strOne2ManyField = null;

    @Override
    protected void onInit() throws Exception {

        this.strOne2ManyField = "steps";
        super.onInit();
    }

    @Override
    protected Object onTranslate(Object objValue, boolean bIn, IEntityDTO iEntityDTO, IPSDEField iPSDEField, IDataEntityRuntime entityDataEntityRuntime) throws Throwable {
        if (bIn && !ObjectUtils.isEmpty(objValue) && iEntityDTO != null) {
            IPSDEField iPSDEField2 = entityDataEntityRuntime.getPSDEField(strOne2ManyField);
            if (PSModelEnums.DEFDataType.ONE2MANYDATA.value.equals(iPSDEField2.getDataType())) {
                if (!(objValue instanceof String)) {
                    return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
                }
                /**
                 * 步骤导入说明
                 * 使用STEP_DESC_IMP字段和STEP_VALUE_IMP字段分别接收步骤描述和步骤预期结果。
                 * 该插件绑定在STEP_DESC_IMP中，因为预期结果可能为空
                 *
                 * STEP_VALUE_IMP的值可以直接从iEntityDTO中取出
                 */
                String[] stepDescs = ((String) objValue).split("\n");
                String[] stepValues = Optional.ofNullable(iEntityDTO.getString(STEP_VALUE.toLowerCase(), null))
                        .map({ value -> value.split("\n") }).orElse(new String[0]);
                // 转换为HashMap储存，以序号为key
                Map<String, Object> stepDescMap = formatStepImp(stepDescs);
                Map<String, Object> stepValueMap = formatStepImp(stepValues);

                IPSOne2ManyDataDEField iPSOne2ManyDataDEField = (IPSOne2ManyDataDEField) iPSDEField2;
                IPSDERBase iPSDERBase = iPSOne2ManyDataDEField.getPSDER();
                if (iPSDERBase == null) {
                    throw new RuntimeException(String.format("关系集合属性未绑定关系"));
                }
                IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntityMust().getId(), false);
                if (refDataEntityRuntime instanceof net.ibizsys.central.dataentity.IDataEntityRuntime) {
                    List one2manyDatas = new ArrayList<>();
                    if (stepDescMap.size() > 0) {
                        for (int i = 1; i <= stepDescMap.size(); i++) {
                            IEntityDTO refEntityDTO = ((net.ibizsys.central.dataentity.IDataEntityRuntime) refDataEntityRuntime).createEntity();
                            String mainKey = i;
                            String subKey = i + "#";
                            String id = UUID.randomUUID()
                            if (stepDescMap.get(mainKey) == null) {
                                // 结束
                                break;
                            }

                            if (stepDescMap.get(subKey) == null) {
                                // 不是分组，进行构造实体
                                refEntityDTO.put("description", stepDescMap.get(mainKey));
                                refEntityDTO.put("expected_value", stepValueMap.get(mainKey));
                                refEntityDTO.put("is_group", 0);
                                refEntityDTO.put("id", id);
                                one2manyDatas.add(refEntityDTO);
                                continue;
                            }

                            // 构造实体，并构造子步骤
                            refEntityDTO.put("name", stepDescMap.get(mainKey));
                            refEntityDTO.put("is_group", 1);
                            refEntityDTO.put("id", id);
                            one2manyDatas.add(refEntityDTO);
                            // 子步骤
                            Map<Integer, String> subDescMap = (Map<Integer, String>) stepDescMap.get(subKey);
                            // 给一个默认值，是防止有对应的步骤描述，但是没有对应的预期结果
                            Map<Integer, String> subValueMap = (Map<Integer, String>) stepValueMap.getOrDefault(subKey, new HashMap<>());

                            for (Entry entry : subDescMap.entrySet()) {
                                // 遍历子步骤的描述，对应的预期结果不存在，则直接为空
                                IEntityDTO refSubEntityDTO = ((net.ibizsys.central.dataentity.IDataEntityRuntime) refDataEntityRuntime).createEntity();
                                refSubEntityDTO.put("description", entry.value);
                                refSubEntityDTO.put("expected_value", subValueMap.get(entry.key));
                                refSubEntityDTO.put("is_group", 0);
                                refSubEntityDTO.put("group_id", id);
                                refSubEntityDTO.put("id", UUID.randomUUID());
                                one2manyDatas.add(refSubEntityDTO);
                            }
                        }
                    }
                    iEntityDTO.set(strOne2ManyField.toLowerCase(), one2manyDatas);
                }
            }
        }
        return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
    }

    /**
     * 将步骤导入数据格式化为Map类型，并以序号为Key
     *
     * 步骤导入规则
     * 步骤描述	文本，步骤请加编号填写，如1.xxx、2.xxx；分组填写，子步骤前加“→”，如1.xxx、→1.xxx；每个分组或步骤单元格内换行。
     * 预期结果	文本，保持编号与步骤对应，如1.xxx、2.xxx；分组的预期结果不用填写，子预期前加“→”，如1. 空、→1.xxx，每个预期结果单元格内换行。
     * @param stepImp
     * @return
     */
    private static Map<String, Object> formatStepImp(String[] stepImp) {
        Map<String, Object> map = new HashMap<>();
        // 使用正则表达式找到序号
        Pattern pattern = Pattern.compile("^(→?)(\\d+)\\.")
        int curNum = 1;
        for (String step : stepImp) {
            Matcher matcher = pattern.matcher(step);
            if (!matcher.find()) {
                // 未匹配，直接返回异常，并告知异常行
                throw new RuntimeException("该行步骤规则不匹配：" + step);
            }
            String flag = matcher.group(1);
            String num = matcher.group(2);
            String mapValue = step.substring(matcher.group().length());

            if (curNum == Integer.parseInt(num)) {
                // 不是分组
                map.put(num, mapValue);
                curNum++;
                continue;
            }

            if (flag != null && StringUtils.isNotEmpty(flag)) {
                // 为子步骤
                if (curNum - 1 != Integer.parseInt(num)) {
                    // 子步骤的序号不对，抛出异常
                    throw new RuntimeException("该行子步骤序号不匹配：" + step);
                }
                Map<Integer, String> subMap = (Map<Integer, String>) map.get(num + "#", new HashMap<>());
                int order = subMap.size() + 1;
                subMap.put(order, mapValue);

            }

        }
        return map;
    }
}

```
### TestCasePOIDEDataExportRuntimeEx :id=UsrSFPlugin0521277606
测试用例自定义导出

```cn.ibizlab.plm.user.plugin.groovy.dataentity.dataexport.TestCasePOIDEDataExportRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.dataexport

import groovy.transform.CompileStatic;
import net.ibizsys.central.plugin.poi.dataentity.dataexport.POIDEDataExportRuntime
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.model.dataentity.dataexport.IPSDEDataExportGroup;
import net.ibizsys.model.dataentity.dataexport.IPSDEDataExportItem;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.data.domain.Page;
import org.springframework.util.ObjectUtils;

@CompileStatic
class TestCasePOIDEDataExportRuntimeEx extends POIDEDataExportRuntime  {

    int descSubstepCounter = 1;
    int descCounter = 1;
    int resultSubstepCounter = 1;
    int resultCounter = 1;
    String sort = "";
    int rowNum = 1;
    int startRowNum = 0;

    @Override
    protected void onExportStream(Object objData, OutputStream outputStram) throws Throwable {
        Workbook workbook = new XSSFWorkbook();
        Throwable var4 = null;

        try {
            List<IPSDEDataExportItem> exportItems = this.getPSDEDataExportItems();
            if (ObjectUtils.isEmpty(exportItems)) {
                throw new Exception("未指定导出列");
            }

            Sheet sheet = workbook.createSheet();
            int nGroupLevel = this.getGroupLevel();

            for(int i = 0; i < nGroupLevel; ++i) {
                sheet.createRow(i);
            }

            //创建表头
            Row row = sheet.createRow(nGroupLevel);
            Map<String, List<Cell>> mergedCellMap = new HashMap();

            for(int i = 0; i < exportItems.size(); ++i) {
                IPSDEDataExportItem iPSDEDataExportItem = (IPSDEDataExportItem)exportItems.get(i);
                Cell cell0 = row.createCell(i);
                cell0.setCellValue(iPSDEDataExportItem.getCaption());
                if (nGroupLevel > 0) {
                    this.fillMergedCellMap(mergedCellMap, iPSDEDataExportItem.getName(), cell0, iPSDEDataExportItem, (IPSDEDataExportGroup)null);
                }
            }

            //合并单元格
            if (mergedCellMap.size() > 0) {
                this.addMergedRegions(sheet, mergedCellMap);
            }

            // 填充数据行
            List<IEntityDTO> data = ((Page) objData).getContent();
            for (int i = 0; i < data.size(); ++i) {
                IEntityDTO testCase = (IEntityDTO) data.get(i);
                List<IEntityDTO> steps = (List<IEntityDTO>) testCase.get("steps");
                this.startRowNum = this.rowNum;
                //循环步骤
                for (int j = 0; j < (steps.size() == 0 ? 1 : steps.size()); j++) {
                    Row dataRow = sheet.createRow(this.rowNum);
                    //循环表头
                    for (int k = 0; k < exportItems.size(); ++k) {
                        IPSDEDataExportItem iPSDEDataExportItem = (IPSDEDataExportItem) exportItems.get(k);
                        Object objValue = testCase.get(iPSDEDataExportItem.getName());
                        Cell cell0 = dataRow.createCell(k);

                        // 如果字段是步骤描述和预期结果相关的，使用parseSteps填充
                        if (iPSDEDataExportItem.getName().equals("step_desc") && steps.size() != 0) {
                            String parsedSteps = stepDesc(steps, j);
                            cell0.setCellValue(parsedSteps);
                        } else if(iPSDEDataExportItem.getName().equals("expected_result") && steps.size() != 0) {
                            String parsedSteps = expectedResult(steps, j);
                            cell0.setCellValue(parsedSteps);
                            IEntityDTO step = steps.get(j);
                            if (step.get("is_group") && (int) step.get("is_group") == 1) {
                                sheet.addMergedRegion(new CellRangeAddress(this.rowNum, this.rowNum, k - 1, k));
                            }
                        } else if(iPSDEDataExportItem.getName().equals("precondition")){
                            if (testCase.get("precondition") != null){
                                String precondition = extractTextFromHtml(testCase.get("precondition").toString());
                                cell0.setCellValue(precondition);
                            }
                            if ((this.startRowNum != this.rowNum) && (j == steps.size() - 1)) {
                                sheet.addMergedRegion(new CellRangeAddress(this.startRowNum, this.rowNum, k, k));
                            }
                        } else {
                            if (objValue != null) {
                                cell0.setCellValue(this.convertValue(iPSDEDataExportItem, objValue));
                            }
                            if ((this.startRowNum != this.rowNum) && (j == steps.size() - 1)) {
                                sheet.addMergedRegion(new CellRangeAddress(this.startRowNum, this.rowNum, k, k));
                            }
                        }
                    }
                    this.rowNum++;
                }
                this.resultCounter = 1;
                this.descCounter = 1;
            }
            workbook.write(outputStram);
        } catch (Throwable var25) {
            var4 = var25;
            throw var25;
        } finally {
            if (workbook != null) {
                if (var4 != null) {
                    try {
                        workbook.close();
                    } catch (Throwable var24) {
                        var4.addSuppressed(var24);
                    }
                } else {
                    workbook.close();
                }
            }
            this.descSubstepCounter = 1;
            this.descCounter = 1;
            this.resultSubstepCounter = 1;
            this.resultCounter = 1;
            this.sort = "";
            this.rowNum = 1;
            this.startRowNum = 0;
        }
    }

    String stepDesc(List<IEntityDTO> steps, int i) {
        StringBuilder result = new StringBuilder();

        IEntityDTO step = steps.get(i);
        // 如果是分组, 处理分组
        if (step.get("group_id") != null) {
            this.sort = this.descCounter -1 + "." + this.descSubstepCounter;
            String description = (String) step.get("description");
            result.append("→").append(this.sort).append(". ").append(description ?: "");
            this.sort = "";
            this.descSubstepCounter ++;
        } else if (step.get("is_group") && (int) step.get("is_group") == 1) {
            String groupName = (String) step.get("name");
            result.append(this.descCounter).append(". ").append(groupName ?: "");
            this.descSubstepCounter = 1;
            this.descCounter++;
        } else {
            // 正常的步骤
            String description = (String) step.get("description");
            result.append(this.descCounter).append(". ").append(description ?: "");
            this.descSubstepCounter = 1;
            this.descCounter++;
        }

        return result.toString();
    }

    String expectedResult(List<IEntityDTO> steps, int i) {
        StringBuilder result = new StringBuilder();

        IEntityDTO step = steps.get(i);
        // 如果是分组, 处理分组
        if (step.get("is_group") && (int) step.get("is_group") == 1) {
            String groupName = (String) step.get("name");
            result.append(this.resultCounter).append(". ").append(groupName ?: "");
            this.resultSubstepCounter = 1;
            this.resultCounter++;
        } else if (step.get("group_id") != null) {
            this.sort = this.resultCounter -1 + "." + this.resultSubstepCounter;
            String expected_value = (String) step.get("expected_value");
            result.append("→").append(this.sort).append(". ").append(expected_value ?: "");
            this.sort = "";
            this.resultSubstepCounter ++;
        } else {
            // 正常的步骤
            String expectedValue = (String) step.get("expected_value");
            result.append(this.resultCounter).append(". ").append(expectedValue ?: "");
            this.resultSubstepCounter = 1;
            this.resultCounter++;
        }
        return result.toString();
    }

    String extractTextFromHtml(String htmlContent) {
        // 使用 Jsoup 解析 HTML 内容
        Document document = Jsoup.parse(htmlContent);
        // 提取并返回纯文本内容
        return document.text();
    }

}
```
### SysPSDEModelUtilRuntime :id=UsrSFPlugin0606633396


```net.ibizsys.central.plugin.extension.sysutil.SysPSDEModelUtilRuntime```

```groovy
null
```
### HtmlToPdfTransRuntime :id=UsrSFPlugin0612360832
Html转PDF格式

```cn.ibizlab.plm.user.plugin.groovy.dataentity.logicnode.HtmlToPdfTransRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.logicnode;

import groovy.transform.CompileStatic
import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.dataentity.logic.DELogicNodeRuntimeBase
import net.ibizsys.central.dataentity.logic.IDELogicParamRuntime
import net.ibizsys.central.dataentity.logic.IDELogicRuntimeContext
import net.ibizsys.central.dataentity.logic.IDELogicSession
import net.ibizsys.central.util.IEntity
import net.ibizsys.model.dataentity.logic.IPSDELogicNode

@CompileStatic
class HtmlToPdfTransRuntime extends DELogicNodeRuntimeBase {
    @Override
	protected void onExecute(IDELogicRuntimeContext iDELogicRuntimeContext, IDELogicSession iDELogicSession, IPSDELogicNode iPSDELogicNode) throws Throwable {

    }
}
```
### BoardMovePositionDEActionRuntime :id=UsrSFPlugin0618803950
看板工作项移动排序

```cn.ibizlab.plm.user.plugin.groovy.dataentity.ac.BoardMovePositionDEActionRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.ac;

import groovy.transform.CompileStatic
import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.dataentity.action.DEActionRuntimeBase
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.central.util.ISearchContextDTO
import net.ibizsys.central.util.SearchContextDTO
import net.ibizsys.model.dataentity.action.IPSDEAction
import net.ibizsys.model.dataentity.action.IPSDEUserCustomAction
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.ds.IPSDEDataSet
import net.ibizsys.runtime.dataentity.action.DEActionModes
import org.springframework.util.ObjectUtils
import org.springframework.util.StringUtils

@CompileStatic
class BoardMovePositionDEActionRuntime extends DEActionRuntimeBase{

	public BoardMovePositionDEActionRuntime() {
	}

	@Override
	protected Object onExecute(IEntityDTO iEntityDTO) throws Throwable {
		IDataEntityRuntime entityDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime("WORK_ITEM");
		IPSDEField positionValuePSDEField = entityDataEntityRuntime.getPSDEField("entry_position");
		String strCurrentKey = iEntityDTO.getString(entityDataEntityRuntime.getKeyPSDEField().getLowerCaseName(), null);
		if(!StringUtils.hasLength(strCurrentKey)) {
			throw new Exception("未指定移动操作的数据");
		}
		String strTargetKey = iEntityDTO.getString(DEActionModes.PARAM_MOVEORDER_TARGETKEY, null);
		if(!StringUtils.hasLength(strTargetKey)) {
			throw new Exception("未指定移动操作的目标数据");
		}

		if(strCurrentKey.equals(strTargetKey)) {
			throw new Exception("指定移动操作的数据与目标数据不能一致");
		}

		String strMoveType = iEntityDTO.getString(DEActionModes.PARAM_MOVEORDER_MOVETYPE, null);
		if(!StringUtils.hasLength(strMoveType)) {
			throw new Exception("未指定移动操作的类型");
		}

		if(!DEActionModes.MOVETYPE_MOVEAFTER.equalsIgnoreCase(strMoveType)
				&& !DEActionModes.MOVETYPE_MOVEBEFORE.equalsIgnoreCase(strMoveType)
				&& !DEActionModes.MOVETYPE_SWITCHPOS.equalsIgnoreCase(strMoveType)){
			throw new Exception(String.format("无法识别的移动操作类型[%s]", strMoveType));
		}
		IPSDEAction iPSDEAction = entityDataEntityRuntime.getPSDEAction("board_move_position");
		IPSDEDataSet iPSDEDataSet =	null;
		if(iPSDEAction instanceof IPSDEUserCustomAction) {
			IPSDEUserCustomAction iPSDEUserCustomAction = (IPSDEUserCustomAction)iPSDEAction;
			iPSDEDataSet =	iPSDEUserCustomAction.getPSDEDataSet();
		}
		if(iPSDEDataSet == null) {
			iPSDEDataSet = entityDataEntityRuntime.getOrderScopePSDEDataSet();
		}
		if(iPSDEDataSet == null) {
			throw new Exception("未指定移动操作的相关数据集");
		}
		ISearchContextDTO iSearchContextDTO = entityDataEntityRuntime.createSearchContext();
		iSearchContextDTO.putAll(iEntityDTO.any());
		String entry_id = iEntityDTO.getString("entry_id", null);
		if(entry_id == null){
			throw new Exception("未指定移动操作的所属看板栏");
		}
		iSearchContextDTO.eq("entry_id", entry_id); // 所属看板栏
		iSearchContextDTO.count(false).all();

		entityDataEntityRuntime.setSearchSort(iSearchContextDTO, positionValuePSDEField, "ASC");

		//查出数据
		List<IEntityDTO> list = entityDataEntityRuntime.selectDataSet(iPSDEDataSet, iSearchContextDTO);
		if(ObjectUtils.isEmpty(list) ) {
			throw new Exception("无法获取移动的数据集");
		}
		Map<String, Integer> map = new LinkedHashMap<String, Integer>();
		for(IEntityDTO item : list) {
			map.put(item.getString(entityDataEntityRuntime.getKeyPSDEField().getLowerCaseName(), null), item.getInteger(positionValuePSDEField.getLowerCaseName(), Integer.MAX_VALUE));
		}

		if(!map.containsKey(strCurrentKey)) {
			throw new Exception("未指定移动操作的数据");
		}

		// if(!map.containsKey(strTargetKey)) {
		// 	throw new Exception("未指定移动操作的目标数据");
		// }

		List<String> keyList = new ArrayList<String>();
		keyList.addAll(map.keySet());

		int nTargetPos = keyList.indexOf(strTargetKey);
		int nCurrentPos = keyList.indexOf(strCurrentKey);

		List<IEntityDTO> changedList = new ArrayList<IEntityDTO>();

		if(DEActionModes.MOVETYPE_MOVEAFTER.equalsIgnoreCase(strMoveType)) {
			if(nTargetPos + 1 == nCurrentPos) {
				return changedList;
			}

			keyList.remove(strCurrentKey);
			nTargetPos = keyList.indexOf(strTargetKey);
			keyList.add(nTargetPos + 1, strCurrentKey);
		}
		else
		if(DEActionModes.MOVETYPE_MOVEBEFORE.equalsIgnoreCase(strMoveType)) {
			if(nTargetPos - 1 == nCurrentPos) {
				return changedList;
			}

			keyList.remove(strCurrentKey);
			nTargetPos = keyList.indexOf(strTargetKey);
			keyList.add(nTargetPos, strCurrentKey);
		}
		else
		if(DEActionModes.MOVETYPE_SWITCHPOS.equalsIgnoreCase(strMoveType)) {
			keyList.remove(strCurrentKey);
			keyList.remove(strTargetKey);
			if(nCurrentPos < nTargetPos) {
				//之前
				keyList.add(nCurrentPos, strTargetKey);
				keyList.add(nTargetPos, strCurrentKey);
			}
			else {
				keyList.add(nTargetPos, strCurrentKey);
				keyList.add(nCurrentPos, strTargetKey);
			}
		}

		//重新排序

		for(int i =0;i<keyList.size();i++) {
			String strKey = keyList.get(i);
			int nNewOrder = 1 +  i * 1;
			int nLastOrder = map.get(strKey);
			if(nNewOrder == nLastOrder) {
				continue;
			}

			IEntityDTO item = entityDataEntityRuntime.createEntity();
			item.set(entityDataEntityRuntime.getKeyPSDEField().getLowerCaseName(), strKey);
			item.set(positionValuePSDEField.getLowerCaseName(), nNewOrder);
			changedList.add(item);
		}

		if(!ObjectUtils.isEmpty(changedList)) {
			//执行批更新
			entityDataEntityRuntime.rawUpdate(changedList, false);
		}

		if(changedList.size() > SearchContextDTO.getMaxSize() * 10) {
			return null;
		}

		return changedList;
	}

	
	
}
```
### CreateWorkItemLogicNodeRuntime :id=UsrSFPlugin0619559336
工作项自定义工作项类型创建逻辑节点

```cn.ibizlab.plm.user.plugin.groovy.dataentity.logic.CreateWorkItemLogicNodeRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.logic;

import groovy.transform.CompileStatic
import org.springframework.beans.factory.annotation.Qualifier
import net.ibizsys.central.dataentity.IDataEntityRuntime
import net.ibizsys.central.dataentity.logic.DELogicNodeRuntimeBase
import net.ibizsys.central.dataentity.logic.IDELogicParamRuntime
import net.ibizsys.central.dataentity.logic.IDELogicRuntimeContext
import net.ibizsys.central.dataentity.logic.IDELogicSession
import net.ibizsys.central.util.IEntity
import net.ibizsys.model.dataentity.logic.IPSDELogicNode

@CompileStatic
class CreateWorkItemLogicNodeRuntime extends DELogicNodeRuntimeBase {

    @Qualifier("WORK_ITEM")
	IDataEntityRuntime workItemRuntime;

    @Override
	protected void onExecute(IDELogicRuntimeContext iDELogicRuntimeContext, IDELogicSession iDELogicSession, IPSDELogicNode iPSDELogicNode) throws Throwable {
        IEntity workItem = workItemRuntime.createEntity();
	}
}
```
### MSLogicCodeListRuntimeEx :id=UsrSFPlugin0623056576


```cn.ibizlab.plm.user.plugin.groovy.dataentity.codelist.MSLogicCodeListRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.codelist

import com.fasterxml.jackson.databind.node.ObjectNode
import groovy.transform.CompileStatic
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.central.dataentity.logic.IDEMSLogicRuntime
import net.ibizsys.model.IPSModelObjectRuntime
import net.ibizsys.model.codelist.IPSCodeItem
import net.ibizsys.model.codelist.IPSCodeList
import net.ibizsys.model.codelist.PSCodeItemImpl
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.logic.IPSDEMSLogicNode
import net.ibizsys.central.codelist.DEMainStateCodeListRuntime
import net.ibizsys.central.codelist.DynamicCodeListRuntimeBase
import net.ibizsys.runtime.SystemRuntimeException
import net.ibizsys.runtime.codelist.DynamicCodeListRuntime
import net.ibizsys.runtime.codelist.ICodeListRuntime
import net.ibizsys.runtime.util.DataTypeUtils
import net.ibizsys.runtime.util.IEntity
import net.ibizsys.runtime.util.JsonUtils
import org.springframework.util.ObjectUtils


@CompileStatic
class MSLogicCodeListRuntimeEx extends DEMainStateCodeListRuntime {

    @Override
    List<IPSCodeItem> getPSCodeItems(Object dataOrKey) {
        try {
            IEntity iEntity = getEntity(dataOrKey);
            IDEMSLogicRuntime iDEMSLogicRuntime = (iEntity!=null)?this.getDEMSLogicRuntime(iEntity):null;
            if(iDEMSLogicRuntime != null) {
                ICodeListRuntime basicCodeListRuntime =  this.getSystemRuntime().getCodeListRuntime("ProjMgmt__work_item_state2",true);
                basicCodeListRuntime
                IPSCodeItem baseCodeItem = null;
                java.util.List<IPSCodeItem> psCodeItemList = new ArrayList<IPSCodeItem>();
                List<IPSDEMSLogicNode> nextPSDEMSLogicNodeList = null;
                List<IPSDEField> mainStatePSDEFieldList = this.getDataEntityRuntime().getPSDataEntity().getMainStatePSDEFields();
                //提取代码项值，当前业务为状态值2
                String strState = DataTypeUtils.getStringValue(this.getDataEntityRuntime().getFieldValue(iEntity, mainStatePSDEFieldList.get(1)), "");
                try {
                    nextPSDEMSLogicNodeList = iDEMSLogicRuntime.getNextPSDEMSLogicNodes(iEntity);
                }catch (Exception e) {
                    if(!ObjectUtils.isEmpty(basicCodeListRuntime)){
                        if(basicCodeListRuntime instanceof DynamicCodeListRuntimeBase){
                            baseCodeItem = ((DynamicCodeListRuntimeBase)basicCodeListRuntime).getPSCodeItem(null,strState,true);
                        }else {
                            baseCodeItem = basicCodeListRuntime.getPSCodeItem(strState,true);
                        }
                    }
                }
                //正常顺序输出
                List<IPSDEMSLogicNode> psDEMSLogicNodeList = iDEMSLogicRuntime.getPSDEMSLogic().getPSDEMSLogicNodes();
                if(!ObjectUtils.isEmpty(psDEMSLogicNodeList)) {
                    for(IPSDEMSLogicNode iPSDEMSLogicNode : psDEMSLogicNodeList) {
                        IPSCodeItem iPSCodeItem = null;
                        //无状态值时输出全部
                        if(ObjectUtils.isEmpty(strState)){
                            iPSCodeItem = getPSCodeItemWithDefColor(iPSDEMSLogicNode, false, basicCodeListRuntime);
                        }else {
                            if(nextPSDEMSLogicNodeList!=null) {
                                if(nextPSDEMSLogicNodeList.contains(iPSDEMSLogicNode)) {
                                    iPSCodeItem = getPSCodeItemWithDefColor(iPSDEMSLogicNode, false , basicCodeListRuntime);
                                }
                                else {
                                    iPSCodeItem = getPSCodeItemWithDefColor(iPSDEMSLogicNode, true, basicCodeListRuntime);
                                }
                            }else {
                                iPSCodeItem = getPSCodeItemWithDefColor(iPSDEMSLogicNode, false, basicCodeListRuntime);
                            }
                        }
                        psCodeItemList.add(iPSCodeItem);
                    }
                }

                if(!ObjectUtils.isEmpty(baseCodeItem)){
                    //不存在于逻辑中的默认代码项置于末位
                    psCodeItemList.add(getPSCodeItemWithBase(baseCodeItem));
                }
                return psCodeItemList;
            }
        }
        catch (Throwable ex) {
            throw new SystemRuntimeException(this.getSystemRuntimeBase(), this, String.format("获取代码项发生异常｛0｝", ex.getMessage()), ex);
        }

        return super.getPSCodeItems(dataOrKey);
    }

    protected IPSCodeItem getPSCodeItemWithDefColor(IPSDEMSLogicNode iPSDEMSLogicNode, boolean bDisabled,ICodeListRuntime basicCodeListRuntime){
        //构建代码项
        String strValue = org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getStateValue())?iPSDEMSLogicNode.getStateValue():iPSDEMSLogicNode.getCodeName();

        ObjectNode objNode = JsonUtils.createObjectNode();
        objNode.put(PSCodeItemImpl.ATTR_GETCODENAME, iPSDEMSLogicNode.getCodeName());
        objNode.put(PSCodeItemImpl.ATTR_GETNAME,  iPSDEMSLogicNode.getName());
        objNode.put(PSCodeItemImpl.ATTR_GETVALUE,  strValue);
        objNode.put(PSCodeItemImpl.ATTR_GETTEXT,  iPSDEMSLogicNode.getName());

        if(org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getBKColor())) {
            objNode.put(PSCodeItemImpl.ATTR_GETBKCOLOR,  iPSDEMSLogicNode.getBKColor());
        }else {
            //默认取基础代码表中对应项的颜色
            IPSCodeItem baseCodeItem = basicCodeListRuntime.getPSCodeItem(strValue);
            if(!ObjectUtils.isEmpty(baseCodeItem)){
                objNode.put(PSCodeItemImpl.ATTR_GETBKCOLOR,  baseCodeItem.getColor());
            }
        }
        if(org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getColor())) {
            objNode.put(PSCodeItemImpl.ATTR_GETCOLOR,  iPSDEMSLogicNode.getColor());
        }else {
            //默认字体白色
            objNode.put(PSCodeItemImpl.ATTR_GETCOLOR,  "#FFFFFF");
        }

        if(org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getCssClass())) {
            objNode.put(PSCodeItemImpl.ATTR_GETTEXTCLS,  iPSDEMSLogicNode.getCssClass());
        }
        if(org.springframework.util.StringUtils.hasLength(iPSDEMSLogicNode.getMemo())) {
            objNode.put(PSCodeItemImpl.ATTR_GETTOOLTIP,  iPSDEMSLogicNode.getMemo());
        }

        if(iPSDEMSLogicNode.isDefaultMode()) {
            objNode.put(PSCodeItemImpl.ATTR_ISDEFAULT, true);
        }

        if(bDisabled) {
            objNode.put(PSCodeItemImpl.ATTR_ISDISABLESELECT, bDisabled);
        }


        return this.getSystemRuntimeBaseContext().getPSSystemService().createAndInitPSModelObject((IPSModelObjectRuntime)this.getPSCodeList(),
                IPSCodeItem.class, objNode);
    }

    protected IPSCodeItem getPSCodeItemWithBase(IPSCodeItem iPSCodeItem){
        //构建代码项
        String strValue = iPSCodeItem.value;

        ObjectNode objNode = JsonUtils.createObjectNode();
        objNode.put(PSCodeItemImpl.ATTR_GETCODENAME, iPSCodeItem.getCodeName());
        objNode.put(PSCodeItemImpl.ATTR_GETNAME,  iPSCodeItem.getName());
        objNode.put(PSCodeItemImpl.ATTR_GETVALUE,  strValue);
        objNode.put(PSCodeItemImpl.ATTR_GETTEXT,  iPSCodeItem.getText());

        if(org.springframework.util.StringUtils.hasLength(iPSCodeItem.getColor())) {
            objNode.put(PSCodeItemImpl.ATTR_GETBKCOLOR,  iPSCodeItem.getColor());
        }
        //默认字体白色
        objNode.put(PSCodeItemImpl.ATTR_GETCOLOR,  "#FFFFFF");

        if(org.springframework.util.StringUtils.hasLength(iPSCodeItem.getTextCls())) {
            objNode.put(PSCodeItemImpl.ATTR_GETTEXTCLS,  iPSCodeItem.getTextCls());
        }
        if(org.springframework.util.StringUtils.hasLength(iPSCodeItem.getTooltip())) {
            objNode.put(PSCodeItemImpl.ATTR_GETTOOLTIP,  iPSCodeItem.getTooltip());
        }

        if(iPSCodeItem.isDefault()) {
            objNode.put(PSCodeItemImpl.ATTR_ISDEFAULT, true);
        }

        objNode.put(PSCodeItemImpl.ATTR_ISDISABLESELECT, true);


        return this.getSystemRuntimeBaseContext().getPSSystemService().createAndInitPSModelObject((IPSModelObjectRuntime)this.getPSCodeList(),
                IPSCodeItem.class, objNode);
    }

    protected IEntity getEntity(Object keyOrData) throws Throwable {
        if(keyOrData instanceof IEntity) {
            return (IEntity)keyOrData;
        }
        if(keyOrData instanceof Map) {
            IEntityDTO iEntityDTO = this.getDataEntityRuntime().createEntity((Map)keyOrData, false);
            this.getDataEntityRuntime().rawSelect(iEntityDTO,true);
            return iEntityDTO;
        }


        Object objKeyValue = DataTypeUtils.asSimple(keyOrData);
        IEntityDTO iEntityDTO = this.getDataEntityRuntime().createEntity();
        iEntityDTO.set( this.getDataEntityRuntime().getKeyPSDEField().getLowerCaseName(), objKeyValue);
        return iEntityDTO;
    }
}
```
### DEVersionControlUtilRuntimeEx :id=UsrSFPlugin0628633282
排除新建模式行为自动建立版本

```cn.ibizlab.plm.user.plugin.groovy.dataentity.util.DEVersionControlUtilRuntimeEx```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.util;

import groovy.transform.CompileStatic;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.model.PSModelEnums.DER1NMasterRS;
import net.ibizsys.model.PSModelEnums.DERSubType;
import net.ibizsys.model.PSModelEnums.DERType;
import net.ibizsys.model.PSModelEnums.DEUtilType;
import net.ibizsys.model.PSModelEnums.PredefinedFieldType;
import net.ibizsys.model.PSModelEnums.SortDir;
import net.ibizsys.model.dataentity.IPSDataEntity;
import net.ibizsys.model.dataentity.action.IPSDEAction;
import net.ibizsys.runtime.dataentity.DataEntityRuntimeException;
import net.ibizsys.runtime.util.ActionSessionManager;
import net.ibizsys.runtime.util.DataTypeUtils;
import net.ibizsys.runtime.util.IAction;
import net.ibizsys.runtime.util.IEntityBase;
import net.ibizsys.runtime.util.KeyValueUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.Assert;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import net.ibizsys.central.dataentity.util.DEVersionControlUtilRuntime;

@CompileStatic
public class DEVersionControlUtilRuntimeEx extends DEVersionControlUtilRuntime {

    @Override
    public boolean isCommit(String strActionName, IPSDEAction iPSDEAction) {
        if ("create".equalsIgnoreCase(strActionName)) {
            return true;
        } else {
            return this.isAutoCommit() && "update".equalsIgnoreCase(strActionName);
        }
    }
}

```
### SysDEBIReportProxyUtilRuntime :id=UsrSFPlugin0702700490


```net.ibizsys.central.plugin.extension.sysutil.SysDEBIReportProxyUtilRuntime```

```groovy
null
```
### GroupNestedFieldsDEDataSetRuntime :id=UsrSFPlugin1018391929
分组数据集填充嵌套数据

```cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.GroupNestedFieldsDEDataSetRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.ds;

import groovy.transform.CompileStatic
import net.ibizsys.central.util.PageImpl
import net.ibizsys.central.plugin.util.dataentity.ds.DEDataSetRuntimeBase;
import org.springframework.data.domain.Page;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;

import net.ibizsys.model.PSModelEnums;
import net.ibizsys.model.dataentity.defield.IPSDEFGroup;

@CompileStatic
class GroupNestedFieldsDEDataSetRuntime extends DEDataSetRuntimeBase {
    @Override
    protected Page<?> doFetchReal(ISearchContextDTO iSearchContextDTO) throws Throwable {
        if (this.getDataEntityRuntime().getSystemPersistentAdapter() == null) {
            throw new Exception("实体未提供系统持久化设置器");
        }

        Page<?> ret = this.getDataEntityRuntime().getSystemPersistentAdapter().fetchDataSet(this.getDataEntityRuntime(), this.getPSDEDataSet(), iSearchContextDTO, null);
        Page<IEntityDTO> page = this.getDataEntityRuntime().getEntityDTOPage(ret, this.getPSDEDataSet(), iSearchContextDTO.getPageable());

        return new PageImpl<IEntityDTO>(page.getContent(), iSearchContextDTO.getPageable(), ret.getTotalElements(), page.getTotalPages());

    }

    @Override
    protected Page<IEntityDTO> translatePageAfterProceed(Page<?> ret, ISearchContextDTO iSearchContextDTO) throws Throwable{
        Page<IEntityDTO> page = this.getDataEntityRuntime().getEntityDTOPage(ret, this.getPSDEDataSet(), iSearchContextDTO.getPageable());
        if(isFillEntityDTOPageNestedFields() && iSearchContextDTO.isFillNestedFields()) {
            // this.getDataEntityRuntime().fillEntityDTOPageNestedFields(page, this.getPSDEDataSet());
            if(this.getPSDEDataSet().getViewLevel() == PSModelEnums.DEDataQueryViewLevel.ALL.value) {
                this.getDataEntityRuntime().fillEntityDTONestedFields(page.getContent(), (IPSDEFGroup)null);
            }
        }
        return page;
    }
}
```
### PSDESearchBarSyncTool :id=UsrSFPlugin1021369361


```cn.ibizlab.plm.user.plugin.groovy.sysutil.addin.PSDESearchBarSyncTool```

```groovy
package net.ibizsys.central.plugin.extension.sysutil.addin

import com.fasterxml.jackson.databind.JsonNode;
import net.ibizsys.model.app.IPSApplication;
import net.ibizsys.model.app.dataentity.IPSAppDataEntity;
import net.ibizsys.model.app.view.IPSAppDEGridView
import net.ibizsys.model.app.view.IPSAppDETreeGridView;
import net.ibizsys.model.app.view.IPSAppView;
import net.ibizsys.model.control.searchbar.IPSSearchBar;
import net.ibizsys.model.control.searchbar.IPSSearchBarGroup
import net.ibizsys.runtime.util.JsonUtils;
import org.apache.commons.logging.LogFactory;
import org.springframework.util.ObjectUtils;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.model.dataentity.IPSDataEntity;
import net.ibizsys.model.dataentity.der.IPSDERBase;
import net.ibizsys.model.dataentity.der.IPSDERCustom;
import net.ibizsys.model.dataentity.ds.IPSDEDataSet;

public class PSDESearchBarSyncTool extends PSDEModelSyncToolBase {

	private static final org.apache.commons.logging.Log log = LogFactory.getLog(PSDESearchBarSyncTool.class);

	@Override
	protected void onSync(IPSDataEntity iPSDataEntity, Object param) throws Throwable {

		Map<String, Object> params = null;
		if(param instanceof Map) {
			params = (Map)param;
		}
		IDataEntityRuntime iDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDataEntity.getId());

		List<Map> mapList = new ArrayList<Map>();

		List<IPSDERBase> psDERBaseList = iPSDataEntity.getMinorPSDERs();
		if(!ObjectUtils.isEmpty(psDERBaseList)) {
			for(IPSDERBase iPSDERBase : psDERBaseList) {

				if(!(iPSDERBase instanceof IPSDERCustom)) {
					continue;
				}

				IPSDERCustom iPSDERCustom = (IPSDERCustom)iPSDERBase;

				//获取相应的视图
				IPSDataEntity majorPSDataEntity = iPSDERCustom.getMajorPSDataEntityMust();
				Set<String> viewCache = new HashSet<>();
				for(IPSApplication application : getSystemRuntime().getPSSystem().getAllPSApps()){
					IPSAppDataEntity majorPSAppDataEntity;
					for(IPSAppDataEntity appDataEntity: application.getAllPSAppDataEntities()){
						if(appDataEntity.getName().equals(majorPSDataEntity.getName())){
							majorPSAppDataEntity = appDataEntity;
							break;
						}
					}
					if (majorPSAppDataEntity == null){
						break;
					}
					for (IPSAppView appView : majorPSAppDataEntity.getAllPSAppViews()){
						//仅支持表格视图中绑定的搜索栏
						if(appView instanceof IPSAppDEGridView || appView instanceof IPSAppDETreeGridView){
							//避免重复添加
							if(viewCache.contains(appView.getCodeName())){
								continue;
							}
							viewCache.add(appView.getCodeName());
							IPSSearchBar searchbar = (IPSSearchBar)appView.getPSControl("searchbar",true);
							if(searchbar == null){
								searchbar = appView.getPSViewLayoutPanel().getPSControl("searchbar",true);
							}
							if(searchbar != null){
								int ordervalueindex = 1;
								for (IPSSearchBarGroup group : searchbar.getPSSearchBarGroups()) {

									Map<String, Object> obj = new LinkedHashMap<String, Object>();
									obj.put("APP_VIEW_TAG", appView.getCodeName());
//									obj.put("APP_TAG", application.getCodeName());
									obj.put("NAME", group.getName());
									obj.put("OWNER_TYPE", "SYSTEM");
									if (!ObjectUtils.isEmpty(group.getData())){
										try {
											JsonNode jsonNode = JsonUtils.MAPPER.readTree(group.getData())
											obj.put("THEME_MODEL",jsonNode.get("theme_model").toString());
										} catch (Exception e) {
											continue;
										}
									}
									obj.put("SYSTEM_TAG", getSystemRuntime().getDeploySystemId());
									obj.put("VALID_FLAG", 1);
									obj.put("ORDER_VALUE", ordervalueindex * 100);
									obj.put("CAPTION",  group.getCaption());
									mapList.add(obj);
									ordervalueindex = ordervalueindex+1;
								}
							}
						}
					}
				}
			}
		}

		//查询历史数据
		Map<String, IEntityDTO> lastEntityDTOMap = null;

		IPSDEDataSet iPSDEDataSet = iDataEntityRuntime.getPSDEDataSetByTag(PSMODELSYNC_PREDEFINEDDATASET_PSMODELSYNC, true);
		if(iPSDEDataSet != null) {

			lastEntityDTOMap = new HashMap<String, IEntityDTO>();
			ISearchContextDTO iSearchContextDTO = iDataEntityRuntime.createSearchContext();
			iSearchContextDTO.all().count(false);
			iSearchContextDTO.eq("SYSTEM_TAG",getSystemRuntime().getDeploySystemId());
			List<IEntityDTO> list = iDataEntityRuntime.selectDataSet(iPSDEDataSet, iSearchContextDTO);
			for(IEntityDTO item : list) {
				String unionTag = String.format("%s|%s", item.get("APP_VIEW_TAG"),item.get("NAME"));
				lastEntityDTOMap.put(unionTag, item);
			}
		}


		//执行批保存
		List<IEntityDTO> updateentityList = new ArrayList<IEntityDTO>();
		List<IEntityDTO> createentityList = new ArrayList<IEntityDTO>();
		for(Map<String, Object> item : mapList) {
			IEntityDTO iEntityDTO = iDataEntityRuntime.createEntity(item);
			String unionTag = String.format("%s|%s", item.get("APP_VIEW_TAG"),item.get("NAME"));
			if(lastEntityDTOMap != null && lastEntityDTOMap.containsKey(unionTag)) {
				IEntityDTO lastEntity = lastEntityDTOMap.get(unionTag);
				iEntityDTO.set(iDataEntityRuntime.getKeyPSDEField().getLowerCaseName(),lastEntity.get(iDataEntityRuntime.getKeyPSDEField().getLowerCaseName(),null));
				if(lastEntity.get("CAPTION").equals(item.get("CAPTION")) &&lastEntity.get("THEME_MODEL").equals(item.get("THEME_MODEL"))){
					continue;
				}
				updateentityList.add(iEntityDTO);
			}else {
				createentityList.add(iEntityDTO);
			}
		}


		for(IEntityDTO iEntityDTO : createentityList) {
			iDataEntityRuntime.fillEntityKeyValue(iEntityDTO);
		}

		if(ObjectUtils.isEmpty(createentityList)&& ObjectUtils.isEmpty(updateentityList)){
			return;
		}

		try {
			if(!ObjectUtils.isEmpty(createentityList) ) {
				iDataEntityRuntime.rawCreate(createentityList, true);
			}
			if(!ObjectUtils.isEmpty(updateentityList) ) {
				iDataEntityRuntime.rawUpdate(updateentityList, true);
			}
		}
		catch (Throwable ex) {
			log.error(String.format("同步搜索栏发生异常，%s", ex.getMessage()), ex);
		}
	}

}

```
### One2ManyDeliverableImpTransRuntime :id=UsrSFPlugin1119809482
导入工作项时，生成交付物
多个交付物以“；”进行隔开

```cn.ibizlab.plm.plugin.util.res.One2ManyDeliverableImpTransRuntime```

```groovy
package cn.ibizlab.plm.plugin.util.res

import groovy.transform.CompileStatic
import net.ibizsys.central.plugin.util.res.SysTranslatorRuntimeBase
import net.ibizsys.central.util.IEntityDTO
import net.ibizsys.model.PSModelEnums
import net.ibizsys.model.dataentity.defield.IPSDEField
import net.ibizsys.model.dataentity.defield.IPSOne2ManyDataDEField
import net.ibizsys.model.dataentity.der.IPSDERBase
import net.ibizsys.model.dataentity.der.IPSDERCustom
import net.ibizsys.runtime.dataentity.IDataEntityRuntime
import net.ibizsys.runtime.dataentity.defield.DEFPredefinedTypes
import org.springframework.util.ObjectUtils

@CompileStatic
class One2ManyDeliverableImpTransRuntime extends SysTranslatorRuntimeBase {

    private static final org.apache.commons.logging.Log log = org.apache.commons.logging.LogFactory.getLog(One2ManyDeliverableImpTransRuntime.class);

    private String strOne2ManyField = null;
    @Override
    protected void onInit() throws Exception {
        this.strOne2ManyField = "deliverable";
        super.onInit();
    }

    @Override
    protected Object onTranslate(Object objValue, boolean bIn, IEntityDTO iEntityDTO, IPSDEField iPSDEField, IDataEntityRuntime entityDataEntityRuntime) throws Throwable {
        if (bIn && !ObjectUtils.isEmpty(objValue) && iEntityDTO!=null ) {
            // 找到要导入的字段，并判断是否为一对多字段
            IPSDEField iPSDEField2 = entityDataEntityRuntime.getPSDEField(strOne2ManyField);
            if (PSModelEnums.DEFDataType.ONE2MANYDATA.value.equals(iPSDEField2.getDataType())) {
                // 确保为String，才走后面的逻辑
                if (!(objValue instanceof String)) {
                    return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
                }
                // 确保存在对应关系
                IPSOne2ManyDataDEField iPSOne2ManyDataDEField = (IPSOne2ManyDataDEField) iPSDEField2;
                IPSDERBase iPSDERBase = iPSOne2ManyDataDEField.getPSDER();
                if (iPSDERBase == null) {
                    throw new RuntimeException(String.format("关系集合属性未绑定关系"));
                }
                // 找到关系的runtime，后续字段需要从这个runtime取
                IDataEntityRuntime refDataEntityRuntime = this.getSystemRuntime().getDataEntityRuntime(iPSDERBase.getMinorPSDataEntityMust().getId(), false);
                if (refDataEntityRuntime instanceof net.ibizsys.central.dataentity.IDataEntityRuntime) {
                    IPSDEField parentIdField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTID, true);
                    IPSDEField parentTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(DEFPredefinedTypes.PARENTTYPE, true);
                    IPSDEField parentSubTypeField = refDataEntityRuntime.getPSDEFieldByPredefinedType(PSModelEnums.PredefinedFieldType.PARENTSUBTYPE.value, true);
                    // 构建需要保存的交付物数据
                    List one2manyDatas = new ArrayList<>();
                    objValue = ((String)objValue).replace("；",";");
                    String[] objs = objValue.split(";");
                    if (objs.length > 0) {
                        for (String obj : objs) {
                            IEntityDTO refEntityDTO = ((net.ibizsys.central.dataentity.IDataEntityRuntime) refDataEntityRuntime).createEntity();
                            refEntityDTO.set(refDataEntityRuntime.getMajorPSDEField().getLowerCaseName(), obj);
                            // 设置关系中必要的字段
                            if(parentIdField!=null) {
                                refEntityDTO.set(parentIdField.getLowerCaseName(), iEntityDTO.get(entityDataEntityRuntime.getKeyPSDEField().getLowerCaseName()));
                            }
                            if(parentTypeField!=null) {
                                refEntityDTO.set(parentTypeField.getLowerCaseName(), entityDataEntityRuntime.getName());
                            }
                            if(parentSubTypeField != null && iPSDERBase instanceof IPSDERCustom){
                                refEntityDTO.set(parentSubTypeField.getLowerCaseName(),((IPSDERCustom)iPSDERBase).getTypeValue());
                            }

                            one2manyDatas.add(refEntityDTO);
                        }
                    }
                    // 直接设置到iEntityDTO中，后续的处理逻辑在进行处理
                    iEntityDTO.set(strOne2ManyField.toLowerCase(), one2manyDatas);
                }
            }
        }
        return super.onTranslate(objValue, bIn, iEntityDTO, iPSDEField, entityDataEntityRuntime);
    }

}

```
### SimpleSysExtensionUtilRuntime :id=sysextension


```cn.ibizlab.central.plugin.groovy.sysutil.SimpleSysExtensionUtilRuntime```

```groovy
null
```






