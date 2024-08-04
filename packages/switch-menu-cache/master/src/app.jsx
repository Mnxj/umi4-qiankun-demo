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
      console.log('1',props)
      // const slave = localStorage.getItem('slave');
      // if(slave){
      //   window.location.reload();
      //   localStorage.removeItem('slave')
      // }
    },
  },
};
