export default ({
    root: {
        width: "100%",
        height: 44,
        background: "#ffffff",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
        borderRadius: 22,
        paddingLeft: 17,
        paddingRight: 17,
        boxSizing: "border-box",
        maxWidth: 500,
    },
    input: {
        borderWidth: 0,
        outline: "none",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "16px",
        color: "#01D277",
        width: "calc(100% - 20px)",
        marginTop: 14,
        "&::placeholder": {
            color: "#01D277"
        },
        float: "left"
    },
    icon: {
        color: "#01D277",
        width: 20,
        height: 20,
        marginTop: 12
    }
});