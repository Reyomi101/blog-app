import React from 'react';
import Head from 'next/head';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
// import theme from '../components/theme';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const name = 'Rey Anthony Omiple';
export const siteTitle = 'Next.js Blog page';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	// appBar: {
	// 	backgroundColor: '#ddd',
	// },
	title: {
		flexGrow: 1,
	},
}));

export default function Layout({ children, home }) {
	const classes = useStyles();
	return (
		<>
			<div className={classes.appBar}>
				<AppBar position='static'>
					<Toolbar>
						<Typography variant='h6' color='inherit' className={classes.title}>
							<strong>
								<bold>
									<big>NEXT</big>
								</bold>
							</strong>
							<small>js</small> Blog
						</Typography>
						<Button size='small' color='inherit'>
							<Link href='/'>
								<a className={utilStyles.links}>Home</a>
							</Link>
						</Button>
						<Button size='small' color='inherit'>
							<Link href='/addblog'>
								<a className={utilStyles.links}>+Blog</a>
							</Link>
						</Button>
					</Toolbar>
				</AppBar>
			</div>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta
					property='og:image'
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='summary_large_image' />
			</Head>

			{/* <header className={styles.header}>
				{home ? (
					<>
						<img
							src='/images/Reyomi_logo.jpg'
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<a>
								<img
									src='/images/Reyomi_logo.jpg'
									className={`${styles.headerImage} ${utilStyles.borderCircle}`}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href='/'>
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header> */}
			<main className={styles.container}>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</>
	);
}
