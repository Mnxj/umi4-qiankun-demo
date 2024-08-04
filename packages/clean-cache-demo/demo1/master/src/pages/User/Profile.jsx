import { Card, Descriptions } from 'antd';
import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';

export default function Profile() {

  return (
    <PageContainer breadcrumb={null} title="个人中心">
      <Card bordered={false} className={styles.profile}>
        <div className={styles.accountBox}>
          <span className={styles.account}>测试</span>
          <span className={styles.name}>管理员,您好</span>
        </div>
        <div className={styles.form}>
          <Descriptions
            bordered={false}
            colon={false}
            column={1}
            labelStyle={{ width: 100, color: '#707070' }}
            contentStyle={{ color: '#000000' }}
          >
            <Descriptions.Item label="地区">China</Descriptions.Item>
            <Descriptions.Item label="用户类型">管理员</Descriptions.Item>
          </Descriptions>
        </div>
      </Card>
    </PageContainer>
  );
}
