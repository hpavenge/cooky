import { createClient } from 'contentful'

//Create client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
});


export const getStaticPaths = async () => {
  const resp = await client.getEntries({ content_type: 'recipe' });

  const paths = resp.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  //get item from contentful, params = from getstaticpaths 
  const { items } = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug
  });

  return {
    props: {
      recipe: items[0]
    }
  }
}


export default function RecipeDetails({ recipe }) {
  console.log(recipe);
  console.log(recipe.fields.ingredients)
  return (
    <div>
      {recipe.fields.title}
      {recipe.fields.ingredients.map(ingredient => {
        return (<p>{ingredient}</p>)
      })}
    </div>
  )
}