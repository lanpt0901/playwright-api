const {test, expect} = require("@playwright/test");

test('Should be able to ', async({request}) => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const postContent = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    const options = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        data: postContent
    }

    let response = await request.post(url, options)
    const responseBody =  await response.json()

    console.log(responseBody)
    const {title, body, userId, id} = responseBody
    expect(response.status()).toBe(201)
    expect(id).toBeTruthy()
    expect(title).toBe(postContent.title)
    expect(body).toBe(postContent.body)
    expect(userId).toBe(postContent.userId)
})