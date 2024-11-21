import { test, expect } from '@playwright/test';

test.describe('Google Search Tests', () => {
  // Increase timeout for navigation
  test.setTimeout(60000);

  test.beforeEach(async ({ page }) => {
    // Enable longer navigation timeout
    page.setDefaultNavigationTimeout(45000);
    page.setDefaultTimeout(45000);

    // Navigate to Google with error handling
    try {
      await page.goto('https://www.google.com', {
        waitUntil: 'networkidle'
      });

      // Handle cookie consent dialog - multiple possible button texts
      const consentButtons = [
        'Accept all',
        'I agree',
        'Agree',
        'Acepto',
        'Aceptar todo',
        'Tout accepter'
      ];

      for (const buttonText of consentButtons) {
        try {
          const button = page.getByRole('button', { name: buttonText });
          if (await button.isVisible({ timeout: 2000 })) {
            await button.click();
            break;
          }
        } catch (e) {
          // Continue to next button text if this one isn't found
          continue;
        }
      }
    } catch (e) {
      console.log('Navigation or consent error:', e);
      throw e;
    }
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Google.*/);
  });

  test('should perform basic search', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 2', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 3', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 4', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 5', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 6', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 7', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 8', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 9', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 10', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 11', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 12', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 13', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search 14', async ({ page }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page).toHaveURL(/.*q=playwright\+testing.*/);
  });

  test('should perform basic search FAIL FOR webkit', async ({ page, browserName }) => {
    // Find search input (trying multiple possible aria-labels)
    const searchInput = await page.getByRole('combobox', { name: /search|Search/i });
    await searchInput.fill('playwright testing');
    await searchInput.press('Enter');

    // Wait for and verify results
    await expect(page.getByRole('main')).toBeVisible();
    if (browserName === 'webkit') await expect(page).toHaveURL(/.*q=asdf.*/);
  });
});