var React = require('react');
var ReactDOM = require('react-dom');

var obj1 ={
    name : 'Akash',
    city : 'delhi'
}

var obj2 = {
    ...obj1,
    occupation : 'student'
}

console.log(obj2);

ReactDOM.render(
    <h1>BoilerPlate is working</h1>,
    document.getElementById('app')
);
