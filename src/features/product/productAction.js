import { createAsyncThunk } from "@reduxjs/toolkit";
import { Form } from "react-router-dom";
// const baseURL = 'https://olx-server-livid.vercel.app' 
let token = localStorage.getItem('token')
export const addProduct = createAsyncThunk('addProduct', async (formData, { rejectWithValue }) => {
    try {
        const response =await fetch('https://olx-backend-iota.vercel.app/product', {
            method: 'POST',
            credentials: 'include',
            headers: {
                // "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: formData
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
        const response =await fetch('https://olx-backend-iota.vercel.app/getproducts', {
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
        const response =await fetch('https://olx-backend-iota.vercel.app/myProducts', {
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

export const getSelectedProduct = createAsyncThunk('getSelectedProduct', async ({page, limit, category}, { rejectWithValue }) => {
    try {
        const response =await fetch(`https://olx-backend-iota.vercel.app/getSelectedProducts?limit=${limit}&page=${page}&category=${category}`, {
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

 export const updateProduct = createAsyncThunk('updateProduct', async ({id,data}, { rejectWithValue }) => {
                    try {
                        const response =await fetch(`https://olx-backend-iota.vercel.app/product/${id}`, {
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
                        const response =await fetch(`https://olx-backend-iota.vercel.app/product/${id}`, {
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