import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";
import moment from "moment";
import {Link} from "react-router-dom";
import styles from "./Detail.styles";
import { TMDBConstants } from "../Constants";

class Detail extends Component {
    componentDidMount() {
        this.setState({ loading: true });

        axios.get(`${TMDBConstants.API_BASE}movie/${this.props.match.params.id}?api_key=${TMDBConstants.API_KEY}&language=en-US`)
            .then(res => {
                this.setState({
                    loading: false,
                    ready: true,
                    backdropPath: res.data.backdrop_path,
                    overview: res.data.overview,
                    posterPath: res.data.poster_path,
                    releaseDate: res.data.release_date,
                    runtime: res.data.runtime,
                    title: res.data.title,
                    rating: res.data.vote_average
                })
            })
    }

    state = {
        loading: false,
        ready: false,
    };

    static getRuntimeString(runtime) {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;

        if(hours === 0 && minutes === 0) return "No runtime";
        if(hours === 0) return `${minutes} min`;
        if(minutes === 0) return `${hours}h`;
        return `${hours}h ${minutes} min`;
    }

    render() {
        const { classes } = this.props;
        const { ready, backdropPath, overview, posterPath, releaseDate, runtime, title, rating } = this.state;

        return (
            <main className={classes.root}>
                <Link to={"/"}>
                    <ArrowBackIcon className={classes.back} />
                </Link>

                {ready && <div>
                    <div className={classes.backdrop} style={{backgroundImage: `url('${TMDBConstants.IMAGE_BASE}${backdropPath}')`}} />
                    <div className={classes.header}>
                        <div className={classes.poster} style={{backgroundImage: `url('${TMDBConstants.IMAGE_BASE}${posterPath}')`}} />
                        <div className={classes.headerDetails}>
                            <div className={classes.title}>{title}</div>
                            <div className={classes.subtitle}>{moment(releaseDate).format("Y")}&nbsp;&nbsp;•&nbsp;&nbsp;{rating * 10}% User Score</div>
                            <div className={classes.subtitle}>{Detail.getRuntimeString(runtime)}</div>
                        </div>
                    </div>
                    <div className={classes.divider} />
                    <div className={classes.overviewHeading}>Overview</div>
                    <div className={classes.overview}>{overview}</div>
                </div>}
            </main>
        )
    }
}

export default withStyles(styles)(Detail);