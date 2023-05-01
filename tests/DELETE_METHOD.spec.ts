
import { test, expect} from "@playwright/test"

test("Should be able to verify DELETE request", async({request}) => {
    const url = "https://jsonplaceholder.typicode.com/posts/1"
    const response = await request.delete(url)
    const responseBody = await response.json()
    expect(response.status()).toBe(200)

})