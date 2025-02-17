/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const allowedOrigins = [
	'https://cydiablo.pages.dev',
	'http://localhost:5173',
];

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
	const origin = request.headers.get('Origin');

	// Check if the request origin is allowed
	if (!allowedOrigins.includes(origin)) {
		return new Response('Unauthorized', { status: 403 });
	}


	if (request.method === 'OPTIONS') {
		// Handle preflight request
		return new Response(null, {
			headers: {
				'Access-Control-Allow-Origin': origin, // Allow the specific origin
				'Access-Control-Allow-Methods': 'GET, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type',
			},
		});
	}

	try {
		const apiUrl = 'https://script.google.com/macros/s/AKfycbzACNO1X5UCjLTikzE_XAl9KCtHBzNj1PufhcZ5v4A-alQCP6n0IRIe8XG7PxjeGB3t/exec';
		const response = await fetch(apiUrl);
		const data = await response.json();

		return new Response(JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': origin, // Allow the specific origin
			},
		});
	} catch (error) {
		console.error('Error fetching data:', error);
		return new Response('Error fetching data', { status: 500 });
	}
}
