// импортируем Реакт, присваеваем ему Componen
import React, { Component } from 'react';

// Объявляем класс и расширяем возможности спомощью компонента
// onChange присваеваем функцию c событием (event) которое происходит когда мы
// добавляем текст в поле input

class SearchBar extends Component {
// у классов есть state, если он меняется класс будет автоматически снова render

// сначала объявляем функцию "контструктор"
// внутри конструктора объявляем this. как state
// присваеваем параметр term

  constructor(props){
    super(props);

    this.state = {term: ''};
    }

  render() {
    return (
      <div className = "search-bar">
    <input
    value = {this.state.term}
    onChange = { event => this.onInputChange(event.target.value)} />
      </div>
      );
   }

  onInputChange(term){
      this.setState({term});
      this.props.onSearchTermChange(term);
    }

  }

export default SearchBar;
