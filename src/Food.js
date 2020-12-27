import React from 'react'
//해당 주석이 있어야 해당 js 파일이 리액트 어플리케이션임을 인식
import PropTypes from 'prop-types'

const foodList = [
    //각 component 는 서로를 구분할 key 값이 존재해야 합니다 -> id 부여
    {
        id: 1,
        name: "Kimchi",
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        rating: 5.2
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 4.4
    },
    {
        id: 3,
        name: "Bibimbap",
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 3.2
    },
    {
        id: 4,
        name: "Doncasu",
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 4.3
    },
    {
        id: 5,
        name: "Kimbap",
        image:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 4.7
    }
];

function renderFood(dish) {
    return <Food name={dish.name} picture={dish.image}/>
}

// child component
function Food({name, picture, rating}) {
    return <div>
        <h1>I Like {name}</h1>
        <h3>{rating}/5.0</h3>
        <img src={picture} alt={name}/>
    </div>;
}

// 다음과 같이 인자에서 원하는 key 값만 전달 받을 수 있습니다.
// function Food({fav,something}){
//     return <h3>I Like {fav} {something}</h3>
// }

/*
component 에서 넘기는 데이터가 정상적인이 아닌지를 판별해주는 것 -> prop types
npm i prop-types
datatype 과 required를 체크할 수 있다
propTypes 는 다른 이름이 아닌 'propTypes' 라고 지어야한 인식을 합니다.
*/
Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number,
};

// father component
function Food() {
    return (
        <div>
            {foodList.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}

        </div>
    );
}

// component에 데이터를 전달 할 수 있다
// 전달하는 값은 key,value 형태로 해당 함수의 args 로 전달되고 dict 형태를 가진다.
//prop = fav , value kimchi
export default Food;

// Component 는 html을 반환하는 함수 -> App.js 와 같은 기능
