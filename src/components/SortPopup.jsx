import React, {memo, useEffect, useRef, useState} from 'react';
import arrowTopSvgIcon from "../assets/images/arrow-top.svg";

const SortPopup = ({items}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const sortRef = useRef();
    const selectedLabel = items[activeItem].name;

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    };

    const handleOutsideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    }

    const onSelectItem = (index) => {
        setActiveItem(index);
        setVisiblePopup(false);
    }

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <img className={visiblePopup ? 'rotated' : ''} src={arrowTopSvgIcon} alt=""/>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{selectedLabel}</span>
            </div>
            {
                visiblePopup &&
                <div className="sort__popup">
                    <ul>
                        {items &&
                            items.map((obj, index) =>
                                <li
                                    className={activeItem === index ? 'active' : ''}
                                    key={`${index}_${obj.type}`}
                                    onClick={() => onSelectItem(index)}
                                >
                                    {obj.name}
                                </li>)
                        }
                    </ul>
                </div>
            }
        </div>
    );
};

export default memo(SortPopup); // memo для избавления от лишнего ререндера