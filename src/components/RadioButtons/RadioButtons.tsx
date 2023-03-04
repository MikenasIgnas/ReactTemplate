/* eslint-disable no-unreachable-loop */
import * as React from 'react';

import { Form, Radio } from 'antd';

const RadioButtons = () => (

  <Form.Item name="radioButtons">
    <Radio.Group>
      <Radio name="No" value={1}>No</Radio>
      <Radio name="Yes" value={2}>Yes</Radio>
    </Radio.Group>
  </Form.Item>
  );
export default RadioButtons;
