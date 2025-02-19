
## 存在直接SQL调用的处理逻辑节点<sup class="footnote-symbol"> <font color=orange>[221]</font></sup>

#### [基线(BASELINE)](module/Base/baseline)的处理逻辑[删除基线前附加逻辑(before_remove)](module/Base/baseline/logic/before_remove)

节点：删除基线关联数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `relation` where principal_id = ? and principal_type = 'baseline'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [基线(BASELINE)](module/Base/baseline)的处理逻辑[删除类别(delete_categories)](module/Base/baseline/logic/delete_categories)

节点：当类别删除时，修改迭代的类别属性
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE baseline
SET categories = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', categories, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, categories) > 0 ;

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`
2. `Default(传入变量).id(标识)`

#### [看板(BOARD)](module/ProjMgmt/board)的处理逻辑[删除看板之前判断(before_remove)](module/ProjMgmt/board/logic/before_remove)

节点：查询项目下看板数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as project_with_board_num from `board` where project_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PROJECT_ID(产品标识)`

重置参数`project(项目)`，并将执行sql结果赋值给参数`project(项目)`
#### [类别(CATEGORY)](module/Base/category)的处理逻辑[删除类别及子类别(delete_child_category)](module/Base/category/logic/delete_child_category)

节点：修改需求信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE idea t 
INNER JOIN category t21 ON t.category_id = t21.ID 
SET t.category_id = NULL
WHERE (t.category_id = ? OR t21.categories LIKE CONCAT('%',?,'%'))
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`

#### [类别(CATEGORY)](module/Base/category)的处理逻辑[设置默认分组(set_section)](module/Base/category/logic/set_section)

节点：批更新子节点分组
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update category set section_id=? where INSTR(categories,?)>0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).SECTION_ID(分组标识)`
2. `Default(传入变量).ID(标识)`

#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[产品客户关联分页计数器(product_customer_re_counters)](module/ProdMgmt/customer/logic/product_customer_re_counters)

节点：客户关联工单
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	COUNT( t2.id ) as customer_re_ticket
FROM
	customer t,
	ticket t2 
WHERE
	t.id = ? 
	AND t.id = t2.CUSTOMER_ID 
	AND t2.IS_DELETED = 0 
	
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [客户(CUSTOMER)](module/ProdMgmt/customer)的处理逻辑[删除类别(delete_categories)](module/ProdMgmt/customer/logic/delete_categories)

节点：当删除类别时，修改客户的类别属性
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE customer
SET categories = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', categories, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, categories) > 0 ;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`
2. `Default(传入变量).id(标识)`

#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[修改评论(update_comment)](module/Team/discuss_post/logic/update_comment)

节点：修改评论内容
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update comment set CONTENT = ? where id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `commnet(评论).CONTENT(内容)`
2. `commnet(评论).ID(标识)`

#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[删除评论(del_comment)](module/Team/discuss_post/logic/del_comment)

节点：热度-2
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat - 2 
where exists(select 1 from `comment` t2 
where t2.principal_id = t1.id 
and t2.principal_type = 'DISCUSS_POST' and t2.id = ?)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).comment_id`

#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[填充附加数据(fill_addition)](module/Team/discuss_post/logic/fill_addition)

节点：创建的讨论数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as discuss_num from discuss_post
where create_man = (select create_man from discuss_post where id = ?)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[填充附加数据(fill_addition)](module/Team/discuss_post/logic/fill_addition)

节点：创建的回复数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as reply_num from discuss_reply 
where create_man = (select create_man from discuss_post where id = ?)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[恢复(recover)](module/Team/discuss_post/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='idea'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [讨论(DISCUSS_POST)](module/Team/discuss_post)的处理逻辑[讨论中评论数计数器(discuss_post_count)](module/Team/discuss_post/logic/discuss_post_count)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(1) as discuss_post_count FROM `comment` where OWNER_TYPE = 'DISCUSS_POST' AND PRINCIPAL_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[删除回复(del_reply)](module/Team/discuss_reply/logic/del_reply)

节点：计算此回复下的评论条数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as comment_num from `comment` where principal_id = ? and principal_type = 'DISCUSS_REPLY'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[删除回复(del_reply)](module/Team/discuss_reply/logic/del_reply)

节点：热度降低
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat - ((2 * ?) + 5)  
where exists(select 1 from discuss_reply t2 where t1.id = t2.post_id and t2.id = ?)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).comment_num(回复评论数)`
2. `Default(传入变量).ID(标识)`

#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[删除回复(del_reply)](module/Team/discuss_reply/logic/del_reply)

节点：删除回复下的评论数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `comment` where principal_id = ? and principal_type = 'DISCUSS_REPLY'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[回复下修改评论(update_comment)](module/Team/discuss_reply/logic/update_comment)

节点：修改评论内容
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update comment set CONTENT = ? where id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `comment(评论对象).CONTENT(内容)`
2. `comment(评论对象).ID(标识)`

#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[回复下修改评论(update_comment)](module/Team/discuss_reply/logic/update_comment)

节点：讨论热度+2
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat + 2 
where t1.id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).POST_ID(讨论标识)`

#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[回复下删除评论(del_comment)](module/Team/discuss_reply/logic/del_comment)

节点：讨论热度-2
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat - 2 
where exists(select 1 from `comment` t2 
where t2.principal_id = t1.id 
and t2.principal_type = 'DISCUSS_REPLY' and t2.id = ?)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[回复下添加评论(send_comment)](module/Team/discuss_reply/logic/send_comment)

节点：讨论热度+2
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat + 2 
where t1.id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).POST_ID(讨论标识)`

#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[添加回复(add_reply)](module/Team/discuss_reply/logic/add_reply)

节点：讨论热度+5
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat + 5 
where t1.id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).POST_ID(讨论标识)`

#### [讨论回复(DISCUSS_REPLY)](module/Team/discuss_reply)的处理逻辑[编辑回复(edit_reply)](module/Team/discuss_reply/logic/edit_reply)

节点：讨论热度+2
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update discuss_post t1 set t1.heat = t1.heat + 2 
where t1.id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).POST_ID(讨论标识)`

#### [话题(DISCUSS_TOPIC)](module/Team/discuss_topic)的处理逻辑[取消星标(un_favorite)](module/Team/discuss_topic/logic/un_favorite)

节点：删除星标数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `favorite` where create_man = ? and owner_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfuserid`
2. `Default(传入变量).owner_id`

#### [动态数据看板(DYNADASHBOARD)](module/Base/dyna_dashboard)的处理逻辑[仅获取(only_get)](module/Base/dyna_dashboard/logic/only_get)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`EXAMPLE_CHART`,
t1.`IS_SYSTEM`,
t1.`MODELID`,
t1.`OWNER_ID`,
t1.`OWNER_TYPE`,
t1.`SEQUENCES`,
t1.`TYPE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USERID`
FROM `DYNADASHBOARD` t1 
WHERE t1.DYNADASHBOARDID = ?

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).DYNADASHBOARDID(动态数据看板标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联客户
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 需求关联客户
SELECT
	count( t.id ) AS idea_re_customer 
FROM
	customer t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'customer' 
			AND t11.`PRINCIPAL_TYPE` = 'idea' 
			AND t11.`PRINCIPAL_ID` = ? ) )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联需求
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 需求
SELECT
	count( t.id ) AS idea_re_idea 
FROM
	idea t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND ( t11.`PRINCIPAL_ID` = ? AND t11.`TARGET_TYPE` = 'idea' AND t11.`PRINCIPAL_TYPE` = 'idea' ) 
	)  AND t.IS_DELETED = 0
	
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联工单
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 工单
SELECT
	count( t.id ) AS idea_re_ticket 
FROM
	ticket t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND ( t11.`PRINCIPAL_ID` = ? AND t11.`TARGET_TYPE` = 'ticket' AND t11.`PRINCIPAL_TYPE` = 'idea' ) 
	) 
	AND t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 工作项
SELECT
	count( t.id ) AS idea_re_work_item 
FROM
	work_item t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND ( t11.`PRINCIPAL_ID` = ? AND t11.`TARGET_TYPE` = 'work_item' AND t11.`PRINCIPAL_TYPE` = 'idea' ) 
	) 
	AND t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联测试用例
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 测试用例
SELECT
	count( t.id ) AS idea_re_test_case
FROM
	test_case t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND ( t11.`PRINCIPAL_ID` = ? AND t11.`TARGET_TYPE` = 'test_case' AND t11.`PRINCIPAL_TYPE` = 'idea' ) 
	) 
	AND t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：产品需求版本
<p class="panel-title"><b>执行sql语句</b></p>

```sql
	SELECT
	count( t.id ) AS idea_version
FROM
	`version` t 
WHERE
    t.owner_id = ? and  t.owner_type = 'IDEA'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：合并查询计数器
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'idea' AND t11.`PRINCIPAL_TYPE` = 'idea' AND t1.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS idea_re_idea,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'customer' AND t11.`PRINCIPAL_TYPE` = 'idea' AND t2.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS idea_re_customer,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'ticket' AND t11.`PRINCIPAL_TYPE` = 'idea' AND t3.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS idea_re_ticket,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'work_item' AND t11.`PRINCIPAL_TYPE` = 'idea' AND t4.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS idea_re_work_item,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'test_case' AND t11.`PRINCIPAL_TYPE` = 'idea' AND t5.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS idea_re_test_case
FROM
    `RELATION` t11
JOIN
    `idea` t ON t.`ID` = t11.`PRINCIPAL_ID`
LEFT JOIN
    `idea` t1 ON t1.ID = t11.TARGET_ID 
LEFT JOIN
    `customer` t2 ON t2.ID = t11.TARGET_ID
LEFT JOIN
    `ticket` t3 ON t3.ID = t11.TARGET_ID 
LEFT JOIN
    `work_item` t4 ON t4.ID = t11.TARGET_ID
LEFT JOIN
    `test_case` t5 ON t5.ID = t11.TARGET_ID
WHERE
    (t11.`PRINCIPAL_ID` = ?);
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联客户
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS idea_re_customer
FROM
	customer t 
WHERE
	EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联需求
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS idea_re_idea
FROM
	idea t 
WHERE
    t.is_deleted = 0 
	AND EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联工单
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS idea_re_ticket
FROM
	ticket t 
WHERE
    t.is_deleted = 0 
	AND EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS idea_re_work_item
FROM
	work_item t 
WHERE
    t.is_deleted = 0 
	AND EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[产品需求关联分页计数器(product_idea_re_counters)](module/ProdMgmt/idea/logic/product_idea_re_counters)

节点：需求关联测试用例
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS idea_re_test_case
FROM
	test_case t 
WHERE
    t.is_deleted = 0 
	AND EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[删除(delete)](module/ProdMgmt/idea/logic/delete)

节点：删除最近访问（逻辑）
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_subtype='idea'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[恢复(recover)](module/ProdMgmt/idea/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='idea'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[更新需求进度(update_idea_progress)](module/ProdMgmt/idea/logic/update_idea_progress)

节点：获取进度
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select cast((sum(if(t2.TYPE = 'completed', 1, 0)) * 100) / count(1) as decimal(10, 2)) progress
from work_item t1
         inner join work_item_state t2 on t1.STATE = t2.ID
where t1.id in (select target_id
                from relation
                where PRINCIPAL_ID = ?
                  and PRINCIPAL_TYPE = 'idea'
                  and TARGET_TYPE = 'work_item')
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

将执行sql结果赋值给参数`idea(idea)`
#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[生成最近访问(create_recent)](module/ProdMgmt/idea/logic/create_recent)

节点：更新登记工时中的业务信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE `WORKLOAD` SET IDENTIFIER = ?, RECENT_PARENT = ?, RECENT_PARENT_IDENTIFIER = ?, RECENT_PARENT_NAME= ?, `NAME` = ?
WHERE PRINCIPAL_ID = ? and PRINCIPAL_TYPE = 'IDEA'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).IDENTIFIER(编号)`
2. `Default(传入变量).PRODUCT_ID(产品)`
3. `Default(传入变量).PRODUCT_IDENTIFIER(产品标识)`
4. `Default(传入变量).PRODUCT_NAME(所属产品)`
5. `Default(传入变量).TITLE(标题)`
6. `Default(传入变量).ID(标识)`

#### [需求(IDEA)](module/ProdMgmt/idea)的处理逻辑[获取工单数量(get_ticket_num)](module/ProdMgmt/idea/logic/get_ticket_num)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(num) count_num, sum(num) sum_num 
from (select CASE
                 WHEN t2.TYPE = 'completed' THEN 1
                 ELSE 0
                 END num
      from ticket t1
               left join dictionary t2 on t1.STATE = t2.VAL and t2.CATALOG = 'ticket_state'
      where t1.id in (select TARGET_ID ticket_id
                      from relation
                      where PRINCIPAL_ID = ?
                        and PRINCIPAL_TYPE = 'idea'
                        and TARGET_TYPE = 'ticket')
      and t1.IS_DELETED = 0) as t1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(返回结果)`，并将执行sql结果赋值给参数`result(返回结果)`
#### [效能报表(INSIGHT_REPORT)](module/Insight/insight_report)的处理逻辑[删除类别(delete_categories)](module/Insight/insight_report/logic/delete_categories)

节点：直接SQL调用当类别删除时修改发布的类别属性
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE insight_report
SET categories = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', categories, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, categories) > 0 ;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`

#### [效能视图(INSIGHT_VIEW)](module/Insight/insight_view)的处理逻辑[取消星标(un_favorite)](module/Insight/insight_view/logic/un_favorite)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `favorite` where create_man = ? and owner_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfuserid`
2. `Default(传入变量).owner_id`

#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[删除(delete)](module/TestMgmt/library/logic/delete)

节点：删除最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_subtype='library'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[取消星标(un_favorite)](module/TestMgmt/library/logic/un_favorite)

节点：删除收藏数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `favorite` where create_man = ? and owner_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfuserid`
2. `Default(传入变量).owner_id`

#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[恢复(recover)](module/TestMgmt/library/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='library'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[批量更新最近访问父名称(recent_parent_name)](module/TestMgmt/library/logic/recent_parent_name)

节点：批量更新最近访问父级名称
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set RECENT_PARENT_NAME=? where RECENT_PARENT=?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).NAME(测试库名称)`
2. `Default(传入变量).ID(标识)`

#### [测试库(LIBRARY)](module/TestMgmt/library)的处理逻辑[批量更新最近访问父标识(recent_parent_identifier)](module/TestMgmt/library/logic/recent_parent_identifier)

节点：批量更新最近访问父级标识
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set RECENT_PARENT_IDENTIFIER = ? where RECENT_PARENT=?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).IDENTIFIER(测试库标识)`
2. `Default(传入变量).ID(标识)`

#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[关闭共享(closed_shared)](module/Wiki/article_page/logic/closed_shared)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `member` where owner_id = ? and owner_type = 'PAGE' and OWNER_SUBTYPE = 'SHARED'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[删除(delete)](module/Wiki/article_page/logic/delete)

节点：删除最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_subtype='page'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[发布页面（测试）(publish_page_test)](module/Wiki/article_page/logic/publish_page_test)

节点：删除草稿版本
<p class="panel-title"><b>执行sql语句</b></p>

```sql
DELETE
FROM version  where OWNER_ID = ?  and JSON_EXTRACT(data, '$.is_published') = 0  and OWNER_TYPE = 'PAGE' ORDER BY name desc;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[取消星标(un_favorite)](module/Wiki/article_page/logic/un_favorite)

