firebase-express-proxy
======================

This script creates a simple proxy which passes GET requests to Firebase.

This is useful if you have your own custom domain that you want to use with
Firebase for GET requests, and have simple needs.

Usage
-----

Run the server.js file with node:

```
node server.js
```

Options
-------

- `fbUrl`: *(default: 'https://your-instance.firebaseio.com')* The URL of your firebase instance, without the trailing slash.
- `proxyPath`: *(default: '/api')* The path to route requests through. Set to null to listen on root.

