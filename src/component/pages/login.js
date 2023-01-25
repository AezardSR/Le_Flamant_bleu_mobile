import React from 'react';
import {Text, View} from 'react-native';

const loginScreen = () => {
  return (
    <View>
        <div className='container'>
            <div className="container-connexion">
              <img src={LogoManu} alt="logo la manu"/>
                <form onSubmit={handleSubmit} className="form-connexion">
                  {/* <label>Identifiant</label> */}
                  <input name='mail' className="input-connexion" placeholder="mail" onChange={e => setMail(e.target.value)}/>
    
                  {/* <label>Mot de passe</label> */}
                  <input type='password' name='password' placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
                  <a className="password-forget" href="#f">Mot de passe oublié ?</a>
    
                  <button type="submit" className="btn-connexion">Connexion</button>
                </form>
                  
            </div>
        </div>
    </View>
  );
};

export default loginScreen;