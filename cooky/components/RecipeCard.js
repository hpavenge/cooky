import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function RecipeCard({ recipe }) {
    const { title, slug, cookingTime, thumbnail } = recipe.fields

    return (
        <div className="card">
            <div className="featured">
                <Image src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height} />
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
