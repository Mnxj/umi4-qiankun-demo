
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