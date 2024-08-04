import Logo from '@/assets/logo-title.svg';

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout = ({
  initialState,
  // setInitialState
}) => {
  return {
    logo: <img src={Logo} alt="logo" />,
    title: '',
    token: {
      bgLayout: '#f0f2f5', // layout 的背景颜色
      sider: {
        colorMenuBackground: '#fff', // menu 的背景颜色
        colorBgMenuItemSelected: '#F6F6F6', // 选中背景色
      },
      header: {
        heightLayoutHeader: 64, // header 高度
      },
    },
    onPageChange: () => {
    },
    layoutBgImgList: [],
    links: [],
    ...initialState?.settings,
  };
};

// shttps://github.com/umijs/umi-plugin-qiankun#masterOptions
export const qiankun = {
  apps: [
    {
      name: 'slave',
      entry: '//localhost:5555',
      props: {
        accountOnClick: (event) => console.log(event),
        accountName: 'Alex',
        accountAge: 21,
      },
    },
  ], // 1、尝试清除 sources， 2 在beforeload重新加载
  lifeCycles: { //https://qiankun.umijs.org/zh/api#registermicroappsapps-lifecycles
    //初始化是查看缓存，记录文件后缀索引，
    async beforeMount(props) {
      const slave = localStorage.getItem('slave');
      if(slave){
        window.location.reload();
        localStorage.removeItem('slave')
      }
      console.log(slave)      
      // location.reload(true)
      // history.go(0)
      // window.location.reload();
    },
    //卸载对比记录文件后缀，执行清空操作,
    async afterUnmount(props) {
      localStorage.setItem('slave', '123');
    }
  },
  fetch: (url, options) => { //用于拦截 htmlEntry 静态资源 fetch 时的请求
    if (!options) {
      options = {};
    }
    console.log('fetch', url, options);
    // 使用 window.fetch 发起请求
    return window.fetch(url, {...options, cache: 'no-cache'});
  },
  prefetch: false,
};