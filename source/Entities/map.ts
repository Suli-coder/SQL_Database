import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import {Customer} from "./customer";
import {Carts } from "./cart";

@Entity()
export class Map{
    @PrimaryColumn()
    cartId!: number;

    @PrimaryColumn()
    custId!: number;
    
    
    @ManyToOne(() => Carts, cart => cart.cartId)
    @JoinColumn({ name: 'cartId' })
    cart!: Carts;

    @ManyToOne(() => Customer, customer => customer.custId)
    @JoinColumn({ name: 'custId' })
    customer!: Customer;  
}

