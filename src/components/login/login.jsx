import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { getDoc } from '../../firebase';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { NavLink, useNavigate } from 'react-router-dom';
// import { getDatabase, query } from 'firebase/database';
import './login.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import Side from "../side/side";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLogin = async (e) => {
    e.preventDefault();
    // const db = getDatabase();

    try {
      // Query Firestore to
      //  find the user by username
      const usersRef = collection(db, 'users'); // Assumes the collection is named 'users'
      const q = query(usersRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError('Username does not exist');
        return;
      }

      // Retrieve the email associated with the username
      let email = null;
      querySnapshot.forEach((doc) => {
        email = doc.data().email;
      });




        // Query the database for the username
    //   const usersRef = ref(db, 'users');
    //   const usernameQuery = query(usersRef, orderByChild('username'), equalTo(username));
    //   const snapshot = await get(usernameQuery);

    //   if (!snapshot.exists()) {
    //     setError('Username does not exist');
    //     return;
    //   }

    //   // Retrieve the email associated with the username
    //   let email = null;
    //   snapshot.forEach((childSnapshot) => {
    //     email = childSnapshot.val().email;
    //   });

      if (!email) {
        setError('Email not found for the given username');
        return;
      }

      // Sign in with email and password
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Successfully signed in
      const user = userCredential.user;
      console.log('User signed in:', user);
      navigate('/home');
    } catch (err) {
      console.error('Error signing in:', err.message);
      setError(err.message);
    }
  };
  return (
    <>
      <main> 
        <section className='d-flex justify-content-center align-items-center m-0 p-0' style={{height:'100vh'}}>
          <div className="login container p-0 m-0 col-12 col-lg-4 rounded-lg rounded-4 py-lg-3 bg-red">
            <div className='header p-0 m-0'>
            <header style={{height:'40vh'}} className=' d-flex flex-column p-5 bg-dark text-white justify-content-center align-items-center m-0'>
              <h1 className='pt-4 text-sam big-head '>Faoskitchen</h1>
              <p className='pb-4'>Enjoy the true flavours of Africa</p>
            </header>
            </div>
            <div className="bottom container mb-0 mt-5 mt-lg-0">
              <form onSubmit={onLogin} className='d-flex flex-column gap-3 p-3 px-5  px-lg-3 text-center mb-0 pb-0 py-lg-4 pt-lg-5'>
                <h1 className='fs-2 py-lg-3 head'>Login To Faoskitchen</h1>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className=' border rounded-5 p-2 bg-light mb-3'
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Username"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  className=' border rounded-5 p-2 bg-light mb-3'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" className='btn-grad border-0 p-2 fs-5 rounded-1'>Login</button>


                <p className="text-sm text-dark text-center mb-2 mb-lg-3">
                  No account yet?{' '}
                  <NavLink to="/signin">
                    Sign up
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
