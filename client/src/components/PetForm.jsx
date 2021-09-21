import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const PetForm = () => {
    
    const history = useHistory(); 

    let [onePet, setOnePet] = useState({
        name: null,
        type: null,
        description: null,
        skill1: null,
        skill2: null,
        skill3: null
    });

    let [validationErrors, setValidationErrors] = useState({})

    const changeHandler = e => {
        console.log("new pet being entered...")
        console.log(e.target.name, e.target.value)

        setOnePet({
            ...onePet,
            [e.target.name]:e.target.value
        })
    }
    

    const submitHandler = e => {
        e.preventDefault();

        console.log("starting pet form submission-->", onePet)

        axios.post("http://localhost:8000/api/pet", onePet)
        .then(res=>{
            console.log("New Pet Response-->", res)
            if (res.data.errors) { 
                setValidationErrors(res.data.errors)
                console.log("form data errors")
            } 
            else {
                history.push("/"); 
            }
        })
        .catch(err=>console.log("err",err))
}


    return (
        <div className="d-flex justify-content-center mt-5">
            <p className="pet-details w-25">Do you know a pet that needs a home?<br></br>Enter their info here.</p>
            <div className = "card pet-card">
                <form 
                onSubmit = {(e) => {submitHandler(e)}} 
                className="form-inline row g-3 align-items-center"
                >   
                    <div className ="card-body">

                        <div className="input-group mb-3">
                            <div className="input-group-prepend label-tab">
                                <label className="input-group-text" htmlFor="inputGroupPets">Pet Name:</label>
                            </div>
                            <input
                            type="text" 
                            name ="name"  
                            onChange ={(e)=> {changeHandler(e)}}
                            className="flex-grow-1 formControl input-box"
                            /> 
                            <br></br>
                            <p className="text-error mx-2 my-1">{validationErrors.name? validationErrors.name.message: ""}</p>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend label-tab">
                                <label className="input-group-text" htmlFor="inputGroupPets">Pet Type:</label>
                            </div>
                            <input
                            type="text" 
                            name ="type"  
                            onChange ={(e)=> {changeHandler(e)}}
                            className="flex-grow-1 formControl input-box"
                            /> 
                            <br></br>
                            <p className="text-error mx-2 my-1">{validationErrors.type? validationErrors.type.message: ""}</p>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend label-tab">
                                <label className="input-group-text" htmlFor="inputGroupPets">Pet Description:</label>
                            </div>
                            <input
                            type="text" 
                            name ="description"  
                            onChange ={(e)=> {changeHandler(e)}}
                            className="flex-grow-1 formControl input-box"
                            />
                            <br></br> 
                            <p className="text-error mx-2 my-1">{validationErrors.description? validationErrors.description.message: ""}</p>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend label-tab">
                                <label className="input-group-text" htmlFor="inputGroupPets">Skill One:</label>
                            </div>
                            <input
                            type="text" 
                            name ="skill1"  
                            onChange ={(e)=> {changeHandler(e)}}
                            className="flex-grow-1 formControl input-box"
                            /> 
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend label-tab">
                                <label className="input-group-text" htmlFor="inputGroupPets">Skill Two:</label>
                            </div>
                            <input
                            type="text" 
                            name ="skill2"  
                            onChange ={(e)=> {changeHandler(e)}}
                            className="flex-grow-1 formControl input-box"
                            />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend label-tab">
                                <label className="input-group-text" htmlFor="inputGroupPets">Skill Three:</label>
                            </div>
                            <input
                            type="text" 
                            name ="skill3"  
                            onChange ={(e)=> {changeHandler(e)}}
                            className="flex-grow-1 formControl input-box"
                            />
                        </div>

                        <div className="input-group mb-3">
                            <div className="form-group">
                                <input className = "btn add-pet-btn shadow mb-3" type="submit" value="Add Pet"/>
                            </div>    
                        </div>   
                    </div>    
                </form> 
            </div> 
        </div>
    );
};


export default PetForm;