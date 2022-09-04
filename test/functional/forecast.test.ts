import supertest from 'supertest';


describe("Branch forecast functional tests", () => {
    it("Should return a forecast with just a few times", async () => {
        const {body, status} = await supertest(app).get("/firecast");

        expect(status).toBe(200);
        
        expect(body).toBe([{
            "test": [{
                "Apenas": "Testando",
                "SeErro": "Faça novamente"
            }]
        }]);

    });
});