import React from 'react';
import { useDispatch } from "react-redux";
import { useHistory, Switch, Route } from 'react-router-dom';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core/';
import { getevent } from 'actions/event';
import moment from 'moment';
  
const TournamentCard = ({ tournament }) => {
  const dispatch = useDispatch();   
  const history = useHistory();  

  return (
    <>
      <Card className='col-12 p-3' style={{backgroundColor: "whitesmoke"}}>
        <div >  
            <Typography className='text-left' variant="body2"> Tournament Director: <span className='text-success'>{tournament.createdBy}</span></Typography>
            <Typography className='text-secondary mt-1' variant="body2">Created {moment(tournament.createdAt).fromNow()}</Typography>
        </div>
        <br/>
        <div className='btn btn-danger'> Teams Enrolled:  {tournament.teamsCount}</div><br/>
        <div className='btn btn-danger mt-1'> Remaining Seats:  {tournament.maxTeamsNum - tournament.teamsCount}</div>
        <Typography className='text-center text-danger mt-2' variant="h5" component="h2">{tournament.eventName}</Typography>
        <CardContent>
            <Typography className='text-center text-secondary'  component="h2">{tournament.fieldComplexName}</Typography>
            <Typography className='text-center text-secondary'>{tournament.fieldComplexCity}, {tournament.fieldComplexState}</Typography>
        </CardContent>
        <CardActions >
          <button className='btn btn-success' onClick={() => dispatch(getevent(tournament._id, history))}> Visit </button>
        </CardActions>
      </Card>
    </>
      
  );
};

export default TournamentCard;

