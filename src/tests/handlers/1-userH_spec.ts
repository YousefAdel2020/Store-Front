import supertest from "supertest";
import app from "../../server"
import jwt from 'jsonwebtoken'




const request = supertest(app);




export let authT:jwt.JwtPayload;
describe('Test users  endpoint', () => {
    it('POST /user endpoint', async () => {
        const response = await request.post('/users').send({first_name:"yousef",
        last_name:"Adel",
        username:"jooo",
        password:"123456"});
        authT=response.body
        expect(response.status).toBe(201);
      
    })

    it('GET /user endpoint', async () => {
        const response = await request.get('/users').set("Authorization",`Bearer ${authT}`)
        expect(response.status).toBe(200);
      
    })

    it('GET /user/:id endpoint', async () => {
        const response = await request.get('/users/1').set("Authorization",`Bearer ${authT}`)
        expect(response.status).toBe(200);
      
    })



});

