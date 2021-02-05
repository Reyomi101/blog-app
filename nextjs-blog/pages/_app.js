import '../styles/global.css';
import { ThemeProvider } from '@material-ui/core'
import theme from '../components/theme'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff'
  },
  hero: {
      backgroundImage: `url('/images/pexels-photo-3861969.jpeg')`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#e0f2f1",
      fontSize: "4rem",
      [theme.breakpoints.down("sm")]: {
          height: 300,
          fontSize: "3em"
        }
  }
}));

export default function App({ Component, pageProps }) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="primary">
                        <strong><bold><big>NEXT</big></bold></strong><small>js</small> Blog
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box className={classes.hero}>
                <Box><strong><bold><big>NEXT</big></bold></strong><small>js</small> <i>Blog page...</i>
                </Box>
            </Box>
            <Component {...pageProps}> </Component>
        </ThemeProvider>
    );
}