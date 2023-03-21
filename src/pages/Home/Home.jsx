import { getPopularMovies } from 'API/get-API';
import { useEffect, useState } from 'react';
import ListMovies from 'components/ListMovies';


const Home = () => {
    const [stateMovies, setStateMovies] = useState([]);
const [load, setload] = useState(false)


    useEffect(() => {
        const abortController = new AbortController();

        getPopularMovies(abortController)
        .then(res =>
            {
                setStateMovies(res.data.results)
            setload(true)
        }
        );

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            {load && stateMovies && <ListMovies listMovies={stateMovies} />}
        </>
    );
};


export default Home;