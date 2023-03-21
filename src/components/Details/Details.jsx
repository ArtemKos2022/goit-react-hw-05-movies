import { Img, Wraper, Text, Detail, Title } from './Details.styled';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropTypes from 'prop-types';

const Details = ({ movie, baseUrl }) => {
    const { poster_path, release_date, title, vote_average, overview, genres } =
        movie;
    return (
        <Detail>
            <Wraper>
                <Img src={`${baseUrl}${poster_path}`} alt={title} />
                <div>
                    <h2>
                        {title} ({release_date.slice(0, 4)})
                    </h2>
                    <Text>User score: {Math.floor(vote_average * 10)}%</Text>
                    <h3>Overview</h3>
                    {overview ? (
                        <Text>{overview}</Text>
                    ) : (
                        <Text>Not found</Text>
                    )}
                    <h4>Ganres</h4>
                    {genres.map(({ id, name }) => (
                        <Text key={id}>{name}</Text>
                    ))}
                </div>
            </Wraper>
            <Title>Additional information</Title>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<div>loading..</div>}>
                <Outlet />
            </Suspense>
        </Detail>
    );
};

Details.propTypes = {
    movie: PropTypes.object.isRequired,
    baseUrl: PropTypes.string.isRequired,
};

export default Details;