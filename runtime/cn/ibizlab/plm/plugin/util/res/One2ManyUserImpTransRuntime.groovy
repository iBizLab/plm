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
