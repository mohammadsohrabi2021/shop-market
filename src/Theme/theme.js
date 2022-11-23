import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiButton: {
            variants: [{
                props: {
                    variant: 'mainButton'
                },
                style: {
                    color: '#fff',
                    backgroundColor: 'rgb(66, 133, 242)',
                    borderRadius: '4px',
                    textAlign: 'center',
                    height: 35,
                    width: '100%',
                    transition: " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    '&:hover': {
                        backgroundColor: 'rgb(66, 133, 242)',
                    }
                }
            }, {
                props: { variant: 'secondaryButton' },
                style: {
                    color: "#727272",
                    borderRadius: '4px',
                    height: 35

                }
            }]
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    boxSizing: 'border-box',
                    '.flexDir': {
                        '@media only screen and (max-width:590px)': {
                            flexDirection: 'column'
                        }
                    },
                    'a': {
                        textDecoration: 'none'
                    },
                }

            }

        },
    },
    palette: {
        primary: {
            main: "#1a73e8"
        },
        secondary: {
            main: "#f2f2f2"
        },
        third: {
            main: "rgb(61, 61, 61)"
        },
        fourth: {
            main: "#34a853"
        },
        backgroundPrimary: {
            main: "#34a853"
        },
        backgroundHover: {
            main: "#167d32"
        },
        backgroundLink: {
            main: "#1a73e8"
        },
        backgroundLinkHover: {
            main: "#08499d"
        },
    },
    typography: {
        fontFamily: 'IRANSANS',
        h1: {
            fontSize: '2rem',
            fontWeight: 500,
            lineHeight: 1.5,
            color: 'rgba(0, 0, 0, 0.85)'
        },
        h2: {

            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.5,
        },
        h3: {
            fontSize: 12,
            fontWeight: 700,
            lineHeight: '18px',
            color: 'rgba(0, 0, 0, 0.85)'
        },
        p: {
            color: 'rgb(61, 61, 61)',
            margin: '20px 20px 10px'
        },
        span: {
            color: ' #1a73e8',
            fontWeight: 'bold'
        },
        title1: {
            display: 'inline-block',
            background: '#34a853',
            padding: '7px 16px',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '5px',
            marginBottom: '20px',
            transition: ' all 0.2s ease',
            cursor: 'pointer',
        },
        title2: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '21px',

        },
        button: {
            fontSize: '0.9rem',
            // backgroundColor: '#1a73e8',
            border: 'none',
            color: '#fff',
            // height: '30px',
            // width: '120px',
            borderRadius:' 4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginLeft: '5px',
        },

    }
})