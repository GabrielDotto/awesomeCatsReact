import React from 'react';
import "./CatCard.css";
import "../../index.css";
import { connect } from 'react-redux';
 
import * as BreedAction from '../../redux/actions/breeds';


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

class CatCard extends React.Component {
    componentDidUpdate(prev) {
        if(prev.cat.id !== this.props.cat.id){
            this.props.dispatch(BreedAction.getImage(this.props.cat.id));
        }
    }

    componentDidMount() {
        this.props.dispatch(BreedAction.getImage(this.props.cat.id));
    }


    render () {
    return <div className="cat-card">
        <div className="cat-content">
            <div>
                <img src={this.props.imgCat} alt=""/>
            </div>
            <div className="infos-breed">
                <div className="cat-header">
                    <p className="no-margin"><b>{this.props.cat.name}</b></p>
                    <p className="no-margin">{this.props.cat.description}</p>
                </div>
                <div className="status-breed">
                    <div className="label-stars">
                        <p>Affection Level </p>
                        <p>Adaptability </p>
                        <p>Child Friendly </p>
                        <p>Dog Friendly </p>    
                    </div>
                    <div className="starIcon">
                        <div> {addStarInfos(this.props.cat.affection_level, "affection")}</div>
                        <div >{addStarInfos(this.props.cat.adaptability , "adaptability")}</div>
                        <div >{addStarInfos(this.props.cat.child_friendly, "childFriendly")}</div>
                        <div >{addStarInfos(this.props.cat.dog_friendly, "dogFriendly")}</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    }
};


const mapStateToProps = state => ({ 
    imgCat: state.breeds.activeCatImage
});

export default connect(mapStateToProps, null)(CatCard);