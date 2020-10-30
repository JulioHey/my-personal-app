import {App} from '../../../src/app';
import appRouter from '../../../src/routes';
import request from 'supertest';
import { createConnection } from 'typeorm';
import {options} from '../../database.service';


describe("Permissions", () => {
    const app = new App(appRouter);
    let connection;

    beforeAll(async () => {
        connection = await createConnection(options);
    });

    beforeEach(async () => {
        const {body: permissions} = await request(app.app)
            .get("/permission")
            .send();
        
        if (permissions[0]) {
            await Promise.all(await permissions.map(
                async permission => {
                    await request(app.app)
                        .del(`/permission/${permission.permissionId}`)
                        .send();
                }
            ));
        }
    });

    afterAll(async () => {
        await connection.close();
    });

    it("should fail if permission already exists", async () => {
        const {body} = await request(app.app)
            .post("/permission")
            .send({
            "permissionName": "Admin",
            "permissionDescription": "Admin"
        });

        const response = await request(app.app)
            .post("/permission").send({
            "permissionName": "Admin",
            "permissionDescription": "Admin"
        });

        if (response.status == 200) {
            console.log(body, response.body);
        }

        expect(response.status).toBe(401);
    });

    it("should create if permission", async () => {
        const response = await request(app.app)
            .post("/permission")
            .send({
            "permissionName": "Admin",
            "permissionDescription": "Admin"
        });

        expect(response.status).toBe(200);
    });

    it("should update permission name", async () => {
        const {body: permission} = await request(app.app)
            .post("/permission")
            .send({
            "permissionName": "Admin",
            "permissionDescription": "Admin"
        });

        const response = await request(app.app)
            .put(`/permission/${permission.permissionId}`)
            .send({
                "permissionName": "Julio Lindo",
                "permissionDescription": "Admin"
            })
        
        expect(response.status).toBe(200);
    });

    it("should fail to update entity if entity dont exist", async () => {
        const response = await request(app.app)
            .put(`/permission/f`)
            .send({
                "permissionName": "Julio Lindo",
                "permissionDescription": "Admin"
            })
        
        expect(response.status).toBe(401);
    });

    it("Should fail if miss information", async () => {
        const response = await request(app.app)
            .post("/permission")
            .send({
            "permissionDescription": "Admin"
        });

        expect(response.status).toBe(401);
    });

    it("Should fail delete if dont exist", async () => {
        const response = await request(app.app)
            .del("/permission/f")
            .send({});

        expect(response.status).toBe(401);
    });

    it("Should delete if exists", async () => {
        const {body: permission} = await request(app.app)
            .post("/permission")
            .send({
            "permissionName": "Admin",
            "permissionDescription": "Admin"
        });

        const response = await request(app.app)
            .del(`/permission/${permission.permissionId}`)
            .send({})
        
        expect(response.status).toBe(200);
    });

});