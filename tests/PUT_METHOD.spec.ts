import {test, expect} from "@playwright/test"

test('Should be able to PUT request successfully', async({request})=> {
    const url = "https://jsonplaceholder.typicode.com/posts/1"
    const putContent = {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    const options = {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        data: putContent
    }

    let response = await request.put(url, options)
    const responseBody =  await response.json()

    console.log(responseBody)
    const {id, title, body, userId} = responseBody
    // expect(response.status()).toBe(200)
    expect(id).toBeTruthy()
    expect(id).toBe(putContent.id)
    expect(title).toBe(putContent.title)
    expect(body).toBe(putContent.body)
    expect(userId).toBe(putContent.userId)
})