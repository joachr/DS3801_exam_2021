import {BottomNavigation, Container, Paper, useMediaQuery, useTheme} from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';



function Footer() {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div style={{
            marginTop: '250px'
        }}>
        { isMatch ?
            <BottomNavigation style={{
                position:'fixed',
                bottom:0,
                left:0,
                width:'100%',
                height: '90px',
                backgroundColor: '#FFD148',
            }}>
                <Box style={{
                    height: '100%',
                    backgroundColor: '#006357',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '1rem'
                    }}>
                        <ul style={{
                            listStyle: 'none',
                            color: 'white',
                            fontSize: 'large',
                        }}>
                            <li style={{
                                marginTop: '0.5rem'
                            }}>Tlf: 90 34 34 34</li>
                            <li style={{
                                marginTop: '0.5rem'
                            }}>E-post: strandpizza@gmail.com</li>
                            <li style={{
                                marginTop: '0.5rem'
                            }}>Adresse: Strandveien 4, 0000, Strand</li>
                        </ul>

                    </div>
                </Box>

                <FacebookIcon style={{marginTop: '20px' ,marginLeft: '400px', fontSize: '90px', color: '#4267B2'}}/>
                <InstagramIcon style={{marginTop: '20px' ,fontSize: '90px', color: '#E1306C'}}/>
                <TwitterIcon style={{marginTop: '20px' ,fontSize: '90px', color: '#1DA1F2'}}/>
            </BottomNavigation>  : (
                <BottomNavigation style={{
                    position:'sticky',
                    bottom:0,
                    left:0,
                    width:'100%',
                    height: '120px',
                    backgroundColor: '#FFD148',
                    marginTop: '150px'
                }}>
                    <Box style={{
                        height: '100%',
                        width: '20rem',
                        backgroundColor: '#009688',
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '1rem'
                        }}>
                            <ul style={{
                                listStyle: 'none',
                                color: 'white',
                                fontSize: 'large',
                            }}>
                                <li style={{
                                    marginTop: '0.5rem'
                                }}>Tlf: 90 34 34 34</li>
                                <li style={{
                                    marginTop: '0.5rem'
                                }}>E-post: strandpizza@gmail.com</li>
                                <li style={{
                                    marginTop: '0.5rem'
                                }}>Adresse: Strandveien 4, 0000, Strand</li>
                            </ul>
                        </div>
                    </Box>

                    <FacebookIcon style={{marginTop: '20px' ,marginLeft: '400px', fontSize: '90px', color: '#4267B2'}}/>
                    <InstagramIcon style={{marginTop: '20px' ,fontSize: '90px', color: '#E1306C'}}/>
                    <TwitterIcon style={{marginTop: '20px' ,fontSize: '90px', color: '#1DA1F2'}}/>
                </BottomNavigation>
            )}
        </div>

    )
}

export default Footer;
