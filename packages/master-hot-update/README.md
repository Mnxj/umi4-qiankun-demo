# master-hot-update

> 问题：
>
> 子应用单独跑时： ws 成功建立，代码变更时有 hot-update.js 请求
> 子应用跑于父应用时：ws成功建立，端口正确，代码变更时无额外请求
>
> 
>
> 解决子应用热更新，主应用不更新的问题

## 项目技术栈

umi4 + qiankun + pnpm + monorepo + antd +react 

### Demo1

> 子应用更新触发主应用更新，弊端，在子应用不更新时切换menu会触发页面重新加载

1、修改步骤

config/config.js

```js
fastRefresh: false,
 test: false,
 ...
   define: {
    "process.env": {
      SOCKET_SERVER: "http://localhost:5555", // 这里换成子应用实际的端口
    }, 
    ENV,
  },
```



Config/plugin.js

```js

export default (api) => {

    // 1.解决本地无法热更新问题
    api.addEntryImports(() => {
        return {
            source: "umi",
            specifier: "{ __getRoot }",
        };
    });

    api.addEntryCode(() => {
        return `
// hot module replacement
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept("./core/route", () => {
    const root = __getRoot()
    root.unmount() // for react 18, 如果你是其他react版本,请用ReactDOM.unmountComponentAtNode(container)方式卸载组件;
    render()
  })
} 
  `;
    })
}
```

config/proxy.js

```js
//子应用启动的时候,主应用去加载会挂掉,配置proxy即可避免
export default {
  [`/__umi/api/bundle-status`]: {
    target: `http://localhost:5555`,  //子应用的端口
    changeOrigin: true,
  }
};

```

2、执行 pnpm run start 查看
