import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const permissions = true;

const AdminPage = () => {
    return ( 
        <Route render ={ () =>(
                permissions ? (<h3>Panel admina Dzień dobry!</h3>) : 
                (<Redirect to='/login' />)
            )
        }/>
     );
}
 
export default AdminPage;