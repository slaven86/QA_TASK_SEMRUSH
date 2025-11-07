import { test, expect } from '@playwright/test'

test('Search test 1', async ({ page }) => {
  await page.goto('https://www.ecosia.org/')
  await page.getByPlaceholder('Search the web...').fill('prowly ai tools')
  await page.getByPlaceholder('Search the web...').press('Enter')
  await page.getByRole('menuitem', { name: 'Images' }).click()
  await expect(page.getByRole('menuitem', { name: 'Images' })).toHaveClass(/tab--highlighted/)
  await page.getByRole('menuitem', { name: ' All types ' }).click()
  await page.getByRole('menuitem', { name: ' GIF ' }).click()
  const selectedType = page.locator('div[data-test-id="search-filter-imageType"].filter--selected .filter__text')
  await expect(selectedType).toHaveText('GIF')

})


test('Search test 2', async ({ page }) => {
  await page.goto('https://www.ecosia.org/')
  await page.getByPlaceholder('Search the web...').fill('prowly ai tools')
  await page.getByPlaceholder('Search the web...').press('Enter')
  await page.getByRole('menuitem', { name: 'Images' }).click()
  await expect(page.getByRole('menuitem', { name: 'Images' })).toHaveClass(/tab--highlighted/)
  await page.getByRole('menuitem', { name: ' All types ' }).click()
  await page.getByRole('menuitem', { name: ' GIF ' }).click()
  const selectedType = page.locator('div[data-test-id="search-filter-imageType"].filter--selected .filter__text')
  await expect(selectedType).toHaveText('GIF')

})

