import {App} from '../../../src/app';
import appRouter from '../../../src/routes';
import request from 'supertest';
import { createConnection } from 'typeorm';
import {options} from '../../database.service';

describe("Authentication", () => {
    const app = new App(appRouter);
    let connection;

    beforeAll(async () => {
        connection  = await createConnection(options);
    });

    beforeEach( async () => {
        const {body: users} = await request(app.app)
            .get("/user")
            .send();
        
        if (users[0]) {
            await Promise.all(users.map( async user => {
                await request(app.app)
                    .delete(`/user/${user.userId}`)
                    .send()
            })
            );
        }
    });

    afterAll(async () => {
        await connection.close();
    });

    it("should fail if user already exists", async () => {
        const {body} = await request(app.app)
            .post("/user")
            .send({
            "userName": "ju2l1io",
            "userEmail": "a@gmai3l",
            "userPassword": "12324",
            "roles": [
            ]
        });

        const response = await request(app.app)
            .post("/user")
            .send({
            "userName": "ju2l1io",
            "userEmail": "a@gmai3l",
            "userPassword": "12324",
            "roles": [
            ]
        });

        expect(response.status).toBe(401);
    }
    );

    it("should create new user if user dont exist", async () => {
        const response = await request(app.app).post("/user").send({
            "userName": "ju2l1io",
            "userEmail": "a@gmai3l",
            "userPassword": "12324",
            "roles": [
            ]
        });

        expect(response.status).toBe(200);
    });

    it("should not login if user or password are wrong", async () => {
        await request(app.app).post("/user").send({
            "userName": "ju2l1io",
            "userEmail": "a@gmai3l",
            "userPassword": "12324",
            "roles": [
            ]
        });

        const response = await request(app.app).post("/user/login").send({
            "userName": "ju2l1io",
            "userPassword": "1232456",
        });

        expect(response.status).toBe(400);
    });

    it("should login if user and password are correct", async () => {
        await request(app.app).post("/user").send({
            "userName": "ju2lio",
            "userEmail": "a@gmai3l",
            "userPassword": "12343",
            "roles": [
            ]
        });

        const response = await request(app.app).post("/user/login")
            .send({
                "userName": "ju2lio",
                "userPassword": "12343"
            });

        expect(response.status).toBe(200);
    });
});