"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./pages/Home"));
const Add_1 = __importDefault(require("./pages/Add"));
const Edit_1 = __importDefault(require("./pages/Edit"));
const Detail_1 = __importDefault(require("./pages/Detail"));
const Singin_1 = __importDefault(require("./pages/Singin"));
const NotFound_1 = __importDefault(require("./pages/NotFound"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route exact path="/edit/:id" component={Edit_1.default}/>
        <react_router_dom_1.Route exact path="/book/:id" component={Detail_1.default}/>
        <react_router_dom_1.Route exact path="/add" component={Add_1.default}/>
        <react_router_dom_1.Route exact path="/signin" component={Singin_1.default}/>
        <react_router_dom_1.Route exact path="/" component={Home_1.default}/>
        <react_router_dom_1.Route component={NotFound_1.default}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
