import React from 'react';
import './Teams.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Teams = (props) => {
    // console.log(props);
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;

    const history = useHistory();
    const handleClick = (idTeam) => {
        const url = `/details/${idTeam}`
        history.push(url)
    }
    return (
        <div className="col-md-3 mb-4">
            <div className="card justify-content-center text-center" style={{ width: "18rem" }}>
                <img src={strTeamBadge} className="card-img-top card-image mt-3" alt="..." />
                <div className="card-body card-body-size">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text">{strSport}</p>
                    <Button onClick={() => handleClick(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </div>
            </div>
        </div>


        // {/* // <Card className="col-md-4 text-center" style={{ width: '18rem' }}>
        // //     <Card.Img className="card-image" variant="top" src={strTeamBadge} />
        // //     <Card.Body>
        // //         <Card.Title>{strTeam}</Card.Title>
        // //         <Card.Text>{strSport}</Card.Text>
        // //         <Button onClick={() => handleClick(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
        // //     </Card.Body>
        // // </Card> */}
    );
};

export default Teams;