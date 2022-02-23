import React from 'react';
import { Card, Typography } from '@material-ui/core/';
  
const TournamentTeamCard = ({ team }) => {

  return (
    <>
      <Card className='col-12 p-3' style={{backgroundColor: "whitesmoke"}}>
        <div >  
            <Typography className='text-left text-lg' variant="body2"> Head Couch: <span className='text-success'>{team.firstName + " " + team.lastName}</span></Typography>
        </div>
        <br/>
        <Typography className='text-center text-danger mt-2' variant="h5" component="h2">{team.teamName}</Typography>
      </Card>
    </>
      
  );
};

export default TournamentTeamCard;

