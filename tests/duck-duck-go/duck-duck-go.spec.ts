import { test, expect } from '@playwright/test';

test.describe('DuckDuckGo Search Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://duckduckgo.com');
  });

  test('should have correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/DuckDuckGoAA.*/);
  });
});