import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMarsStroke, faPodcast } from '@fortawesome/free-solid-svg-icons';
import maleImage from '../../team-tracker-main/Photo/male.png';
import fbicon from '../../team-tracker-main/Icon/Facebook.png';
import twitter from '../../team-tracker-main/Icon/Twitter.png';
import youtube from '../../team-tracker-main/Icon/YouTube.png';
import femaleImage from '../../team-tracker-main/Photo/female.png';

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [details, setDetails] = useState({});
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.teams[0]))
    },[idTeam])

   const {strTeamBadge, strTeamBanner, strTeam, intFormedYear, strCountry, strSport, strDescriptionEN, strStadiumDescription, strGender} = details;
    return (
        <div>
            <div style={{backgroundImage: `url(${strTeamBanner})`}} className="details-banner container-fluid">
                <img src={strTeamBadge} alt=""/>
            </div>
            <div className="full-details-container container-fluid">
                <div className="details-info d-flex justify-content-between container">
                    <div className="info-div mt-3">
                        <h2>{strTeam}</h2>
                        <p><strong><FontAwesomeIcon icon={faPodcast} /> Founded: {intFormedYear}</strong></p>
                        <p><strong><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</strong></p>
                        <p><strong><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</strong></p>
                        <p><strong><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender}</strong></p>
                    </div>
                    <div className="gender-image-div mt-3">
                        {
                            strGender === "Male"? <img src={maleImage} alt=""/> : <img src={femaleImage} alt=""/>
                        }                        
                    </div>
                </div>

                <div className="container mt-4">
                    <p>{strDescriptionEN}</p>
                </div>
                <div className="container mt-4">
                    <p>{strStadiumDescription}</p>
                </div>
                <div className="social-media-link container">
                <a href= "https://twitter.com/manutd"> <img src={twitter} alt=""/></a>
                <a href="https://www.facebook.com/officialcpfc"><img src={fbicon} alt=""/></a>  
                <a href="https://www.youtube.com/channel/UCWB9N0012fG6bGyj486Qxmg"><img src={youtube} alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;