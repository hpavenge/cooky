import React from 'react'
import Link  from 'next/link'

function RecipeCard({recipe}) {
    const{title, slug, cookingTime, thumbnail} =recipe.fields

    return (
        <div classname="card">
            <div className="featured">

            </div>
            <div className="content">
                <div className="info">
                    <h4>{title}</h4>
                    <p>Takes approx cooking time {cookingTime}</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
                </div>
            </div>
            {title}
        </div>
    )
}

export default RecipeCard
