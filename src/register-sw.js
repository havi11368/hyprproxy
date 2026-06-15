//Using file from UV example

//List of hostnames that are allowed to run serviceworkers on http:

const swAllowedHostnames = ["localhost", "127.0.0.1"];

/*Global util
Used in 404.html and index.html*/

async function registerSW() {
  console.log('Starting registration...')
  	if (!navigator.serviceWorker) {
		if (
			location.protocol !== "https:" &&
			!swAllowedHostnames.includes(location.hostname)
		)
			throw new Error("Service workers cannot be registered without https.");

		throw new Error("Your browser doesn't support service workers.");
	}

  await navigator.serviceWorker
    .register('sw.js', {
    })
    .then(() => {
      console.log('Registered!')
    })
}

registerSW()