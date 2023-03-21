import { useForm } from 'react-hook-form';
import { Form, Input, Button } from './SearchMovies.styled';
import PropTypes from 'prop-types';


const SearchMovies = ({handelSubmit}) => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = ({name}) => {
if(!name.trim()) {
  
  return
};

    handelSubmit(name)
    reset()
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input defaultValue={''} {...register('name')} autoFocus/>
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchMovies.propTypes = {
  handelSubmit: PropTypes.func.isRequired
}

export default SearchMovies;