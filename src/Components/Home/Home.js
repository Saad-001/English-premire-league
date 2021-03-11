import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';
import bannerImage from '../../finalfifa.jpg';
import websiteLogo from '../../Premier_League-Logo.wine.png';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() =>{
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(0, 15)))
    }, [])

    return (
        <div className="container-fluid home-page-container">
            <div className="website-title container-fluid text-center">
                <img src={websiteLogo} alt=""/>
                <h1>ENGLISH PREMIER LEAGUE</h1>
            </div>
            <div className="container-fluid pb-4 banner-image-div">
                <img className="banner-image" src={bannerImage} alt="" /> 
            </div>                
            <div className="teams-container row justify-content-center d-flex">
                {
                  teams.map(team => <Teams team={team}></Teams>)
                }
            </div>           
        </div>

    );
};

export default Home;