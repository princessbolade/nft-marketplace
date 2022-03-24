const useForm = (initialState) => {
  const [state, setState] = React.useState(initialState);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.formName]: event.target.value,
    });
  };
  return [state, handleChange];
};

export default useForm;
