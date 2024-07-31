import "reflect-metadata"
import { DataSource } from "typeorm";
import { Customer } from "./Entities/customer";

const dataBase= new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root", 
    password: "mscMZeoZ@l5",
    database: "billing_database", 
    entities: [Customer],
    synchronize: true,
    logging: false
});

export default dataBase
