import MovieData from "./movieData.json";
import MovieCard from "./MovieCard";
import logo from "../assets/movie.png"

const MoviesPage=()=>{
    return (
        <div>
            <nav className=" bg-gray-800 py-3 fixed w-screen flex items-center justify-center">
                <img src={logo} className=" h-16 mr-2 pb-2"/>
                <h1 className=" text-white text-6xl">MovieFlix</h1>
            </nav>

            <div className="flex flex-col gap-14 items-center pt-36 pb-10">
                {
                    MovieData.map((movie)=>
                        <MovieCard 
                        key={movie.imdbID} 
                        poster={movie.Poster} 
                        title={movie.Title} 
                        year={movie.Year} 
                        runtime={movie.Runtime}
                        genre={movie.Genre}
                        plot={movie.Plot}
                        rating={movie.imdbRating}
                        director={movie.Director}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default MoviesPage;