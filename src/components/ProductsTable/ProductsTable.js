import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Spinner from '../Spinner/Spinner'
import ProductsContext from '../../contexts/ProductsContext';

import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import { BASE_URL } from '../../const/config.js'

const ProductsTable = () => {
    const { allProducts } = useContext(ProductsContext);
    const [rows, setRows] = useState(
        allProducts.map((item, index) => {
            return { id:index, productId:item._id, title:item.title, price:item.price }     // rowId
        })
    )
    const [addingProduct, setAddingProduct] = useState(false);

    // const navigate = useNavigate();

    if (allProducts.length !== 0) {
    // setRows(allProducts.map((item, index) => {
    //     return { id:index, productId:item._id, title:item.title, price:item.price }     // rowId
    // }));

    console.log('all products', allProducts)
    console.log('rows', rows)

    const columns = [
        // { field: 'id', headerName: 'rowId', width: 150 },
        { field: 'productId', headerName: 'Product Id', width: 300,
            renderCell: (params) => {
                console.log('in renderCell 1', params)
                return (
                    <Link to={"/products/" + params.row.productId}>{params.row.productId}</Link>
                )
            } },
        { field: 'title', headerName: 'Title', width: 300},
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'actions', headerName: '', width: 500, 
            renderCell: (params) => {
                console.log('in renderCell 2', params)
                return (
                    <button onClick={(event) => postProductFromTable(params, event)}>Post product</button>
                )
            }}
    ];

    // const showProductView = (
    //     params, // GridRowParams
    //     event, // MuiEvent<React.MouseEvent<HTMLElement>>
    //     // details, // GridCallbackDetails
    //   ) => {
    //     if (params.field === 'productId') {
    //         navigate("/products/" + params.row.productId);
    //     }
    //     // console.log(params)
    //     // console.log(event)
    //     // console.log(details)
    // };

    const addRow = () => {
        setAddingProduct(true);
        let newRow = {id:rows.length, title:'New Row', price:'price'};
        setRows([...rows, newRow]);
        console.log(addingProduct, rows)
    }

    const postProductFromTable = async (params, event) => {
        console.log('in postProductFromTable', params, event)
        let newProduct = {title: params.row.title, price: params.row.price, description: 'description', image:'image'};
        // console.log(newProduct)
        let body = JSON.stringify(newProduct);
        console.log(body)
        try {
            await fetch(BASE_URL + '/api/products/addProduct', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: body
            });
        } catch(error) {
            alert(error);
        }
    }

    return (
        <div style={{height:"100vh"}}>ProductsTable
            <button onClick={() => addRow()} disabled={addingProduct}>+</button>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // checkboxSelection
            />
        </div>
        )
  
    } else {
   return (
    <div>
        <Spinner />
    </div>
   )
  }
}

export default ProductsTable