import {App} from '../../../src/app';
import appRouter from '../../../src/routes';
import request from 'supertest';
import { Connection, createConnection } from 'typeorm';
import {options} from '../../database.service';

describe("Roles", () => {
    const app = new App(appRouter);
    let connection: Connection;

    beforeAll(async (done) => {
        connection = await createConnection(options);

        done();
    });

    afterEach( async (done) => {
        await connection.query("DELETE FROM roles");
        
        done();
    });

    afterAll(async (done) => {
        await connection.close();

        done();
    });

    it("should create entity if dont exist", async () => {
        const response = await request(app.app)
            .post("/role")
            .send({
                "roleName": "Admin",
                "roleDescription": "Admin",
            });

        expect(response.status).toBe(200);
    });

    it("should fail if entity already exists", async () => {
        const {body} = await request(app.app)
            .post("/role")
            .send({
            "roleName": "Admin",
            "roleDescription": "Admin",
            "permissions": []
        });
        
        const response = await request(app.app)
            .post("/role")
            .send({
            "roleName": "Admin",
            "roleDescription": "Admin",
            "permissions": []
        });

        expect(response.status).toBe(401);
    });

    it("should not update role if there is no entity", async () => {
        const {status} = await request(app.app)
            .put(`/role/f`)
            .send({
                "roleDescription": "Admin",
            });
        
        expect(status).toBe(401);
    });
   
    it("should update if role exists", async () => {
        const {body: role} = await request(app.app)
            .post("/role")
            .send({
            "roleName": "Admin",
            "roleDescription": "Admin",
        });
        
        const response = await request(app.app)
            .put(`/role/${role.roleId}`)
            .send({
            "roleName": "Admin",
            "roleDescription": "Julio Lindo",
        });

        expect(response.status).toBe(200);
    });

    it("should fail if miss information", async () => {
        const {status} = await request(app.app)
            .post("/role")
            .send({
            "roleName": "Admin",
        });

        expect(status).toBe(401);
    });

    it(" delete if entity do exist", async () => {
        const {body: role} = await request(app.app)
            .post("/role")
            .send({
            "roleName": "Admin",
            "roleDescription": "Admin",
        });

        const {status} = await request(app.app)
            .delete(`/role/${role.roleId}`)
            .send({});

        expect(status).toBe(200);
    });

    it("fail delete if entity dont exist", async () => {
        const {status} = await request(app.app)
            .delete(`/role/f`)
            .send({});

        expect(status).toBe(401);
    });

});