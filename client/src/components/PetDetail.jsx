import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PetDetail = () => {
    const history = useHistory();
    const [pet, setPet] = useState({})
    const [pets, setPets] = useState([])
    const { id } = useParams();
    const [likeCount, setLikeCount] = useState(0);
    const [hasBeenLiked, setHasBeenLiked] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${id}`)
            .then(res => {
                setPet(res.data.results)
                console.log("***********One Pet-->",res)
            })
            .catch(err => console.error(err));
    }, [id]);

    
    const deletePet = (id) => {
        axios.delete('http://localhost:8000/api/pet/'+id)
            .then(res => {
            console.log("*********Delete one res-->", res)
            removeFromDom(id)
            history.push('/')
            })
            .catch(err => console.error(err));
        }
    
    const removeFromDom = id => {
            setPets(pets.filter(pet => pet._id !== id));
        }

    const addLikesClick = e => {
        console.log("like button was clicked")
        setLikeCount(likeCount + 1)
        setHasBeenLiked(true)  
    }

    return (
        <div className="d-flex justify-content-center">
            <div className = "card pet-card mt-5 py-5 px-3" id ="show-one">
                <button
                    id="delete-btn"
                    onClick={(e)=>{ deletePet(pet._id) }}
                    className = "btn add-pet-btn shadow mb-3" 
                    >
                        Adopt This Pet!
                </button>
                { hasBeenLiked ?
                    <button
                    className = "btn add-pet-btn like-btn shadow mb-3" 
                    disabled
                    >
                        Thanks for lov'in {pet.name}
                    </button>:
                    <button
                    id="like-btn"
                    onClick={ addLikesClick }
                    className = "btn add-pet-btn like-btn shadow mb-3" 
                    >
                        Like This Pet!
                    </button>
                    
                }
                
                <h6 className="display-6 like-details">Sooo Lovable! Liked: <span className= "like-details">{ likeCount }</span></h6>
                <h6 className="pet-details display-6 mb-3">Details About: <em>{ pet.name }</em></h6>
                <p className="pet-details lead">Pet Type: { pet.type }</p>
                <p className="pet-details lead">Description: { pet.description }</p>
                <p className="pet-details lead">Skills:</p>
                <ul>
                    <li className="pet-details text-uppercase lead">{pet.skill1}</li>
                    <li className="pet-details text-uppercase lead">{pet.skill2}</li>
                    <li className="pet-details text-uppercase lead">{pet.skill3}</li>
                </ul>
                
            </div>
        </div>
    )
}
    
export default PetDetail;
