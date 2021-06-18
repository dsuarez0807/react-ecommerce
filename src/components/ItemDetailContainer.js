  
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemDetailContainerStyles } from './ItemDetailContainerStyles';
import {ItemDetail} from './ItemDetails';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme)=> ItemDetailContainerStyles(theme));

const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 1, 
                    title: 'Zapatillas Nike Air Max Command', 
                    description: 'Inspiradas en un modelo de 1987...', 
                    price: 16500,
                    picture:{
                        foto:'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw600f100f/products/NI_397690-027/NI_397690-027-1.JPG',
                        alt: "Nike Air Max"
                    },
                    stock: 30
                }
            ]
        ),2000);
    }); 
};

export const ItemDetailContainer = () => {

    const classes = useStyles();

    const [data, setData] = useState([]);

    const iniciarDetailList = () => {

        myPromise().then(data => {setData(data)})
    }

        useEffect(() => {iniciarDetailList()}, [])
    
    
        return <>
        
        { data.length === 0 ? (<div className={classes.root}><CircularProgress/></div>) : (
        <Grid container>
             <Grid item xs={12}>
                 <Grid container justify="center">
                     {data.map((elem)=><ItemDetail key={elem.id} 
                      title={elem.title} 
                      description={elem.description}
                      price={elem.price}
                      picture={elem.picture.foto}  
                      alt={elem.picture.alt}
                      />)}
                    </Grid>
                </Grid>
            </Grid>)
}
    </>
}

export default ItemDetailContainer