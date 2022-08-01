import React, { useState } from "react";

function NewRecipeForm({updateRecipes, HAN}) {
    const [formData, setFormData] = useState({
        strMeal : "",
        strDrinkAlternate:"" ,
        strCategory : "",
        strArea: "",
        strInstructions:"",
    });
//declare function to hadle form submit
function handleFormSubmit(event) {
    event.preventDefault();

        //Fetch the json api and POST
        if (formData.strMeal === "" || formData.strCategory === ""||
        formData.strArea === ""|| formData.strInstructions === "") {
            alert("Fill all inputs");
          } else {
            fetch("https://thawing-crag-91387.herokuapp.com/meals", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          updateRecipes(data)
          setFormData({ ...formData, strMeal: "", strDrinkAlternate: "", strCategory: "", strArea:"", strInstructions:"" });
        });
    }
  }



  //Capture changes within our form and update states
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  //  console.log(formData.strMeal)
  //  console.log(formData.strDrinkAlternate)

  return (
    <form className="new-recipe-form" onSubmit={handleFormSubmit}>
      <input
        placeholder="Meal"
        name="strMeal"
        value={formData.strMeal}
        onChange={handleChange}
      />
      <input
        placeholder="Area"
        name="strArea"
        value={formData.strArea}
        onChange={handleChange}
      />
    <input
        placeholder="Category"
        name="strCategory"
        value={formData.strCategory}
        onChange={handleChange}
        />
        <input
        placeholder="Instructions"
        name="strInstructions"
        value={formData.strInstructions}
        onChange={handleChange}
/>
      <input type="submit" value="Submit" />
    </form>
  );
}
 export default NewRecipeForm;
