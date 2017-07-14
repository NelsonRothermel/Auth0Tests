import { WebAuth } from "auth0-js";
import Auth0Lock from "auth0-lock";

const cid = "yKJO1ckwuY1X8gPEhTRfhJXyObfiLxih";
const domain = "mdocs.auth0.com";

// Works: Using Auth0 redirect
/*var auth = new WebAuth({
    clientID: cid,
    domain: domain,
    responseType: "token id_token",
    audience: "https://localhost/userinfo",
    redirectUri: "https://localhost/callback",
    scope: "openid"
});

auth.authorize({});*/

// Doesn't work: Using Auth0Lock
var auth0Lock = new Auth0Lock(cid, domain);
auth0Lock.show();