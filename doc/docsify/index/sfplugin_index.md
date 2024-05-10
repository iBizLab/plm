# 服务插件 <!-- {docsify-ignore-all} -->

|  对象      |  实体  |  类型  | 插件  |备注|
|  --------  | ----- | -----    |-----    |----    |
|用户导入增强||PSSysTranslatorImpl|[One2ManyUserImpTransRuntime](#UsrSFPlugin0424744613)|参数名               说明                                   默认值<br>username       指定从用户实体对象中获取值名称名称             display_name<br>userdename     指定用户数据实体名称                          user<br>one2manyfield  指定转换器属性映射的1对多集合属性名称          attentions<br>one2manyuserid 指定映射的1对多集合属性中存储用户标识属性名称   user_id|
|@内容||PSSysTranslatorImpl|[SysAtContentTranslatorRuntime](#UsrSFPlugin0201416283)||
|结束时间边界值||PSSysTranslatorImpl|[SysEndOfDayTranslatorRuntime](#UsrSFPlugin0401275996)||
|工作项通知模板(运行时)||PSSysMsgTemplImpl|[[消息模板]工作项通知模板(运行时)](#UsrSFPlugin0204714710)||
|填充产品需求版本数据(fill_version_data)|[基线需求(BASELINE_IDEA)](module/ProdMgmt/baseline_idea)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|填充测试用例版本数据(fill_version_data)|[基线用例(BASELINE_TEST_CASE)](module/TestMgmt/baseline_test_case)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|填充工作项版本数据(fill_version_data)|[基线工作项(BASELINE_WORK_ITEM)](module/ProjMgmt/baseline_work_item)|PSDEDataSetImpl|[FillVersionDataDEDataSetRuntime](#UsrSFPlugin0421357755)|cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime|
|版本数据存储|[关联(RELATION)](module/Base/relation)|PSDEUtilImpl|[DEVersionStorageUtilRuntimeEx](#UsrSFPlugin0425071911)||
|提交版本(COMMIT)|[版本(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[CommitVersionDEActionRuntime](#UsrSFPlugin0324806543)||
|修复版本(FixCommit)|[版本(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[FixCommitVersionDEActionRuntime](#UsrSFPlugin0424197954)||
|恢复指定版本(RESTORE)|[版本(VERSION)](module/Base/version)|PSDEUserCustomActionImpl|[RestoreVersionDEActionRuntime](#UsrSFPlugin0324899435)||
|人员维度(member_dimension)|[工时(WORKLOAD)](module/Base/workload)|PSDEDataSetImpl|[MemberWorklaodDEDataSetRuntime](#UsrSFPlugin0508758798)||
|需求树表查询(requirement_tree)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)||
|树表数据集合(tree)|[工作项(WORK_ITEM)](module/ProjMgmt/work_item)|PSDEDataSetImpl|[TreeGridDEDataSetRuntime](#UsrSFPlugin0407757309)||

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
### FillVersionDataDEDataSetRuntime :id=UsrSFPlugin0421357755
cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime

```cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.FillVersionDataDEDataSetRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.ds;

import groovy.transform.CompileStatic;

import java.util.*;

import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.plugin.util.dataentity.ds.DEDataSetRuntimeBase;
import net.ibizsys.model.PSModelEnums;
import org.springframework.data.domain.Page;

import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.central.util.PageImpl;
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
		return entityDTOList;
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


```cn.ibizlab.plm.user.plugin.groovy.dataentity.ds.MemberWorklaodDEDataSetRuntime```

```groovy
package cn.ibizlab.plm.user.plugin.groovy.dataentity.ds;

import groovy.transform.CompileStatic;
import java.util.*;
import net.ibizsys.central.dataentity.IDataEntityRuntime;
import net.ibizsys.central.plugin.util.dataentity.ds.DEDataSetRuntimeBase;
import org.springframework.data.domain.Page;
import net.ibizsys.central.util.IEntityDTO;
import net.ibizsys.central.util.ISearchContextDTO;
import net.ibizsys.central.util.PageImpl;

@CompileStatic
class MemberWorklaodDEDataSetRuntime extends DEDataSetRuntimeBase {

	@Override
	protected Page<?> doFetchReal(ISearchContextDTO iSearchContextDTO) throws Throwable {

		if (this.getDataEntityRuntime().getSystemPersistentAdapter() == null) {
			throw new Exception("实体未提供系统持久化设置器");
		}


        // 获取User实体
        IDataEntityRuntime userDERutime = this.getSystemRuntime().getDataEntityRuntime("PROJECT");
        ISearchContextDTO userSearchContextDTO = userDERutime.createSearchContext();
		userSearchContextDTO.setPageable(iSearchContextDTO.getPageable());

        // 调用User的Default数据集合
        Page<?> ret = this.getDataEntityRuntime().getSystemPersistentAdapter().fetchDataSet(userDERutime, userDERutime.getDefaultPSDEDataSet(), userSearchContextDTO, null);
		Page<IEntityDTO> page = this.getDataEntityRuntime().getEntityDTOPage(ret, userDERutime.getDefaultPSDEDataSet(), userSearchContextDTO.getPageable());
		
		return new PageImpl<IEntityDTO>(fillWorkloadData(page.getContent(), iSearchContextDTO), userSearchContextDTO.getPageable(), ret.getTotalElements(), page.getTotalPages());

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
		iSearchContextDTO.count(false).in("create_man", fetchUserIdList);
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
}
```






