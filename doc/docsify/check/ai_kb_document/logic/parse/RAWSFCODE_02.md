<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def parsed_content = _default.get('parsed_content')
def custom_chunk = _default.get('custom_chunk')
def parser_config
if (custom_chunk == 0){
    // 使用所属知识库默认规则
    def knowledge_base_runtime = sys.dataentity('ai_knowledge_base')
    def knowledge_base = knowledge_base_runtime.get(_default.get('kb_id'))
    if (knowledge_base){
        parser_config = knowledge_base.get('parser_config')
    }
}else if (custom_chunk == 1){
    // 使用自定义规则
    parser_config = _default.get('parser_config')
}
if (parser_config){
    // 1. 预处理规则
    def pre_process_rules = parser_config.get('pre_process_rules')
    if (pre_process_rules) {
        def rulesList = pre_process_rules.split(',')
        // 合并多余空格/换行（保留单个空格，移除连续空白）
        if (rulesList.contains('remove_extra_whitespace')) {
            parsed_content = parsed_content.replaceAll(/[\s\u3000]+/, ' ')
        }

        // 移除 <script> 和 <style> 内容（保留其他标签，如 <div>）
        if (rulesList.contains('remove_js_css')) {
            // 先移除 <script> 标签内容
            parsed_content = parsed_content.replaceAll(/<script[^>]*>[\s\S]*?<\/script>/, '')
            // 再移除 <style> 标签内容
            parsed_content = parsed_content.replaceAll(/<style[^>]*>[\s\S]*?<\/style>/, '')
        }

        // 剥离 HTML 标签（保留纯文本，如 <p>Hello</p> → Hello）
        if (rulesList.contains('remove_html_tags')) {
            parsed_content = parsed_content.replaceAll(/<[^>]+>/, '')
        }
        
        //移除Md格式中的图片与链接
        if (rulesList.contains('remove_img_url')) {
            // 移除Markdown图片格式：![alt](url)
            parsed_content = parsed_content.replaceAll(/!\[([^\]]*)\]\(([^)]*)\)/, '')
            // 移除Markdown链接格式：[text](url)
            parsed_content = parsed_content.replaceAll(/\[([^\]]*)\]\(([^)]*)\)/, '')
        }

        // 移除电子邮箱及 URL（精准匹配，避免误删）
        if (rulesList.contains('remove_emails_url')) {
            // 移除 URL（http/https 开头）
            parsed_content = parsed_content.replaceAll(/https?:\/\/[^\s]+/, '')
            // 移除电子邮箱（标准格式）
            parsed_content = parsed_content.replaceAll(/[\w\.-]+@[\w\.-]+\.\w+/, '')
        }

        // 统一中英文标点（如 “” → "，‘’ → '）
        if (rulesList.contains('normalize_punctuation')) {
            parsed_content = parsed_content
                .replace('，', ',')
                .replace('。', '.')
                .replace('！', '!')
                .replace('？', '?')
                .replace('；', ';')
                .replace('：', ':')
                .replace('（', '(')
                .replace('）', ')')
                .replace('“', '"')
                .replace('”', '"')
                .replace('‘', "'")
                .replace('’', "'")
        }
    }
    // 2. 自定义脱敏规则
    def data_masking_rules = parser_config.get('data_masking_rules')
    if (data_masking_rules){
        // 根据正则规则pattern对parsed_content进行替换
        def masked_data = logic.param('masked_data').getReal()
        for (data_masking_rule in data_masking_rules){
            def pattern = data_masking_rule.get('pattern')
            def replacement = data_masking_rule.get('replacement')?:''
            if (pattern){
                parsed_content = parsed_content.replaceAll(pattern, replacement)
            }
        }
    }
    def masked_data = logic.param('masked_data').getReal()
    masked_data.set("id", _default.get("id"))
    masked_data.set("parsed_content", parsed_content)
    masked_data.set("status", "3")

}
```
