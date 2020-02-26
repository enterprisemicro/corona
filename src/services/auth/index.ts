import * as axios from 'axios';
export * from './action';

const loccalStorage = window.localStorage;

const auth = {
    /**
    * Logs a user in, returning a promise with `true` when done
    * @param  {string} username The username of the user
    * @param  {string} password The password of the user
    */
    login (username: string, password: string): Promise<any> {
      if (auth.loggedIn()) return Promise.resolve(true)
  
      // Post a fake request
      return axios.default.post('http://10.64.164.118:8080/user/login', {email: username, password: password}, {withCredentials: false, 
                        headers: {'Content-Type': 'application/json'}})
        .then((response: any) => {
          // Save token to local storage
          localStorage.setItem('user', JSON.stringify(response.data.result.user));
          return Promise.resolve(true);
        });
    },
    /**
    * Logs the current user out
    */
    logout () {
      localStorage.removeItem('user');
      return axios.default.post('/logout');
    },
    /**
    * Checks if a user is logged in
    */
    loggedIn () {
      return !!localStorage.getItem('user');
    },
    /**
    * Registers a user and then logs them in
    * @param  {string} username The username of the user
    * @param  {string} password The password of the user
    */
    register (username: string, password: string) {
      // Post a fake request
      return axios.default.post('/register', {username, password})
        // Log user in after registering
        .then(() => auth.login(username, password))
    },
    onChange () {}
  }
  
  export default auth;