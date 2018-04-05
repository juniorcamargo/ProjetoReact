import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
    render(){
        return(
            <div className="Login">
                <div className="owl">
                    <div className="hand"></div>
                    <div className="hand hand-r"></div>
                    <div className="arms">
                        <div className="arm"></div>
                        <div className="arm arm-r"></div>
                    </div>
                </div>
                <div className="form">
                    <div className="control">
                        <label htmlFor="email" className="fa fa-envelope"></label>
                        <input id="email" placeholder="Email" type="email"></input>
                    </div>
                    <div className="control">
                        <label htmlFor="password" className="fa fa-asterisk"></label>
                        <input id="password" placeholder="Senha" type="password"></input>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-success">Entrar</button>
                        <button className="btn btn-sm btn-info">Esqueci minha senha</button>
                    </div>
                </div>
            </div>
        );
    }
}


