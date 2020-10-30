import {App} from '../../../src/app';
import appRouter from '../../../src/routes';
import request from 'supertest';
import { createConnection } from 'typeorm';
import {options} from '../../database.service';

describe("Rounds", () => {
    const app = new App(appRouter);
    let connection;

    beforeAll(async () => {
        connection = await createConnection(options);
    });

    beforeEach(async () => {
        const {body: rounds} = await request(app.app)
        .get("/round")
        .send({});
    
    if (rounds[0]) {
        await Promise.all(await rounds.map( async round => {
            const {body} = await request(app.app)
                .del(`/round/${round.roundId}`)
                .send({});
        })
        );
    }
    })

    afterAll(async () => {
        await connection.close();
    });

    it("Add entity", async () => {
        const {status} = await request(app.app)
            .post("/round")
            .send({
                "roundNumber": "1",
                "roundDate": "1",
            });

        expect(status).toBe(200);
    });

    it("Fail if entity already exists", async () => {
        await request(app.app)
            .post("/round")
            .send({
                "roundNumber": "1",
                "roundDate": "1",
            });

        const {status} = await request(app.app)
            .post("/round")
            .send({
                "roundNumber": "1",
                "roundDate": "1",
            });

        expect(status).toBe(401);
    });

    it("Should fail if miss information", async () => {
        const {status} = await request(app.app)
            .post("/round")
            .send({
                "roundNumber": "1",
            });

        expect(status).toBe(401);
    });

    it("Update if exist", async () => {
        const {body: round} = await request(app.app)
            .post("/round")
            .send({
                "roundNumber": "1",
                "roundDate": "1",
            });

            const {status} = await request(app.app)
            .put(`/round/${round.resource.roundId}`)
            .send({
                "roundNumber": "1",
                "roundDate": "2",
            });

        expect(status).toBe(200);
    });

    it("Fail update id dont exists", async () => {
        const {status} = await request(app.app)
        .put(`/round/f`)
        .send({
            "roundNumber": "1",
            "roundDate": "2",
        });

    expect(status).toBe(401);
});

    
    it("Should delete if exists", async () => {
        const {body: round} = await request(app.app)
            .post("/round")
            .send({
                "roundNumber": "1",
                "roundDate": "1",
            });

        const {status} = await request(app.app)
            .del(`/round/${round.resource.roundId}`)
            .send({});

        expect(status).toBe(200);
    });

    it("Should fail delete if dont exist", async () => {
        const {status} = await request(app.app)
            .del(`/round/f`)
            .send({});

        expect(status).toBe(401);
    });

});