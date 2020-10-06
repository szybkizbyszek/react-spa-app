import React from 'react';

const LoginPage = () => {
    return ( 
        <form>
            Login: <input type='text' />
            <br />
            Hasło: <input type='password' />
            <button>Zaloguj</button>
        </form>
     );
}
 
export default LoginPage;