节点：删除收藏数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `favorite` where create_man = ? and owner_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfuserid`
2. `Default(传入变量).owner_id`

#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[恢复(recover)](module/Wiki/article_page/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='page'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[统计页面评论数(count_comment)](module/Wiki/article_page/logic/count_comment)

节点：统计页面评论数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT COUNT(*) AS total FROM `comment` WHERE PRINCIPAL_TYPE = 'PAGE' AND CONTENT <> '<p><del>该评论已删除</del></p>' AND PRINCIPAL_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).article_page`

将执行sql结果赋值给参数`comment_num(评论数)`
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[获取共享信息(get_shared_info)](module/Wiki/article_page/logic/get_shared_info)

节点：获取访问密码
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select `access_password` from `page` where `id` = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [页面(PAGE)](module/Wiki/article_page)的处理逻辑[获取草稿页面(get_draft_pages)](module/Wiki/article_page/logic/get_draft_pages)

节点：查询草稿数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select * from page where page.SPACE_ID = ? and page.IS_PUBLISHED = 0;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).space_id(空间标识)`

重置参数`page_list(页面列表)`，并将执行sql结果赋值给参数`page_list(页面列表)`
#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[从项目集中移除(remove_from_project_set)](module/Base/portfolio/logic/remove_from_project_set)

节点：从项目集中移除
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `work` where PORTFOLIO_ID = ? and PRINCIPAL_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).portfolio_id`
2. `Default(传入变量).ID(标识)`

#### [文件夹(PORTFOLIO)](module/Base/portfolio)的处理逻辑[取消星标(un_favorite)](module/Base/portfolio/logic/un_favorite)

节点：删除收藏数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `favorite` where create_man = ? and owner_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfuserid`
2. `Default(传入变量).owner_id`

#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[产品关联分页计数器(product_counters)](module/ProdMgmt/product/logic/product_counters)

节点：查询产品关联需求数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 产品关联需求
SELECT
	count( t.id ) AS idea_total 
FROM
	idea t 
WHERE
	t.product_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[产品关联分页计数器(product_counters)](module/ProdMgmt/product/logic/product_counters)

节点：排期
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 需求
SELECT
	count( t.id ) AS product_plan_total 
FROM
	product_plan t 
WHERE
	t.product_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[产品关联分页计数器(product_counters)](module/ProdMgmt/product/logic/product_counters)

节点：工单
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 工单
SELECT
	count( t.id ) AS ticket_total 
FROM
	ticket t 
WHERE
	t.product_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[产品关联分页计数器(product_counters)](module/ProdMgmt/product/logic/product_counters)

节点：客户
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 工作项
SELECT
	count( t.id ) AS customer_total 
FROM
	customer t 
WHERE
	t.product_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[产品关联分页计数器(product_counters)](module/ProdMgmt/product/logic/product_counters)

节点：页面
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS space_total
FROM
	`space` t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND ( t11.`PRINCIPAL_ID` = ? AND t11.`TARGET_TYPE` = 'space' AND t11.`PRINCIPAL_TYPE` = 'product' ) 
	) 
	AND  t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[删除(delete)](module/ProdMgmt/product/logic/delete)

节点：删除最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_subtype='product'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[取消星标(un_favorite)](module/ProdMgmt/product/logic/un_favorite)

节点：删除星标数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `favorite` where create_man = ? and owner_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfuserid`
2. `Default(传入变量).owner_id`

#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[恢复(recover)](module/ProdMgmt/product/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='product'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[批量更新最近访问父名称(recent_parent_name)](module/ProdMgmt/product/logic/recent_parent_name)

节点：批量更新最近访问父级名称
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set RECENT_PARENT_NAME=? where RECENT_PARENT=?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).NAME(产品名称)`
2. `Default(传入变量).ID(标识)`

#### [产品(PRODUCT)](module/ProdMgmt/product)的处理逻辑[批量更新最近访问父标识(recent_parent_identifier)](module/ProdMgmt/product/logic/recent_parent_identifier)

节点：批量更新最近访问父级标识
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set RECENT_PARENT_IDENTIFIER = ? where RECENT_PARENT=?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).IDENTIFIER(产品标识)`
2. `Default(传入变量).ID(标识)`

#### [排期(PRODUCT_PLAN)](module/ProdMgmt/product_plan)的处理逻辑[删除类别(delete_categories)](module/ProdMgmt/product_plan/logic/delete_categories)

节点：删除类别
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE product_plan
SET categories = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', categories, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, categories) > 0 ;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`
2. `Default(传入变量).id(标识)`

#### [产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag)的处理逻辑[删除标签(delete_tag)](module/ProdMgmt/product_tag/logic/delete_tag)

节点：更新标签属性
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE ticket
SET tags = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', tags, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, tags) > 0 ;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`

#### [产品标签(PRODUCT_TAG)](module/ProdMgmt/product_tag)的处理逻辑[删除标签(delete_tag)](module/ProdMgmt/product_tag/logic/delete_tag)

节点：删除标签
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete  from product_tag where  id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[从项目集中移除(remove_from_project_set)](module/ProjMgmt/project/logic/remove_from_project_set)

节点：从项目集中删除
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `work` where PORTFOLIO_ID = ? and PRINCIPAL_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).portfolio_id`
2. `Default(传入变量).ID(标识)`

#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[删除(delete)](module/ProjMgmt/project/logic/delete)

节点：删除最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_type='project'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[取消星标(un_favorite)](module/ProjMgmt/project/logic/un_favorite)

节点：删除收藏数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `favorite` where create_man = ? and owner_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`
2. `Default(传入变量).owner_id`

#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[恢复(recover)](module/ProjMgmt/project/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='project'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[批量更新最近访问父名称(recent_parent_name)](module/ProjMgmt/project/logic/recent_parent_name)

节点：批量更新最近访问父级名称
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set RECENT_PARENT_NAME=? where RECENT_PARENT=?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).NAME(项目名称)`
2. `Default(传入变量).ID(标识)`

#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[批量更新最近访问父标识(recent_parent_identifier)](module/ProjMgmt/project/logic/recent_parent_identifier)

节点：批量更新最近访问父级标识
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set RECENT_PARENT_IDENTIFIER = ? where RECENT_PARENT=?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).IDENTIFIER(项目标识)`
2. `Default(传入变量).ID(标识)`

#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[逾期工作项计数(warning_count_logic)](module/ProjMgmt/project/logic/warning_count_logic)

节点：统计逾期、预警、当前预警
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COUNT(CASE WHEN t1.IS_DELETED = 0
                AND t1.IS_ARCHIVED = 0
                AND (IFNULL((TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE()))), NULL) IS NOT NULL)
                AND t1.project_id =?
                AND TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE())) BETWEEN -3 AND -1
                AND t1.state = w.id
                AND w.type <> 'completed'
            THEN 1 END) AS upcoming_warning_count,
    COUNT(CASE WHEN t1.IS_DELETED = 0
                AND t1.IS_ARCHIVED = 0
                AND (IFNULL((TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE()))), NULL) IS NOT NULL)
                AND t1.project_id =?
                AND TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE())) = 0
                AND t1.state = w.id
                AND w.type <> 'completed'
            THEN 1 END) AS daily_warning_count,
    COUNT(CASE WHEN t1.IS_DELETED = 0
                AND t1.IS_ARCHIVED = 0
                AND (IFNULL((TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE()))), NULL) IS NOT NULL)
                AND t1.project_id =?
                AND TIMESTAMPDIFF(DAY, t1.`END_AT`, IFNULL(t1.`ACTUAL_END_AT`, CURDATE())) > 0
                AND t1.state = w.id
                AND w.type <> 'completed'
            THEN 1 END) AS overdue_count
FROM
    `WORK_ITEM` t1
JOIN
    `work_item_state` w ON t1.state = w.id;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`
3. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[逾期工作项计数(warning_count_logic)](module/ProjMgmt/project/logic/warning_count_logic)

节点：总计条数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COUNT(1) AS total_work_item_count
FROM
    work_item w 
    LEFT JOIN project p on w.PROJECT_ID = p.ID
    LEFT JOIN work_item_state s on s.ID = w.state
WHERE
    W.IS_DELETED = 0
    AND W.IS_ARCHIVED = 0
    AND s.type <> 'completed'
    AND p.ID = ?;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[项目自动变更状态(project_automatic_change_state)](module/ProjMgmt/project/logic/project_automatic_change_state)

节点：判断当前项目是否存在工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(1) as work_item_data FROM work_item WHERE PROJECT_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`has_child_data(存在子数据)`，并将执行sql结果赋值给参数`has_child_data(存在子数据)`
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[项目自动变更状态(project_automatic_change_state)](module/ProjMgmt/project/logic/project_automatic_change_state)

节点：汇聚预计、消耗工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    SUM(CASE WHEN es.name = 'estimated_workload' THEN es.DECIMAL_VALUE ELSE 0 END) AS estimated_workload,
    SUM(CASE WHEN es.name = 'actual_workload' THEN es.DECIMAL_VALUE ELSE 0 END) AS actual_workload
FROM
    project p
JOIN
    work_item wi ON p.id = wi.project_id
JOIN
    extend_storage es ON wi.id = es.owner_id
WHERE
    p.id = ?
    AND es.owner_type = 'work_item'
    AND (es.name = 'estimated_workload' OR es.name = 'actual_workload')
    AND wi.pid is null;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `project_temp(循环项目).ID(标识)`

重置参数`select_result(查询结果)`，并将执行sql结果赋值给参数`select_result(查询结果)`
#### [项目(PROJECT)](module/ProjMgmt/project)的处理逻辑[项目自动变更状态(project_automatic_change_state)](module/ProjMgmt/project/logic/project_automatic_change_state)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    MIN(wi.ACTUAL_START_AT) AS ACTUAL_START_AT
FROM
    project p
JOIN
    work_item wi ON p.id = wi.project_id
WHERE
    p.id = ?

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `project_temp(循环项目).ID(标识)`

重置参数`select_result(查询结果)`，并将执行sql结果赋值给参数`select_result(查询结果)`
#### [项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag)的处理逻辑[删除标签(delete_tag)](module/ProjMgmt/project_tag/logic/delete_tag)

节点：更新标签属性
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE work_item
SET tags = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', tags, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, tags) > 0 ;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`

#### [项目标签(PROJECT_TAG)](module/ProjMgmt/project_tag)的处理逻辑[删除标签(delete_tag)](module/ProjMgmt/project_tag/logic/delete_tag)

节点：删除标签
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete  from project_tag  where  id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我创建的事项(my_created_entry)](module/Base/recent/logic/my_created_entry)

节点：我创建的工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(t.id) as my_created_work_item FROM work_item t where  t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我创建的事项(my_created_entry)](module/Base/recent/logic/my_created_entry)

节点：我创建的产品需求
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的产品需求
SELECT count(t.id) as my_created_idea FROM idea t where t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我创建的事项(my_created_entry)](module/Base/recent/logic/my_created_entry)

节点：我创建的工单
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的工单
SELECT count(t.id) as my_created_ticket FROM ticket t where  t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我创建的事项(my_created_entry)](module/Base/recent/logic/my_created_entry)

节点：我创建的测试用例
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的测试用例
SELECT count(t.id) as my_created_test_case FROM test_case t where t.CREATE_MAN = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我创建的事项(my_created_entry)](module/Base/recent/logic/my_created_entry)

节点：求和
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT (
    (SELECT count(id) FROM work_item WHERE CREATE_MAN = ?) +
    (SELECT count(id) FROM idea WHERE CREATE_MAN = ?) +
    (SELECT count(id) FROM ticket WHERE CREATE_MAN = ?) +
    (SELECT count(id) FROM test_case WHERE CREATE_MAN = ?)
) AS my_created_total
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`
2. `用户全局对象.srfpersonid`
3. `用户全局对象.srfpersonid`
4. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我的任务总结(my_summary)](module/Base/recent/logic/my_summary)

节点：获取工作项数、任务数、bug数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sum(if(t4.`GROUP` <> 'task' and t4.`GROUP` <> 'bug', 1, 0)) other_item_num,
       sum(if(t4.`GROUP` = 'task', 1, 0))                          task_num,
       sum(if(t4.`GROUP` = 'bug', 1, 0))                           bug_num
from work_item t1
         inner join work_item_state t2 on t1.STATE = t2.ID and t2.TYPE = 'in_progress'
         inner join project t3 on t1.PROJECT_ID = t3.ID and t3.IS_DELETED = 0 and t3.IS_ARCHIVED = 0
         inner join work_item_type t4 on t4.ID = t1.WORK_ITEM_TYPE_ID
where (t1.IS_ARCHIVED = 0
    and t1.IS_DELETED = 0)
  and (t1.ASSIGNEE_ID = ?
    or exists (select 1
               from executor t5
               where t1.id = t5.owner_id
                 and t5.owner_type = 'WORK_ITEM'
                 and t5.owner_subtype = 'WORK_ITEM'
                 and t5.user_id = ?))
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`
2. `用户全局对象.srfpersonid`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我的任务总结(my_summary)](module/Base/recent/logic/my_summary)

节点：获取产品需求数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) idea_num
from idea t1
         inner join dictionary t2 on t1.STATE = t2.VAL and t2.CATALOG = 'idea_state' and t2.type = 'in_progress'
         inner join product t3 on t1.PRODUCT_ID = t3.ID and t3.IS_ARCHIVED = 0 and t3.IS_DELETED = 0
where t1.ASSIGNEE_ID = ?
  and t1.IS_DELETED = 0
  and t1.IS_ARCHIVED = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我的任务总结(my_summary)](module/Base/recent/logic/my_summary)

节点：获取产品工单数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) ticket_num
from ticket t1
         inner join dictionary t2 on t1.STATE = t2.VAL and t2.CATALOG = 'ticket_state' and t2.type = 'in_progress'
         inner join product t3 on t1.PRODUCT_ID = t3.ID and t3.IS_ARCHIVED = 0 and t3.IS_DELETED = 0
where t1.ASSIGNEE_ID = ?
  and t1.IS_ARCHIVED = 0
  and t1.IS_DELETED = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我的任务总结(my_summary)](module/Base/recent/logic/my_summary)

节点：获取测试用例数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) case_num
from test_case t1
         inner join library t2 on t1.TEST_LIBRARY_ID = t2.ID and t2.IS_DELETED = 0 and t2.IS_ARCHIVED = 0
where t1.MAINTENANCE_ID = ?
  and t1.IS_DELETED = 0
  and t1.IS_ARCHIVED = 0
  and t1.STATE = '10'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我负责的事项(my_charge_entry)](module/Base/recent/logic/my_charge_entry)

节点：我负责的工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(t.id) as my_charge_work_item FROM work_item t where t.IS_DELETED = 0 AND t.IS_ARCHIVED = 0 AND t.ASSIGNEE_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我负责的事项(my_charge_entry)](module/Base/recent/logic/my_charge_entry)

