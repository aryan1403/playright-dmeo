const { test, expect } = require('@playwright/test');

test.describe.configure({retries: 3});

test("githubme", async ({page}) => {
  await page.goto("https://github.com/aryan1403");

  await expect(page).toHaveTitle(/aryan1403/)
})

test("btnclick", async ({page}) => {
  await page.goto("https://www.google.co.in/");

  await expect(page.getByLabel("Search")).toBeTruthy()
}) 

test('get started link', async ({page}) => {
  await page.goto("https://playwright.dev/");

  await page.getByRole('link', {name: 'Get started'}).click()

  await expect(page.getByRole('heading', {name: "Installation"})).toBeVisible();
})

test('my test', async ({page}) => {
  await page.goto("https://playwright.dev/")
  const h1 = await page.locator(".highlight_gXVj").first()

  await expect(h1).toHaveText(/Playwright/)
})


test('cloud that', async ({page}) => {
  // test.setTimeout(6000);
  test.slow(); // triple the default timeout
  await page.goto("https://testprep.cloudthat.com/login/index.php");
  await page.getByPlaceholder("Username or email").fill('xyz@gmail.com');
  await page.getByPlaceholder("Password").fill("123");

  await page.locator("#loginbtn").click()

  // T&C
  // checkbox
  // await page.getByLabel("I agree to the terms & conditions").check()

  // radio btn
  // await expect(page.getByLabel("I agree to the terms & conditions")).toBeChecked()
});

// Filtering the locators (drill inside the DOM)
/*
<ul>
  <li>
    <h3>Product 1</h3>
    <button>Add to cart</button>
  </li>
  <li>
    <h3>Product 2</h3>
    <button>Add to cart</button> --> location
  </li>
</ul>
*/

/* test('filtering', async ({page}) => {
  await page.goto("");
  await page.getByRole("listitem")
    .filter({ hasText: 'Product 2' })
    .getByRole('button', {name: "Add to cart"})
    .click()
});

test('stock items 5', async ({page}) => {
  await page.goto("");
  await expect(page.getByRole("listitem")
    .filter({ hasNotText: 'Out of stock' }))
    .toHaveCount(5)
});
 */


test('cloud that1', async ({page}) => {
 
  await page.goto("https://pipedream.com/auth/login");

  await page.evaluate(() => {
    // exec js
    
  })

  await page.getByPlaceholder("name@company.com");
  await page.getByPlaceholder(".......");

  await page.getByTestId("sign in with password").click()
  
});
