import { getMovieCast } from 'API/get-API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container} from './Cast.styled'

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/';

const Cast = () => {
    const [state, setState] = useState([]);
    const [load, setload] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const abortController = new AbortController();


        getMovieCast(abortController, id).then(res => {
            setState(res.data.cast);
            setload(true);
        });

        return () => {
            abortController.abort();
        };
    }, [id]);

    return (
        <Container>
            {!load ? (
                <p>loading...</p>
            ) : state.length !== 0 ? (
                <ul>
                    {state.map(({ profile_path, name, character, id }) => (
                        <li key={id}>
                            <img
                                src={`${BASE_URL_IMG}${profile_path}`}
                                alt={name}
                                style={{ width: 100, height: 150 }}
                            />
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Sorry, we don't have any cast about this movie</p>
            )}
        </Container>
    );
};

export default Cast;