import React, {Component} from 'react'
import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd'
import logo from './images/logo.png'
import './login.less'

const Item = Form.Item

/*
登陆路由组件
 */
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = this.props.form
    const username = form.getFieldValue('username')
    const password = form.getFieldValue('password')
    const values = form.getFieldsValue()
    console.log(username,password,values)
  }

  render() {
    console.log(this.props.form)
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt="logo"/>
          <h1>尊❤尊</h1>
        </header>

        <section className='login-content'>
          <h3>🤾‍♀️</h3>
          <Form onSubmit={this.login} className="login-form">
            <Item>
              {
                getFieldDecorator('username')(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入用户名"
                  />,
                )
              }
            </Item>
            <Item>
            {
                getFieldDecorator('password')(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='password'
                    placeholder="密码"
                  />,
                )
              }
            </Item>
            <Item>
              <Button  onClick={this.handleSubmit} type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}
 
const LoginWrap = Form.create()(Login)

export default LoginWrap
