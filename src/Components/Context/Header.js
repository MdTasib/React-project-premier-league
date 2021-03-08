import React, { useContext } from 'react';
import { ContextCategory } from './Context';

const Header = () => {
    const [category, setCategory] = useContext(ContextCategory);
    return (
        <div>
            <h2>This is Header : {category}</h2>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>Mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;