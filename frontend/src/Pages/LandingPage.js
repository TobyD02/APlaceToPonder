import { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import { Input, InputAdornment } from '@mui/material'

function LandingPage() {
  const [flicker, setFlicker] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.username.value)
    console.log(e.target.password.value)
  }

  const handle_create = (e) => {
    e.preventDefault() // Prevent reload
    console.log('Switch to sign up')
    // window.location.reload(false) // Reload page
  }

  useEffect(() => {
    let interval = null
    interval = setInterval(() => {
      setFlicker(flicker == 1 ? 0 : 1)
    }, 500)
    return () => clearInterval(interval)
  }, [flicker])

  return (
    <div className='App'>
      <div className='left_pane'>
        <p id='main_title'>A Place to Ponder</p>
        <form id='login' onSubmit={handleSubmit}>
          <Input 
            name='username'
            className='input_field'
            startAdornment={
              <InputAdornment position='start + 50px'>
                <PersonIcon className='icon'/>
              </InputAdornment>
            } 
            placeholder='Username'>
          </Input>
          <Input 
            name='password'
            type='password'
            className='input_field'
            startAdornment={
              <InputAdornment position='start + 50px'>
                <LockIcon className = 'icon' />
              </InputAdornment>
            } 
            placeholder='Password'>
          </Input>
          <div className='input_field'>
            <button id='submit_button' onClick={handle_create}>Sign up</button>
            <button id='submit_button' type='submit'>Log In</button>
          </div>
        </form>
      </div>
      {window.innerWidth >= 870 ?
        <div className='right_pane'>
          Share a thought...
          {flicker == 1 ? <>|</> : <></>}
        </div>
        : <></>}
    </div>
  );
}

export default LandingPage