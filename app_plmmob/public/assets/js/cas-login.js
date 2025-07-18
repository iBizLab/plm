function getQueryVariable(variable) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
function setCookie(name, value, day, isDomain, path) {
  if (day == null) {
    day = 0;
  }
  if (isDomain == null) {
    isDomain = false;
  }
  if (path == null) {
    path = '/';
  }
  var domain = '';
  // 设置cookie到主域下
  if (isDomain) {
    // 是否为ip正则
    const regExpr =
      /^(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)$/;
    // 为ip时忽略
    if (!regExpr.test(location.hostname)) {
      const host = location.hostname;
      if (host.indexOf('.') !== host.lastIndexOf('.')) {
        domain = ';domain=' + host.substring(host.indexOf('.'), host.length);
      }
    }
  }
  if (day !== 0) {
    //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
    const expires = day * 24 * 60 * 60 * 1000;
    const date = new Date(new Date().getTime() + expires);
    document.cookie =
      name +
      '=' +
      escape(value) +
      ';path=' +
      path +
      ';expires=' +
      date.toUTCString() +
      domain;
  } else {
    document.cookie = name + '=' + escape(value) + ';path=' + path + domain;
  }
}
function clearCookie(cookieName, isDomain) {
  this.setCookie(cookieName, '', -1, isDomain);
}
window.onload = function () {
  var infoEl = document.getElementById('redirect-info');
  var errInfoEl = document.getElementById('redirect-error');
  // 显示错误信息
  var showError = function (info) {
    errInfoEl.textContent = info;
    infoEl.style.display = 'none';
    errInfoEl.style.display = 'block';
  };
  var load = function () {
    var token = getQueryVariable('token');
    var expirein = getQueryVariable('expirein');
    if (!token) {
      showError('「token」信息获取失败，请稍后重试!');
      return;
    }
    var ru = getQueryVariable('RU');
    if (ru) {
      ru = decodeURIComponent(ru);
    }
    clearCookie('ibzuaa-token', true);
    setCookie('ibzuaa-token', token, 0, true);
    const expiredDate =
          new Date().getTime() + (expirein || 7199) * 1000;
    setCookie('ibzuaa-token-expires', `${expiredDate}`, 0, true);
    window.location.href = ru;
  };
  var redirectInfoActionEl = document.getElementById('redirect-info-action');
  redirectInfoActionEl.onclick = function () {
    load();
  };
  load();
};
