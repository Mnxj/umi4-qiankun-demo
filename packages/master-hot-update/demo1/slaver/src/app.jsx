


export const qiankun = {
  fetch: (url, options) => { //用于拦截 htmlEntry 静态资源 fetch 时的请求
    if (!options) {
      options = {};
    }
    console.log('fetch', url, options);
    // 使用 window.fetch 发起请求
    return window.fetch(url, {...options, cache: 'no-cache'});
  },
}