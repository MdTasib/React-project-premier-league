import React, { useContext } from 'react';
import { ContextCategory } from './Context'

const CategoryDetails = () => {
    const category = useContext(ContextCategory);
    return (
        <div>
            <h5>This is Category Details</h5>
            <h6>Selected Your Product : {category}</h6>
        </div>
    );
};

export default CategoryDetails;