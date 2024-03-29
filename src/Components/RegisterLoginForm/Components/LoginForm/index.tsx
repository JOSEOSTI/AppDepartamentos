import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import { login, LoginData } from 'Services/Api/User';

interface LoginFormProps {
  active: boolean;
  openRegisterForm: () => void;
}

interface LoginFormState {
  remember: boolean;
  email: string;
  password: string;
}

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor() {
    super();
    this.state = {
      remember: false,
      email: '',
      password: ''
    };
  }
  signIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData: LoginData = {
      userName: this.state.email,
      password: this.state.password
    };
    login(loginData).then((responseData) => {
      // tslint:disable-next-line:no-console
      console.log(responseData);
    });
  }
  toggleRemember = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      remember: e.currentTarget.checked
    });
  }
  updateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.currentTarget.value
    });
  }
  updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: e.currentTarget.value
    });
  }
  render() {
    return (
      <div
        className={'loginForm modal slimScroll fade' + (this.props.active ? ' in' : '')}
      >
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Iniciar Sesión</h4>
            </div>
            <div className="modal-body">
              <form role="loginForm form" onSubmit={this.signIn}>
                <div className="form-group">
                  <div className="btn-group-justified">
                    <div className="btn btn-lg btn-facebook">
                      <Icon name="facebook" className="pull-left" />
                      <span>Inicia sesión con Facebook</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="btn-group-justified">
                    <div className="btn btn-lg btn-google">
                      <Icon name="google" className="pull-left" />
                      <span>Inicia sesión con Google</span>
                    </div>
                  </div>
                </div>
                <div className="signOr">ó</div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Dirección de correo electrónico"
                    className="form-control"
                    onChange={this.updateEmail}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="form-control"
                    onChange={this.updatePassword}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-6">
                      <div className="checkbox custom-checkbox">
                        <label>
                          <input type="checkbox" checked={this.state.remember} onChange={this.toggleRemember} />
                          <Icon name="check" />
                          Recuérdame
                        </label>
                      </div>
                    </div>
                    <div className="col-xs-6 align-right">
                      <p className="help-block">
                        <a href="#" className="text-green isThemeText text-red">
                        ¿Se te olvidó tu contraseña?
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="btn-group-justified">
                    <button type="submit" className="btn btn-lg btn-green isThemeBtn btn-red">
                      Iniciar Sesión
                    </button>
                  </div>
                </div>
                <p className="help-block">
                  <span>¿No tienes una cuenta? </span>
                  <a
                    className="modal-su text-green isThemeText text-red"
                    onClick={this.props.openRegisterForm}
                  > 
                  Registrarse 
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;