export default function AppReducer(state, action) {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
        loading: false,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "ERROR_TRANSACTIONS":
      return {
        ...state,
        transaction: action.payload,
      };
    default:
      return state;
  }
}
