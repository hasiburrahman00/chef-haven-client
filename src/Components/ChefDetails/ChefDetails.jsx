import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai';
import RecipeCard from '../RecipeCard/RecipeCard';

const ChefDetails = () => {

    const chefData = useLoaderData();
    const { name, picture, description, experience, recipes } = chefData;

    return (
        <div>
            <div className='w-11/12 mx-auto mt-20'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='w-full h-full' ><img src={picture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name}</h2>
                        <p className='grow-0'><span className='font-bold'>Country: </span>South Koria</p>
                        <p className='grow-0'><span className='font-bold'>Experience: </span>{experience} Years plus</p>
                        <p className='text-justify'><span className='font-bold'>Description: </span>{description}</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-warning">Show Recipes <AiOutlineArrowDown className='ms-2' /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:grid md:grid-cols-2 gap-12 w-10/12 mx-auto mt-12'>
                {
                    recipes.map(recipe => <RecipeCard
                        key={recipe.recipe_id}
                        recipe={recipe}
                    />)
                }
            </div>
        </div>
    );
};

export default ChefDetails;