import axios from "axios";
import RelatedProducts from "./RelatedProducts";
import DescLower from "./DescLower";
import { Box, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import Product from '../Product';


const LowerSection = ({productData}) => {
    const [showDescLower, setShowDescLower] = useState(false);
    const [showRelatedProduct, setShowRelatedProduct] = useState(false)

    const ToggleDescLower = () => {
        setShowDescLower(true);
        setShowRelatedProduct(false);

    };
    const ToggleRelatedProduct = () => {
        setShowRelatedProduct(true);
        setShowDescLower(false);
    }

    return (
        <Grid item sm={12} md={6}
             sx={{
            width: '100%',
            height: '342px',
            top: '1256px',
        }}>


            <Paper sx={{

                justifyContent: 'flex-start',
                width: '98%',
                marginLeft: 2,
                marginRight: 2,
                height: '48px',
                Gap: '24px',
                borderRadius: '12px',
                backgroundColor: '#F1F1F1',
                display: 'flex'
            }} >

                <Button
                    sx={{
                        textTransform: 'capitalize',
                        padding: '6px 18px ',
                        marginTop: 1,
                        marginBottom: 1,
                        width: '189px',
                        height: '32px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        borderRadius: '8px',
                        '&:hover': {
                            backgroundColor: '#1B4B66',
                            color: '#fff',
                        },
                        color: '#626262',
                    }}
                    onClick={ToggleDescLower}>
                    Product Description
                </Button>
                <Button sx={{
                    textTransform: 'capitalize',
                    padding: '6px 18px ',
                    width: '189px',
                    height: '32px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    borderRadius: '8px',
                    marginTop: 1,
                    marginBottom: 1,
                    '&:hover': {
                        backgroundColor: '#1B4B66',
                        color: '#fff',
                    },
                    color: '#626262',
                }} onClick={ToggleRelatedProduct}>
                    Related Products
                </Button>


            </Paper>
            <Box sx={{
                marginLeft: 2,
                marginRight: 2,
                textOverflow:'ellipsis',
                overflow:'hidden',
               
            }}>
                {showDescLower && <DescLower  productData={productData}/>}
                {showRelatedProduct && <RelatedProducts />}
            </Box>
        </Grid>







    )
};
export default LowerSection;