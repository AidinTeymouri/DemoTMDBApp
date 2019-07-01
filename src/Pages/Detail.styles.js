export default ({
    root: {
        position: "relative"
    },
    back: {
        width: 20,
        height: 20,
        position: "absolute",
        top: 30,
        left: 24,
        color: "#FFFFFF"
    },
    backdrop: {
        maxHeight: 600,
        width: "100%",
        paddingBottom: `${(9/16)*100}%`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },
    header: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 30,
        textAlign: "left",
        position: "relative"
    },
    poster: {
        width: 140,
        height: 213,
        //paddingBottom: "200%",
        position: "absolute",
        bottom: 30,
        borderRadius: 10,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5), 0px 16px 32px rgba(0, 0, 0, 0.5)",
        backgroundSize: "cover"
    },
    headerDetails: {
        width: "calc(100% - 160px)",
        wordBreak: "break-word",
        marginLeft: 140,
        paddingLeft: 20,
    },
    title: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        lineHeight: "30px",
        color: "#E3F4FC",
        marginBottom: 14
    },
    subtitle: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        lineHeight: "21px",
        color: "#B8D8E6"
    },
    divider: {
        marginLeft: 20,
        marginRight: 20,
        border: "1px solid #0F303D",
        boxSizing: "border-box"
    },
    overviewHeading: {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: "24px",
        color: "#E3F4FC",
        marginTop: 24,
        textAlign: "left",
        paddingLeft: 20,
        paddingRight: 20,
    },
    overview: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "24px",
        marginTop: 12,
        textAlign: "left",
        color: "#9FBBC7",
        paddingLeft: 20,
        paddingRight: 20,
    }
});