<p class="panel-title"><b>执行sql语句</b></p>

```sql
	SELECT
		* 
	FROM
		idea t1 
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
		AND t1.product_id = ?  AND t1.IS_DELETED = 0
	ORDER BY
	t1.IDENTIFIER;
```

<p class="panel-title"><b>执行sql参数</b></p>

1. `Default(传入变量).review`
2. `Default(传入变量).n_test_library_id_eq`

重置参数`page_results(分页查询结果)`，并将执行sql结果赋值给参数`page_results(分页查询结果)`
