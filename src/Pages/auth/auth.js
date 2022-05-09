import Cookies from 'universal-cookie';

class Auth{

    constructor(){
        this.authenticated = false;
    }

    login(cb){
        this.authenticated = true;
        cb();
    }

    logout(cb){
        this.authenticated = false;
        cb();
    }

    //if their is data in the session storage, then they are authenticated
    isAuthenticatedFromSessionStorage(){
        if(sessionStorage.length > 0){
            let auth = JSON.parse(sessionStorage.getItem('user')).authenticated;
            if(auth === 'true'){
                this.authenticated = true;
            }
        }
        return this.authenticated;
    }
    // if their is data in cookies, then they are authenticated
    isAuthenticatedFromCookies(){
        const cookies = new Cookies();

        if(document.cookie.length > 1){
            if(cookies.get('user').authenticated === 'true'){
                this.authenticated = true;
            }
        }
        return this.authenticated;
    }

    //if the data chaneg is session storage the change the state of the authenticated
    changeAuthentication(cb){
        this.authenticated = !this.authenticated;
        cb();
    }

    isAuthenticated(){
        this.isAuthenticatedFromCookies();
        this.isAuthenticatedFromSessionStorage();
        return this.authenticated;
    }
}
export default new Auth();