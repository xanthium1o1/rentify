import React,{useState} from 'react'
import "./Login.css"
function Login() {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const usernameChangeHandler= (event) => {
    setUsername(event.target.value)
}
const passwordChangeHandler= (event) => {
    setPassword(event.target.value)
}
const submitHandler = (event) =>{
    event.preventDefault();
 if(username==="test" && password==="test"){
    alert("logged in")
    setUsername('')
    setPassword('')
 }
 else{
    alert("wrong credentials")
 }
}

  return (
    <form className="login-form" onSubmit={submitHandler}>
        <label id="username">username</label>
        <input value={username} htmlFor="username" type="text" onChange={usernameChangeHandler}/>
        <label id="password">password</label>
        <input value={password} htmlFor="password" type="password" onChange={passwordChangeHandler}/>
        <button type="submit">Login</button>
    </form>
  )
}

export default Login