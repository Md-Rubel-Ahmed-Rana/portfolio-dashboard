const makeArrayFromString = (text: string = "") => {
  const array = text?.split(",");

  return array;
};

export default makeArrayFromString;