节点：我负责的产品需求
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的产品需求
SELECT count(t.id) as my_charge_idea FROM idea t where t.IS_DELETED = 0 AND t.IS_ARCHIVED = 0 AND t.ASSIGNEE_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我负责的事项(my_charge_entry)](module/Base/recent/logic/my_charge_entry)

节点：我负责的工单
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的工单
SELECT count(t.id) as my_charge_ticket FROM ticket t where t.IS_DELETED = 0 AND t.IS_ARCHIVED = 0 AND t.ASSIGNEE_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我负责的事项(my_charge_entry)](module/Base/recent/logic/my_charge_entry)

节点：我负责的测试用例
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 我负责的测试用例
SELECT count(t.id) as my_charge_test_case FROM test_case t where t.IS_DELETED = 0 AND t.IS_ARCHIVED = 0 AND t.MAINTENANCE_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [最近访问(RECENT)](module/Base/recent)的处理逻辑[我负责的事项(my_charge_entry)](module/Base/recent/logic/my_charge_entry)

节点：求和
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT (
    (SELECT count(id) FROM work_item WHERE IS_DELETED = 0 AND IS_ARCHIVED = 0 AND ASSIGNEE_ID = ?) +
    (SELECT count(id) FROM idea WHERE IS_DELETED = 0 AND IS_ARCHIVED = 0 AND ASSIGNEE_ID = ?) +
    (SELECT count(id) FROM ticket WHERE IS_DELETED = 0 AND IS_ARCHIVED = 0 AND ASSIGNEE_ID = ?) +
    (SELECT count(id) FROM test_case WHERE IS_DELETED = 0 AND IS_ARCHIVED = 0 AND MAINTENANCE_ID = ?)
) AS my_charge_total
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`
2. `用户全局对象.srfpersonid`
3. `用户全局对象.srfpersonid`
4. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[删除类别(delete_categories)](module/ProjMgmt/release/logic/delete_categories)

节点：当类别删除时修改发布的类别属性
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE project_release
SET categories = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', categories, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, categories) > 0 ;


```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`
2. `Default(传入变量).id(标识)`

#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[发布时间变更附加逻辑(end_at_onchange)](module/ProjMgmt/release/logic/end_at_onchange)

节点：获取末发布阶段标识
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select  t1.`id` 
from `stage` t1, `stage` t2 
where  t1.`RELEASE_ID` = ?
and t1.`pid` = t2.`id` 
order by t2.`SEQUENCE` desc limit 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

将执行sql结果赋值给参数`last_stage(末发布阶段)`
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[开始时间变更附加逻辑(start_at_onchange)](module/ProjMgmt/release/logic/start_at_onchange)

节点：获取首个阶段标识
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select  t1.`id`
from `stage` t1, `stage` t2 
where  t1.`RELEASE_ID` = ?
and t1.`pid` = t2.`id` 
order by t2.`SEQUENCE` asc limit 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

将执行sql结果赋值给参数`first_stage(首发布阶段)`
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[新建后附加逻辑(after_create)](module/ProjMgmt/release/logic/after_create)

节点：获取首发布阶段标识
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select id as first_stage_id from stage 
where  RELEASE_ID is null
order by `SEQUENCE` asc limit 1

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[新建后附加逻辑(after_create)](module/ProjMgmt/release/logic/after_create)

节点：获取末发布阶段标识
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select id as last_stage_id from stage 
where  RELEASE_ID is null
order by `SEQUENCE` desc limit 1

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[新建后附加逻辑(after_create)](module/ProjMgmt/release/logic/after_create)

节点：同步默认首阶段至初始阶段
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update `project_release` t1, `stage` t2 
set t1.`status` = t2.`id`
where t1.`id` = ? and t1.`id` = t2.`RELEASE_ID` and t2.`is_current` = 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[计算发布工作项数量(cal_release_work_item_num)](module/ProjMgmt/release/logic/cal_release_work_item_num)

节点：查询迭代全部工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `all` from work_item where IS_DELETED = '0' and RELEASE_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[计算发布工作项数量(cal_release_work_item_num)](module/ProjMgmt/release/logic/cal_release_work_item_num)

节点：查询迭代进行中工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `in_progress` from work_item where IS_DELETED = '0' and `STATE` IN ('20','30','32','34','36') and RELEASE_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[计算发布工作项数量(cal_release_work_item_num)](module/ProjMgmt/release/logic/cal_release_work_item_num)

节点：查询迭代已完成工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `completed` from work_item where IS_DELETED = '0' and `STATE` = '40' and RELEASE_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [项目发布(RELEASE)](module/ProjMgmt/release)的处理逻辑[计算发布工作项数量(cal_release_work_item_num)](module/ProjMgmt/release/logic/cal_release_work_item_num)

节点：查询迭代未开始工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `pending` from work_item where IS_DELETED = '0' and `STATE` IN ('10','14','16','50','60') and RELEASE_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [评审(REVIEW)](module/TestMgmt/review)的处理逻辑[获取当前阶段信息(get_current_stage_info)](module/TestMgmt/review/logic/get_current_stage_info)

节点：获取未完成的评审内容数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	sum( result ) as case_number
FROM
	(
	SELECT
	CASE
			
		WHEN
			t1.RESULT_STATE = 1 THEN
				1 ELSE 0 
			END result 
FROM
	review_result t1
	LEFT JOIN relation t2 ON t2.PRINCIPAL_ID = ?
WHERE
	t1.CONTENT_ID = t2.ID 
	AND t1.STAGE_ID = ? 
	) t
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).review_id`
2. `Default(传入变量).stage_id`

重置参数`info(返回前端的信息)`，并将执行sql结果赋值给参数`info(返回前端的信息)`
#### [评审内容(REVIEW_CONTENT)](module/TestMgmt/review_content)的处理逻辑[评审结果条数(review_content_total)](module/TestMgmt/review_content/logic/review_content_total)

节点：查询评审结果总条数与已评审条数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    query1.count1 AS total,
    query2.count2 AS total_already,
    (CONVERT(query2.count2, DECIMAL) / query1.count1 * 100) AS schedule
FROM
    (SELECT COUNT(1) AS count1
     FROM review rv
              LEFT JOIN relation re ON re.PRINCIPAL_ID = rv.ID AND re.PRINCIPAL_TYPE = 'REVIEW'
     WHERE rv.ID = ?) AS query1,

    (SELECT COUNT(*) AS count2
     FROM review rv
              INNER JOIN relation re ON re.PRINCIPAL_ID = rv.ID AND re.PRINCIPAL_TYPE = 'REVIEW'
              INNER JOIN review_content_extend rc ON re.ID = rc.ID AND rc.review_result = 'pass'
     WHERE rv.ID = ?) AS query2;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [评审向导(REVIEW_WIZARD)](module/TestMgmt/review_wizard)的处理逻辑[创建后修改附加数据归属(fix_nested_data)](module/TestMgmt/review_wizard/logic/fix_nested_data)

节点：创建后修改附加数据归属
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update attention set OWNER_TYPE = 'REVIEW' where OWNER_TYPE ='REVIEW_WIZARD' AND OWNER_ID = ?

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[执行用例关联分页计数器(run_re_counters)](module/TestMgmt/run/logic/run_re_counters)

节点：测试用例关联产品需求
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS run_re_idea 
FROM
	idea t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'idea' 
			AND t11.`PRINCIPAL_TYPE` = 'test_case' 
			AND t11.`PRINCIPAL_ID` = ? ) )
			AND (
				t.`IS_DELETED` = 0 
			)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[执行用例关联分页计数器(run_re_counters)](module/TestMgmt/run/logic/run_re_counters)

节点：测试用例关联工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS run_re_work_item 
FROM
	work_item t, work_item_type t1 
WHERE t.work_item_type_id = t1.id
and t1.`group` <> 'bug'
AND	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'work_item' 
			AND t11.`PRINCIPAL_TYPE` = 'test_case' 
			AND t11.`PRINCIPAL_ID` = ? ) )
			AND (
				t.`IS_DELETED` = 0 
			)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[执行用例关联分页计数器(run_re_counters)](module/TestMgmt/run/logic/run_re_counters)

节点：执行用例关联缺陷
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count( t.id ) AS run_re_bug from work_item t, work_item_type t1
where  t.`IS_DELETED` = 0 and t.work_item_type_id = t1.id 
and t1.`group` = 'bug'
and EXISTS ( select 1 from `RELATION` t2 
where t.`ID` = t2.`TARGET_ID` 
and  t2.`TARGET_TYPE` = 'work_item' and t2.`PRINCIPAL_TYPE` = 'run'
and t2.`PRINCIPAL_ID` = ?) 
			
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[执行用例关联分页计数器(run_re_counters)](module/TestMgmt/run/logic/run_re_counters)

节点：执行用例结果附件
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS run_re_attachment
FROM
	attachment t 
WHERE
    t.owner_id = ? and t.owner_type = 'RUN'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[执行用例关联分页计数器(run_re_counters)](module/TestMgmt/run/logic/run_re_counters)

节点：测试用例执行历史
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COUNT(t.id) AS run_re_run_history
FROM
    run_history t
WHERE
    t.run_id = ? 

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[执行用例关联分页计数器(run_re_counters)](module/TestMgmt/run/logic/run_re_counters)

节点：合并查询计数器
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'idea' AND t11.`PRINCIPAL_TYPE` = 'test_case' AND t1.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS test_case_re_idea,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'work_item' AND t11.`PRINCIPAL_TYPE` = 'test_case' AND t4.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS test_case_work_item
FROM
    `RELATION` t11
JOIN
    `test_case` t ON t.`ID` = t11.`PRINCIPAL_ID`
LEFT JOIN
    `idea` t1 ON t1.ID = t11.TARGET_ID 
LEFT JOIN
    `work_item` t4 ON t4.ID = t11.TARGET_ID
WHERE
    (t11.`PRINCIPAL_ID` = ?);
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[执行结果获取(run_history_get)](module/TestMgmt/run/logic/run_history_get)

节点：获取执行用例关联的执行结果
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT * FROM run_history t1 WHERE t1.RUN_ID = ? order by t1.create_time desc
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`run_history_list(执行结果列表)`，并将执行sql结果赋值给参数`run_history_list(执行结果列表)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[每日执行用例趋势(run_daily_tendencies)](module/TestMgmt/run/logic/run_daily_tendencies)

节点：每日执行用例趋势
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    COALESCE(SUM(CASE WHEN filtered_run_history.status = '10' THEN 1 ELSE 0 END), 0) AS count1, -- 通过
    COALESCE(SUM(CASE WHEN filtered_run_history.status = '20' THEN 1 ELSE 0 END), 0) AS count2, -- 受阻
    COALESCE(SUM(CASE WHEN filtered_run_history.status = '30' THEN 1 ELSE 0 END), 0) AS count3, -- 失败
    COALESCE(SUM(CASE WHEN filtered_run_history.status = '40' THEN 1 ELSE 0 END), 0) AS count4  -- 跳过
FROM (
         SELECT DATE_ADD(?, INTERVAL seq.seq DAY) AS date
         FROM (
                  SELECT a.i+b.i*10+c.i*100 AS seq
                  FROM (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
              ) seq
         WHERE DATE_ADD(?, INTERVAL seq.seq DAY) BETWEEN ? AND ?
     ) date_series
         LEFT JOIN (
    SELECT
        r.UPDATE_TIME,
        r.status,
        tc.TEST_LIBRARY_ID
    FROM run r
             JOIN test_case tc ON r.CASE_ID = tc.ID
    WHERE tc.TEST_LIBRARY_ID = ? AND r.UPDATE_TIME BETWEEN ? AND ?
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.PLAN_ID, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.EXECUTOR_ID, ?))
      AND ((? IS NULL OR ? = '' OR ? IS NULL OR ? = '') OR r.EXECUTED_AT BETWEEN ? and ? )
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.STATUS, ?))
) filtered_run_history ON DATE(filtered_run_history.UPDATE_TIME) = date_series.date
GROUP BY date_series.date
ORDER BY date_series.date;

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_create_time_gtandeq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_gtandeq`
4. `Default(传入变量).n_create_time_ltandeq`
5. `Default(传入变量).n_test_library_id_eq`
6. `Default(传入变量).n_create_time_gtandeq`
7. `Default(传入变量).n_create_time_ltandeq`
8. `Default(传入变量).n_plan_id_eq`
9. `Default(传入变量).n_plan_id_eq`
10. `Default(传入变量).n_plan_id_eq`
11. `Default(传入变量).n_executor_id_eq`
12. `Default(传入变量).n_executor_id_eq`
13. `Default(传入变量).n_executor_id_eq`
14. `Default(传入变量).n_executed_at_gtandeq`
15. `Default(传入变量).n_executed_at_gtandeq`
16. `Default(传入变量).n_executed_at_ltandeq`
17. `Default(传入变量).n_executed_at_ltandeq`
18. `Default(传入变量).n_executed_at_gtandeq`
19. `Default(传入变量).n_executed_at_gtandeq`
20. `Default(传入变量).n_status_eq`
21. `Default(传入变量).n_status_eq`
22. `Default(传入变量).n_status_eq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[每日测试次数统计(run_everyday_test)](module/TestMgmt/run/logic/run_everyday_test)

节点：每日测试次数统计
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    COALESCE(SUM(case_data.count), 0) AS count -- 每日测试次数统计
FROM (
         SELECT DATE_ADD(?, INTERVAL seq.seq DAY) AS date
         FROM (
                  SELECT a.i + b.i * 10 + c.i * 100 AS seq
                  FROM (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
              ) seq
         WHERE DATE_ADD(?, INTERVAL seq.seq DAY) BETWEEN ? AND ?
     ) date_series
         LEFT JOIN (
    SELECT
        DATE(rh.CREATE_TIME) AS create_date,
        COUNT(rh.ID) AS count
    FROM run_history rh
             JOIN run r ON rh.RUN_ID = r.ID
             JOIN test_case ts ON r.CASE_ID = ts.ID
    WHERE ts.TEST_LIBRARY_ID = ? AND rh.CREATE_TIME BETWEEN ? AND ?
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.PLAN_ID, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.EXECUTOR_ID, ?))
      AND ((? IS NULL OR ? = '') OR (? IS NULL OR ? = '') OR r.EXECUTED_AT BETWEEN ? and ? )
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.STATUS, ?))
    GROUP BY DATE(rh.CREATE_TIME)
) case_data ON date_series.date = case_data.create_date
GROUP BY date_series.date
ORDER BY date_series.date;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_create_time_gtandeq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_gtandeq`
4. `Default(传入变量).n_create_time_ltandeq`
5. `Default(传入变量).n_test_library_id_eq`
6. `Default(传入变量).n_create_time_gtandeq`
7. `Default(传入变量).n_create_time_ltandeq`
8. `Default(传入变量).n_plan_id_eq`
9. `Default(传入变量).n_plan_id_eq`
10. `Default(传入变量).n_plan_id_eq`
11. `Default(传入变量).n_executor_id_eq`
12. `Default(传入变量).n_executor_id_eq`
13. `Default(传入变量).n_executor_id_eq`
14. `Default(传入变量).n_executed_at_gtandeq`
15. `Default(传入变量).n_executed_at_gtandeq`
16. `Default(传入变量).n_executed_at_ltandeq`
17. `Default(传入变量).n_executed_at_ltandeq`
18. `Default(传入变量).n_executed_at_gtandeq`
19. `Default(传入变量).n_executed_at_ltandeq`
20. `Default(传入变量).n_status_eq`
21. `Default(传入变量).n_status_eq`
22. `Default(传入变量).n_status_eq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[测试计划对比分析(plan_compar_ative_analysis)](module/TestMgmt/run/logic/plan_compar_ative_analysis)

节点：测试计划对比分析
<p class="panel-title"><b>执行sql语句</b></p>

```sql

