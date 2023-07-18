const KEY_USER = 'user';

export const saveUserToLocalStorage = (user) => {
  try {
    let users = JSON.parse(localStorage.getItem(KEY_USER)) || [];
    users = [...users, user];
    localStorage.setItem(KEY_USER, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving user to local storage:', error);
  }
};

export const getUserFromLocalStorage = () => {
  try {
    const userFromLocalStorage = localStorage.getItem(KEY_USER);
    return userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null;
  } catch (error) {
    console.error('Error getting user from local storage:', error);
    return null;
  }
};

export const clearUserFromLocalStorage = () => {
  try {
    localStorage.removeItem(KEY_USER);
  } catch (error) {
    console.error('Error clearing user from local storage:', error);
  }
};
