import { useEffect, useState } from "react";
import axios from 'axios';

const DataFetching = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   // make an ajax request to load data
  //   fetch('https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes')
  //     .then((res) => res.json()) // convert from JSON to JS
  //     .then((data) => {
  //       console.log(data); // recipes
  //       setRecipes(data);
  //     })
  // }, []);

  // useEffect(() => {
  //   axios.get('https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes')
  //     .then((response) => {
  //       console.log(response.data);
  //       setRecipes(response.data);
  //     })
  // }, []);

  useEffect(() => {
    const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';

    const recipePromise = axios.get(`${baseUrl}/recipes`);
    const ingredientPromise = axios.get(`${baseUrl}/ingredients`);

    const promises = [recipePromise, ingredientPromise];

    Promise.all(promises)
      .then((arrOfResponses) => {
        const recipes = arrOfResponses[0].data;
        const ingredients = arrOfResponses[1].data;

        console.log(recipes);
        console.log(ingredients);

        setRecipes(recipes);
        setIngredients(ingredients);
      })
  }, []);

  const mappedRecipes = recipes.map((recipe) => {
    return <p key={recipe.id}>{recipe.title}</p>;
  });
  
  return (
    <div>
      <h2>DataFetching Component</h2>
      <h3>Recipes:</h3>
      { mappedRecipes }
      <h3>Num ingredients: {ingredients.length}</h3>
    </div>
  );
};

export default DataFetching;
