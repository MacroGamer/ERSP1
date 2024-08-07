import { RoleInterface } from "./RoleInterface"

export interface UserInterface{
    usersId?:number,
    firstName:string,
    lastName:string
    username:string
    password:string
    roles:RoleInterface
}