import React from 'react'
import Head from 'next/head';
import styles from '../styles/layout.module.css';
// import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import theme from '../components/theme';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
// import {Link, NavLink } from 'react-router-dom'



const name = 'Rey Anthony Omiple';
export const siteTitle = 'Next.js Blog page';


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

export default function Layout({ children, home }) {
	const classes = useStyles();
	return (
		<>
		<AppBar className={classes.appBar} position='static'>
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
					<IconButton variant='h7'>
						<a href='/newIndex' className={classes.links}>
							NewIndex
						</a>
					</IconButton>
				</Toolbar>
			</AppBar>
		<div className={styles.container}>
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
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href='/'>
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
		</>
	);
}
