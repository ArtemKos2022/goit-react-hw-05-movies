import { getMovieReviews } from 'API/get-API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Title, Text } from './Reviews.styled';

const Reviews = () => {
    const { id } = useParams();
    const [state, setSteta] = useState([]);
    const [load, setload] = useState(false);

    useEffect(() => {
        const abortController = new AbortController();

        getMovieReviews(abortController, id).then(res => {
            setSteta(res.data.results);
            setload(true);
        });

        return () => {
            abortController.abort();
        };
    }, [id]);

    return (
        <div>
        {!load ? <p>loading...</p> :
            state.length !== 0 ? (
                state.map(({ author, content, id }) => (
                    <Container key={id}>
                        <Title>{author}</Title>
                        <Text>{content}</Text>
                    </Container>
                ))
            ) : (
                <p>Sorry, we don't have any reviews about this movie</p>
            )}
        </div>
    );
};

export default Reviews;