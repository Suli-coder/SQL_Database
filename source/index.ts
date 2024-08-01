import "reflect-metadata";
import {AppDataSource} from "./data-source";
import { DataSource, Repository } from "typeorm";
import { Customer } from "./Entities/customer";


AppDataSource.initialize().then(async()=>{
    console.log("database connected")
    const userRepo: Repository<Customer> = AppDataSource.getRepository(Customer);
   
    
    const customers = await userRepo.find();
    console.log('All customers:', customers);
})
    .catch(async()=>{console.log("could not connect")})



