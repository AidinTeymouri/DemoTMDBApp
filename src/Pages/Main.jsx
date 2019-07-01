import React, { Component } from 'react';
import { withStyles} from "@material-ui/styles";
import SearchBar from "../Components/SearchBar";
import ItemPreview from "../Components/ItemPreview";
import { connect } from "react-redux";
import { fetchMovies } from "../Actions";
import { Link } from "react-router-dom";
import styles from './Main.styles';

class Main extends Component {
    componentDidMount() {
        const { movies, searchQuery, loading } = this.props;

        if(movies.length === 0 && searchQuery === "" && !loading)
            this.props.fetchMovies("");
    }

    handleSearch = query => {
        this.props.fetchMovies(query);
    };

    render() {
        const { classes, movies, searchQuery } = this.props;

        return (
            <main className={classes.root}>
                <div style={{
                    background: "radial-gradient(312.01px at 53.46% -21.35%, rgba(5, 112, 172, 0.46) 0%, rgba(8, 27, 35, 0) 100%)",
                    paddingLeft: 16,
                    paddingRight: 16,
                    position: "relative",
                }}>
                    <img src={require("../Assets/tmdb-logo.svg")} className={classes.logo} alt="" />
                    <SearchBar onChange={this.handleSearch} value={searchQuery} style={{marginLeft: "auto", marginRight: "auto"}} />

                    {/* TODO: must be cleaned up */}
                    {/*<div className={classes.decorativeLine} style={{ left: "6.13%", right: "50.67%", top: "1.89%", bottom: "97.76%" }} />
                    <div style={{paddingBottom: "20px", position: "absolute", top: 0, left: 0}}>

                    </div>*/}
                    <div style={{paddingBottom: "20px", position: "absolute", top: 0, left: 0}}>

                    </div>
                    <div style={{marginLeft: -20, marginRight: -20, position: "relative"}}>
                        <div style={{maxWidth: 500, position: "relative", marginLeft: "auto", marginRight: "auto", zIndex: -1}}>
                            <div className={classes.decorativeLine} style={{ bottom: 250, left: 3 }} />
                            <div className={classes.decorativeLine} style={{ bottom: 223, left: 3 }} />
                            <div className={classes.decorativeLine} style={{ bottom: 88, left: -30 }} />

                            <div className={classes.decorativeLine} style={{ bottom: 241, right: -37 }} />
                            <div className={classes.decorativeLine} style={{ bottom: 205, right: -26 }} />
                            <div className={classes.decorativeLine} style={{ bottom: 88, right: 0 }} />
                        </div>
                    </div>
                </div>

                {searchQuery === "" && <div className={classes.header}>Popular Movies</div>}
                {searchQuery !== "" && <div className={classes.header}>Movies matching '{searchQuery}'</div>}

                <div className={classes.resultsContainer}>
                    {movies && movies.map(movie => {
                        return <Link to={`/${movie.id}`} key={movie.id} style={{textDecoration: "none", margin: 15}}>
                            <ItemPreview
                                title={movie.title}
                                releaseDate={movie.release_date}
                                posterPath={movie.poster_path}
                                rating={movie.vote_average} />
                        </Link>;
                    })}
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    const { movies } = state;
    return { movies: movies.movies, searchQuery: movies.searchQuery, loading: movies.loading };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: searchQuery => {
            dispatch(fetchMovies(searchQuery));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));