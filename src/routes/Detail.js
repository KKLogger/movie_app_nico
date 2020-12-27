import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state === undefined) {
      return null;
    } else {
      return <h1>{location.state.title}</h1>;
    }
  }
}

export default Detail;
//class component 에서는 props 를 인자로 받을 필요 없이 this.props에 모두 저장됩니다.
