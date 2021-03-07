import React from 'react';

const CategoryDetails = (props) => {
    const { count } = props;
    return (
        <div>
            <h5>This is CategoryDetails : {count}</h5>
        </div>
    );
};

export default CategoryDetails;