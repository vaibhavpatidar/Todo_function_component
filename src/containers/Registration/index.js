import { child, get, getDatabase, push, ref, set } from 'firebase/database'
import React from 'react'
import { useNavigate } from "react-router-dom";
import db from '../../config'
import '../Todo/index.css'

const Registration = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')



    let navigate = useNavigate()
    const Register = () => {
        set(ref(db, '/users/' + name), {
            username: name,
            email: email,
            password: password,
            todo: [],
        });
        console.log('DATA SAVED');


        //   const dbRef = ref(getDatabase());
        // get(child(dbRef, `/users/`+name)).then((snapshot) => {
        //   if (snapshot.exists()) {
        //     console.log(snapshot.val().email);
        //     console.log("Data available");
        //   } else {
        //     console.log("No data available");
        //   }
        // }).catch((error) => {
        //   console.error(error);
        // });

        Channel()
    }

    const Channel = () => {
        navigate({
            pathname: '/login',
            //    search: `?email=${encryptEmail(this.state.email)}`
            // search: `?name=${name}`
        });
    }




    return (
        <div className="App">
            <header className="App-header">
                <div className="todoblock">
                    <label className="header">Registration</label>
                    <div className='container'>
                        <div className='box'>
                            <input className='filter' placeholder="Name" onChange={(event) => { setName(event.target.value) }}></input>
                            <input className='filter' placeholder="Email" onChange={(event) => { setEmail(event.target.value) }}></input>
                            <input className='filter' placeholder="Password" onChange={(event) => { setPassword(event.target.value) }}></input>
                            <button className='resetbutton' onClick={() => Register()}>Registration</button>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
export default Registration
