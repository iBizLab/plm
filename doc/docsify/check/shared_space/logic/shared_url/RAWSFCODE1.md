<p class="panel-title"><b>执行代码[Groovy]</b></p>

```groovy
def _default = logic.param('Default').getReal()
def plm_wiki = sys.param('plm_wiki','')
if(_default.get('id') != null && plm_wiki != '') {
  def _url = plm_wiki + '/plmwiki/#/-/index/-/article_page_shared_tree_exp_view/srfnavctx=%257B%2522shared_space%2522%253A%2522' + _default.get('id') + '%2522%257D'
  _default.set('shared_url', _url)
}
```
