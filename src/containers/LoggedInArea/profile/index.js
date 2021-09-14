import React, { useEffect, useState } from 'react';
import { Card, Icon, Loader } from 'semantic-ui-react';
import './styles.css';
import { Bar } from 'react-chartjs-2';

const Profile = ({ getProfile }) => {

    const [profileData, setProfileData] = useState({
        "wordsSummary": {
            "easy": 0,
            "medium": 0,
            "hard": 0
        },
        "chartData": [],
        "name": "",
        "lastName": ""
    });

    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            setLoader(true);
            const profile = await getProfile();
            profile.chartData.reverse();
            console.log(JSON.stringify(profile))
            setProfileData(profile);
            setLoader(false);
        } catch (err) {
            setLoader(false);
            setError(true);
        }
    }

    const showHappyEmoji = profileData.wordsSummary.easy > 20;
    const showVeryHappyEmoji = showHappyEmoji && profileData.wordsSummary.medium > 50;
    const showSuperHappyEmoji = showVeryHappyEmoji && profileData.wordsSummary.hard > 80;

    const data = {
        labels: ['Mais antiga', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', 'Mais recente'],
        datasets: [
            {
                label: 'Palavras lidas',
                data: profileData.chartData,
                fill: false,
                backgroundColor: 'orange',
                borderColor: 'rgba(102, 102, 132, 0.2)',
            },
        ],
    }

    return (
        <div className='profile-container'>
            {loader ?
                <Loader inverted active />
                :
                error ?
                    <Card fluid>
                        <Card.Content> Ocorreu um erro ao tentar carregar perfil. Tente novamente</Card.Content>
                    </Card>
                    :
                    <Card fluid>
                        <Card.Content>
                            <Card.Header><h2>{profileData.name} {profileData.lastName}</h2></Card.Header>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Description>
                                <Icon name='info' />
                            Leu <b>{profileData.wordsSummary.easy}</b> fáceis, <b>{profileData.wordsSummary.medium}</b> médias e <b>{profileData.wordsSummary.hard}</b> difíceis
                    </Card.Description>
                        </Card.Content>
                        <Card.Content>
                            <Card.Header>Emblemas conquistados</Card.Header>
                            <Card.Description>
                                <div className="badge-list">
                                    {showHappyEmoji && <i class="far fa-3x fa-grin"></i>}
                                    {showVeryHappyEmoji && <i class="far fa-3x fa-grin-squint"></i>}
                                    {showSuperHappyEmoji && <i class="far fa-3x fa-grin-squint"></i>}
                                    {
                                        !showHappyEmoji && !showVeryHappyEmoji && !showSuperHappyEmoji &&
                                        <p>Nenhum emblema consquistado</p>
                                    }
                                </div>
                            </Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                            <Card.Header>Palavras lidas nas ultimas 15 partidas</Card.Header>
                            <Bar options={options} data={data}></Bar>
                        </Card.Content>
                    </Card>
            }
        </div>
    )
}

export default Profile;