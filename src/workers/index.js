addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url)

    // Rewrite all paths to the root
    if (url.pathname !== '/') {
        url.pathname = '/'
    }

    return fetch(url, request)
}