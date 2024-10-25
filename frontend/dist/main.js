/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    host: 'http://localhost:3000/api'
};


/***/ }),

/***/ "./src/components/answers.ts":
/*!***********************************!*\
  !*** ./src/components/answers.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Answers = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var Answers = /** @class */ (function () {
    function Answers() {
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
    }
    Answers.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, that, result, answersTestName, answersPersonName, answersPersonEmail, q_1, backToResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = auth_1.Auth.getUserInfo();
                        that = this;
                        if (!userInfo) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        if (!this.routeParams.id) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id + '/result/details?userId=' + userInfo.userId)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if (result.error !== undefined) {
                                throw new Error(result.message);
                            }
                            answersTestName = document.getElementById('answers-test-name');
                            if (answersTestName) {
                                answersTestName.innerText = result.test.name;
                            }
                            answersPersonName = document.getElementById('answers-person-name');
                            if (answersPersonName) {
                                answersPersonName.innerText = userInfo.fullName;
                            }
                            answersPersonEmail = document.getElementById('answers-person-email');
                            if (answersPersonEmail && userInfo) {
                                answersPersonEmail.innerText = userInfo.email;
                            }
                            q_1 = 0;
                            result.test.questions.forEach(function (item) {
                                var answersOptions = document.getElementById('answers-options');
                                if (answersOptions) {
                                    var answersOption_1 = document.createElement('div');
                                    answersOption_1.className = 'answers-option';
                                    var answersOptionTitle_1 = document.createElement('div');
                                    answersOptionTitle_1.className = 'answers-option-title';
                                    answersOptionTitle_1.innerHTML = '<span>Вопрос ' + (q_1 + 1)
                                        + ':</span> ' + item.question;
                                    var answerList_1 = document.createElement('div');
                                    answerList_1.className = 'answer-list';
                                    var i_1 = 0;
                                    item.answers.forEach(function (answer) {
                                        var answerItem = document.createElement('div');
                                        answerItem.className = 'answer-item';
                                        answerItem.innerHTML = '<input type="radio">' + answer.answer;
                                        answerList_1.appendChild(answerItem);
                                        answersOption_1.appendChild(answersOptionTitle_1);
                                        answersOption_1.appendChild(answerList_1);
                                        answersOptions.appendChild(answersOption_1);
                                        if (answer.correct === true) {
                                            answerItem.classList.add('answer-right');
                                        }
                                        else if (answer.correct === false) {
                                            answerItem.classList.add('answer-wrong');
                                        }
                                        i_1++;
                                    });
                                    q_1++;
                                }
                            });
                            backToResult = document.getElementById('back-result');
                            if (backToResult) {
                                backToResult.onclick = function () {
                                    location.href = '#/result?id=' + that.routeParams.id;
                                };
                            }
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        location.href = '#/';
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Answers;
}());
exports.Answers = Answers;


/***/ }),

/***/ "./src/components/choice.ts":
/*!**********************************!*\
  !*** ./src/components/choice.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Choice = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var Choice = /** @class */ (function () {
    function Choice() {
        this.quizzes = [];
        this.testResult = null;
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
    }
    Choice.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1, userInfo, result, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests')];
                    case 1:
                        _a.quizzes = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [2 /*return*/];
                    case 3:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) return [3 /*break*/, 7];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/results?userId=' + userInfo.userId)];
                    case 5:
                        result = _b.sent();
                        if (result) {
                            if (result.error !== undefined) { //predicates
                                throw new Error(result.message);
                            }
                            this.testResult = result; //predicates
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [2 /*return*/];
                    case 7:
                        this.processQuizzes();
                        return [2 /*return*/];
                }
            });
        });
    };
    Choice.prototype.processQuizzes = function () {
        var _this = this;
        var choiceOptionsElement = document.getElementById('choice-options');
        if (this.quizzes && this.quizzes.length > 0 && choiceOptionsElement) {
            this.quizzes.forEach(function (quiz) {
                var that = _this;
                var choiceOptionElement = document.createElement('div');
                choiceOptionElement.className = 'choice-option';
                choiceOptionElement.setAttribute('data-id', quiz.id.toString());
                choiceOptionElement.onclick = function () {
                    that.chooseQuiz(this);
                };
                var choiceOptionTextElement = document.createElement('div');
                choiceOptionTextElement.className = 'choice-option-text';
                choiceOptionTextElement.innerText = quiz.name;
                var choiceOptionArrowElement = document.createElement('div');
                choiceOptionArrowElement.className = 'choice-option-arrow';
                if (_this.testResult) {
                    var result = _this.testResult.find(function (item) { return item.testId === quiz.id; });
                    if (result) {
                        var choiceOptionResultElement = document.createElement('div');
                        choiceOptionResultElement.className = 'choice-option-result';
                        choiceOptionResultElement.innerHTML = '<div>Результат</div><div>' + result.score + '/' + result.total + '</div>';
                        choiceOptionElement.appendChild(choiceOptionResultElement);
                    }
                }
                var choiceOptionImageElement = document.createElement('img');
                choiceOptionImageElement.setAttribute('src', 'images/arrow.png');
                choiceOptionImageElement.setAttribute('alt', 'Стрелка');
                choiceOptionArrowElement.appendChild(choiceOptionImageElement);
                choiceOptionElement.appendChild(choiceOptionTextElement);
                choiceOptionElement.appendChild(choiceOptionArrowElement);
                choiceOptionsElement.appendChild(choiceOptionElement);
            });
        }
    };
    Choice.prototype.chooseQuiz = function (element) {
        var dataId = element.getAttribute('data-id');
        if (dataId) {
            location.href = '#/test?id=' + dataId;
        }
    };
    return Choice;
}());
exports.Choice = Choice;


/***/ }),

/***/ "./src/components/form.ts":
/*!********************************!*\
  !*** ./src/components/form.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Form = void 0;
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var Form = /** @class */ (function () {
    function Form(page) {
        this.fields = [];
        this.agreeElement = null;
        this.processElement = null;
        this.page = page;
        var accessToken = localStorage.getItem(auth_1.Auth.accessTokenKey);
        if (accessToken) {
            location.href = '#/choice';
            return;
        }
        this.fields = [
            {
                name: 'email',
                id: 'email',
                element: null,
                regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                valid: false,
            },
            {
                name: 'password',
                id: 'password',
                element: null,
                regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                valid: false,
            },
        ];
        if (this.page === 'signup') {
            this.fields.unshift({
                name: 'name',
                id: 'name',
                element: null,
                regex: /^[А-Я][а-я]+\s*$/,
                valid: false,
            }, {
                name: 'lastName',
                id: 'last-name',
                element: null,
                regex: /^[А-Я][а-я]+\s*$/,
                valid: false,
            });
        }
        var that = this;
        this.fields.forEach(function (item) {
            item.element = document.getElementById(item.id);
            if (item.element) {
                item.element.oninput = function () {
                    that.validateField.call(that, item, this);
                };
            }
        });
        this.processElement = document.getElementById('process');
        if (this.processElement) {
            this.processElement.onclick = function () {
                that.processForm();
            };
        }
        if (this.page === 'signup') {
            this.agreeElement = document.getElementById('agree');
            if (this.agreeElement) {
                this.agreeElement.onchange = function () {
                    that.validateForm();
                };
            }
        }
    }
    Form.prototype.validateField = function (field, element) {
        if (element.parentNode) {
            if (!element.value || !element.value.match(field.regex)) {
                element.parentNode.style.borderColor = 'red';
                field.valid = false;
            }
            else {
                element.parentNode.removeAttribute('style');
                field.valid = true;
            }
        }
        this.validateForm();
    };
    Form.prototype.validateForm = function () {
        var validForm = this.fields.every(function (item) { return item.valid; });
        var isValid = this.agreeElement ? this.agreeElement.checked && validForm : validForm;
        if (this.processElement) {
            if (isValid) {
                this.processElement.removeAttribute('disabled');
            }
            else {
                this.processElement.setAttribute('disabled', 'disabled');
            }
        }
        return isValid;
    };
    Form.prototype.processForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, result, error_1, result, error_2;
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (!this.validateForm()) return [3 /*break*/, 7];
                        email = (_b = (_a = this.fields.find(function (item) { return item.name === 'email'; })) === null || _a === void 0 ? void 0 : _a.element) === null || _b === void 0 ? void 0 : _b.value;
                        password = (_d = (_c = this.fields.find(function (item) { return item.name === 'password'; })) === null || _c === void 0 ? void 0 : _c.element) === null || _d === void 0 ? void 0 : _d.value;
                        if (!(this.page === 'signup')) return [3 /*break*/, 4];
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/signup', 'POST', {
                                name: (_f = (_e = this.fields.find(function (item) { return item.name === 'name'; })) === null || _e === void 0 ? void 0 : _e.element) === null || _f === void 0 ? void 0 : _f.value,
                                lastName: (_h = (_g = this.fields.find(function (item) { return item.name === 'lastName'; })) === null || _g === void 0 ? void 0 : _g.element) === null || _h === void 0 ? void 0 : _h.value,
                                email: email,
                                password: password,
                            })];
                    case 2:
                        result = _j.sent();
                        if (result) {
                            if (result.error || !result.user) {
                                throw new Error(result.message);
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _j.sent();
                        console.log(error_1);
                        return [2 /*return*/];
                    case 4:
                        _j.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/login', 'POST', {
                                email: email,
                                password: password,
                            })];
                    case 5:
                        result = _j.sent();
                        if (result) {
                            if (result.error || !result.accessToken || !result.refreshToken || !result.fullName || !result.userId || !email) {
                                throw new Error(result.message);
                            }
                            auth_1.Auth.setTokens(result.accessToken, result.refreshToken);
                            auth_1.Auth.setUserInfo({
                                fullName: result.fullName,
                                userId: result.userId,
                                email: email
                            });
                            location.href = '#/choice';
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _j.sent();
                        console.log(error_2);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return Form;
}());
exports.Form = Form;


/***/ }),

/***/ "./src/components/result.ts":
/*!**********************************!*\
  !*** ./src/components/result.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Result = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var Result = /** @class */ (function () {
    function Result() {
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
    }
    Result.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, that, result, resultScoreElement, resultAnswers, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = auth_1.Auth.getUserInfo();
                        that = this;
                        if (!userInfo) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        if (!this.routeParams.id) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id + '/result?userId=' + userInfo.userId)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if (result.error !== undefined) { //predicates
                                throw new Error(result.message);
                            }
                            resultScoreElement = document.getElementById('result-score');
                            if (resultScoreElement) {
                                resultScoreElement.innerText = result.score + '/' + result.total;
                            }
                            resultAnswers = document.getElementById('result-answers');
                            if (resultAnswers) {
                                resultAnswers.onclick = function () {
                                    location.href = '#/answers?id=' + that.routeParams.id;
                                };
                            }
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        location.href = '#/';
                        return [2 /*return*/];
                }
            });
        });
    };
    return Result;
}());
exports.Result = Result;


/***/ }),

