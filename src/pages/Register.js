import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Register() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");

        
        const {regisztracio} = useContext(AuthContext)


        function handleSubmit(e) {
            e.preventDefault();
            let adat = {
                name:name,
                email:email,
                password:password,
                password_confirmation:password_confirmation,
            }
            console.log(adat)
            regisztracio(adat)
        }
    
    return (
        <div className=" m-auto" style={{ maxWidth: "400px" }}>
          <h1 className="text-center">Regisztráció</h1>
          <form onSubmit = {handleSubmit}>
            <div className="mb-3 mt-3">
              <label htmlFor="name" className="form-label">
                Név:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="form-control"
                id="name"
                placeholder="Név"
                name="name"
              />
              <div>
                
              </div>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="form-control"
                id="email"
                placeholder="email"
                name="email"
              />
              <div>
                
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="form-label">
                Jelszó:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="form-control"
                id="pwd"
                placeholder="jelszó"
                name="pwd"
              />
              <div>
                
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="pwd2" className="form-label">
                Jelszó újra:
              </label>
              <input
                type="password"
                value={password_confirmation}
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                }}
                className="form-control"
                id="pwd2"
                placeholder="jelszó újra"
                name="pwd2"
              />
              <div>
                
              </div>
            </div>
     
            <button type="submit" className="btn btn-primary w-100">
              Regisztrálok
            </button>
          </form>
        </div>
      );
}
