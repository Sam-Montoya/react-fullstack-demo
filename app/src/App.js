import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      superheroes: [],
      name: '',
      power: ''
    }

    this.handleSuperHeroName = this.handleSuperHeroName.bind(this);
    this.handleSuperHeroPower = this.handleSuperHeroPower.bind(this);
    this.addNewSuperhero = this.addNewSuperhero.bind(this);
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/getSuperheroes').then(response => {
      this.setState({
        superheroes: response.data
      })
    })
  }

  handleSuperHeroPower(typing){
    this.setState({
      power: typing
    })
  }

  handleSuperHeroName(typing){
    this.setState({
      name: typing
    })
  }

  addNewSuperhero(){
    var hero = {
      name: this.state.name,
      power: this.state.power
    }
    
    axios.post('http://localhost:3001/api/addSuperhero', hero).then(response => {
      console.log('Operator has been added.');

      var newHero = {
        name : hero.name,
        power: hero.power
      }
      
      this.state.superheroes.push(newHero);

      this.setState({
        superheroes: this.state.superheroes,
        name: '',
        power: ''
      })
    })
  }

  render() {

    var heros = this.state.superheroes.map((hero, i) => {
      return (
        <div key={i}>
          <h2>{hero.name}</h2>
          <h4>{hero.power}</h4>
          <h4>-</h4>
          </div>
      )
    });
    
    return (
      <div className="App">
        <h1>SuperHeroes</h1><br />
        {heros}
        <br />
        <input placeholder='Name' onChange={(typing) => this.handleSuperHeroName(typing.target.value)}/>
        <input placeholder='Power' onChange={(typing) => this.handleSuperHeroPower(typing.target.value)}/>
        <button onClick={this.addNewSuperhero}>Add Operator</button>
      </div>
    );
  }
}

export default App;
