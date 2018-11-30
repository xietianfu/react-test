import React, { Component } from 'react';
import GridLayoutBox from './components/GridLayoutBox';
import Header from './components/Header';
import Setting from './components/Setting';

export const GridElementCTX = React.createContext({
  elements: [],
  addEl: () => {},
  removeEl: () => {},
  editEl: () => {},
  resize: () => {},
});

export const ChartSetting = React.createContext({
  config: {},
  chartSeetingDrawer: {},
  addConfig: () => {},
  removeConfig: () => {},
  editConfig: () => {},
  toggleVisible: () => {},
});

class Mix extends Component {
  constructor(props) {
    super(props);
    // GridElementCTX fun
    this.addEl = key => {
      const { gridElements } = this.state;
      this.setState({
        gridElements: [...gridElements, key],
      });
    };
    this.removeEl = key => {
      const { gridElements } = this.state;
      this.setState({
        gridElements: gridElements.filter(item => item !== key),
      });
    };
    this.editEl = key => {
      this.addConfig({ key });
      this.toggleVisible();
    };
    this.removeEditKey = () => {
      this.setState({
        editKey: '',
      });
    };
    this.resize = arr => {
      const { gridElements } = this.state;
      this.setState({
        gridElements: gridElements.map(item => ({
          ...item,
          ...arr.find(val => val.i === item.key),
        })),
      });
    };

    // ChartSetting fun
    this.addConfig = params => {
      this.setState({
        chartConfig: params,
      });
    };

    this.removeConfig = () => {
      this.setState({
        chartConfig: {},
      });
    };

    this.editConfig = params => {
      const { chartConfig } = this.state;
      // console.log(params);
      this.setState({
        chartConfig: { ...chartConfig, ...params },
      });
    };

    this.toggleVisible = () => {
      this.setState({
        chartSeetingDrawer: {
          ...this.state.chartSeetingDrawer,
          visible: !this.state.chartSeetingDrawer.visible, // eslint-disable-line
        },
      });
    };

    this.state = {
      gridElements: [],
      editKey: '',
      chartConfig: {},
      chartSeetingDrawer: {
        visible: false,
      },
    };
  }

  render() {
    const {
      gridElements,
      chartConfig,
      chartSeetingDrawer,
      editKey,
    } = this.state;
    return (
      <div>
        <ChartSetting.Provider
          value={{
            config: chartConfig,
            chartSeetingDrawer,
            addConfig: this.addConfig,
            removeConfig: this.removeConfig,
            editConfig: this.editConfig,
            toggleVisible: this.toggleVisible,
          }}
        >
          <GridElementCTX.Provider
            value={{
              elements: gridElements,
              editKey,
              addEl: this.addEl,
              editEl: this.editEl,
              removeEl: this.removeEl,
              removeEditKey: this.removeEditKey,
              resize: this.resize,
            }}
          >
            <Header />
            <Setting
              config={chartConfig}
              chartSeetingDrawer={chartSeetingDrawer}
              addEl={this.addEl}
              editConfig={this.editConfig}
              removeConfig={this.removeConfig}
              toggleVisible={this.toggleVisible}
              editKey={key => {
                this.setState({
                  editKey: key,
                });
              }}
            />
            <GridLayoutBox elements={gridElements} />
          </GridElementCTX.Provider>
        </ChartSetting.Provider>
      </div>
    );
  }
}

export default Mix;