/***/ "./src/components/test.ts":
/*!********************************!*\
  !*** ./src/components/test.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Test = void 0;
var url_manager_1 = __webpack_require__(/*! ../utils/url-manager */ "./src/utils/url-manager.ts");
var custom_http_1 = __webpack_require__(/*! ../services/custom-http */ "./src/services/custom-http.ts");
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var auth_1 = __webpack_require__(/*! ../services/auth */ "./src/services/auth.ts");
var action_test_type_1 = __webpack_require__(/*! ../types/action-test.type */ "./src/types/action-test.type.ts");
var Test = /** @class */ (function () {
    function Test() {
        this.interval = 0;
        this.progressBarElement = null;
        this.passButtonElement = null;
        this.prevButtonElement = null;
        this.nextButtonElement = null;
        this.questionTitleElement = null;
        this.optionsElement = null;
        this.quiz = null;
        this.currentQuestionIndex = 1;
        this.userResult = [];
        this.routeParams = url_manager_1.UrlManager.getQueryParams();
        this.init();
    }
    Test.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.routeParams.id) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if (result.error !== undefined) {
                                throw new Error(result.message);
                            }
                            this.quiz = result;
                            this.startQuiz();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Test.prototype.startQuiz = function () {
        if (!this.quiz)
            return;
        this.progressBarElement = document.getElementById('progress-bar');
        this.questionTitleElement = document.getElementById('title');
        this.optionsElement = document.getElementById('options');
        this.nextButtonElement = document.getElementById('next');
        if (this.nextButtonElement) {
            this.nextButtonElement.onclick = this.move.bind(this, action_test_type_1.ActionTestType.next);
        }
        this.passButtonElement = document.getElementById('pass');
        if (this.passButtonElement) {
            this.passButtonElement.onclick = this.move.bind(this, action_test_type_1.ActionTestType.pass);
        }
        var preTitleElement = document.getElementById('pre-title');
        if (preTitleElement) {
            preTitleElement.innerText = this.quiz.name;
        }
        this.prevButtonElement = document.getElementById('prev');
        if (this.prevButtonElement) {
            this.prevButtonElement.onclick = this.move.bind(this, action_test_type_1.ActionTestType.prev);
        }
        this.prepareProgressBar();
        this.showQuestion();
        var timerElement = document.getElementById('timer');
        var seconds = 59;
        var that = this;
        this.interval = window.setInterval(function () {
            seconds--;
            if (timerElement) {
                timerElement.innerText = seconds.toString();
            }
            if (seconds === 0) {
                clearInterval(that.interval); //или можно сделать утверждение типов
                that.complete();
            }
        }.bind(this), 1000);
    };
    Test.prototype.prepareProgressBar = function () {
        if (!this.quiz)
            return;
        for (var i = 0; i < this.quiz.questions.length; i++) {
            var itemElement = document.createElement('div');
            itemElement.className = 'test-progress-bar-item ' + (i === 0 ? 'active' : '');
            var itemCircleElement = document.createElement('div');
            itemCircleElement.className = 'test-progress-bar-item-circle';
            var itemTextElement = document.createElement('div');
            itemTextElement.className = 'test-progress-bar-item-text';
            itemTextElement.innerText = 'Вопрос ' + (i + 1);
            itemElement.appendChild(itemCircleElement);
            itemElement.appendChild(itemTextElement);
            if (this.progressBarElement) {
                this.progressBarElement.appendChild(itemElement);
            }
        }
    };
    Test.prototype.showQuestion = function () {
        var _this = this;
        if (!this.quiz)
            return;
        var activeQuestion = this.quiz.questions[this.currentQuestionIndex - 1];
        if (this.questionTitleElement) {
            this.questionTitleElement.innerHTML = '<span>Вопрос ' + this.currentQuestionIndex
                + ':</span> ' + activeQuestion.question;
        }
        if (this.optionsElement) {
            this.optionsElement.innerHTML = '';
        }
        var that = this;
        var chosenOption = this.userResult.find(function (item) { return item.questionId === activeQuestion.id; });
        activeQuestion.answers.forEach(function (answer) {
            var optionElement = document.createElement('div');
            optionElement.className = 'test-question-option';
            var inputId = 'answer-' + answer.id;
            var inputElement = document.createElement('input');
            inputElement.className = 'option-answer';
            inputElement.setAttribute('id', inputId);
            inputElement.setAttribute('type', 'radio');
            inputElement.setAttribute('name', 'answer');
            inputElement.setAttribute('value', answer.id.toString());
            if (chosenOption && chosenOption.chosenAnswerId === answer.id) {
                inputElement.setAttribute('checked', 'checked');
            }
            inputElement.onchange = function () {
                that.chooseAnswer();
            };
            var labelElement = document.createElement('label');
            labelElement.setAttribute('for', inputId);
            labelElement.innerText = answer.answer;
            optionElement.appendChild(inputElement);
            optionElement.appendChild(labelElement);
            if (_this.optionsElement) {
                _this.optionsElement.appendChild(optionElement);
            }
        });
        if (this.nextButtonElement) {
            if (chosenOption && chosenOption.chosenAnswerId) {
                this.nextButtonElement.removeAttribute('disabled');
            }
            else {
                this.nextButtonElement.setAttribute('disabled', 'disabled');
            }
        }
        if (this.nextButtonElement) {
            if (this.currentQuestionIndex === this.quiz.questions.length) {
                this.nextButtonElement.innerText = 'Завершить';
            }
            else {
                this.nextButtonElement.innerText = 'Далее';
            }
        }
        if (this.prevButtonElement) {
            if (this.currentQuestionIndex > 1) {
                this.prevButtonElement.removeAttribute('disabled');
            }
            else {
                this.prevButtonElement.setAttribute('disabled', 'disabled');
            }
        }
    };
    Test.prototype.chooseAnswer = function () {
        if (this.nextButtonElement) {
            this.nextButtonElement.removeAttribute('disabled');
        }
    };
    Test.prototype.move = function (action) {
        var _this = this;
        if (!this.quiz)
            return;
        var activeQuestion = this.quiz.questions[this.currentQuestionIndex - 1];
        var chosenAnswer = Array.from(document.getElementsByClassName('option-answer')).find(function (element) {
            return element.checked;
        });
        var chosenAnswerId = null;
        if (chosenAnswer && chosenAnswer.value) {
            chosenAnswerId = Number(chosenAnswer.value);
        }
        var existingResult = this.userResult.find(function (item) {
            return item.questionId === activeQuestion.id;
        });
        if (chosenAnswerId) {
            if (existingResult) {
                existingResult.chosenAnswerId = chosenAnswerId;
            }
            else {
                this.userResult.push({
                    questionId: activeQuestion.id,
                    chosenAnswerId: chosenAnswerId
                });
            }
        }
        if (action === action_test_type_1.ActionTestType.next || action === action_test_type_1.ActionTestType.pass) {
            this.currentQuestionIndex++;
        }
        else {
            this.currentQuestionIndex--;
        }
        if (this.currentQuestionIndex > this.quiz.questions.length) {
            clearInterval(this.interval);
            this.complete();
            return;
        }
        if (this.progressBarElement) {
            Array.from(this.progressBarElement.children).forEach(function (item, index) {
                var currentItemIndex = index + 1;
                item.classList.remove('complete');
                item.classList.remove('active');
                if (currentItemIndex === _this.currentQuestionIndex) {
                    item.classList.add('active');
                }
                else if (currentItemIndex < _this.currentQuestionIndex) {
                    item.classList.add('complete');
                }
            });
        }
        this.showQuestion();
    };
    Test.prototype.complete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = auth_1.Auth.getUserInfo();
                        if (!userInfo) {
                            location.href = '#/';
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, custom_http_1.CustomHttp.request(config_1.default.host + '/tests/' + this.routeParams.id + '/pass', 'POST', {
                                userId: userInfo.userId,
                                results: this.userResult
                            })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            if (result.error !== undefined) { //predicates
                                throw new Error(result.message);
                            }
                            location.href = '#/result?id=' + this.routeParams.id;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Test;
}());
exports.Test = Test;


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Router = void 0;
var form_1 = __webpack_require__(/*! ./components/form */ "./src/components/form.ts");
var choice_1 = __webpack_require__(/*! ./components/choice */ "./src/components/choice.ts");
var test_1 = __webpack_require__(/*! ./components/test */ "./src/components/test.ts");
var result_1 = __webpack_require__(/*! ./components/result */ "./src/components/result.ts");
var auth_1 = __webpack_require__(/*! ./services/auth */ "./src/services/auth.ts");
var answers_1 = __webpack_require__(/*! ./components/answers */ "./src/components/answers.ts");
var Router = /** @class */ (function () {
    function Router() {
        this.contentElement = document.getElementById('content');
        this.stylesElement = document.getElementById('styles');
        this.titleElement = document.getElementById('page-title');
        this.profileElement = document.getElementById('profile');
        this.profileFullNameElement = document.getElementById('profile-full-name');
        this.routes = [
            {
                route: '#/',
                title: 'Главная',
                template: 'templates/index.html',
                styles: 'styles/index.css',
                load: function () {
                }
            },
            {
                route: '#/signup',
                title: 'Регистрация',
                template: 'templates/signup.html',
                styles: 'styles/form.css',
                load: function () {
                    new form_1.Form('signup');
                }
            },
            {
                route: '#/login',
                title: 'Вход в систему',
                template: 'templates/login.html',
                styles: 'styles/form.css',
                load: function () {
                    new form_1.Form('login');
                }
            },
            {
                route: '#/choice',
                title: 'Выбор теста',
                template: 'templates/choice.html',
                styles: 'styles/choice.css',
                load: function () {
                    new choice_1.Choice();
                }
            },
            {
                route: '#/test',
                title: 'Прохождение теста',
                template: 'templates/test.html',
                styles: 'styles/test.css',
                load: function () {
                    new test_1.Test();
                }
            },
            {
                route: '#/result',
                title: 'Результаты',
                template: 'templates/result.html',
                styles: 'styles/result.css',
                load: function () {
                    new result_1.Result();
                }
            },
            {
                route: '#/answers',
                title: 'Правильные ответы',
                template: 'templates/answers.html',
                styles: 'styles/answers.css',
                load: function () {
                    new answers_1.Answers();
                }
            },
        ];
    }
    Router.prototype.openRoute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlRoute, result, newRoute, _a, userInfo, accessToken;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        urlRoute = window.location.hash.split('?')[0];
                        if (!(urlRoute === '#/logout')) return [3 /*break*/, 2];
                        return [4 /*yield*/, auth_1.Auth.logout()];
                    case 1:
                        result = _b.sent();
                        if (result) {
                            window.location.href = '#/';
                            return [2 /*return*/];
                        }
                        else {
                            //...
                        }
                        _b.label = 2;
                    case 2:
                        newRoute = this.routes.find(function (item) {
                            return item.route === urlRoute;
                        });
                        if (!newRoute) {
                            window.location.href = '#/';
                            return [2 /*return*/];
                        }
                        if (!this.contentElement || !this.stylesElement || !this.titleElement
                            || !this.profileElement || !this.profileFullNameElement) {
                            if (urlRoute === '#/') {
                                return [2 /*return*/];
                            }
                            else {
                                window.location.href = '#/';
                                return [2 /*return*/];
                            }
                        }
                        _a = this.contentElement;
                        return [4 /*yield*/, fetch(newRoute.template).then(function (response) { return response.text(); })];
                    case 3:
                        _a.innerHTML =
                            _b.sent();
                        this.stylesElement.setAttribute('href', newRoute.styles);
                        this.titleElement.innerText = newRoute.title;
                        userInfo = auth_1.Auth.getUserInfo();
                        accessToken = localStorage.getItem(auth_1.Auth.accessTokenKey);
                        if (userInfo && accessToken) {
                            this.profileElement.style.display = 'flex';
                            this.profileFullNameElement.innerText = userInfo.fullName;
                        }
                        else {
                            this.profileElement.style.display = 'none';
                        }
                        newRoute.load();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Router;
}());
exports.Router = Router;


/***/ }),

/***/ "./src/services/auth.ts":
/*!******************************!*\
  !*** ./src/services/auth.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Auth = void 0;
var config_1 = __importDefault(__webpack_require__(/*! ../../config/config */ "./config/config.ts"));
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.processUnauthorizedResponse = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = localStorage.getItem(this.refreshTokenKey);
                        if (!refreshToken) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(config_1.default.host + '/refresh', {
                                method: 'POST',
                                headers: {
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                body: JSON.stringify({ refreshToken: refreshToken })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response && response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (result && !result.error && result.accessToken && result.refreshToken) {
                            this.setTokens(result.accessToken, result.refreshToken);
                            return [2 /*return*/, true];
                        }
                        _a.label = 3;
                    case 3:
                        this.removeTokens();
                        location.href = '#/';
                        return [2 /*return*/, false];
                }
            });
        });
    };
    Auth.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var refreshToken, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        refreshToken = localStorage.getItem(this.refreshTokenKey);
                        if (!refreshToken) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch(config_1.default.host + '/logout', {
                                method: "POST",
                                headers: {
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                },
                                body: JSON.stringify({ refreshToken: refreshToken })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!(response && response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        if (result && !result.error) {
                            Auth.removeTokens();
                            localStorage.removeItem(this.userInfoKey);
                            return [2 /*return*/, true];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    Auth.setTokens = function (accessToken, refreshToken) {
        localStorage.setItem(this.accessTokenKey, accessToken);
        localStorage.setItem(this.refreshTokenKey, refreshToken);
    };
    Auth.removeTokens = function () {
        localStorage.removeItem(this.accessTokenKey);
        localStorage.removeItem(this.refreshTokenKey);
    };
    Auth.setUserInfo = function (info) {
        localStorage.setItem(this.userInfoKey, JSON.stringify(info));
    };
    Auth.getUserInfo = function () {
        var userInfo = localStorage.getItem(this.userInfoKey);
        if (userInfo) {
            return JSON.parse(userInfo);
        }
        return null;
    };
    Auth.accessTokenKey = 'accessToken';
    Auth.refreshTokenKey = 'refreshToken';
    Auth.userInfoKey = 'userInfo';
    return Auth;
}());
exports.Auth = Auth;


/***/ }),

/***/ "./src/services/custom-http.ts":
/*!*************************************!*\
  !*** ./src/services/custom-http.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomHttp = void 0;
var auth_1 = __webpack_require__(/*! ./auth */ "./src/services/auth.ts");
var CustomHttp = /** @class */ (function () {
    function CustomHttp() {
    }
    CustomHttp.request = function (url_1) {
        return __awaiter(this, arguments, void 0, function (url, method, body) {
            var params, token, response, result;
            if (method === void 0) { method = "GET"; }
            if (body === void 0) { body = null; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            method: method,
                            headers: {
                                'Content-type': 'application/json',
                                'Accept': 'application/json',
                            }
                        };
                        token = localStorage.getItem(auth_1.Auth.accessTokenKey);
                        if (token) {
                            params.headers['x-access-token'] = token;
                        }
                        if (body) {
                            params.body = JSON.stringify(body);
                        }
                        return [4 /*yield*/, fetch(url, params)];
                    case 1:
                        response = _a.sent();
                        if (!(response.status < 200 || response.status >= 300)) return [3 /*break*/, 6];
                        if (!(response.status === 401)) return [3 /*break*/, 5];
                        return [4 /*yield*/, auth_1.Auth.processUnauthorizedResponse()];
                    case 2:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.request(url, method, body)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, null];
                    case 5: throw new Error(response.statusText);
                    case 6: return [4 /*yield*/, response.json()];
                    case 7: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CustomHttp;
}());
exports.CustomHttp = CustomHttp;


/***/ }),

/***/ "./src/types/action-test.type.ts":
/*!***************************************!*\
  !*** ./src/types/action-test.type.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionTestType = void 0;
var ActionTestType;
(function (ActionTestType) {
    ActionTestType["next"] = "next";
    ActionTestType["pass"] = "pass";
    ActionTestType["prev"] = "prev";
})(ActionTestType || (exports.ActionTestType = ActionTestType = {}));


/***/ }),

