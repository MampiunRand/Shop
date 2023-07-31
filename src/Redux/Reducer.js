import BUY_PHONE from './type';
const initialStatePhone={
    Phones: 5
}
const phoneReduce=(state=initialStatePhone,action)=>{
    switch(action.type){
        case BUY_PHONE :
            return {
                ...state,
                Phones: state.Phone - 1
            }
        default:
            return state;
    }
}
export default phoneReduce