"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, DATABASE_HOST = _a.DATABASE_HOST, DATABASE_USER = _a.DATABASE_USER, DATABASE_NAME = _a.DATABASE_NAME, DATABASE_PASSWORD = _a.DATABASE_PASSWORD, DATABASE_TEST = _a.DATABASE_TEST, ENV = _a.ENV, SALT_ROUND = _a.SALT_ROUND, PEPPER = _a.PEPPER, TOKEN_SECRET = _a.TOKEN_SECRET;
var client = new pg_1.Pool({});
console.log(ENV);
if (ENV === 'dev') {
    client = new pg_1.Pool({
        host: DATABASE_HOST,
        user: DATABASE_USER,
        database: DATABASE_NAME,
        password: DATABASE_PASSWORD
    });
}
if (ENV === 'test') {
    client = new pg_1.Pool({
        host: DATABASE_HOST,
        user: DATABASE_USER,
        database: DATABASE_TEST,
        password: DATABASE_PASSWORD
    });
}
exports.default = client;
