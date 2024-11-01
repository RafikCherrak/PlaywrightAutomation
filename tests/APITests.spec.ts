import { test, expect } from '@playwright/test'
import { request } from 'http'


var UserID;
test("Get User",async({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("Create User",async({request})=>{
    const response = await request.post('https://reqres.in/api/users',
        {
            data:{
                "name": "morpheus",
                "job": "leader"
            },
            headers:{
                "Content-Type": "application/json"
            }
        }
    )
    console.log(await response.json())
    expect(response.status()).toBe(201)
    var res =await response.json();
    UserID = res.id
});

test("Update User",async({request})=>{
    const response = await request.put('https://reqres.in/api/users'+UserID,
        {
            data:{
                "name": "morpheus",
                "job": "engineer"
            },
            headers:{
                "Content-Type": "application/json"
            }
        }
    )
    try{
        console.log(await response.json())
        expect(response.status()).toBe(200)
    }catch(Error){
        console.log("Error")
    }
})



test("Delete User",async({request})=>{
    const response = await request.delete('https://reqres.in/api/users/411'+UserID)
    expect(response.status()).toBe(204)

})