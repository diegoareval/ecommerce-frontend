const validations = {
  password:  { required: true, min: 6 },
   name:  { required: false, min: 4 },
  email: { required: true, min: 4, max: 12, 
    pattern:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/}
};

export default validations