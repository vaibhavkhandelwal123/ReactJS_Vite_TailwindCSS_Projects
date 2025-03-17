import config from '../config/config'
import { Client, Account, ID} from "appwrite";
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteprojectId)

        this.account = new Account(this.client);
    }

    async createUserAccount(email,password,name) {

        try {
            const UserAccount = await this.account.create(ID.unique(),email,password,name)
            if (UserAccount) {
                return this.userLogin(email,password);
            } else {
                return UserAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }

    async userLogin (email,password){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
            
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }
        return null;
    }

    async userLogout(userId){

        try {
            await this.account.deleteSessions(userId);
        } catch (error) {
            throw error;
        }

    }
}


const authService = new AuthService()

export default authService