import styles from './index.css';
import { Row, Col } from 'antd';
import InterfaceList from './component/interfaceList/interfaceList'
import Instruction from './component/instruction/instruction'
  
export default function() {
  return ( 
    <div className={styles.normal}>
    <Row type="flex" justify="start">
    <Col span={6}>
      <InterfaceList name="interfacelist"></InterfaceList>
      </Col>
      <Col span={14} offset={1}>
       <Instruction name="instruction"></Instruction>
      </Col>
      </Row>
    </div>
  );
}

