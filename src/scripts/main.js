const m = new MutationObserver((mutations) => {
	for (const mutation of mutations) {
		mutation.addedNodes.forEach((node) => {
			if (node.textContent?.includes("Sorry, for some reason reddit can't be reached.")) {
				console.log('removing?')
				node.parentElement?.remove()
			}
		})
	}
})

m.observe(document.body, {childList: true, subtree: true})
