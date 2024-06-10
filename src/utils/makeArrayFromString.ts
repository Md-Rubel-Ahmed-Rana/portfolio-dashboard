const makeArrayFromString = (text: string = "") => {
  if (typeof text === "string") {
    const array = text?.split(",");
    return array;
  } else {
    return "";
  }
};

export default makeArrayFromString;
