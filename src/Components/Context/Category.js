import React, { useContext, useState, useEffect } from 'react';
import CategoryDetails from './CategoryDetails';
import { ContextCategory } from './Context';

const allProducts = [
    { name: 'hp', category: 'laptop' }, { name: 'Dell', category: 'laptop' }, { name: 'Apple', category: 'laptop' },
    { name: 'Apple', category: 'mobile' }, { name: 'Sumsung', category: 'mobile' }, { name: 'Vivo', category: 'mobile' },
    { name: 'Canon', category: 'camera' }, { name: 'Nikkon', category: 'camera' }, { name: 'DSLR', category: 'camera' },
]

const Category = () => {
    const [category] = useContext(ContextCategory);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const matchProduct = allProducts.filter(pd => pd.category === category.toLowerCase())
        setProduct(matchProduct);
    }, [category])
    return (
        <div>
            <h3>Select Your Category {category}</h3>
            {
                product.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Category;