SELECT
    tp.ID AS filter_type,
    tp.Name AS TestPlanName,
    COUNT(r.ID) AS TotalRuns, -- 执行用例数量
    COALESCE(SUM(CASE WHEN r.status IS NOT NULL THEN 1 ELSE 0 END), 0) AS ExecutedRuns, -- 已执行用例数量
    COALESCE(SUM(CASE WHEN r.status = '10' THEN 1 ELSE 0 END), 0) AS PassedRuns, -- 通过的用例数量
    -- 测试执行率：已执行用例数量 / 执行用例数量（
    CONCAT(COALESCE(ROUND(SUM(CASE WHEN r.status IS NOT NULL THEN 1 ELSE 0 END) * 100.0 / NULLIF(COUNT(r.ID), 0), 2), 0.00), '%') AS ExecutionRate,
    -- 测试通过率：通过的用例数量 / 已执行用例数量
    CONCAT(COALESCE(ROUND(SUM(CASE WHEN r.status = '10' THEN 1 ELSE 0 END) * 100.0 / NULLIF(SUM(CASE WHEN r.status IS NOT NULL THEN 1 ELSE 0 END), 0), 2), 0.00), '%') AS PassRate
FROM
    test_plan tp
        LEFT JOIN run r ON tp.ID = r.plan_id AND ((? IS NULL OR ? = '') OR FIND_IN_SET(r.STATUS, ?))
        LEFT JOIN test_case tc ON r.case_id = tc.ID
WHERE
        tc.TEST_LIBRARY_ID = ?
  AND ((? IS NULL OR ? = '') OR FIND_IN_SET(PLAN_ID, ?))
  AND ((? IS NULL OR ? = '') OR FIND_IN_SET(EXECUTOR_ID, ?))
  AND ((? IS NULL OR ? = '' OR ? IS NULL OR ? = '') OR EXECUTED_AT BETWEEN ? and ? )
GROUP BY
    tp.ID
ORDER BY
    tp.ID;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_status_eq`
2. `Default(传入变量).n_status_eq`
3. `Default(传入变量).n_status_eq`
4. `Default(传入变量).N_TEST_LIBRARY_ID_EQ`
5. `Default(传入变量).n_plan_name_eq`
6. `Default(传入变量).n_plan_name_eq`
7. `Default(传入变量).n_plan_name_eq`
8. `Default(传入变量).n_executor_id_eq`
9. `Default(传入变量).n_executor_id_eq`
10. `Default(传入变量).n_executor_id_eq`
11. `Default(传入变量).n_executed_at_gtandeq`
12. `Default(传入变量).n_executed_at_gtandeq`
13. `Default(传入变量).n_executed_at_ltandeq`
14. `Default(传入变量).n_executed_at_ltandeq`
15. `Default(传入变量).n_executed_at_gtandeq`
16. `Default(传入变量).n_executed_at_ltandeq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[移除用例相关信息(delete_run_info)](module/TestMgmt/run/logic/delete_run_info)

节点：移除执行用例关联附件
<p class="panel-title"><b>执行sql语句</b></p>

```sql
DELETE FROM attachment WHERE OWNER_ID = ? ;

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[移除用例相关信息(delete_run_info)](module/TestMgmt/run/logic/delete_run_info)

节点：移除执行用例关联缺陷
<p class="panel-title"><b>执行sql语句</b></p>

```sql
DELETE FROM relation WHERE
 TARGET_ID = ? 
 OR PRINCIPAL_ID = ?;

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`
2. `Default(传入变量).id(标识)`

#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[获取实际工时(get_actual_workload)](module/TestMgmt/run/logic/get_actual_workload)

节点：获取已登记的工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sum(DURATION) as `ACTUAL_WORKLOAD` from `workload` where  PRINCIPAL_TYPE = 'TEST_CASE' and PRINCIPAL_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[获取实际工时(get_actual_workload)](module/TestMgmt/run/logic/get_actual_workload)

节点：获取剩余工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select DECIMAL_VALUE as REMAINING_WORKLOAD  from extend_storage where owner_id = ? and owner_type = 'TEST_CASE' and `name` = 'REMAINING_WORKLOAD'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[获取实际工时(get_actual_workload)](module/TestMgmt/run/logic/get_actual_workload)

节点：获取预估工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select DECIMAL_VALUE as ESTIMATED_WORKLOAD  from extend_storage where owner_id = ? and owner_type = 'TEST_CASE' and `name` = 'ESTIMATED_WORKLOAD'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[获取当前用例详情(this_run_details)](module/TestMgmt/run/logic/this_run_details)

节点：获取最近执行的一条数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 最近执行	
SELECT
	t2.NAME AS RECENT_TEST_PLAN,
	t.EXECUTOR_NAME AS RECENT_EXECUTOR_NAME,
	t.EXECUTED_AT AS RECENT_EXECUTED_AT,
	t.`STATUS` AS RECENT_RUN_HISTORY
FROM
	run t,
	test_plan t2
WHERE
	t.CASE_ID = ?
	AND t.`STATUS` IS NOT NULL 
	AND t.PLAN_ID = t2.id 
ORDER BY
	EXECUTED_AT DESC 
	LIMIT 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CASE_ID(测试用例标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[通过发布规划计划(program_plan_by_release)](module/TestMgmt/run/logic/program_plan_by_release)

节点：查询发布下工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select
*
from
work_item
where
RELEASE_ID  = ?
and IS_DELETED = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `release(循环发布对象).ID(标识)`

将执行sql结果赋值给参数`items(选中工作项)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[通过发布规划计划(program_plan_by_release)](module/TestMgmt/run/logic/program_plan_by_release)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql

SELECT
t11.*
FROM `RELATION` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`TARGET_ID` = t11.`ID` 
LEFT JOIN  `LIBRARY` t12 ON t11.TEST_LIBRARY_ID = t12.ID 
WHERE 
( t11.`IS_DELETED` = 0 ) 
AND
( t1.`PRINCIPAL_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_ID` = ?  AND  t1.`TARGET_TYPE` = 'test_case' ) 
AND
t12.ID = ?
AND
 not exists(select 1 from run t2 
where 
t11.ID= t2.CASE_ID 
AND
t2.PLAN_ID = ?  AND  t11.`IS_DELETED` = 0 )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `work_item(工作项).id(标识)`
2. `Default(传入变量).library`
3. `Default(传入变量).principal_id`

重置参数`relations(关联用例列表)`，并将执行sql结果赋值给参数`relations(关联用例列表)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[通过工作项规划计划(program_plan_by_workitem)](module/TestMgmt/run/logic/program_plan_by_workitem)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql

SELECT
t11.*
FROM `RELATION` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`TARGET_ID` = t11.`ID` 
LEFT JOIN  `LIBRARY` t12 ON t11.TEST_LIBRARY_ID = t12.ID 
WHERE 
( t11.`IS_DELETED` = 0 ) 
AND
( t1.`PRINCIPAL_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_ID` = ?  AND  t1.`TARGET_TYPE` = 'test_case' ) 
AND
t12.ID = ?
AND
 not exists(select 1 from run t2 
where 
t11.ID= t2.CASE_ID 
AND
t2.PLAN_ID = ?  AND  t11.`IS_DELETED` = 0 )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `work_item(工作项).id(标识)`
2. `Default(传入变量).library`
3. `Default(传入变量).principal_id`

重置参数`relations(关联用例列表)`，并将执行sql结果赋值给参数`relations(关联用例列表)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[通过迭代规划计划(program_plan_by_sprint)](module/TestMgmt/run/logic/program_plan_by_sprint)

节点：查询迭代下工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select
	*
from
	work_item
where
	SPRINT_ID = ?
	and IS_DELETED = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `sprint(循环迭代对象).ID(标识)`

将执行sql结果赋值给参数`items(选中工作项)`
#### [执行用例(RUN)](module/TestMgmt/run)的处理逻辑[通过迭代规划计划(program_plan_by_sprint)](module/TestMgmt/run/logic/program_plan_by_sprint)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql

SELECT
t11.*
FROM `RELATION` t1 
LEFT JOIN `TEST_CASE` t11 ON t1.`TARGET_ID` = t11.`ID` 
LEFT JOIN  `LIBRARY` t12 ON t11.TEST_LIBRARY_ID = t12.ID 
WHERE 
( t11.`IS_DELETED` = 0 ) 
AND
( t1.`PRINCIPAL_TYPE` = 'work_item'  AND  t1.`PRINCIPAL_ID` = ?  AND  t1.`TARGET_TYPE` = 'test_case' ) 
AND
t12.ID = ?
AND
 not exists(select 1 from run t2 
where 
t11.ID= t2.CASE_ID 
AND
t2.PLAN_ID = ?  AND  t11.`IS_DELETED` = 0 )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `work_item(工作项).id(标识)`
2. `Default(传入变量).library`
3. `Default(传入变量).principal_id`

重置参数`relations(关联用例列表)`，并将执行sql结果赋值给参数`relations(关联用例列表)`
#### [执行结果(RUN_HISTORY)](module/TestMgmt/run_history)的处理逻辑[执行结果获取(run_history_get)](module/TestMgmt/run_history/logic/run_history_get)

节点：执行结果获取
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT * FROM run_history t1 WHERE t1.RUN_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).RUN_ID(执行用例标识)`

重置参数`run_history_list(执行结果列表)`，并将执行sql结果赋值给参数`run_history_list(执行结果列表)`
#### [分组(SECTION)](module/Base/section)的处理逻辑[删除分组及其下类别(delete_section)](module/Base/section/logic/delete_section)

节点：修改需求信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE idea t 
INNER JOIN category t21 ON t.category_id = t21.ID 
INNER JOIN section t31 on t21.SECTION_ID = t31.id
SET t.category_id = NULL
WHERE (t21.SECTION_ID = ? )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [共享空间(SHARED_SPACE)](module/Wiki/shared_space)的处理逻辑[校验共享访问密码(access_password)](module/Wiki/shared_space/logic/access_password)

节点：查询共享空间密码信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select `ACCESS_PASSWORD` from `space` where id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`check_space(校验空间)`，并将执行sql结果赋值给参数`check_space(校验空间)`
#### [共享空间(SHARED_SPACE)](module/Wiki/shared_space)的处理逻辑[检验共享页面(check_shared)](module/Wiki/shared_space/logic/check_shared)

节点：查询共享空间密码信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select `ACCESS_PASSWORD` from `space` where id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [共享空间(SHARED_SPACE)](module/Wiki/shared_space)的处理逻辑[获取共享空间信息(shared_page_info)](module/Wiki/shared_space/logic/shared_page_info)

节点：获取密码信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select `ACCESS_PASSWORD` from `space` where id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [空间(SPACE)](module/Wiki/space)的处理逻辑[删除(delete)](module/Wiki/space/logic/delete)

节点：删除最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_subtype='space'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [空间(SPACE)](module/Wiki/space)的处理逻辑[取消星标(un_favorite)](module/Wiki/space/logic/un_favorite)

节点：删除收藏数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
delete from `favorite` where create_man = ? and owner_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfuserid`
2. `Default(传入变量).owner_id`

#### [空间(SPACE)](module/Wiki/space)的处理逻辑[恢复(recover)](module/Wiki/space/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='space'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[删除类别(delete_categories)](module/ProjMgmt/sprint/logic/delete_categories)

节点：当类别删除时，修改迭代的类别属性
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE sprint
SET categories = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', categories, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, categories) > 0 ;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`
2. `Default(传入变量).id(标识)`

#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[获取未完成的工作项数量(get_not_finish)](module/ProjMgmt/sprint/logic/get_not_finish)

节点：查询该迭代下未完成的工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as not_finish_num from work_item where `state` <> '40' and sprint_id = ? and project_id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).project_id(项目标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[计算迭代工作项数量(cal_sprint_work_item_num)](module/ProjMgmt/sprint/logic/cal_sprint_work_item_num)

节点：查询迭代全部工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `all` from work_item where IS_DELETED = '0' and SPRINT_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[计算迭代工作项数量(cal_sprint_work_item_num)](module/ProjMgmt/sprint/logic/cal_sprint_work_item_num)

节点：查询迭代进行中工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `in_progress` from work_item where IS_DELETED = '0' and `STATE` IN ('20','30','32','34','36') and SPRINT_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[计算迭代工作项数量(cal_sprint_work_item_num)](module/ProjMgmt/sprint/logic/cal_sprint_work_item_num)

节点：查询迭代已完成工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `completed` from work_item where IS_DELETED = '0' and `STATE` = '40' and SPRINT_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [迭代(SPRINT)](module/ProjMgmt/sprint)的处理逻辑[计算迭代工作项数量(cal_sprint_work_item_num)](module/ProjMgmt/sprint/logic/cal_sprint_work_item_num)

节点：查询迭代未开始工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `pending` from work_item where IS_DELETED = '0' and `STATE` IN ('10','14','16','50','60') and SPRINT_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration)的处理逻辑[迭代变更统计(rep_change)](module/ProjMgmt/sprint_alteration/logic/rep_change)

节点：起始数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `first_count` from sprint_alteration where SPRINT_ID = ? and `type` = '1' and SPRINT_STATUS = '1'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).sprint`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration)的处理逻辑[迭代变更统计(rep_change)](module/ProjMgmt/sprint_alteration/logic/rep_change)

节点：移入数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `shift_in_count` from sprint_alteration where SPRINT_ID = ? and `type` = '1' 

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).sprint`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [迭代变更(SPRINT_ALTERATION)](module/ProjMgmt/sprint_alteration)的处理逻辑[迭代变更统计(rep_change)](module/ProjMgmt/sprint_alteration/logic/rep_change)

