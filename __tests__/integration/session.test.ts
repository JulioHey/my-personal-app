import {TestFactory} from '../factory';

describe("Authentication", () => {
    const factory: TestFactory = new TestFactory();

    beforeEach( async () => {
        const response = await factory.app
            .get("/user")
            .send();
        
        const users = response.body;

        if (users[0]) {
            await Promise.all(users.map( async user => {
                await factory.app
                    .delete(`/user/${user.userId}`)
                    .send()
            })
            );
        }
    });

    beforeAll(async () => {
        await factory.init();
    });

    afterAll(async () => {
        await factory.close();
    });

    it("should fail if user already exists", async () => {
        await factory.app.post("/user").send({
            "userName": "ju2l1io",
            "userEmail": "a@gmai3l",
            "userPassword": "12324",
            "roles": [
            ]
        });

        const response = await factory.app.post("/user").send({
            "userName": "ju2l1io",
            "userEmail": "a@gmai3l",
            "userPassword": "12324",
            "roles": [
            ]
        });

        
        expect(response.status).toBe(401);
    }
    );

    it("should create nwe user if user dont exist", async () => {
        const response = await factory.app.post("/user").send({
            "userName": "ju2l1io",
            "userEmail": "a@gmai3l",
            "userPassword": "12324",
            "roles": [
            ]
        });

        console.log(response.body);

        expect(response.status).toBe(200);
    });

    it("should not login if user or password are wrong", async () => {
        await factory.app.post("/user").send({
            "userName": "ju2l1io",
            "userEmail": "a@gmai3l",
            "userPassword": "12324",
            "roles": [
            ]
        });

        const response = await factory.app.post("/user/login").send({
            "userName": "ju2l1io",
            "userPassword": "1232456",
        });

        expect(response.status).toBe(400);
    });

    it("should login if user and password are correct", async () => {
        await factory.app.post("/user").send({
            "userName": "ju2lio",
            "userEmail": "a@gmai3l",
            "userPassword": "12343",
            "roles": [
            ]
        });

        const response = await factory.app.post("/user/login")
            .send({
                "userName": "ju2lio",
                "userPassword": "12343"
            });

        expect(response.status).toBe(200);
    });
});