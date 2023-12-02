import {test, expect} from '@playwright/test'

test('navigation smoke test', async ({page}) => {
	// start at the home page
	await page.goto('/')

	await expect(page).toHaveTitle(/SvelteKritic/)
	await expect(
		page.getByRole('heading', {name: 'SvelteKritic', level: 1}),
	).toBeVisible()
})
