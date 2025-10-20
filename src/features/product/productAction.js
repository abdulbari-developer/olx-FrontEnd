import { createAsyncThunk } from "@reduxjs/toolkit";
const baseURL = 'https://olx-server-livid.vercel.app'
let token = localStorage.getItem('token')
export const addProduct = createAsyncThunk('addProduct', async (data, { rejectWithValue }) => {
    try {
        const response =await fetch(`${baseURL}3/product`, {
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
        const response =await fetch(`${baseURL}/getproducts`, {
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
        const response =await fetch(`${baseURL}/myProducts`, {
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
                        const response =await fetch(`${baseURL}/product/${id}`, {
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
                        const response =await fetch(`${baseURL}/product/${id}`, {
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