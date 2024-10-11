import { config } from "@/config/config";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  username: string;
  email: string;
  password: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client();
appwriteClient
  .setEndpoint(config.appwriteUrl)
  .setProject("next-meets-appwrite");

export const account = new Account(appwriteClient);

class AppwriteService {
  async createUserAccount({ username, email, password }: CreateUserAccount) {
    try {
      const useraccount = await account.create(
        ID.unique(),
        username,
        email,
        password
      );
      if (useraccount) {
        return this.loginUserAccount({ email, password });
      } else {
        return useraccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async loginUserAccount({ email, password }: LoginUserAccount) {
    try {
        return await account.createEmailPasswordSession(email , password)
    } catch (error) {
        throw error
    }
  }
  async isLoggedin():Promise<boolean>{
    try {
        const data = await this.getCurrentUser()
        return Boolean(data)
    } catch (error){}
    return false
  }
  async getCurrentUser(){
    try {
        return account.get()
    } catch (error) {
        console.log("get current user :",error)
    }
  }
}

export const appwriteService =new AppwriteService()