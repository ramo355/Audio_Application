import React from 'react';
import classes from './Home.module.css';
import Top from '../Top/Top';
import Slider from '../../components/UI/Slider/Slider';



const Home = () => {
    return (
        <div className={classes.Home}>
<Top />
<Slider />
        </div>
    )
};

export default Home;