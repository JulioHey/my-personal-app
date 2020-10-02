import 'reflect-metadata';
import {
    getRepository
} from 'typeorm';

import  Team from '../models/team.entity';

interface ITeamRepo {
    addTeam(newTeamName: string): Promise<Team>,
    updateTeam(newTeamName: string): Promise<Team>,
    removeTeam(teamId: number): Promise<Team>,
    getTeamById(teamId: number): Promise<Team>,
    getTeams(): Promise<Team[]>,
}

export {ITeamRepo};

class TeamRepo implements ITeamRepo {
    async addTeam(teamName: string) {
        const teamRepo = await getRepository(Team);

        const newTeam = await teamRepo.create({
            teamName
        });

        return newTeam;
    }

    async updateTeam(teamName: string) {
        const teamRepo = await getRepository(Team);

        const newTeam = await teamRepo.create({
            teamName
        });

        return newTeam;
    }

    async removeTeam(teamId: number) {
        const teamRepo = await getRepository(Team);

        const newTeam = await teamRepo.create({
            teamName: "pain"
        });

        return newTeam;
    }

    async getTeamById(teamId: number) {
        const teamRepo = await getRepository(Team);

        const newTeam = await teamRepo.create({
            teamName: 'Pain'
        });

        return newTeam;
    }

    async getTeams() {
        const teamRepo = await getRepository(Team);

        const newTeam = await teamRepo.create({
            teamName: "pain"
        });

        return [newTeam];
    }
};
