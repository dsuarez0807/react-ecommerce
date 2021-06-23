import React, {useEffect} from 'react';
import  {ItemList}  from './ItemList';
import {useParams} from 'react-router-dom'


export const ItemsListcontainer = props => {
    
    const {category} = useParams();
    useEffect(() => {ItemList()}, [category]);

    return <ItemList/>
}