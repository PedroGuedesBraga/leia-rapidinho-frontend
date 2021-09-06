import React from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';
import './styles.css';
import { Bar } from 'react-chartjs-2';

const Profile = ({ name, lastName, email, level }) => {

    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                label: 'Palavras lidas',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    }

    return (
        <div className='profile-container'>
            <Card fluid>
                <Card.Content>
                    <Card.Header><h2>Pedro Braga</h2></Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Card.Description>
                        <Icon name='info' />
                            Fez <b>50</b> leituras sendo <b>20</b> fáceis, <b>20</b> médias e <b>10</b> difíceis
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Card.Header>Emblemas conquistados</Card.Header>
                    <Card.Description>
                        <div className="badge-list">
                            <i className='fas fa-dog fa-2x' />
                            <i className='fas fa-cat fa-2x' />
                            <i className='fas fa-kiwi-bird fa-2x' />
                            <i className='fas fa-fish fa-2x' />
                        </div>
                    </Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <Card.Header>Palavras lidas nos últimos 7 dias</Card.Header>
                    <Bar data={data}></Bar>
                </Card.Content>
            </Card>
        </div>
    )
}

export default Profile;