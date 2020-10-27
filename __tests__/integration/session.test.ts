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

        expect(response.status).toBe(200);
    })
});