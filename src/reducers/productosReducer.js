import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// Cada Reducer tiene su propio State
const initialState = {
    productos : [],
    error: null,
    loading:false
}

// Reducer
export default function ( state = initialState, action) {
    switch(action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                error:null
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: [...state.productos, action.payload],
                error:null,
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error:true
            }
        default:
            return {
                state
            }
    }
}