// Admin login comes ONLY from the environment (no credentials are stored in source).
// The server applies it to the primary ADMIN account on every start (creating it on a fresh DB,
// updating it on an existing one). Set ADMIN_USERNAME and ADMIN_PASSWORD in the host's environment.
const username=String(process.env.ADMIN_USERNAME||'').trim(),password=String(process.env.ADMIN_PASSWORD||'');
if(!username||!password){console.error('ADMIN_USERNAME and ADMIN_PASSWORD environment variables must be set');process.exit(1)}
module.exports={username,password};
