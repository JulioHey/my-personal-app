import { Request, Response } from "express";

export interface ITeamController {
    handleAddTeam: (request: Request, response: Response) => Promise<Response<any>>;
}

export interface ITeamRepo {
    addTeam(newTeamName: string): Promise<any> ,
}
