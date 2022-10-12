import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { ALL_COUNTRIES } from '../config';

export const HomePage = () => {
    const [countries, setCountries] = useState([]);
    
    const push = useNavigate();

    console.log(countries);
    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({data}) => setCountries(data)
        )
    }, [])
    return (
    <>
        <Controls />
        <List>
            {countries.map ((c) => {
                const countryInfo = {
                    img: c.flags.png,
                    name: c.name,
                    info: [
                        {
                            title: 'Population',
                            description: c.population.toLocaleString()
                        },
                        {
                            title: 'Region',
                            description: c.region
                        },
                        {
                            title: 'Population',
                            description: c.population
                        },
                    ],
                };

                return (
                    <Card 
                        key={c.name} 
                        onClick={() => push(`/country/${c.name}`)} 
                        {...countryInfo} 
                    />
                );
            })}
        </List>
    </>
    );
};