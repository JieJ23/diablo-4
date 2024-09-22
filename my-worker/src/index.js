/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	// Handle preflight CORS requests (OPTIONS)
	if (request.method === 'OPTIONS') {
		return new Response(null, {
			headers: {
				'Access-Control-Allow-Origin': 'https://diablo4pit.pages.dev/',
				'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
		});
	}

	// Fetch from the Google Apps Script
	const apiUrl = 'https://script.google.com/macros/s/AKfycbxCX4DUqrtstJ24ydCtPAXDS_8a3xZISRZORq7DdwmYdjmNLr-0A-mnL8dJb-_eIHKB/exec';
	const response = await fetch(apiUrl);
	const data = await response.json();

	// Return the response with CORS headers
	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'https://diablo4pit.pages.dev/',  // Allow only this domain
		},
	});
}