节点：移出数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `shift_in_count` from sprint_alteration where SPRINT_ID = ? and `type` = '2' 

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).sprint`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [发布阶段(STAGE)](module/ProjMgmt/stage)的处理逻辑[删除发布阶段(del)](module/ProjMgmt/stage/logic/del)

节点：替换发布阶段
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE project_release t1, stage t2 
SET t1.`STATUS` = t2.id 
WHERE t2.RELEASE_ID = t1.ID  
AND t2.pid = ? 
AND t1.`STATUS` = (SELECT id FROM stage WHERE release_id = t1.ID AND pid = ?)

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `replace(替换阶段).replace_id`
2. `Default(传入变量).ID(标识)`

#### [发布阶段(STAGE)](module/ProjMgmt/stage)的处理逻辑[删除发布阶段(del)](module/ProjMgmt/stage/logic/del)

节点：替换阶段同步属性
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update stage t1, stage t2 
set t1.is_current = t2.is_current, t1.operated_time = t2.operated_time 
where t1.release_id = t2.release_id and t1.pid = ? and t2.pid = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `replace(替换阶段).replace_id`
2. `Default(传入变量).ID(标识)`

#### [发布阶段(STAGE)](module/ProjMgmt/stage)的处理逻辑[添加系统预定义阶段(add_predefined)](module/ProjMgmt/stage/logic/add_predefined)

节点：为各阶段生成数据
<p class="panel-title"><b>执行sql语句</b></p>

```sql
insert into stage(ID, `CREATE_MAN`, `CREATE_TIME`, `NAME`, `RELEASE_ID`, `IS_CURRENT`, `PID`, `COLOR`, `TYPE`, `SEQUENCE`)
select uuid(), ?, ?, ?, id, 0, ?, ?, ?, ? from project_release
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).CREATE_MAN(建立人)`
2. `Default(传入变量).CREATE_TIME(建立时间)`
3. `Default(传入变量).NAME(名称)`
4. `Default(传入变量).ID(标识)`
5. `Default(传入变量).COLOR(颜色)`
6. `Default(传入变量).TYPE(阶段类型)`
7. `Default(传入变量).SEQUENCE(排序)`

#### [规则模板(TEMPLATE_FLOW)](module/Base/template_flow)的处理逻辑[项目自动变更状态(project_automatic_change_state)](module/Base/template_flow/logic/project_automatic_change_state)

节点：判断当前项目是否存在工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(1) as work_item_data FROM work_item WHERE PROJECT_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`has_child_data(存在子数据)`，并将执行sql结果赋值给参数`has_child_data(存在子数据)`
#### [规则模板(TEMPLATE_FLOW)](module/Base/template_flow)的处理逻辑[项目自动变更状态(project_automatic_change_state)](module/Base/template_flow/logic/project_automatic_change_state)

节点：汇聚预计、消耗工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    SUM(CASE WHEN es.name = 'estimated_workload' THEN es.DECIMAL_VALUE ELSE 0 END) AS estimated_workload,
    SUM(CASE WHEN es.name = 'actual_workload' THEN es.DECIMAL_VALUE ELSE 0 END) AS actual_workload
FROM
    project p
JOIN
    work_item wi ON p.id = wi.project_id
JOIN
    extend_storage es ON wi.id = es.owner_id
WHERE
    p.id = ?
    AND es.owner_type = 'work_item'
    AND (es.name = 'estimated_workload' OR es.name = 'actual_workload')
    AND wi.pid is null;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `project_temp(循环项目).ID(标识)`

重置参数`select_result(查询结果)`，并将执行sql结果赋值给参数`select_result(查询结果)`
#### [规则模板(TEMPLATE_FLOW)](module/Base/template_flow)的处理逻辑[项目自动变更状态(project_automatic_change_state)](module/Base/template_flow/logic/project_automatic_change_state)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    MIN(wi.ACTUAL_START_AT) AS ACTUAL_START_AT
FROM
    project p
JOIN
    work_item wi ON p.id = wi.project_id
WHERE
    p.id = ?

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `project_temp(循环项目).ID(标识)`

重置参数`select_result(查询结果)`，并将执行sql结果赋值给参数`select_result(查询结果)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[删除(delete)](module/TestMgmt/test_case/logic/delete)

节点：删除最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_subtype='test_case'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[恢复(recover)](module/TestMgmt/test_case/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='test_case'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters)

节点：测试用例关联产品需求
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_re_idea 
FROM
	idea t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'idea' 
			AND t11.`PRINCIPAL_TYPE` = 'test_case' 
			AND t11.`PRINCIPAL_ID` = ? ) )
		    AND t.`IS_DELETED` = 0 
			
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters)

节点：测试用例关联工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_re_work_item 
FROM
	work_item t, work_item_type t1 
WHERE
t.work_item_type_id = t1.id
and t1.`group` <> 'bug' 
AND EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'work_item' 
			AND t11.`PRINCIPAL_TYPE` = 'test_case' 
			AND t11.`PRINCIPAL_ID` = ? ) )
			AND  t.`IS_DELETED` = 0
			
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters)

节点：测试用例执行历史
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_re_run_history
FROM
	run t 
WHERE
    t.case_id = ? and `STATUS` is not null
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters)

节点：测试用例版本
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_version
FROM
	`version` t 
WHERE
    t.owner_id = ? and t.owner_type = 'TEST_CASE'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters)

节点：合并查询计数器
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'idea' AND t11.`PRINCIPAL_TYPE` = 'test_case' AND t1.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS test_case_re_idea,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'ticket' AND t11.`PRINCIPAL_TYPE` = 'test_case' AND t2.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS test_case_re_test_case,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'work_item' AND t11.`PRINCIPAL_TYPE` = 'test_case' AND t4.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS test_case_re_work_item
FROM
    `RELATION` t11
JOIN
    `test_case` t ON t.`ID` = t11.`PRINCIPAL_ID`
LEFT JOIN
    `idea` t1 ON t1.ID = t11.TARGET_ID 
LEFT JOIN
    `test_case` t2 ON t2.`ID` = t11.`TARGET_ID`
LEFT JOIN
    `work_item` t4 ON t4.ID = t11.TARGET_ID
WHERE
    (t11.`PRINCIPAL_ID` = ?);
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters)

节点：测试用例关联缺陷
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_re_bug 
FROM
	work_item t, work_item_type t1 
WHERE t.work_item_type_id = t1.id and t1.`group` = 'bug'
and	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'work_item' 
			AND t11.`PRINCIPAL_TYPE` = 'test_case'
			AND t11.`PRINCIPAL_ID` = ? ) )
			AND t.`IS_DELETED` = 0
			
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters)

节点：测试用例关联产品需求
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_re_idea
FROM
	idea t 
WHERE
t.is_deleted = 0
AND EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters)

节点：测试用例关联工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_re_work_item
FROM
	work_item t, work_item_type t1
WHERE t.work_item_type_id = t1.id and t1.`group` <> 'bug'
and t.is_deleted = 0
AND EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例关联分页计数器(test_case_re_counters)](module/TestMgmt/test_case/logic/test_case_re_counters)

节点：测试用例关联缺陷
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS test_case_re_bug
FROM
	work_item t, work_item_type t1
WHERE t.work_item_type_id = t1.id and t1.`group` = 'bug'
and t.is_deleted = 0
AND EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例活动情况(test_case_maneuver_context)](module/TestMgmt/test_case/logic/test_case_maneuver_context)

节点： 测试用例活动情况
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    COALESCE(new_cases.count, 0) AS new_count, -- 每日新增测试用例数量
    COALESCE(updated_cases.count, 0) AS updated_count -- 每日修改测试用例数量
FROM (
         SELECT DATE_ADD(?, INTERVAL seq.seq DAY) AS date
         FROM (
                  SELECT a.i+b.i*10+c.i*100 AS seq
                  FROM (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
              ) seq
         WHERE DATE_ADD(?, INTERVAL seq.seq DAY) BETWEEN ? AND ?
     ) date_series
         LEFT JOIN (
    SELECT
        DATE(CREATE_TIME) AS date,
        COUNT(*) AS count
    FROM TEST_CASE
    WHERE TEST_LIBRARY_ID = ? AND CREATE_TIME BETWEEN ? AND ?
    GROUP BY DATE(CREATE_TIME)
) new_cases ON date_series.date = new_cases.date
         LEFT JOIN (
    SELECT
        DATE(UPDATE_TIME) AS date,
        COUNT(*) AS count
    FROM TEST_CASE
    WHERE TEST_LIBRARY_ID = ? AND UPDATE_TIME BETWEEN ? AND ?
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(LEVEL, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(MAINTENANCE_ID, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(TEST_TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(CREATE_MAN, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(STATE, ?))
    GROUP BY DATE(UPDATE_TIME)
) updated_cases ON date_series.date = updated_cases.date
ORDER BY date_series.date;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_create_time_gtandeq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_gtandeq`
4. `Default(传入变量).n_create_time_ltandeq`
5. `Default(传入变量).n_test_library_id_eq`
6. `Default(传入变量).n_create_time_gtandeq`
7. `Default(传入变量).n_create_time_ltandeq`
8. `Default(传入变量).n_test_library_id_eq`
9. `Default(传入变量).n_create_time_gtandeq`
10. `Default(传入变量).n_create_time_ltandeq`
11. `Default(传入变量).n_type_eq`
12. `Default(传入变量).n_type_eq`
13. `Default(传入变量).n_type_eq`
14. `Default(传入变量).n_level_eq`
15. `Default(传入变量).n_level_eq`
16. `Default(传入变量).n_level_eq`
17. `Default(传入变量).n_maintenance_id_eq`
18. `Default(传入变量).n_maintenance_id_eq`
19. `Default(传入变量).n_maintenance_id_eq`
20. `Default(传入变量).n_test_type_eq`
21. `Default(传入变量).n_test_type_eq`
22. `Default(传入变量).n_test_type_eq`
23. `Default(传入变量).n_create_man_eq`
24. `Default(传入变量).n_create_man_eq`
25. `Default(传入变量).n_create_man_eq`
26. `Default(传入变量).n_state_eq`
27. `Default(传入变量).n_state_eq`
28. `Default(传入变量).n_state_eq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试用例规划分析(program_analyze)](module/TestMgmt/test_case/logic/program_analyze)

节点：测试用例规划分析
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    times_ranges.times_range as filter_type,
    COALESCE(cases_count, 0) AS count
FROM (
         SELECT '10' AS times_range
         UNION ALL SELECT '20'
         UNION ALL SELECT '30'
         UNION ALL SELECT '40'
         UNION ALL SELECT '50'
         UNION ALL SELECT '60'
     ) times_ranges
         LEFT JOIN (
    SELECT
        CASE
            WHEN plan_count = 0 THEN 10-- '0次'
            WHEN plan_count = 1 THEN 20 -- '1次'
            WHEN plan_count = 2 THEN 30 -- 2次'
            WHEN plan_count BETWEEN 3 AND 5 THEN 40 -- '3~5次'
            WHEN plan_count BETWEEN 6 AND 10 THEN 50 -- '6~10次'
            WHEN plan_count > 10 THEN 60 -- '10次以上'
            END AS times_range,
        COUNT(*) AS cases_count
    FROM (
             SELECT
                 tc.ID AS test_case_id,
                 COUNT(DISTINCT tp.ID) AS plan_count
             FROM
                 test_case tc
                     LEFT JOIN run r ON tc.ID = r.case_id
                     LEFT JOIN test_plan tp ON r.plan_id = tp.ID
             WHERE
                     tc.TEST_LIBRARY_ID = ?
                     AND((? IS NULL OR ? = '') OR FIND_IN_SET(tc.TYPE, ?)) -- 用例类型
                     AND((? IS NULL OR ? = '') OR FIND_IN_SET(tc.LEVEL, ?)) -- 重要程度
                     AND((? IS NULL OR ? = '') OR FIND_IN_SET(tc.STATE, ?)) -- 评审状态
                     AND((? IS NULL OR ? = '') OR FIND_IN_SET(tc.MAINTENANCE_ID, ?)) -- 维护人ID
             GROUP BY
                 tc.ID
         ) AS plan_counts
    GROUP BY
        times_range
) counted_cases ON times_ranges.times_range = counted_cases.times_range
ORDER BY
    FIELD(times_ranges.times_range, '10', '20', '30', '40', '50', '60');
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).N_TEST_LIBRARY_ID_EQ`
2. `Default(传入变量).N_TYPE_EQ`
3. `Default(传入变量).N_TYPE_EQ`
4. `Default(传入变量).N_TYPE_EQ`
5. `Default(传入变量).N_LEVEL_EQ`
6. `Default(传入变量).N_LEVEL_EQ`
7. `Default(传入变量).N_LEVEL_EQ`
8. `Default(传入变量).N_STATE_EQ`
9. `Default(传入变量).N_STATE_EQ`
10. `Default(传入变量).N_STATE_EQ`
11. `Default(传入变量).n_maintenance_id_eq`
12. `Default(传入变量).n_maintenance_id_eq`
13. `Default(传入变量).n_maintenance_id_eq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[测试计划对比分析(plan_compar_ative_analysis)](module/TestMgmt/test_case/logic/plan_compar_ative_analysis)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    tp.ID AS filter_type,
    tp.Name AS TestPlanName,
    COUNT(r.ID) AS TotalRuns, -- 执行用例数量
    COALESCE(SUM(CASE WHEN r.status IS NOT NULL THEN 1 ELSE 0 END), 0) AS ExecutedRuns, -- 已执行用例数量
    COALESCE(SUM(CASE WHEN r.status = '10' THEN 1 ELSE 0 END), 0) AS PassedRuns, -- 通过的用例数量
    -- 测试执行率：已执行用例数量 / 执行用例数量（
    CONCAT(COALESCE(ROUND(SUM(CASE WHEN r.status IS NOT NULL THEN 1 ELSE 0 END) * 100.0 / NULLIF(COUNT(r.ID), 0), 2), 0.00), '%') AS ExecutionRate,
    -- 测试通过率：通过的用例数量 / 已执行用例数量
    CONCAT(COALESCE(ROUND(SUM(CASE WHEN r.status = '10' THEN 1 ELSE 0 END) * 100.0 / NULLIF(SUM(CASE WHEN r.status IS NOT NULL THEN 1 ELSE 0 END), 0), 2), 0.00), '%') AS PassRate
FROM
    test_plan tp
        LEFT JOIN run r ON tp.ID = r.plan_id
        LEFT JOIN test_case tc ON r.case_id = tc.ID
WHERE
        tc.TEST_LIBRARY_ID = ?
GROUP BY
    tp.ID
ORDER BY
    tp.ID;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).N_TEST_LIBRARY_ID_EQ`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[生成最近访问(create_recent)](module/TestMgmt/test_case/logic/create_recent)

节点：更新登记工时中的业务信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE `WORKLOAD` SET IDENTIFIER = ?, RECENT_PARENT = ?, RECENT_PARENT_IDENTIFIER = ?, RECENT_PARENT_NAME = ?, `NAME` = ?
WHERE PRINCIPAL_ID = ? and PRINCIPAL_TYPE = 'TEST_CASE'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).IDENTIFIER(编号)`
2. `Default(传入变量).TEST_LIBRARY_ID(测试库)`
3. `Default(传入变量).LIBRARY_IDENTIFIER(测试库标识)`
4. `Default(传入变量).TEST_LIBRARY_NAME(所属测试库)`
5. `Default(传入变量).TITLE(标题)`
6. `Default(传入变量).ID(标识)`

#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取变更类型与变更版本(set_change_type)](module/TestMgmt/test_case/logic/set_change_type)

节点：获取评审测试用例
<p class="panel-title"><b>执行sql语句</b></p>

```sql
	SELECT
		* 
	FROM
		test_case t1 
	WHERE
		NOT EXISTS (
		SELECT
			* 
		FROM
			relation t2
			JOIN review_content_extend t3 ON t3.id = t2.id
			JOIN review t4 ON t4.id = t2.PRINCIPAL_ID 
		WHERE
			t2.TARGET_ID = t1.id 
			AND t4.id = ? 
		) 
		AND t1.TEST_LIBRARY_ID = ?  AND t1.IS_DELETED = 0
	ORDER BY
	t1.IDENTIFIER;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).review`
2. `Default(传入变量).n_test_library_id_eq`

重置参数`page_results(分页查询结果)`，并将执行sql结果赋值给参数`page_results(分页查询结果)`
#### [用例(TEST_CASE)](module/TestMgmt/test_case)的处理逻辑[获取最近执行(newest_run)](module/TestMgmt/test_case/logic/newest_run)

节点：获取最近执行信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select t2.name as test_plan_name,t.EXECUTOR_NAME,t.EXECUTED_AT,t.`STATUS` as run_status from run t,test_plan t2 where  t.CASE_ID=? and t.`STATUS` is not null and t.PLAN_ID=t2.id  order by EXECUTED_AT desc LIMIT 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[删除类别(delete_categories)](module/TestMgmt/test_plan/logic/delete_categories)

节点：当类别删除时修改发布的类别属性
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE test_plan
SET categories = TRIM(BOTH ',' FROM REPLACE(CONCAT(',', categories, ','), CONCAT(',', ?, ','), ','))
WHERE FIND_IN_SET(?, categories) > 0 ;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).id(标识)`
2. `Default(传入变量).id(标识)`

#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[测试报告概览数据源(test_plan_report_survey)](module/TestMgmt/test_plan/logic/test_plan_report_survey)

节点：测试计划内用例数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as case_count from test_plan tp left join run r on tp.ID = r.PLAN_ID where tp.ID = ?;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[测试报告概览数据源(test_plan_report_survey)](module/TestMgmt/test_plan/logic/test_plan_report_survey)

节点：测试计划用例覆盖率
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    ROUND((COUNT(DISTINCT r.CASE_ID) * 100.0 / COUNT(DISTINCT tc.ID)), 1) AS Coverage_Percentage
FROM
    test_plan tp
        LEFT JOIN
    test_case tc ON tp.LIBRARY_ID = tc.TEST_LIBRARY_ID and tc.IS_DELETED = 0
        LEFT JOIN
    run r ON tp.ID = r.PLAN_ID AND tc.ID = r.CASE_ID
WHERE
        tp.ID = ?;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[测试报告概览数据源(test_plan_report_survey)](module/TestMgmt/test_plan/logic/test_plan_report_survey)

节点：测试计划用例通过率
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    CASE
        WHEN COUNT(DISTINCT r.CASE_ID) > 0 THEN ROUND((COUNT(DISTINCT CASE WHEN r.STATUS = '10' THEN r.CASE_ID END) * 100.0 / COUNT(DISTINCT r.CASE_ID)), 1)
        ELSE 0
        END AS Pass_Percentage
FROM
    test_plan tp
        LEFT JOIN
    run r ON tp.ID = r.PLAN_ID
WHERE
        tp.ID = ?;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [测试计划(TEST_PLAN)](module/TestMgmt/test_plan)的处理逻辑[测试报告概览数据源(test_plan_report_survey)](module/TestMgmt/test_plan/logic/test_plan_report_survey)

节点：测试计划内缺陷数
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
count(1) as bug_count
FROM `WORK_ITEM` t1
         LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID`
