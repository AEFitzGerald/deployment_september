import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";



const PetEdit = () => {

    const history = useHistory(); 
    const { id } = useParams();
    const [petInfo, setPetInfo] = useState({})
    let [validationErrors, setValidationErrors] = useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                console.log("Getting one pet-->", res)
                setPetInfo(res.data.results);
            })
            .catch(err =>console.log("err", err))
    }, [id]);

    const updatePet = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/${id}`, petInfo)
            .then(res=> {
                if (res.data.errors) { 
                    setValidationErrors(res.data.errors)
                    console.log("form data errors")
                } else {
                console.log("Adding new data to pet details -->", res)
                history.push("/"); 
                }
            })
            .catch(err=> console.error(err));
    }

    const changeHandler = e => {
        console.log("*******updating the pet")
        setPetInfo({
            ...petInfo,
            [e.target.name]:e.target.value
        })
    }


    return (
        <div> 
            <div className="d-flex justify-content-center mt-5">
                <div className = "card pet-card">
                    <h5 className="px-3 pt-3 pet-details">Update Pet:</h5> 
                    <form 
                    onSubmit = { updatePet } 
                    className="form-inline row g-3 align-items-center"
                    >   
                        <div className ="card-body">

                            <div className="input-group mb-3">
                                <div className="input-group-prepend label-tab">
                                    <label className="input-group-text" htmlFor="inputGroupPets">Name</label>
                                </div>
                                <input 
                                type="text"
                                name ="name"
                                value = { petInfo.name }   
                                onChange = { changeHandler }
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
                                value = { petInfo.type }   
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
                                value = { petInfo.description } 
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
                                value = { petInfo.skill1 } 
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
                                value = { petInfo.skill2 }
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
                                value = { petInfo.skill3 }
                                onChange ={(e)=> {changeHandler(e)}}
                                className="flex-grow-1 formControl input-box"
                                /> 
                            </div>

                            <div className="input-group mb-3">
                                <div className="form-group">
                                    <input className = "btn add-pet-btn shadow mb-3" type="submit" value="Edit Pet"/>
                                </div>    
                            </div>   
                        </div>
                    </form> 
                </div> 
            </div>   
        </div>
    );
};


export default PetEdit;