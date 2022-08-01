import React,{useState,useEffect} from "react";
import Meal from "./Components/Meal";
import{Routes,Route} from "react-router-dom"
import RecipeInfo from "./Components/RecipeInfo";
import NewRecipeForm from "./Components/NewRecipeForm";


function App(){
    const [show, setShow] =useState(true)
    const [recipes, setRecipes] = useState([]); useEffect(() => {
        fetch("https://thawing-crag-91387.herokuapp.com/meals")
   
         .then((response) => response.json())
         .then((data) => setRecipes(data));
     }, []);
   
   
     //call function to handle click
     function handleHideClick(){
       console.log(show)
       setShow(!show)
     }
   
   
     function updateRecipes(recipe){
       setRecipes([...recipes,recipe])
     }
   


  
    return(

        <>
 
 
      <div className="sidebar">
        <button onClick={handleHideClick}>{show ? 'Hide Form':'Show Form'}</button>
        {show ? <NewRecipeForm updateRecipes={updateRecipes} /> : null}
      </div>
      
    
       < Routes>
        <Route path="/" element={<Meal/>}/>
        <Route path="/:MealId" element= {<RecipeInfo/>}/>
        </Routes>
        </>
    )
    



    //Set states for show/hide button
    
  
    //Fetch recipes
  


  
  
}

export default App;