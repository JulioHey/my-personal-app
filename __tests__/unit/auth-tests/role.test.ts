import {App} from '../../../src/app';
import appRouter from '../../../src/routes';
import request from 'supertest';
import { createConnection } from 'typeorm';
import {options} from '../../database.service';

describe("Roles", () => {
    const app = new App(appRouter);
    let connection;

    beforeAll(async () => {
        connection = await createConnection(options);
    });

    beforeEach( async () => {
        const {body: permissions} = await request(app.app)
            .get("/permission")
            .send({});
        
        if (permissions[0]) {
            await Promise.all(await permissions.map( async permission => {
                const {body} = await request(app.app)
                    .del(`/permission/${permission.permissionId}`)
                    .send({});
            })
            );
        }

        const {body: roles} = await request(app.app)
            .get("/role")
            .send();
        
        if (roles[0]) {
            await Promise.all(await roles.map( async role => {
                await request(app.app)
                    .del(`/role/${String(role.roleId)}`)
                    .send({});
            })
            );
        }
    });

    afterAll(async () => {
        await connection.close();
    });

    it("should not fail if permission doesnt exists", async () => {
        const response = await request(app.app).post("/role").send({
            "roleName": "Admin",
            "roleDescription": "Admin",
            "permissions": []
        });
        
        expect(response.status).toBe(200);
    });

    it("should fail if permission exists", async () => {
        await request(app.app)
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

    it("should create role with permission", async () => {
        const {body: permission} = await request(app.app)
            .post("/permission")
            .send({
            "permissionName": "Admin",
            "permissionDescription": "Admin"
        });
        
        const response = await request(app.app)
            .post("/role")
            .send({
            "roleName": "Admin",
            "roleDescription": "Admin",
            "permissions": [`${permission.permissionId}`]
        });

        let isPermission;

        if (!response.body.permission[0]) {
            console.log(permission, response.body)
        } else {
            isPermission = permission.permissionId == response.body.permission[0].permissionId
        }
        
        expect(isPermission).toBe(true);
    });

    it("should not update role if there is no entity", async () => {
        const {status} = await request(app.app)
            .put(`/role/f`)
            .send({
                "roleId": "f",
                "roleDescription": "Admin",
            });
        
        expect(status).toBe(401);
    });
});