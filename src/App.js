import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import './style.scss';
import Logo from './logo.svg';

const App = () => {
    return (
        <div>
            <h1>Hello Parcel React</h1>
            <img src={Logo} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));