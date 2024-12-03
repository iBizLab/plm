(function () {
    var tableFixed = function (hook, vm) {

     var table_regex = /<table>[\s\S]*?<\/table>/gi;
     var tr_regex = /<tr>[\s\S]*?<\/tr>/gi;
     var th_regex = /(<th>|<th )[\s\S]*?<\/th>/gi;
     var td_regex = /(<td>|<td )[\s\S]*?<\/td>/gi;

     var a_regex = /(<a>|<a )[\s\S]*?<\/a>/gi;

    hook.init(function () {
    });

    hook.mounted(function () {
    });

    hook.beforeEach(function (markdown) {
      return markdown;
    });

    hook.afterEach(function (html) {
      const tables = html.match(table_regex);
      if(tables==null)
        return html;
      for(var i = 0;i < tables.length; i++){
        var table = tables[i];
        var old_table = table;

        table = table.replace('<table>','<table table-layout="fixed">')

        var ths = table.match(th_regex);
        var ths_css = []
        if(ths==null){
          return html;
        }
        for(var k = 0;k < ths.length; k++){
          var th = ths[k];
          var old_th = th;
          if(th.indexOf('col')!=-1){
            var index = th.indexOf('>');
            var priex_th = th.substring(0, index + 1)
            th = th.substring(index + 1)
            th = th.substring(0,th.lastIndexOf('<'))
            ths_css.push(th.substring(th.indexOf('col')))
            th = th.substring(0,th.indexOf('col'));
            table = table.replace(old_th, priex_th +th+'</th>')
          }else{
            ths_css.push('')
          }
        }

        var tds = table.match(td_regex);
        for(var j = 0;j < tds.length; j++){
          var td = tds[j];
          var old_td = td;
          var index = td.indexOf('>');
          var priex_td = td.substring(0, index + 1)
          var title = td.substring(index + 1)
          title = title.substring(0,title.lastIndexOf('<'))

          //去除超链接
          title = title.replace(/<a\b[^>]*>(.*?)<\/a>/gi, '$1');
          //title 换行替换
          title = title.replace(/<br>/gi, '&#10;');
          //复杂内容 忽略
          if(title.indexOf('<')!=-1){
            title = ''
          }

          td = td.replace('<td', '<td title="'+title+'" class="tb-'+ths_css[j%ths_css.length]+'"');
          table = table.replace(old_td, td)
        }
        html = html.replace(old_table, table)
      }
      return html;
    });

    hook.doneEach(function () {
    });

    hook.ready(function () {
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat($docsify.plugins || [], tableFixed);
})();