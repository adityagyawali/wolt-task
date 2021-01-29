"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var server_1 = __importDefault(require("./server"));
var app = http_1.default.createServer(server_1.default);
var PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
    console.log("Server running on port " + PORT);
});
