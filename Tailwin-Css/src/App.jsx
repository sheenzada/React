// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Form from './Form/Form'
// import User from './User/Users'
// // import Re from './Form/Re'
// import Page from './Page/Pages'
// function App() {

//   return (
//     <>
//     <Form/>
//     {/* <Re/> */}
//     <User/>
//     <Page/>
//     </>
//   )
// }


import React, { useState } from 'react';
import Form from './Form/Form'
import Pages from './Page/Pages'
import User from './User/Users';
function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 px-4">
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <RegisterForm onSwitch={() => setIsLogin(true)} />

      )}
      <Form/>
      <Pages />
      <Users />
    </div>
  );
}
export default App
