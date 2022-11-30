import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
// import Queries from '../components/Queries'

const adminUser = {email:"admin@admin.com", password:"admin"}

const UserPage = () => {
    // const data = Queries
    // const details = LoginForm.details
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");
//     const handleLoggedIn = () => {
//         if (details.email === data.user.email && details.password === data.user.password){
//             setLoggedIn(true)
//         }
// }
    const UserPage = details =>{
        console.log(details)

        if (details.email === adminUser.email && details.password === adminUser.password){
        console.log("logged In!")
        setLoggedIn(true)
        setUser({
            name:details.name,
            email:details.email
        })}
    if (loggedIn===true){
        return(
          <div>
              {(user.email !=="") ? (
                <div>

                </div>
              ):(
                  <div>
                      <LoginForm UserPage={UserPage} error={error} />
                  </div>
              )}
          </div>
      )
    } else {
        console.log('Information Does not match')
        setError("Information does not match")
    }}

    const Logout = () => {
        setUser({...user})
    }
    const isDefault = () => {
            if (user.payment.default){
        return ('yes')
    }
}
    const lastFour = user.payment.card_number.slice(-4)
    
    return(
        <div>
            {(user.email !=="") ? (
                <div>
                    <div className="welcome">
                        <h2>Welcome, <span>{user.first_name}!</span></h2>
                        <button onClick={Logout} >Logout</button>
                    </div>
                    <div>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <p>{user.payment.card_type}  {user.payment.expiration}</p>
                        <p>**** **** **** {lastFour} {isDefault}</p>
                    </div>
                </div>
            ):(
                <div>
                    <LoginForm UserPage={UserPage} error={error} />
                </div>
            )}
        </div>
    )
            }

export default UserPage;