WHERE
    ( t1.`IS_DELETED` = 0  AND  t21.`GROUP` = 'bug'  AND  (
            EXISTS (
                -- 与计划ID关联的RUN的WORK_ITEM
                    SELECT 1
                    FROM `relation` rel
                             INNER JOIN `RUN` ru ON ru.`ID` = rel.`PRINCIPAL_ID`
                    WHERE
                            rel.`TARGET_ID` = t1.`ID`
                      AND ru.`PLAN_ID` = ?
                      AND rel.`TARGET_TYPE` = 'work_item'
                      AND rel.`PRINCIPAL_TYPE` = 'run'
                )
            OR EXISTS (
                -- 直接与计划ID关联的WORK_ITEM
                    SELECT 1
                    FROM `relation` r
                    WHERE
                            r.`TARGET_ID` = t1.`ID`
                      AND r.`PRINCIPAL_ID` = ?
                      AND r.`TARGET_TYPE` = 'work_item'
                      AND r.`PRINCIPAL_TYPE` = 'test_plan'
                )
        ) )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).ID(标识)`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[产品工单关联分页计数器(product_ticket_re_counters)](module/ProdMgmt/ticket/logic/product_ticket_re_counters)

节点：工单关联需求
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 工单关联需求
SELECT
	count( t.id ) AS ticket_re_idea
FROM
	idea t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND (
			t11.`TARGET_TYPE` = 'idea' 
			AND t11.`PRINCIPAL_TYPE` = 'ticket' 
			AND t11.`PRINCIPAL_ID` = ? ) )
			AND t.`IS_DELETED` = 0 

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[产品工单关联分页计数器(product_ticket_re_counters)](module/ProdMgmt/ticket/logic/product_ticket_re_counters)

节点：工单关联工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 工单关联工作项
SELECT
	count( t.id ) AS ticket_re_work_item
FROM
	work_item t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND ( t11.`PRINCIPAL_ID` = ? 
        AND t11.`TARGET_TYPE` = 'work_item' 
        AND t11.`PRINCIPAL_TYPE` = 'ticket' ) 
	) 
	AND  t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[产品工单关联分页计数器(product_ticket_re_counters)](module/ProdMgmt/ticket/logic/product_ticket_re_counters)

节点：工单关联工单
<p class="panel-title"><b>执行sql语句</b></p>

```sql
-- 工单关联工单
SELECT
	count( t.id ) AS ticket_re_ticket 
FROM
	ticket t 
WHERE
	EXISTS (
	SELECT
		* 
	FROM
		`RELATION` t11 
	WHERE
		t.`ID` = t11.`TARGET_ID` 
		AND ( t11.`PRINCIPAL_ID` = ? 
        AND t11.`TARGET_TYPE` = 'ticket'
        AND t11.`PRINCIPAL_TYPE` = 'ticket' ) 
	) 
    AND t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[产品工单关联分页计数器(product_ticket_re_counters)](module/ProdMgmt/ticket/logic/product_ticket_re_counters)

节点：合并查询计数器
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'idea' AND t11.`PRINCIPAL_TYPE` = 'ticket' AND t1.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS ticket_re_idea,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'ticket' AND t11.`PRINCIPAL_TYPE` = 'ticket' AND t3.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS ticket_re_ticket,
    COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'work_item' AND t11.`PRINCIPAL_TYPE` = 'ticket' AND t4.IS_DELETED=0 THEN 1 ELSE 0 END),0) AS ticket_re_work_item
FROM
    `RELATION` t11
JOIN
    `ticket` t ON t.`ID` = t11.`PRINCIPAL_ID`
LEFT JOIN
    `idea` t1 ON t1.ID = t11.TARGET_ID 
LEFT JOIN
    `ticket` t3 ON t3.ID = t11.TARGET_ID 
LEFT JOIN
    `work_item` t4 ON t4.ID = t11.TARGET_ID
WHERE
    (t11.`PRINCIPAL_ID` = ?);
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[产品工单关联分页计数器(product_ticket_re_counters)](module/ProdMgmt/ticket/logic/product_ticket_re_counters)

节点：客户回复
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    count( t.id ) AS customer_comment
FROM
    comment t
WHERE t.`OWNER_TYPE` = 'CUSTOMER_CONNECT'
     AND t.`PRINCIPAL_TYPE` = 'CUSTOMER_CONNECT'
     AND t.`PRINCIPAL_ID` = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[删除(delete)](module/ProdMgmt/ticket/logic/delete)

节点：删除最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_subtype='ticket'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[恢复(recover)](module/ProdMgmt/ticket/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='ticket'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [工单(TICKET)](module/ProdMgmt/ticket)的处理逻辑[查询归档数据(get_archived_info)](module/ProdMgmt/ticket/logic/get_archived_info)

节点：查询最新的一条归档信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT *
FROM activitiy
WHERE OBJECTID = ? AND AUDITTYPE = 'archive'
ORDER BY CREATE_TIME DESC
LIMIT 1;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`activity_info(活动信息)`，并将执行sql结果赋值给参数`activity_info(活动信息)`
#### [工单类型(TICKET_TYPE)](module/ProdMgmt/ticket_type)的处理逻辑[获取关联的工单(get_con_ticket)](module/ProdMgmt/ticket_type/logic/get_con_ticket)

节点：查询所关联的工单数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as ticket_num from ticket  where  type = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [版本(VERSION)](module/Base/version)的处理逻辑[新建版本时填充默认版本名称(fill_default_name)](module/Base/version/logic/fill_default_name)

节点：获取当前版本
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select IDENTIFIER, `NAME` from `version`
where owner_id = ? and owner_type = ?
order by IDENTIFIER desc
limit 1

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).OWNER_ID(所属数据标识)`
2. `Default(传入变量).OWNER_TYPE(所属数据对象)`

重置参数`cur_version(当前版本)`，并将执行sql结果赋值给参数`cur_version(当前版本)`
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[删除工时记录前附加逻辑(before_remove)](module/Base/workload/logic/before_remove)

节点：获取已登记工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sum(DURATION) as `DURATION` from workload where  PRINCIPAL_TYPE = ? and PRINCIPAL_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PRINCIPAL_TYPE(工时主体类型)`
2. `Default(传入变量).PRINCIPAL_ID(工时主体标识)`

重置参数`total_register(已登记总工时)`，并将执行sql结果赋值给参数`total_register(已登记总工时)`
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[填充工时数据(fill_workload_data)](module/Base/workload/logic/fill_workload_data)

节点：获取工时信息外加work_item_type_id
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT t1.PRINCIPAL_ID,
       t1.PRINCIPAL_TYPE,
       t1.DURATION,
       t2.WORK_ITEM_TYPE_ID,
       t1.`ID`,
       t1.`NAME`,
       t1.`PRINCIPAL_TYPE`,
       concat(t1.`RECENT_PARENT_IDENTIFIER`, '-', t1.`IDENTIFIER`) AS `SHOW_IDENTIFIER`
FROM workload t1
         LEFT JOIN `work_item` t2 ON t1.PRINCIPAL_ID = t2.ID
where t1.PRINCIPAL_ID = ? limit 1
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `obj(工时).principal_id`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[工时自动计算(workload_auto_cal)](module/Base/workload/logic/workload_auto_cal)

节点：计算父工作项汇聚工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select 
IFNULL(sum(case when name='ACTUAL_WORKLOAD' then DECIMAL_VALUE else 0 end),0) as 'actual_workload',
IFNULL(sum(case when name='ESTIMATED_WORKLOAD' then DECIMAL_VALUE else 0 end),0) as 'estimated_workload'
 from extend_storage t where   exists (select 1 from work_item a where PID=? and t.owner_id=a.id)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PRINCIPAL_ID(工时主体标识)`

将执行sql结果赋值给参数`workload_data(工时数据)`
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[登记工时并更新剩余工时(save_workload)](module/Base/workload/logic/save_workload)

节点：合计已登记工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sum(DURATION) as `DECIMAL_VALUE` from `workload` where PRINCIPAL_ID = ? and PRINCIPAL_TYPE = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `actual(实际工时).OWNER_ID(所属数据标识)`
2. `actual(实际工时).OWNER_TYPE(所属数据对象)`

重置参数`actual(实际工时)`，并将执行sql结果赋值给参数`actual(实际工时)`
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[获取已登记工时(get_register_workload)](module/Base/workload/logic/get_register_workload)

节点：获取已登记工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sum(DURATION) as `ACTUAL_WORKLOAD` from workload where  PRINCIPAL_TYPE = ? and PRINCIPAL_ID = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PRINCIPAL_TYPE(工时主体类型)`
2. `Default(传入变量).PRINCIPAL_ID(工时主体标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[获取已登记工时(get_register_workload)](module/Base/workload/logic/get_register_workload)

节点：获取剩余工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select DECIMAL_VALUE as `REMAINING_WORKLOAD` from `extend_storage` where  OWNER_ID = ? and OWNER_TYPE = ? and `NAME` = 'REMAINING_WORKLOAD'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PRINCIPAL_ID(工时主体标识)`
2. `Default(传入变量).PRINCIPAL_TYPE(工时主体类型)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工时(WORKLOAD)](module/Base/workload)的处理逻辑[获取已登记工时(get_register_workload)](module/Base/workload/logic/get_register_workload)

节点：获取预估工时
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select DECIMAL_VALUE as `ESTIMATED_WORKLOAD` from `extend_storage` where  OWNER_ID = ? and OWNER_TYPE = ? and `NAME` = 'ESTIMATED_WORKLOAD'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PRINCIPAL_ID(工时主体标识)`
2. `Default(传入变量).PRINCIPAL_TYPE(工时主体类型)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[删除(delete)](module/ProjMgmt/work_item/logic/delete)

节点：删除最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=1 where owner_id=? and owner_subtype='work_item'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[团队速度(project_team_speed)](module/ProjMgmt/work_item/logic/project_team_speed)

节点：查询团队速度
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
  SUM(CASE WHEN t31.`TYPE` = 'completed' THEN 1 ELSE 0 END) AS count2,
  COUNT(*) AS count,
  COALESCE(t1.`SPRINT_ID`, '未加入迭代') AS filter_type
FROM
  `WORK_ITEM` t1
  LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID`
WHERE
  t1.`PROJECT_ID` = ?
--   AND t1.`WORK_ITEM_TYPE_ID` LIKE '%story%'
  AND t1.`IS_DELETED` = 0
	AND ((? IS NULL OR ? = '' OR ? IS NULL OR ? = '') OR t1.CREATE_TIME BETWEEN ? and ? )
GROUP BY
  filter_type;

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_gtandeq`
4. `Default(传入变量).n_create_time_ltandeq`
5. `Default(传入变量).n_create_time_ltandeq`
6. `Default(传入变量).n_create_time_gtandeq`
7. `Default(传入变量).n_create_time_ltandeq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[填充待完成事项数量(fill_not_completed_num)](module/ProjMgmt/work_item/logic/fill_not_completed_num)

节点：获取待完成事项数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(1) as `not_completed_num`
FROM `WORK_ITEM` t1 
LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID` 
WHERE 
( t1.`ASSIGNEE_ID` = ?  AND  t1.`IS_ARCHIVED` = 0  AND  t1.`IS_DELETED` = 0  AND  t31.`TYPE` <> 'completed' )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters)

节点：合并查询计数器
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
     COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'idea' AND t11.`PRINCIPAL_TYPE` = 'work_item' AND t1.IS_DELETED=0  THEN 1 ELSE 0 END),0) AS work_item_re_idea,
     COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'work_item' AND t11.`PRINCIPAL_TYPE` = 'work_item' AND t4.IS_DELETED=0 THEN 1 ELSE 0 END),0)  AS work_item_re_work_item,
     COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'test_case' AND t11.`PRINCIPAL_TYPE` = 'work_item' AND t5.IS_DELETED=0 THEN 1 ELSE 0 END),0)  AS work_item_re_test_case,
     COALESCE(SUM(CASE WHEN t11.`TARGET_TYPE` = 'ticket' AND t11.`PRINCIPAL_TYPE` = 'work_item' AND t3.IS_DELETED=0 THEN 1 ELSE 0 END),0)  AS work_item_re_ticket
FROM
    `RELATION` t11
JOIN
    `work_item` t ON t.`ID` = t11.`PRINCIPAL_ID`
LEFT JOIN
    `idea` t1 ON t1.ID = t11.TARGET_ID 
LEFT JOIN
    `ticket` t3 ON t3.ID = t11.TARGET_ID 
LEFT JOIN
    `work_item` t4 ON t4.ID = t11.TARGET_ID
LEFT JOIN
    `test_case` t5 ON t5.ID = t11.TARGET_ID
WHERE
    (t11.`PRINCIPAL_ID` = ? );
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters)

节点：工作项依赖
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
count(t1.id) as `dependency`
FROM `RELATION` t1 
WHERE 
( ( exists(select 1 from work_item t2 where t1.principal_id = t2.id and t1.principal_id = ? and t2.is_deleted = 0)  
OR  exists(select 1 from work_item t2 where t1.target_id= t2.id and t1.target_id= ? and t2.is_deleted = 0) )  
AND  t1.`PRINCIPAL_TYPE` = 'dependency' )
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `work_item(工作项).ID(标识)`
2. `work_item(工作项).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters)

