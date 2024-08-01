import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import {Product} from "./product";
import {Map} from "./map";

@Entity()
export class Cart{
    @PrimaryColumn()
    cartId!:Map;
    
    //many products can be in one cart; so one to mnay, cart to products
    @PrimaryColumn()
    prod!:Product;

    @Column()
    quantity!:number;
}

export default Cart;