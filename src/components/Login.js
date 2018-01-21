import React from 'react';
import {Link} from 'react-router';

export default class Login extends React.Component {
    constructor(){
        super();
        this.getdata=this.getdata.bind(this);
    }
    render() {
        return (
            <div>
                <section className="formLogo">
                    <h2>&#35;</h2>
                </section>
                <ul className="formarea">
                    <li>
                        <label className="lit">账号：</label>
                        <input type="text" placeholder="手机号码" className="textbox" ref="name"/>
                    </li>
                    <li>
                        <label className="lit">密码：</label>
                        <input type="password" placeholder="登陆密码" className="textbox" ref="pass"/>
                    </li>
                    <li className="liLink lg_liLink">
                    
                        <span><label><input type="checkbox" />记住密码</label></span>
                        <span><Link to="reg">新用户注册</Link></span>
                        <span><Link to="find_pwd">忘记密码?</Link></span>
                    </li>
                    <li>
                        <input type="button" value="立即登陆" onClick={this.getdata}/>
                    </li>
                </ul>
            </div>
        )
    }
    getdata(){
        let name = this.refs.name.value;
        let pass = this.refs.pass.value;
        
        let url = 'http://localhost:8008/login';
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({username:name,password:pass})
        }).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            if(res.status==0){
                alert('登录成功');
                localStorage.setItem("userName",name);
                this.props.router.push('user');
            }else{
                alert('用户名或者密码错误');		
            }
           
        })

        
    }
}