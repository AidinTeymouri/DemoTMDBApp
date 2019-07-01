export default ({
    root: {
        textAlign: "left",
        overflowX: "hidden"
        //paddingLeft: 16,
        //paddingRight: 16,
        //paddingTop: 168
    },
    logo: {
        width: "100%",
        maxHeight: 60,
        marginTop: 60,
        marginBottom: 50,
        marginLeft: "auto"
    },
    header: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: "24px",
        marginTop: 44,
        paddingLeft: 16,
        paddingRight: 16
    },
    resultsContainer: {
        /*display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: -15,
        marginTop: -3,
        justifyContent: "center"*/
        marginTop: -3,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr));"
    },
    decorativeLine: {
        background: "rgba(1, 210, 119, 0.83)",
        width: 162,
        height: 4,
        position: "absolute",
        borderRadius: "3.5px",
        transform: "rotate(-45deg)"
    }
});