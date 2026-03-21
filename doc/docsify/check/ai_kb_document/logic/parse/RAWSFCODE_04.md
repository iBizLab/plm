<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def parsed_content = _default.get('parsed_content')
def parse_error =  _default.get('parse_error')?:""
def custom_chunk = _default.get('custom_chunk')
// 默认使用自定义规则
def parser_config = _default.get('parser_config')
if (custom_chunk == 0){
    // 使用所属知识库默认规则
    def knowledge_base_runtime = sys.dataentity('ai_knowledge_base')
    def knowledge_base = knowledge_base_runtime.get(_default.get('kb_id'))
    if (knowledge_base){
        parser_config = knowledge_base.get('parser_config')
    }
}
if (parsed_content && parser_config){
    // 辅助函数：检测内容类型
    def detectContentType = { content ->
    if (!content || !(content instanceof String)) {
        return null
    }
    try {
        new groovy.json.JsonSlurper().parseText(content.trim())
        return 'json'
    } catch (ignore) {}
    try {
        new XmlSlurper(false, false).parseText(content.trim()) // 禁用DTD和命名空间简化验证
        return 'xml'
    } catch (ignore) {}
    return null
}

    // 辅助函数：验证内容类型
    def validateContentType = { content, expectedType ->
    if (!content || !(content instanceof String) || !expectedType) {
        return false
    }
    try {
        if (expectedType == 'json') {
            new groovy.json.JsonSlurper().parseText(content.trim())
            return true
        } else if (expectedType == 'xml') {
            new XmlSlurper(false, false).parseText(content.trim())
            return true
        }
    } catch (Exception e) {
        return false
    }
    return false
}

    // 1、判断parsed_content类型为xml/json 
    def contentType = detectContentType(parsed_content)
    if (!contentType) {
        parse_error = parse_error + "${parsed_content}不是有效JSON/XML"
    }
    // 2、进行文本预处理 
    def pre_process_rules = parser_config.get('pre_process_rules')
    if (pre_process_rules) {
        def process_content = net.ibizsys.central.plugin.ai.util.TextPreprocessUtils.process(parsed_content,pre_process_rules)
        // 3、判断预处理后文本是否符合原类型 
        if (!validateContentType(process_content, contentType)) {
            // 4、去掉文本预处理中可能干扰的选项，重新执行文本预处理 
            // 定义针对结构化数据的高危规则（会破坏JSON/XML语法结构）
            def dangerousRulesMap = [
                'json': ['normalize_punctuation', 'remove_header_footer', 'remove_watermark'],
                'xml':  ['remove_html_tags', 'remove_js_css', 'remove_header_footer', 'remove_watermark', 'normalize_punctuation']
        ]

            // 将逗号分隔的规则字符串转为规范列表（去空格、去空值）
            def allRulesList = pre_process_rules.split(',').collect { it }.findAll { it }

            // 获取当前内容类型对应的危险规则（小写匹配，增强健壮性）
            def dangerousRules = (dangerousRulesMap[contentType] ?: []).collect { it.toLowerCase() }
            def safeRulesList = allRulesList.findAll { rule -> !(rule.toLowerCase() in dangerousRules) }

            // 仅当存在安全规则且与原规则不同时尝试修复
            if (safeRulesList && safeRulesList.size() < allRulesList.size()) {
                try {
                    // 拼接为逗号分隔字符串（符合TextPreprocessUtils要求）
                    def safeRulesStr = safeRulesList.join(',')
                    def recoveredContent = net.ibizsys.central.plugin.ai.util.TextPreprocessUtils.process(parsed_content, safeRulesStr)

                    if (validateContentType(recoveredContent, contentType)) {
                        parsed_content = recoveredContent
                        def fallbackMsg = "预处理成功：原始规则破坏${contentType}结构。移除高危规则[${dangerousRules.join(',')}]后成功解析"
                        parse_error = parse_error + fallbackMsg

                    }
                } catch (Exception e) {
                    def fallbackMsg = "预处理失败：原始规则破坏${contentType}结构。移除高危规则[${dangerousRules.join(',')}]后仍无效，保持原始内容"
                    parse_error = parse_error + fallbackMsg
                }
            }

        }else {
            parsed_content = process_content
        }
    }
    // 5、进行数据脱敏 
    def data_masking_rules = parser_config.get('data_masking_rules')
    if (data_masking_rules){
        // 根据正则规则pattern对parsed_content进行替换
        def pattern_replacement_map = [:]
        data_masking_rules.each { rule ->
            def pattern = rule?.get('pattern')
            if (pattern) {
                pattern_replacement_map[pattern] = rule?.get('replacement') ?: ''
            }
        }
        if (!pattern_replacement_map.isEmpty()) {
            parsed_content = net.ibizsys.central.plugin.ai.util.TextPreprocessUtils.process(parsed_content, pattern_replacement_map)
        }
    }
    def masked_data = logic.param('masked_data').getReal()
    masked_data.set("id", _default.get("id"))
    masked_data.set("parsed_content", parsed_content)
    masked_data.set("status", "3")
    masked_data.set("parse_error", parse_error)
}


```
