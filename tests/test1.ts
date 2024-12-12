const { test, expect } = require('@playwright/test');

test('Individual Login and Institutional Login', async ({ page }) => {
  // Individual Login Test
  test('Individual Login', async () => {
    // Navigate to the login page
    await page.goto('https://wiley.scienceconnect.io/login');
    
    // Input email and password for individual login
    await page.fill('input[name="email"]', 'shehanranaw757@gmail.com');
    await page.fill('input[name="password"]', 'shehan2001');
    
    // Click on the login button
    await page.click('button[type="submit"]');
    
    // Wait for the user dashboard or homepage to load
    await page.waitForSelector('text=Welcome');
    
    // Verify that the username is displayed on the top right of the page
    const usernameText = await page.textContent('.user-profile .username');
    expect(usernameText).toBe('shehanranaw757@gmail.com');
  });
});
