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