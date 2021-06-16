import React from 'react'

const posts = [
    {
        title: "Producto 1",
        description: "Este es el producto 1",
        id: "1234",
    },
    {
        title: "Producto 2",
        description: "Este es el producto 2",
        id: "4567",
    },

];

const ItemList = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error){
                resolve (posts);
            } else{
                reject ("hubo un error");
            }
        }, 2000)
    });
};

ItemList().then((posts)=>{console.log(posts)})
.catch(error =>{console.log(error)})

export default ItemList;