import './App.css'
import { ComboBox } from './components/ComboBox'

function App() {

  const movies = [
    { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
    { title: "The Godfather", genre: "Crime, Drama", year: 1972 },
    { title: "The Dark Knight", genre: "Action, Crime, Drama", year: 2008 },
    { title: "12 Angry Men", genre: "Drama", year: 1957 },
    { title: "Schindler's List", genre: "Biography, Drama, History", year: 1993 },
    { title: "Pulp Fiction", genre: "Crime, Drama", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", genre: "Action, Adventure, Drama", year: 2003 },
    { title: "Fight Club", genre: "Drama", year: 1999 },
    { title: "Forrest Gump", genre: "Drama, Romance", year: 1994 },
    { title: "Inception", genre: "Action, Adventure, Sci-Fi", year: 2010 },
    { title: "The Matrix", genre: "Action, Sci-Fi", year: 1999 },
    { title: "Goodfellas", genre: "Biography, Crime, Drama", year: 1990 },
    { title: "The Empire Strikes Back", genre: "Action, Adventure, Fantasy", year: 1980 },
    { title: "Interstellar", genre: "Adventure, Drama, Sci-Fi", year: 2014 },
    { title: "Spirited Away", genre: "Animation, Adventure, Family", year: 2001 },
    { title: "Parasite", genre: "Comedy, Drama, Thriller", year: 2019 },
    { title: "Avengers: Endgame", genre: "Action, Adventure, Drama", year: 2019 },
    { title: "Gladiator", genre: "Action, Adventure, Drama", year: 2000 },
    { title: "The Lion King", genre: "Animation, Adventure, Drama", year: 1994 },
    { title: "Saving Private Ryan", genre: "Drama, War", year: 1998 },
    { title: "The Green Mile", genre: "Crime, Drama, Fantasy", year: 1999 },
    { title: "Se7en", genre: "Crime, Drama, Mystery", year: 1995 },
    { title: "The Silence of the Lambs", genre: "Crime, Drama, Thriller", year: 1991 },
    { title: "La La Land", genre: "Comedy, Drama, Music", year: 2016 },
    { title: "Joker", genre: "Crime, Drama, Thriller", year: 2019 },
    { title: "The Prestige", genre: "Drama, Mystery, Sci-Fi", year: 2006 },
    { title: "Whiplash", genre: "Drama, Music", year: 2014 },
    { title: "The Intouchables", genre: "Biography, Comedy, Drama", year: 2011 },
    { title: "Django Unchained", genre: "Drama, Western", year: 2012 },
    { title: "The Departed", genre: "Crime, Drama, Thriller", year: 2006 },
    { title: "Alien", genre: "Horror, Sci-Fi", year: 1979 },
    { title: "WALL·E", genre: "Animation, Adventure, Family", year: 2008 },
    { title: "The Social Network", genre: "Biography, Drama", year: 2010 },
    { title: "Shutter Island", genre: "Mystery, Thriller", year: 2010 },
    { title: "Mad Max: Fury Road", genre: "Action, Adventure, Sci-Fi", year: 2015 },
    { title: "Black Panther", genre: "Action, Adventure, Sci-Fi", year: 2018 },
    { title: "Logan", genre: "Action, Drama, Sci-Fi", year: 2017 },
    { title: "A Beautiful Mind", genre: "Biography, Drama", year: 2001 },
    { title: "Coco", genre: "Animation, Adventure, Family", year: 2017 },
    { title: "The Grand Budapest Hotel", genre: "Adventure, Comedy, Crime", year: 2014 },
    { title: "The Revenant", genre: "Action, Adventure, Drama", year: 2015 },
    { title: "The Truman Show", genre: "Comedy, Drama", year: 1998 },
    { title: "Up", genre: "Animation, Adventure, Comedy", year: 2009 },
    { title: "Inside Out", genre: "Animation, Adventure, Comedy", year: 2015 },
    { title: "The Wolf of Wall Street", genre: "Biography, Comedy, Crime", year: 2013 },
    { title: "The Irishman", genre: "Biography, Crime, Drama", year: 2019 },
    { title: "Toy Story", genre: "Animation, Adventure, Comedy", year: 1995 },
    { title: "Finding Nemo", genre: "Animation, Adventure, Comedy", year: 2003 },
    { title: "The Incredibles", genre: "Animation, Action, Adventure", year: 2004 },
    { title: "The Dark Knight Rises", genre: "Action, Adventure, Drama", year: 2012 },
  ];
  

  return (
    <>
      <h1 className='text-emerald-700 text-2xl font-medium text-center'>Combo Box</h1>
      <ComboBox allowClear={true} options = {movies} title = "Movies"/>
    </>
  )
}

export default App;

