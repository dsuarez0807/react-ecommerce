import React, {useState, useEffect} from 'react'
import  {Item}  from './Item'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import {ItemListStyles} from './ItemListStyles'
import CircularProgress from '@material-ui/core/CircularProgress'


const useStyles = makeStyles((theme)=> ItemListStyles(theme));

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
                },
                {
                    id: 2, 
                    title: 'Zapatillas Puma Flyer Runner', 
                    description: 'Diseñadas para runners que buscan velocidad...', 
                    price: 6600,
                    picture:{
                        foto: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw02fa56d7/products/PU_192740-07/PU_192740-07-1.JPG',
                        alt: "Puma Flyer Runner"
                    },
                    stock: 22
                },
                {
                    id: 3, 
                    title: 'Zapatillas adidas Run Falcon 2.0', 
                    description: 'Saltá de tus planes deportivos a la plaza...', 
                    price: 24500,
                    picture:{
                        foto: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc9a63833/products/AD_FY9624/AD_FY9624-1.JPG',
                        alt: "adidas Run Falcon 2.0"
                    },
                    stock: 6
                },
                {
                    id: 4, 
                    title: 'Zapatillas Salomon Wings Access 2', 
                    description: 'ofrece estabilidad y amortiguación con...', 
                    price: 1700,
                    picture:{
                        foto: 'https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwed3e0ef8/products/SL_398600/SL_398600-1.JPG',
                        alt: "Salomon Wings Access 2"
                    },
                    stock: 15
                }
            ]
        ), 2000)
    })
}

export const ItemList = () => {

    const classes = useStyles();

    const [data, setData] = useState([]);

    const iniciarItemList = () => {

        myPromise().then(data => {setData(data)})
    }

        useEffect(() => {iniciarItemList()}, [])
    
    
        return <>
        
            { data.length === 0 ? (<div className={classes.root}><CircularProgress/></div>) : (
            <Grid container>
                 <Grid item xs={12}>
                     <Grid container justify="center">
                         {data.map((elem)=><Item key={elem.id} 
                          id={elem.id} 
                          title={elem.title} 
                          description={elem.description}
                          price={elem.price}
                          picture={elem.picture.foto}  
                          alt={elem.picture.alt}
                          stock={elem.stock}
                            />)}
                        </Grid>
                    </Grid>
                </Grid>)
    }
        </>
    }