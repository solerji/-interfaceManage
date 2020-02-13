import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>接口管理</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
