"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth0_lock_1 = require("auth0-lock");
var cid = "yKJO1ckwuY1X8gPEhTRfhJXyObfiLxih";
var domain = "mdocs.auth0.com";
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
var auth0Lock = new auth0_lock_1.default(cid, domain);
auth0Lock.show();
//# sourceMappingURL=app.js.map