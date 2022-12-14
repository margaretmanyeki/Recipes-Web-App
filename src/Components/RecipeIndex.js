import React from "react";
const RecipeIndex=({alphabetsIndex})=>{
    const alphabets=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z"];
    var num=0;
    return(
        <>
        {
            alphabets.map(item=>{
                return(
                    <div className="numBox" key={num++} onClick={()=>alphabetsIndex(item)}>
                        <h3>{item}</h3>

                    </div>
                )
            })     
        }
        </>
    )
}
export default RecipeIndex;