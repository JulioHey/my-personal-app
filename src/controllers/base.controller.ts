import { Request, Response } from "express";
import BaseService from "../services/base.service";


export default class BaseController{

    service: BaseService<any>
    constructor(service: BaseService<any>){
        this.service = service
    }

    post = async(req: Request, res: Response) => {
        try {
            const resource = await this.service.post(req.body)
            return res.send(resource)
        } catch(err){
            return res.json(err)
        }
    }

    get = async(req: Request, res: Response) => {
        try {
            const resource = await this.service.get(req.body)
            return res.send(resource)
        } catch(err){
            return res.json(err)
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const resource = await this.service.getById(id);
            return res.send(resource)
        } catch(err) {
            return res.json(err)
        }
    }

    remove = async (req: Request, res: Response) => {
        try{
            const { id } = req.params
            const resource = await this.service.remove(id)
            return res.send(resource)
        } catch(err) {
            return res.json(err)
        }
    }

} 