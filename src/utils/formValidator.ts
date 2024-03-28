export const validateForm = (formObject: any) => {
  const finalObject: any = {};
  // I will get an object
  // extract keys and make an array with keys
  const fields = Object.keys(formObject);
  // loop throw the array
  fields.forEach((field) => {
    if (formObject[field]) {
      const object = {
        error: false,
        name: field,
      };
      finalObject[field] = object;
      finalObject.isValidated = true;
    } else {
      const object = {
        name: field,
        error: true,
        message: `${field} is required`,
      };
      finalObject[field] = object;
      finalObject.isValidated = false;
    }
  });
  // access the object with the looped key dynamically
  // check the value weather have or not
  // create a new object with every key and make object for every key with validate: true | false, message
  // finally return the object
  return finalObject;
};
