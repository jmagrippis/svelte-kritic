const STORAGE_KEY = 'theme'

// default to dark mode, because **I** like it more :-)
const defaultTheme = 'dark'

const getTheme = () => {
	if (typeof localStorage !== 'undefined') {
		return localStorage.getItem(STORAGE_KEY) || defaultTheme
	}
	return defaultTheme
}

const setTheme = (theme) => {
	document.documentElement.dataset.theme = theme
}

// set early so no page flashes / CSS is made aware
setTheme(getTheme())

const themeObserver = new MutationObserver(() => {
	const nextTheme = document.documentElement.dataset.theme
	if (nextTheme) {
		localStorage.setItem(STORAGE_KEY, nextTheme)
	}
})
themeObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ['data-theme'],
})

const toggleTheme = () => {
	const currentTheme = getTheme()
	const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
	setTheme(nextTheme)
}

window.toggleTheme = toggleTheme
