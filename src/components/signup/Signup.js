import React,{useRef,useState} from 'react'
import {Card,Button,Form,Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'

import './signup.css'
// import "bootstrap/dist/css/bootstrap.min.css"

export const Signup = () => {
  
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const history=useHistory()

    //useAuth is a function which returns the context variable AuthContext and also returns the prop -> value which was passed to it in the AuthContext.Provider component 
    //destructuring the prop-> value and getting only signup function
    const {signup}= useAuth();


     const handleSubmit= async(e)=>{
        e.preventDefault()

        if(passwordRef.current.value!==passwordConfirmRef.current.value)
        {return setError('Passwords Do not Match')}


        try{
            setError('')
            setLoading(true)
            //the function takes the username and password entered by the user which are stored in the two declares userRef variables.
            await signup(emailRef.current.value,passwordRef.current.value)
            console.log(history)
             history.push('/')
            }
        catch (e){
            setError(e.message)
        }
        setLoading(false)
    }

    return (
        <>
          
             <h1 className='headerText'>Breaking Bad API</h1>
                <div className='card-signup'>
               <Card.Body>
                   <h2 className="text-center mb-4">Sign Up</h2>
                   {error && <Alert variant='danger'>{error}</Alert>}
                   <Form onSubmit={handleSubmit} >
                       <Form.Group id="email">
                           <Form.Label>Email <i className="fas fa-envelope"></i></Form.Label>
                           <Form.Control type='email' placeholder='Enter Email' ref={emailRef} required/>
                       </Form.Group>
                        <Form.Group id="password">
                           <Form.Label>Password <i className="fas fa-key"></i></Form.Label>
                           <Form.Control type='password' placeholder='Enter Password' ref={passwordRef} required/>
                       </Form.Group>
                        <Form.Group id="password-confirm">
                           <Form.Label>Confirm Password</Form.Label>
                           <Form.Control type='password' placeholder='Confirm Password' ref={passwordConfirmRef} required/>
                       </Form.Group>
                       <Button disabled={loading} type='submit' className="w-100">Sign Up <i className="fas fa-user-plus"></i></Button>
                   </Form>
                   
                     <div className="w-100 text-center mt-2">
                        Already Have An Account?<Link to='/login'> Log In</Link> 
                     </div>
               </Card.Body>
            </div> 
            
         
          
        </>
    )
}
