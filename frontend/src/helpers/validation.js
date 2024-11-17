export const validateEmail = (email) => {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return gmailRegex.test(email);
};

export const isValidPhoneNumber = (phoneNumber) => {
  // Regular expression to validate a 10-digit phone number
  const phoneRegex = /^\d{10}$/;

  return phoneRegex.test(phoneNumber);
};
