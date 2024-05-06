import PropTypes from 'prop-types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';


const MovieCard=(props)=>{
    return(
        <div className=" shadow-my-custom-shadow shadow-green-600 bg-gray-950 w-9/12 rounded-lg">
            <div className=" p-6 flex gap-6">
                <img src={props.poster} className=" h-64"/>
                <div className=' text-gray-300 text-sm'>
                    <h1 className=' font-bold text-3xl mb-2'>{props.title}</h1>
                    <p className=' text-sm text-blue-400 mb-1'>{props.year}, {props.director}</p>
                    <p className=' mb-2'><span className=' text-sm inline-block p-1 mr-4 bg-blue-400 text-black font-bold rounded-md'>{props.runtime}</span> <span>{props.genre}</span></p>
                    <p>IMDB Rating: <span className=' font-bold text-yellow-500'>{props.rating}</span></p>

                    <p className=' mt-10 text-xl'>{props.plot}</p>
                </div>
            </div>

            <div className='flex gap-8 p-6 mt-4'>
                <FavoriteIcon sx={{ color: "gray", fontSize: "30px"}}/>
                <CommentIcon sx={{ color: "gray", fontSize: "30px"}}/>
                <ShareIcon sx={{ color: "gray", fontSize: "30px"}}/>
            </div>
        </div>
    )
}

MovieCard.propTypes={
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    runtime: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.string,
    plot: PropTypes.string,
    director: PropTypes.string
}

export default MovieCard;

