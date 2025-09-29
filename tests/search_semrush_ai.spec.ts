import { test, expect } from '@playwright/test'

test('Search in images category', async ({ page }) => {
  await page.goto('https://www.ecosia.org/')
  await page.getByPlaceholder('Search the web...').fill('semrush ai')
  await page.getByPlaceholder('Search the web...').press('Enter')
  await page.getByRole('menuitem', { name: 'Images' }).click()
  await expect(page.getByRole('menuitem', { name: 'Images' })).toHaveClass(/tab--highlighted/)

})