/***/ "./src/utils/url-manager.ts":
/*!**********************************!*\
  !*** ./src/utils/url-manager.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlManager = void 0;
var UrlManager = /** @class */ (function () {
    function UrlManager() {
    }
    UrlManager.getQueryParams = function () {
        var qs = document.location.hash.split('+').join(' ');
        var params = {}, tokens, re = /[?&]([^=]+)=([^&]*)/g;
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
    };
    return UrlManager;
}());
exports.UrlManager = UrlManager;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var router_1 = __webpack_require__(/*! ./router */ "./src/router.ts"); //потому что мы используем webpack и TSloader
var App = /** @class */ (function () {
    function App() {
        this.router = new router_1.Router();
        window.addEventListener('DOMContentLoaded', this.handleRouteChanging.bind(this));
        window.addEventListener('popstate', this.handleRouteChanging.bind(this));
    }
    App.prototype.handleRouteChanging = function () {
        this.router.openRoute();
    };
    return App;
}());
(new App());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxQkFBZTtJQUNYLElBQUksRUFBRSwyQkFBMkI7Q0FDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkQsa0dBQWdEO0FBQ2hELG1GQUFzQztBQUN0Qyx3R0FBbUQ7QUFDbkQscUdBQXlDO0FBTXpDO0lBR0k7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFYSxzQkFBSSxHQUFsQjs7Ozs7O3dCQUNVLFFBQVEsR0FBd0IsV0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuRCxJQUFJLEdBQVksSUFBSSxDQUFDO3dCQUUzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7NEJBQ1osUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7NEJBQ3JCLHNCQUFPO3dCQUNYLENBQUM7NkJBRUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQW5CLHdCQUFtQjs7Ozt3QkFFdUMscUJBQU0sd0JBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7O3dCQUFySyxNQUFNLEdBQTBDLFNBQXFIO3dCQUMzSyxJQUFJLE1BQU0sRUFBRSxDQUFDOzRCQUNULElBQUssTUFBOEIsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLENBQUM7Z0NBQ3RELE1BQU0sSUFBSSxLQUFLLENBQUUsTUFBOEIsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDN0QsQ0FBQzs0QkFFSyxlQUFlLEdBQXVCLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs0QkFDekYsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQ0FDbEIsZUFBZSxDQUFDLFNBQVMsR0FBSSxNQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ3RFLENBQUM7NEJBRUssaUJBQWlCLEdBQXVCLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQzs0QkFDN0YsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO2dDQUNwQixpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQzs0QkFDcEQsQ0FBQzs0QkFFSyxrQkFBa0IsR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzRCQUMvRixJQUFJLGtCQUFrQixJQUFJLFFBQVEsRUFBRSxDQUFDO2dDQUNqQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFDbEQsQ0FBQzs0QkFFRyxNQUFZLENBQUMsQ0FBQzs0QkFDakIsTUFBMEIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQXNCO2dDQUN0RSxJQUFNLGNBQWMsR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dDQUN0RixJQUFJLGNBQWMsRUFBRSxDQUFDO29DQUNqQixJQUFNLGVBQWEsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDcEUsZUFBYSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztvQ0FFM0MsSUFBTSxvQkFBa0IsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDekUsb0JBQWtCLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO29DQUN0RCxvQkFBa0IsQ0FBQyxTQUFTLEdBQUcsZUFBZSxHQUFHLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQzswQ0FDbEQsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7b0NBRWxDLElBQU0sWUFBVSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29DQUNqRSxZQUFVLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztvQ0FFckMsSUFBSSxHQUFDLEdBQVcsQ0FBQyxDQUFDO29DQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQXNCO3dDQUN4QyxJQUFNLFVBQVUsR0FBbUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3Q0FDakUsVUFBVSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7d0NBQ3JDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3Q0FDOUQsWUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3Q0FDbkMsZUFBYSxDQUFDLFdBQVcsQ0FBQyxvQkFBa0IsQ0FBQyxDQUFDO3dDQUM5QyxlQUFhLENBQUMsV0FBVyxDQUFDLFlBQVUsQ0FBQyxDQUFDO3dDQUN0QyxjQUFjLENBQUMsV0FBVyxDQUFDLGVBQWEsQ0FBQyxDQUFDO3dDQUUxQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7NENBQzFCLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dDQUM3QyxDQUFDOzZDQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUUsQ0FBQzs0Q0FDbEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7d0NBQzdDLENBQUM7d0NBQ0QsR0FBQyxFQUFFLENBQUM7b0NBQ1IsQ0FBQyxDQUFDLENBQUM7b0NBQ0gsR0FBQyxFQUFFLENBQUM7Z0NBQ1IsQ0FBQzs0QkFDTCxDQUFDLENBQUMsQ0FBQzs0QkFFRyxZQUFZLEdBQXVCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7NEJBQ2hGLElBQUksWUFBWSxFQUFFLENBQUM7Z0NBQ2YsWUFBWSxDQUFDLE9BQU8sR0FBRztvQ0FDbkIsUUFBUSxDQUFDLElBQUksR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0NBQ3pELENBQUM7NEJBQ0wsQ0FBQzs0QkFDRCxzQkFBTzt3QkFDWCxDQUFDOzs7O3dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7d0JBQ25CLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOzs7Ozs7S0FHaEM7SUFDTCxjQUFDO0FBQUQsQ0FBQztBQTFGWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUcEIsa0dBQWdEO0FBQ2hELHdHQUFtRDtBQUNuRCxxR0FBeUM7QUFDekMsbUZBQXNDO0FBT3RDO0lBS0k7UUFKUSxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUM3QixlQUFVLEdBQTRCLElBQUksQ0FBQztRQUkvQyxJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFYSxxQkFBSSxHQUFsQjs7Ozs7Ozt3QkFFUSxTQUFJO3dCQUFXLHFCQUFNLHdCQUFVLENBQUMsT0FBTyxDQUFDLGdCQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQzs7d0JBQS9ELEdBQUssT0FBTyxHQUFHLFNBQWdELENBQUM7Ozs7d0JBRWhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7d0JBQ25CLHNCQUFPOzt3QkFHTCxRQUFRLEdBQXdCLFdBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs2QkFDckQsUUFBUSxFQUFSLHdCQUFROzs7O3dCQUVtRCxxQkFBTSx3QkFBVSxDQUFDLE9BQU8sQ0FBQyxnQkFBTSxDQUFDLElBQUksR0FBRyx3QkFBd0IsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDOzt3QkFBbkksTUFBTSxHQUEyQyxTQUFrRjt3QkFDekksSUFBSSxNQUFNLEVBQUUsQ0FBQzs0QkFDVCxJQUFLLE1BQThCLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDLENBQU0sWUFBWTtnQ0FDeEUsTUFBTSxJQUFJLEtBQUssQ0FBRSxNQUE4QixDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUM3RCxDQUFDOzRCQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBMEIsQ0FBQyxDQUFxQixZQUFZO3dCQUNsRixDQUFDOzs7O3dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7d0JBQ25CLHNCQUFPOzt3QkFJZixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Ozs7O0tBQ3pCO0lBRU8sK0JBQWMsR0FBdEI7UUFBQSxpQkF3Q0M7UUF2Q0csSUFBTSxvQkFBb0IsR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNGLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQztZQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWtCO2dCQUNwQyxJQUFNLElBQUksR0FBVyxLQUFJLENBQUM7Z0JBQzFCLElBQU0sbUJBQW1CLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlFLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7Z0JBQ2hELG1CQUFtQixDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRSxtQkFBbUIsQ0FBQyxPQUFPLEdBQUc7b0JBQzFCLElBQUksQ0FBQyxVQUFVLENBQWMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQsSUFBTSx1QkFBdUIsR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEYsdUJBQXVCLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO2dCQUN6RCx1QkFBdUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFFOUMsSUFBTSx3QkFBd0IsR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkYsd0JBQXdCLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO2dCQUUzRCxJQUFJLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEIsSUFBTSxNQUFNLEdBQStCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQztvQkFDakcsSUFBSSxNQUFNLEVBQUUsQ0FBQzt3QkFDVCxJQUFNLHlCQUF5QixHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwRix5QkFBeUIsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7d0JBQzdELHlCQUF5QixDQUFDLFNBQVMsR0FBRywyQkFBMkIsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQzt3QkFDakgsbUJBQW1CLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUFDLENBQUM7b0JBQy9ELENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxJQUFNLHdCQUF3QixHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuRix3QkFBd0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2pFLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBRXhELHdCQUF3QixDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUMvRCxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDekQsbUJBQW1CLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBRTFELG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFTywyQkFBVSxHQUFsQixVQUFtQixPQUFvQjtRQUNuQyxJQUFNLE1BQU0sR0FBa0IsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxDQUFDLElBQUksR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzFDLENBQUM7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7QUF0Rlksd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVm5CLHdHQUFtRDtBQUNuRCxtRkFBc0M7QUFDdEMscUdBQXlDO0FBS3pDO0lBTUksY0FBWSxJQUF3QjtRQUY1QixXQUFNLEdBQW9CLEVBQUUsQ0FBQztRQUdqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFNLFdBQVcsR0FBa0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0UsSUFBSSxXQUFXLEVBQUUsQ0FBQztZQUNkLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQzNCLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLEVBQUUsRUFBRSxPQUFPO2dCQUNYLE9BQU8sRUFBRSxJQUFJO2dCQUNiLEtBQUssRUFBRSwrQ0FBK0M7Z0JBQ3RELEtBQUssRUFBRSxLQUFLO2FBQ2Y7WUFDRDtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsRUFBRSxFQUFFLFVBQVU7Z0JBQ2QsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsS0FBSyxFQUFFLGlEQUFpRDtnQkFDeEQsS0FBSyxFQUFFLEtBQUs7YUFDZjtTQUNKLENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ1osSUFBSSxFQUFFLE1BQU07Z0JBQ1osRUFBRSxFQUFFLE1BQU07Z0JBQ1YsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsS0FBSyxFQUFFLEtBQUs7YUFDZixFQUNEO2dCQUNJLElBQUksRUFBRSxVQUFVO2dCQUNoQixFQUFFLEVBQUUsV0FBVztnQkFDZixPQUFPLEVBQUUsSUFBSTtnQkFDYixLQUFLLEVBQUUsa0JBQWtCO2dCQUN6QixLQUFLLEVBQUUsS0FBSzthQUNmLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCxJQUFNLElBQUksR0FBUyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFtQjtZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBcUIsQ0FBQztZQUNwRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRztvQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBb0IsSUFBSSxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUc7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QixDQUFDO1FBQ0wsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFxQixDQUFDO1lBQ3pFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRztvQkFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRU8sNEJBQWEsR0FBckIsVUFBc0IsS0FBb0IsRUFBRSxPQUF5QjtRQUNqRSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUNyRCxPQUFPLENBQUMsVUFBMEIsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDOUQsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDeEIsQ0FBQztpQkFBTSxDQUFDO2dCQUNILE9BQU8sQ0FBQyxVQUEwQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0QsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDdkIsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLDJCQUFZLEdBQXBCO1FBQ0ksSUFBTSxTQUFTLEdBQVksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDakUsSUFBTSxPQUFPLEdBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDaEcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsSUFBSSxPQUFPLEVBQUUsQ0FBQztnQkFDVixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzdELENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVhLDBCQUFXLEdBQXpCOzs7Ozs7OzZCQUNRLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsd0JBQW1CO3dCQUNiLEtBQUssR0FBSSxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFyQixDQUFxQixDQUFDLDBDQUFFLE9BQU8sMENBQUUsS0FBSyxDQUFDO3dCQUN6RSxRQUFRLEdBQUksZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBeEIsQ0FBd0IsQ0FBQywwQ0FBRSxPQUFPLDBDQUFFLEtBQUssQ0FBQzs2QkFFakYsS0FBSSxDQUFDLElBQUksS0FBSyxRQUFRLEdBQXRCLHdCQUFzQjs7Ozt3QkFFaUIscUJBQU0sd0JBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUyxFQUFFLE1BQU0sRUFBRTtnQ0FDekYsSUFBSSxFQUFFLGdCQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQXBCLENBQW9CLENBQUMsMENBQUUsT0FBTywwQ0FBRSxLQUFLO2dDQUNwRSxRQUFRLEVBQUUsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBeEIsQ0FBd0IsQ0FBQywwQ0FBRSxPQUFPLDBDQUFFLEtBQUs7Z0NBQzVFLEtBQUssRUFBRSxLQUFLO2dDQUNaLFFBQVEsRUFBRSxRQUFROzZCQUNyQixDQUFDOzt3QkFMSSxNQUFNLEdBQXVCLFNBS2pDO3dCQUNGLElBQUksTUFBTSxFQUFFLENBQUM7NEJBQ1QsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dDQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDcEMsQ0FBQzt3QkFDTCxDQUFDOzs7O3dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7d0JBQ25CLHNCQUFPOzs7d0JBS3VCLHFCQUFNLHdCQUFVLENBQUMsT0FBTyxDQUFDLGdCQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0NBQ3ZGLEtBQUssRUFBRSxLQUFLO2dDQUNaLFFBQVEsRUFBRSxRQUFROzZCQUNyQixDQUFDOzt3QkFISSxNQUFNLEdBQXNCLFNBR2hDO3dCQUNGLElBQUksTUFBTSxFQUFFLENBQUM7NEJBQ1QsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dDQUM5RyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDcEMsQ0FBQzs0QkFHRCxXQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUN4RCxXQUFJLENBQUMsV0FBVyxDQUFDO2dDQUNiLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtnQ0FDekIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2dDQUNyQixLQUFLLEVBQUUsS0FBSzs2QkFDZixDQUFDOzRCQUNGLFFBQVEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO3dCQUMvQixDQUFDOzs7O3dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7Ozs7OztLQUc5QjtJQUNMLFdBQUM7QUFBRCxDQUFDO0FBekpZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BqQixrR0FBZ0Q7QUFDaEQsd0dBQW1EO0FBQ25ELHFHQUF5QztBQUN6QyxtRkFBc0M7QUFNdEM7SUFHSTtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsd0JBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVhLHFCQUFJLEdBQWxCOzs7Ozs7d0JBQ1UsUUFBUSxHQUF3QixXQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ25ELElBQUksR0FBVyxJQUFJLENBQUM7d0JBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDWixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs0QkFDckIsc0JBQU87d0JBQ1gsQ0FBQzs2QkFFRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBbkIsd0JBQW1COzs7O3dCQUU0QyxxQkFBTSx3QkFBVSxDQUFDLE9BQU8sQ0FBQyxnQkFBTSxDQUFDLElBQUksR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7d0JBQWxLLE1BQU0sR0FBK0MsU0FBNkc7d0JBRXhLLElBQUksTUFBTSxFQUFFLENBQUM7NEJBQ1QsSUFBSyxNQUE4QixDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFNLFlBQVk7Z0NBQ3hFLE1BQU0sSUFBSSxLQUFLLENBQUUsTUFBOEIsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDN0QsQ0FBQzs0QkFDSyxrQkFBa0IsR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFDdkYsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO2dDQUNyQixrQkFBa0IsQ0FBQyxTQUFTLEdBQUksTUFBK0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFJLE1BQStCLENBQUMsS0FBSyxDQUFDOzRCQUN6SCxDQUFDOzRCQUNLLGFBQWEsR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzRCQUNwRixJQUFJLGFBQWEsRUFBRSxDQUFDO2dDQUNoQixhQUFhLENBQUMsT0FBTyxHQUFHO29DQUNwQixRQUFRLENBQUMsSUFBSSxHQUFHLGVBQWUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztnQ0FDMUQsQ0FBQzs0QkFDTCxDQUFDOzRCQUNELHNCQUFPO3dCQUNYLENBQUM7Ozs7d0JBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsQ0FBQzs7O3dCQUkzQixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7Ozs7S0FFeEI7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQTVDWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkIsa0dBQWdEO0FBQ2hELHdHQUFtRDtBQUNuRCxxR0FBeUM7QUFDekMsbUZBQXNDO0FBS3RDLGlIQUF5RDtBQUl6RDtJQWFJO1FBRlEsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUd6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLHdCQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFYSxtQkFBSSxHQUFsQjs7Ozs7OzZCQUNRLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFuQix3QkFBbUI7Ozs7d0JBRWdDLHFCQUFNLHdCQUFVLENBQUMsT0FBTyxDQUFDLGdCQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQzs7d0JBQWhILE1BQU0sR0FBbUMsU0FBdUU7d0JBQ3RILElBQUksTUFBTSxFQUFFLENBQUM7NEJBQ1QsSUFBSyxNQUE4QixDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztnQ0FDdEQsTUFBTSxJQUFJLEtBQUssQ0FBRSxNQUE4QixDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUM3RCxDQUFDOzRCQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBa0IsQ0FBQzs0QkFDL0IsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNyQixDQUFDOzs7O3dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUM7Ozs7OztLQUc5QjtJQUVPLHdCQUFTLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxpQ0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGlDQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0UsQ0FBQztRQUNELElBQU0sZUFBZSxHQUF1QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pGLElBQUksZUFBZSxFQUFFLENBQUM7WUFDbEIsZUFBZSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMvQyxDQUFDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxpQ0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFFRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBTSxZQUFZLEdBQXVCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUUsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDL0IsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUNmLFlBQVksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hELENBQUM7WUFDRCxJQUFJLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDaEIsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFHLHFDQUFxQztnQkFDckUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUM7UUFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxpQ0FBa0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxJQUFNLFdBQVcsR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RSxXQUFXLENBQUMsU0FBUyxHQUFHLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU5RSxJQUFNLGlCQUFpQixHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVFLGlCQUFpQixDQUFDLFNBQVMsR0FBRywrQkFBK0IsQ0FBQztZQUU5RCxJQUFNLGVBQWUsR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRSxlQUFlLENBQUMsU0FBUyxHQUFHLDZCQUE2QixDQUFDO1lBQzFELGVBQWUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWhELFdBQVcsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMzQyxXQUFXLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRXpDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRU8sMkJBQVksR0FBcEI7UUFBQSxpQkFvRUM7UUFuRUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV2QixJQUFNLGNBQWMsR0FBcUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQjtrQkFDM0UsV0FBVyxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDaEQsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDO1FBQ3hCLElBQU0sWUFBWSxHQUErQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLFVBQVUsS0FBSyxjQUFjLENBQUMsRUFBRSxFQUFyQyxDQUFxQyxDQUFDLENBQUM7UUFDckgsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFzQjtZQUNsRCxJQUFNLGFBQWEsR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4RSxhQUFhLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1lBRWpELElBQU0sT0FBTyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3RDLElBQU0sWUFBWSxHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pFLFlBQVksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1lBQ3pDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLFlBQVksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUN6RCxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsY0FBYyxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUQsWUFBWSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO1lBQ25ELENBQUM7WUFFRCxZQUFZLENBQUMsUUFBUSxHQUFHO2dCQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsQ0FBQztZQUVELElBQU0sWUFBWSxHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pFLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUV2QyxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFeEMsSUFBSSxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ25ELENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNoRSxDQUFDO1FBQ0wsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsV0FBVztZQUNsRCxDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxPQUFPO1lBQzlDLENBQUM7UUFDTCxDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN2RCxDQUFDO2lCQUFNLENBQUM7Z0JBQ0osSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEUsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRU8sMkJBQVksR0FBcEI7UUFDSSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsQ0FBQztJQUNMLENBQUM7SUFFTyxtQkFBSSxHQUFaLFVBQWEsTUFBc0I7UUFBbkMsaUJBdURDO1FBdERHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFFdkIsSUFBTSxjQUFjLEdBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFNLFlBQVksR0FBaUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQU87WUFDeEgsT0FBUSxPQUE0QixDQUFDLE9BQU8sQ0FBQztRQUNqRCxDQUFDLENBQXFCLENBQUM7UUFFdkIsSUFBSSxjQUFjLEdBQWtCLElBQUksQ0FBQztRQUN6QyxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELElBQU0sY0FBYyxHQUErQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFJO1lBQ3hFLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxjQUFjLENBQUMsRUFBRTtRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksY0FBYyxFQUFFLENBQUM7WUFDakIsSUFBSSxjQUFjLEVBQUUsQ0FBQztnQkFDakIsY0FBYyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7WUFDbkQsQ0FBQztpQkFBTSxDQUFDO2dCQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNqQixVQUFVLEVBQUUsY0FBYyxDQUFDLEVBQUU7b0JBQzdCLGNBQWMsRUFBRSxjQUFjO2lCQUNqQyxDQUFDO1lBQ04sQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLE1BQU0sS0FBSyxpQ0FBYyxDQUFDLElBQUksSUFBSSxNQUFNLEtBQUssaUNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoQyxDQUFDO2FBQU0sQ0FBQztZQUNKLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6RCxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBYSxFQUFFLEtBQWE7Z0JBQzlFLElBQU0sZ0JBQWdCLEdBQVcsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUVoQyxJQUFJLGdCQUFnQixLQUFLLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUNqRCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakMsQ0FBQztxQkFBTSxJQUFJLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO29CQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztZQUNMLENBQUMsQ0FBQztRQUNOLENBQUM7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVhLHVCQUFRLEdBQXRCOzs7Ozs7d0JBQ1UsUUFBUSxHQUF3QixXQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ3pELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDWixRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs0QkFDckIsc0JBQU87d0JBQ1gsQ0FBQzs7Ozt3QkFHOEQscUJBQU0sd0JBQVUsQ0FBQyxPQUFPLENBQUMsZ0JBQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxNQUFNLEVBQy9JO2dDQUNJLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTTtnQ0FDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVOzZCQUMzQixDQUFDOzt3QkFKQSxNQUFNLEdBQStDLFNBSXJEO3dCQUVOLElBQUksTUFBTSxFQUFFLENBQUM7NEJBQ1QsSUFBSyxNQUE4QixDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFNLFlBQVk7Z0NBQ3hFLE1BQU0sSUFBSSxLQUFLLENBQUUsTUFBOEIsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDN0QsQ0FBQzs0QkFDRCxRQUFRLENBQUMsSUFBSSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQzt3QkFDekQsQ0FBQzs7Ozt3QkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxDQUFDOzs7Ozs7S0FFMUI7SUFDTCxXQUFDO0FBQUQsQ0FBQztBQTNRWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaakIsc0ZBQXVDO0FBQ3ZDLDRGQUEyQztBQUMzQyxzRkFBdUM7QUFDdkMsNEZBQTJDO0FBQzNDLGtGQUFxQztBQUNyQywrRkFBNkM7QUFJN0M7SUFTSTtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDVjtnQkFDSSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxLQUFLLEVBQUUsU0FBUztnQkFDaEIsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsTUFBTSxFQUFFLGtCQUFrQjtnQkFDMUIsSUFBSSxFQUFFO2dCQUNOLENBQUM7YUFDSjtZQUNEO2dCQUNJLEtBQUssRUFBRSxVQUFVO2dCQUNqQixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsSUFBSSxFQUFFO29CQUNGLElBQUksV0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN2QixDQUFDO2FBQ0o7WUFDRDtnQkFDSSxLQUFLLEVBQUUsU0FBUztnQkFDaEIsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsSUFBSSxFQUFFO29CQUNGLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2FBQ0o7WUFDRDtnQkFDSSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLE1BQU0sRUFBRSxtQkFBbUI7Z0JBQzNCLElBQUksRUFBRTtvQkFDRixJQUFJLGVBQU0sRUFBRSxDQUFDO2dCQUNqQixDQUFDO2FBQ0o7WUFDRDtnQkFDSSxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QixJQUFJLEVBQUU7b0JBQ0YsSUFBSSxXQUFJLEVBQUUsQ0FBQztnQkFDZixDQUFDO2FBQ0o7WUFDRDtnQkFDSSxLQUFLLEVBQUUsVUFBVTtnQkFDakIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLE1BQU0sRUFBRSxtQkFBbUI7Z0JBQzNCLElBQUksRUFBRTtvQkFDRixJQUFJLGVBQU0sRUFBRSxDQUFDO2dCQUNqQixDQUFDO2FBQ0o7WUFDRDtnQkFDSSxLQUFLLEVBQUUsV0FBVztnQkFDbEIsS0FBSyxFQUFFLG1CQUFtQjtnQkFDMUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsTUFBTSxFQUFFLG9CQUFvQjtnQkFDNUIsSUFBSSxFQUFFO29CQUNGLElBQUksaUJBQU8sRUFBRSxDQUFDO2dCQUNsQixDQUFDO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFWSwwQkFBUyxHQUF0Qjs7Ozs7O3dCQUNVLFFBQVEsR0FBVyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQ3hELFNBQVEsS0FBSyxVQUFVLEdBQXZCLHdCQUF1Qjt3QkFDQyxxQkFBTSxXQUFJLENBQUMsTUFBTSxFQUFFOzt3QkFBckMsTUFBTSxHQUFZLFNBQW1CO3dCQUMzQyxJQUFJLE1BQU0sRUFBRSxDQUFDOzRCQUNULE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs0QkFDNUIsc0JBQU87d0JBQ1gsQ0FBQzs2QkFBTSxDQUFDOzRCQUNKLEtBQUs7d0JBQ1QsQ0FBQzs7O3dCQUdDLFFBQVEsR0FBMEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBSTs0QkFDekQsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQzt3QkFDbkMsQ0FBQyxDQUFDLENBQUM7d0JBRUgsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzRCQUNaLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs0QkFDNUIsc0JBQU87d0JBQ1gsQ0FBQzt3QkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTsrQkFDOUQsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7NEJBQzFELElBQUksUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO2dDQUNwQixzQkFBTzs0QkFDWCxDQUFDO2lDQUFNLENBQUM7Z0NBQ0osTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dDQUM1QixzQkFBTzs0QkFDWCxDQUFDO3dCQUNMLENBQUM7d0JBRUQsU0FBSSxDQUFDLGNBQWM7d0JBQ2YscUJBQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQVEsSUFBSSxlQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDOzt3QkFEcEUsR0FBb0IsU0FBUzs0QkFDekIsU0FBZ0UsQ0FBQzt3QkFDckUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFFdkMsUUFBUSxHQUF3QixXQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ25ELFdBQVcsR0FBa0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7d0JBQzdFLElBQUksUUFBUSxJQUFJLFdBQVcsRUFBRSxDQUFDOzRCQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzRCQUMzQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7d0JBQzlELENBQUM7NkJBQU0sQ0FBQzs0QkFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3dCQUMvQyxDQUFDO3dCQUVELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7Ozs7S0FDbkI7SUFDTCxhQUFDO0FBQUQsQ0FBQztBQWpJWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkIscUdBQXlDO0FBS3pDO0lBQUE7SUErRUEsQ0FBQztJQTFFdUIsZ0NBQTJCLEdBQS9DOzs7Ozs7d0JBQ1UsWUFBWSxHQUFrQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzs2QkFDM0UsWUFBWSxFQUFaLHdCQUFZO3dCQUNlLHFCQUFNLEtBQUssQ0FBQyxnQkFBTSxDQUFDLElBQUksR0FBRyxVQUFVLEVBQUU7Z0NBQzdELE1BQU0sRUFBRSxNQUFNO2dDQUNkLE9BQU8sRUFBRTtvQ0FDTCxjQUFjLEVBQUUsa0JBQWtCO29DQUNsQyxRQUFRLEVBQUUsa0JBQWtCO2lDQUMvQjtnQ0FDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFlBQVksRUFBRSxZQUFZLEVBQUMsQ0FBQzs2QkFDckQsQ0FBQzs7d0JBUEksUUFBUSxHQUFhLFNBT3pCOzZCQUVFLFNBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsR0FBbkMsd0JBQW1DO3dCQUNRLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUU7O3dCQUExRCxNQUFNLEdBQStCLFNBQXFCO3dCQUNoRSxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7NEJBQ3ZFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQ3hELHNCQUFPLElBQUksRUFBQzt3QkFDaEIsQ0FBQzs7O3dCQUlULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDcEIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7d0JBQ3JCLHNCQUFPLEtBQUssRUFBQzs7OztLQUNoQjtJQUVtQixXQUFNLEdBQTFCOzs7Ozs7d0JBQ1UsWUFBWSxHQUFrQixZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzs2QkFDM0UsWUFBWSxFQUFaLHdCQUFZO3dCQUNlLHFCQUFNLEtBQUssQ0FBQyxnQkFBTSxDQUFDLElBQUksR0FBRyxTQUFTLEVBQUU7Z0NBQzVELE1BQU0sRUFBRSxNQUFNO2dDQUNkLE9BQU8sRUFBRTtvQ0FDTCxjQUFjLEVBQUUsa0JBQWtCO29DQUNsQyxRQUFRLEVBQUUsa0JBQWtCO2lDQUMvQjtnQ0FDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFlBQVksRUFBRSxZQUFZLEVBQUMsQ0FBQzs2QkFDckQsQ0FBQzs7d0JBUEksUUFBUSxHQUFhLFNBT3pCOzZCQUVFLFNBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsR0FBbkMsd0JBQW1DO3dCQUNPLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUU7O3dCQUF6RCxNQUFNLEdBQThCLFNBQXFCO3dCQUMvRCxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDMUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDOzRCQUNwQixZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzs0QkFDMUMsc0JBQU8sSUFBSSxFQUFDO3dCQUNoQixDQUFDOzs0QkFHVCxzQkFBTyxLQUFLLEVBQUM7Ozs7S0FDaEI7SUFHYSxjQUFTLEdBQXZCLFVBQXdCLFdBQW1CLEVBQUUsWUFBb0I7UUFDN0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZELFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRWMsaUJBQVksR0FBM0I7UUFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM3QyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRWEsZ0JBQVcsR0FBekIsVUFBMEIsSUFBa0I7UUFDeEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRWEsZ0JBQVcsR0FBekI7UUFDSSxJQUFNLFFBQVEsR0FBa0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkUsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQTVFYSxtQkFBYyxHQUFXLGFBQWEsQ0FBQztJQUN0QyxvQkFBZSxHQUFXLGNBQWMsQ0FBQztJQUN6QyxnQkFBVyxHQUFXLFVBQVUsQ0FBQztJQTRFcEQsV0FBQztDQUFBO0FBL0VZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xqQix5RUFBNEI7QUFFNUI7SUFBQTtJQW1DQSxDQUFDO0lBbEN1QixrQkFBTyxHQUEzQjs0REFBNEIsR0FBVyxFQUFFLE1BQXNCLEVBQUUsSUFBZ0I7O1lBQXhDLHVDQUFzQjtZQUFFLGtDQUFnQjs7Ozt3QkFDdkUsTUFBTSxHQUFROzRCQUNoQixNQUFNLEVBQUUsTUFBTTs0QkFDZCxPQUFPLEVBQUU7Z0NBQ0wsY0FBYyxFQUFFLGtCQUFrQjtnQ0FDbEMsUUFBUSxFQUFFLGtCQUFrQjs2QkFDL0I7eUJBQ0osQ0FBQzt3QkFDRSxLQUFLLEdBQWtCLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNyRSxJQUFJLEtBQUssRUFBRSxDQUFDOzRCQUNSLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxLQUFLLENBQUM7d0JBQzdDLENBQUM7d0JBRUQsSUFBSSxJQUFJLEVBQUUsQ0FBQzs0QkFDUCxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3ZDLENBQUM7d0JBRTBCLHFCQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDOzt3QkFBN0MsUUFBUSxHQUFhLFNBQXdCOzZCQUUvQyxTQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBL0Msd0JBQStDOzZCQUMzQyxTQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsR0FBdkIsd0JBQXVCO3dCQUNDLHFCQUFNLFdBQUksQ0FBQywyQkFBMkIsRUFBRTs7d0JBQTFELE1BQU0sR0FBWSxTQUF3Qzs2QkFDNUQsTUFBTSxFQUFOLHdCQUFNO3dCQUNDLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7NEJBQTVDLHNCQUFPLFNBQXFDLEVBQUM7NEJBRTdDLHNCQUFPLElBQUksRUFBQzs0QkFJcEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBR2xDLHFCQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUU7NEJBQTVCLHNCQUFPLFNBQXFCLEVBQUM7Ozs7S0FDaEM7SUFDTCxpQkFBQztBQUFELENBQUM7QUFuQ1ksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7O0FDRnZCLElBQVksY0FJWDtBQUpELFdBQVksY0FBYztJQUN0QiwrQkFBYTtJQUNiLCtCQUFhO0lBQ2IsK0JBQWE7QUFDakIsQ0FBQyxFQUpXLGNBQWMsOEJBQWQsY0FBYyxRQUl6Qjs7Ozs7Ozs7Ozs7Ozs7QUNGRDtJQUFBO0lBY0EsQ0FBQztJQWJpQix5QkFBYyxHQUE1QjtRQUNJLElBQU0sRUFBRSxHQUFXLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFL0QsSUFBSSxNQUFNLEdBQW9CLEVBQUUsRUFDNUIsTUFBOEIsRUFDOUIsRUFBRSxHQUFVLHNCQUFzQixDQUFDO1FBRXZDLE9BQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMxQixNQUFNLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQztBQWRZLGdDQUFVOzs7Ozs7O1VDRnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxzRUFBZ0MsQ0FBSSw2Q0FBNkM7QUFFakY7SUFHSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztRQUMzQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFDTyxpQ0FBbUIsR0FBM0I7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFDTCxVQUFDO0FBQUQsQ0FBQztBQUVELENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpei8uL2NvbmZpZy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2Fuc3dlcnMudHMiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9jb21wb25lbnRzL2Nob2ljZS50cyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2NvbXBvbmVudHMvZm9ybS50cyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL2NvbXBvbmVudHMvcmVzdWx0LnRzIiwid2VicGFjazovL3F1aXovLi9zcmMvY29tcG9uZW50cy90ZXN0LnRzIiwid2VicGFjazovL3F1aXovLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL3F1aXovLi9zcmMvc2VydmljZXMvYXV0aC50cyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL3NlcnZpY2VzL2N1c3RvbS1odHRwLnRzIiwid2VicGFjazovL3F1aXovLi9zcmMvdHlwZXMvYWN0aW9uLXRlc3QudHlwZS50cyIsIndlYnBhY2s6Ly9xdWl6Ly4vc3JjL3V0aWxzL3VybC1tYW5hZ2VyLnRzIiwid2VicGFjazovL3F1aXovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcXVpei8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaG9zdDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGknXHJcbn0iLCJpbXBvcnQge1VybE1hbmFnZXJ9IGZyb20gXCIuLi91dGlscy91cmwtbWFuYWdlclwiO1xyXG5pbXBvcnQge0F1dGh9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoXCI7XHJcbmltcG9ydCB7Q3VzdG9tSHR0cH0gZnJvbSBcIi4uL3NlcnZpY2VzL2N1c3RvbS1odHRwXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcclxuaW1wb3J0IHtRdWVyeVBhcmFtc1R5cGV9IGZyb20gXCIuLi90eXBlcy9xdWVyeS1wYXJhbXMudHlwZVwiO1xyXG5pbXBvcnQge1VzZXJJbmZvVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXItaW5mby50eXBlXCI7XHJcbmltcG9ydCB7RGVmYXVsdFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2RlZmF1bHQtcmVzcG9uc2UudHlwZVwiO1xyXG5pbXBvcnQge1F1aXpBbnN3ZXJUeXBlLCBRdWl6UXVlc3Rpb25UeXBlLCBRdWl6VHlwZUFuc3dlcnN9IGZyb20gXCIuLi90eXBlcy9xdWl6LnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbnN3ZXJzIHtcclxuICAgIHByaXZhdGUgcm91dGVQYXJhbXM6IFF1ZXJ5UGFyYW1zVHlwZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJvdXRlUGFyYW1zID0gVXJsTWFuYWdlci5nZXRRdWVyeVBhcmFtcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBjb25zdCB1c2VySW5mbzogVXNlckluZm9UeXBlIHwgbnVsbCA9IEF1dGguZ2V0VXNlckluZm8oKTtcclxuICAgICAgICBjb25zdCB0aGF0OiBBbnN3ZXJzID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCF1c2VySW5mbykge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucm91dGVQYXJhbXMuaWQpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogRGVmYXVsdFJlc3BvbnNlVHlwZSB8IFF1aXpUeXBlQW5zd2VycyA9IGF3YWl0IEN1c3RvbUh0dHAucmVxdWVzdChjb25maWcuaG9zdCArICcvdGVzdHMvJyArIHRoaXMucm91dGVQYXJhbXMuaWQgKyAnL3Jlc3VsdC9kZXRhaWxzP3VzZXJJZD0nICsgdXNlckluZm8udXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdCBhcyBEZWZhdWx0UmVzcG9uc2VUeXBlKS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigocmVzdWx0IGFzIERlZmF1bHRSZXNwb25zZVR5cGUpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zd2Vyc1Rlc3ROYW1lOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2Vycy10ZXN0LW5hbWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2Vyc1Rlc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNUZXN0TmFtZS5pbm5lclRleHQgPSAocmVzdWx0IGFzIFF1aXpUeXBlQW5zd2VycykudGVzdC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zd2Vyc1BlcnNvbk5hbWU6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbnN3ZXJzLXBlcnNvbi1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlcnNQZXJzb25OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNQZXJzb25OYW1lLmlubmVyVGV4dCA9IHVzZXJJbmZvLmZ1bGxOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zd2Vyc1BlcnNvbkVtYWlsOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2Vycy1wZXJzb24tZW1haWwnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2Vyc1BlcnNvbkVtYWlsICYmIHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNQZXJzb25FbWFpbC5pbm5lclRleHQgPSB1c2VySW5mby5lbWFpbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBxOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQgYXMgUXVpelR5cGVBbnN3ZXJzKS50ZXN0LnF1ZXN0aW9ucy5mb3JFYWNoKChpdGVtOiBRdWl6UXVlc3Rpb25UeXBlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuc3dlcnNPcHRpb25zOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5zd2Vycy1vcHRpb25zJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXJzT3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zd2Vyc09wdGlvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNPcHRpb24uY2xhc3NOYW1lID0gJ2Fuc3dlcnMtb3B0aW9uJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbnN3ZXJzT3B0aW9uVGl0bGU6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzT3B0aW9uVGl0bGUuY2xhc3NOYW1lID0gJ2Fuc3dlcnMtb3B0aW9uLXRpdGxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNPcHRpb25UaXRsZS5pbm5lckhUTUwgPSAnPHNwYW4+0JLQvtC/0YDQvtGBICcgKyAocSArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAnOjwvc3Bhbj4gJyArIGl0ZW0ucXVlc3Rpb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zd2VyTGlzdDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckxpc3QuY2xhc3NOYW1lID0gJ2Fuc3dlci1saXN0JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaTogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYW5zd2Vycy5mb3JFYWNoKChhbnN3ZXI6IFF1aXpBbnN3ZXJUeXBlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5zd2VySXRlbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJJdGVtLmNsYXNzTmFtZSA9ICdhbnN3ZXItaXRlbSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VySXRlbS5pbm5lckhUTUwgPSAnPGlucHV0IHR5cGU9XCJyYWRpb1wiPicgKyBhbnN3ZXIuYW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckxpc3QuYXBwZW5kQ2hpbGQoYW5zd2VySXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vyc09wdGlvbi5hcHBlbmRDaGlsZChhbnN3ZXJzT3B0aW9uVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNPcHRpb24uYXBwZW5kQ2hpbGQoYW5zd2VyTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vyc09wdGlvbnMuYXBwZW5kQ2hpbGQoYW5zd2Vyc09wdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuY29ycmVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJJdGVtLmNsYXNzTGlzdC5hZGQoJ2Fuc3dlci1yaWdodCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyLmNvcnJlY3QgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckl0ZW0uY2xhc3NMaXN0LmFkZCgnYW5zd2VyLXdyb25nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tUb1Jlc3VsdDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2stcmVzdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tUb1Jlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrVG9SZXN1bHQub25jbGljayA9IGZ1bmN0aW9uICgpOiB2b2lkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy9yZXN1bHQ/aWQ9JyArIHRoYXQucm91dGVQYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtVcmxNYW5hZ2VyfSBmcm9tIFwiLi4vdXRpbHMvdXJsLW1hbmFnZXJcIjtcclxuaW1wb3J0IHtDdXN0b21IdHRwfSBmcm9tIFwiLi4vc2VydmljZXMvY3VzdG9tLWh0dHBcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0F1dGh9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoXCI7XHJcbmltcG9ydCB7UXVlcnlQYXJhbXNUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcXVlcnktcGFyYW1zLnR5cGVcIjtcclxuaW1wb3J0IHtRdWl6TGlzdFR5cGV9IGZyb20gXCIuLi90eXBlcy9xdWl6LWxpc3QudHlwZVwiO1xyXG5pbXBvcnQge1Rlc3RSZXN1bHRUeXBlfSBmcm9tIFwiLi4vdHlwZXMvdGVzdC1yZXN1bHQudHlwZVwiO1xyXG5pbXBvcnQge1VzZXJJbmZvVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXItaW5mby50eXBlXCI7XHJcbmltcG9ydCB7RGVmYXVsdFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2RlZmF1bHQtcmVzcG9uc2UudHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENob2ljZSB7XHJcbiAgICBwcml2YXRlIHF1aXp6ZXM6IFF1aXpMaXN0VHlwZVtdID0gW107XHJcbiAgICBwcml2YXRlIHRlc3RSZXN1bHQ6IFRlc3RSZXN1bHRUeXBlW10gfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcm91dGVQYXJhbXM6IFF1ZXJ5UGFyYW1zVHlwZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJvdXRlUGFyYW1zID0gVXJsTWFuYWdlci5nZXRRdWVyeVBhcmFtcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnF1aXp6ZXMgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL3Rlc3RzJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB1c2VySW5mbzogVXNlckluZm9UeXBlIHwgbnVsbCA9IEF1dGguZ2V0VXNlckluZm8oKTtcclxuICAgICAgICBpZiAodXNlckluZm8pIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogRGVmYXVsdFJlc3BvbnNlVHlwZSB8IFRlc3RSZXN1bHRUeXBlW10gPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL3Rlc3RzL3Jlc3VsdHM/dXNlcklkPScgKyB1c2VySW5mby51c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVzdWx0IGFzIERlZmF1bHRSZXNwb25zZVR5cGUpLmVycm9yICE9PSB1bmRlZmluZWQpIHsgICAgICAvL3ByZWRpY2F0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChyZXN1bHQgYXMgRGVmYXVsdFJlc3BvbnNlVHlwZSkubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlc3RSZXN1bHQgPSByZXN1bHQgYXMgVGVzdFJlc3VsdFR5cGVbXTsgICAgICAgICAgICAgICAgICAgICAvL3ByZWRpY2F0ZXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzUXVpenplcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc1F1aXp6ZXMoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2hvaWNlT3B0aW9uc0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaG9pY2Utb3B0aW9ucycpO1xyXG4gICAgICAgIGlmICh0aGlzLnF1aXp6ZXMgJiYgdGhpcy5xdWl6emVzLmxlbmd0aCA+IDAgJiYgY2hvaWNlT3B0aW9uc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWl6emVzLmZvckVhY2goKHF1aXo6IFF1aXpMaXN0VHlwZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhhdDogQ2hvaWNlID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZU9wdGlvbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAnY2hvaWNlLW9wdGlvbic7XHJcbiAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25FbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHF1aXouaWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25FbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jaG9vc2VRdWl6KDxIVE1MRWxlbWVudD50aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VPcHRpb25UZXh0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25UZXh0RWxlbWVudC5jbGFzc05hbWUgPSAnY2hvaWNlLW9wdGlvbi10ZXh0JztcclxuICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvblRleHRFbGVtZW50LmlubmVyVGV4dCA9IHF1aXoubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaG9pY2VPcHRpb25BcnJvd0VsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uQXJyb3dFbGVtZW50LmNsYXNzTmFtZSA9ICdjaG9pY2Utb3B0aW9uLWFycm93JztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXN0UmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBUZXN0UmVzdWx0VHlwZSB8IHVuZGVmaW5lZCA9IHRoaXMudGVzdFJlc3VsdC5maW5kKGl0ZW0gPT4gaXRlbS50ZXN0SWQgPT09IHF1aXouaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlT3B0aW9uUmVzdWx0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvblJlc3VsdEVsZW1lbnQuY2xhc3NOYW1lID0gJ2Nob2ljZS1vcHRpb24tcmVzdWx0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uUmVzdWx0RWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdj7QoNC10LfRg9C70YzRgtCw0YI8L2Rpdj48ZGl2PicgKyByZXN1bHQuc2NvcmUgKyAnLycgKyByZXN1bHQudG90YWwgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChjaG9pY2VPcHRpb25SZXN1bHRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlT3B0aW9uSW1hZ2VFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbkltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWFnZXMvYXJyb3cucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25JbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhbHQnLCAn0KHRgtGA0LXQu9C60LAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaG9pY2VPcHRpb25BcnJvd0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hvaWNlT3B0aW9uSW1hZ2VFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hvaWNlT3B0aW9uVGV4dEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlT3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChjaG9pY2VPcHRpb25BcnJvd0VsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNob2ljZU9wdGlvbnNFbGVtZW50LmFwcGVuZENoaWxkKGNob2ljZU9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaG9vc2VRdWl6KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0YUlkOiBzdHJpbmcgfCBudWxsID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgICAgICBpZiAoZGF0YUlkKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnIy90ZXN0P2lkPScgKyBkYXRhSWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q3VzdG9tSHR0cH0gZnJvbSBcIi4uL3NlcnZpY2VzL2N1c3RvbS1odHRwXCI7XHJcbmltcG9ydCB7QXV0aH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0Zvcm1GaWVsZFR5cGV9IGZyb20gXCIuLi90eXBlcy9mb3JtLWZpZWxkLnR5cGVcIjtcclxuaW1wb3J0IHtTaWdudXBSZXNwb25zZVR5cGV9IGZyb20gXCIuLi90eXBlcy9zaWdudXAtcmVzcG9uc2UudHlwZVwiO1xyXG5pbXBvcnQge0xvZ2luUmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vdHlwZXMvbG9naW4tcmVzcG9uc2UudHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm0ge1xyXG4gICAgcmVhZG9ubHkgYWdyZWVFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbDsgICAgICAvL3JlYWRvbmx5INC/0L7RgtC+0LzRgyDRh9GC0L4g0LzRiyDQvdC1INC80LXQvdGP0LXQvCDQv9Cw0YDQsNC80LXRgtGAINCyINGA0LDQvNC60LDRhSDRgNCw0LHQvtGC0Ysg0LrQu9Cw0YHRgdCwXHJcbiAgICByZWFkb25seSBwcm9jZXNzRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgcGFnZTogJ3NpZ251cCcgfCAnbG9naW4nO1xyXG4gICAgcHJpdmF0ZSBmaWVsZHM6IEZvcm1GaWVsZFR5cGVbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBhZ2U6ICdzaWdudXAnIHwgJ2xvZ2luJykge1xyXG4gICAgICAgIHRoaXMuYWdyZWVFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb2Nlc3NFbGVtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG5cclxuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbjogc3RyaW5nIHwgbnVsbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEF1dGguYWNjZXNzVG9rZW5LZXkpO1xyXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbikge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvY2hvaWNlJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdlbWFpbCcsXHJcbiAgICAgICAgICAgICAgICBpZDogJ2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByZWdleDogL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLyxcclxuICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3Bhc3N3b3JkJyxcclxuICAgICAgICAgICAgICAgIGlkOiAncGFzc3dvcmQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHJlZ2V4OiAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSlbMC05YS16QS1aXXs4LH0kLyxcclxuICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYWdlID09PSAnc2lnbnVwJykge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkcy51bnNoaWZ0KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICduYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4OiAvXlvQkC3Qr11b0LAt0Y9dK1xccyokLyxcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdsYXN0TmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICdsYXN0LW5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnZXg6IC9eW9CQLdCvXVvQsC3Rj10rXFxzKiQvLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGhhdDogRm9ybSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaCgoaXRlbTogRm9ybUZpZWxkVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmVsZW1lbnQub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnZhbGlkYXRlRmllbGQuY2FsbCh0aGF0LCBpdGVtLCA8SFRNTElucHV0RWxlbWVudD50aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnByb2Nlc3NFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2Nlc3MnKTtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnByb2Nlc3NGb3JtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPT09ICdzaWdudXAnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWdyZWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FncmVlJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWdyZWVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFncmVlRWxlbWVudC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnZhbGlkYXRlRm9ybSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVGaWVsZChmaWVsZDogRm9ybUZpZWxkVHlwZSwgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgaWYgKCFlbGVtZW50LnZhbHVlIHx8ICFlbGVtZW50LnZhbHVlLm1hdGNoKGZpZWxkLnJlZ2V4KSkge1xyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJztcclxuICAgICAgICAgICAgICAgIGZpZWxkLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAoZWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxFbGVtZW50KS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdGVGb3JtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUZvcm0oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRGb3JtOiBib29sZWFuID0gdGhpcy5maWVsZHMuZXZlcnkoaXRlbSA9PiBpdGVtLnZhbGlkKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkOiBib29sZWFuID0gdGhpcy5hZ3JlZUVsZW1lbnQgPyB0aGlzLmFncmVlRWxlbWVudC5jaGVja2VkICYmIHZhbGlkRm9ybSA6IHZhbGlkRm9ybTtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzRWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHByb2Nlc3NGb3JtKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gIHRoaXMuZmllbGRzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09ICdlbWFpbCcpPy5lbGVtZW50Py52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAgdGhpcy5maWVsZHMuZmluZChpdGVtID0+IGl0ZW0ubmFtZSA9PT0gJ3Bhc3N3b3JkJyk/LmVsZW1lbnQ/LnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA9PT0gJ3NpZ251cCcpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBTaWdudXBSZXNwb25zZVR5cGUgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL3NpZ251cCcsICdQT1NUJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmZpZWxkcy5maW5kKGl0ZW0gPT4gaXRlbS5uYW1lID09PSAnbmFtZScpPy5lbGVtZW50Py52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU6IHRoaXMuZmllbGRzLmZpbmQoaXRlbSA9PiBpdGVtLm5hbWUgPT09ICdsYXN0TmFtZScpPy5lbGVtZW50Py52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yIHx8ICFyZXN1bHQudXNlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3VsdC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogTG9naW5SZXNwb25zZVR5cGUgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL2xvZ2luJywgJ1BPU1QnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IgfHwgIXJlc3VsdC5hY2Nlc3NUb2tlbiB8fCAhcmVzdWx0LnJlZnJlc2hUb2tlbiB8fCAhcmVzdWx0LmZ1bGxOYW1lIHx8ICFyZXN1bHQudXNlcklkIHx8ICFlbWFpbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzdWx0Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGguc2V0VG9rZW5zKHJlc3VsdC5hY2Nlc3NUb2tlbiwgcmVzdWx0LnJlZnJlc2hUb2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgQXV0aC5zZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiByZXN1bHQuZnVsbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogcmVzdWx0LnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvY2hvaWNlJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1VybE1hbmFnZXJ9IGZyb20gXCIuLi91dGlscy91cmwtbWFuYWdlclwiO1xyXG5pbXBvcnQge0N1c3RvbUh0dHB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jdXN0b20taHR0cFwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XHJcbmltcG9ydCB7QXV0aH0gZnJvbSBcIi4uL3NlcnZpY2VzL2F1dGhcIjtcclxuaW1wb3J0IHtRdWVyeVBhcmFtc1R5cGV9IGZyb20gXCIuLi90eXBlcy9xdWVyeS1wYXJhbXMudHlwZVwiO1xyXG5pbXBvcnQge1VzZXJJbmZvVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXItaW5mby50eXBlXCI7XHJcbmltcG9ydCB7RGVmYXVsdFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2RlZmF1bHQtcmVzcG9uc2UudHlwZVwiO1xyXG5pbXBvcnQge1Bhc3NUZXN0UmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcGFzcy10ZXN0LXJlc3BvbnNlLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHQge1xyXG4gICAgcHJpdmF0ZSByb3V0ZVBhcmFtczogUXVlcnlQYXJhbXNUeXBlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVQYXJhbXMgPSBVcmxNYW5hZ2VyLmdldFF1ZXJ5UGFyYW1zKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvOiBVc2VySW5mb1R5cGUgfCBudWxsID0gQXV0aC5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIGNvbnN0IHRoYXQ6IFJlc3VsdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF1c2VySW5mbykge1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucm91dGVQYXJhbXMuaWQpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogRGVmYXVsdFJlc3BvbnNlVHlwZSB8IFBhc3NUZXN0UmVzcG9uc2VUeXBlID0gYXdhaXQgQ3VzdG9tSHR0cC5yZXF1ZXN0KGNvbmZpZy5ob3N0ICsgJy90ZXN0cy8nICsgdGhpcy5yb3V0ZVBhcmFtcy5pZCArICcvcmVzdWx0P3VzZXJJZD0nICsgdXNlckluZm8udXNlcklkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZXN1bHQgYXMgRGVmYXVsdFJlc3BvbnNlVHlwZSkuZXJyb3IgIT09IHVuZGVmaW5lZCkgeyAgICAgIC8vcHJlZGljYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHJlc3VsdCBhcyBEZWZhdWx0UmVzcG9uc2VUeXBlKS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0U2NvcmVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0LXNjb3JlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdFNjb3JlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRTY29yZUVsZW1lbnQuaW5uZXJUZXh0ID0gKHJlc3VsdCBhcyBQYXNzVGVzdFJlc3BvbnNlVHlwZSkuc2NvcmUgKyAnLycgKyAocmVzdWx0IGFzIFBhc3NUZXN0UmVzcG9uc2VUeXBlKS50b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0QW5zd2VyczogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdC1hbnN3ZXJzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdEFuc3dlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0QW5zd2Vycy5vbmNsaWNrID0gZnVuY3Rpb24gKCk6IHZvaWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjL2Fuc3dlcnM/aWQ9JyArIHRoYXQucm91dGVQYXJhbXMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtVcmxNYW5hZ2VyfSBmcm9tIFwiLi4vdXRpbHMvdXJsLW1hbmFnZXJcIjtcclxuaW1wb3J0IHtDdXN0b21IdHRwfSBmcm9tIFwiLi4vc2VydmljZXMvY3VzdG9tLWh0dHBcIjtcclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQge0F1dGh9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoXCI7XHJcbmltcG9ydCB7UXVlcnlQYXJhbXNUeXBlfSBmcm9tIFwiLi4vdHlwZXMvcXVlcnktcGFyYW1zLnR5cGVcIjtcclxuaW1wb3J0IHtRdWl6QW5zd2VyVHlwZSwgUXVpelF1ZXN0aW9uVHlwZSwgUXVpelR5cGV9IGZyb20gXCIuLi90eXBlcy9xdWl6LnR5cGVcIjtcclxuaW1wb3J0IHtVc2VyUmVzdWx0VHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXItcmVzdWx0LnR5cGVcIjtcclxuaW1wb3J0IHtEZWZhdWx0UmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vdHlwZXMvZGVmYXVsdC1yZXNwb25zZS50eXBlXCI7XHJcbmltcG9ydCB7QWN0aW9uVGVzdFR5cGV9IGZyb20gXCIuLi90eXBlcy9hY3Rpb24tdGVzdC50eXBlXCI7XHJcbmltcG9ydCB7VXNlckluZm9UeXBlfSBmcm9tIFwiLi4vdHlwZXMvdXNlci1pbmZvLnR5cGVcIjtcclxuaW1wb3J0IHtQYXNzVGVzdFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3Bhc3MtdGVzdC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGVzdCB7XHJcbiAgICBwcml2YXRlIHByb2dyZXNzQmFyRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBwYXNzQnV0dG9uRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcmV2QnV0dG9uRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBuZXh0QnV0dG9uRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvblRpdGxlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBxdWl6OiBRdWl6VHlwZSB8IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRRdWVzdGlvbkluZGV4OiBudW1iZXI7XHJcbiAgICByZWFkb25seSB1c2VyUmVzdWx0OiBVc2VyUmVzdWx0VHlwZVtdO1xyXG4gICAgcHJpdmF0ZSByb3V0ZVBhcmFtczogUXVlcnlQYXJhbXNUeXBlO1xyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXNzQnV0dG9uRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2QnV0dG9uRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblRpdGxlRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zRWxlbWVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5xdWl6ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID0gMTtcclxuICAgICAgICB0aGlzLnVzZXJSZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLnJvdXRlUGFyYW1zID0gVXJsTWFuYWdlci5nZXRRdWVyeVBhcmFtcygpO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZVBhcmFtcy5pZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBEZWZhdWx0UmVzcG9uc2VUeXBlIHwgUXVpelR5cGUgPSBhd2FpdCBDdXN0b21IdHRwLnJlcXVlc3QoY29uZmlnLmhvc3QgKyAnL3Rlc3RzLycgKyB0aGlzLnJvdXRlUGFyYW1zLmlkKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdCBhcyBEZWZhdWx0UmVzcG9uc2VUeXBlKS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigocmVzdWx0IGFzIERlZmF1bHRSZXNwb25zZVR5cGUpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWl6ID0gcmVzdWx0IGFzIFF1aXpUeXBlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRRdWl6KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydFF1aXooKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnF1aXopIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvblRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3B0aW9ucycpO1xyXG4gICAgICAgIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xyXG4gICAgICAgIGlmICh0aGlzLm5leHRCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQub25jbGljayA9IHRoaXMubW92ZS5iaW5kKHRoaXMsIEFjdGlvblRlc3RUeXBlLm5leHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhc3NCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3MnKTtcclxuICAgICAgICBpZiAodGhpcy5wYXNzQnV0dG9uRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhc3NCdXR0b25FbGVtZW50Lm9uY2xpY2sgPSB0aGlzLm1vdmUuYmluZCh0aGlzLCBBY3Rpb25UZXN0VHlwZS5wYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJlVGl0bGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlLXRpdGxlJyk7XHJcbiAgICAgICAgaWYgKHByZVRpdGxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBwcmVUaXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5xdWl6Lm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnByZXZCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcclxuICAgICAgICBpZiAodGhpcy5wcmV2QnV0dG9uRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZCdXR0b25FbGVtZW50Lm9uY2xpY2sgPSB0aGlzLm1vdmUuYmluZCh0aGlzLCBBY3Rpb25UZXN0VHlwZS5wcmV2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJlcGFyZVByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgdGhpcy5zaG93UXVlc3Rpb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXJFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZXInKTtcclxuICAgICAgICBsZXQgc2Vjb25kcyA9IDU5O1xyXG4gICAgICAgIGNvbnN0IHRoYXQ6IFRlc3QgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWNvbmRzLS07XHJcbiAgICAgICAgICAgIGlmICh0aW1lckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWxlbWVudC5pbm5lclRleHQgPSBzZWNvbmRzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlY29uZHMgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhhdC5pbnRlcnZhbCk7ICAgLy/QuNC70Lgg0LzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCDRg9GC0LLQtdGA0LbQtNC10L3QuNC1INGC0LjQv9C+0LJcclxuICAgICAgICAgICAgICAgIHRoYXQuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmVwYXJlUHJvZ3Jlc3NCYXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnF1aXopIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaXRlbUVsZW1lbnQuY2xhc3NOYW1lID0gJ3Rlc3QtcHJvZ3Jlc3MtYmFyLWl0ZW0gJyArIChpID09PSAwID8gJ2FjdGl2ZScgOiAnJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtQ2lyY2xlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGl0ZW1DaXJjbGVFbGVtZW50LmNsYXNzTmFtZSA9ICd0ZXN0LXByb2dyZXNzLWJhci1pdGVtLWNpcmNsZSc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpdGVtVGV4dEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBpdGVtVGV4dEVsZW1lbnQuY2xhc3NOYW1lID0gJ3Rlc3QtcHJvZ3Jlc3MtYmFyLWl0ZW0tdGV4dCc7XHJcbiAgICAgICAgICAgIGl0ZW1UZXh0RWxlbWVudC5pbm5lclRleHQgPSAn0JLQvtC/0YDQvtGBICcgKyAoaSArIDEpO1xyXG5cclxuICAgICAgICAgICAgaXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoaXRlbUNpcmNsZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpdGVtRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtVGV4dEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRWxlbWVudC5hcHBlbmRDaGlsZChpdGVtRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93UXVlc3Rpb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnF1aXopIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUXVlc3Rpb246IFF1aXpRdWVzdGlvblR5cGUgPSB0aGlzLnF1aXoucXVlc3Rpb25zW3RoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggLSAxXTtcclxuICAgICAgICBpZiAodGhpcy5xdWVzdGlvblRpdGxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uVGl0bGVFbGVtZW50LmlubmVySFRNTCA9ICc8c3Bhbj7QktC+0L/RgNC+0YEgJyArIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXhcclxuICAgICAgICAgICAgICAgICsgJzo8L3NwYW4+ICcgKyBhY3RpdmVRdWVzdGlvbi5xdWVzdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc0VsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRoYXQ6IFRlc3QgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IGNob3Nlbk9wdGlvbjogVXNlclJlc3VsdFR5cGUgfCB1bmRlZmluZWQgPSB0aGlzLnVzZXJSZXN1bHQuZmluZChpdGVtID0+IGl0ZW0ucXVlc3Rpb25JZCA9PT0gYWN0aXZlUXVlc3Rpb24uaWQpO1xyXG4gICAgICAgIGFjdGl2ZVF1ZXN0aW9uLmFuc3dlcnMuZm9yRWFjaCgoYW5zd2VyOiBRdWl6QW5zd2VyVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAndGVzdC1xdWVzdGlvbi1vcHRpb24nO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5wdXRJZCA9ICdhbnN3ZXItJyArIGFuc3dlci5pZDtcclxuICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuY2xhc3NOYW1lID0gJ29wdGlvbi1hbnN3ZXInO1xyXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlucHV0SWQpO1xyXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XHJcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnYW5zd2VyJyk7XHJcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYW5zd2VyLmlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBpZiAoY2hvc2VuT3B0aW9uICYmIGNob3Nlbk9wdGlvbi5jaG9zZW5BbnN3ZXJJZCA9PT0gYW5zd2VyLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmNob29zZUFuc3dlcigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYWJlbEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGxhYmVsRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlucHV0SWQpO1xyXG4gICAgICAgICAgICBsYWJlbEVsZW1lbnQuaW5uZXJUZXh0ID0gYW5zd2VyLmFuc3dlcjtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9uc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc0VsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGNob3Nlbk9wdGlvbiAmJiBjaG9zZW5PcHRpb24uY2hvc2VuQW5zd2VySWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5leHRCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID09PSB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAn0JfQsNCy0LXRgNGI0LjRgtGMJ1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0QnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSAn0JTQsNC70LXQtSdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJldkJ1dHRvbkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZCdXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hvb3NlQW5zd2VyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm5leHRCdXR0b25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmUoYWN0aW9uOiBBY3Rpb25UZXN0VHlwZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5xdWl6KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVF1ZXN0aW9uOiBRdWl6UXVlc3Rpb25UeXBlID0gdGhpcy5xdWl6LnF1ZXN0aW9uc1t0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4IC0gMV07XHJcbiAgICAgICAgY29uc3QgY2hvc2VuQW5zd2VyOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvcHRpb24tYW5zd2VyJykpLmZpbmQoZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoZWxlbWVudCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkO1xyXG4gICAgICAgIH0pIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGxldCBjaG9zZW5BbnN3ZXJJZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGNob3NlbkFuc3dlciAmJiBjaG9zZW5BbnN3ZXIudmFsdWUpIHtcclxuICAgICAgICAgICAgY2hvc2VuQW5zd2VySWQgPSBOdW1iZXIoY2hvc2VuQW5zd2VyLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUmVzdWx0OiBVc2VyUmVzdWx0VHlwZSB8IHVuZGVmaW5lZCA9IHRoaXMudXNlclJlc3VsdC5maW5kKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5xdWVzdGlvbklkID09PSBhY3RpdmVRdWVzdGlvbi5pZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2hvc2VuQW5zd2VySWQpIHtcclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ1Jlc3VsdC5jaG9zZW5BbnN3ZXJJZCA9IGNob3NlbkFuc3dlcklkO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uSWQ6IGFjdGl2ZVF1ZXN0aW9uLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNob3NlbkFuc3dlcklkOiBjaG9zZW5BbnN3ZXJJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gQWN0aW9uVGVzdFR5cGUubmV4dCB8fCBhY3Rpb24gPT09IEFjdGlvblRlc3RUeXBlLnBhc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXgtLTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4ID4gdGhpcy5xdWl6LnF1ZXN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0JhckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnByb2dyZXNzQmFyRWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoaXRlbTogRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEl0ZW1JbmRleDogbnVtYmVyID0gaW5kZXggKyAxO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW1JbmRleCA9PT0gdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRJdGVtSW5kZXggPCB0aGlzLmN1cnJlbnRRdWVzdGlvbkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaG93UXVlc3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGNvbXBsZXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvOiBVc2VySW5mb1R5cGUgfCBudWxsID0gQXV0aC5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIGlmICghdXNlckluZm8pIHtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogRGVmYXVsdFJlc3BvbnNlVHlwZSB8IFBhc3NUZXN0UmVzcG9uc2VUeXBlID0gYXdhaXQgQ3VzdG9tSHR0cC5yZXF1ZXN0KGNvbmZpZy5ob3N0ICsgJy90ZXN0cy8nICsgdGhpcy5yb3V0ZVBhcmFtcy5pZCArICcvcGFzcycsICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJbmZvLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzOiB0aGlzLnVzZXJSZXN1bHRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChyZXN1bHQgYXMgRGVmYXVsdFJlc3BvbnNlVHlwZSkuZXJyb3IgIT09IHVuZGVmaW5lZCkgeyAgICAgIC8vcHJlZGljYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigocmVzdWx0IGFzIERlZmF1bHRSZXNwb25zZVR5cGUpLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9ICcjL3Jlc3VsdD9pZD0nICsgdGhpcy5yb3V0ZVBhcmFtcy5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQge0Zvcm19IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybVwiO1xyXG5pbXBvcnQge0Nob2ljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9jaG9pY2VcIjtcclxuaW1wb3J0IHtUZXN0fSBmcm9tIFwiLi9jb21wb25lbnRzL3Rlc3RcIjtcclxuaW1wb3J0IHtSZXN1bHR9IGZyb20gXCIuL2NvbXBvbmVudHMvcmVzdWx0XCI7XHJcbmltcG9ydCB7QXV0aH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aFwiO1xyXG5pbXBvcnQge0Fuc3dlcnN9IGZyb20gXCIuL2NvbXBvbmVudHMvYW5zd2Vyc1wiO1xyXG5pbXBvcnQge1JvdXRlVHlwZX0gZnJvbSBcIi4vdHlwZXMvcm91dGUudHlwZVwiO1xyXG5pbXBvcnQge1VzZXJJbmZvVHlwZX0gZnJvbSBcIi4vdHlwZXMvdXNlci1pbmZvLnR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXIge1xyXG4gICAgcmVhZG9ubHkgY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDsgICAgICAgIC8vcmVhZG9ubHksINGCLtC6LiDQvtC90Lgg0L3QtSDQv9C10YDQtdC30LDQv9C40YHRi9Cy0LDRjtGC0YHRjywg0LjRgdC/0L7Qu9GM0LfRg9GO0YLRgdGPINGC0L7Qu9GM0LrQviDQtNC70Y8g0YfRgtC10L3QuNGPINC4INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDRjtGC0YHRjyDRgtC+0LvRjNC60L4g0LIg0LrQvtC90YHRgtGA0YPQutGC0L7RgNC1LlxyXG4gICAgcmVhZG9ubHkgc3R5bGVzRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgdGl0bGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XHJcbiAgICByZWFkb25seSBwcm9maWxlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcmVhZG9ubHkgcHJvZmlsZUZ1bGxOYW1lRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcm91dGVzOiBSb3V0ZVR5cGVbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgICAgICB0aGlzLnN0eWxlc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3R5bGVzJyk7XHJcbiAgICAgICAgdGhpcy50aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZS10aXRsZScpO1xyXG4gICAgICAgIHRoaXMucHJvZmlsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZScpO1xyXG4gICAgICAgIHRoaXMucHJvZmlsZUZ1bGxOYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlLWZ1bGwtbmFtZScpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjLycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ9CT0LvQsNCy0L3QsNGPJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL2luZGV4Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiAnc3R5bGVzL2luZGV4LmNzcycsXHJcbiAgICAgICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9zaWdudXAnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfQoNC10LPQuNGB0YLRgNCw0YbQuNGPJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL3NpZ251cC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy9mb3JtLmNzcycsXHJcbiAgICAgICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEZvcm0oJ3NpZ251cCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZTogJyMvbG9naW4nLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfQktGF0L7QtCDQsiDRgdC40YHRgtC10LzRgycsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlcy9sb2dpbi5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy9mb3JtLmNzcycsXHJcbiAgICAgICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEZvcm0oJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9jaG9pY2UnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfQktGL0LHQvtGAINGC0LXRgdGC0LAnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvY2hvaWNlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVzOiAnc3R5bGVzL2Nob2ljZS5jc3MnLFxyXG4gICAgICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBDaG9pY2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfQn9GA0L7RhdC+0LbQtNC10L3QuNC1INGC0LXRgdGC0LAnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZXMvdGVzdC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy90ZXN0LmNzcycsXHJcbiAgICAgICAgICAgICAgICBsb2FkOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRlc3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcm91dGU6ICcjL3Jlc3VsdCcsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ9Cg0LXQt9GD0LvRjNGC0LDRgtGLJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL3Jlc3VsdC5odG1sJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlczogJ3N0eWxlcy9yZXN1bHQuY3NzJyxcclxuICAgICAgICAgICAgICAgIGxvYWQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBuZXcgUmVzdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlOiAnIy9hbnN3ZXJzJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn0J/RgNCw0LLQuNC70YzQvdGL0LUg0L7RgtCy0LXRgtGLJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAndGVtcGxhdGVzL2Fuc3dlcnMuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM6ICdzdHlsZXMvYW5zd2Vycy5jc3MnLFxyXG4gICAgICAgICAgICAgICAgbG9hZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBBbnN3ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBvcGVuUm91dGUoKTogUHJvbWlzZTx2b2lkPiB7ICAgICAgICAgICAvL9Ck0YPQvdC60YbQuNGPINCyINC70Y7QsdC+0Lwg0YHQu9GD0YfQsNC1INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0YDQvtC80LjRgSAo0YIu0LouINGE0YPQvdC60YbQuNGPINCw0YHQuNC90YXRgNC+0L3QvdCw0Y8pLCDQvdC+INGC0LjQvywg0LrQvtGC0L7RgNGL0Lkg0LHRg9C00LXRgiDQstC+0LfQstGA0LDRidGR0L0g0LIg0YDQtdC30YPQu9GM0YLQsNGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0L/RgNC+0LzQuNGB0LAgLSB2b2lkLCDRgi7Qui4g0LLQvdGD0YLRgNC4INGE0YPQvdC60YbQuNC4INC90LjRh9C10LPQviDQvdC1INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8LlxyXG4gICAgICAgIGNvbnN0IHVybFJvdXRlOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zcGxpdCgnPycpWzBdO1xyXG4gICAgICAgIGlmICh1cmxSb3V0ZSA9PT0gJyMvbG9nb3V0Jykge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IGJvb2xlYW4gPSBhd2FpdCBBdXRoLmxvZ291dCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLy4uLlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdSb3V0ZTogUm91dGVUeXBlIHwgdW5kZWZpbmVkID0gdGhpcy5yb3V0ZXMuZmluZChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucm91dGUgPT09IHVybFJvdXRlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIW5ld1JvdXRlKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnRFbGVtZW50IHx8ICF0aGlzLnN0eWxlc0VsZW1lbnQgfHwgIXRoaXMudGl0bGVFbGVtZW50XHJcbiAgICAgICAgICAgIHx8ICF0aGlzLnByb2ZpbGVFbGVtZW50IHx8ICF0aGlzLnByb2ZpbGVGdWxsTmFtZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKHVybFJvdXRlID09PSAnIy8nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjLyc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudEVsZW1lbnQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2gobmV3Um91dGUudGVtcGxhdGUpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKTtcclxuICAgICAgICB0aGlzLnN0eWxlc0VsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgbmV3Um91dGUuc3R5bGVzKTtcclxuICAgICAgICB0aGlzLnRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBuZXdSb3V0ZS50aXRsZTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlckluZm86IFVzZXJJbmZvVHlwZSB8IG51bGwgPSBBdXRoLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW46IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoLmFjY2Vzc1Rva2VuS2V5KTtcclxuICAgICAgICBpZiAodXNlckluZm8gJiYgYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVGdWxsTmFtZUVsZW1lbnQuaW5uZXJUZXh0ID0gdXNlckluZm8uZnVsbE5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9maWxlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Um91dGUubG9hZCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQge1VzZXJJbmZvVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3VzZXItaW5mby50eXBlXCI7XHJcbmltcG9ydCB7UmVmcmVzaFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL3JlZnJlc2gtcmVzcG9uc2UudHlwZVwiO1xyXG5pbXBvcnQge0xvZ291dFJlc3BvbnNlVHlwZX0gZnJvbSBcIi4uL3R5cGVzL2xvZ291dC1yZXNwb25zZS50eXBlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGFjY2Vzc1Rva2VuS2V5OiBzdHJpbmcgPSAnYWNjZXNzVG9rZW4nO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVmcmVzaFRva2VuS2V5OiBzdHJpbmcgPSAncmVmcmVzaFRva2VuJztcclxuICAgIHByaXZhdGUgc3RhdGljIHVzZXJJbmZvS2V5OiBzdHJpbmcgPSAndXNlckluZm8nO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcHJvY2Vzc1VuYXV0aG9yaXplZFJlc3BvbnNlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbjogc3RyaW5nIHwgbnVsbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucmVmcmVzaFRva2VuS2V5KTtcclxuICAgICAgICBpZiAocmVmcmVzaFRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGNvbmZpZy5ob3N0ICsgJy9yZWZyZXNoJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtyZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbn0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IFJlZnJlc2hSZXNwb25zZVR5cGUgfCBudWxsID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiAhcmVzdWx0LmVycm9yICYmIHJlc3VsdC5hY2Nlc3NUb2tlbiAmJiByZXN1bHQucmVmcmVzaFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUb2tlbnMocmVzdWx0LmFjY2Vzc1Rva2VuLCByZXN1bHQucmVmcmVzaFRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmVUb2tlbnMoKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gJyMvJztcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2dvdXQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuOiBzdHJpbmcgfCBudWxsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5yZWZyZXNoVG9rZW5LZXkpO1xyXG4gICAgICAgIGlmIChyZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29uZmlnLmhvc3QgKyAnL2xvZ291dCcsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtyZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbn0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQ6IExvZ291dFJlc3BvbnNlVHlwZSB8IG51bGwgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICYmICFyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBBdXRoLnJlbW92ZVRva2VucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMudXNlckluZm9LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRUb2tlbnMoYWNjZXNzVG9rZW46IHN0cmluZywgcmVmcmVzaFRva2VuOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmFjY2Vzc1Rva2VuS2V5LCBhY2Nlc3NUb2tlbik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5yZWZyZXNoVG9rZW5LZXksIHJlZnJlc2hUb2tlbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVtb3ZlVG9rZW5zKCk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuYWNjZXNzVG9rZW5LZXkpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMucmVmcmVzaFRva2VuS2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldFVzZXJJbmZvKGluZm86IFVzZXJJbmZvVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudXNlckluZm9LZXksIEpTT04uc3RyaW5naWZ5KGluZm8pKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFVzZXJJbmZvKCk6IFVzZXJJbmZvVHlwZSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvOiBzdHJpbmcgfCBudWxsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy51c2VySW5mb0tleSk7XHJcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHVzZXJJbmZvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7QXV0aH0gZnJvbSBcIi4vYXV0aFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUh0dHAge1xyXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyByZXF1ZXN0KHVybDogc3RyaW5nLCBtZXRob2Q6IHN0cmluZyA9IFwiR0VUXCIsIGJvZHk6IGFueSA9IG51bGwpOiBQcm9taXNlPGFueT4geyAgIC8v0LjRgdC60LvRjtGH0LXQvdC40LUsINGC0LDQuiDQutCw0Log0LzQvtC20LXRgiDQsdGL0YLRjCDRgdC+0LLQtdGA0YjQtdC90L3QviDQu9GO0LHQvtC5INC+0YLQstC10YIg0L7RgiDQt9Cw0L/RgNC+0YHQsCDQuCDQsiBib2R5INC80L7QttC10Lwg0L7RgtC/0YDQsNCy0LvRj9GC0Ywg0YfRgtC+INGD0LPQvtC00L3Qvi5cclxuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgdG9rZW46IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoLmFjY2Vzc1Rva2VuS2V5KTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcnNbJ3gtYWNjZXNzLXRva2VuJ10gPSB0b2tlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoYm9keSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHBhcmFtcyk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPCAyMDAgfHwgcmVzcG9uc2Uuc3RhdHVzID49IDMwMCkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogYm9vbGVhbiA9IGF3YWl0IEF1dGgucHJvY2Vzc1VuYXV0aG9yaXplZFJlc3BvbnNlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdCh1cmwsIG1ldGhvZCwgYm9keSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gQWN0aW9uVGVzdFR5cGUge1xyXG4gICAgbmV4dCA9ICduZXh0JyxcclxuICAgIHBhc3MgPSAncGFzcycsXHJcbiAgICBwcmV2ID0gJ3ByZXYnLFxyXG59IiwiaW1wb3J0IHtRdWVyeVBhcmFtc1R5cGV9IGZyb20gXCIuLi90eXBlcy9xdWVyeS1wYXJhbXMudHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVybE1hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRRdWVyeVBhcmFtcygpOiBRdWVyeVBhcmFtc1R5cGUge1xyXG4gICAgICAgIGNvbnN0IHFzOiBzdHJpbmcgPSBkb2N1bWVudC5sb2NhdGlvbi5oYXNoLnNwbGl0KCcrJykuam9pbignICcpO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zOiBRdWVyeVBhcmFtc1R5cGUgPSB7fSxcclxuICAgICAgICAgICAgdG9rZW5zOiBSZWdFeHBFeGVjQXJyYXkgfCBudWxsLFxyXG4gICAgICAgICAgICByZTpSZWdFeHAgPSAvWz8mXShbXj1dKyk9KFteJl0qKS9nO1xyXG5cclxuICAgICAgICB3aGlsZSAodG9rZW5zID0gcmUuZXhlYyhxcykpIHtcclxuICAgICAgICAgICAgcGFyYW1zW2RlY29kZVVSSUNvbXBvbmVudCh0b2tlbnNbMV0pXSA9IGRlY29kZVVSSUNvbXBvbmVudCh0b2tlbnNbMl0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge1JvdXRlcn0gZnJvbSBcIi4vcm91dGVyXCI7ICAgIC8v0L/QvtGC0L7QvNGDINGH0YLQviDQvNGLINC40YHQv9C+0LvRjNC30YPQtdC8IHdlYnBhY2sg0LggVFNsb2FkZXJcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gbmV3IFJvdXRlcigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5oYW5kbGVSb3V0ZUNoYW5naW5nLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuaGFuZGxlUm91dGVDaGFuZ2luZy5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlUm91dGVDaGFuZ2luZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5vcGVuUm91dGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuKG5ldyBBcHAoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9