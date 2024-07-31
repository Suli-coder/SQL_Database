import "reflect-metadata";
import dataBase from "./data-source";

dataBase.initialize().then(async()=>{
    console.log("database connected")})
    .catch(async()=>{console.log("could not connect")})
