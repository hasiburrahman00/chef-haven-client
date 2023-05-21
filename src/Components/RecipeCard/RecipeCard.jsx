import React, { useRef, useState } from 'react';
import { GrFavorite } from 'react-icons/gr';
import ReactPrint from 'react-to-print';
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    const { name, ingredients, instructions } = recipe;
    const [favourite, setFavourite] = useState(false);
    const ref = useRef();

    const handleAddFav = () => {
        toast("Add to Favourite Successfully");
        setFavourite(!favourite);
        console.log(favourite);
    }

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl mb-4 md:mb-0">
                <div className="card-body">
                    <div ref={ref}>
                        <h2 className="card-title">{name}</h2>
                        <p className='font-bold mt-4 mb-0'>Ingredients:</p>
                        <p className='ps-8'>{ingredients.map((i, idx) => <span key={idx}>{i}<span>.  </span></span>)}</p>
                        <h5 className='font-bold mt-8'>Cooking Process:</h5>
                        <ol className='list-decimal ps-8'>
                            {
                                instructions.map((list, idx) => <li key={idx}>{list}</li>)
                            }
                        </ol>
                    </div>
                    <div className="card-actions justify-start mt-8">
                        <button onClick={handleAddFav} className={`btn btn-outline btn-error ${favourite === false ? '' : 'btn-disabled'}`}><GrFavorite className='text-rose-500 mr-2 text-2xl' /> Add to Favourite</button>
                        <ReactPrint trigger={() => <button className='btn btn-error btn-outline  w-28 ms-auto'>Print</button>} content={() => ref.current} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;