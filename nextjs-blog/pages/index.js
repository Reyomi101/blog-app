import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Posts from '../components/Posts';
import PostForm from '../components/Postform';
import { Provider } from 'react-redux';
import store from '../components/store';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
	blogsContainer: {
		paddingTop: theme.spacing(3),
	},
	blogTitle: {
		fontWeight: 800,
		paddingBottom: theme.spacing(3),
	},
	card: {
		maxWidth: '100%',
	},
	media: {
		height: 240,
	},
	cardActions: {
		display: 'flex',
		margin: '0 10px',
		justifyContent: 'space-between',
	},
	author: {
		display: 'flex',
	},
}));

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home({ allPostsData }) {
	const classes = useStyles();
	return (
		<Container maxWidth='lg' className={classes.blogsContainer}>
			<Provider store={store}>
				<Typography variant='h4' className={classes.blogTitle}>
					Articles
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='/images/pexels-photo-256381.jpeg'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										Lizard
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='/images/Reyomi_logo_dark.jpg' />
									<Box ml={2}>
										<Typography variant='subtitle2' component='p'>
											James Bond
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'>
											February 04, 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='/images/pexels-aidan-hyde-3415088.jpg.jpeg'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										Lizard
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='/images/Reyomi_logo_dark.jpg' />
									<Box ml={2}>
										<Typography variant='subtitle2' component='p'>
											James Bond
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'>
											February 04, 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='/images/Reyomi_logo.jpg'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										Lizard
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='/images/Reyomi_logo_dark.jpg' />
									<Box ml={2}>
										<Typography variant='subtitle2' component='p'>
											James Bond
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'>
											February 04, 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image='/images/pexels-photo-3861972.jpeg'
									title='Contemplative Reptile'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										Lizard
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions className={classes.cardActions}>
								<Box className={classes.author}>
									<Avatar src='/images/Reyomi_logo_dark.jpg' />
									<Box ml={2}>
										<Typography variant='subtitle2' component='p'>
											James Bond
										</Typography>
										<Typography
											variant='subtitle2'
											color='textSecondary'
											component='p'>
											February 04, 2021
										</Typography>
									</Box>
								</Box>
								<Box>
									<BookmarkBorderIcon />
								</Box>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
				<Layout home>
					<Head>
						<title>{siteTitle}</title>
					</Head>
					<section className={utilStyles.headingMd}>
						<p>
							Hello, I'm <strong>Rey</strong>. I'm a software enginer and a
							basic translator for (English/Japanese). You can contact me on
							<a> Instagram</a>.
						</p>
						<p>
							(This is a sample website - you’ll be building a site like this on{' '}
							<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
						</p>
					</section>
					{/* Add this <section> tag below the existing <section> tag */}
					<section
						className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
						<h2 className={utilStyles.headingLg}>Blog</h2>
						<ul className={utilStyles.list}>
							{allPostsData.map(({ id, date, title }) => (
								<li className={utilStyles.listItem} key={id}>
									<Link href={`/posts/${id}`}>
										<a>{title}</a>
									</Link>
									<br />
									{id}
									<br />
									<small className={utilStyles.listItem}>
										<Date dateString={date} />
									</small>
								</li>
							))}
						</ul>
					</section>
					<hr />
					<PostForm />
					<br />
					<Posts />
				</Layout>
			</Provider>
		</Container>
	);
}
