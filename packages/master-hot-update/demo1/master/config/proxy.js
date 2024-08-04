/**
 * @name 代理的配置
 * @see 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @doc https://umijs.org/docs/guides/proxy
 */
export default {
// umi4 里没实现自动设置 SOCKET_SERVER https://github.com/umijs/umi/blob/master/packages/plugins/src/qiankun/slave.ts#L191
// umi3 qiankun 插件实现了 https://github.com/umijs/plugins/blob/master/packages/plugin-qiankun/src/slave/index.ts#L144
// 
  // 1.解决本地无法热更新问题
  [`/__umi/api/bundle-status`]: {
    target: `http://localhost:5555`,
    changeOrigin: true,
  }
};
