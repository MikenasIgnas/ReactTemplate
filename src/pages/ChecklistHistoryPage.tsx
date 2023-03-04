import React from 'react';
import {
 Form, Radio, Button,
} from 'antd';

const ChecklistHistoryPage = () => {
  const [form] = Form.useForm();
  const handleFinish = (value:any) => {
    console.log(value);
  };
  return (
    <Form onFinish={handleFinish} form={form}>
      <Form.List name="THISISIT" initialValue={[{ test: false }, { test: false }]}>
        {(fields, { add, remove }) => (
          <div>
            {fields.map(({ name, ...rest }, index) => (
              <>
                <Form.Item label="test" name={[name, 'test']} {...rest}>
                  <Radio.Group options={[{ label: 'No', value: true }, { label: 'Yes', value: false }]}>
                    {/* <Radio />
                  <Radio /> */}
                  </Radio.Group>
                </Form.Item>
                <Button onClick={() => add(index)}>Add</Button>
                <Button onClick={() => remove(index)}>Minus</Button>
                {/* <Form.Item label="inputTest" name={[name, 'inputTest']} {...rest}>
                  <Input />
                </Form.Item> */}
              </>
        ))}
          </div>
    )}
      </Form.List>
      <Button htmlType="submit">Submit</Button>
    </Form>
    );
};

export default ChecklistHistoryPage;
