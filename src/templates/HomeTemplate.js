import React from 'react'
import { Route } from 'react-router-dom';
import Header from '../Components/Header/Header';

export const HomeTemplate = (props) => {
    console.log("props", props);
    const { Component, path } = props;
    return <Route path={path} exact render={(propsRoute) => {
        return <div>
            <Header />
            <Component {...propsRoute} />
        </div>
    }} />
}