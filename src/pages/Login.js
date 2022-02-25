import React, { useState } from "react";
import logo from "../assets/icones/ingdesk.svg";
import mail from "../assets/icones/iconMail.svg";
import key from "../assets/icones/password.svg";
import bglogin from "../assets/icones/bgLogin.svg";
import { Input } from "../componentes/Input";
import { Link, Route, Switch } from "react-router-dom";
import { Home } from "./Home";


export const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  


  return (
    <div>
      <div className="container-login">
        <img src={logo} alt="Logo ingdesk" className="logo" />
        <div className="frame-entrar">
          <div className="frame-bemvindo">
            <h1>Olá, bem vindo!</h1>
            <h5>
              Solução de gerenciamento de relacionamento para empresas e
              pessoas.
            </h5>
          </div>
          <div className="frame-login">
            <div className="frame-login-interno">
              <form className="form">
                <div className="input-email">
                  <div className="titulo">
                    <h6>
                      E-mail<label>*</label>
                    </h6>
                  </div>
                  <Input
                    srcImg={mail}
                    altImg={"Icone email"}
                    inputType="text"
                    inputName="login"
                    inputPlaceholder="exemplo@domínio.com"
                    value={login}
                    setValue={setLogin}
                  />
                </div>
                <div className="input-senha">
                  <div className="titulo">
                    <h6>
                      Senha<label>*</label>
                    </h6>
                  </div>
                  <div className="senha">
                    <Input
                      srcImg={key}
                      altImg={"Icone senha"}
                      inputType="password"
                      inputName="senha"
                      inputPlaceholder="Sua senha"
                      value={senha}
                      setValue={setSenha}
                    />
                  </div>
                </div>
                <div className="botao">
                <Link to={"/home"}>
                  <button>
                    Entrar
                  </button>
                </Link>
                  <div className="esqueci">
                    <h6>
                      <a href="url">Esqueci minha senha</a>
                    </h6>
                  </div>
                </div>
              </form>
            </div>
            <h5>
              Não tem uma conta? <a href="url">Cadastre-se</a>
            </h5>
          </div>
        </div>
      </div>
      <div className="container-metade-direita">
        <div className="conteudo">
          <img src={bglogin} alt="informações" />
          <div className="explicacao">
            <h3 className="principal">
              Lorem ipsum dolor sit amet, consectetur
            </h3>
            <h3 className="secundario">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam sed
              quisque turpis varius ullamcorper.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
