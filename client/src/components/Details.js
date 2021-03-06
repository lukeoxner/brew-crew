import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import WallOfBeers from '../images/wall-of-beers.jpg';

const useStyles = makeStyles((theme) => ({
	typography: {
		color: '#dbdbdb',
	},
	root: {
		width: 800,
		height: '100%',
		margin: 15,
		[theme.breakpoints.down('sm')]: {
			width: 500,
		},
		[theme.breakpoints.down('xs')]: {
			width: 300,
		},
		backgroundColor: '#1f1f1f',
		outlineColor: '#f1a922',
		outlineStyle: 'solid',
		outlineWidth: '2px',
		color: '#fff',
	},
	media: {
		height: 120,
		// paddingTop: "56.25%", // 16:9
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
	title: {
		color: '#dbdbdb',
		fontWeight: 500,
	},
	subheader: {
		color: '#dbdbdb',
	},
	link: {
		color: '#f1a922',
	},
}));

export default function Details(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				title={
					<Typography className={classes.title} variant='h5'>
						{props.name}
					</Typography>
				}
				subheader={
					<Typography className={classes.subheader}>
						{props.city}, {props.state}
					</Typography>
				}
			/>
			<CardContent>
				<Typography variant='body2' component='p'>
					Website:{' '}
					{props.website ? (
						<a className={classes.link} href={props.website} target='blank'>
							{props.website}
						</a>
					) : (
						'N/A'
					)}
				</Typography>
				<Typography variant='body2' component='p'>
					Address:{' '}
					{props.street
						? `${props.street} - ${props.city}, ${props.state}`
						: 'N/A'}
				</Typography>
			</CardContent>
		</Card>
	);
}
