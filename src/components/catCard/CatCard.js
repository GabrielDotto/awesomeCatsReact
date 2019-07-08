import React from 'react';
import "./CatCard.css";
import "../../index.css";
import { connect } from 'react-redux';


const addStarInfos = (number, label) => {
    let star = [];
    for(let startLevel = 0; startLevel < 5; startLevel++){
        if(number > startLevel) {
            star.push(<i className="fas fa-star greenColor" key={label+startLevel}></i>);
        }else{ 
            star.push(<i className="far fa-star ligthGrey" key={label+startLevel}></i>);
        }
    }
    return star;
}


// const catImage = (idCat) => {

//     let catImageUrl = "";
//         fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${idCat}`, { 
//             crossDomain: true,
//             headers: {'x-api-key': "4280a662-af70-43f2-a2ba-2e75d4c0d76d"}
//         })
//         .then(response => response.json())
//         .then(data => catImageUrl = data[0].url)
//         .catch(err => alert("Erro ao recuperar iamgem do cat"));
// };


const CatCard = ({cat}) => (
    <div className="cat-card">
        <div className="cat-content">
            <div>
                {/* <img src={catImage(cat.id)} alt={catImage(cat.id)}/> */}
            </div>
            <div className="infos-breed">
                <div className="cat-header">
                    <p className="no-margin"><b>{cat.name}</b></p>
                    <p className="no-margin">{cat.description}</p>
                </div>
                <div className="status-breed">
                    <div className="label-stars">
                        <p>Affection Level </p>
                        <p>Adaptability </p>
                        <p>Child Friendly </p>
                        <p>Dog Friendly </p>    
                    </div>
                    <div className="starIcon">
                        <div> {addStarInfos(cat.affection_level, "affection")}</div>
                        <div >{addStarInfos(cat.adaptability , "adaptability")}</div>
                        <div >{addStarInfos(cat.child_friendly, "childFriendly")}</div>
                        <div >{addStarInfos(cat.dog_friendly, "dogFriendly")}</div>
                    </div>
                </div>
            </div>
        </div>
        {console.log("CATCARD", cat)}
        <div className="footer-card">
            <button className="button-large ligthGrey">LOAD MORE</button>
        </div>
    </div>
);

// const mapStateToProps = state => ({ 
    
// });
// const mapDispatchToProps = dispatch => bindActionCreators(BreedAction, dispatch);

export default connect(null, null)(CatCard);