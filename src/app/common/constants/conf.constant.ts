import { urlsafe } from "./../utils/http.util";
/* 18 random characters that will represent as the
 * key name of the user token in the client side.
 */
export const AUTH_KEY = "V5fUxpXUAXuguGqY2t";

/* HOST
 */
export const HOST = `${(window as Window).location?.host}`;
// export const HOST = `127.0.0.1:8000`;

/* API url
 */
// export const API_URL = "http://" + HOST + "/api/";
export const API_URL = "/api/";

export const ORIGIN_URL = `${(window as Window).location.origin}/`;

export const POST_URL = urlsafe(ORIGIN_URL, "posts");
