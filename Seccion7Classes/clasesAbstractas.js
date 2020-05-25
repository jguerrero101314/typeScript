"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var Xmen3 = /** @class */ (function (_super) {
    __extends(Xmen3, _super);
    function Xmen3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen3;
}(Mutantes));
var wolverine = new Xmen3("wolverine", "logan");
console.log(wolverine);
