import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
    // react는 자동적으로 class component의 render method를 실행합니다.
    // class component 를 사용하는 이유는 state 때문
    // state 는 동적인 데이터를 저장할 수 있습니다.
    state = {
        count: 0,
        isLoading: true
    };
    //직접  state 값에 접근하게 되면 안된다는 에러 발생 -> setState() 이용
    // 직접 값을 변경하게 되면 변경 되어도 Render 함수가 호출되지 않음
    // -> setState 함수는 값 설정이후 Render함수 호출 -> View Refresh -> component life cycle 에서 updating 실행
    add = () => {
        // this.setState({count: this.state.count + 1});
        // 위와 같이 직접 state를 가져와서 사용하면 성능 문제 발생 : 외부 상태에 의존하게 됨
        this.setState(current => ({count: current.count + 1}));
    }
    minus = () => {
        this.setState(current => ({count: current.count - 1}));
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 6000)
    }

    render() {
        const isLoading = this.state.isLoading
        return isLoading ? <div>Loading...</div> : (<div>
            <h1>The Number is {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>);
    }

// button onclick 에 function() 라고 소괄호를 추가 하면 코드를 읽는 즉시 실행이라는 의미
// -> ()는 생략하여 콜백의 의미를 부여
}

export default App;

/*
리액트는 각 컴포넌트 마다 life cycle method 를 가지는데 기본적으로 리액트가 컴포넌트를 생성하고 삭제하는 방법이다.
mounting:생성 updating:수정 unmounting:삭제
*/
