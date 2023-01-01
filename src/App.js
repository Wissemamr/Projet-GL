import React from 'react';
import {useState} from 'react'
import "./app.css"
import FormInput from "./components/FormInput"

const App=()=>{
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
      name:"Fullname",
      type:"text",
      placeholder:"Prénom Nom",
      errorMessage:"Le nom doit contenir 3-16 caractères et ne doit pas inclure des caractères spéciaux",
      label:"Nom complet",
      pattern: "^[A-Za-z ]{3,16}$",
      required:true
     },

     {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Adresse email",
      errorMessage:"L'adresse email doit etre valide",
      label:"Adresse email",
      required:true
     },

     {
      id:3,
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

	return(
    <div className='app'>
      <nav className='nav'>
        <ul>
          <li>
            <a href="/">Logo</a>
          </li>
          <li>
            <a href="/Inscription">Inscription</a>
          </li>
        </ul>
      </nav>
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <h1>Bienvenue!</h1>
          <h5>Connectez-vous pour découvrir toutes nos fonctionnalités.</h5>
          {inputs.map((input) => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
	)
}

export default App 
