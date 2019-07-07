import React from 'react';
import "./BreedSearcher.css";
import "../../index.css";

import { connect } from 'react-redux';
 
import * as BreedAction from '../../redux/actions/breeds';
import { bindActionCreators } from 'redux';


let inputValue = "";

const input = (value) => {
    inputValue = value;
}

const BreedSearcher = ( { breeds, getBreeds } ) => (
    <div className="breed-searcher"> 
        <div className="header-breed-searcher bottom-dotted-border">
            <div className="input-search"> 
                <form className="form-search" onSubmit={(e) => { e.preventDefault();  getBreeds(inputValue)}}>
                    <label> Search the breed:
                        <input type="text" onChange={(e) => input(e.target.value)}/>
                    </label>
                </form>
            </div>
        </div>
        <div>
            <h1>{breeds.length}</h1>
            <p>testes</p>
        </div>
    </div>
);

const mapStateToProps = state => ({ 
    breeds: state.breeds.breeds
});

const mapDispatchToProps = dispatch => bindActionCreators(BreedAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BreedSearcher);