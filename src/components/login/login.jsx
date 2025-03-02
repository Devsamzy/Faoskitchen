import React, { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
// import { getDoc } from '../../firebase';
import { db } from '../../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { NavLink, useNavigate } from 'react-router-dom';
// import { getDatabase, query } from 'firebase/database';
// import './login.css';
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
  const items=[
    "heo","sweep"
  ];
  return (
    <>
      <main>
        <section>
          {/* <Side></Side> */}
          <div className="login container p-0 m-0">
            <header className=' d-flex flex-column p-5 bg-dark text-white justify-content-center h-10 align-items-center col-12 g-10'>
              <h1 className='pt-5'>Faoskitchen</h1>
              <p className='pb-3'>Enjoy he rue favours of african</p>
            </header>

            <div className="bottom container">
              <form onSubmit={onLogin} className='d-flex flex-column gap-3 p-5 text-center'>
                <h1>Login to go-do</h1>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className=' form-con border border-3 rounded-3 p-2'
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  placeholder="Username"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
                <button type="submit">Login</button>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <p className="text-sm text-dark text-center">
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
