import React, { Component } from 'react';
import Header from './components/Header';
import GridLayoutBox from './components/GridLayoutBox';

export const GridElementCTX = React.createContext({
  elements: [],
  addEl: () => {},
  removeEl: () => {},
  editEl: () => {},
  resize: () => {},
});

class Mix extends Component {
  constructor(props) {
    super(props);
    this.addEl = param => {
      const { gridElements } = this.state;
      this.setState({
        gridElements: [...gridElements, param],
      });
    };
    this.removeEl = key => {
      const { gridElements } = this.state;
      this.setState({
        gridElements: gridElements.filter(item => item.key !== key),
      });
    };
    this.editEl = (key, param) => {
      const { gridElements } = this.state;
      const originalEl = gridElements.find(item => item.key === key);
      const newEl = { ...originalEl, ...param };
      this.setState({
        gridElements: [...gridElements.filter(item => item.key !== key), newEl],
      });
    };
    this.resize = arr => {
      const { gridElements } = this.state;
      console.log(arr);
      this.setState({
        gridElements: gridElements.map(item => ({
          ...item,
          ...arr.find(val => val.i === item.key),
        })),
      });
    };
    this.state = {
      gridElements: [],
    };
  }

  render() {
    const { gridElements } = this.state;
    return (
      <div>
        <GridElementCTX.Provider
          value={{
            elements: gridElements,
            addEl: this.addEl,
            editEl: this.editEl,
            removeEl: this.removeEl,
            resize: this.resize,
          }}
        >
          <Header />
          <GridLayoutBox />
        </GridElementCTX.Provider>
      </div>
    );
  }
}

export default Mix;
