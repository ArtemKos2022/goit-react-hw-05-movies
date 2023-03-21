import { useParams, useLocation,} from 'react-router-dom';
import { getMovie } from 'API/get-API';
import { useEffect, useState, useRef } from 'react';
import Details from "../../components/Details"
import ButtonToBack from 'components/ButtonToBack';

const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';
    const prevLoc = useRef(backLinkHref)


    useEffect(() => {
        const abortController = new AbortController();

        getMovie(abortController, id).then(res => setMovie(res.data));

        return () => {
            abortController.abort();
        };
    }, [id]);

    return (
        <>
            <ButtonToBack prevLoc={prevLoc} />

            {movie && (
                <Details movie={movie} baseUrl={BASE_URL_IMG}/>
            )}
        </>
    );
};

export default MovieDetails;