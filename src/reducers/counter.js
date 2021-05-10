const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "PENAMBAHAN":
      return state + 1;
    case "PENGURANGAN":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
