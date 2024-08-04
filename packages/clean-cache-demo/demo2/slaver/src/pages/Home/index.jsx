import React from "react";
import styles from './index.less';

export default function HomePage() {
  return (
    <div className={styles.main}>
      <div>
        测试
      </div>


      <h3>主应用(main)</h3>
      <div style={{ background: '#f0f0f0' }}>
        <h4>antd-组件库样式</h4>
          <div>
            <h4>CSS Modules</h4>
            <a className={styles.link}>我是Link</a>
          </div>
          <div>
            <h4>内联样式</h4>
            <a style={{ color: '#2572E6' }}>我是Link</a>
          </div>
          <div>
            <h4>外联样式</h4>
            <a className={'link'}>我是Link</a>
          </div>
          <div>
            <h4>默认</h4>
            <a>我是Link</a>
          </div>
      </div>
      <h1>123123213</h1>
      <h1>1232121231235553</h1>
      <h1>1333</h1>
      <h1>你好</h1>
      <h1>你好12n</h1>
      <h1>123</h1>
      <h1>123</h1>
      <h1>123</h1>
    </div>
  );
}
