// export const getUser = () => {
//   if (localStorage.getItem("user") !== null) {
//     return JSON.parse(localStorage.getItem("user"));
//   } else return null;
// };

// export const getToken = () => {
//   return localStorage.getItem("custId") || null;
// };

// export const removeUserSession = () => {
//   localStorage.removeItem("custId");
//   localStorage.removeItem("user");
// };

// export const setUserSession = (token, user) => {
//   localStorage.setItem("custId", token);
//   localStorage.setItem("user", JSON.stringify(user));
// };

export const getUser = () => {
  if (localStorage.getItem("user") !== null) {
    return JSON.parse(localStorage.getItem("user"));
  } else return null;
};

export const getLogindetails = (user) => {
  if (localStorage.getItem(user) !== null) {
    return localStorage.getItem(user);
  } else return null;
};

export const getToken = () => {
  return localStorage.getItem("custId") || null;
};

export const removeUserSession = () => {
  localStorage.removeItem("custId");
  localStorage.removeItem("user");
};

export const deleteToken = () => {
  localStorage.removeItem("custId");
  // sessionStorage.removeItem(username+"Token");
};
export const setUserSession = (user) => {
  localStorage.setItem(user.name, JSON.stringify(user));
  localStorage.setItem(user.username, user.password);
};
export const setTokenSession = (token, username) => {
  localStorage.setItem("custId", token);
  localStorage.setItem(username + "Token", token);
};
