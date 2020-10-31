// import {App} from '../../../src/app';
// import appRouter from '../../../src/routes';
// import request from 'supertest';
// import { Connection, createConnection } from 'typeorm';
// import { options } from '../../database.service';

// describe("PermissionRole", () => {
//     const app = new App(appRouter);
//     let connection: Connection;

//     beforeAll(async (done) => {
//         connection = await createConnection(options);
        
//         await connection.query("DELETE FROM roles");
//         await connection.query("DELETE FROM permissions");

//         console

//         done();
//     });

//     afterEach(async (done) => {
//         await connection.query("DELETE FROM roles");
//         await connection.query("DELETE FROM permissions");

//         done();
//     });

//     afterAll(async (done) => {
//         await connection.query("DELETE FROM roles");
//         await connection.query("DELETE FROM permissions");

//         await connection.close();

//         done();
//     });

//     it("Add entity", async () => {
//         const {body: role} = await request(app.app)
//             .post("/role")
//             .send({
//                 "roleName": "Admin",
//                 "roleDescription": "Admin",
//             });

//             console.log(role)
        
//         const {body: permission} = await request(app.app)
//             .post("/permission")
//             .send({
//             "permissionName": "Admin",
//             "permissionDescription": "Admin"
//         });

//         console.log(permission);

//         const {status, body} = await request(app.app)
//             .post("/permissionrole")
//             .send({
//                 "permissionId": `${permission.permissionId}`,
//                 "roleId": `${role.roleId}`
//             });

//         console.log(body);

//         expect(status).toBe(200);
//     });

//     it("Fail if entity already exists", async () => {
//     });

//     it("Should fail if miss information", async () => {
//     });

//     it("Update if exist", async () => {
//     });

//     it("Fail update id dont exists", async () => {
//     });

//     it("Should delete if exists", async () => {
//     });

//     it("Should fail delete if dont exist", async () => {
//     });

// });