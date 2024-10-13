import conf from "@/conf/config";
import { Client, Account, ID } from "appwrite";

// strict Note use appwriteversion npm install appwrite@13.0.1 do not use newer versions 
type CreateUserAccount = {
  email: string,
  password: string,
  name: string,
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const appwriteClient = new Client()

appwriteClient.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

export const account = new Account(appwriteClient);

class AppwriteService {
  async createUserAccount({ email, password, name }: CreateUserAccount) {
    try {
      const useraccount = await account.create(
        ID.unique(),
        email,
        password,
        name,
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
        return await account.createEmailSession(email , password)
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
  async logout(){
    try {
      return account.deleteSession("current")
    } catch (error) {
      throw error
    }
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

// -- failed project due to appwrite 