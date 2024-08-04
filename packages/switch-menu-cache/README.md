# switch-menu-cache

> 解决子应用更新时切换菜单还是旧内容问题

## 项目技术栈

umi4 + qiankun + pnpm + monorepo + antd +react 

## 项目执行步骤

（所有的子应用

1、增加脚本，把dist/生成的文件转成json放在dist/static

2、修改packge.json的build后面加上执行脚本

（主应用

3、修改master-> app.jsx

```js
...
export const qiankun = {
  ...
  lifeCycles: { //https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles
    async beforeMount(props) {
      // 1、根据props中信息 fetch拿到json
      // 2、获取缓存
      const slave = localStorage.getItem('slave');
      // 3、slave !=null && fetchjson!=slave
      if(){
        window.location.reload(); //不一致的话刷新，更新本地缓存
      }
    },
  },
};
...

```

