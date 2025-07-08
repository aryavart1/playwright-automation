import { test, expect } from '@playwright/test';
import { getEnvVar } from '../utilities/env';

test.describe('OrangeHRM Employee Management', () => {
  test('should add a new employee successfully', async ({ page }) => {
    // Login
    // await page.goto('/');
    await page.goto(getEnvVar('UI_URL'))
    let title = await(page.title())
    console.log(title)
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Navigate to PIM > Add Employee
    await page.waitForSelector('role=link[name="PIM"]');
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();

    // Generate unique username and password
    const timestamp = Date.now();
    const username = `testuser${timestamp}`;
    const password = `Test@${timestamp}`;

    // Fill employee details
    await
    await page.getByPlaceholder('First Name').fill('John2');
    await page.getByPlaceholder('Last Name').fill('Doe2');

    // Create login details
    //await page.getByRole('checkbox', { name: 'Create Login Details' }).check();
    //await page.getByRole('textbox', { name: 'Username' }).fill(username);
    //await page.getByRole('textbox', { name: 'Password' }).fill(password);
    //await page.getByRole('textbox', { name: 'Confirm Password' }).fill(password);

    // Save employee
    await page.getByRole('button', { name: 'Save' }).click();

    // Verify success message
    await expect(page.getByText('Successfully Saved')).toBeVisible();

    // Logout
    await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    // Verify logout
    await expect(page.getByPlaceholder('Username')).toBeVisible();
  });
}); 