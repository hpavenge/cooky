import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard';

export async function getStaticProps(){
  //Create client
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });
  //Get items from Contentful (Recipe is identifier)
  const resp = await client.getEntries({content_type: 'recipe'});

  //Map items to props.recipes
  return {
    props: {
      recipes: resp.items
    }
  }
}


export default function Recipes( {recipes} ) {
console.log(recipes);

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  )
}