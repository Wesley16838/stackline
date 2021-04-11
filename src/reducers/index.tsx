import types from "../ref/types";

const reducer = (state = {}, action: any) => {
  switch (action.type) {
    case types.SET_RETAILS_SALE:
      return {
        ...state,
        sales: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
