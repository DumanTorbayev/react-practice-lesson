import React, {memo, useState} from 'react';

const Categories = ({items, handleClickItem}) => {
    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index);
        handleClickItem(index);
    }

    return (
        <div className="categories">
            <ul>
                {items &&
                    items.map( (name, index) =>
                        <li
                            className={
                                activeItem === index ? 'active' : ''
                            }
                            onClick={() => onSelectItem(index)}
                            key={`${index}_${name}`}
                        >
                            {name}
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default memo(Categories); // memo для избавления от лишнего ререндера