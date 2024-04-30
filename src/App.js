import { Component } from "./core/MyReact";
import Header from "./components/Header";

/*
 * - Home 페이지는 서로 다른 컴포넌트가 state 를 공유하기 위해 store 를 사용한다.
 * - About 페이지는 컴포넌트의 state 는 life cycle 이 컴포넌트 자신이며,
 *   자식 컴포넌트에서만 사용하기 때문에 자신의 state 를 자식의 props 로 전달한다.
 *
 * 따라서 Home 의 store 는 Router View 에 존재하는 게 아니라 Store 에 state 가 존재하기 때문에
 * Hash 페이지가 바뀌어도 데이터가 유지되지만, About 의 state 는 Hash 페이지가 바뀌면 데이터의 수명이 종료된다.
 * */
export default class App extends Component {
  render() {
    const routerView = document.createElement("router-view");
    this.el.append(new Header().el, routerView);
  }
}
