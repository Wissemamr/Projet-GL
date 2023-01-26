import React from 'react';
import {useState} from 'react'
import FormInput from './FormInput';
import "./Form.css";
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'
import Navbar from './NavBar/NavBar';

function LoginForm(){

        const [values,setValues] = useState({
          username:"",
          email:"",
          fullname:"",
          password:"",
          confirmPassword:""
      
        });
      
        const inputs = [
           {
            id:1,
            name:"email",
            type:"email",
            placeholder:"Adresse email",
            errorMessage:"L'adresse email doit etre valide",
            label:"Adresse email",
            required:true
           },
      
           {
            id:2,
            name:"password",
            type:"password",
            placeholder:"***********",
            errorMessage:"Le mot de passe doit contenir 8-20 caractères et inclure au moins 1 lettre, 1 chiffre",
            label:"Mot de passe",
            pattern:"^[a-zA-Z123456789]{8,20}$",
            required:true
           }, 
      
        ]
      
        const handleSubmit = (e) => {
          e.preventDefault();
        };
      
        const onChange = (e) => {
          setValues({...values, [e.target.name]:e.target.value})
        }
      
        console.log(values);

    return (
      <div>
        <div className='Navbar'>
          <Navbar/>
        </div>
        <div className="Form">  
        <form className='form1' onSubmit={handleSubmit}>
          <h1>Bienvenue!</h1>
          <h5>Connectez-vous pour découvrir toutes nos fonctionnalités.</h5>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <div className='sidebyside'>
             <h5><MdOutlineCheckBoxOutlineBlank className='minibox'/> Remember for 30days</h5>
             <h5 className='mdp'>Mot de passe oublié</h5>
          </div>
          <button className='button1'>Se connecter</button>
          <button className='button2'><FcGoogle className='google'/>Se connecter avec Google</button>
          <h4>Vous n'avez pas de compte ? Insrivez-vous</h4>
        </form>
        </div>
      </div>
    )
}

export default LoginForm;
