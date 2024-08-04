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
  ], 
}