import { BottomNavigation, Paper } from '@material-ui/core';
import { Box } from '@mui/system';
import React from 'react';

function Footer() {
    return (
        <Box>
            <Paper sx={{ position: 'fixed'}} elevation={3}>
                <BottomNavigation style={{
                    backgroundColor: '#FFD148',
                    height: '8rem'}}>
                    <Box style={{
                        height: '100%',
                        width: '25%',
                        backgroundColor: '#009688',
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '1rem'
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
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default Footer;
