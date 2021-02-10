import '../styles/sass/header.scss'
import '../styles/sass/Navbar.scss'
import '../styles/sass/Layouts.scss'
import '../styles/sass/newIndex.scss'
import { ThemeProvider } from '@material-ui/core';
import theme from '../components/theme';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import IconButton from '@material-ui/core/IconButton';
// import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: '#ddd',
	},

	links: {
		textDecoration: 'none',
		fontSize: '14px',
		color: '#ffffff',
	},
}));

export default function App({ Component, pageProps }) {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			{/* <AppBar className={classes.appBar} position='static'>
				<Toolbar variant='dense'>
					<Typography variant='h6' color='primary'>
						<strong>
							<bold>
								<big>NEXT</big>
							</bold>
						</strong>
						<small>js</small> Blog
					</Typography>
					<IconButton variant='h7'>
						<a href='/' className={classes.links}>
							Home
						</a>
					</IconButton>
					<IconButton variant='h7'>
						<a href='/addblog' className={classes.links}>
							+Blog
						</a>
					</IconButton>
				</Toolbar>
			</AppBar> */}
			<Component {...pageProps}> </Component>
		</ThemeProvider>
	);
}


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Head from 'next/head';
// import { ThemeProvider } from '@material-ui/core/styles';
// // import { CacheProvider } from '@emotion/react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// // import createCache from '@emotion/cache';
// // import theme from '../src/theme';

// export const cache = createCache({ key: 'css', prepend: true });

// export default function MyApp(props) {
//   const { Component, pageProps } = props;

//   React.useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <CacheProvider value={cache}>
//       <Head>
//         <title>My page</title>
//         <meta name="viewport" content="initial-scale=1, width=device-width" />
//       </Head>
//       <ThemeProvider theme={theme}>
//         {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </CacheProvider>
//   );
// }

// MyApp.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   pageProps: PropTypes.object.isRequired,
// };