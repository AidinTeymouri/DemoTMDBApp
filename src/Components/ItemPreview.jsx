import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import moment from "moment";
import {TMDBConstants} from "../Constants";
import styles from "./ItemPreview.styles";

class ItemPreview extends Component {
    static getRatingColour(rating) {
        if(rating > 7) return "#01D277";
        if(rating < 3) return "#D1225B";
        return "#4902A3";
    }

    render() {
        const { classes, style, title, releaseDate, posterPath, rating } = this.props;

        return (
            <main className={classes.root} style={{...style}}>
                <div style={{position: "relative"}}>
                    <img src={`${TMDBConstants.IMAGE_BASE}${posterPath}`} className={classes.poster} alt={title} />
                    <div className={classes.rating} style={{backgroundColor: ItemPreview.getRatingColour(rating)}}>{rating * 10}%</div>
                </div>
                <div className={classes.title}>{title}</div>
                <div className={classes.subtitle}>{moment(releaseDate).format("MMMM Y")}</div>
            </main>
        );
    }
}

export default withStyles(styles)(ItemPreview);