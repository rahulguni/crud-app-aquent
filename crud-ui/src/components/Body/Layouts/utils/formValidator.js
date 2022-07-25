/* eslint-disable */

export const validForm = (object) => {
  for (const field in object) {
    if (object[field] === "") {
      return false;
    }
  }
  return true;
};

export const validRequest = (responseHeader) => {
  if (responseHeader.status === 500) {
    return false;
  } else {
    return true;
  }
};

export const validCommonField = (fieldName) => {
  return fieldName.length < 1 || fieldName.length > 50 ? false : true;
};

export const validPhone = (phone) => {
  const re = new RegExp(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/);
  return re.test(phone);
};

export const validEmail = (email) => {
  const re = new RegExp(
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  return re.test(email);
};

export const validURI = (companyURI) => {
  const validURI = "https://" + companyURI;
  const re = new RegExp(
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
  );
  return re.test(validURI);
};

export const validZIP = (zipCode) => {
  const isValidZip = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
  return isValidZip.test(zipCode);
};

export const enablePersonFormButtons = (person) => {
  const checkPerson = { ...person };
  delete checkPerson.personId;
  delete checkPerson.clientId;
  for (const field in checkPerson) {
    if (!validCommonField(checkPerson[field])) return false;
  }
  if (
    validPhone(checkPerson.phone) &&
    validEmail(checkPerson.emailAddress) &&
    validZIP(checkPerson.zipCode)
  ) {
    return true;
  }
  return false;
};

export const enableClientsFormButtons = (client) => {
  const checkClient = { ...client };
  delete checkClient.clientId;
  for (const field in checkClient) {
    if (!validCommonField(checkClient[field])) return false;
  }
  if (
    validPhone(client.phone) &&
    validURI(client.companyURI) &&
    validZIP(checkClient.zipCode)
  ) {
    return true;
  }
  return false;
};
