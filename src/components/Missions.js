import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((missoes) => (
            <MissionCard
              key={ missoes.name }
              name={ missoes.name }
              year={ missoes.year }
              country={ missoes.country }
              destination={ missoes.destination }
            />
          ))
        }
      </div>
    );
  }
}

export default Missions;
