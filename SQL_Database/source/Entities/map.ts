import { Entity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";
import {Customer} from "./customer";

@Entity()
export class Map{
    @PrimaryGeneratedColumn()
    cartId!:number;
    @PrimaryColumn()
    custId!:Customer;    
}

