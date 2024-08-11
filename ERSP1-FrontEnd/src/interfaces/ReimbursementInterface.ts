import { UserInfo } from "os"
import { UserInterface } from "./UserInterface"

export interface ReimbursementInterface{
    reimbursementsId?:number,
    description:string,
    amount:number
    status:string,
    users:UserInterface
}