节点：工作项关联子工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS work_item_re_children
FROM
	work_item t 
WHERE
	t.pid = ? and t.is_deleted = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters)

节点：工作项内交付物
<p class="panel-title"><b>执行sql语句</b></p>

```sql
	SELECT
	count( t.id ) AS work_item_deliverable
FROM
	attachment t 
WHERE
    t.owner_id = ? and t.owner_subtype='DELIVERABLE' and t.owner_type = 'WORK_ITEM'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters)

节点：工作项版本
<p class="panel-title"><b>执行sql语句</b></p>

```sql
	SELECT
	count( t.id ) AS work_item_version
FROM
	`version` t 
WHERE
    t.owner_id = ? and  t.owner_type = 'WORK_ITEM'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters)

节点：工作项关联产品需求
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS work_item_re_idea 
FROM
	idea t 
WHERE
	EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	) 
	AND t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters)

节点：工作项关联工作项
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS work_item_re_work_item 
FROM
	work_item t 
WHERE
	EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	) 
	AND t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters)

节点：工作项关联测试用例
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS work_item_re_test_case
FROM
	test_case t 
WHERE
	EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	) 
	AND t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项关联分页计数器(work_item_re_counters)](module/ProjMgmt/work_item/logic/work_item_re_counters)

节点：工作项关联工单
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
	count( t.id ) AS work_item_re_ticket 
FROM
	ticket t 
WHERE
	EXISTS (
	SELECT
			*
	FROM
		version_data t12
	WHERE
		 ( t12.`OWNER_TYPE` = 'RELATION' AND t12.`PARENT_ID` = ? ) 
		AND t12.PARENT_VERSION_ID = ?
		AND t.`ID` =  JSON_UNQUOTE(t12.`DATA`-> '$.target_id') 
	) 
	AND t.`IS_DELETED` = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`
2. `Default(传入变量).srfversionid`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项分布(kanban_work_item_distribution)](module/ProjMgmt/work_item/logic/kanban_work_item_distribution)

节点：查询工作项分布
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
  SUM(CASE WHEN s.`TYPE` != 'completed' THEN 1 ELSE 0 END) AS count2,
  SUM(CASE WHEN s.`TYPE` = 'completed' THEN 1 ELSE 0 END) AS count,
  wi.`ENTRY_ID` AS filter_type
FROM
  `WORK_ITEM` wi
  JOIN `WORK_ITEM_STATE` s ON wi.`STATE` = s.`ID`
WHERE
  wi.`PROJECT_ID` = ?
  AND wi.`IS_DELETED` = 0
  AND wi.`BOARD_ID` IS NOT NULL
  AND wi.`ENTRY_ID` IS NOT NULL
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BOARD_ID, ?))
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.WORK_ITEM_TYPE_ID, ?))
GROUP BY
  wi.`ENTRY_ID`;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).n_board_id_eq`
3. `Default(传入变量).n_board_id_eq`
4. `Default(传入变量).n_board_id_eq`
5. `Default(传入变量).n_work_item_type_id_eq`
6. `Default(传入变量).n_work_item_type_id_eq`
7. `Default(传入变量).n_work_item_type_id_eq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项完成趋势(complete_trend)](module/ProjMgmt/work_item/logic/complete_trend)

节点：七天前创建且未完成的工作项数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `seven_ago_not_completed`  from work_item t1, work_item_state t2 
where t1.`STATE` = t2.ID and t2.`TYPE`  <> 'completed'
and datediff(curdate(), t1.CREATE_TIME) >= 7  
and t1.PROJECT_ID = ? and t1.IS_DELETED = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`

重置参数`work_item(工作项对象)`，并将执行sql结果赋值给参数`work_item(工作项对象)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[工作项完成趋势(complete_trend)](module/ProjMgmt/work_item/logic/complete_trend)

节点：七天前完成的工作项数量
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select count(1) as `seven_ago_completed` from work_item t1, work_item_state t2 
where t1.STATE = t2.id and t2.`TYPE` = 'completed'
and datediff(curdate(), t1.COMPLETED_AT) >= 7  
and t1.PROJECT_ID = ? 
and t1.IS_DELETED = 0
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`

重置参数`work_item(工作项对象)`，并将执行sql结果赋值给参数`work_item(工作项对象)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[恢复(recover)](module/ProjMgmt/work_item/logic/recover)

节点：恢复最近访问
<p class="panel-title"><b>执行sql语句</b></p>

```sql
update recent set IS_DELETED=0 where owner_id=? and owner_subtype='work_item'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[成员负荷报告(sprint_user_stat)](module/ProjMgmt/work_item/logic/sprint_user_stat)

节点：查询成员负荷报告
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
  SUM(CASE WHEN t3.`TYPE` != 'completed' THEN 1 ELSE 0 END) AS count2,
  SUM(CASE WHEN t3.`TYPE` = 'completed' THEN 1 ELSE 0 END) AS count,
  COUNT(*) AS sum_count,
  IF(TRIM(t1.`ASSIGNEE_ID`) IS NULL, '未分组', t1.`ASSIGNEE_ID`) AS filter_type
FROM
  `WORK_ITEM` t1
LEFT JOIN
  `WORK_ITEM_STATE` t3 ON t1.`STATE` = t3.`ID`
WHERE
  t1.`PROJECT_ID` = ?
  AND t1.`IS_DELETED` = 0
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(t1.sprint_id, ?))
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(t1.release_id, ?))
	AND ((? IS NULL OR ? = '') OR FIND_IN_SET(t1.WORK_ITEM_TYPE_ID, ?))
GROUP BY
  filter_type;

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).n_sprint_id_eq`
3. `Default(传入变量).n_sprint_id_eq`
4. `Default(传入变量).n_sprint_id_eq`
5. `Default(传入变量).n_release_id_eq`
6. `Default(传入变量).n_release_id_eq`
7. `Default(传入变量).n_release_id_eq`
8. `Default(传入变量).n_work_item_type_id_eq`
9. `Default(传入变量).n_work_item_type_id_eq`
10. `Default(传入变量).n_work_item_type_id_eq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[新建工作项前校验父子工作项类型(before_create_check_type)](module/ProjMgmt/work_item/logic/before_create_check_type)

节点：获取父工作项的子类型范围
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select sub_type as work_item_sub_type from work_item_type t1
where exists(select 1 from work_item t2 where t1.id = t2.work_item_type_id and t2.id = ?)
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).PID(父标识)`

将执行sql结果赋值给参数`parent_work_item(父工作项)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[生成最近访问(create_recent)](module/ProjMgmt/work_item/logic/create_recent)

节点：更新登记工时中的业务信息
<p class="panel-title"><b>执行sql语句</b></p>

```sql
UPDATE `WORKLOAD` SET IDENTIFIER = ?, RECENT_PARENT = ?, RECENT_PARENT_IDENTIFIER = ?, RECENT_PARENT_NAME= ?, `NAME` = ?
WHERE PRINCIPAL_ID = ? and PRINCIPAL_TYPE = 'WORK_ITEM'
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).IDENTIFIER(编号)`
2. `Default(传入变量).PROJECT_ID(项目)`
3. `Default(传入变量).PROJECT_IDENTIFIER(项目标识)`
4. `Default(传入变量).PROJECT_NAME(所属项目)`
5. `Default(传入变量).TITLE(标题)`
6. `Default(传入变量).ID(标识)`

#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[缺陷年龄报告(defect_age_report)](module/ProjMgmt/work_item/logic/defect_age_report)

节点：查询缺陷年龄报告
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    time_ranges.filter_type,
    COALESCE(SUM(count), 0) AS count
FROM (
         SELECT '10' AS filter_type UNION ALL
         SELECT '20' UNION ALL
         SELECT '30' UNION ALL
         SELECT '40' UNION ALL
         SELECT '50' UNION ALL
         SELECT '60' UNION ALL
         SELECT '70'
     ) AS time_ranges
         LEFT JOIN (
    SELECT
        CASE
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 1 THEN '10'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 1 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 2 THEN '20'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 2 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 5 THEN '30'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 5 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 7 THEN '40'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 7 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 15 THEN '50'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 15 AND TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) <= 30 THEN '60'
            WHEN TIMESTAMPDIFF(DAY, CREATE_TIME, NOW()) > 30 THEN '70'
            ELSE NULL
            END AS filter_type,
        COUNT(*) AS count
    FROM work_item
    WHERE
        CREATE_TIME IS NOT NULL
      AND WORK_ITEM_TYPE_ID LIKE '%BUG%'
      AND IS_DELETED = 0
      AND PROJECT_ID = ?
      AND ((? IS NULL OR ? = '') OR BOARD_ID = ?)  -- 看板
      AND ((? IS NULL OR ? = '' OR ? IS NULL OR ? = '') OR CREATE_TIME BETWEEN ? AND ?) -- 创建时间范围
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(PRIORITY, ?)) -- 优先级
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(SEVERITY, ?)) -- 严重程度
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(IS_ARCHIVED, ?)) -- 是否归档
    GROUP BY filter_type
) AS T1 ON T1.filter_type = time_ranges.filter_type
GROUP BY time_ranges.filter_type
ORDER BY time_ranges.filter_type ASC;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).N_BOARD_ID_EQ`
3. `Default(传入变量).N_BOARD_ID_EQ`
4. `Default(传入变量).N_BOARD_ID_EQ`
5. `Default(传入变量).N_CREATE_TIME_GTANDEQ`
6. `Default(传入变量).N_CREATE_TIME_GTANDEQ`
7. `Default(传入变量).N_CREATE_TIME_LTANDEQ`
8. `Default(传入变量).N_CREATE_TIME_LTANDEQ`
9. `Default(传入变量).N_CREATE_TIME_GTANDEQ`
10. `Default(传入变量).N_CREATE_TIME_LTANDEQ`
11. `Default(传入变量).N_PRIORITY_EQ`
12. `Default(传入变量).N_PRIORITY_EQ`
13. `Default(传入变量).N_PRIORITY_EQ`
14. `Default(传入变量).N_SEVERITY_EQ`
15. `Default(传入变量).N_SEVERITY_EQ`
16. `Default(传入变量).N_SEVERITY_EQ`
17. `Default(传入变量).n_is_archived_in`
18. `Default(传入变量).n_is_archived_in`
19. `Default(传入变量).n_is_archived_in`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[缺陷每日趋势(defect_daily_trend)](module/ProjMgmt/work_item/logic/defect_daily_trend)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    IFNULL(b.new_bugs, 0) AS count,
    IFNULL(c.completed_bugs, 0) AS count2
FROM (
         SELECT DATE_ADD(?, INTERVAL seq.seq DAY) AS date
         FROM (
                  SELECT a.i+b.i*10+c.i*100 AS seq
                  FROM (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
              ) seq
         WHERE DATE_ADD(?, INTERVAL seq.seq DAY) <= ?
     ) date_series
         LEFT JOIN (
    SELECT
        DATE(CREATE_TIME) AS created_date,
        COUNT(*) AS new_bugs
    FROM work_item
    WHERE CREATE_TIME BETWEEN ? AND ?
      AND WORK_ITEM_TYPE_ID like '%bug%'
      AND ((? IS NULL OR ? = '') OR BOARD_ID = ?)
      AND ((? IS NULL OR ? = '') OR SPRINT_ID = ?)
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(PRIORITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(SEVERITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(IS_ARCHIVED, ?))
    GROUP BY created_date
) b ON date_series.date = b.created_date
         LEFT JOIN (
    SELECT
        DATE(UPDATE_TIME) AS update_date,
        COUNT(*) AS completed_bugs
    FROM work_item
    WHERE UPDATE_TIME BETWEEN ? AND ?
      AND WORK_ITEM_TYPE_ID like '%bug%'
      AND STATE = '40'
      AND ((? IS NULL OR ? = '') OR BOARD_ID = ?)
      AND ((? IS NULL OR ? = '') OR SPRINT_ID = ?)
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(PRIORITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(SEVERITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(IS_ARCHIVED, ?))
    GROUP BY update_date
) c ON date_series.date = c.update_date
ORDER BY date_series.date;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_create_time_gtandeq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_ltandeq`
4. `Default(传入变量).n_create_time_gtandeq`
5. `Default(传入变量).n_create_time_ltandeq`
6. `Default(传入变量).n_board_id_eq`
7. `Default(传入变量).n_board_id_eq`
8. `Default(传入变量).n_board_id_eq`
9. `Default(传入变量).n_sprint_id_eq`
10. `Default(传入变量).n_sprint_id_eq`
11. `Default(传入变量).n_sprint_id_eq`
12. `Default(传入变量).n_priority_eq`
13. `Default(传入变量).n_priority_eq`
14. `Default(传入变量).n_priority_eq`
15. `Default(传入变量).n_severity_eq`
16. `Default(传入变量).n_severity_eq`
17. `Default(传入变量).n_severity_eq`
18. `Default(传入变量).n_is_archived_in`
19. `Default(传入变量).n_is_archived_in`
20. `Default(传入变量).n_is_archived_in`
21. `Default(传入变量).n_create_time_gtandeq`
22. `Default(传入变量).n_create_time_ltandeq`
23. `Default(传入变量).n_board_id_eq`
24. `Default(传入变量).n_board_id_eq`
25. `Default(传入变量).n_board_id_eq`
26. `Default(传入变量).n_sprint_id_eq`
27. `Default(传入变量).n_sprint_id_eq`
28. `Default(传入变量).n_sprint_id_eq`
29. `Default(传入变量).n_priority_eq`
30. `Default(传入变量).n_priority_eq`
31. `Default(传入变量).n_priority_eq`
32. `Default(传入变量).n_severity_eq`
33. `Default(传入变量).n_severity_eq`
34. `Default(传入变量).n_severity_eq`
35. `Default(传入变量).n_is_archived_in`
36. `Default(传入变量).n_is_archived_in`
37. `Default(传入变量).n_is_archived_in`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[缺陷累计趋势查询(defect_total_trend)](module/ProjMgmt/work_item/logic/defect_total_trend)

