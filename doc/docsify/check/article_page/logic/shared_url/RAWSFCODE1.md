<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def plm_wiki = sys.param('plm_wiki','')
if(_default.get('id') != null && plm_wiki != '') {
    def _url = ''
  if(_default.get('is_shared_subset') == '1'){
      _url = plm_wiki + '/plmwiki/#/-/index/-/article_page_shared_with_sub_view/srfnavctx=%257B%2522shared_page%2522%253A%2522' + _default.get('id') + '%2522%257D'
  } else {
      _url = plm_wiki + '/plmwiki/#/-/index/-/article_page_shared_view/srfnavctx=%257B%2522shared_page%2522%253A%2522' + _default.get('id') + '%2522%257D'
  }
  _default.set('shared_page_url', _url)
}
```
