import { test, expect } from '@playwright/test';

//Test case 01

test('Individual Login', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://wiley.scienceconnect.io/login');
  
  // Input email and password
  await page.fill('input[name="email"]', 'shehanranaw757@gmail.com');
  await page.click('button[type="submit"]');
  await page.fill('input[name="password"]', 'shehan2001');
  
  // Click on the login button
  await page.click('button[type="submit"]');

//expecting the user name after loging In
  const javaDescription = 'shehan Ranaweera';
        await expect(page.getByText(javaDescription)).toBeVisible();
        

});




//Test case 02

test('search bar',async({page})=>{

  // Navigate to the login page
  await page.goto('https://onlinelibrary.wiley.com/');
  
  // Locate the search bar and input the book title
  await page.fill('#searchField1', 'The New Testament');  
  
  // Submit the search by pressing Enter
  await page.keyboard.press('Enter');  
  
  // Wait for search results to load
  await page.waitForSelector('.search-results');  
  
  // Verify that the search results contain the book title "The New Testament"
  const resultText = await page.textContent('.search-results');  
  expect(resultText).toContain('The New Testament');
  
  });


  test('Select Chemistry and Analytical Chemistry', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://onlinelibrary.wiley.com/');
  
    // Locate and click the "Chemistry" link using the ID
    await page.click('#accordionHeader-5');
  
    // Wait for the content related to Chemistry to load
    await page.waitForSelector('text=Chemistry'); 
  
    // Locate and click "Analytical Chemistry" after "Chemistry" is selected
    await page.click('span:text("Analytical Chemistry")');
  
    // Wait for the Analytical Chemistry content to load 
    await page.waitForSelector('text=Analytical Chemistry'); 
  
    const [download] = await Promise.all([
      page.waitForEvent('download'),  // Wait for the download event
      page.click('a[aria-label="PDF for Nanoflowers Templated CuO/Cu Hybrid Metasurface for Sensitive THz‐TDS Detection of Acetylcholine (Adv. Sensor Res. 12/2024)"]')  
    ]);
  });