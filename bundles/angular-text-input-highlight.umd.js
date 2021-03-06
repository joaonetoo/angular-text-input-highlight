/**
 * angular-text-input-highlight - A component that can highlight parts of text in a textarea. Useful for displaying mentions etc
 * @version v1.4.0
 * @author Matt Lewis
 * @link https://github.com/mattlewis92/angular-text-input-highlight#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["angularTextInputHighlight"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["angularTextInputHighlight"] = factory(root["ng"]["core"], root["ng"]["common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(3);
var text_input_highlight_component_1 = __webpack_require__(4);
var text_input_highlight_container_directive_1 = __webpack_require__(5);
var text_input_element_directive_1 = __webpack_require__(6);
var TextInputHighlightModule = /** @class */ (function () {
    function TextInputHighlightModule() {
    }
    TextInputHighlightModule = __decorate([
        core_1.NgModule({
            declarations: [
                text_input_highlight_component_1.TextInputHighlightComponent,
                text_input_highlight_container_directive_1.TextInputHighlightContainerDirective,
                text_input_element_directive_1.TextInputElementDirective
            ],
            imports: [common_1.CommonModule],
            exports: [
                text_input_highlight_component_1.TextInputHighlightComponent,
                text_input_highlight_container_directive_1.TextInputHighlightContainerDirective,
                text_input_element_directive_1.TextInputElementDirective
            ]
        })
    ], TextInputHighlightModule);
    return TextInputHighlightModule;
}());
exports.TextInputHighlightModule = TextInputHighlightModule;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var styleProperties = Object.freeze([
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize'
]);
var tagIndexIdPrefix = 'text-highlight-tag-id-';
function indexIsInsideTag(index, tag) {
    return tag.indices.start < index && index < tag.indices.end;
}
function overlaps(tagA, tagB) {
    return (indexIsInsideTag(tagB.indices.start, tagA) ||
        indexIsInsideTag(tagB.indices.end, tagA));
}
function isCoordinateWithinRect(rect, x, y) {
    return rect.left < x && x < rect.right && (rect.top < y && y < rect.bottom);
}
function escapeHtml(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
var TextInputHighlightComponent = /** @class */ (function () {
    function TextInputHighlightComponent(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        /**
         * The CSS class to add to highlighted tags
         */
        this.tagCssClass = '';
        /**
         * An array of indices of the textarea value to highlight
         */
        this.tags = [];
        /**
         * Called when the area over a tag is clicked
         */
        this.tagClick = new core_1.EventEmitter();
        /**
         * Called when the area over a tag is moused over
         */
        this.tagMouseEnter = new core_1.EventEmitter();
        /**
         * Called when the area over the tag has the mouse is removed from it
         */
        this.tagMouseLeave = new core_1.EventEmitter();
        /**
         * @private
         */
        this.highlightElementContainerStyle = {};
        this.textareaEventListeners = [];
        this.isDestroyed = false;
    }
    /**
     * Manually call this function to refresh the highlight element if the textarea styles have changed
     */
    TextInputHighlightComponent.prototype.refresh = function () {
        var _this = this;
        var computed = getComputedStyle(this.textInputElement);
        styleProperties.forEach(function (prop) {
            _this.highlightElementContainerStyle[prop] = computed[prop];
        });
    };
    /**
     * @private
     */
    TextInputHighlightComponent.prototype.ngOnChanges = function (changes) {
        if (changes.textInputElement) {
            this.textInputElementChanged();
        }
        if (changes.tags || changes.tagCssClass || changes.textInputValue) {
            this.addTags();
        }
    };
    /**
     * @private
     */
    TextInputHighlightComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.textareaEventListeners.forEach(function (unregister) { return unregister(); });
    };
    /**
     * @private
     */
    TextInputHighlightComponent.prototype.onWindowResize = function () {
        this.refresh();
    };
    TextInputHighlightComponent.prototype.textInputElementChanged = function () {
        var _this = this;
        var elementType = this.textInputElement.tagName.toLowerCase();
        if (elementType !== 'textarea') {
            throw new Error('The angular-text-input-highlight component must be passed ' +
                'a textarea to the `textInputElement` input. Instead received a ' +
                elementType);
        }
        setTimeout(function () {
            // in case the element was destroyed before the timeout fires
            if (!_this.isDestroyed) {
                _this.refresh();
                _this.textareaEventListeners.forEach(function (unregister) { return unregister(); });
                _this.textareaEventListeners = [
                    _this.renderer.listen(_this.textInputElement, 'input', function () {
                        _this.addTags();
                    }),
                    _this.renderer.listen(_this.textInputElement, 'click', function () {
                        _this.addTags();
                    }),
                    _this.renderer.listen(_this.textInputElement, 'keyup', function () {
                        _this.addTags();
                    }),
                    _this.renderer.listen(_this.textInputElement, 'change', function () {
                        _this.addTags();
                    }),
                    _this.renderer.listen(_this.textInputElement, 'scroll', function () {
                        _this.highlightElement.nativeElement.scrollTop = _this.textInputElement.scrollTop;
                        _this.highlightTagElements = _this.highlightTagElements.map(function (tag) {
                            tag.clientRect = tag.element.getBoundingClientRect();
                            return tag;
                        });
                    })
                ];
                // only add event listeners if the host component actually asks for it
                if (_this.tagClick.observers.length > 0) {
                    var onClick = _this.renderer.listen(_this.textInputElement, 'click', function (event) {
                        _this.handleTextareaMouseEvent(event, 'click');
                    });
                    _this.textareaEventListeners.push(onClick);
                }
                if (_this.tagMouseEnter.observers.length > 0) {
                    var onMouseMove = _this.renderer.listen(_this.textInputElement, 'mousemove', function (event) {
                        _this.handleTextareaMouseEvent(event, 'mousemove');
                    });
                    var onMouseLeave = _this.renderer.listen(_this.textInputElement, 'mouseleave', function (event) {
                        if (_this.mouseHoveredTag) {
                            _this.tagMouseLeave.emit(_this.mouseHoveredTag);
                            _this.mouseHoveredTag = undefined;
                        }
                    });
                    _this.textareaEventListeners.push(onMouseMove);
                    _this.textareaEventListeners.push(onMouseLeave);
                }
                _this.addTags();
            }
        });
    };
    TextInputHighlightComponent.prototype.addTags = function () {
        var _this = this;
        var textInputValue = typeof this.textInputValue !== 'undefined'
            ? this.textInputValue
            : this.textInputElement.value;
        var prevTags = [];
        var parts = [];
        this.tags.slice().sort(function (tagA, tagB) {
            return tagA.indices.start - tagB.indices.start;
        })
            .forEach(function (tag) {
            if (tag.indices.start > tag.indices.end) {
                throw new Error("Highlight tag with indices [" + tag.indices.start + ", " + tag.indices
                    .end + "] cannot start after it ends.");
            }
            prevTags.forEach(function (prevTag) {
                if (overlaps(prevTag, tag)) {
                    throw new Error("Highlight tag with indices [" + tag.indices.start + ", " + tag.indices
                        .end + "] overlaps with tag [" + prevTag.indices.start + ", " + prevTag
                        .indices.end + "]");
                }
            });
            // TODO - implement this as an ngFor of items that is generated in the template for a cleaner solution
            var expectedTagLength = tag.indices.end - tag.indices.start;
            var tagContents = textInputValue.slice(tag.indices.start, tag.indices.end);
            if (tagContents.length === expectedTagLength) {
                var previousIndex = prevTags.length > 0 ? prevTags[prevTags.length - 1].indices.end : 0;
                var before_1 = textInputValue.slice(previousIndex, tag.indices.start);
                parts.push(escapeHtml(before_1));
                var cssClass = tag.cssClass || _this.tagCssClass;
                var tagId = tagIndexIdPrefix + _this.tags.indexOf(tag);
                // text-highlight-tag-id-${id} is used instead of a data attribute to prevent an angular sanitization warning
                parts.push("<span class=\"text-highlight-tag " + tagId + " " + cssClass + "\">" + escapeHtml(tagContents) + "</span>");
                prevTags.push(tag);
            }
        });
        var remainingIndex = prevTags.length > 0 ? prevTags[prevTags.length - 1].indices.end : 0;
        var remaining = textInputValue.slice(remainingIndex);
        parts.push(escapeHtml(remaining));
        parts.push('&nbsp;');
        this.highlightedText = parts.join('');
        this.cdr.detectChanges();
        this.highlightTagElements = Array.from(this.highlightElement.nativeElement.getElementsByTagName('span')).map(function (element) {
            return { element: element, clientRect: element.getBoundingClientRect() };
        });
    };
    TextInputHighlightComponent.prototype.handleTextareaMouseEvent = function (event, eventName) {
        var matchingTagIndex = this.highlightTagElements.findIndex(function (elm) {
            return isCoordinateWithinRect(elm.clientRect, event.clientX, event.clientY);
        });
        if (matchingTagIndex > -1) {
            var target = this.highlightTagElements[matchingTagIndex].element;
            var tagClass = Array.from(target.classList).find(function (className) {
                return className.startsWith(tagIndexIdPrefix);
            });
            if (tagClass) {
                var tagId = tagClass.replace(tagIndexIdPrefix, '');
                var tag = this.tags[+tagId];
                var tagMouseEvent = { tag: tag, target: target, event: event };
                if (eventName === 'click') {
                    this.tagClick.emit(tagMouseEvent);
                }
                else if (!this.mouseHoveredTag) {
                    this.mouseHoveredTag = tagMouseEvent;
                    this.tagMouseEnter.emit(tagMouseEvent);
                }
            }
        }
        else if (eventName === 'mousemove' && this.mouseHoveredTag) {
            this.mouseHoveredTag.event = event;
            this.tagMouseLeave.emit(this.mouseHoveredTag);
            this.mouseHoveredTag = undefined;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TextInputHighlightComponent.prototype, "tagCssClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TextInputHighlightComponent.prototype, "tags", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", HTMLTextAreaElement)
    ], TextInputHighlightComponent.prototype, "textInputElement", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TextInputHighlightComponent.prototype, "textInputValue", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TextInputHighlightComponent.prototype, "tagClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TextInputHighlightComponent.prototype, "tagMouseEnter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TextInputHighlightComponent.prototype, "tagMouseLeave", void 0);
    __decorate([
        core_1.ViewChild('highlightElement'),
        __metadata("design:type", core_1.ElementRef)
    ], TextInputHighlightComponent.prototype, "highlightElement", void 0);
    __decorate([
        core_1.HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextInputHighlightComponent.prototype, "onWindowResize", null);
    TextInputHighlightComponent = __decorate([
        core_1.Component({
            selector: 'mwl-text-input-highlight',
            template: "\n    <div\n      class=\"text-highlight-element\"\n      [ngStyle]=\"highlightElementContainerStyle\"\n      [innerHtml]=\"highlightedText\"\n      #highlightElement>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [core_1.Renderer2, core_1.ChangeDetectorRef])
    ], TextInputHighlightComponent);
    return TextInputHighlightComponent;
}());
exports.TextInputHighlightComponent = TextInputHighlightComponent;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var TextInputHighlightContainerDirective = /** @class */ (function () {
    function TextInputHighlightContainerDirective() {
    }
    TextInputHighlightContainerDirective = __decorate([
        core_1.Directive({
            selector: '[mwlTextInputHighlightContainer]',
            host: {
                '[class.text-input-highlight-container]': 'true'
            }
        })
    ], TextInputHighlightContainerDirective);
    return TextInputHighlightContainerDirective;
}());
exports.TextInputHighlightContainerDirective = TextInputHighlightContainerDirective;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var TextInputElementDirective = /** @class */ (function () {
    function TextInputElementDirective() {
    }
    TextInputElementDirective = __decorate([
        core_1.Directive({
            selector: 'textarea[mwlTextInputElement]',
            host: {
                '[class.text-input-element]': 'true'
            }
        })
    ], TextInputElementDirective);
    return TextInputElementDirective;
}());
exports.TextInputElementDirective = TextInputElementDirective;


/***/ })
/******/ ]);
});
//# sourceMappingURL=angular-text-input-highlight.umd.js.map