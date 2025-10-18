import { createAsyncThunk } from "@reduxjs/toolkit";

let token = localStorage.getItem('token')
export const addProduct = createAsyncThunk('addProduct', async (data, { rejectWithValue }) => {
    try {
        const response =await fetch('http://localhost:3003/product', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        console.log(result)
        return result

    } catch (error) {
        return rejectWithValue(error.message || 'Network error')
    }
})

export const getProduct = createAsyncThunk('getProducts', async (data, { rejectWithValue }) => {
    try {
        const response =await fetch('http://localhost:3003/getproducts', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })
        
        const result = await response.json()
        console.log(result)
        return result
        
    } catch (error) {
        return rejectWithValue(error.message || 'Network error')
    }
})


export const getMyProduct = createAsyncThunk('getMyProducts', async (data, { rejectWithValue }) => {
    try {
        const response =await fetch('http://localhost:3003/myProducts', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        const result = await response.json()
        console.log(result)
        return result

    } catch (error) {
        return rejectWithValue(error.message || 'Network error')
    }
})


 export const updateProduct = createAsyncThunk('updateProduct', async ({id,data}, { rejectWithValue }) => {
                    try {
                        const response =await fetch(`http://localhost:3003/product/${id}`, {
                            method: 'PUT',
                            credentials: 'include',
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`
                            },
                            body: JSON.stringify(data)
                        })
                
                        const result = await response.json()
                        console.log(result)
                        return result
                        
                    } catch (error) {
                        return rejectWithValue(error.message || 'Network error')
                    }

                    
                })
export const deleteProduct = createAsyncThunk('deleteProduct', async ({id,data}, { rejectWithValue }) => {
                    try {
                        const response =await fetch(`http://localhost:3003/product/${id}`, {
                            method: 'POST',
                            credentials: 'include',
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`
                            }
                        })
                
                        const result = await response.json()
                        console.log(result)
                        return result
                
                    } catch (error) {
                        return rejectWithValue(error.message || 'Network error')
                    }
                })