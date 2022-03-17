import supertest from "supertest";
import app from "../../server"
import {authT} from './1-userH_spec'


const request = supertest(app);





describe('Test products  endpoint', () => {


    it('POST /products endpoint', async () => {
        const response = await request.post('/products').send({
            name:'product1',
            price:20,
            category:"testH"
        }).set("Authorization",`Bearer ${authT}`)
        expect(response.status).toBe(201);
      
    })

    it('GET /products endpoint', async () => {
        const response = await request.get('/products')
        expect(response.status).toBe(200);
      
    })

    it('GET /products/:id endpoint', async () => {
        const response = await request.get('/products/1')
        expect(response.status).toBe(200);
      
    })


 


});

