import {App} from '../../../src/app';
import appRouter from '../../../src/routes';
import request from 'supertest';
import { createConnection } from 'typeorm';
import {options} from '../../database.service';


describe("Permissions", () => {
    const app = new App(appRouter);

    beforeAll(async () => {
        await createConnection(options);
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
                "permissionId": `${permission.permissionId}`,
                "permissionName": "Julio Lindo",
                "permissionDescription": "Admin"
            })
        
        expect(response.status).toBe(200);
    });
});