import {App} from '../../../src/app';
import appRouter from '../../../src/routes';
import request from 'supertest';
import { createConnection } from 'typeorm';
import {options} from '../../database.service';

describe("Champions", () => {
    const app = new App(appRouter);
    let connection;

    beforeAll(async () => {
        connection = await createConnection(options);
    });

    beforeEach(async () => {
        const {body: champions} = await request(app.app)
        .get("/champion")
        .send({});
    
        if (champions[0]) {
            await Promise.all(await champions.map( async champion => {
                const {body} = await request(app.app)
                    .del(`/champion/${champion.championId}`)
                    .send({});
            })
            );
        }
    });

    afterAll(async () => {
        await connection.close();
    });

    it("Add entity", async () => {
        const {status} = await request(app.app)
            .post("/champion")
            .send({
                "championName": "Darius"
            });

        expect(status).toBe(200);
    });

    it("Fail if entity already exists", async () => {
        await request(app.app)
            .post("/champion")
            .send({
                "championName": "Darius"
            });
        
        const {status} = await request(app.app)
            .post("/champion")
            .send({
                "championName": "Darius"
            });

        expect(status).toBe(401);
    });

    
    it("Should fail if miss information", async () => {
        const {status} = await request(app.app)
            .post("/champion")
            .send({
            });

        expect(status).toBe(401);
    });

    it("Update if exist", async () => {
        const {body: champion} = await request(app.app)
            .post("/champion")
            .send({
                "championName": "Darius"
            });
        
        const {status} = await request(app.app)
            .put(`/champion/${champion.championId}`)
            .send({
                "championName": "Akali"
            });

        expect(status).toBe(200);
    });

    it("Fail update id dont exists", async () => {
        const {status} = await request(app.app)
            .put(`/champion/f`)
            .send({
                "championName": "Akali"
            });

        expect(status).toBe(401);
    });

    
    it("Should delete if exists", async () => {
        const {body: champion} = await request(app.app)
            .post("/champion")
            .send({
                "championName": "Darius"
            });
        
        const {status} = await request(app.app)
            .del(`/champion/${champion.championId}`)
            .send({});

        expect(status).toBe(200);
    });

    it("Should fail delete if dont exist", async () => {
        const {status} = await request(app.app)
            .del(`/champion/f`)
            .send({
                "championName": "Akali"
            });

        expect(status).toBe(401);
    });

});