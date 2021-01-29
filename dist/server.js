"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var discovery_1 = __importDefault(require("./controllers/discovery"));
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// Serve the static files from the React app
app.use(express_1.default.static('build'));
app.use('/discovery', discovery_1.default);
app.get('*', function (_, res) {
    res.sendFile(path_1.default.join(__dirname, '..', 'build', 'index.html'));
});
exports.default = app;
