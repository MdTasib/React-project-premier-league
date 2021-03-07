import React, { useContext } from 'react';
import { ContextCategory } from './Context'

const CategoryDetails = () => {
    const count = useContext(ContextCategory)
    return (
        <div>
            <h5>This is CategoryDetails : {count}</h5>
        </div>
    );
};

export default CategoryDetails;