import { useSignup } from '../../hooks/useSignup'
// styles
import { useState } from 'react'
import styles from './Signup.module.css'

export default function Signup() {
  const [displayName, setDispalyName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isPending}= useSignup()
  
  const handleSubmit = (e) => {
    e.preventDefault()

    signup(email, password, displayName)

      
  }
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>
      
      <label>
        <span>email:</span>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
      </label>
      
      <label>
        <span>password:</span>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
          label='password' 
          
        />
      </label>
      <label>
        <span>display name:</span>
        <input 
          type="text" 
          onChange={(e) => setDispalyName(e.target.value)} 
          value={displayName}
          
        />
      </label>
     {isPending?
      <button className="btn" disabled>Loading...</button>:
      <button className="btn">Signup</button>
       }
      {error?<p>{error}</p>:""}
    </form>
  )
}
