import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});


const options = [
    'Show Agency',
    'Make a Deal',
    'Add in Favors'
];

const ITEM_HEIGHT = 48;

class ServiceCard extends React.Component {
    state = {
        expanded: false,
        show: false,
        anchorEl: null,
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleIconClick = () => {
        this.setState({show : !this.state.show})
        console.log("dsddsqdqsdqsdqs");
    };


    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = ( option ) => {

        this.setState({ anchorEl: null });

    };

    render() {

        const open = Boolean(this.state.anchorEl);

        const { classes } = this.props;
        let menu = (this.state.show) ? <h1>dddd</h1> : null;

        return (
            <Card className={classes.card} style={{margin : '33px'}}>
                <CardHeader

                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {this.props.elt.serviceID}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="More"
                                    aria-owns={open ? 'long-menu' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}>
                            <MoreVertIcon />
                        </IconButton>


                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={this.props.elt.date_creation}
                />
                <Menu
                    id="long-menu"
                    anchorEl={this.state.anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: 200,
                        },
                    }}
                >
                    {options.map(option => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => this.handleClose(option)}>
                            <Link to={{ pathname: '/offerMaker', state: { foo: this.props.elt.serviceID} }} style={{ color: '#f44336'}}> {option}</Link>
                        </MenuItem>
                    ))}
                </Menu>
                <CardMedia
                    component='div'
                    className={classes.media}
                    image={require('../assets/images/builder.jpg')}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography paragraph>Price :</Typography>
                    <Typography component="p">
                        {this.props.elt.prix}
                        <hr/>
                    </Typography>
                    <Typography paragraph>Address :</Typography>
                    <Typography component="p">
                        {this.props.elt.adresse}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Description :</Typography>
                        <Typography paragraph>
                            {this.props.elt.Description}
                            <hr/>
                        </Typography>
                        <Typography paragraph>Agency :</Typography>
                        <Typography paragraph>
                            {this.props.elt.agenceid}
                            <hr/>
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>

                    </CardContent>
                </Collapse>

            </Card>

        );
    }
}

ServiceCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ServiceCard);