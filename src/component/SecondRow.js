





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { createClient } from "@supabase/supabase-js";



function SecondRow(props) {
    

    const [movieTitle, setMovieTitle] = useState("");
    const [rating,setRating]=useState(null);
    const [filled, setFilled] = useState(false);


    // setRating(props.data.Ratings[0].Value);
    useEffect(() => {
        if (props.data.Ratings && props.data.Ratings.length > 0) {
            setRating(props.data.Ratings[0].Value);
        }
    }, [props.data.Ratings]);
    const supabase = createClient(
        "https://ksnouxckabitqorjucgz.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtzbm91eGNrYWJpdHFvcmp1Y2d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0MzM4ODgsImV4cCI6MjAzMDAwOTg4OH0.17MF1DByop1lCcnefGB8t3AcS1CGcJvbzunwY3QbK_c"
      );
    const handleRateClick=async()=>{
         setFilled(!filled);
    
    }
    useEffect(
        ()=>{

           const insertion =async()=>{

            if(filled){

                if(props.userID){
                    console.log(props.userID);
                
                    // Vérifiez si les données du film sont disponibles
                  if (!props.data || !props.data.imdbID) {
                    console.error("No movie data available");
                    return;
                  }
                
                  try {
                    //await createTable();
                    // Insérez l'ID du film et l'ID de l'utilisateur connecté dans la table de la liste de surveillance de votre base de données Supabase
                    const { data, error } = await supabase.from('ratings').insert([
                      { movie_id: props.data.imdbID, rating:10,user_id: props.userID }
                    ]);
                
                    if (error) {
                      console.error("Error adding rating movie to ratings table:", error);
                    } else {
                      console.log(" Rate Movie added to ratings table :", data);
                      // Réalisez d'autres actions si nécessaire, comme mettre à jour l'interface utilisateur pour refléter l'ajout du film à la liste de surveillance
                    }
                  } catch (error) {
                    console.error("Error adding rate movie to Ratings:", error.message);
                  }
                
                
                
                   }
                
    
    
            }
            else{
    
                if (props.userID && props.data && props.data.imdbID) {
                    try {
                      // Supprimez la ligne de la base de données en fonction de user_id et movie_id
                      const { data, error } = await supabase.from('ratings').delete().eq('user_id', props.userID).eq('movie_id', props.data.imdbID);
              
                      if (error) {
                        console.error("Error deleting rating movie from ratings table:", error);
                      } else {
                        console.log("Rate Movie deleted from ratings table",data);
                      }
                    } catch (error) {
                      console.error("Error deleting rate movie from Ratings:", error.message);
                    }
                  }
    
            };

           }

           insertion();
    

        } 
        ,
        [filled]
    )


    return (
        <div className="row">
            <div className="col-lg-8">
                <h3 style={{color:'white'}} >{props.data.Title}</h3>
                <div style={{color:'white'}}>
                    {props.data.Year} .  {props.data.Rated} .   {props.data.Runtime} 


                </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center " style={{color:'white'}} >
              
                
                    <div className='col-6 '>

                
                    <ul style={{listStyleType: "none"}} >
                        <li>Rating filmDB</li>
                        <li >
                        <span style={{fontSize: '24px'}}>
                                <FaStar 
                                    color={true ? 'orange' : 'grey'} 
                                    // onClick={onSelect} 
                                    style={{ cursor: 'pointer' }} 
                                />

                        </span>
                           
                      
                              {rating}

                        </li>
                        <li>
                      


                        </li>
                    </ul>
                    </div>
                    
                <div className='col-6  ' >
                        <ul  style={{listStyleType: "none"}}>
                            <li>YOUR RATING</li>
                            <li>

                            <span  onClick={handleRateClick}>
                                    {filled ? (
                                            <FaStar style={{ color: 'orange',fontSize: '24px' }} />
                                        ) : (
                                            <FaStar style={{ color: 'grey',fontSize: '24px'  }} />
                                        )}
                               </span>  
                              <span  style={{color:'orange',fontSize: '18px'}}>
                              Rate
                              </span>
                                    
                                  
                            </li>

                        </ul>
                </div>     

                
                 
                
            </div>
        </div>
    );
}

export default SecondRow;