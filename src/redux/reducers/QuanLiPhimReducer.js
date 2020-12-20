const stateDefault = {
    mangPhim: []
}

export const QuanLiPhimReducer = (state= stateDefault, action) =>{
    switch(action.type){
        case 'GET_DATA_FILM':{
            state.mangPhim = action.dataFilm
        }
    }
    return {...state}
}