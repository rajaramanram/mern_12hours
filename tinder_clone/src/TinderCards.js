import React,{useState,useEffect} from 'react';
import './tinder_cards.css';
import TinderCard from 'react-tinder-card';
import axios from './axios';//from axios.js file
//import { set } from 'mongoose';


function TinderCards() {
    const[people,setPeople] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/card');
            setPeople(req.data)
        }
        fetchData();
        
    }, [])
    console.log(people)
    const swiped = (direction,nameToDelete)=>{
        console.log("removing"+nameToDelete);
    };
    const outOfFrame = (name) =>{
        console.log("left the screen (outofFrame function"+ name);
    }
    return (
        <div className="tinder_cards">
            <div className="tinderCards_cardContainer">
                {people.map(person=>(
                    <TinderCard 
                        className="swipe" 
                        key={person.name} 
                        preventSwipe={["up","down"]} 
                        onSwipe={(dir)=>swiped(person.name)}
                        onCardLectScreen={()=>outOfFrame(person.name)}
                    >
                        <div 
                            style={{backgroundImage:`url(${person.imgUrl})`}}className="card"
                        > 
                            <h3>{person.name}</h3>
                        </div> 
                    </TinderCard>
                ))}
            </div>
            
        </div>
    );
}

export default TinderCards
/*{
            name:"raja",
            url:"https://images.all-free-download.com/images/wallpapers_thum/scorpion_mortal_kombat_x_13611.jpg"
        },
        {
            name:"sub_zero",
            url:"http://oyster.ignimgs.com/mediawiki/apis.ign.com/mortal-kombat-10/2/22/MKX-Kitana-Kung-Lao-Reveal_002.jpg"
        },
        {
            name:"Terminator",
            url:"https://i.insider.com/5da4b47c4af90975f27f6707?width=1200&format=jpeg"
        }*/