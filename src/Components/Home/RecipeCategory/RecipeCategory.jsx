import React from 'react';
import { TbChefHat } from "react-icons/tb";
import './RecipeCategory.css'

const RecipeCategory = () => {
    return (
        <div>
            <div className="w-4/5 mx-auto text-center my-8">
                <h2 className='recipe-category-title'>Most Popular Recipies</h2>
                <p className='recipe-category-sub-title'>Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui officia deserunmollit anim id est laborum.</p>
            </div>
            <div className='w-4/5 mx-auto md:flex gap-4 gap-y-2'>
                <div className="mb-4 card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/choklate.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Chocolate Cake Cookies in Glaze </h2>
                        <p className='flex items-center gap-2'><TbChefHat/>Jemins Colins</p>
                    </div>
                </div>
                <div className="mb-4 card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/beef.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Beef Massaman Soup Marroc Style </h2>
                        <p className='flex items-center gap-2'><TbChefHat/>Jemins Colins</p>
                    </div>
                </div>
                <div className="mb-4 card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/bbq.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">BBQ lobster ginger butter with patatoes</h2>
                        <p className='flex items-center gap-2'><TbChefHat/>Jemins Colins</p>
                    </div>
                </div>
                <div className="mb-4 card w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/mediterran.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mediterran snapper tray bake </h2>
                        <p className='flex items-center gap-2'><TbChefHat/>Jemins Colins</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default RecipeCategory;