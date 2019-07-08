import React from 'react';
import "./BreedSearcher.css";
import "../../index.css";
import CatCard from "../catCard/CatCard";
import { connect } from 'react-redux';
 
import * as BreedAction from '../../redux/actions/breeds';
import { bindActionCreators } from 'redux';


let inputValue = "";

const input = (value) => {
    inputValue = value;
}

const showBreed = (breeds) => {
    return breeds.length > 0 && <CatCard cat={breeds[0]} />;
}

const addButtonLoad = (breeds) => {
    return breeds.length > 1 
        ?   <div className="footer-card">
                <button className="button-large ligthGrey" title="NÃO IMPLEMENTADO" >LOAD MORE</button>
            </div>
        : null;
}


const BreedSearcher = ( { breeds, getBreeds } ) => (
    <div className="breed-searcher"> 
        <div className="header-breed-searcher bottom-dotted-border">
            <div className="input-search"> 
                <form className="form-search" onSubmit={(e) => { e.preventDefault();  getBreeds(inputValue)} }>
                    <label> Search the breed:
                        <input type="text" onChange={(e) => input(e.target.value)}/>
                    </label>
                </form>
            </div>
        </div>
        <div className="breed-body-result">
            <div className="result-search-title">
                <span className="result-title"> {`${breeds.length} result found`}</span>
            </div>
            <div className="results-search-content">
                {showBreed(breeds)}
            </div>
            {addButtonLoad(breeds)}
        </div>
    </div>
);

const mapStateToProps = state => ({ 
    breeds: state.breeds.breeds
});

const mapDispatchToProps = dispatch => bindActionCreators(BreedAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BreedSearcher);