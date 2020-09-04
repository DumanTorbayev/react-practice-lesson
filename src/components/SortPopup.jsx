import React, {memo, useEffect, useRef, useState} from 'react';
import arrowTopSvgIcon from "../assets/images/arrow-top.svg";
import PropTypes from "prop-types";

const SortPopup = ({items, handleSortByType, activeSortType}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const sortRef = useRef();
    const selectedLabel = items.find(obj => obj.type === activeSortType).name;

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    };

    const handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath())
        if (path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    }

    const onSelectItem = (obj) => {
        handleSortByType(obj);
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
                                className={activeSortType === obj.type ? 'active' : ''}
                                key={`${index}_${obj.type}`}
                                onClick={() => onSelectItem(obj)}
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

SortPopup.propTypes = {
    activeSortType: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleSortByType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
    items: [],
};

export default memo(SortPopup); // memo для избавления от лишнего ререндера
