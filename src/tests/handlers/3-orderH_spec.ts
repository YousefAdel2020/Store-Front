import supertest from "supertest";
import app from "../../server"
import {authT} from './1-userH_spec'



const request = supertest(app);





describe('Test orders endpoint', () => {


    it('POST /orders endpoint', async () => {
        const response = await request.post('/orders').set("Authorization",`Bearer ${authT}`).send({
            status:"active",
            user_id:1
        })
        expect(response.status).toBe(201);
      
    })

    it('GET /orders endpoint', async () => {
        const response = await request.get('/orders')
        expect(response.status).toBe(200);
      
    })

    it('GET /orders/:id endpoint', async () => {
        const response = await request.get('/orders/1')
        expect(response.status).toBe(200);
      
    })

    it('POST /orders/:id/products endpoint', async () => {
        const response = await request.post('/orders/1/products').set("Authorization",`Bearer ${authT}`).send({quantity:50,productId:1})
        expect(response.status).toBe(201);
      
    })

    it('GET /orders/users/:id endpoint', async () => {
        const response = await request.get('/orders/users/1').set("Authorization",`Bearer ${authT}`)
        expect(response.status).toBe(200);
      
    })
 
 

});

