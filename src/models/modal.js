export default {
  onOk(params = {}) {
    const { changeState } = this.props;
    changeState({ ...params, visible: false, type: true });
  },
  onCancel(params = {}) {
    const { changeState } = this.props;
    changeState({ ...params, visible: false, type: false });
  },
  changeVisible(name, param) {
    console.log('dsf');
    this.setState({
      [name]: {
        visible: param,
      },
    });
  },
};
