import { UserInterface } from "../interfaces/UserInterface";

export const store:any = {

    loggedInUser:{
        
        usersId:0,
        username:"",
        roles:{
            rolesId:0,
        }


    } as UserInterface,

    baseURL: "http//localhost:8080/"
}