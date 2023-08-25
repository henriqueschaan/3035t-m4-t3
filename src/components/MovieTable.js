import React from 'react';

export function MovieTable({ movies, onCheck }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Check</th>          
          <th>Nome</th>
          <th>Gênero</th>
          <th>Imagem</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(movie => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td><input type="checkbox" checked={movie.checked} onChange={() => onCheck(movie.id)} /></td>
            <td>{movie.nome}</td>
            <td>{movie.genero}</td>
            <td><img src={movie.imagem} alt={movie.nome} width="50" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
