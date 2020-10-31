import {App} from '../../../src/app';
import appRouter from '../../../src/routes';
import request from 'supertest';
import { Connection, createConnection } from 'typeorm';
import {options} from '../../database.service';

describe("Teams", () => {
    const app = new App(appRouter);
    let connection: Connection;

    beforeAll(async (done) => {
        connection = await createConnection(options);

        done();
    });

    afterEach(async (done) => {
        await connection.query("DELETE FROM teams");

        done();
    })

    afterAll(async (done) => {
        await connection.close();

        done();
    });

    it("should fail if miss information", async () => {
        const response = await request(app.app)
            .post("/team")
            .send({
                "teamPosition": "1"
            });
        
        expect(response.status).toBe(401);
    });

    it("should succesed if no miss information", async () => {
        const response = await request(app.app)
            .post("/team")
            .send({
                "teamName": "Kabum",
                "teamPosition": "1"
            });
        
        expect(response.status).toBe(200);
    });

    it("should fail if team already exists ", async () => {
        await request(app.app)
            .post("/team")
            .send({
                "teamName": "Kabum",
                "teamPosition": "1"
            });
        
        const response = await request(app.app)
            .post("/team")
            .send({
                "teamName": "Kabum",
                "teamPosition": "1"
            });

            expect(response.status).toBe(401);
    });

    it("shouldnt update team if it doesnt exist", async () => {
        const response = await request(app.app)
        .put("/team/1")
        .send({
            "userId": "1",
            "teamName": "Kabum",
            "teamPosition": "1"
        });

        expect(response.status).toBe(401);
    });
    
    it("should update team if it exist", async () => {
        const {body: team} = await request(app.app)
            .post("/team")
            .send({
                "teamName": "Kabum",
                "teamPosition": "1"
            });

        const response = await request(app.app)
        .put(`/team/${team.teamId}`)
        .send({
            "teamId": `${team.teamId}`,
            "teamName": "Flamengo",
            "teamPosition": `${team.teamPosition}`
        });

        expect(response.status).toBe(200);
    });

    it("should delete", async () => {
        const {body: team} = await request(app.app)
            .post("/team")
            .send({
                "teamName": "Kabum",
                "teamPosition": "1"
            });

        const {body: deletedTeam} = await request(app.app)
            .del(`/team/${team.teamId}`)
            .send()

        const isExpected = team.teamName == deletedTeam.teamName;

        expect(isExpected).toBe(true);
    });

    it("shouldnt delete", async () => {
        const {status} = await request(app.app)
            .del(`/team/1`)
            .send()

        expect(status).toBe(401)
    });
});