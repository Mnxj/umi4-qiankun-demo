import React from 'react';
import { Button, Result } from 'antd';
import { history } from '@umijs/max';

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="访问页面不存在"
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回主页
      </Button>
    }
  />
);

export default NoFoundPage;
