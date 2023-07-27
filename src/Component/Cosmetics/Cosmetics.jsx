import  { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'
import { getTotal } from '../../Utilities/addTocart';

const Cosmetics = () => {
    const [cosmetic,setCosmetic] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetic(data))
    },[])
    const total = getTotal(cosmetic)
    return (
        <div >
            <h2>Welcome to my shop cosmetics</h2>
            <p>Total Price : {total}</p>
            <div className='cos'>

            {cosmetic.map((cosmetic) => <Cosmetic 
            cosmetic={cosmetic}
            key={cosmetic.id}

            ></Cosmetic>)}
            </div>
        </div>
    );
};

export default Cosmetics;