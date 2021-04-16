import React from 'react';
import classes from './Home.module.css';
import Top10 from '../../components/Top10/Top10';
import SimpleSlider from '../../components/UI/Slider/Slider';



const Home = () => {
    return (
        <div className={classes.Home}>
<Top10 />
<SimpleSlider />
        </div>
    )
};

export default Home;