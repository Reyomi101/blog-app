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
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url('https://images.unsplash.com/photo-1579062270059-79a24d07d198?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#ffe082",
      fontSize: "4rem"
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