import { SET_BREEDS_SEARCHED } from "../actions/actionTypes";

const initialState = {
  breeds: [{id: 1, cat: "doidao"}],
};

export default function breeds(state = initialState, action) {
  
  console.log("teste REDUCER", state);
  console.log("teste ACTION", action.payload);

  switch (action.type) {
    case SET_BREEDS_SEARCHED: {
      const  content  = action.payload;
      console.log("entrou no set breeds", content);
      return {
        ...state,
        breeds: {...breeds, content},
      };
    }
    default:
      return state;
  }
}
