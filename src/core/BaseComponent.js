export class Component {
  constructor({ tagName = "div", state = {}, props = {} }) {
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;

    this.render();
    return this.el;
  }
  render() {}
}
