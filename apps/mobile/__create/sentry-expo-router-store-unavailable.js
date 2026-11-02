// Expo Router 58 no longer exposes the optional private global router store.
// Sentry treats a null store exactly like its own failed optional require.
module.exports = { store: null };
