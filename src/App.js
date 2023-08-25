import React, { useState } from 'react';
import movieData from './filmes.json';
import MovieTable from './components/MovieTable';
import Search from './components/Search';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = movies.filter(movie => 
    movie.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(movies);

  function handleMovieCheck(id) {
    setMovies(prevMovies => 
      prevMovies.map(movie => 
        movie.id === id ? { ...movie, checked: !movie.checked } : movie
      )
    );
  };

  const checkedMovies = movies.filter(movie => movie.checked);

  return (
    <div className="App">
        <Search onChange={setSearchTerm} />
        <MovieTable movies={filteredMovies} onCheck={handleMovieCheck} />
        {checkedMovies.length > 0 && (
            <div>
                Você selecionou:
                <div>
                    {checkedMovies.map(movie => (
                        <div key={movie.id}>{movie.nome}</div>
                    ))}
                </div>
            </div>
        )}
    </div>
);


}

export default App;
