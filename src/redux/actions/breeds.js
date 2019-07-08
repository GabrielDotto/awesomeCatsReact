import { SET_BREEDS_SEARCHED } from "../actions/actionTypes";

export const getBreeds = searchValue => {
    return dispath => { 
        fetch("https://api.thecatapi.com/v1/breeds/search?q=sib", {
            crossDomain: true,
            headers: {'x-api-key': "4280a662-af70-43f2-a2ba-2e75d4c0d76d"},
        })
        .then(response => response.json())
        .then(responseJSON => console.log("SUCESS JSON ????", responseJSON))
        .catch( err =>  console.log("error", err));
    }
};
