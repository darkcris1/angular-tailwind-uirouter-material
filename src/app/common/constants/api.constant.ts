import { urlsafe } from "../utils/http.util";
import { API_URL } from "./conf.constant";

export const API_USERS = urlsafe(API_URL, "user");

export const API_AUTHUSER = urlsafe(API_USERS, "auth");
export const API_AUTH_LOGIN = urlsafe(API_USERS, "login");
export const API_AUTH_REGISTER = urlsafe(API_USERS, "register");

export const API_CHANNELS = urlsafe(API_URL, "channels");

export const API_POSTS = urlsafe(API_URL, "post");
