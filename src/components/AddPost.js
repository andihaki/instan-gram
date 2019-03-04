import React from "react";

import { Form, Input, Button } from "antd";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};

const AddPostRule = props => {
  const { buttonText } = props;
  const check = () => {
    props.form.validateFields((err, value) => {
      if (!err) {
        console.info("success");
        console.log(value.title, value.description);
        props.func(1, value.title, value.description);
      }
    });
  };

  const { getFieldDecorator } = props.form;

  return (
    <div>
      <Form.Item {...formItemLayout} label="Title">
        {getFieldDecorator("title", {
          rules: [
            {
              required: true,
              message: "Please input title"
            }
          ]
        })(<Input placeholder="Please input your name" />)}
      </Form.Item>
      <Form.Item {...formItemLayout} label="Description">
        {getFieldDecorator("description", {
          rules: [
            {
              required: false,
              message: "Please input your nickname"
            }
          ]
        })(<Input placeholder="Please input description" />)}
      </Form.Item>

      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={check}>
          {buttonText}
        </Button>
      </Form.Item>
    </div>
  );
};

const AddPost = Form.create({ name: "dynamic_rule" })(AddPostRule);

export default AddPost;
