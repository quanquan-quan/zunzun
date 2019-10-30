import React, {Component} from 'react'
import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd'
//import logo from './images/logo.png'
import './login.less'

const Item = Form.Item

/*
登陆路由组件
 */
class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
//对所有表单项进行统一的表单验证
this.props.form.validateFields((err, values) => {
  if (!err) {
    console.log('发送ajax请求',values)
  }else{

  }
});

  }
  //对用户进行自定义验证
  validateVae = (rule,value, callback)=>{
  /*
  用户名/密码的的合法性要求
  1). 必须输入
  2). 必须大于等于4位
  3). 必须小于等于12位
  4). 必须是英文、数字或下划线组成
   */
  //value = value.trim()
    if (value==='') {
      callback('用户名必须输入')
    }else if(value.length<4){
      callback('用户名必须大于等于4位')
    }else if(value.length>12){
      callback('用户名必须小于等于12位')
    }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
      callback('用户名必须是英文、数字或下划线组成')
    }

  
  }

  render() {
    console.log(this.props.form)
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <header className='login-header'>
          <h1>🌼</h1>
        </header>

        <section className='login-content'>
          <h3>🤾‍♀️</h3>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Item>
              {
                getFieldDecorator('username',{
                  initiaValue:'', //初始值
                  rules: [{validator:this.validateVae }],
                })(
                  <Input 
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="请输入用户名"  
                  />,
                )
              }
            </Item>
            <Item>
            {
                getFieldDecorator('password',{   
                  initiaValue:'', //初始值

                 // 用户名/密码的合法性要求:
                  /*
                  用户名/密码的的合法性要求
                    1). 必须输入
                    2). 必须大于等于4位
                    3). 必须小于等于12位
                    4). 必须是英文、数字或下划线组成
                   */
                   
                  rules: [
                    { required: true,whitespace:true, message: '密码必须输入' },
                    { max :12 ,message: '密码必须小于等于12位'},
                    { min:4,message: '密码必须大于等于4位' },
                    { pattern:/^[a-zA-Z0-9_]+$/,message: '密码必须是英文、数字或下划线组成'}
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='password'
                    placeholder="密码"
                  />,
                )
              }
            </Item>
            <Item>
              <Button   type="primary" htmlType="submit" className="login-form-button">
                ❤
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
