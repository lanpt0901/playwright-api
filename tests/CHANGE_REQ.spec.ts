require('dotenv').config()
import { test, expect} from "@playwright/test"
import postContent from "../test-data/postContent.json"
import putContent from "../test-data/putContent.json"
import multiPostContent from "../test-data/postContentMulti.json"


test('Should be able to perform CRUD on post type', async({request}) => {
    console.log(postContent)
    const header = {
            'Content-type': 'application/json; charset=UTF-8'
        }
    const postOptions = {
        headers: header,
        data: postContent
    }
    const putOptions = {
        headers: header,
        data: putContent
    }
    let postResponse = await request.post("/posts", postOptions)
    const postResponseBody =  await postResponse.json()
    let postId = postResponseBody.id;
    postId = Number(postId) - 1
    let getResponse = await request.get(`/posts/${postId}`)
    const getJsonBody = await getResponse.json()
    console.log(await getResponse.json())

    let putResponse = await request.put(`/posts/${postId}`, putOptions)
    let deleteResponse = await request.delete(`/posts/${postId}`)
    
    console.log(postResponseBody)
    console.log(getJsonBody)
    const {title, body, userId, id} = postResponseBody
    expect(postResponse.status()).toBe(201)
    expect(deleteResponse.status()).toBe(200)
})

test('Should be able to perform CRUD on Multi request type', async({request}) => {
    console.log(postContent)
    const header = {
            'Content-type': 'application/json; charset=UTF-8'
        }

    for(let postContent of multiPostContent) {
        const postOptions = {
            header: header,
            data: postContent
        }
        const putOptions = {   
            headers: header,
            data: putContent
        }
        let postResponse = await request.post("/posts", postOptions)
        const postResponseBody =  await postResponse.json()
        let postId = postResponseBody.id;
        postId = Number(postId) - 1
        let getResponse = await request.get(`/posts/${postId}`)
        const getJsonBody = await getResponse.json()
        console.log(await getResponse.json())
    
        let putResponse = await request.put(`/posts/${postId}`, putOptions)
        let deleteResponse = await request.delete(`/posts/${postId}`)
        
        console.log(postResponseBody)
        console.log(getJsonBody)
        const {title, body, userId, id} = postResponseBody
        expect(postResponse.status()).toBe(201)
        expect(deleteResponse.status()).toBe(200)
    }
    
})