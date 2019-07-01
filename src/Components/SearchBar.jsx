import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import styles from "./SearchBar.styles";

class SearchBar extends Component {
    render() {
        const { classes, style, onChange, value } = this.props;

        return (
            <main className={classes.root} style={{...style}}>
                <input
                    value={value}
                    onChange={ev => onChange(ev.target.value)}
                    className={classes.input}
                    type={"text"}
                    placeholder={"Search"}
                />
                <SearchIcon className={classes.icon} />
            </main>
        );
    }
}

export default withStyles(styles)(SearchBar);