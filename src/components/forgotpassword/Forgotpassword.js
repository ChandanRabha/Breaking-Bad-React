import React,{useRef,useState} from 'react'
import {Card,Button,Form,Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {Link} from 'react-router-dom'

export const Forgotpassword = () => {
    const emailRef=useRef('')
    const [error,setError]=useState('')
    const [message,setMessage]=useState('')
    const [loading,setLoading]=useState(false)
    const {forgotPassword}=useAuth();
    
   
    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            setError('')
            setMessage('')
            setLoading(true)
          await forgotPassword(emailRef.current.value)
            //the function takes the username and password entered by the user which are stored in the two declares userRef variables.
            setMessage("A Recovery Email has been Sent")
            }
        catch (e){
            setError(e.message)
        }
        setLoading(false)
    }
    return (
        <>
                 <h1 className='headerText'>Breaking Bad API</h1>
               <div className='card'>
               <Card.Body>
                   <h2 className="text-center mb-4">Forgot Password</h2>
                   {error && <Alert variant='danger'>{error}</Alert>}
                   {message && <Alert variant='warning'>{message}</Alert>}
                   <Form onSubmit={handleSubmit} >
                       <Form.Group id="email">
                           <Form.Label>Email <i className="fas fa-envelope"></i></Form.Label>
                           <Form.Control type='email' placeholder='Enter Recovery Email' ref={emailRef} required/>
                       </Form.Group>
                       <Button disabled={loading} type='submit' className="w-100">Reset Password <i className="fas fa-unlock"></i> </Button>

                   </Form>
                    <div className="w-100 text-center mt-3">
            <Link to='/login'>Sign In</Link>
           </div> 
               </Card.Body>
           </div>
           
            
           
        </>
    )
}