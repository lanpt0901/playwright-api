import {test, expect} from "@playwright/test"

test('Should be able txo send a GET request', async({request}) => {
   let response = await request.get("https://jsonplaceholder.typicode.com/posts");
    const jsonResponse = await response.json();
    // console.log(jsonResponse)
    const status = response.status();
    // console.log(status);
    //Verification: expect - JEST frw - unit test for react, js, not belong to Playwright, reuse from JEST
    expect(status).toBe(200);
    expect(jsonResponse.length).toBeGreaterThanOrEqual(100);
    const firstPost = jsonResponse[0];
    // console.log(firstPost)

    // expect(firstPost.userId).toBe(1);
    // const {userId1, id1, title1, body1} = firstPost;
    // expect(userId1).toBe(1)
    // expect(id1).toBe(1)
    // expect(title1).toBeTruthy()
    // expect(body1).toBeTruthy()
    // random
    let randomIndex = Math.floor(Math.random() * jsonResponse.length)
    const randomItem = jsonResponse[randomIndex]
    // console.log(randomIndex)
    // console.log(jsonResponse.length)
    
    const {userId, id, title, body} = randomItem;
    expect(id).toBe(randomIndex + 1)
    // console.log(randomItem)
    expect(title).toBeTruthy()
    expect(body).toBeTruthy()

});


//request: APIRequestContext
//response: tip trick
//.json -> load bang await (neu ko co await thi se log ra Promise<Pending>)
//.body() -> dang buffered byte -> need to convert