节点：查询每日新增缺陷累计
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    (
        SELECT COUNT(*)
        FROM work_item wi
                 JOIN work_item_state wis ON wi.state = wis.ID
        WHERE DATE(wi.CREATE_TIME) <= date_series.date
          AND wi.WORK_ITEM_TYPE_ID LIKE '%bug%'
          AND wi.PROJECT_ID = ?
          AND ((? IS NULL OR ? = '') OR SPRINT_ID = ?)
          AND ((? IS NULL OR ? = '') OR FIND_IN_SET(PRIORITY, ?))
          AND ((? IS NULL OR ? = '') OR FIND_IN_SET(SEVERITY, ?))
          AND wi.is_deleted = 0
    ) AS count,
    (
        SELECT COUNT(*)
        FROM work_item wi
                 JOIN work_item_state wis ON wi.state = wis.ID
        WHERE DATE(wi.CREATE_TIME) <= date_series.date
          AND wi.WORK_ITEM_TYPE_ID LIKE '%bug%'
          AND wi.PROJECT_ID = ?
          AND ((? IS NULL OR ? = '') OR SPRINT_ID = ?)
          AND ((? IS NULL OR ? = '') OR FIND_IN_SET(PRIORITY, ?))
          AND ((? IS NULL OR ? = '') OR FIND_IN_SET(SEVERITY, ?))
          AND wi.is_deleted = 0
          AND wis.TYPE <> 'completed'
    ) AS count2
FROM
    (SELECT ? + INTERVAL seq.seq DAY AS date
     FROM
         (SELECT a.i + b.i*10 + c.i*100 AS seq
          FROM (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a
                   CROSS JOIN (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b
                   CROSS JOIN (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
         ) seq
     WHERE ? + INTERVAL seq.seq DAY <= ?
    ) date_series
ORDER BY date_series.date;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).N_SPRINT_ID_EQ`
3. `Default(传入变量).N_SPRINT_ID_EQ`
4. `Default(传入变量).N_SPRINT_ID_EQ`
5. `Default(传入变量).N_PRIORITY_EQ`
6. `Default(传入变量).N_PRIORITY_EQ`
7. `Default(传入变量).N_PRIORITY_EQ`
8. `Default(传入变量).N_SEVERITY_EQ`
9. `Default(传入变量).N_SEVERITY_EQ`
10. `Default(传入变量).N_SEVERITY_EQ`
11. `Default(传入变量).n_project_id_eq`
12. `Default(传入变量).N_SPRINT_ID_EQ`
13. `Default(传入变量).N_SPRINT_ID_EQ`
14. `Default(传入变量).N_SPRINT_ID_EQ`
15. `Default(传入变量).N_PRIORITY_EQ`
16. `Default(传入变量).N_PRIORITY_EQ`
17. `Default(传入变量).N_PRIORITY_EQ`
18. `Default(传入变量).N_SEVERITY_EQ`
19. `Default(传入变量).N_SEVERITY_EQ`
20. `Default(传入变量).N_SEVERITY_EQ`
21. `Default(传入变量).n_create_time_gtandeq`
22. `Default(传入变量).n_create_time_gtandeq`
23. `Default(传入变量).n_create_time_ltandeq`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[获取工作项类型(get_work_item_type)](module/ProjMgmt/work_item/logic/get_work_item_type)

节点：查询工作项类型
<p class="panel-title"><b>执行sql语句</b></p>

```sql
select work_item_type_id from work_item where id = ?
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).ID(标识)`

重置参数`Default(传入变量)`，并将执行sql结果赋值给参数`Default(传入变量)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[需求年龄报告(backlog_age_report)](module/ProjMgmt/work_item/logic/backlog_age_report)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    time_ranges.filter_type,
    COALESCE(SUM(count), 0) AS count
FROM (
         SELECT '10' AS filter_type UNION ALL
         SELECT '20' UNION ALL
         SELECT '30' UNION ALL
         SELECT '40' UNION ALL
         SELECT '50' UNION ALL
         SELECT '60' UNION ALL
         SELECT '70'
     ) AS time_ranges
         LEFT JOIN (
    SELECT
        CASE
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 1 THEN '10'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 1 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 2 THEN '20'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 2 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 5 THEN '30'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 5 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 7 THEN '40'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 7 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 15 THEN '50'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 15 AND TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) <= 30 THEN '60'
            WHEN TIMESTAMPDIFF(DAY, T1.CREATE_TIME, NOW()) > 30 THEN '70'
            ELSE NULL
            END AS filter_type,
        COUNT(*) AS count
    FROM work_item T1
    INNER JOIN work_item_type T2 ON T1.WORK_ITEM_TYPE_ID = T2.ID
    WHERE T1.UPDATE_TIME IS NOT NULL and T2.`GROUP` = 'requirement'
      AND T1.PROJECT_ID = ?
      AND ((? IS NULL OR ? = '') OR T1.BOARD_ID = ?)  -- 看板
      AND ((? IS NULL OR ? = '' OR ? IS NULL OR ? = '') OR T1.CREATE_TIME BETWEEN ? AND ?) -- 创建时间范围
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(T1.BACKLOG_TYPE, ?)) -- 需求类型
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(T1.PRIORITY, ?)) -- 优先级
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(T1.BACKLOG_FROM, ?)) -- 需求来源
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(T1.IS_ARCHIVED, ?)) -- 是否归档
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(T1.IS_DELETED, ?)) -- 是否删除
    GROUP BY filter_type
) AS T1 ON T1.filter_type = time_ranges.filter_type
GROUP BY time_ranges.filter_type
ORDER BY time_ranges.filter_type ASC;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_project_id_eq`
2. `Default(传入变量).N_BOARD_ID_EQ`
3. `Default(传入变量).N_BOARD_ID_EQ`
4. `Default(传入变量).N_BOARD_ID_EQ`
5. `Default(传入变量).n_create_time_gtandeq`
6. `Default(传入变量).n_create_time_gtandeq`
7. `Default(传入变量).n_create_time_ltandeq`
8. `Default(传入变量).n_create_time_ltandeq`
9. `Default(传入变量).n_create_time_gtandeq`
10. `Default(传入变量).n_create_time_ltandeq`
11. `Default(传入变量).N_BACKLOG_TYPE_EQ`
12. `Default(传入变量).N_BACKLOG_TYPE_EQ`
13. `Default(传入变量).N_BACKLOG_TYPE_EQ`
14. `Default(传入变量).N_PRIORITY_EQ`
15. `Default(传入变量).N_PRIORITY_EQ`
16. `Default(传入变量).N_PRIORITY_EQ`
17. `Default(传入变量).N_BACKLOG_FROM_EQ`
18. `Default(传入变量).N_BACKLOG_FROM_EQ`
19. `Default(传入变量).N_BACKLOG_FROM_EQ`
20. `Default(传入变量).n_is_archived_in`
21. `Default(传入变量).n_is_archived_in`
22. `Default(传入变量).n_is_archived_in`
23. `Default(传入变量).N_IS_DELETED_IN`
24. `Default(传入变量).N_IS_DELETED_IN`
25. `Default(传入变量).N_IS_DELETED_IN`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[需求每日趋势(backlog_daily_trend)](module/ProjMgmt/work_item/logic/backlog_daily_trend)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    IFNULL(b.new_bugs, 0) AS count,
    IFNULL(c.completed_bugs, 0) AS count2
FROM (
         SELECT DATE_ADD(?, INTERVAL seq.seq DAY) AS date
         FROM (
                  SELECT a.i+b.i*10+c.i*100 AS seq
                  FROM (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
                       (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
              ) seq
         WHERE DATE_ADD(?, INTERVAL seq.seq DAY) <= ?
     ) date_series
         LEFT JOIN (
    SELECT
        DATE(wi.CREATE_TIME) AS created_date,
        COUNT(*) AS new_bugs
    FROM work_item wi
             JOIN work_item_type wit ON wi.WORK_ITEM_TYPE_ID = wit.ID
             JOIN work_item_state wis ON wi.state = wis.ID
    WHERE wi.CREATE_TIME BETWEEN ? AND ?
      AND wit.GROUP = 'requirement'
      AND ((? IS NULL OR ? = '') OR wi.BOARD_ID = ?)
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.PRIORITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wis.TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BACKLOG_TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BACKLOG_FROM, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.IS_ARCHIVED, ?))
    GROUP BY created_date
) b ON date_series.date = b.created_date
         LEFT JOIN (
    SELECT
        DATE(wi.UPDATE_TIME) AS update_date,
        COUNT(*) AS completed_bugs
    FROM work_item wi
             JOIN work_item_type wit ON wi.WORK_ITEM_TYPE_ID = wit.ID
             JOIN work_item_state wis ON wi.state = wis.ID
    WHERE wi.UPDATE_TIME BETWEEN ? AND ?
      AND wit.GROUP = 'requirement'
      AND wi.STATE = '40'
      AND ((? IS NULL OR ? = '') OR wi.BOARD_ID = ?)
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.PRIORITY, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wis.TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BACKLOG_TYPE, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.BACKLOG_FROM, ?))
      AND ((? IS NULL OR ? = '') OR FIND_IN_SET(wi.IS_ARCHIVED, ?))
    GROUP BY update_date
) c ON date_series.date = c.update_date
ORDER BY date_series.date;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_create_time_gtandeq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_ltandeq`
4. `Default(传入变量).n_create_time_gtandeq`
5. `Default(传入变量).n_create_time_ltandeq`
6. `Default(传入变量).N_BOARD_ID_EQ`
7. `Default(传入变量).N_BOARD_ID_EQ`
8. `Default(传入变量).N_BOARD_ID_EQ`
9. `Default(传入变量).N_PRIORITY_EQ`
10. `Default(传入变量).N_PRIORITY_EQ`
11. `Default(传入变量).N_PRIORITY_EQ`
12. `Default(传入变量).n_work_item_type_group`
13. `Default(传入变量).n_work_item_type_group`
14. `Default(传入变量).n_work_item_type_group`
15. `Default(传入变量).N_BACKLOG_TYPE_EQ`
16. `Default(传入变量).N_BACKLOG_TYPE_EQ`
17. `Default(传入变量).N_BACKLOG_TYPE_EQ`
18. `Default(传入变量).N_BACKLOG_FROM_EQ`
19. `Default(传入变量).N_BACKLOG_FROM_EQ`
20. `Default(传入变量).N_BACKLOG_FROM_EQ`
21. `Default(传入变量).n_is_archived_in`
22. `Default(传入变量).n_is_archived_in`
23. `Default(传入变量).n_is_archived_in`
24. `Default(传入变量).n_create_time_ltandeq`
25. `Default(传入变量).n_create_time_gtandeq`
26. `Default(传入变量).N_BOARD_ID_EQ`
27. `Default(传入变量).N_BOARD_ID_EQ`
28. `Default(传入变量).N_BOARD_ID_EQ`
29. `Default(传入变量).N_PRIORITY_EQ`
30. `Default(传入变量).N_PRIORITY_EQ`
31. `Default(传入变量).N_PRIORITY_EQ`
32. `Default(传入变量).n_work_item_type_group`
33. `Default(传入变量).n_work_item_type_group`
34. `Default(传入变量).n_work_item_type_group`
35. `Default(传入变量).N_BACKLOG_TYPE_EQ`
36. `Default(传入变量).N_BACKLOG_TYPE_EQ`
37. `Default(传入变量).N_BACKLOG_TYPE_EQ`
38. `Default(传入变量).N_BACKLOG_FROM_EQ`
39. `Default(传入变量).N_BACKLOG_FROM_EQ`
40. `Default(传入变量).N_BACKLOG_FROM_EQ`
41. `Default(传入变量).n_is_archived_in`
42. `Default(传入变量).n_is_archived_in`
43. `Default(传入变量).n_is_archived_in`

重置参数`result(结果)`，并将执行sql结果赋值给参数`result(结果)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[需求累计流图(backlog_accumulate_flow)](module/ProjMgmt/work_item/logic/backlog_accumulate_flow)

节点：直接SQL调用
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT
    date_series.date AS filter_type,
    SUM(CASE WHEN wi.STATE_TYPE = 'pending' THEN 1 ELSE 0 END) AS count,
    SUM(CASE WHEN wi.STATE_TYPE = 'in_progress' THEN 1 ELSE 0 END) AS count1,
    SUM(CASE WHEN wi.STATE_TYPE = 'completed' THEN 1 ELSE 0 END) AS count2
FROM (
    SELECT DATE_ADD(?, INTERVAL seq.seq DAY) AS date
    FROM (
        SELECT a.i + b.i * 10 + c.i * 100 AS seq
        FROM
        (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a,
        (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b,
        (SELECT 0 AS i UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
    ) seq
    WHERE DATE_ADD(?, INTERVAL seq.seq DAY) BETWEEN ? AND ?
) date_series
LEFT JOIN (
    SELECT
        t1.`CREATE_TIME`,
        t31.`TYPE` AS `STATE_TYPE`
    FROM `WORK_ITEM` t1
    LEFT JOIN `WORK_ITEM_TYPE` t21 ON t1.`WORK_ITEM_TYPE_ID` = t21.`ID`
    LEFT JOIN `WORK_ITEM_STATE` t31 ON t1.`STATE` = t31.`ID`
    WHERE
        t21.`GROUP` = 'requirement'
        AND t1.`IS_DELETED` = 0
        AND t1.`PROJECT_ID` = ?
        AND t1.`CREATE_TIME` <= ?
        AND ((? IS NULL OR ? = '') OR FIND_IN_SET(t1.WORK_ITEM_TYPE_ID, ?))
        AND ((? IS NULL OR ? = '') OR FIND_IN_SET(t1.IS_ARCHIVED, ?))
) wi ON wi.CREATE_TIME <= date_series.date
GROUP BY
    date_series.date
ORDER BY
    date_series.date ASC;

```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).n_create_time_gtandeq`
2. `Default(传入变量).n_create_time_gtandeq`
3. `Default(传入变量).n_create_time_gtandeq`
4. `Default(传入变量).n_create_time_ltandeq`
5. `Default(传入变量).N_PROJECT_ID_EQ`
6. `Default(传入变量).N_PROJECT_ID_EQ`
7. `Default(传入变量).N_WORK_ITEM_TYPE_ID_EQ`
8. `Default(传入变量).N_WORK_ITEM_TYPE_ID_EQ`
9. `Default(传入变量).N_WORK_ITEM_TYPE_ID_EQ`
10. `Default(传入变量).n_is_archived_in`
11. `Default(传入变量).n_is_archived_in`
12. `Default(传入变量).n_is_archived_in`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`
#### [工作项(WORK_ITEM)](module/ProjMgmt/work_item)的处理逻辑[首页待完成项计数器(count_my_todo)](module/ProjMgmt/work_item/logic/count_my_todo)

节点：查询我的待完成
<p class="panel-title"><b>执行sql语句</b></p>

```sql
SELECT count(1) my_todo_count
FROM `WORK_ITEM` t1
         LEFT JOIN `WORK_ITEM_STATE` t3 ON t1.`STATE` = t3.`ID`
WHERE ((t1.`ASSIGNEE_ID` = ? OR exists(select 1
                                       from executor t2
                                       where t1.id = t2.owner_id
                                         and t2.owner_type = 'WORK_ITEM'
                                         and t2.owner_subtype = 'WORK_ITEM'
                                         and t2.user_id = ?)) AND t1.`IS_ARCHIVED` = 0 AND t1.`IS_DELETED` = 0 AND
       t3.`TYPE` <> 'completed')
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `用户全局对象.srfpersonid`
2. `用户全局对象.srfpersonid`

重置参数`result(result)`，并将执行sql结果赋值给参数`result(result)`




