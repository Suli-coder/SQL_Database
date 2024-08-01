import "reflect-metadata"
import { DataSource } from "typeorm";
import { Customer } from "./Entities/customer";

export const AppDataSource= new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root", 
    password: "",
    database: "billing_database", 
    entities: [Customer],
    synchronize: true,
    logging: false
});

