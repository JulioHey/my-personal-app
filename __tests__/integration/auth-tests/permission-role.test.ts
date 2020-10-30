import {App} from '../../../src/app';
import appRouter from '../../../src/routes';
import request from 'supertest';
import { createConnection } from 'typeorm';
import {options} from '../../database.service';

describe("PermissionRole", () => {
    const app = new App(appRouter);
    let connection;

    beforeAll(async () => {
        connection = await createConnection(options);
    });

    beforeEach(async () => {
        const {body: permissionRoles} = await request(app.app)
        .get("/permissionrole")
        .send({});
    
        if (permissionRoles[0]) {
            await Promise.all(await permissionRoles.map( async permissionRole => {
                const {body} = await request(app.app)
                    .del(`/permissionrole/${permissionRole.permissionRoleId}`)
                    .send({});
            })
            );
        }
    });

    afterAll(async () => {
        await connection.close();
    });

    // it("Add entity", async () => {
    // });

    // it("Fail if entity already exists", async () => {
    // });

    // it("Should fail if miss information", async () => {
    // });

    // it("Update if exist", async () => {
    // });

    // it("Fail update id dont exists", async () => {
    // });

    // it("Should delete if exists", async () => {
    // });

    // it("Should fail delete if dont exist", async () => {
    // });

});