const initialState = [
    [{mark: null}, {mark: null}, {mark: null}],
    [{mark: null}, {mark: null}, {mark: null}],
    [{mark: null}, {mark: null}, {mark: null}]
]

export const gameReducer = (state = initialState, action) => {
    console.log('action', action);
    switch (action.type) {
        case 'FETCH_ITEMS_LIST':
            return action.payload;
        default: 
            return state;
    }
}