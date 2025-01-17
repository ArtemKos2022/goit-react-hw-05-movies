import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Link to="/">
                    Home
                </Link>
                <Link to="/movies">Movies</Link>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default SharedLayout;