export const TopCategoryStyles = {

    itemsBox: {
        display:'block',
        marginRight:2,
        marginLeft:2,
        
    },

    containerGrid: {
        flexWrap: "nowrap",
        overflowX: "scroll",
        whiteSpace: "nowrap",
        marginLeft:0,
        marginRight:0,
        width:'100%'
    },
    titleBox: {
        width: '350px',
        height: '30px',
        marginLeft:2,
        marginRight:2,
        lineHeight:'60px',
      
    },
    title:{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '20px',
        color: '#171520',
    },
    itemBox: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft:2,
        marginRight:2,
        height: "125px",
        flexDirection: 'row',
        whiteSpace: "nowrap",
    },
    imageCaptionBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'80px',
        height:'80px'
    },
    image: {
        width: '80px',
        height: '80px',
        borderRadius:"8px",
        objectFit:'cover',
        maxHeight:'80px',
    },
    caption: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

};