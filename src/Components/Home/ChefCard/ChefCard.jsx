import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';

const ChefCard = ({ chef }) => {

    const { name, id, picture, experience, recipes, likes } = chef;
    console.log(name)


    return (
        <div className="card w-96 glass mb-4">
            <figure className='w-fit h-60'><img src={picture} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='my-0'>Experience : {experience} years</p>
                        <p>Number of Recipes: {recipes.length}</p>
                    </div>
                    <div className='h-16 w-16 rounded-lg text-center'>
                        <FcLike  className='h-8 w-8 mx-auto '/><span>{likes}</span>
                    </div>
                </div>
                <div className="card-actions justify-start">
                    <Link to={`/chefData/${id}`} className="btn btn-success py-4 ">Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;