```sql
SELECT
t1.`CONTENT`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER_TYPE`,
t1.`PRINCIPAL_ID`,
t1.`PRINCIPAL_NAME`,
t1.`PRINCIPAL_TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `COMMENT` t1 

WHERE 1=1 AND ( <choose><when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'project'"> exists(select 1 from work_item t2, project_member t3 where t2.project_id=t3.project_id  and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_id=t2.id and t1.principal_type='WORK_ITEM' and t2.is_deleted=0 <if test="ctx.webcontext.project_id != null and ctx.webcontext.project_id != ''"> and t2.project_id=#{ctx.webcontext.project_id}  </if>)</when><when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'product'"> exists(select 1 from idea t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='IDEA' 
        and t1.principal_id=t2.id and t2.is_deleted=0 <if test="ctx.webcontext.product_id != null and ctx.webcontext.product_id != ''"> and t2.product_id=#{ctx.webcontext.product_id}  </if>)
        or exists(select 1 from ticket t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='TICKET'  
        and t1.principal_id=t2.id and t2.is_deleted=0 <if test="ctx.webcontext.product_id != null and ctx.webcontext.product_id != ''"> and t2.product_id=#{ctx.webcontext.product_id}  </if>)
        or exists(select 1 from customer t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='CUSTOMER'  
        and t1.principal_id=t2.id and t2.is_deleted=0 <if test="ctx.webcontext.product_id != null and ctx.webcontext.product_id != ''"> and t2.product_id=#{ctx.webcontext.product_id}</if>)</when>
    <when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'library'"> exists(select 1 from test_case t2, library_member t3 where t2.test_library_id=t3.library_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_id=t2.id and t1.principal_type='TEST_CASE'  and t2.is_deleted=0 <if test="library_id != null and library_id != ''"> and t2.test_library_id=#{ctx.webcontext.library_id}  </if>)</when>
    <when test="ctx.webcontext.search_module != null and ctx.webcontext.search_module == 'space'"> exists(select 1 from page t2, space_member t3 where t2.space_id=t3.space_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_id=t2.id and t1.principal_type='PAGE'
        and t2.is_deleted=0 <if test="ctx.webcontext.space_id != null and ctx.webcontext.space_id != ''"> and t2.space_id=#{ctx.webcontext.space_id} </if>)</when>
    <otherwise> exists(select 1 from work_item t2, project_member t3 where t2.project_id=t3.project_id  and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='WORK_ITEM' and t1.principal_id=t2.id and t2.is_deleted=0)
        or exists(select 1 from idea t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='IDEA' 
        and t1.principal_id=t2.id and t2.is_deleted=0)
        or exists(select 1 from ticket t2, product_member t3 where t2.product_id=t3.product_id 
        and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='TICKET' 
        and t1.principal_id=t2.id and t2.is_deleted=0)
        or exists(select 1 from customer t2, product_member t3 where t2.product_id=t3.product_id and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='CUSTOMER' and t1.principal_id=t2.id and t2.is_deleted=0) or exists(select 1 from test_case t2, library_member t3 where t2.test_library_id=t3.library_id and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_id='TEST_CASE' and t1.principal_id=t2.id and t2.is_deleted=0) or exists(select 1 from page t2, space_member t3 where t2.space_id = t3.space_id and t3.user_id=#{ctx.sessioncontext.srfpersonid} and t1.principal_type='PAGE' and t1.principal_id=t2.id and t2.is_deleted=0) </otherwise></choose>)
```