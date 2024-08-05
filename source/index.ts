import "reflect-metadata";
import {AppDataSource} from "./data-source";
import { Repository } from "typeorm";
import { Customer } from "./Entities/customer";
import { Product } from "./Entities/product";
import { Carts } from "./Entities/cart";


AppDataSource.initialize().then(async()=>{
    console.log("database connected")
    const custRepo: Repository<Customer> = AppDataSource.getRepository(Customer);
    const prodRepo: Repository<Product> = AppDataSource.getRepository(Product);
    const cartRepo: Repository<Carts> = AppDataSource.getRepository(Carts);




        
    const customers = await custRepo.find();
    console.log('All customers:', customers);
    const products = await prodRepo.find();
    console.log('All customers:', products);
    const carts = await cartRepo.find();
    console.log('All customers:', carts);

})
    .catch(async()=>{console.log("could not connect")})



