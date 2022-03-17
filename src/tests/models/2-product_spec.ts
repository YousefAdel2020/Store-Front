import { productStore } from "../../models/product";


const store=new productStore();


describe('tests on products table',()=>{

it('should index method be defined',()=>{
    expect(store.index).toBeDefined()
})


it('should show method be defined',()=>{
    expect(store.show).toBeDefined()
})


it('should create method be defined',()=>{
    expect(store.create).toBeDefined()
})



it('should index method return a list of products',async()=>{
    const result=await store.index();
    expect(result).toEqual([{id:1,
        name:'product1',
        price:20,
        category:"testH"
    }])
})

it('should create method add a product',async()=>{
  const result=await store.create({
    name:"product1",
    price:25,
    category:"test"
  });
  expect(result).toEqual({
    id:2,
    name:"product1",
    price:25,
    category:"test"});
});


it('show method should return the correct product',async()=>{
    const result=await store.show(2)
    expect(result).toEqual({
        id:2,
        name:"product1",
        price:25,
        category:"test"});
})





});