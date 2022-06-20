import React, { useEffect } from 'react';
import { child, get, getDatabase, push, ref, set } from 'firebase/database'
import { Navigate, useNavigate } from 'react-router-dom';
import '../Todo/index.css';

const Login = () => {
   const [name, setName] = React.useState('')
   const [password, setPassword] = React.useState('')


   let navigate = useNavigate()

   const Login_user = () => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `/users/` + name)).then((snapshot) => {
         if (snapshot.exists()) {
            let pass = snapshot.val().password
            console.log(pass);

            if (pass == password) {
               console.log("Validate")
               navigate({
                  pathname: '/todolist',
                  // search: `?email=${encryptEmail(this.state.email)}`
                  search: `?name=${name}`
               });
            }
            else {
               console.log("not validate")
            }

            console.log("Data available");



         } else {
            console.log("No data available");
         }
      }).catch((error) => {
         console.error(error);
      });
   }


   return (
      <div className="App">
         <header className="App-header">
            <div className="todoblock">
               <label className="header">Login</label>
               <div className='container'>
                  <div className='box'>
                     <input className='filter' placeholder="Name" onChange={(event) => { setName(event.target.value) }}></input>
                     <input className='filter' placeholder="Password" onChange={(event) => { setPassword(event.target.value) }}></input>
                     <button className='resetbutton' onClick={() => Login_user()}>Login</button>

                  </div>
               </div>
            </div></header></div>
   );
}
export default Login;