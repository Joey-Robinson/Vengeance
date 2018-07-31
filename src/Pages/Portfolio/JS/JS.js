import React from 'react';
import BookMarker from './Bookmarker/Bookmarker';
import CalorieCounter from './CalorieCounter/CalorieCounter';
import FilterableList from './FilterableList/FilterableList';
import GitHubSearch from './GitHubtSearch/GitHubSearch';
import ImageSlider from './ImageSlider/ImageSlider';
import ImageGallery from './ImageGallery/ImageGallery';

const JS = () => (
  <div>
    <h1 className="Portfolio-H1">JavaScript Projects</h1>
    <hr/>
    <br/>
    <BookMarker />
    <br/>
    <CalorieCounter />
    <br/>
    <FilterableList />
    <br/>
    <GitHubSearch />
    <br/>
    <ImageGallery />
    <br/>
    <ImageSlider />
    <br/>
  </div>
);

export default JS;