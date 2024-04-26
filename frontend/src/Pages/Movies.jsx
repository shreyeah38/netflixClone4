import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../Store';
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import NotAvailable from "../Components/NotAvailable";
import styled from 'styled-components';
import SelectGenre from '../Components/SelectGenre';

export default function Movies() {
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded);
  const movies = useSelector((state)=>state.netflix.movies);
  const genres = useSelector((state)=>state.netflix.genres);
  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch]);

  useEffect(()=>{
    if(genresLoaded)
      dispatch(fetchMovies({type:"movie"}));
  },[genresLoaded]);

  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }; 



  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled}/>
      </div>
      <div className="data">
      <SelectGenre genres={genres} type="movie"/>
        {movies.length?<Slider movies={movies}/> : <NotAvailable/>}
      </div>
    </Container>
  )
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;