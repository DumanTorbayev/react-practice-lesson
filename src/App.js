import React from 'react';
import {Header} from "./components";
import {Cart, Home} from "./pages";
import {Route} from "react-router-dom";

const App = () => {

    return (
        <>
            <div className="wrapper">
                <Header title={'React Home'} description={'самая вкусная пицца во вселенной'}/>

                <div className="content">
                    <Route exact path='/' component={Home}/>
                    <Route path='/cart' component={Cart}/>
                </div>
            </div>
        </>
    );
}

export default App;
