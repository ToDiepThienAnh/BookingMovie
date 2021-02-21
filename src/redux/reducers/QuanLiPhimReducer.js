const stateDefault = {
    mangPhim: [],
    thongTinPhongVe: {}
}

export const QuanLiPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_DATA_FILM': {
            state.mangPhim = action.dataFilm
        }
        case 'LAY_THONG_TIN_PHONG_VE': {
            return { ...state, thongTinPhongVe: action.thongTinPhongVe }
        }
    }
    return { ...state }
}