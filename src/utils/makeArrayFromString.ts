const makeArrayFromString = (text: string = "") => {
  if (text) {
    const array = text?.split(",");
    return array;
  } else {
    return "";
  }
};

export default makeArrayFromString;
