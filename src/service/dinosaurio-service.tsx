import axios from "axios";
import type { IDinosaurio } from "../model/dinosaurio-interface";

const URL= "http://localhost:3000/dinosaurio";

export class DinosaurioService{
    async getAll(){
        const response=await axios.get(URL);
        return response.data;
    }

    async insert(data:IDinosaurio){
        await axios.post(URL, data);
    }

    async update(id:string, data: IDinosaurio){
        await axios.put(`${URL}/${id}`, data);
    }

    async delete(id: string){
        await axios.delete(`${URL}/${id}`);
    }
}