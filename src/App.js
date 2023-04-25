
import { useState } from 'react';
import caioIMG from'./assets/caio.svg'

import './style.css'

function App() {
  const[email, setemail] = useState("")
  const[password, setPassword] = useState("")
  
  return (
   <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Bem Vindo!</span>

            <span className="login-form-title">
              <img src={caioIMG} alt="Caio dev"/>
            </span>

              <div className="wrap-input">
                <input
                 className={email !== "" ? 'has-val input' : 'input'}
                  type="email"
                  value={email}
                  onChange={e => setemail (e.target.value)}
                 />
                <span className="focus-input" data-placeholder="email"></span>
              </div>
            
              <div className="wrap-input">
                <input
                 className={password !== "" ? 'has-val input' : 'input'}
                 type="password"
                 value={password}
                  onChange={e => setPassword (e.target.value)}
                 />
                <span className="focus-input" data-placeholder="password"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>

              <div className="text-center">
                  <span className="txt1">Não possui conta ?</span>

                  <a className="txt2" href="#">Criar conta</a>
              </div>

          </form>
        </div>
      </div>
   </div>
  );
}

export default App;
