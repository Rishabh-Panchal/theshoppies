import React, { Component } from 'react';
import './App.css';
import logo from './icons/shopify_glyph.svg';
import MovieResult from './Components/MovieResult';
import NominatedMovies from './Components/NominatedMovies';

class App extends Component {
  //All states
  state={
    searchQuery: '',
    movieList: [] ,
    nominatedList: [] ,
    isNominated: false,
  }

  //Fetches Array of results from omdb api based on query
  getMoviesList = async (event) => {
    const url = "https://www.omdbapi.com/?apikey=220c20a&s=";
    const value = event.target.value;
    this.setState({searchQuery: value});

    const response = await fetch(url+value);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      this.setState({movieList: responseJSON.Search});
      
    //filtering results based on movie  
    const filteredMovieList = this.state.movieList.filter(
        (movieList) => movieList.Type === "movie" );

    //setting state of final search result    
    this.setState({movieList: filteredMovieList});

		} 
  };
  
  //Saves movie to the nominated list
  setNomination = (movieList) => {
    const nominatedMovie = [...this.state.nominatedList,movieList];

    if(this.state.nominatedList.length<=4){
      this.setState({nominatedList: nominatedMovie});
    }     
  };

  //Removes movie from nomination
  removeNomination = (movieList) => {

    const updateNominations = this.state.nominatedList.filter(
      (nominatedList) => nominatedList.imdbID !== movieList.imdbID );
      
      this.setState({nominatedList: updateNominations});
  };

  //Displays a banner on nomination progress
  displayBanner = () => {
    if(this.state.nominatedList.length<=4){
      return("You have"+5-this.state.nominatedList.length+"Nominations Remaining.")
    }
  };


  render() {
    return (
      <div className="App">

        <div className="App-header-container">
          <img src={logo} alt="logo"></img>
          <header className="App-header">     
            <h1 className="App-title">The Shoppies <br/><span className="App-subtitle">Movie awards for entrepreneurs</span></h1>
          </header>
        </div>

        <div className="App-body">
          <div className="Search-container">
            <input className="Bar" type="text" placeholder="Search Movies to Nominate"  onChange={(event)=>this.getMoviesList(event)} />
          </div>

          <div className="Result-container">
            <MovieResult 
            searchQuery={this.state.searchQuery} 
            movieList={this.state.movieList} 
            setNomination={this.setNomination} 
            isDisabled={this.state.isNominated}/>

            <NominatedMovies 
            nominatedMovieList={this.state.nominatedList} 
            removeNomination={this.removeNomination} 
            count={this.state.nominatedList.length}/>
          </div>
        </div>
        
      </div> 
    );
  }
}

export default App;
