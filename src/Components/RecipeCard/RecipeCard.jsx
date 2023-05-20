import React from 'react';
import { GrFavorite } from 'react-icons/gr';

const RecipeCard = ({ recipe }) => {
    const { name, ingredients, instructions } = recipe;
    console.log(recipe);
    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl mb-4 md:mb-0">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold mt-4 mb-0'>Ingredients:</p>
                    <p className='ps-8'>{ingredients.map((i, idx) => <span key={idx}>{i}<span>.  </span></span>)}</p>
                    <h5 className='font-bold mt-8'>Cooking Process:</h5>
                    <ol className='list-decimal ps-8'>
                        {
                            instructions.map((list, idx) => <li key={idx}>{list}</li>)
                        }
                    </ol>
                    <div className="card-actions justify-start mt-8">
                        <button className="btn btn-outline btn-error"><GrFavorite className='text-rose-500 mr-2 text-2xl'/> Add to Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;