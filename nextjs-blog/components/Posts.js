import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../pages/actions/postActions'
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import utilStyles from '../styles/utils.module.css'




// const useStyles = makeStyles((theme) => ({
 
//   }));

//   const classes = useStyles();

class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    

    render() {
        
        const postItems = this.props.posts.map(post => (
            <div className={utilStyles.inline} >
                    {/* <Grid container >
                    <Grid item xs={12} sm={6} md={4} > */}
                    
                <Card className={utilStyles.card} key={post.id}>
                    <CardActionArea>
                    <CardMedia
                        className={utilStyles.media}
                        image="/images/pexels-photo-169573.jpeg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {post.body}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions className={utilStyles.cardActions}>
                    <Box className={utilStyles.author}>
                        <Avatar src="/images/Reyomi_logo.jpg" />
                        <Box ml={2} >
                        <Typography  variant="subtitle2" component="p">
                            James Bond
                        </Typography>
                        <Typography  variant="subtitle2" color="textSecondary" component="p">
                            February 04, 2021
                        </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <BookmarkBorderIcon />
                    </Box>
                    </CardActions>
                </Card>   

                       {/* </Grid>
                </Grid>     */}
                    
                {/* <div >
                    <h3></h3>
                    <p></p>
                    <br />
                </div> */}
            </div>
         
        ));



        return (
            
            <div>
                <h1>Posts</h1>
            
                                {postItems}
                      
                    <br />                   
             
            </div>
        );
    }
}

Posts.propTypes ={
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);