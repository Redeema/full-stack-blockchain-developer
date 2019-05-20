// Подключаем модули
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Подключаем модуль YouTube Search
import YTS from 'youtube-api-search';

// подключаем нужные нам файлы с компонентами
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

// import VideoListItem from './components/video_list_item.js'

// API ключ из Google Console
const API_KEY = 'AIzaSyCHVpGumw3IMGKCHQgx1hSqRPamVAtfiCM';

// 1. Создаем класс который создаст html
// Объявляем "SearchBar" компонент(но по факту он класс) в "App" компоненте
class App extends Component {
  constructor(props) {
    super(props);
    // объявляем state и присваеваем параметр с масивом
    this.state = {
      videos:[ ],
      selectedVideo: null
     };
      this.videoSearch('serfboards');
   }
   // Определяем callback для строки поиска
   // создаем метод
   videoSearch(term) {
     // Используем модуль YouTube Search
     YTS({ key: API_KEY, term: term}, (videos) => {
           this.setState({
             videos: videos,
             selectedVideo:  videos[0]
           });
         });
   }


  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, [500]);

  return (
    <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
    </div>
         );
  }
}

// 2. Возми этот компонент (HTML) и размести код на странице // Используем ESX
ReactDOM.render(<App />, document.querySelector('.container'));
