import { Request, Response } from "express";
import BaseService from "../services/base.service";


export default class BaseController{

    service: BaseService<any>
    constructor(service: BaseService<any>){
        this.service = service
    }

    post = async(req: Request, res: Response) => {
        try {
            const resource = await this.service.post(req.body);

            if (resource.Error) {
                return res.status(401).json(resource.Error)
            }
            return res.status(200).send(resource);
        } catch(err){
            return res.status(401).json(err)
        }
    }

    get = async(req: Request, res: Response) => {
        try {
            const resource = await this.service.get(req.body);
            return res.send(resource)
        } catch(err){
            return res.status(401).json(err)
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const { relations } = req.body;

            const resource = await this.service.getById(id, relations as string[]);
            return res.send(resource)
        } catch(err) {
            return res.json(err)
        }
    }

    remove = async (req: Request, res: Response) => {
        try{
            const { id } = req.params;
            const resource = await this.service.remove(id);
            return res.send(resource)
        } catch(err) {
            return res.status(401).json(err)
        }
    }

    update = async (req: Request, res: Response) => {
        try{
            const {id} = req.params;
            const data = req.body;
            const updatedData: any = await this.service.update(id, data);
            
            if (updatedData.Error) {
                return res.status(401).json(updatedData.Error);
            }

            return res.json(updatedData);
        }catch(err) {
            return res.status(401).json(err)
        }
    }
} 