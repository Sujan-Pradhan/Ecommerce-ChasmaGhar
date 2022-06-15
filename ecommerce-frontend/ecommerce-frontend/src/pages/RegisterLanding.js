import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { API } from '../config'

const RegisterLanding = () => {
  const params = useParams()
  
  const [values, setValues] = useState({
    error:'',
    success: false
  })
  const {error, success} = values
  
  useEffect(()=>{
    const token = params.token
    fetch(`${API}/confirmation/${token}`, {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(data=>{
      if(data.error){
        setValues({...values, error:data.error})
      }
      else{
        setValues({...values,error:'', success:true})
      }
    })
    .catch(err=>console.log(err))
  },[params.token])
   //show error msg
   const showError =()=>(
    <div className='alert alert-danger' style={{display:error ? '' : 'none'}}>
        {error}
    </div>
)
//to show success msg
const showSuccess =()=>(
    <div className='alert alert-info' style={{display:success? '':'none'}}>
        Email is verified
    </div>
)
 return (
  <>
  <Navbar/>
  {showError()}
  {showSuccess()}
  </>
 )
}

export default RegisterLanding
