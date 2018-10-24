webpackJsonp([0],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = /** @class */ (function () {
    function SignInPageModule() {
    }
    SignInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validator__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, formBuilder, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        //Creates a formGroup that has email and password
        //Validators.require means that it must be of non-null value
        //The Validators.pattern() validator ensures that a control matches a regex to its value 
        this.credentialsForm = this.formBuilder.group({
            email: [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__validator__["a" /* regexValidators */].email),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            password: [
                '', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_3__validator__["a" /* regexValidators */].password),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ]
        });
    }
    //When sign in button hit, log user in if already exists
    SignInPage.prototype.onSignIn = function () {
        var _this = this;
        if (this.credentialsForm.valid) {
            console.log('Email: ' +
                this.credentialsForm.controls['email'].value);
            console.log('Password: ' +
                this.credentialsForm.controls['password'].value);
            var data = this.credentialsForm.value;
            if (!data.email) {
                return;
            }
            //form values
            var credentials = {
                email: data.email,
                password: data.password
            };
            //Relocates user if successful
            this.auth.signInWithEmail(credentials)
                .then(function () { return _this.navCtrl.setRoot('LocationPage'); }, function (error) { return _this.loginError = error.message; });
        }
    };
    //Tries to log user in with google account
    //Otherwise, catches error
    SignInPage.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function (res) {
            _this.navCtrl.push('LocationPage');
        }, function (err) {
            _this.loginError = err.message;
        });
    };
    //Not implemented yet
    SignInPage.prototype.onForgotPassword = function () {
        console.log('SignInPage: onForgotPassword()');
    };
    //Redirects user to sign up page
    SignInPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\Users\theja\desktop\mobile apps\geolocation\ionic-maps\src\pages\sign-in\sign-in.html"*/'<ion-header no-border>\n</ion-header>\n\n<ion-content no-bounce padding class="bg">\n\n  <ion-row class="app-icon-container">\n    <ion-col text-center>\n      <img ion-img src="assets/imgs/flapp_icon.png">\n\n    </ion-col>\n  </ion-row>\n\n  <form [formGroup]="credentialsForm">\n\n    <ion-item class="form">\n      <ion-label floating>Email</ion-label>\n      <ion-input [formControl]="credentialsForm.controls[\'email\']" type="email"></ion-input>\n    </ion-item>\n\n    <div *ngIf="!credentialsForm.controls.email.valid &&\n        credentialsForm.controls.email.dirty" class="validator-error">\n      Please enter a valid email.\n    </div>\n\n    <ion-item class="form">\n      <ion-label floating>Password</ion-label>\n      <ion-input [formControl]="credentialsForm.controls[\'password\']" type="password"></ion-input>\n    </ion-item>\n\n    <div *ngIf="!credentialsForm.controls.password.valid &&\n        credentialsForm.controls.password.dirty" class="validator-error">\n      Please enter a valid password.\n    </div>\n\n    <div padding-horizontal>\n      <div class="form-error">{{loginError}}</div>\n    </div>\n    <ion-row class="sign-in-button-container">\n      <ion-col text-center>\n        <button ion-button block color="secondary" [disabled]="!credentialsForm.valid" (click)="onSignIn()">\n          Sign in\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button clear color="light" (click)="onForgotPassword()">\n          Forgot your password?\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-list>\n\n      <button ion-button icon-left block clear (click)="tryGoogleLogin()">\n        <ion-icon name="logo-google"></ion-icon>\n        Log in with Google\n      </button>\n\n      <button ion-button icon-left block clear (click)="signup()">\n        <ion-icon name="person-add"></ion-icon>\n        Sign up\n      </button>\n    </ion-list>\n\n  </form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\theja\desktop\mobile apps\geolocation\ionic-maps\src\pages\sign-in\sign-in.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ })

});
//# sourceMappingURL=0.js.map