import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';




const PetList = () => {
    
    const [pets, setPets] = useState([]);

    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                console.log("***********Get all pets res-->", res)
                setPets(res.data.results);
            })
            .catch(err => console.error(err));
    },[]);

    
    return (
        <div className="d-flex flex-column mx-5 my-5">
            <h6 className="pet-details display-6">These pets are looking for a good home...</h6>
            
            {
            pets.map( (pet, i) =>

                <div className="mt-3" key = { i} >
                    <p className="pet-details">• Pet Name: <em>{pet.name}</em>, Type: {pet.type}</p>
                    
                    <Link 
                    to={`/pet/${pet._id}`}
                    className = "btn add-pet-btn shadow mb-3"
                    >View Details</Link>

                    <Link 
                    to={`/pet/edit/${pet._id}`}
                    className = "btn add-pet-btn shadow mb-3" 
                    id ="update-btn"
                    >Edit</Link>
                    
                    <hr className="pet-divide"></hr>
                </div>
            )
            } 
        </div>
    );
};

export default PetList;