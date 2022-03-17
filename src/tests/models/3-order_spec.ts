import { orderStore } from "../../models/order";


const store=new orderStore();


describe('tests on orders table',()=>{

it('should index method be defined',()=>{
    expect(store.index).toBeDefined()
})


it('should show method be defined',()=>{
    expect(store.show).toBeDefined()
})


it('should create method be defined',()=>{
    expect(store.create).toBeDefined()
})


it('should addproduct method be defined',()=>{
    expect(store.addProduct).toBeDefined()
})

it('should current_order method be defined',()=>{
    expect(store.current_order).toBeDefined()
})


it('should index method return a list of orders',async()=>{
    const result=await store.index();
    expect(result).toEqual([{id:1,
        status:"active",
        user_id:1
    }])
})

it('should create method add a orders',async()=>{
  const result=await store.create({
    status:"active",
    user_id:1
  });
  expect(result).toEqual({
    id:2,
   status:"active",
    user_id:1});
});


it('show method should return the correct order',async()=>{
    const result=await store.show(2)
    expect(result).toEqual({
        id:2,
        status:"active",
        user_id:1});
})

it('should addproduct method add product in  the order',async()=>{
    const result=await store.addProduct(5,"2","2");
    expect(result).toBeTruthy()
});



it('current_order method should show the last order by user',async()=>{
    const result=await store.current_order(1);
    expect(result).toBeTruthy()

})


});