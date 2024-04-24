// Handle the POST request to update the backend IP
async function handleRequest(request) {
  if (request.method === 'POST') {
      const { ip, secret_key } = await request.json();

      // Verify the secret key
      if (secret_key === 'your-secret-key') {
          // Update the backend_ip.txt file with the new IP address
          await fetch('backend_ip.txt', {
              method: 'PUT',
              body: ip
          });

          return new Response('Backend IP updated successfully.', { status: 200 });
      } else {
          return new Response('Invalid secret key.', { status: 401 });
      }
  } else {
      return new Response('Invalid request method.', { status: 405 });
  }
}

// Listen for the fetch event and handle the request
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});