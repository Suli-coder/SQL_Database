import "reflect-metadata"
import { DataSource } from "typeorm";
import { Customer } from "./Entities/customer";
import { Carts } from "./Entities/cart";
import { Product } from "./Entities/product";

export const AppDataSource= new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root", 
    password: "",
    database: "billing_database", 
    entities: [Customer, Carts, Product],
    synchronize: true,
    logging: false
});

