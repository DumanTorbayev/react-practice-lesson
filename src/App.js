import React, {useEffect} from 'react';
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";
import axios from 'axios'
import {setIsLoaded, setPizzas} from "./redux/actions/pizzasActions";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsLoaded(true))
        axios.get('http://localhost:3001/pizzas')
            .then(({data}) => {
                dispatch(setPizzas(data));
                dispatch(setIsLoaded(false));
            })
    }, [])

    return (
        <>
            <div className="wrapper">
                <Header title={'React Home'} description={'самая вкусная пицца во вселенной'}/>

                <div className="content">
                    {isLoaded ? <div>...Loading</div> :
                        <Route exact path='/' component={Home}/>
                    }
                    <Route path='/cart' component={Cart}/>
                </div>
            </div>
        </>
    );
}

export default App;
