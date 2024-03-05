/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../Shared-International/ts/api/campaign-manager/settings-manager.ts":
/*!******************************************************************************!*\
  !*** ../../Shared-International/ts/api/campaign-manager/settings-manager.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettingByCode": function() { return /* binding */ getSettingByCode; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);


var getSettingByCode = function getSettingByCode(settingCode, useCampaignSetting) {
  var campaignSetting = useCampaignSetting != null ? useCampaignSetting : false;
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function (response) {
      return resolve(xhr.response);
    });
    xhr.addEventListener("error", function (response) {
      return reject(xhr.response);
    });
    xhr.open("GET", "/Shared/Services/SettingService.ashx?s=" + settingCode + "&cs=" + campaignSetting);
    xhr.send();
  });
};

/***/ }),

/***/ "../../Shared-International/ts/api/express-checkout/braintree-checkout.ts":
/*!********************************************************************************!*\
  !*** ../../Shared-International/ts/api/express-checkout/braintree-checkout.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BraintreeCheckout; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.map.js */ "../../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Shared-International/ts/utils/capture-element.ts");










/**
 * Represents the task function that will execute with access to the Braintree hosted field element that was inserted into the document.
 */

var BraintreeCheckout = /*#__PURE__*/function () {
  /**
   * Represents the container of the payment controls that will integrate with Braintree.
   */

  /**
   * Represents a key-value pair relationship between the element id containing the Braintree hosted field and the task function that will execute.
   */

  /**
   * Represents a key-value pair relationship between the event name and the task function that will execute based on the Braintree hosted field's validity state.
   */

  /**
   * Represents a collection of Braintree hosted field elements
   */

  /**
   * Takes a fieldset element, representing a container of the payment controls that will integrate with Braintree, and notifies the developer when the Braintree hosted fields have been inserted into the document.
   * @param fieldset HTMLFieldSetElement
   */
  function BraintreeCheckout(fieldset) {
    this.fieldset = void 0;
    this.taskRepository = new Map();
    this.eventRepository = new Map();
    this.fieldset = fieldset;
    if (!this.fieldset) return;
    BraintreeCheckout.captureHostedFields(this);
  }
  /**
   * Captures the fieldset element and observes for the Braintree hosted fields to insert into the document. The corresponding task function that matches the inserted Braintree hosted field by the element id will then execute back to the developer. Once all task functions have executed, the observation will be terminated.
   * @param context BraintreeCheckout
   */


  BraintreeCheckout.captureHostedFields = function captureHostedFields(context) {
    var _this = this;

    var captureHostedFields = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_9__["default"](context.fieldset);
    captureHostedFields.subscribe("childList", function (record) {
      var hostedField = _this.getHostedFieldFromRecord(record);

      if (!hostedField) return;
      var task = context.taskRepository.get(hostedField.id);
      if (!task) return;

      _this.hostedFields.push(hostedField);

      task(hostedField);
      context.taskRepository.delete(hostedField.id);
      if (context.taskRepository.size !== 0) return;
      captureHostedFields.disconnect();

      _this.validateHostedFields(context);
    });
  }
  /**
   * Takes a MutationRecord and searches the added nodes for the Braintree hosted field. Returns the hosted field element if found, otherwise undefined is returned.
   * @param record MutationRecord
   * @returns Element | undefined
   */
  ;

  BraintreeCheckout.getHostedFieldFromRecord = function getHostedFieldFromRecord(record) {
    var elements = Array.from(record.addedNodes).filter(function (node) {
      return node.nodeType === Node.ELEMENT_NODE;
    });
    return elements.find(function (element) {
      return element.classList.contains("btHostedField") && element.id !== "";
    });
  }
  /**
   * Emits the valid event that is mapped to a particular Braintree hosted field element.
   * @param hostedField Element
   * @param context BraintreeCheckout
   * @returns void
   */
  ;

  BraintreeCheckout.publishValidHostedField = function publishValidHostedField(hostedField, context) {
    var task = context.eventRepository.get("valid");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Emits the invalid event that is mapped to a particular Braintree hosted field element.
   * @param hostedField Element
   * @param context BraintreeCheckout
   * @returns void
   */
  ;

  BraintreeCheckout.publishInvalidHostedField = function publishInvalidHostedField(hostedField, context) {
    var task = context.eventRepository.get("invalid");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Emits the default event that is mapped to a particular Braintree hosted field element.
   * @param hostedField Element
   * @param context BraintreeCheckout
   * @returns void
   */
  ;

  BraintreeCheckout.publishDefaultHostedField = function publishDefaultHostedField(hostedField, context) {
    var task = context.eventRepository.get("default");
    if (!task) return;
    task(hostedField);
  }
  /**
   * Iterates all hosted field elements and captures the element's attribute list and responds accordingly based on it's validity state.
   * @param context BraintreeCheckout
   */
  ;

  BraintreeCheckout.validateHostedFields = function validateHostedFields(context) {
    var _this2 = this;

    this.hostedFields.forEach(function (hostedField) {
      var captureHostedField = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_9__["default"](hostedField);
      captureHostedField.subscribe("attributes", function (record) {
        if (record.attributeName !== "class") return;
        captureHostedField.disconnect();

        switch (true) {
          case hostedField.classList.contains("braintree-hosted-fields-invalid"):
            _this2.publishInvalidHostedField(hostedField, context);

            break;

          case hostedField.classList.contains("braintree-hosted-fields-valid"):
            _this2.publishValidHostedField(hostedField, context);

            break;

          default:
            _this2.publishDefaultHostedField(hostedField, context);

            break;
        }

        captureHostedField.connect();
      });
    });
  }
  /**
   * Takes the id of the element containing the Braintree hosted field and establishes a task to be executed once the hosted field element is inserted into the document.
   * @param id string
   * @param task BraintreeCheckoutHostedFieldTask
   */
  ;

  var _proto = BraintreeCheckout.prototype;

  _proto.subscribe = function subscribe(id, task) {
    if (!this.taskRepository.has(id)) {
      this.taskRepository.set(id, task);
    }
  }
  /**
   * Takes the name of event, expressed either as `default`, `valid` or `invalid` and executes a task based on the Braintree hosted field's validity state.
   * @param event string
   * @param task BraintreeCheckoutHostedFieldTask
   */
  ;

  _proto.on = function on(event, task) {
    if (!this.eventRepository.has(event)) {
      this.eventRepository.set(event, task);
    }
  };

  return BraintreeCheckout;
}();

BraintreeCheckout.hostedFields = [];


/***/ }),

/***/ "../../Shared-International/ts/api/express-checkout/express-checkout.ts":
/*!******************************************************************************!*\
  !*** ../../Shared-International/ts/api/express-checkout/express-checkout.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ExpressCheckout; }
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "../../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "../../node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! Shared/ts/utils/element-controller */ "../../Shared-International/ts/utils/element-controller.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");
/* harmony import */ var Shared_ts_api_campaign_manager_settings_manager__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! Shared/ts/api/campaign-manager/settings-manager */ "../../Shared-International/ts/api/campaign-manager/settings-manager.ts");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




















function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ExpressCheckout = /*#__PURE__*/function () {
  /**
   * Utilizes `ElementController` to toggle elements based on a certain `orderType` value. Controller elements are mapped to a radio group containing the `orderType` id.
   * @param root HTMLElement
   */
  function ExpressCheckout(root) {
    this.root = void 0;
    this.elements = [];
    this.checkoutOptions = [];
    this.controllers = [];
    this.root = root != null ? root : document.querySelector("form");

    if (this.root) {
      this.root.classList.add("element-controller");
      this.root.classList.add("express-checkout");
      this.elements = Array.from(this.root.querySelectorAll("[data-express-checkout-order-type]"));
      this.checkoutOptions = Array.from(this.root.querySelectorAll(".checkout-option"));
      this.controllers = Array.from(this.root.querySelectorAll('[name="OrderType"]'));
      this.controllers.forEach(function (controller) {
        controller.classList.add("element-controller__controller");
      });
    }

    ExpressCheckout.initialize(this);
  }
  /**
   * Iterates through controllers and assigns a new array, iterates through elements and adds the `orderType` to the appropriate controller, iterates through controllers and updates the `aria-controls` attribute based on the element id list.
   * @param context ExpressCheckout
   */


  ExpressCheckout.initialize = function initialize(context) {
    var _this = this;

    context.controllers.forEach(function (controller) {
      _this.controllerRepository.set(controller, []);
    });
    context.elements.forEach(function (element) {
      context.addOrderTypeToControllerByElement(element);
    });
    context.controllers.forEach(function (controller) {
      context.updateControllerByOrderType(controller.id);
    });
    context.checkoutOptions.forEach(function (checkoutOption) {
      _this.addRadioGUIByCheckoutOption(checkoutOption);
    });
    this.processElementControllerByContext(context);
  }
  /**
   * Creates a new instance of the `ElementController` and assigns the click event to update the element states by the active controller.
   * @param context ExpressCheckout
   */
  ;

  ExpressCheckout.processElementControllerByContext = function processElementControllerByContext(context) {
    var elementController = new Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_19__["default"](context.root);
    elementController.controllers.forEach(function (controller) {
      controller.addEventListener("click", function () {
        elementController.toggleElementsByController(controller);
      });
    });
    elementController.controllers.filter(function (controller) {
      return controller.getAttribute("checked");
    }).forEach(function (controller) {
      elementController.toggleElementsByController(controller);
    });
    this.elementController.set(context, elementController);
  }
  /**
   * Takes the `orderType` and the `elementId` and adds it to the element Id list repository.
   * @param orderType string
   * @param elementId string
   * @returns void
   */
  ;

  var _proto = ExpressCheckout.prototype;

  _proto.addElementIdByOrderType = function addElementIdByOrderType(orderType, elementId) {
    var controller = this.getControllerByOrderType(orderType);
    if (!controller) return;
    var elementIds = this.getElementIdListByOrderType(orderType);
    if (!elementIds) return;
    elementIds.push(elementId);
    ExpressCheckout.controllerRepository.set(controller, elementIds);
  }
  /**
   * Takes an element and extracts the `OrderType` from the `data-express-checkout-order-type` attribute along with the element's id and assigns it to the appropriate controller.
   * @param element Element
   * @returns void
   */
  ;

  _proto.addOrderTypeToControllerByElement = function addOrderTypeToControllerByElement(element) {
    var _this2 = this;

    var orderType = element.getAttribute("data-express-checkout-order-type");

    if (!orderType) {
      console.error({
        message: "The '[data-express-checkout-order-type] attribute is required on the element",
        element: element
      });
      return;
    }

    if (element.id === "") {
      console.error({
        message: "The 'id' is requied on the element",
        element: element
      });
      return;
    }

    element.classList.add("express-checkout__element");
    orderType.split(" ").forEach(function (ot) {
      return _this2.addElementIdByOrderType(ot, element.id);
    });
  }
  /**
   * Takes an `orderType` and returns the controller based on a match between the `orderType` and the controller id. Otherwise, undefined is returned.
   * @param orderType string
   * @returns HTMLInputElement | undefined
   */
  ;

  _proto.getControllerByOrderType = function getControllerByOrderType(orderType) {
    return this.controllers.find(function (controller) {
      return controller.id.match(new RegExp(orderType, "gi"));
    });
  }
  /**
   * Takes an `orderType` and returns the element id list associated with the controller. Otherwise, undefined is returned.
   * @param orderType string
   * @returns string[] | undefined
   */
  ;

  _proto.getElementIdListByOrderType = function getElementIdListByOrderType(orderType) {
    var controller = this.getControllerByOrderType(orderType);
    if (!controller) return;
    return this.getElementIdListByController(controller);
  }
  /**
   * Takes a controller element and returns the element id list associated with the controller. Otherwise, undefined is returned.
   * @param controller HTMLInputElement
   * @returns string[] | undefined
   */
  ;

  _proto.getElementIdListByController = function getElementIdListByController(controller) {
    return ExpressCheckout.controllerRepository.get(controller);
  }
  /**
   * Takes an `orderType` and retrieves the list of element id references and updates the appropriate controller's `aria-controls`
   * @param orderType string
   * @returns void
   */
  ;

  _proto.updateControllerByOrderType = function updateControllerByOrderType(orderType) {
    var controller = this.getControllerByOrderType(orderType);
    if (!controller) return;
    var elementIds = this.getElementIdListByController(controller);
    if (!elementIds) return;
    controller == null ? void 0 : controller.setAttribute("aria-controls", elementIds.join(" "));
  }
  /**
   * Using an element with the attribute `data-express-checkout-buttons`, all order types besides the card will attempt to pull for the appropriate checkout image from the campaign manager settings page and insert it into the HTML
   * @returns void
   */
  ;

  _proto.createCheckoutButtonGUI = function createCheckoutButtonGUI() {
    var _this$root,
        _this3 = this;

    var placeholder = (_this$root = this.root) == null ? void 0 : _this$root.querySelector("[data-express-checkout-buttons]");
    if (!placeholder) return;
    var orderTypes = this.controllers.filter(function (controller) {
      return controller.id !== "otCARD";
    }).map(function (controller) {
      return controller.id;
    });
    orderTypes.forEach(function (orderType) {
      var code = orderType.replace(/^ot/, "");
      (0,Shared_ts_api_campaign_manager_settings_manager__WEBPACK_IMPORTED_MODULE_21__.getSettingByCode)(code + ".AcceptOfferButtonDownImageUrl").then(function (value) {
        var _this3$root;

        placeholder.insertAdjacentHTML("beforeend", "<span id=\"AcceptOffer" + code + "\" data-express-checkout-order-type=\"" + orderType + "\">\n                            <img src=\"" + value + "\" loading=\"lazy\">\n                        </span>");
        var element = (_this3$root = _this3.root) == null ? void 0 : _this3$root.querySelector("#AcceptOffer" + code);
        if (!element) return;

        _this3.addOrderTypeToControllerByElement(element);

        _this3.updateControllerByOrderType(orderType);
      });
    });
  };

  _proto.updateCreditCardImages = /*#__PURE__*/function () {
    var _updateCreditCardImages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var checkoutOption, label, garbageImages, cards, images;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              checkoutOption = this.checkoutOptions.find(function (checkoutOption) {
                return /CARD/gi.test(checkoutOption.id);
              });

              if (checkoutOption) {
                _context.next = 3;
                break;
              }

              throw {
                message: "The credit card checkout option is not available."
              };

            case 3:
              label = checkoutOption.querySelector('label[for="otCARD"]');

              if (label) {
                _context.next = 6;
                break;
              }

              throw {
                message: "An attempt to update the credit card images was made but the HTML placeholder element could not be found."
              };

            case 6:
              garbageImages = Array.from(label.querySelectorAll("img"));
              garbageImages.forEach(function (image) {
                return image.remove();
              });
              _context.next = 10;
              return (0,Shared_ts_api_campaign_manager_settings_manager__WEBPACK_IMPORTED_MODULE_21__.getSettingByCode)("DTM.ClientSites.Order.AllowedCardTypes");

            case 10:
              cards = _context.sent;
              images = cards.split(",").map(function (card) {
                return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_20__.createElement)("img", {
                  src: "/shared/images/payment/" + card + ".svg",
                  alt: card + " accepted.",
                  width: "37",
                  height: "37",
                  loading: "lazy"
                });
              });
              images.forEach(function (image) {
                return label.append(image);
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function updateCreditCardImages() {
      return _updateCreditCardImages.apply(this, arguments);
    }

    return updateCreditCardImages;
  }()
  /**
   * Returns a new HTMLSpanElement with the `express-checkout__radio` class.
   * @returns HTMLSpanElement
   */
  ;

  ExpressCheckout.createRadioGUI = function createRadioGUI() {
    var radio = document.createElement("span");
    radio.classList.add("express-checkout__radio");
    return radio;
  }
  /**
   * Takes a `checkoutOption` element and adds an HTMLSpanElement representing the radio GUI to it.
   * @param checkoutOption Element
   */
  ;

  ExpressCheckout.addRadioGUIByCheckoutOption = function addRadioGUIByCheckoutOption(checkoutOption) {
    var radio = this.createRadioGUI();
    var label = checkoutOption.querySelector("label");
    checkoutOption.classList.add("express-checkout__checkout-option");
    label == null ? void 0 : label.classList.add("express-checkout__label");
    label == null ? void 0 : label.insertAdjacentElement("afterbegin", radio);
  };

  _createClass(ExpressCheckout, [{
    key: "elementController",
    get:
    /**
     * Represents the root element
     */

    /**
     * Represents an array of elements that are associated with a controller
     */

    /**
     * Represents an array of elements containing the `orderType` radio
     */

    /**
     * Represents an array of controller elements
     */

    /**
     * Represents an instance of the `ExpressCheckout` interface
     */
    function get() {
      return ExpressCheckout.elementController.get(this);
    }
    /**
     * Represents a key-value pair between a controller element and a string array of element ids
     */

  }]);

  return ExpressCheckout;
}();

ExpressCheckout.controllerRepository = new WeakMap();
ExpressCheckout.elementController = new WeakMap();


/***/ }),

/***/ "../../Shared-International/ts/api/modal/modal-dialog-iframe.ts":
/*!**********************************************************************!*\
  !*** ../../Shared-International/ts/api/modal/modal-dialog-iframe.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModalDialogIframe; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Shared_ts_components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/ts/components/modal */ "../../Shared-International/ts/components/modal.ts");
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../../Shared-International/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");





// components
 // observers

 // utils



var ModalDialogIframe = /*#__PURE__*/function () {
  function ModalDialogIframe() {}

  var _proto = ModalDialogIframe.prototype;

  _proto.initializeCapture = function initializeCapture() {
    var _this = this;

    addEventListener("click", function (event) {
      var _target$closest;

      var target = event.target;
      var controller = (_target$closest = target.closest("[data-modal-dialog-id]")) != null ? _target$closest : target;
      if (!_this.isValidController(controller)) return;
      var modal = ModalDialogIframe.processModalDialogIframeByController(controller);

      if (modal) {
        modal.open();
      }
    });
  };

  _proto.isValidController = function isValidController(controller) {
    return ModalDialogIframe.requiredAttributes.every(function (attribute) {
      return controller.hasAttribute(attribute);
    });
  };

  _proto.initializeObserver = function initializeObserver() {
    (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_6__.observer)("[data-modal-dialog-iframe][data-modal-dialog-actor=open]", {
      inRange: function inRange(controller) {
        controller.addEventListener("click", function (event) {
          event.preventDefault();
          ModalDialogIframe.processModalDialogIframeByController(controller);
        });
      }
    });
  };

  ModalDialogIframe.hasContainerInRepository = function hasContainerInRepository(controller) {
    var result = false;
    var id = this.getModalDialogControllerId(controller);
    if (!id) return result;
    var container = document.getElementById(id);
    if (!container) return result;
    return this.containerControllerRepository.has(container);
  };

  ModalDialogIframe.processModalDialogIframeByController = function processModalDialogIframeByController(controller) {
    if (!this.hasContainerInRepository(controller)) {
      var id = this.getModalDialogControllerId(controller);
      var title = this.getModalDialogControllerTitle(controller);
      var source = this.getModalDialogControllerSource(controller);

      if (id && title && source) {
        var _this$containerContro, _container$getAttribu;

        var fragment = this.createModalDialogIframeContainerFragment(id, title, source);
        document.body.appendChild(fragment);
        var container = document.getElementById(id);
        if (!container) return;
        var controllers = (_this$containerContro = this.containerControllerRepository.get(container)) != null ? _this$containerContro : [];
        controllers.push(controller);
        this.containerControllerRepository.set(container, controllers);
        var modal = new Shared_ts_components_modal__WEBPACK_IMPORTED_MODULE_5__["default"](container, {
          ariaLabel: (_container$getAttribu = container.getAttribute("aria-label")) != null ? _container$getAttribu : "",
          templateModifier: controller.getAttribute("data-modal-dialog-template-modifier")
        });
        addEventListener("message", function (event) {
          try {
            var message = JSON.parse(event.data);

            if (message.id === id && message.title === title && message.source === source && message.actor === "close") {
              modal.close();
            }
          } catch (e) {
            if (e instanceof Error) {
              console.warn(e.message);
            }
          }
        });
        return modal;
      }
    }
  };

  ModalDialogIframe.getModalDialogControllerId = function getModalDialogControllerId(controller) {
    var id = controller.getAttribute("data-modal-dialog-id");

    if (!id) {
      console.error({
        message: "An id value was not found for the attribute [data-modal-dialog-id].",
        controller: controller
      });
    }

    return id;
  };

  ModalDialogIframe.getModalDialogControllerTitle = function getModalDialogControllerTitle(controller) {
    var title = controller.getAttribute("data-modal-dialog-title");

    if (!title) {
      console.error({
        message: "A title value was not found for the attribute [data-modal-dialog-title].",
        controller: controller
      });
    }

    return title;
  };

  ModalDialogIframe.getModalDialogControllerSource = function getModalDialogControllerSource(controller) {
    var _controller$getAttrib, _controller$getAttrib2;

    var source = (_controller$getAttrib = controller.getAttribute("data-modal-dialog-iframe")) != null ? _controller$getAttrib : "";
    source = source === "" ? (_controller$getAttrib2 = controller.getAttribute("href")) != null ? _controller$getAttrib2 : "" : source;

    if (!source) {
      console.error({
        message: "A src value was not found for the attribute [href] or [data-modal-dialog-iframe].",
        controller: controller
      });
    }

    return source;
  };

  ModalDialogIframe.createModalDialogIframeContainerFragment = function createModalDialogIframeContainerFragment(id, title, source) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)("\n            <section id=\"" + id + "\" aria-label=\"" + title + "\" class=\"view modal-dialog modal-dialog--iframe section\">\n                <div class=\"view__in modal-dialog__in section__in\">\n                    <div class=\"defer modal-dialog__iframe\">\n                        <iframe src=\"" + source + "\" title=\"" + title + "\" tabindex=\"0\"></iframe>\n                    </div>\n                </div>\n            </section>\n        ");
  };

  return ModalDialogIframe;
}();

ModalDialogIframe.containerControllerRepository = new WeakMap();
ModalDialogIframe.requiredAttributes = ["data-modal-dialog-iframe", "data-modal-dialog-id", "data-modal-dialog-actor", "data-modal-dialog-title"];


/***/ }),

/***/ "../../Shared-International/ts/api/validate/validate-common.ts":
/*!*********************************************************************!*\
  !*** ../../Shared-International/ts/api/validate/validate-common.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ValidateCommon; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Shared_ts_utils_validate_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/utils/validate-event */ "../../Shared-International/ts/utils/validate-event.ts");





function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ValidateCommon = /*#__PURE__*/function (_ValidateEvent) {
  _inheritsLoose(ValidateCommon, _ValidateEvent);

  /**
   * Provides the ability to apply validation rules from common.js through the Validate interface. Inheriting from the Validate interface, configuration settings include the ability to provide a specific element to represent the form to validate for, a CSS namespace to customize the presentation and an attribute to discern which form controls are required. Additionally, event type mapping can be provided to customize the validation experience.
   * @param config IValidateCommonConfig
   */
  function ValidateCommon(config) {
    var _this;

    _this = _ValidateEvent.call(this, config) || this;
    _this.errors;

    _this.validateInputEvent = function (event) {
      _this.validateControlAgainstCommon(event.target);
    };

    _this.validateComboboxEvent = function (event) {
      _this.validateControlAgainstCommon(event.target);
    };

    ValidateCommon.initializeCapture(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Enable direct validation
   */


  var _proto = ValidateCommon.prototype;

  _proto.validateOnDemand = function validateOnDemand() {
    this.validateAllAgainstCommon();
    this.setFocusOnInvalidControl();
    this.processControlEvents();
  }
  /**
   * Takes an element and determines if that element is valid or invalid based on the error array
   * @param control HTMLInputElement | HTMLSelectElement
   */
  ;

  _proto.validateControlAgainstCommon = function validateControlAgainstCommon(control) {
    var _this2 = this;

    this.validateControl(control, function (control) {
      return !_this2.errors.some(function (error) {
        return error.element.get().includes(control);
      });
    });
  }
  /**
   * Determines if all required elements are valid or invalid based on the error array
   */
  ;

  _proto.validateAllAgainstCommon = function validateAllAgainstCommon() {
    var _this3 = this;

    this.validateAll(function (control) {
      return !_this3.errors.some(function (error) {
        return error.element.get().includes(control);
      });
    });
  }
  /**
   * Interfaces with the validateForm function from common.js and returns an array of errors containing pairs of messages and jQuery objects
   * @returns IValidateCommonErrorResponse[]
   */
  ;

  ValidateCommon.getErrors = function getErrors() {
    var errors;

    if (typeof validateForm === "function") {
      errors = validateForm(this.event, false, true);
    }

    return Array.isArray(errors) ? errors : [];
  };

  _createClass(ValidateCommon, [{
    key: "errors",
    get:
    /**
     * Represents an array of error objects containing pairs for messages and jQuery elements
     */
    function get() {
      var _this4 = this;

      var errors = ValidateCommon.getErrors();
      errors.forEach(function (error) {
        var control = error.element.get(0);

        if (!(control != null && control.hasAttribute(_this4.attribute))) {
          control == null ? void 0 : control.setAttribute(_this4.attribute, "true");
        }
      });
      return errors;
    }
    /**
     * Responsible for providing towards the event argument in the common.js validateForm function
     */

  }]);

  return ValidateCommon;
}(Shared_ts_utils_validate_event__WEBPACK_IMPORTED_MODULE_4__["default"]);

ValidateCommon.event = document.createEvent("Event");


/***/ }),

/***/ "../../Shared-International/ts/applications/form.ts":
/*!**********************************************************!*\
  !*** ../../Shared-International/ts/applications/form.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeValidateEvent": function() { return /* binding */ initializeValidateEvent; }
/* harmony export */ });
/* unused harmony exports initializeGlobalValidateEventMap, initializeModalDialogIframe, initializeExpressCheckout, validateInputRules, validateComboboxRules, validateTextareaRules, initializeValidateEventWithAjaxSubmit, processRequestByFormAction, validatePromoCode, validatePromoCodeWhenVisible, initializeValidateEventWithPromoCode, initializeValidateCommon, initializeValidateCommonWithActionCodeRadioGroup, initializeQuestionCodeCheckboxes, initializeValidateCommonWithBraintree, getHiddenFormControlsByElement, addAttributeToFormControls, removeAttributeFromFormControls, validateByElementController, initializeValidateEventNavigator, updateFieldsetViewByElementController, validateByNavigator, initializeValidateEventThenSubscribe, relocateThenValidateUpsellActionQuantities, validatePromoCodeAroundStatusScreen */
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "../../node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "../../node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "../../node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var Shared_ts_api_express_checkout_braintree_checkout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! Shared/ts/api/express-checkout/braintree-checkout */ "../../Shared-International/ts/api/express-checkout/braintree-checkout.ts");
/* harmony import */ var Shared_ts_api_validate_validate_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! Shared/ts/api/validate/validate-common */ "../../Shared-International/ts/api/validate/validate-common.ts");
/* harmony import */ var Shared_ts_api_modal_modal_dialog_iframe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! Shared/ts/api/modal/modal-dialog-iframe */ "../../Shared-International/ts/api/modal/modal-dialog-iframe.ts");
/* harmony import */ var Shared_ts_api_express_checkout_express_checkout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! Shared/ts/api/express-checkout/express-checkout */ "../../Shared-International/ts/api/express-checkout/express-checkout.ts");
/* harmony import */ var Shared_ts_applications_template__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! Shared/ts/applications/template */ "../../Shared-International/ts/applications/template.ts");
/* harmony import */ var Shared_ts_components_status_screen__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! Shared/ts/components/status-screen */ "../../Shared-International/ts/components/status-screen.ts");
/* harmony import */ var Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! Shared/ts/utils/data */ "../../Shared-International/ts/utils/data.ts");
/* harmony import */ var Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! Shared/ts/utils/element-controller */ "../../Shared-International/ts/utils/element-controller.ts");
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Shared-International/ts/utils/capture-element.ts");
/* harmony import */ var Shared_ts_utils_validate_event__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! Shared/ts/utils/validate-event */ "../../Shared-International/ts/utils/validate-event.ts");
/* harmony import */ var Shared_ts_utils_upsell_action_quantity_reloactor__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! Shared/ts/utils/upsell-action-quantity-reloactor */ "../../Shared-International/ts/utils/upsell-action-quantity-reloactor.ts");




















// api



 // applications

 // interfaces

// components
 // utils







var CartChangeException = function CartChangeException(message) {
  this.name = "CartChangeException";
  this.message = void 0;
  this.message = message;
};

var initializeGlobalValidateEventMap = function initializeGlobalValidateEventMap() {
  var map = new WeakMap();
  window.forms = map;
  return map;
};
var initializeModalDialogIframe = function initializeModalDialogIframe() {
  var modalDialogIframe = new Shared_ts_api_modal_modal_dialog_iframe__WEBPACK_IMPORTED_MODULE_22__["default"]();
  modalDialogIframe.initializeObserver();
  modalDialogIframe.initializeCapture();
};
var initializeExpressCheckout = function initializeExpressCheckout(root) {
  return new Promise(function (resolve, reject) {
    addEventListener("ECDrawFormComplete", function (event) {
      var ec = new Shared_ts_api_express_checkout_express_checkout__WEBPACK_IMPORTED_MODULE_23__["default"](root);
      ec.createCheckoutButtonGUI();
      (0,Shared_ts_applications_template__WEBPACK_IMPORTED_MODULE_24__.initializeToolTip)();
      resolve(ec);
    });
  });
};
var validateInputRules = function validateInputRules(control) {
  var isValid = control.validity.valid;
  if (!isValid) return false;
  var isEmpty = control.value === "";
  if (isEmpty) return false;
  var pattern = control.getAttribute("data-pattern");

  if (pattern) {
    var regex = new RegExp(pattern);
    var hasValidPattern = regex.test(control.value);
    return hasValidPattern;
  }

  if (control.type === "checkbox") {
    return Array.from(document.querySelectorAll("input[type=\"checkbox\"][name=\"" + control.name + "\"]")).some(function (input) {
      return input.checked;
    });
  }

  if (control.type === "radio") {
    return Array.from(document.querySelectorAll("input[type=\"radio\"][name=\"" + control.name + "\"]")).some(function (input) {
      return input.checked;
    });
  }

  return true;
};
var validateComboboxRules = function validateComboboxRules(control) {
  return control.validity.valid;
};
var validateTextareaRules = function validateTextareaRules(control) {
  return control.validity.valid;
};
var initializeValidateEvent = function initializeValidateEvent(form, submit, attribute) {
  if (attribute === void 0) {
    attribute = "data-required";
  }

  var validateEvent = new Shared_ts_utils_validate_event__WEBPACK_IMPORTED_MODULE_29__["default"]({
    form: form,
    attribute: attribute,
    inputEvents: ["blur", "change"],
    invalidInputEvents: ["keyup", "blur", "change"],
    comboboxEvents: ["change", "blur"],
    textareaEvents: ["blur", "change"],
    invalidTextareaEvents: ["keyup", "blur", "change"],
    submit: submit
  });

  validateEvent.validateInputEvent = function (event) {
    validateEvent.validateControl(event.target, validateInputRules);
  };

  validateEvent.validateComboboxEvent = function (event) {
    validateEvent.validateControl(event.target, validateComboboxRules);
  };

  validateEvent.validateTextareaEvent = function (event) {
    validateEvent.validateControl(event.target, validateTextareaRules);
  };

  validateEvent.processInputEvents();
  validateEvent.processComboboxEvents();
  validateEvent.processTextareaEvents();
  return validateEvent;
};
var initializeValidateEventWithAjaxSubmit = function initializeValidateEventWithAjaxSubmit(form, submit, outputResponseHandler, attribute) {
  var _validateEvent$submit;

  var validateEvent = initializeValidateEvent(form, submit, attribute);
  var outputResponse = (0,Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_26__.isFunction)(outputResponseHandler) ? outputResponseHandler : function (message, status) {
    return console.debug(message, status);
  };
  validateEvent.processInputEvents();
  validateEvent.processComboboxEvents();
  (_validateEvent$submit = validateEvent.submit) == null ? void 0 : _validateEvent$submit.addEventListener("click", function (event) {
    var _validateEvent$form$g, _validateEvent$form;

    event.preventDefault();
    validateEvent.validateInputs(validateInputRules);
    validateEvent.validateComboboxes(validateComboboxRules);
    if (!validateEvent.isValidForm()) return;
    outputResponse((_validateEvent$form$g = (_validateEvent$form = validateEvent.form) == null ? void 0 : _validateEvent$form.getAttribute("data-message-status")) != null ? _validateEvent$form$g : "Submitting request", "submit");
    processRequestByFormAction(form).then(function (response) {
      var _validateEvent$form$g2, _validateEvent$form2, _validateEvent$form$g3, _validateEvent$form3;

      switch (response.status) {
        case 200:
          outputResponse((_validateEvent$form$g2 = (_validateEvent$form2 = validateEvent.form) == null ? void 0 : _validateEvent$form2.getAttribute("data-message-success")) != null ? _validateEvent$form$g2 : "Request was sent successfully", "success");
          break;

        default:
          outputResponse((_validateEvent$form$g3 = (_validateEvent$form3 = validateEvent.form) == null ? void 0 : _validateEvent$form3.getAttribute("data-message-error")) != null ? _validateEvent$form$g3 : "Request was sent but may not be successful", "fail");
          break;
      }
    }).catch(function (error) {
      return console.error(error);
    });
  });
  return validateEvent;
};
var processRequestByFormAction = function processRequestByFormAction(form) {
  return new Promise(function (resolve, reject) {
    var action = form.action;
    if (!action || action === "") reject({
      message: "The value for the action attribute was not provided for the following form",
      form: form
    });
    var method = form.method;
    if (!method || method === "") reject({
      message: "The value for the method attribute was not provided for the following form",
      form: form
    });
    var request = fetch(action, {
      method: method.toUpperCase(),
      body: new FormData(form)
    });
    request.then(function (response) {
      return resolve(response);
    }).catch(function (error) {
      return reject(error);
    });
  });
};
var validatePromoCode = function validatePromoCode(predicate) {
  var router = Object.create(null);
  window.addEventListener("CartChange", function (event) {
    var _cart$promoCodeTarget, _cart$errors$shift;

    var cart = event.detail;
    var meetsCondition;

    try {
      var _predicate;

      meetsCondition = (_predicate = predicate == null ? void 0 : predicate(cart)) != null ? _predicate : false;
    } catch (error) {
      return console.debug(error);
    }

    var promoCode = cart.promoCode;
    if (!promoCode) return;

    switch (true) {
      case meetsCondition:
        router == null ? void 0 : router.pass == null ? void 0 : router.pass(promoCode);
        break;

      case promoCode.toLowerCase() === ((_cart$promoCodeTarget = cart.promoCodeTarget) == null ? void 0 : _cart$promoCodeTarget.toLowerCase()):
        router == null ? void 0 : router.pass == null ? void 0 : router.pass(promoCode);
        break;

      case cart.promoCode !== "":
        var error = (_cart$errors$shift = cart.errors.shift()) != null ? _cart$errors$shift : "An error occurred";
        router == null ? void 0 : router.fail == null ? void 0 : router.fail(error);
        break;

      default:
        router == null ? void 0 : router.default == null ? void 0 : router.default();
        break;
    }

    router == null ? void 0 : router.finally == null ? void 0 : router.finally();
  });
  return Object.create({
    default: function _default(task) {
      router.default = task;
      return this;
    },
    pass: function pass(task) {
      router.pass = task;
      return this;
    },
    fail: function fail(task) {
      router.fail = task;
      return this;
    },
    finally: function _finally(task) {
      router.finally = task;
      return this;
    }
  });
};
var validatePromoCodeWhenVisible = function validatePromoCodeWhenVisible(predicate, selector) {
  if (selector === void 0) {
    selector = ".ddlPromoButton";
  }

  return validatePromoCode(function (cart) {
    var _predicate2;

    var element = document.querySelector(selector);
    if (!element) throw new CartChangeException("The document selector (" + selector + ") did not return an HTML element.");
    var activeElement = document.activeElement;
    if (activeElement !== element) throw new CartChangeException("The target HTML element, represented by the document selector (" + selector + "), does not match the document's active HTML element. This exception may be an intentional attempt to prevent inappropriate behavior.");
    return (_predicate2 = predicate == null ? void 0 : predicate(cart)) != null ? _predicate2 : false;
  });
};
var initializeValidateEventWithPromoCode = function initializeValidateEventWithPromoCode(form, submit) {
  var validateEvent = initializeValidateEvent(form, submit);
  var promoInput = validateEvent.inputs.find(function (input) {
    return input.id === "promoCode";
  });

  if (promoInput) {
    window.addEventListener("CartChange", function (event) {
      var cart = event.detail;

      if (cart.promoCode === "") {
        validateEvent.setControlToDefault(promoInput);
        return;
      }

      validateEvent.validateControl(promoInput, function (control) {
        var _cart$promoCode, _cart$promoCodeTarget2;

        return ((_cart$promoCode = cart.promoCode) == null ? void 0 : _cart$promoCode.toLowerCase()) === ((_cart$promoCodeTarget2 = cart.promoCodeTarget) == null ? void 0 : _cart$promoCodeTarget2.toLowerCase());
      });
    });
  }

  return validateEvent;
};
var initializeValidateCommon = function initializeValidateCommon(form, submit) {
  var validateCommon = new Shared_ts_api_validate_validate_common__WEBPACK_IMPORTED_MODULE_21__["default"]({
    form: form,
    attribute: "data-required",
    inputEvents: ["blur", "change"],
    invalidInputEvents: ["keyup", "blur", "change"],
    comboboxEvents: ["change", "blur"],
    submit: submit
  });
  validateCommon.validateOnSubmit();
  validateCommon.processInputEvents();
  validateCommon.processComboboxEvents();
  return validateCommon;
};
var initializeValidateCommonWithActionCodeRadioGroup = function initializeValidateCommonWithActionCodeRadioGroup(form, submit) {
  var validateCommon = initializeValidateCommon(form, submit);

  window.onFormPreValidation = function (event) {
    var _actionCodeErrorMessa, _actionCodeErrorMessa2;

    var errors = [];
    var defaultActionCodeInput = validateCommon.inputs.find(function (input) {
      return input.getAttribute("name") === "ActionCode0";
    });
    if (!defaultActionCodeInput) return errors;
    var isActionCodeChecked = validateCommon.inputs.filter(function (input) {
      return input.getAttribute("name") === "ActionCode0";
    }).some(function (input) {
      return input.checked;
    });
    if (isActionCodeChecked) return errors;
    var actionCodeErrorMessage = document.querySelector("#action-code-error-message");

    if (!actionCodeErrorMessage) {
      console.error({
        message: "A validation message must be provided in the HTML document for the following HTMLInputElement",
        element: defaultActionCodeInput
      });
    }

    var message = (_actionCodeErrorMessa = actionCodeErrorMessage == null ? void 0 : (_actionCodeErrorMessa2 = actionCodeErrorMessage.textContent) == null ? void 0 : _actionCodeErrorMessa2.trim()) != null ? _actionCodeErrorMessa : "Please select an option";
    errors.push({
      message: message,
      element: $(defaultActionCodeInput)
    });
    return errors;
  };

  return validateCommon;
};
var initializeQuestionCodeCheckboxes = function initializeQuestionCodeCheckboxes() {
  var questionCodes = Array.from(document.querySelectorAll('[id^="QuestionCode"]'));
  var ids = questionCodes.map(function (questionCode) {
    var _questionCode$getAttr;

    return (_questionCode$getAttr = questionCode.getAttribute("id")) == null ? void 0 : _questionCode$getAttr.replace("QuestionCode", "");
  }).filter(function (id) {
    return id !== "" || id !== undefined;
  });
  var checkboxes = ids.map(function (id) {
    return document.getElementById(id);
  }).filter(function (checkbox) {
    return checkbox !== undefined || checkbox !== null;
  });
  checkboxes.forEach(function (checkbox) {
    var questionCode = questionCodes.find(function (questionCode) {
      var _questionCode$getAttr2, _checkbox$getAttribut;

      return (_questionCode$getAttr2 = questionCode.getAttribute("id")) == null ? void 0 : _questionCode$getAttr2.includes((_checkbox$getAttribut = checkbox == null ? void 0 : checkbox.getAttribute("id")) != null ? _checkbox$getAttribut : "");
    });
    if (!questionCode) return;
    checkbox == null ? void 0 : checkbox.addEventListener("change", function (event) {
      questionCode.value = checkbox.checked.toString();
    });
  });
};
var initializeValidateCommonWithBraintree = function initializeValidateCommonWithBraintree(form) {
  var validateCommon = initializeValidateCommon(form, document.querySelector("#braintreeSubmit"));
  if (!validateCommon.form) return;
  var captureForm = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_28__["default"](validateCommon.form);
  captureForm.subscribe("childList", function (record) {
    var elements = Array.from(record.addedNodes).filter(function (node) {
      return node.nodeType === Node.ELEMENT_NODE;
    });
    var submit = elements.find(function (element) {
      return element.id === "braintreeSubmit";
    });

    if (submit) {
      captureForm.disconnect();
      validateCommon.submit = submit;
      validateCommon.validateOnSubmit();
    }
  });
  var fieldset = document.querySelector("#paymentInformation");
  if (!fieldset) return;
  var bt = new Shared_ts_api_express_checkout_braintree_checkout__WEBPACK_IMPORTED_MODULE_20__["default"](fieldset);
  bt.subscribe("CardNumberHostedField", function (hostedField) {
    return hostedField.classList.add("form__field");
  });
  bt.subscribe("CardCvv2HostedField", function (hostedField) {
    return hostedField.classList.add("form__field");
  });
  bt.subscribe("CardExpirationHostedField", function (hostedField) {
    var cardExpYear = document.querySelector("#CardExpirationYearCt");

    if (cardExpYear) {
      cardExpYear.remove();
    }

    var cardExpDateButton = document.querySelector("#CardExpirationCt .form__button");

    if (cardExpDateButton) {
      cardExpDateButton.remove();
    }
  });
  bt.on("default", function (hostedField) {
    var target = validateCommon.getTargetByControl(hostedField);
    validateCommon.setControlToDefault(target);
  });
  bt.on("invalid", function (hostedField) {
    var target = validateCommon.getTargetByControl(hostedField);
    validateCommon.setControlToInvalid(target);
  });
  bt.on("valid", function (hostedField) {
    var target = validateCommon.getTargetByControl(hostedField);
    validateCommon.setControlToValid(target);
  });
  return validateCommon;
};
var getHiddenFormControlsByElement = function getHiddenFormControlsByElement(element) {
  return Array.from(element.querySelectorAll("input, select, textarea"));
};
var addAttributeToFormControls = function addAttributeToFormControls(elements, attribute) {
  elements.forEach(function (element) {
    return element.setAttribute(attribute, "true");
  });
};
var removeAttributeFromFormControls = function removeAttributeFromFormControls(elements, attribute) {
  elements.forEach(function (element) {
    return element.removeAttribute(attribute);
  });
};
var validateByElementController = function validateByElementController(validateEvent) {
  var _validateEvent$form$q, _validateEvent$form4;

  var candidates = Array.from((_validateEvent$form$q = (_validateEvent$form4 = validateEvent.form) == null ? void 0 : _validateEvent$form4.querySelectorAll(".element-controller")) != null ? _validateEvent$form$q : []);
  candidates.forEach(function (candidate) {
    var elementController = new Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_27__["default"](candidate);
    elementController.controllers.forEach(function (controller) {
      controller.addEventListener("change", function (event) {
        elementController.toggleElementsByController(controller);
      });
    });
    elementController.elements.forEach(function (element) {
      if (!element) return;
      var captureElement = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_28__["default"](element);
      var formControls = getHiddenFormControlsByElement(element);
      captureElement.subscribe("attributes", function (record) {
        if (record.attributeName === "data-element-controller-name") {
          var hasControllerName = element.hasAttribute("data-element-controller-name");
          hasControllerName ? addAttributeToFormControls(formControls, validateEvent.attribute) : removeAttributeFromFormControls(formControls, validateEvent.attribute);
          validateEvent.captureComboboxes();
          validateEvent.captureInputs();
          validateEvent.captureTextareas();
          validateEvent.processComboboxEvents();
          validateEvent.processInputEvents();
          validateEvent.processTextareaEvents();
        }
      });
    });
  });
};
var initializeValidateEventNavigator = function initializeValidateEventNavigator(form, submit) {
  var validateEvent = initializeValidateEvent(form, submit, "required");
  var elementController = new Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_27__["default"](form);
  validateByElementController(validateEvent);
  var navigators = Array.from(form.querySelectorAll("[data-fieldset-navigator]"));
  var nextNavigators = navigators.filter(function (navigator) {
    return navigator.getAttribute("data-fieldset-navigator") === "next";
  });
  nextNavigators.forEach(function (navigator) {
    navigator.addEventListener("click", function (event) {
      return validateByNavigator(validateEvent, navigator).then(function () {
        return updateFieldsetViewByElementController(elementController, navigator);
      });
    });
  });
  var prevNavigators = navigators.filter(function (navigator) {
    return navigator.getAttribute("data-fieldset-navigator") === "prev";
  });
  prevNavigators.forEach(function (navigator) {
    navigator.addEventListener("click", function (event) {
      updateFieldsetViewByElementController(elementController, navigator);
    });
  });
  return new Promise(function (resolve, reject) {
    submit.addEventListener("click", function (event) {
      event.preventDefault();
      validateEvent.validateAll();

      if (validateEvent.isValidForm()) {
        resolve(form);
      }
    });
  });
};
var updateFieldsetViewByElementController = function updateFieldsetViewByElementController(elementController, navigator) {
  var controller = elementController.controllers.find(function (controller) {
    return controller === navigator;
  });
  if (!controller) return;
  elementController.toggleElementsByController(controller);
};
var validateByNavigator = function validateByNavigator(validateEvent, navigator) {
  return new Promise(function (resolve, reject) {
    var controls = validateEvent.getRequiredControls().filter(function (control) {
      return control.closest("fieldset") === navigator.closest("fieldset");
    });
    controls.forEach(function (control) {
      return validateEvent.validateControl(control);
    });
    var isValid = controls.every(function (control) {
      return validateEvent.isValidControl(control);
    });

    if (isValid) {
      resolve();
    }
  });
};
var initializeValidateEventThenSubscribe = function initializeValidateEventThenSubscribe() {};
var relocateThenValidateUpsellActionQuantities = function relocateThenValidateUpsellActionQuantities(selector) {
  var form = document.querySelector(selector);
  if (!form) return;
  var upsellActionQuantityRelocator = new Shared_ts_utils_upsell_action_quantity_reloactor__WEBPACK_IMPORTED_MODULE_30__["default"](form); // todo: add client-side validation
};
var validatePromoCodeAroundStatusScreen = function validatePromoCodeAroundStatusScreen() {
  var _validateEvent$submit2;

  var form = document.querySelector("[data-validate-promo-code]");
  if (!form) return;
  var statusContainer = document.querySelector("#promo-code-validation-status");
  if (!statusContainer) return;
  var statusScreen = new Shared_ts_components_status_screen__WEBPACK_IMPORTED_MODULE_25__["default"]("inline", statusContainer);
  var wasValidated = false;
  var capturePromoCode;
  var validateEvent = initializeValidateEvent(form, form.querySelector('button[type="button"]'));
  var input = validateEvent.inputs.find(function (input) {
    return input.id === "promoCode";
  });
  input == null ? void 0 : input.addEventListener("keyup", function (event) {
    if (wasValidated) {
      wasValidated = false;
      statusScreen.close();
    }

    capturePromoCode && input.value === capturePromoCode ? statusScreen.open() : statusScreen.close();
  });
  (_validateEvent$submit2 = validateEvent.submit) == null ? void 0 : _validateEvent$submit2.addEventListener("click", function (event) {
    validateEvent.validateInputs(validateInputRules);

    if (validateEvent.isValidForm()) {
      statusScreen.busy("Checking...");
    }
  });
  validatePromoCode().pass(function (promoCode) {
    statusScreen.done("Code " + promoCode + " was successfully redeemed.");
  }).fail(function (error) {
    statusScreen.problem(error);
  }).finally(function () {
    capturePromoCode = input == null ? void 0 : input.value;
    wasValidated = true;
  });
};

/***/ }),

/***/ "../../Shared-International/ts/applications/navigation.ts":
/*!****************************************************************!*\
  !*** ../../Shared-International/ts/applications/navigation.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeNavById": function() { return /* binding */ initializeNavById; }
/* harmony export */ });
/* unused harmony exports initializeGlobalFlyoutRepository, initializeFlyouts, initializeFlyoutsThenNav, importScrollableHeightByElement */
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "../../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var Shared_ts_components_nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Shared/ts/components/nav */ "../../Shared-International/ts/components/nav.ts");
/* harmony import */ var Shared_ts_utils_flyout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Shared/ts/utils/flyout */ "../../Shared-International/ts/utils/flyout.ts");










// components
 // utils


var initializeGlobalFlyoutRepository = function initializeGlobalFlyoutRepository() {
  var flyoutRepository = new WeakMap();
  window.flyoutRepository = flyoutRepository;
  return flyoutRepository;
};
var initializeFlyouts = function initializeFlyouts(selector) {
  var elements = Array.from(document.querySelectorAll(selector));
  elements.forEach(function (element) {
    var flyout = new Shared_ts_utils_flyout__WEBPACK_IMPORTED_MODULE_11__["default"](element);

    if ("flyoutRepository" in window) {
      window.flyoutRepository.set(element, flyout);
    }
  });
};
var initializeNavById = function initializeNavById(id) {
  var element = document.getElementById(id);
  if (!element) return;
  return new Shared_ts_components_nav__WEBPACK_IMPORTED_MODULE_10__["default"](element.id);
};
var initializeFlyoutsThenNav = function initializeFlyoutsThenNav(selector, id) {
  initializeFlyouts(selector);
  initializeNavById(id);
};

var getScrollableHeightByElement = function getScrollableHeightByElement(element, callback) {
  var o = new ResizeObserver(function (entries) {
    var height = entries.filter(function (entry) {
      return entry.target === element;
    }).map(function (entry) {
      return entry.contentRect.height;
    }).reduce(function (a, b) {
      return a > b ? a : b;
    }, 0);
    callback(height);
  });
  o.observe(element);
};
/**
 * Takes an HTMLElement, representing the scrollable content, and auto-updates the height of it to a CSS variable.
 * @param element HTMLElement | undefined | null
 * @returns void
 */


var importScrollableHeightByElement = function importScrollableHeightByElement(element) {
  if (!element) return;
  var canAdoptStyleSheets = ("adoptedStyleSheets" in document);

  if (canAdoptStyleSheets) {
    var stylesheet = new CSSStyleSheet();
    getScrollableHeightByElement(element, function (height) {
      stylesheet.replaceSync(":root { --scrollable-content-height: " + height + "px; }");
      document.adoptedStyleSheets = [].concat(document.adoptedStyleSheets, [stylesheet]);
    });
    return;
  }

  var style = document.createElement("style");
  getScrollableHeightByElement(element, function (height) {
    style.innerHTML = ":root { --scrollable-content-height: " + height + "px; }";
  });
  document.body.appendChild(style);
};

/***/ }),

/***/ "../../Shared-International/ts/applications/template.ts":
/*!**************************************************************!*\
  !*** ../../Shared-International/ts/applications/template.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeToolTip": function() { return /* binding */ initializeToolTip; }
/* harmony export */ });
/* unused harmony exports initializeBase, initializeMicrosite */
/* harmony import */ var Shared_ts_components_tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/components/tooltip */ "../../Shared-International/ts/components/tooltip.ts");
/* harmony import */ var Shared_ts_components_fingerprint_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/components/fingerprint-nav */ "../../Shared-International/ts/components/fingerprint-nav.ts");
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../../Shared-International/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_utils_load_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/utils/load-item */ "../../Shared-International/ts/utils/load-item.ts");
// components

 // observers

 // utils


var initializeBase = function initializeBase() {
  initializeToolTip();
  (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_2__.observer)("[data-src-iframe]", {
    inRange: function inRange(element) {
      return new Shared_ts_utils_load_item__WEBPACK_IMPORTED_MODULE_3__["default"](element, {
        src: "data-src-iframe",
        tag: "iframe"
      });
    }
  });
};
var initializeToolTip = function initializeToolTip() {
  new Shared_ts_components_tooltip__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelectorAll(".link"), "link--is-active");
};
var initializeMicrosite = function initializeMicrosite() {
  var fp = new Shared_ts_components_fingerprint_nav__WEBPACK_IMPORTED_MODULE_1__["default"]();
  fp.hideWhenElementsInView("form");
};

/***/ }),

/***/ "../../Shared-International/ts/components/accordion.ts":
/*!*************************************************************!*\
  !*** ../../Shared-International/ts/components/accordion.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Accordion; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var element_closest_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! element-closest/browser */ "../../node_modules/element-closest/browser.js");
/* harmony import */ var element_closest_browser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(element_closest_browser__WEBPACK_IMPORTED_MODULE_8__);










var Accordion = /*#__PURE__*/function () {
  /**
   * Represents the root element containing both controllers and containers
   */

  /**
   * Represents an array of all button elements that would triger the container to expand/collapse
   */

  /**
   * Represents an array of all container elements that are controllable by controllers
   */

  /**
   * Accordion creates a relationship between a set of controls, referenced as "controllers", and a set of regions, referenced as "containers". Interacting with a control in the Accordion will communicate with it's related container and manage it's attributes.
   * @param root Element
   */
  function Accordion(root) {
    var _this = this;

    this.root = void 0;
    this.controllers = [];
    this.containers = [];
    this.root = root != null ? root : document.querySelector(".accordion");

    if (this.root) {
      this.controllers = Array.from(this.root.querySelectorAll(".accordion__button")).filter(function (button) {
        return button.closest(".accordion") === _this.root;
      });
      this.containers = Array.from(this.root.querySelectorAll(".accordion__section")).filter(function (container) {
        return container.closest(".accordion") === _this.root;
      });
    }

    Accordion.initialize(this);
  }
  /**
   * Initializes the Accordion application by processing the controller events and managing the default containers
   * @param context Accordion
   */


  Accordion.initialize = function initialize(context) {
    this.processControllerEvents(context);
    this.defaultContainersByControllers(context);
  }
  /**
   * Filters through the controllers that either don't have the `aria-expanded` attribute or have the attribute marked as false and deactivates it's related containers.
   * @param context Accordion
   */
  ;

  Accordion.defaultContainersByControllers = function defaultContainersByControllers(context) {
    var _this2 = this;

    context.controllers.filter(function (controller) {
      return !controller.hasAttribute("aria-expanded") || controller.getAttribute("aria-expanded") === "false";
    }).forEach(function (controller) {
      return _this2.deactivateContainerByController(controller, context);
    });
  }
  /**
   * Iterates the controllers and sets up event listeners for the root and the controller
   * @param context Accordion
   */
  ;

  Accordion.processControllerEvents = function processControllerEvents(context) {
    context.controllers.forEach(function (controller) {
      Accordion.manageRootEvents(controller, context);
      Accordion.manageControllerEvents(controller, context);
    });
  }
  /**
   * Registers a `focus` event on the controller to activate the root and a `blur` event on the controller to deactivate the root
   * @param controller HTMLButtonElement
   * @param context Accordion
   */
  ;

  Accordion.manageRootEvents = function manageRootEvents(controller, context) {
    controller.addEventListener("focus", Accordion.activateRoot.bind(this, context));
    controller.addEventListener("blur", Accordion.deactivateRoot.bind(this, context));
  }
  /**
   * Registers a `click` event on the controller to update it's related container and a `keydown` event on the controller to navigate through it's related controllers
   * @param controller HTMLButtonElement
   * @param context Accordion
   */
  ;

  Accordion.manageControllerEvents = function manageControllerEvents(controller, context) {
    controller.addEventListener("click", context.updateContainerByController.bind(context, controller));
    controller.addEventListener("keydown", Accordion.navigateControllerEvent(controller, context));
  }
  /**
   * Navigates through the controllers on keyboard commands such as: Up, Down, Home and End
   * @param controller HTMLButtonElement
   * @param context Accordion
   * @returns (event: KeyboardEvent) => void
   */
  ;

  Accordion.navigateControllerEvent = function navigateControllerEvent(controller, context) {
    return function (event) {
      if (Accordion.isKeyup(event) || Accordion.isKeyLeft(event)) {
        event.preventDefault();
        Accordion.getPrevController(controller, context).focus();
      }

      if (Accordion.isKeydown(event) || Accordion.isKeyRight(event)) {
        event.preventDefault();
        Accordion.getNextController(controller, context).focus();
      }

      if (event.key.match(/home/i)) {
        event.preventDefault();
        Accordion.getFirstController(context).focus();
      }

      if (event.key.match(/end/i)) {
        event.preventDefault();
        Accordion.getLastController(context).focus();
      }
    };
  }
  /**
   * Determines if the key pressed was either the Up key or Control Key + Page Up
   * @param event KeyboardEvent
   * @returns boolean
   */
  ;

  Accordion.isKeyup = function isKeyup(event) {
    var key = event.key.toLowerCase();
    return event.ctrlKey && key === "pageup" || key === "arrowup" || key === "up";
  }
  /**
   * Determines if the key pressed was the left key
   * @param event KeyboardEvent
   * @returns boolean
   */
  ;

  Accordion.isKeyLeft = function isKeyLeft(event) {
    var key = event.key.toLowerCase();
    return key === "arrowleft" || key === "left";
  }
  /**
   * Determines if the key pressed was the right key
   * @param event KeyboardEvent
   * @returns boolean
   */
  ;

  Accordion.isKeyRight = function isKeyRight(event) {
    var key = event.key.toLowerCase();
    return key === "arrowright" || key === "right";
  }
  /**
   * Determines if the key pressed was either the Down key or Control Key + Page Down
   * @param event KeyboardEvent
   * @returns boolean
   */
  ;

  Accordion.isKeydown = function isKeydown(event) {
    var key = event.key.toLowerCase();
    return event.ctrlKey && key === "pagedown" || key === "arrowdown" || key === "down";
  }
  /**
   * Returns the first controller
   * @param context Accordion
   * @returns HTMLButtonElement
   */
  ;

  Accordion.getFirstController = function getFirstController(context) {
    return context.controllers[0];
  }
  /**
   * Returns the last controller
   * @param context Accordion
   * @returns HTMLButtonElement
   */
  ;

  Accordion.getLastController = function getLastController(context) {
    return context.controllers[context.controllers.length - 1];
  }
  /**
   * Returns the next controller in the navigation flow. If the last controller is focused, the first controller will be the next controller.
   * @param controller HTMLButtonElement
   * @param context Accordion
   * @returns HTMLButtonElement
   */
  ;

  Accordion.getNextController = function getNextController(controller, context) {
    var index = context.controllers.indexOf(controller) + 1;
    return index <= context.controllers.length - 1 ? context.controllers[index] : this.getFirstController(context);
  }
  /**
   * Returns the previous controller in the navigation flow. If the first controller is focused, the last controller will be the previous controller.
   * @param controller HTMLButtonElement
   * @param context Accordion
   * @returns HTMLButtonElement
   */
  ;

  Accordion.getPrevController = function getPrevController(controller, context) {
    var index = context.controllers.indexOf(controller) - 1;
    return index >= 0 ? context.controllers[index] : this.getLastController(context);
  }
  /**
   * Adds the `accordion--is-focused` CSS class name to the root
   * @param context Accordion
   */
  ;

  Accordion.activateRoot = function activateRoot(context) {
    var _context$root;

    (_context$root = context.root) == null ? void 0 : _context$root.classList.add("accordion--is-focused");
  }
  /**
   * Removes the `accordion--is-focused` CSS class name from the root
   * @param context Accordion
   */
  ;

  Accordion.deactivateRoot = function deactivateRoot(context) {
    var _context$root2;

    (_context$root2 = context.root) == null ? void 0 : _context$root2.classList.remove("accordion--is-focused");
  }
  /**
   * Takes a potential controller and validates it along with it's related container. If valid, the controller will activate the container.
   * @param controller HTMLButtonElement
   * @param context Accordion
   */
  ;

  Accordion.activateContainerByController = function activateContainerByController(controller, context) {
    if (context.isController(controller)) {
      var container = context.getContainerByController(controller);
      if (!container) return;

      if (context.isContainer(container)) {
        controller.setAttribute("aria-expanded", "true");
        container.removeAttribute("hidden");

        if (!context.willToggle()) {
          controller.setAttribute("aria-disabled", "true");
        }
      }
    }
  }
  /**
   * Takes a potential controller and validates it along with it's related container. If valid, the controller will deactivate the container.
   * @param controller HTMLButtonElement
   * @param context Accordion
   */
  ;

  Accordion.deactivateContainerByController = function deactivateContainerByController(controller, context) {
    if (context.isController(controller)) {
      var container = context.getContainerByController(controller);
      if (!container) return;

      if (context.isContainer(container)) {
        controller.setAttribute("aria-expanded", "false");
        container.setAttribute("hidden", "");

        if (!context.willToggle()) {
          controller.removeAttribute("aria-disabled");
        }
      }
    }
  }
  /**
   * Takes an HTMLButtonElement as a controller and updates its container's visibility state. If `data-accordion-many-containers` is not set on the root HTMLElement, then only the current container will be targeted. If `data-accordion-toggle` is not set on the root HTMLElement, then only the current container will only be visible.
   * @param controller HTMLButtonElement
   */
  ;

  var _proto = Accordion.prototype;

  _proto.updateContainerByController = function updateContainerByController(controller) {
    var _this3 = this;

    if (!this.allowManyContainers()) {
      this.getActiveControllers().filter(function (activeController) {
        return activeController !== controller;
      }).forEach(function (controller) {
        return Accordion.deactivateContainerByController(controller, _this3);
      });
    }

    if (!this.isControllerExpanded(controller)) {
      Accordion.activateContainerByController(controller, this);
    } else if (this.willToggle() && this.isControllerExpanded(controller)) {
      Accordion.deactivateContainerByController(controller, this);
    }
  }
  /**
   * Reports the controller's `aria-expanded` state
   * @param controller HTMLButtonElement
   * @returns boolean
   */
  ;

  _proto.isControllerExpanded = function isControllerExpanded(controller) {
    return controller.getAttribute("aria-expanded") === "true";
  }
  /**
   * Reports the controller's `aria-disabled` state
   * @param controller HTMLButtonElement
   * @returns boolean
   */
  ;

  _proto.isControllerDisabled = function isControllerDisabled(controller) {
    return controller.getAttribute("aria-disabled") === "true";
  }
  /**
   * Returns an array of active containers that are not hidden
   * @returns HTMLElement[]
   */
  ;

  _proto.getActiveContainers = function getActiveContainers() {
    return this.containers.filter(function (container) {
      return !container.hasAttribute("hidden");
    });
  }
  /**
   * Returns an array of active controllers that are expanded
   * @returns HTMLButtonElement[]
   */
  ;

  _proto.getActiveControllers = function getActiveControllers() {
    var _this4 = this;

    return this.controllers.filter(function (controller) {
      return _this4.isControllerExpanded(controller);
    });
  }
  /**
   * Reports if `data-accordion-toggle` is set on the root HTMLElement
   * @returns boolean
   */
  ;

  _proto.willToggle = function willToggle() {
    var _this$root$hasAttribu, _this$root;

    var manyContainers = this.allowManyContainers();
    return manyContainers ? manyContainers : (_this$root$hasAttribu = (_this$root = this.root) == null ? void 0 : _this$root.hasAttribute("data-accordion-toggle")) != null ? _this$root$hasAttribu : false;
  }
  /**
   * Reports if `data-accordion-many-containers` is set on the root HTMLElement
   * @returns boolean
   */
  ;

  _proto.allowManyContainers = function allowManyContainers() {
    var _this$root$hasAttribu2, _this$root2;

    return (_this$root$hasAttribu2 = (_this$root2 = this.root) == null ? void 0 : _this$root2.hasAttribute("data-accordion-many-containers")) != null ? _this$root$hasAttribu2 : false;
  }
  /**
   * Returns the container that matches the controller's `aria-controls` value
   * @param controller HTMLButtonElement
   * @returns HTMLElement
   */
  ;

  _proto.getContainerByController = function getContainerByController(controller) {
    return this.containers.find(function (container) {
      return container.id === controller.getAttribute("aria-controls");
    });
  }
  /**
   * Takes a potential container and validates `aria-labelledby` against all controllers. If invalid, an error will report to the browser console.
   * @param container HTMLElement
   * @returns boolean
   */
  ;

  _proto.isContainer = function isContainer(container) {
    var result = this.controllers.some(function (controller) {
      return controller.id === container.getAttribute("aria-labelledby");
    });

    if (!result) {
      console.error("Accordion container does not contain a match between aria-labelledby and the controller id", {
        container: container
      });
    }

    return result;
  }
  /**
   * Takes a potential controller and validates `aria-controls` against all containers. If invalid, an error will report to the browser console.
   * @param controller HTMLButtonElement
   * @returns boolean
   */
  ;

  _proto.isController = function isController(controller) {
    var result = this.containers.some(function (container) {
      return container.id === controller.getAttribute("aria-controls");
    });

    if (!result) {
      console.error("Accordion controller does not contain a match between aria-controls and the container id", {
        controller: controller
      });
    }

    return result;
  };

  return Accordion;
}();



/***/ }),

/***/ "../../Shared-International/ts/components/fingerprint-nav.ts":
/*!*******************************************************************!*\
  !*** ../../Shared-International/ts/components/fingerprint-nav.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FingerPrintNav; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/observers/intersection */ "../../Shared-International/ts/observers/intersection.ts");
/* harmony import */ var Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/data */ "../../Shared-International/ts/utils/data.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");





var FingerPrintNav = /*#__PURE__*/function () {
  /**
   * Represents the root fingerprint nav element
   */

  /**
   * Represents the CSS class name for the invisible state to the fingerprint nav element
   */

  /**
   * Takes an HTMLElement to represent the fingerprint nav root element and a CSS class name to represent the invisible state of the element. Support includes abilities to control visibility state on observable elements and direct access to control visibility state.
   * @param root HTMLElement
   * @param name string
   */
  function FingerPrintNav(root, name) {
    if (root === void 0) {
      root = document.querySelector(".fp-nav");
    }

    if (name === void 0) {
      name = "fp-nav--is-hidden";
    }

    this.root = void 0;
    this.name = void 0;
    this.root = root;
    this.name = name;
  }
  /**
   * Establishes an observer on all elements matching the selector and connects the inRange and outRange callback functions to control the root element's visibility state.
   * @param selector string
   * @param inRange () => void
   * @param outRange () => void
   * @param self FingerPrintNav
   */


  FingerPrintNav.updateWhenElementsInView = function updateWhenElementsInView(selector, _inRange, _outRange, self) {
    if ((0,Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_2__.isString)(selector)) {
      (0,Shared_ts_observers_intersection__WEBPACK_IMPORTED_MODULE_1__.observer)(selector, {
        inRange: function inRange(element) {
          return _inRange(self);
        },
        outRange: function outRange(element) {
          return _outRange(self);
        },
        unObserve: false
      });
    }
  }
  /**
   * Queries the document to find all elements that match the selector and shows the fingerprint nav element when any element has intersected the viewport.
   * @param selector string
   */
  ;

  var _proto = FingerPrintNav.prototype;

  _proto.showWhenElementsInView = function showWhenElementsInView(selector) {
    FingerPrintNav.updateWhenElementsInView(selector, this.show.bind(this), this.hide.bind(this), this);
  }
  /**
   * Queries the document to find all elements that match the selector and hides the fingerprint nav element when any element has intersected the viewport.
   * @param selector string
   */
  ;

  _proto.hideWhenElementsInView = function hideWhenElementsInView(selector) {
    FingerPrintNav.updateWhenElementsInView(selector, this.hide.bind(this), this.show.bind(this), this);
  }
  /**
   * Removes the invisible state from the fingerprint nav element
   */
  ;

  _proto.show = function show() {
    if ((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_3__.elementExists)(this.root)) {
      var _this$root;

      (_this$root = this.root) == null ? void 0 : _this$root.classList.remove(this.name);
    }
  }
  /**
   * Adds the invisible state to the fingerprint nav element
   */
  ;

  _proto.hide = function hide() {
    if ((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_3__.elementExists)(this.root)) {
      var _this$root2;

      (_this$root2 = this.root) == null ? void 0 : _this$root2.classList.add(this.name);
    }
  };

  return FingerPrintNav;
}();



/***/ }),

/***/ "../../Shared-International/ts/components/modal.ts":
/*!*********************************************************!*\
  !*** ../../Shared-International/ts/components/modal.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.map.js */ "../../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var Shared_ts_utils_focus_trap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Shared/ts/utils/focus-trap */ "../../Shared-International/ts/utils/focus-trap.ts");
/* harmony import */ var Shared_ts_utils_inert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Shared/ts/utils/inert */ "../../Shared-International/ts/utils/inert.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");
/* harmony import */ var Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Shared/ts/observers/event */ "../../Shared-International/ts/observers/event.ts");












// interfaces
// utils




(0,Shared_ts_utils_inert__WEBPACK_IMPORTED_MODULE_13__["default"])();

var Modal = /*#__PURE__*/function () {
  /**
   * Represents the key-value relationship between a string (representing the root element id) and it's associated Modal instance.
   */

  /**
   * Represents the key-value relationship between a Modal instance and it's associated actor element.
   */

  /**
   * Represents the key-value relationship between a Modal instance and it's associated root element.
   */

  /**
   * Represents the key-value relationship between a Modal instance and it's associated HTML template.
   */

  /**
   * Represents the key-value relationship between a Modal instance and a FocusTrap instance.
   */

  /**
   * Represents the body element.
   */

  /**
   * Represents status whether the click event listener on the body element has already been registered.
   */

  /**
   * Represents status whether there are any open modals on the screen.
   */

  /**
   * Represents status whether current URL parameters may control displaying a modal dialog.
   */

  /**
   * Allows an HTMLElement to operate as a modal dialog. Buttons equipped with the data-modal-dialog-id="{RootId}" and data-modal-dialog-actor="{open|close}" attributes will be able to communicate with the modal and control it's visibility state. Programmatic communication with the modal is also accessible through the open and close methods.
   * @param root HTMLElement
   */
  function Modal(root, userConfig) {
    if (root === void 0) {
      root = document.getElementById("#modal");
    }

    if (root && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.elementExists)(root) && Modal.isRootChildOfBody(root)) {
      var _config$id, _config$uiBackdrop;

      var config = userConfig != null ? userConfig : {};
      var template = Modal.createHTMLTemplate(root, config);
      Modal.template.set(this, template);
      Modal.root.set(this, template.container);
      Modal.context.set((_config$id = config.id) != null ? _config$id : root.id, this);
      Modal.processAriaAttributes(template.container, config);
      var uiBackdrop = (_config$uiBackdrop = config == null ? void 0 : config.uiBackdrop) != null ? _config$uiBackdrop : true;
      Modal.manageModalEvents(this, uiBackdrop);
    }
  }

  Modal.getTemplateByContext = function getTemplateByContext(context) {
    return this.template.get(context);
  }
  /**
   * Determines if the root is a direct child of the document body. This relationship is required for a modal to operate appropriately as to ensure all of the other children in the document body are inert when a modal is active.
   * @param root HTMLElement
   * @returns boolean
   */
  ;

  Modal.isRootChildOfBody = function isRootChildOfBody(root) {
    var result = root.parentElement === this.body;

    if (!result) {
      console.error("A modal must be a direct child of the document body. Aborting support for this element.", {
        root: root
      });
    }

    return result;
  }
  /**
   * Iterates through the body element's children and determines if all obscure elements will be inert.
   */
  ;

  Modal.manageInertState = function manageInertState() {
    var children = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.enumerateElements)(this.body.children);

    if (this.anyOpenModalsStatus) {
      children.filter(function (child) {
        return child.classList.contains("modal-dialog--is-active");
      }).forEach(this.removeInertState);
      children.filter(function (child) {
        return !child.classList.contains("modal-dialog--is-active");
      }).forEach(this.addInertState);
    } else {
      children.forEach(this.removeInertState);
    }
  }
  /**
   * Iterates through the body element's children and removes the inert attribute.
   * @param children Element
   */
  ;

  Modal.removeInertState = function removeInertState(child) {
    child.removeAttribute("inert");
    child.removeAttribute("aria-hidden");
    var actors = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.enumerateElements)(child.querySelectorAll("[data-modal-dialog-actor]"));
    actors.forEach(function (actor) {
      return actor.removeAttribute("disabled");
    });
  }
  /**
   * Iterates through the body element's children and adds the inert attribute.
   * @param children Element
   */
  ;

  Modal.addInertState = function addInertState(child) {
    child.setAttribute("inert", "true");
    child.setAttribute("aria-hidden", "true");
    var actors = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.enumerateElements)(child.querySelectorAll("[data-modal-dialog-actor]"));
    actors.forEach(function (actor) {
      return actor.setAttribute("disabled", "true");
    });
  }
  /**
   * Creates a new HTMLElement container that provides appropriate accessibility attributes and CSS class identifiers.
   * @returns HTMLElement
   */
  ;

  Modal.createContainer = function createContainer(id, role, templateModifier) {
    if (role === void 0) {
      role = "dialog";
    }

    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.createElement)("div", {
      role: role,
      hidden: "hidden",
      tabindex: "-1",
      "aria-modal": "true",
      "data-modal-dialog-parent-id": id,
      class: "modal-dialog modal-dialog--container modal-dialog--is-disabled modal-dialog--is-hidden modal-dialog--" + id + " modal-dialog--" + templateModifier
    });
  }
  /**
   * Creates a new HTMLElement backdrop that provides appropriate accessibility attributes and CSS class identifiers.
   * @returns HTMLElement
   */
  ;

  Modal.createBackdrop = function createBackdrop(id) {
    return this.registerCloseAttributes((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.createElement)("div", {
      role: "presentation",
      class: "modal-dialog__backdrop",
      "aria-hidden": "true"
    }), id);
  }
  /**
   * Takes an HTMLElement and provides essential attributes to enable the element to close a modal.
   * @param element HTMLElement
   * @param id string
   * @returns HTMLElement
   */
  ;

  Modal.registerCloseAttributes = function registerCloseAttributes(element, id) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.setElementAttributes)(element, {
      "data-modal-dialog-actor": "close",
      "data-modal-dialog-id": id,
      "aria-label": "Close dialog"
    });
  }
  /**
   * Creates an HTMLElement button and provides appropriate accessibility attributes and CSS class identifiers.
   * @param id string
   * @returns HTMLElement
   */
  ;

  Modal.createCloseButton = function createCloseButton(id) {
    return this.registerCloseAttributes((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.createElement)("button", {
      type: "button",
      class: "modal-dialog__close"
    }), id);
  }
  /**
   * Creates an element to represent the modal dialog stage.
   * @returns HTMLElement
   */
  ;

  Modal.createStage = function createStage() {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.createElement)("div", {
      // role: "document",
      class: "modal-dialog__stage"
    });
  };

  Modal.createContent = function createContent() {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.createElement)("div", {
      class: "modal-dialog__content"
    });
  };

  Modal.createViewport = function createViewport() {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.createElement)("div", {
      class: "modal-dialog__viewport"
    });
  }
  /**
   * Takes the root element and encloses it within a new container element that is equipped with appropriate accessibility attributes and CSS class identifiers.
   * @param root HTMLElement
   * @returns HTMLElement
   */
  ;

  Modal.createHTMLTemplate = function createHTMLTemplate(root, config) {
    var _config$id2, _config$templateModif;

    var id = (_config$id2 = config.id) != null ? _config$id2 : root.id;
    var container = this.createContainer(id, config.role, (_config$templateModif = config.templateModifier) != null ? _config$templateModif : "base");
    var viewport = this.createViewport();
    var content = this.createContent();
    var stage = this.createStage();
    var backdrop = this.createBackdrop(id);
    var closeButton = this.createCloseButton(id);
    root.insertAdjacentElement("afterend", container);
    container.insertAdjacentElement("beforeend", backdrop);
    container.insertAdjacentElement("afterbegin", viewport);
    viewport.insertAdjacentElement("afterbegin", stage);
    stage.insertAdjacentElement("beforeend", closeButton);
    stage.insertAdjacentElement("afterbegin", content);
    content.insertAdjacentElement("beforeend", root);
    return {
      container: container,
      viewport: viewport,
      content: content,
      stage: stage,
      backdrop: backdrop,
      closeButton: closeButton
    };
  }
  /**
   * Determines if user-provided ARIA attributes are referencing elements within the modal's scope. An error message will be reported for any mismatches between the reference and the element.
   * @param container HTMLElement
   * @param config IModalConfig
   */
  ;

  Modal.processAriaAttributes = function processAriaAttributes(container, config) {
    if (config.ariaLabelledBy) {
      this.connectAriaReferenceToElementId(container, "aria-labelledby", config.ariaLabelledBy);
    }

    if (config.ariaDescribedBy) {
      this.connectAriaReferenceToElementId(container, "aria-describedby", config.ariaDescribedBy);
    }

    if (config.ariaLabel) {
      container.setAttribute("aria-label", config.ariaLabel);
    }

    if (!config.ariaLabel && !config.ariaLabelledBy) {
      console.error("There is no label for this modal.", {
        container: container
      });
    }
  }
  /**
   * Determines if an element representing the ARIA value exists in the document. If an element exists, the container will reference the element via ARIA attribute; otherwise, an error will be reported of the disconnect.
   * @param container HTMLElement
   * @param attribute string
   * @param value string
   */
  ;

  Modal.connectAriaReferenceToElementId = function connectAriaReferenceToElementId(container, attribute, value) {
    if ((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_14__.elementExists)(container.querySelector("#" + value))) {
      container.setAttribute(attribute, value);
    } else {
      console.error("There is no element id that matches " + attribute + " value " + value + ".", {
        container: container
      });
    }
  }
  /**
   * Makes the modal dialog visible on screen by removing the "modal-dialog--is-disabled" class.
   * @param root HTMLElement
   */
  ;

  Modal.makeRootVisible = function makeRootVisible(root) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var presenter = _this.getPresentationElementByContextRootElement(root);

      var handler = function handler(event) {
        if (event.target !== presenter) return;
        root.removeEventListener("transitionend", handler);
        resolve();
      };

      root.addEventListener("transitionend", handler);
      root.classList.remove("modal-dialog--is-disabled");
      root.classList.remove("modal-dialog--is-hidden");
      root.removeAttribute("hidden");
    });
  }
  /**
   * Makes the modal dialog invisible on screen by adding the "modal-dialog--is-disabled" class.
   * @param root HTMLElement
   */
  ;

  Modal.makeRootInvisible = function makeRootInvisible(root) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      root.classList.add("modal-dialog--is-hidden");

      var presenter = _this2.getPresentationElementByContextRootElement(root);

      var handler = function handler(event) {
        if (event.target !== presenter) return;
        root.classList.add("modal-dialog--is-disabled");
        root.setAttribute("hidden", "hidden");
        root.removeEventListener("transitionend", handler);
        resolve();
      };

      root.addEventListener("transitionend", handler);
    });
  }
  /**
   * Determines if the modal dialog is visible through the "modal-dialog--is-disabled" class.
   * @param root HTMLElement
   * @returns boolean
   */
  ;

  Modal.isRootVisible = function isRootVisible(root) {
    return !root.classList.contains("modal-dialog--is-disabled");
  }
  /**
   * Takes an actor element and extracts the value from the "data-modal-dialog-actor" attribute.
   * @param actor HTMLElement
   * @returns string
   */
  ;

  Modal.getActionByActor = function getActionByActor(actor) {
    var _actor$getAttribute;

    return ((_actor$getAttribute = actor.getAttribute("data-modal-dialog-actor")) != null ? _actor$getAttribute : "").toLowerCase();
  }
  /**
   * Captures the element that contains the ".modal-dialog--is-active" class and retrieves the Modal instance that is associated with the modal dialog element.
   * @returns Modal
   */
  ;

  Modal.getContextByActiveRoot = function getContextByActiveRoot() {
    var root = document.querySelector(".modal-dialog--is-active");
    return this.getContextByActorParentId(root);
  }
  /**
   * Takes an actor element as the keyword to retrieve its associated Modal instance.
   * @param actor HTMLElement
   * @returns Modal
   */
  ;

  Modal.getContextByActorId = function getContextByActorId(actor) {
    var _actor$getAttribute2;

    return this.context.get((_actor$getAttribute2 = actor.getAttribute("data-modal-dialog-id")) != null ? _actor$getAttribute2 : "");
  }
  /**
   * Takes an actor element as the keyword to retrieve its associated Modal instance.
   * @param actor HTMLElement
   * @returns Modal
   */
  ;

  Modal.getContextByActorParentId = function getContextByActorParentId(actor) {
    var _actor$getAttribute3;

    return this.context.get((_actor$getAttribute3 = actor == null ? void 0 : actor.getAttribute("data-modal-dialog-parent-id")) != null ? _actor$getAttribute3 : "");
  }
  /**
   * Takes an actor element to retrieve its associated Modal instance, opens the modal and sets focus to the first focusable element within that modal.
   * @param actor HTMLElement
   */
  ;

  Modal.handleOpenEvent = function handleOpenEvent(actor) {
    var context = this.getContextByActorId(actor);
    if (!context) return;
    this.handleOpenState(context, actor);
  }
  /**
   * Takes an actor element to retrieve its associated Modal instance, retrieves the actor that opened the modal, closes the modal, and sets focus back to the actor that opened the modal.
   * @param actor HTMLElement
   */
  ;

  Modal.handleCloseEvent = function handleCloseEvent(actor) {
    var context = this.getContextByActorId(actor);
    if (!context) return;
    this.handleCloseState(context);
  }
  /**
   * Closes the active modal dialog when the captured key command satifies the required keyboard name.
   * @param key string
   * @param event KeyboardEvent
   */
  ;

  Modal.handleCloseEventByKey = function handleCloseEventByKey(key, event) {
    var _event$key;

    if (((_event$key = event.key) == null ? void 0 : _event$key.toLowerCase()) === key.toLowerCase()) {
      var context = this.getContextByActiveRoot();
      if (!context) return;
      this.handleCloseState(context);
    }
  }
  /**
   * Adds a click event listener on the body element to capture actor elements, process the action from that actor element and channel the actor into either the open event or close event. Adds keyup event listeners to capture the "escape" key and triggers the close event.
   */
  ;

  Modal.setGlobalEvents = function setGlobalEvents() {
    var _this3 = this;

    this.body.addEventListener("click", function (event) {
      var _target$closest;

      var target = event.target;
      var actor = (_target$closest = target.closest("[data-modal-dialog-id]")) != null ? _target$closest : target;
      var action = Modal.getActionByActor(actor);

      switch (action) {
        case "open":
          event.preventDefault();
          Modal.handleOpenEvent(actor);
          break;

        case "close":
          Modal.handleCloseEvent(actor);
          break;
      }
    });
    addEventListener("keyup", this.handleCloseEventByKey.bind(this, "escape"));
    addEventListener("keyup", this.handleCloseEventByKey.bind(this, "esc"));
    addEventListener("hashchange", function (event) {
      _this3.controlByUrlParameters = true;

      _this3.handleOpenEventByUrl(true);
    });
    addEventListener("load", function (event) {
      _this3.controlByUrlParameters = true;

      _this3.handleOpenEventByUrl(true);
    });
  }
  /**
   * Compares the current window URL hash fragment with any HTML element candidate that contains a matching fragment. If a match is found and the element is elected as an actor, the modal dialog will attempt to open on screen.
   * @param directResponse booelean
   * @returns void
   */
  ;

  Modal.handleOpenEventByUrl = function handleOpenEventByUrl(directResponse) {
    var _this4 = this;

    if (directResponse === void 0) {
      directResponse = false;
    }

    if (!this.controlByUrlParameters) return;
    var candidates = Array.from(document.querySelectorAll("[data-modal-dialog-url-contains]"));
    var patterns = candidates.map(function (candidate) {
      return candidate.getAttribute("data-modal-dialog-url-contains");
    }).filter(function (pattern) {
      return !!pattern;
    });
    var match = patterns.find(function (pattern) {
      return window.location.hash === pattern;
    });
    if (!match) return;
    var actor = candidates.find(function (candidate) {
      return candidate.getAttribute("data-modal-dialog-url-contains") === match && !!candidate.getAttribute("data-modal-dialog-id");
    });
    if (!actor) return;
    var context = this.getContextByActiveRoot();
    context == null ? void 0 : context.close();

    if (directResponse) {
      requestAnimationFrame(function () {
        actor.focus();
        requestAnimationFrame(function () {
          return actor.click();
        });
        addEventListener("modal::open", function (event) {
          _this4.controlByUrlParameters = false;
        }, {
          once: true
        });
      });
    }

    addEventListener("modal::close", function (event) {
      if (!_this4.controlByUrlParameters) return;
      requestAnimationFrame(function () {
        actor.focus();
        requestAnimationFrame(function () {
          return actor.click();
        });
        _this4.controlByUrlParameters = false;
      });
    }, {
      once: true
    });
    var currentContext = Modal.getContextByActorId(actor);
    if (currentContext) return;
    this.handleOpenEventByActorObserver(actor).catch(function (error) {
      _this4.handleOpenEventByActorParentObserver(actor).catch(function (error) {
        return console.debug(error);
      });
    });
  }
  /**
   * Takes an actor and observes it within the viewport. Once captured, the actor will submit a click event and attempt to display the modal dialog on screen.
   * @param actor HTMLElement
   * @returns Promise<void>
   */
  ;

  Modal.handleOpenEventByActorObserver = function handleOpenEventByActorObserver(actor) {
    return new Promise(function (resolve, reject) {
      var io = new IntersectionObserver(function (records) {
        var condition = records.find(function (record) {
          return record.isIntersecting;
        });
        if (!condition) return;
        io.disconnect();
        actor.focus();
        requestAnimationFrame(function () {
          return actor.click();
        });
        var context = Modal.getContextByActorId(actor);
        !!context ? resolve() : reject({
          message: "A modal dialog context could not be found for the given HTML element",
          actor: actor
        });
      });
      io.observe(actor);
    });
  }
  /**
   * Takes an actor and observes the document body for any childList mutations in an attempt to intercept modal dialog containers to render in the document. Once captured, the container is compared with the actor by it's id and attempts to display a modal dialog on screen.
   * @param actor HTMLElement
   * @returns Promise<void>
   */
  ;

  Modal.handleOpenEventByActorParentObserver = function handleOpenEventByActorParentObserver(actor) {
    return new Promise(function (resolve, reject) {
      var mo = new MutationObserver(function (records) {
        var container = records.map(function (record) {
          return Array.from(record.addedNodes).filter(function (node) {
            return node.nodeType === Node.ELEMENT_NODE;
          }).find(function (element) {
            return element.hasAttribute("data-modal-dialog-parent-id");
          });
        }).find(function (element) {
          return !!element && !!element.getAttribute("data-modal-dialog-parent-id") === !!actor.getAttribute("data-modal-dialog-id");
        });
        if (!container) return;
        mo.disconnect();
        actor.focus();
        requestAnimationFrame(function () {
          return actor.click();
        });
        var context = Modal.getContextByActorId(actor);
        !!context ? resolve() : reject({
          message: "A modal dialog context could not be found for the given HTML element",
          actor: actor
        });
      });
      mo.observe(document.body, {
        childList: true
      });
    });
  }
  /**
   * Adds a blur event to the modal dialog assigning the first focusable element as the next focusable element. Adds a click event to the modal dialog stage area to determine if pointer-device targets the backdrop area and will close the modal if true.
   * @param context Modal
   */
  ;

  Modal.setInstanceEvents = function setInstanceEvents(context) {
    var template = this.template.get(context);
    if (!template) return;
    var root = this.root.get(context);
    if (!root) return;
    var backdropEvent = (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_15__.createEvent)(window, "modal::backdrop");
    root.addEventListener("click", function (event) {
      var target = event.target;
      var stage = target.closest(".modal-dialog__stage");

      if (stage !== template.stage && target.closest(".modal-dialog")) {
        Modal.handleCloseState(context);
        dispatchEvent(backdropEvent);
      }
    });
  }
  /**
   * Manages both global events and Modal instance events.
   * @param context Modal
   */
  ;

  Modal.manageModalEvents = function manageModalEvents(context, uiBackdrop) {
    if (uiBackdrop) {
      this.setInstanceEvents(context);
    }

    if (!this.eventListenerStatus) {
      this.eventListenerStatus = true;
      this.setGlobalEvents();
    }
  }
  /**
   * Uses a CSS custom property representing a CSS selector to determine which element should be assigned as the presenter for displaying the modal dialog.
   * @param root
   * @returns HTMLElement | null
   */
  ;

  Modal.getPresentationElementByContextRootElement = function getPresentationElementByContextRootElement(root) {
    var selector = getComputedStyle(root).getPropertyValue("--presentation-selector");
    return selector !== "" ? root.querySelector(selector) : root.querySelector(".modal-dialog__backdrop");
  }
  /**
   * Takes a Modal instance to retrieve the root element, activates the modal on screen, sets focus to the first focusable element.
   * @param context Modal
   */
  ;

  Modal.handleOpenState = function handleOpenState(context, actor) {
    var _root$getAttribute,
        _this5 = this;

    var root = this.root.get(context);
    if (!root) return;
    var template = this.template.get(context);
    if (!template) return;
    var focus = new Shared_ts_utils_focus_trap__WEBPACK_IMPORTED_MODULE_12__["default"](template.stage);
    if (!focus) return;
    this.focus.set(context, focus);
    this.makeActive(context);
    this.manageInertState();
    focus.on();
    this.addParentIdToActors(focus.focusElements, (_root$getAttribute = root.getAttribute("data-modal-dialog-parent-id")) != null ? _root$getAttribute : "");
    var firstElement = focus.firstElement();
    this.makeRootVisible(root).then(function () {
      requestAnimationFrame(function () {
        _this5.updateScrollBody();

        firstElement.focus();
        var openActor = actor != null ? actor : document.activeElement;
        Modal.actor.set(context, openActor);
        (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_15__.createEvent)(window, "modal::open");
      });
    });
  }
  /**
   * Takes a Modal instance to retrieve the root element and deactivates the modal on screen.
   * @param context Modal
   */
  ;

  Modal.handleCloseState = function handleCloseState(context) {
    var _this6 = this;

    var root = this.root.get(context);
    if (!root) return;
    var focus = this.focus.get(context);
    if (!focus) return;
    focus.off();
    var openActor = this.actor.get(context);
    if (!openActor) return;
    this.makeRootInvisible(root).then(function () {
      var modal = _this6.getContextByActorParentId(openActor);

      if (modal) {
        _this6.makeActive(modal);
      }

      _this6.updateFocusStateByActor(openActor);

      _this6.updateScrollBody();

      _this6.manageInertState();

      openActor == null ? void 0 : openActor.focus();
      (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_15__.createEvent)(window, "modal::close");
    });
  }
  /**
   * Iterates through all Modal instances, determines the current Modal instance and adds the "modal-dialog--is-active" class to the modal dialog. Any other modal dialog will have the "modal-dialog--is-active" removed.
   * @param context Modal
   */
  ;

  Modal.makeActive = function makeActive(context) {
    this.context.forEach(function (modal) {
      var root = Modal.root.get(modal);
      if (!root) return;
      var action = context === modal ? "add" : "remove";
      root.classList[action]("modal-dialog--is-active");
    });
  }
  /**
   * Determines if the actor communicating with a modal dialog is not related to the same modal dialog. If the condition is met, the actor is set as the open actor.
   * @param context Modal
   * @param actor HTMLElement
   */
  ;

  Modal.updateOpenActor = function updateOpenActor(context, actor) {
    if (actor.getAttribute("data-modal-dialog-id") !== actor.getAttribute("data-modal-dialog-parent-id")) {
      this.actor.set(context, actor);
    }
  }
  /**
   * Filters all focusable elements that contain the "data-modal-dialog-id" and assigns the "data-modal-dialog-parent-id" attribute to match the modal dialog id.
   * @param elements Element[]
   * @param id string
   */
  ;

  Modal.addParentIdToActors = function addParentIdToActors(elements, id) {
    elements.filter(function (element) {
      return element.hasAttribute("data-modal-dialog-id") && !element.hasAttribute("data-modal-dialog-parent-id");
    }).forEach(function (element) {
      return element.setAttribute("data-modal-dialog-parent-id", id);
    });
  }
  /**
   * Takes an actor to retrieve the Modal instance. If any Modal instances are open, retrieve the FocusTrap instance and enable focus trap navigation.
   * @param actor HTMLElement
   */
  ;

  Modal.updateFocusStateByActor = function updateFocusStateByActor(actor) {
    var context = this.getContextByActorParentId(actor);

    if (context && this.anyOpenModalsStatus) {
      var focus = this.focus.get(context);
      if (!focus) return;
      focus.on();
    }
  }
  /**
   * Iterates through all of the Modal instances and retrives each root element to determine if the modal dialog is visible.
   * @returns boolean
   */
  ;

  Modal.anyOpenModals = function anyOpenModals() {
    Modal.anyOpenModalsStatus = false;
    this.context.forEach(function (context) {
      var root = Modal.root.get(context);

      if (root && Modal.isRootVisible(root)) {
        Modal.anyOpenModalsStatus = true;
      }
    });
    return Modal.anyOpenModalsStatus;
  }
  /**
   * Applies the "modal-dialog--is-open" class to the body element to disable document scrolling when any modal is open.
   */
  ;

  Modal.updateScrollBody = function updateScrollBody() {
    if (this.anyOpenModals()) {
      this.body.classList.add("modal-dialog--is-open");
    } else {
      this.body.classList.remove("modal-dialog--is-open");
    }
  }
  /**
   * Opens the modal
   */
  ;

  var _proto = Modal.prototype;

  _proto.open = function open() {
    Modal.handleOpenState(this, document.activeElement);
  }
  /**
   * Closes the modal
   */
  ;

  _proto.close = function close() {
    Modal.handleCloseState(this);
  };

  return Modal;
}();

Modal.context = new Map();
Modal.actor = new WeakMap();
Modal.root = new WeakMap();
Modal.template = new WeakMap();
Modal.focus = new WeakMap();
Modal.body = document.body;
Modal.eventListenerStatus = false;
Modal.anyOpenModalsStatus = false;
Modal.controlByUrlParameters = false;


/***/ }),

/***/ "../../Shared-International/ts/components/nav.ts":
/*!*******************************************************!*\
  !*** ../../Shared-International/ts/components/nav.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");
/* harmony import */ var Shared_ts_utils_focus_navigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/ts/utils/focus-navigator */ "../../Shared-International/ts/utils/focus-navigator.ts");








var Nav = /*#__PURE__*/function () {
  /**
   * Represents the root element by ".nav"
   */

  /**
   * Represents the label element by ".nav__label"
   */

  /**
   * Represents the underlay element by ".nav__underlay"
   */

  /**
   * Represents an array of ".nav__link" elements
   */

  /**
   * Represents the modifier for a selected nav label element
   */

  /**
   * Represents the modifier for a selected nav root element
   */

  /**
   * Allows a label HTMLElement to open, close or toggle a nearby navigation list.
   * @param id string
   */
  function Nav(id) {
    var _this$root, _this$root2;

    this.root = void 0;
    this.label = void 0;
    this.underlay = void 0;
    this.links = [];
    this.root = document.getElementById(id);
    this.label = (_this$root = this.root) == null ? void 0 : _this$root.querySelector(".nav__label");
    this.underlay = (_this$root2 = this.root) == null ? void 0 : _this$root2.querySelector(".nav__underlay");

    if (this.root) {
      this.links = Array.from(this.root.querySelectorAll("a.nav__link")).filter(function (link) {
        return !link.hasAttribute("aria-haspopup") && !link.hasAttribute("aria-expanded");
      });
    }

    this.processEvents();
    var focusNavigator = new Shared_ts_utils_focus_navigator__WEBPACK_IMPORTED_MODULE_6__["default"](this.root);
    focusNavigator.updateElements();
    focusNavigator.on();
  }
  /**
   * Registers an event listener on the ".nav__label" to toggle the nav, ".nav__underlay" to close the nav and each ".nav__link" to close the nav.
   */


  var _proto = Nav.prototype;

  _proto.processEvents = function processEvents() {
    var _this = this;

    if (this.label && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__.elementExists)(this.label)) {
      this.label.addEventListener("click", this.toggle.bind(this));
    }

    if (this.underlay && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__.elementExists)(this.underlay)) {
      this.underlay.addEventListener("click", this.close.bind(this));
    }

    this.links.forEach(function (link) {
      return link.addEventListener("click", _this.close.bind(_this));
    });
  }
  /**
   * Toggles the ".nav__label--is-selected" class on the label element between the Close() method and the Open() method.
   */
  ;

  _proto.toggle = function toggle() {
    var _this$root3;

    (_this$root3 = this.root) == null ? void 0 : _this$root3.classList.toggle(Nav.RootIsSelected);

    if (this.label && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__.elementExists)(this.label)) {
      this.label.classList.toggle(Nav.labelIsSelected);
    }
  }
  /**
   * Removes the ".nav__label--is-selected" class from the label element.
   */
  ;

  _proto.close = function close() {
    var _this$root4;

    (_this$root4 = this.root) == null ? void 0 : _this$root4.classList.remove(Nav.RootIsSelected);

    if (this.label && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__.elementExists)(this.label)) {
      this.label.classList.remove(Nav.labelIsSelected);
    }
  }
  /**
   * Adds the ".nav__label--is-selected" class to the label element.
   */
  ;

  _proto.open = function open() {
    var _this$root5;

    (_this$root5 = this.root) == null ? void 0 : _this$root5.classList.add(Nav.RootIsSelected);

    if (this.label && (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_5__.elementExists)(this.label)) {
      this.label.classList.add(Nav.labelIsSelected);
    }
  };

  return Nav;
}();

Nav.labelIsSelected = "nav__label--is-selected";
Nav.RootIsSelected = "nav--is-selected";


/***/ }),

/***/ "../../Shared-International/ts/components/status-screen.ts":
/*!*****************************************************************!*\
  !*** ../../Shared-International/ts/components/status-screen.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StatusScreen; }
/* harmony export */ });
/* unused harmony export initializeGlobalStatusScreen */
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "../../node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Shared-International/ts/utils/capture-element.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");






// utils



var StatusScreen = /*#__PURE__*/function () {
  /**
   * Represents the HTML scope
   */

  /**
   * Represents the key-value relationship between the current StatusScreen context and the HTML element container
   */

  /**
   * Presents a UI view to the user that represents the status of a background task and provides the ability to assign the view to states such as; busy, done and problem to represent the appropriate status of the task.
   * @param id string
   * @param scope HTMLElement
   */
  function StatusScreen(id, scope) {
    if (id === void 0) {
      id = "default";
    }

    if (scope === void 0) {
      scope = document.body;
    }

    this.scope = void 0;
    this.scope = scope;
    var element = StatusScreen.initializeTemplate(id, this);
    StatusScreen.captureElement(element);
    StatusScreen.initializeEvents(element, this);
  }
  /**
   * Manages which state method to execute
   * @param element HTMLElement
   */


  StatusScreen.delegateState = function delegateState(element) {
    var _element$getAttribute;

    var state = (_element$getAttribute = element.getAttribute("data-status-screen-state")) == null ? void 0 : _element$getAttribute.toLowerCase();

    switch (state) {
      case "busy":
        this.handleBusyState(element);
        break;

      case "done":
        this.handleDoneState(element);
        break;

      case "problem":
        this.handleProblemState(element);
        break;
    }
  }
  /**
   * Manages the text attributes necessary to animate the output text
   * @param element HTMLElement
   * @param controller HTMLElement
   * @returns void
   */
  ;

  StatusScreen.controlTextAttributes = function controlTextAttributes(element, controller) {
    var _output$textContent;

    var output = element.querySelector("output");
    if (!output) return;
    var text = (_output$textContent = output.textContent) == null ? void 0 : _output$textContent.trim();

    if (!text) {
      output.textContent = controller.getAttribute("data-status-screen-input");
      return;
    }

    controller.setAttribute("data-status-screen-output", text);
    element.classList.add("status-screen--receive-text-input");
  }
  /**
   * Manages the output text
   * @param element HTMLElement
   * @returns void
   */
  ;

  StatusScreen.controlOutputText = function controlOutputText(element) {
    var controller = element.querySelector(".status-screen__output");
    var output = element.querySelector("output");
    if (!output || !controller) return;
    output.textContent = controller.getAttribute("data-status-screen-input");
    element.classList.remove("status-screen--update-output", "status-screen--receive-text-input");
  }
  /**
   * Establishes a mutation observer on the status screen element and manages the visibility state, the task-flow state and the output text
   * @param element HTMLElement
   */
  ;

  StatusScreen.captureElement = function captureElement(element) {
    var _this = this;

    var captureElement = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_6__["default"](element);
    captureElement.subscribe("attributes", function (record) {
      if (record.attributeName === "class" && element.classList.contains("status-screen--update-output")) {
        _this.controlOutputText(element);
      }

      if (record.attributeName === "data-status-screen-input") {
        _this.controlTextAttributes(element, record.target);
      }

      if (record.attributeName === "data-status-screen-state") {
        _this.delegateState(element);
      }

      if (record.attributeName === "hidden") {
        element.hasAttribute("hidden") ? _this.handleCloseState(element) : _this.handleOpenState(element);
      }
    });
  }
  /**
   * Initializes all of the events necessary for the status screen UI to operate
   * @param element HTMLElement
   */
  ;

  StatusScreen.initializeEvents = function initializeEvents(element, context) {
    var _element$querySelecto,
        _element$querySelecto2,
        _this2 = this,
        _element$querySelecto3;

    (_element$querySelecto = element.querySelector(".status-screen__screen")) == null ? void 0 : _element$querySelecto.addEventListener("transitionend", function (event) {
      if (!element.classList.contains("status-screen--is-hidden")) return;
      element.setAttribute("hidden", "true");
    });
    (_element$querySelecto2 = element.querySelector(".status-screen__output")) == null ? void 0 : _element$querySelecto2.addEventListener("animationend", function (event) {
      var _event$animationName;

      if (((_event$animationName = event.animationName) == null ? void 0 : _event$animationName.toLowerCase()) === "status-screen-fade-translate-text-out") {
        element.classList.add("status-screen--update-output");
      }
    });
    addEventListener("keyup", function (event) {
      var _event$key;

      var escape = ((_event$key = event.key) == null ? void 0 : _event$key.toLowerCase()) === "escape";
      if (!escape || !_this2.closeOnCondition(element)) return;
      context.close();
    });
    (_element$querySelecto3 = element.querySelector(".status-screen__close")) == null ? void 0 : _element$querySelecto3.addEventListener("click", function (event) {
      if (!_this2.closeOnCondition(element)) return;
      context.close();
    });
  }
  /**
   * Determines if the status screen UI is in the problem or done state
   * @param element HTMLElement
   * @returns boolean
   */
  ;

  StatusScreen.closeOnCondition = function closeOnCondition(element) {
    var _element$getAttribute2;

    var state = (_element$getAttribute2 = element.getAttribute("data-status-screen-state")) == null ? void 0 : _element$getAttribute2.toLowerCase();
    return state === "problem" || state === "done";
  }
  /**
   * Updates the status screen UI to render the open state view
   * @param element HTMLElement
   */
  ;

  StatusScreen.handleOpenState = function handleOpenState(element) {
    element.classList.remove("status-screen--is-hidden");
  }
  /**
   * Updates the status screen UI to render the close state view
   * @param element HTMLElement
   */
  ;

  StatusScreen.handleCloseState = function handleCloseState(element) {
    element.classList.add("status-screen--is-hidden");
  }
  /**
   * Updates the status screen UI to render the busy state view
   * @param element HTMLElement
   */
  ;

  StatusScreen.handleBusyState = function handleBusyState(element) {
    var _element$querySelecto4;

    element.classList.remove("status-screen--is-hidden", "status-screen--is-done", "status-screen--is-problem");
    element.classList.add("status-screen--is-busy");
    (_element$querySelecto4 = element.querySelector(".status-screen__close")) == null ? void 0 : _element$querySelecto4.setAttribute("disabled", "true");
  }
  /**
   * Updates the status screen UI to render the done state view
   * @param element HTMLElement
   */
  ;

  StatusScreen.handleDoneState = function handleDoneState(element) {
    var _element$querySelecto5;

    element.classList.remove("status-screen--is-hidden", "status-screen--is-busy", "status-screen--is-problem");
    element.classList.add("status-screen--is-done");
    (_element$querySelecto5 = element.querySelector(".status-screen__close")) == null ? void 0 : _element$querySelecto5.removeAttribute("disabled");
  }
  /**
   * Updates the status screen UI to render the problem state view
   * @param element HTMLElement
   */
  ;

  StatusScreen.handleProblemState = function handleProblemState(element) {
    var _element$querySelecto6;

    element.classList.remove("status-screen--is-hidden", "status-screen--is-busy", "status-screen--is-done");
    element.classList.add("status-screen--is-problem");
    (_element$querySelecto6 = element.querySelector(".status-screen__close")) == null ? void 0 : _element$querySelecto6.removeAttribute("disabled");
  }
  /**
   * Returns the HTML element
   * @param id string
   * @returns HTMLElement | null
   */
  ;

  StatusScreen.getElementById = function getElementById(id) {
    return document.getElementById(id);
  }
  /**
   * Attempts to retrieve the HTML element that is associated with the StatusScreen context
   * @param context StatusScreen
   * @returns HTMLElement | null | undefined
   */
  ;

  StatusScreen.getElementByContext = function getElementByContext(context) {
    return this.elementRepository.get(context);
  }
  /**
   * Elects an HTML template as the status screen Ui
   * @param id string
   * @param context StatusScreen
   * @returns HTMLElement
   */
  ;

  StatusScreen.initializeTemplate = function initializeTemplate(id, context) {
    var element = this.getElementByContext(context);
    if (element) return element;
    element = this.getElementById(id);

    if (!element) {
      var template = this.createTemplate(id);
      context.scope.appendChild(template);
      element = this.getElementById(id);
    }

    if (element) {
      this.elementRepository.set(context, element);
    }

    return element;
  }
  /**
   * Creates an HTML template of the status screen UI. The document fragment of that template is returned.
   * @param id string
   * @returns DocumentFragment
   */
  ;

  StatusScreen.createTemplate = function createTemplate(id) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_7__.renderTemplate)("<div id=\"" + id + "\" class=\"status-screen status-screen--is-hidden status-screen--" + id + "\" hidden>\n            <div class=\"status-screen__screen\">\n                <div class=\"status-screen__status\">\n                    <div class=\"status-screen__status-positive\">\n                        <div class=\"status-screen__circle-icon\">\n                            <svg viewBox=\"0 0 52 52\"><circle cx=\"26\" cy=\"26\" r=\"25\"></circle><path d=\"M14.1 27.2l7.1 7.2 16.7-16.8\"></path></svg>\n                        </div>\n                    </div>\n                    <div class=\"status-screen__status-negative\">\n                        <div class=\"status-screen__cross\"></div>\n                    </div>\n                </div>\n                <div class=\"status-screen__output\" data-status-screen-output=\"\">\n                    <output role=\"status\"></output>\n                </div>\n            </div>\n            <button type=\"button\" class=\"status-screen__close status-screen__cross\" aria-label=\"Close\"></button>\n        </div>");
  }
  /**
   * Reports a debug-error to the developer
   * @param message string
   */
  ;

  StatusScreen.reportUIDebug = function reportUIDebug(message) {
    console.debug({
      message: message,
      for: "StatusScreen Api"
    });
  }
  /**
   * Updates the text in the status screen UI
   * @param text string
   * @returns void
   */
  ;

  var _proto = StatusScreen.prototype;

  _proto.update = function update(text) {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;

    if (!text) {
      return StatusScreen.reportUIDebug("A text message must be provided when calling the 'update' method so that the status may be accessible to the user. Aborting task.");
    }

    var controller = element.querySelector("[data-status-screen-output]");
    if (!controller) return;
    controller.setAttribute("data-status-screen-input", text);
  }
  /**
   * Renders the status screen UI visible in the viewport
   * @returns void
   */
  ;

  _proto.open = function open() {
    var _element$textContent;

    var element = StatusScreen.getElementByContext(this);
    if (!element) return;
    var text = (_element$textContent = element.textContent) == null ? void 0 : _element$textContent.trim();

    if (!text) {
      return StatusScreen.reportUIDebug("An output element must contain a text node when calling the 'open' method so that the status may be accessible to the user. Aborting task.");
    }

    var state = element.hasAttribute("data-status-screen-state");

    if (!state) {
      return StatusScreen.reportUIDebug("A state must be assigned when calling the 'open' method. Aborting task.");
    }

    element.removeAttribute("hidden");
  }
  /**
   * Renders the status screen UI invisible in the viewport
   * @returns void
   */
  ;

  _proto.close = function close() {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;
    element.classList.add("status-screen--is-hidden");
  }
  /**
   * Assigns a "busy" state to the status screen UI and provides a status message to inform the user of the reason
   * @param text string
   * @returns void
   */
  ;

  _proto.busy = function busy(text) {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;

    if (!text) {
      return StatusScreen.reportUIDebug("A text message must be provided when calling the 'busy' method so that the status may be accessible to the user. Aborting task.");
    }

    element.setAttribute("data-status-screen-state", "busy");
    this.update(text);
    requestAnimationFrame(this.open.bind(this));
  }
  /**
   * Assigns a "done" state to the status screen UI and provides a status message to inform the user of the reason
   * @param text string
   * @returns void
   */
  ;

  _proto.done = function done(text) {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;

    if (!text) {
      return StatusScreen.reportUIDebug("A text message must be provided when calling the 'done' method so that the status may be accessible to the user. Aborting task.");
    }

    element.setAttribute("data-status-screen-state", "done");
    this.update(text);
    requestAnimationFrame(this.open.bind(this));
  }
  /**
   * Assigns a "problem" state to the status screen UI and provides a status message to inform the user of the reason
   * @param text string
   * @returns void
   */
  ;

  _proto.problem = function problem(text) {
    var element = StatusScreen.getElementByContext(this);
    if (!element) return;

    if (!text) {
      return StatusScreen.reportUIDebug("A text message must be provided when calling the 'problem' method so that the status may be accessible to the user. Aborting task.");
    }

    element.setAttribute("data-status-screen-state", "problem");
    this.update(text);
    requestAnimationFrame(this.open.bind(this));
  };

  return StatusScreen;
}();

StatusScreen.elementRepository = new WeakMap();


/**
 * Establishes global access to the default StatusScreen Api
 * @returns StatusScreen
 */
var initializeGlobalStatusScreen = function initializeGlobalStatusScreen() {
  var statusScreen = new StatusScreen();
  window.statusScreen = statusScreen;
  return statusScreen;
};

/***/ }),

/***/ "../../Shared-International/ts/components/tooltip.ts":
/*!***********************************************************!*\
  !*** ../../Shared-International/ts/components/tooltip.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToolTip; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shared/ts/observers/event */ "../../Shared-International/ts/observers/event.ts");
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");




var ToolTip = /*#__PURE__*/function () {
  // Represents the current target element
  // Represents the list of observable elements
  // Represents the visible state class name

  /**
   * Establishes functionality to add a visible state class to a target element that is either hovered over or focused and removes the visible state class from the target element when it's hovered out or unfocused.
   * @param name string
   * @param elements HTMLList
   */
  function ToolTip(elements, name) {
    if (elements === void 0) {
      elements = document.querySelectorAll(".tooltip");
    }

    if (name === void 0) {
      name = "tooltip--is-visible";
    }

    this.element = void 0;
    this.elements = void 0;
    this.name = void 0;
    this.name = name;
    this.elements = elements;
    this.element = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.enumerateElements)(this.elements)[0];
    ToolTip.setVisibleEvents(this);
    ToolTip.setInvisibleEvents(this);
  }
  /**
   * Adds the visible state class to the current element.
   */


  var _proto = ToolTip.prototype;

  _proto.makeVisible = function makeVisible() {
    var _this$element;

    (_this$element = this.element) == null ? void 0 : _this$element.classList.add(this.name);
  }
  /**
   * Removes the visible state class from the current element.
   */
  ;

  _proto.makeInvisible = function makeInvisible() {
    var _this$element2;

    (_this$element2 = this.element) == null ? void 0 : _this$element2.classList.remove(this.name);
  }
  /**
   * Updates the element property to either the Event.target as an HTMLElement or defaults to the previous HTMLElement.
   * @param self ToolTip
   * @param event Event
   */
  ;

  ToolTip.setElementToEventTargetOrDefault = function setElementToEventTargetOrDefault(self, event) {
    var _ref;

    self.element = (_ref = event.target) != null ? _ref : self.element;
  }
  /**
   * This event listener callback attempts to update the element property with the Event.target and then adds the visible state class to the element target.
   * @param self ToolTip
   * @param event Event
   */
  ;

  ToolTip.processVisibleEvents = function processVisibleEvents(self, event) {
    ToolTip.setElementToEventTargetOrDefault(self, event);
    self.makeVisible();
  }
  /**
   * This event listener callback attempts to update the element property with the Event.target and then removes the visible state class from the element target.
   * @param self ToolTip
   * @param event Event
   */
  ;

  ToolTip.processInvisibleEvents = function processInvisibleEvents(self, event) {
    ToolTip.setElementToEventTargetOrDefault(self, event);
    self.makeInvisible();
  }
  /**
   * Registers the "mouseenter" and "focus" event listeners to add the visible state class to the target element.
   * @param self ToolTip
   */
  ;

  ToolTip.setVisibleEvents = function setVisibleEvents(self) {
    (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_1__.listen)(self.elements, this.processVisibleEvents.bind(self, self), "mouseenter");
    (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_1__.listen)(self.elements, this.processVisibleEvents.bind(self, self), "focus");
  }
  /**
   * Registers the "mouseleave", "listen" and "keydown" event listeners to remove the visible state class from the target element. The default keyboard command to trigger is the "escape" key.
   * @param self ToolTip
   */
  ;

  ToolTip.setInvisibleEvents = function setInvisibleEvents(self) {
    (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_1__.listen)(self.elements, this.processInvisibleEvents.bind(self, self), "mouseleave");
    (0,Shared_ts_observers_event__WEBPACK_IMPORTED_MODULE_1__.listen)(self.elements, this.processInvisibleEvents.bind(self, self), "blur");
    addEventListener("keydown", self.makeInvisibleByKey.bind(self, "escape"));
    addEventListener("keydown", self.makeInvisibleByKey.bind(self, "esc"));
  }
  /**
   * Removes the visible state class from the target element when the captured key command satifies the required keyboard name.
   * @param key string
   * @param event KeyboardEvent
   */
  ;

  _proto.makeInvisibleByKey = function makeInvisibleByKey(key, event) {
    var _event$key;

    if (((_event$key = event.key) == null ? void 0 : _event$key.toLowerCase()) === key.toLowerCase()) {
      this.makeInvisible();
    }
  };

  return ToolTip;
}();



/***/ }),

/***/ "../../Shared-International/ts/observers/event.ts":
/*!********************************************************!*\
  !*** ../../Shared-International/ts/observers/event.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listen": function() { return /* binding */ listen; },
/* harmony export */   "createEvent": function() { return /* binding */ createEvent; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");



/**
 * Iterates through an array of HTML elements and adds an event listener to each element.
 * @param elements HTMLList
 * @param listener (this: Element, ev: Event) => any
 * @param type keyof GlobalEventHandlersEventMap
 */

var listen = function listen(elements, listener, type) {
  if (!type) return;
  (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_2__.enumerateElements)(elements).forEach(function (element) {
    element.addEventListener(type, listener);
  });
};
var createEvent = function createEvent(elem, eventName) {
  //Needed for IE Support: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent#Browser_Compatibility
  //https://stackoverflow.com/a/49071358/79677
  var event;

  if (typeof Event === "function") {
    event = new Event(eventName);
  } else {
    event = document.createEvent("Event");
    event.initEvent(eventName, true, true);
  }

  elem.dispatchEvent(event);
  return event;
};

/***/ }),

/***/ "../../Shared-International/ts/observers/intersection.ts":
/*!***************************************************************!*\
  !*** ../../Shared-International/ts/observers/intersection.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observer": function() { return /* binding */ observer; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");




/**
 * IntersectionObserverConfig allows an optional inRange callback function to execute when an element intersects inside the viewport, allows an optional outRange callback function to execute when an element intersects outside the viewport, an optional boolean to unobserve elements and an optional configuration object to customize the Intersection Observer API behavior.
 */

/**
 * Handles observation of load items through the bounding client rectangle interface. This process will be used if the current browser does not support the Intersection Observer Api.
 * @param loadItems Element[]
 * @param config IntersectionObserverConfig
 */
var observeByBoundingClientRect = function observeByBoundingClientRect(loadItems, config) {
  var active = false;

  var process = function process() {
    if (active === false) {
      active = true;
      setTimeout(function () {
        loadItems.forEach(function (loadItem) {
          if (inView(loadItem)) {
            var _config$unObserve;

            config == null ? void 0 : config.inRange == null ? void 0 : config.inRange(loadItem);

            if ((_config$unObserve = config == null ? void 0 : config.unObserve) != null ? _config$unObserve : true) {
              loadItems = loadItems.filter(function (image) {
                return image !== loadItem;
              });

              if (loadItems.length === 0) {
                document.removeEventListener("scroll", process);
                window.removeEventListener("resize", process);
                window.removeEventListener("orientationchange", process);
              }
            }
          } else {
            config == null ? void 0 : config.outRange == null ? void 0 : config.outRange(loadItem);
          }
        });
        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", process);
  window.addEventListener("resize", process);
  window.addEventListener("orientationchange", process);
  window.addEventListener("DOMContentLoaded", process);
};
/**
 * Determines if the element is in the viewport and is visible based on it's display state and it's bounding client rectangle coordinates.
 * @param loadItem HTMLElement
 * @returns boolean
 */


var inView = function inView(loadItem) {
  return loadItem.getBoundingClientRect().top <= window.innerHeight && loadItem.getBoundingClientRect().bottom >= 0 && loadItem.style.display !== "none";
};
/**
 * Handles observeration of load item elements through the Intersection Observer Api
 * @param loadItems Element[]
 * @param config IntersectionObserverConfig
 */


var observeByApi = function observeByApi(loadItems, config) {
  var loadItemObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0 && entry.isIntersecting) {
        var _config$unObserve2;

        config == null ? void 0 : config.inRange == null ? void 0 : config.inRange(entry.target, entry);

        if ((_config$unObserve2 = config == null ? void 0 : config.unObserve) != null ? _config$unObserve2 : true) {
          loadItemObserver.unobserve(entry.target);
        }
      } else {
        config == null ? void 0 : config.outRange == null ? void 0 : config.outRange(entry.target, entry);
      }
    });
  }, config == null ? void 0 : config.options);
  loadItems.forEach(function (loadItem) {
    loadItemObserver.observe(loadItem);
  });
};
/**
 * Observer applies a string that represents a Document Element and observes when the element intersects in and out of the browser viewport. Optional configuration is provided through the IntersectionObserverConfig interface.
 * @param selector string = "[data-observe]"
 * @param config IntersectionObserverConfig
 */


var observer = function observer(selector, config) {
  if (selector === void 0) {
    selector = "[data-observe]";
  }

  var loadItems = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_3__.enumerateElements)(document.querySelectorAll(selector));
  if (!config) return;

  if ("IntersectionObserver" in window) {
    observeByApi(loadItems, config);
  } else {
    observeByBoundingClientRect(loadItems, config);
  }
};

/***/ }),

/***/ "../../Shared-International/ts/patterns/pubsub.ts":
/*!********************************************************!*\
  !*** ../../Shared-International/ts/patterns/pubsub.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PubSub; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "../../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "../../node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);










var PubSub = /*#__PURE__*/function () {
  /**
   * Represents the relationship between the PubSub instance and the id that is used to generate unique tokens
   */

  /**
   * Represents the relationship between the PubSub instance and the IPubSubEvents object
   */

  /**
   * A publish/subscribe, pub-sub, interface that enables the ability to subscribe multiple different tasks to a common event name, the ability to publish different data to all subscribers of the common event name, and the ability to unsubscribe from a common event name.
   */
  function PubSub() {
    PubSub.id.set(this, -1);
    PubSub.events.set(this, {});
  }
  /**
   * Takes the event name along with any data and publishes the data to all of the subscribers. Returns true if the publish operation was successful; otherwise, returns false.
   * @param event string
   * @param record MutationRecord
   * @returns boolean
   */


  var _proto = PubSub.prototype;

  _proto.publish = function publish(event, data) {
    var events = PubSub.events.get(this);

    if (!events) {
      return false;
    }

    if (!events[event]) {
      return false;
    }

    var subscribers = events[event];
    subscribers.forEach(function (subscriber) {
      subscriber.task(data);
    });
    return true;
  }
  /**
   * Uses an event name and a callback function to make a subscription. In turn, calling the publish method on this event name will execute the callback function. A unique token is returned that can be used to unsubscribe from the system.
   * @param event string
   * @param task PubSubTask
   * @returns string
   */
  ;

  _proto.subscribe = function subscribe(event, task) {
    var token = "";
    var id = PubSub.id.get(this);
    var events = PubSub.events.get(this);

    if (events && id !== undefined) {
      if (!events[event]) {
        events[event] = [];
      }

      if (id !== undefined) {
        PubSub.id.set(this, id += 1);
        token = id.toString();
        events[event].push({
          token: token,
          task: task
        });
      }
    }

    return token;
  }
  /**
   * Uses a unique token to unsubscribe a callback function from an event name. The token is returned if the unsubscription operation is successful; otherwise, null is returned.
   * @param token string
   * @returns string
   */
  ;

  _proto.unsubscribe = function unsubscribe(token) {
    var found = false;
    var events = PubSub.events.get(this);

    if (events) {
      found = Object.keys(events).some(function (event) {
        return events[event].some(function (subscriber, index) {
          var areEqual = subscriber.token === token.toString();

          if (areEqual) {
            events[event].splice(index, 1);
          }

          return areEqual;
        });
      });
    }

    return found ? token : undefined;
  };

  return PubSub;
}();

PubSub.id = new WeakMap();
PubSub.events = new WeakMap();


/***/ }),

/***/ "../../Shared-International/ts/utils/capture-element.ts":
/*!**************************************************************!*\
  !*** ../../Shared-International/ts/utils/capture-element.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CaptureElement; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Shared_ts_patterns_pubsub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/ts/patterns/pubsub */ "../../Shared-International/ts/patterns/pubsub.ts");








var CaptureElement = /*#__PURE__*/function () {
  /**
   * Represents the element that will be registered to a new MutationObserver instance
   */

  /**
   * Represents the relationship between the CaptureElement instance and the MutationObserver instance
   */

  /**
   * Represents the relationship between the CaptureElement instance and the PubSub instance
   */

  /**
   * CaptureElement is a publish/subscribe, pub-sub, interface that can be controlled by an element that is registered to a new MutationObserver instance. Subscription names are mapped to the Mutation Observer's observable types that are defined in the MutationObserverInit dictionary. When an observable type is captured on the element, a callback function will be executed back to the author where the MutationRecord information can be accessed.
   * @param element Element
   */
  function CaptureElement(element) {
    this.element = void 0;
    this.element = element;
    var pubsub = new Shared_ts_patterns_pubsub__WEBPACK_IMPORTED_MODULE_6__["default"]();
    var observer = CaptureElement.createObserver(element, function (records) {
      records.forEach(function (record) {
        switch (record.type) {
          case "characterData":
            pubsub.publish("characterData", record);
            break;

          case "attributes":
            pubsub.publish("attributes", record);
            break;

          case "childList":
            pubsub.publish("childList", record);
            break;
        }
      });
    });
    CaptureElement.pubsub.set(this, pubsub);
    CaptureElement.observers.set(this, observer);
  }
  /**
   * Takes the element along with the callback function and returns the new MutationObserver object
   * @param element Element
   * @param callback MutationCallback
   * @returns MutationObserver
   */


  CaptureElement.createObserver = function createObserver(element, callback) {
    var observer = new MutationObserver(callback);
    observer.observe(element, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    });
    return observer;
  }
  /**
   * Uses an event name and a callback function to make a subscription. In turn, calling the publish method on this event name will execute the callback function. A unique token is returned that can be used to unsubscribe from the system.
   * @param event CaputerElementEventName
   * @param task CaptureElementTask
   * @returns string
   */
  ;

  var _proto = CaptureElement.prototype;

  _proto.subscribe = function subscribe(event, task) {
    var pubsub = CaptureElement.pubsub.get(this);
    return pubsub == null ? void 0 : pubsub.subscribe(event, task);
  }
  /**
   * Uses a unique token to unsubscribe a callback function from an event name. The token is returned if the unsubscription operation is successful; otherwise, null is returned.
   * @param token string
   * @returns string
   */
  ;

  _proto.unsubscribe = function unsubscribe(token) {
    var pubsub = CaptureElement.pubsub.get(this);
    return pubsub == null ? void 0 : pubsub.unsubscribe(token);
  }
  /**
   * Closes the connection to the element's MutationObserver
   */
  ;

  _proto.disconnect = function disconnect() {
    var observer = CaptureElement.observers.get(this);
    observer == null ? void 0 : observer.disconnect();
  }
  /**
   * Opens the connection to the element's MutationObserver
   */
  ;

  _proto.connect = function connect() {
    var observer = CaptureElement.observers.get(this);
    observer == null ? void 0 : observer.observe(this.element, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    });
  };

  return CaptureElement;
}();

CaptureElement.observers = new WeakMap();
CaptureElement.pubsub = new WeakMap();


/***/ }),

/***/ "../../Shared-International/ts/utils/data.ts":
/*!***************************************************!*\
  !*** ../../Shared-International/ts/utils/data.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": function() { return /* binding */ isFunction; },
/* harmony export */   "isString": function() { return /* binding */ isString; },
/* harmony export */   "isObject": function() { return /* binding */ isObject; }
/* harmony export */ });
/* unused harmony exports isNumber, isArray, isNullOrUndefined */
var isFunction = function isFunction(type) {
  return typeof type === "function";
};
var isString = function isString(type) {
  return typeof type === "string";
};
var isNumber = function isNumber(type) {
  return typeof type === "number";
};
var isArray = function isArray(type) {
  return Array.isArray(type);
};
var isObject = function isObject(type) {
  return type === Object(type) && !isArray(type);
};
var isNullOrUndefined = function isNullOrUndefined(type) {
  return type !== null && typeof type !== "undefined";
};

/***/ }),

/***/ "../../Shared-International/ts/utils/disclosure.ts":
/*!*********************************************************!*\
  !*** ../../Shared-International/ts/utils/disclosure.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Disclosure; }
/* harmony export */ });
/* harmony import */ var Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/utils/element-controller */ "../../Shared-International/ts/utils/element-controller.ts");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Disclosure = /*#__PURE__*/function (_ElementController) {
  _inheritsLoose(Disclosure, _ElementController);

  /**
   * An extension of the `ElementController` interface, `Disclosure` aims to provide an accessible user-interface where a `controller` can expand or collapse an array of `elements` based on an id list reference by the `aria-controls` attribute. This interface aims to meet the essential requirements provided by the W3C Aria best practices.
   *
   * https://w3c.github.io/aria-practices/#disclosure
   * @param root Element | null | undefined
   */
  function Disclosure(root) {
    return _ElementController.call(this, root) || this;
  }
  /**
   * Initializes a controller
   * @param context Disclosure
   * @param controller Element
   */


  var _proto = Disclosure.prototype;

  _proto.initializeController = function initializeController(context, controller) {
    var relatedElements = this.getRelatedElementsByController(controller);
    var isExpanded = context.isControllerExpanded(controller);
    isExpanded ? Disclosure.addElementStateByElements(relatedElements, controller) : Disclosure.removeElementStateByElements(relatedElements);
  }
  /**
   * Takes a controller element and toggles the visibilty state towards all elements that are referenced in the controller
   * @param controller Element
   */
  ;

  _proto.toggleElementsByController = function toggleElementsByController(controller) {
    this.isControllerExpanded(controller) ? this.removeControllerState(controller) : this.addControllerState(controller);
  };

  return Disclosure;
}(Shared_ts_utils_element_controller__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "../../Shared-International/ts/utils/element-controller.ts":
/*!*****************************************************************!*\
  !*** ../../Shared-International/ts/utils/element-controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ElementController; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Shared-International/ts/utils/capture-element.ts");












var ElementController = /*#__PURE__*/function () {
  /**
   * Represents the root that will contain all elements and controllers as descedent elements
   */

  /**
   * Represents an array of controller elements where each controller is responsible for managing the state of the elements through the `aria-controls` attribute
   */

  /**
   * Represents an array of elements where each element can be controlled by a controller element through the `id` attribute
   */

  /**
   * Enables the ability for controller elements that are equipped with the `aria-controls` attribute to control the state of other elements by a reference to it's `id` attribute.
   * @param root Element | null | undefined
   */
  function ElementController(root) {
    var _this$root,
        _this = this;

    this.root = void 0;
    this.controllers = [];
    this.elements = void 0;
    this.root = root != null ? root : document.querySelector(".element-controller");

    if (!((_this$root = this.root) != null && _this$root.classList.contains("element-controller"))) {
      var _this$root2;

      (_this$root2 = this.root) == null ? void 0 : _this$root2.classList.add("element-controller");
    }

    if (this.root) {
      this.controllers = Array.from(this.root.querySelectorAll(".element-controller__controller[aria-controls]")).filter(function (controller) {
        return controller.closest(".element-controller") === _this.root;
      });
    }

    this.elements = [];
    ElementController.initialize(this);
  }
  /**
   * Initializes the process
   * @param context ElementController
   */


  ElementController.initialize = function initialize(context) {
    var _this2 = this;

    this.setElementsByContext(context);

    if (context.root) {
      var captureElement = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_10__["default"](context.root);
      captureElement.subscribe("attributes", function (record) {
        if (record.attributeName === "aria-controls") {
          _this2.setElementsByContext(context);
        }

        var controller = context.controllers.find(function (controller) {
          return controller === record.target;
        });
        if (!controller) return;

        if (record.attributeName === ElementController.getControllerExpandedAttribute(controller)) {
          context.initializeController(context, controller);
        }
      });
    }

    this.initializeControllers(context);
  }
  /**
   * Initializes all controllers
   * @param context ElementController
   */
  ;

  ElementController.initializeControllers = function initializeControllers(context) {
    context.controllers.forEach(function (controller) {
      context.initializeController(context, controller);
      context.isControllerExpanded(controller) ? context.addControllerState(controller) : context.removeControllerState(controller);
    });
  }
  /**
   * Initializes a controller
   * @param context ElementController
   * @param controller Element
   */
  ;

  var _proto = ElementController.prototype;

  _proto.initializeController = function initializeController(context, controller) {
    var relatedElements = context.getRelatedElementsByController(controller);
    var unrelatedElements = context.getUnrelatedElementsByController(controller);
    var isExpanded = context.isControllerExpanded(controller);

    if (isExpanded) {
      ElementController.updateControllerStatesByContext(context, controller);
      ElementController.addElementStateByElements(relatedElements, controller);
      ElementController.removeElementStateByElements(unrelatedElements);
    }
  }
  /**
   * Iterates through an array of elements and assigns the controller `id` as a value to the `data-element-controller-name` attribute, then sets the `aria-hidden` attribute to `false`
   * @param elements (Element | undefined | null)[]
   * @param controller Element
   */
  ;

  ElementController.addElementStateByElements = function addElementStateByElements(elements, controller) {
    elements.forEach(function (element) {
      element == null ? void 0 : element.setAttribute("data-element-controller-name", controller.id);
      element == null ? void 0 : element.setAttribute("aria-hidden", "false");
    });
  }
  /**
   * Takes the controller and sets the `aria-expanded` attribute to `true`
   * @param controller Element
   */
  ;

  _proto.addControllerState = function addControllerState(controller) {
    controller.setAttribute(ElementController.getControllerExpandedAttribute(controller), "true");
  }
  /**
   * Takes the controller and sets the `aria-expanded` attribute to `false`
   * @param controller Element
   */
  ;

  _proto.removeControllerState = function removeControllerState(controller) {
    controller.setAttribute(ElementController.getControllerExpandedAttribute(controller), "false");
  };

  ElementController.getControllerExpandedAttribute = function getControllerExpandedAttribute(controller) {
    return ElementController.isControllerRoleCheckboxOrRadio(controller) ? "aria-checked" : "aria-expanded";
  };

  ElementController.isControllerRoleCheckboxOrRadio = function isControllerRoleCheckboxOrRadio(controller) {
    var _controller$getAttrib;

    var isInput = controller.nodeName.toLowerCase() === "input";
    var type = ((_controller$getAttrib = controller.getAttribute("type")) != null ? _controller$getAttrib : "").toLowerCase();
    return isInput && (type === "checkbox" || type === "radio");
  }
  /**
   * Iterates through an array of elements and removes the `data-element-controller-name` attribute and sets the `aria-hidden` attribute to `true`
   * @param elements (Element | undefined | null)[]
   */
  ;

  ElementController.removeElementStateByElements = function removeElementStateByElements(elements) {
    elements.forEach(function (element) {
      element == null ? void 0 : element.removeAttribute("data-element-controller-name");
      element == null ? void 0 : element.setAttribute("aria-hidden", "true");
    });
  }
  /**
   * Iterates through all controllers and attempts to capture and store all matching elements that can be controlled
   * @param context ElementController
   */
  ;

  ElementController.setElementsByContext = function setElementsByContext(context) {
    var _this3 = this;

    context.controllers.forEach(function (controller) {
      var elements = _this3.getContainersByControllerIds(context.getIdsByController(controller), controller, context);

      elements.forEach(function (element) {
        if (!context.elements.includes(element)) {
          context.elements.push(element);
        }
      });
    });
  }
  /**
   * Iterates through an array of id values and attempts to capture the DOM element by that id and returns each element into a new element array. If an element cannot be found in the document, an error message will be reported to the browser console informing the developer of a mismatch.
   * @param ids string[]
   * @param controller Element
   * @param context ElementController
   * @returns Element[]
   */
  ;

  ElementController.getContainersByControllerIds = function getContainersByControllerIds(ids, controller, context) {
    var filterIds = ids.filter(function (id) {
      return id !== "";
    });
    return Array.from(filterIds, function (id) {
      var _context$getElementBy, _context$root;

      var element = (_context$getElementBy = context.getElementById(id)) != null ? _context$getElementBy : (_context$root = context.root) == null ? void 0 : _context$root.querySelector("#" + id);

      if (!element) {
        console.error({
          message: "The element id, " + id + ", referenced within the current controller could not be found in the document.",
          controller: controller
        });
      }

      return element;
    });
  }
  /**
   * Filters out all controllers from the controller context and sets the `aria-expanded` state to `false`.
   * @param context ElementController
   * @param controllerContext Element
   */
  ;

  ElementController.updateControllerStatesByContext = function updateControllerStatesByContext(context, controllerContext) {
    var _this4 = this;

    context.controllers.filter(function (controller) {
      return controller !== controllerContext;
    }).forEach(function (controller) {
      return controller.setAttribute(_this4.getControllerExpandedAttribute(controller), "false");
    });
  }
  /**
   * Determines if the controller is expanded through the `aria-expanded` attribute
   * @param controller Element
   * @returns boolean
   */
  ;

  _proto.isControllerExpanded = function isControllerExpanded(controller) {
    return controller.getAttribute(ElementController.getControllerExpandedAttribute(controller)) === "true";
  }
  /**
   * Returns a new array of elements that are related to the id list referenced by the controller
   * @param controller Element
   * @returns (Element | undefined | null)[]
   */
  ;

  _proto.getRelatedElementsByController = function getRelatedElementsByController(controller) {
    var ids = this.getIdsByController(controller);
    return this.elements.filter(function (element) {
      var _element$id;

      return ids.includes((_element$id = element == null ? void 0 : element.id) != null ? _element$id : "");
    });
  }
  /**
   * Returns a new array of elements that aren't related to the id list referenced by the controller
   * @param controller Element
   * @returns (Element | undefined | null)[]
   */
  ;

  _proto.getUnrelatedElementsByController = function getUnrelatedElementsByController(controller) {
    var ids = this.getIdsByController(controller);
    return this.elements.filter(function (element) {
      var _element$id2;

      return !ids.includes((_element$id2 = element == null ? void 0 : element.id) != null ? _element$id2 : "");
    });
  }
  /**
   * Takes a controller element and returns a string array of all id references
   * @param controller Element
   * @returns string[]
   */
  ;

  _proto.getIdsByController = function getIdsByController(controller) {
    var _controller$getAttrib2;

    return ((_controller$getAttrib2 = controller.getAttribute("aria-controls")) != null ? _controller$getAttrib2 : "").split(" ");
  }
  /**
   * Returns a matching element from the elements array by a given id
   * @param id string
   * @returns Element
   */
  ;

  _proto.getElementById = function getElementById(id) {
    return this.elements.find(function (element) {
      return (element == null ? void 0 : element.id) === id;
    });
  }
  /**
   * Takes a controller element, adds the controller state and updates the elements on the view
   * @param controller Element
   */
  ;

  _proto.toggleElementsByController = function toggleElementsByController(controller) {
    this.addControllerState(controller);
  };

  return ElementController;
}();



/***/ }),

/***/ "../../Shared-International/ts/utils/flyout.ts":
/*!*****************************************************!*\
  !*** ../../Shared-International/ts/utils/flyout.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Flyout; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.map.js */ "../../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Shared-International/ts/utils/capture-element.ts");
/* harmony import */ var Shared_ts_utils_disclosure__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Shared/ts/utils/disclosure */ "../../Shared-International/ts/utils/disclosure.ts");
/* harmony import */ var Shared_ts_utils_focus_navigator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Shared/ts/utils/focus-navigator */ "../../Shared-International/ts/utils/focus-navigator.ts");












var Flyout = /*#__PURE__*/function () {
  /**
   * Represents the root container of the flyout user-interface
   */

  /**
   * Represents the content container that can accept a CSS transition to control the visibility phase
   */

  /**
   * Represents a repository assigning a new instance of the `FocusNavigator` class to the root container of the flyout user-interface
   */

  /**
   * Represents a repository managing event-based methods that are associated with the `Flyout` instance
   */

  /**
   * Represents the CSS class namespace used for styling-hooks
   */

  /**
   * Applies the link + disclosure pattern to a user-interface where a controller can toggle an element containing a list of focusable content that can be navigated using keys such as the arrow keys, can be dismissed with the `escape` key, etc.
   * @param root HTMLElement
   * @param namespace string
   */
  function Flyout(root, namespace) {
    this.root = void 0;
    this.content = void 0;
    this.namespace = void 0;
    this.namespace = namespace != null ? namespace : "flyout";
    this.root = root != null ? root : document.querySelector("." + this.namespace);
    this.content = this.root.querySelector("." + this.namespace + "__content");
    Flyout.initializeDisclosure(this);
    Flyout.manageContextEvents(this);
    Flyout.captureContextRoot(this);
  }

  var _proto = Flyout.prototype;

  _proto.on = function on() {
    var disclosure = Flyout.disclosureMap.get(this);
    if (!disclosure) return;
    var focusNavigator = Flyout.focusNavigatorRepository.get(this.root);
    if (!focusNavigator) return;
    var controller = focusNavigator.firstElement();
    if (!controller) return;
    disclosure.addControllerState(controller);
  };

  _proto.off = function off() {
    var disclosure = Flyout.disclosureMap.get(this);
    if (!disclosure) return;
    var focusNavigator = Flyout.focusNavigatorRepository.get(this.root);
    if (!focusNavigator) return;
    var controller = focusNavigator.firstElement();
    if (!controller) return;
    disclosure.removeControllerState(controller);
  }
  /**
   * Handles dismissing the user-interface on the `escape` key and intercepting the CSS transition on the content container to assign the `disabled` state on the user-interface
   * @param context Flyout
   * @param disclosure Disclosure
   */
  ;

  Flyout.initializeVisibilityState = function initializeVisibilityState(context, disclosure) {
    var _this = this;

    var focusNavigator = this.focusNavigatorRepository.get(context.root);
    if (!focusNavigator) return;
    Flyout.eventManager.set(context, {
      addControllerState: function addControllerState(event) {
        var controller = focusNavigator.firstElement();
        if (!controller) return;

        _this.manageDisclosureMap(disclosure);

        disclosure.addControllerState(controller);
        controller.focus();
      },
      removeControllerState: function removeControllerState(event) {
        var controller = focusNavigator.firstElement();
        if (!controller) return;

        _this.manageDisclosureMap(disclosure);

        disclosure.removeControllerState(controller);
      }
    });
    addEventListener("keydown", function (event) {
      var _event$key;

      var controller = focusNavigator.firstElement();
      if (!controller) return;
      var key = (_event$key = event.key) == null ? void 0 : _event$key.toLowerCase();

      if ((key === "escape" || key === "esc") && context.root.contains(event.target)) {
        disclosure.removeControllerState(controller);
        controller.focus();
      }
    });
    if (!context.content) return;
    context.content.addEventListener("transitionend", function (event) {
      disclosure.controllers.forEach(function (controller) {
        if (!disclosure.isControllerExpanded(controller)) {
          context.root.classList.add(context.namespace + "--is-disabled");
        }
      });
    });
  }
  /**
   * Captures the root HTML element of the flyout and observes changes to the `data-flyout-allow-hover` attribute to either add or remove the event handlers responsible for toggling the flyout controllers
   * @param context Flyout
   * @returns void
   */
  ;

  Flyout.captureContextRoot = function captureContextRoot(context) {
    var _this2 = this;

    var captureElement = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_8__["default"](context.root);
    captureElement.subscribe("attributes", function (record) {
      if (record.attributeName !== "data-flyout-allow-hover") return;

      _this2.manageContextEvents(context);
    });
  }
  /**
   * Adds or removes the event handlers responsible for toggling the flyout controllers based on the `data-flyout-allow-hover` attribute
   * @param context Flyout
   * @returns void
   */
  ;

  Flyout.manageContextEvents = function manageContextEvents(context) {
    var event = this.eventManager.get(context);
    if (!event) return;

    switch (context.root.hasAttribute("data-flyout-allow-hover")) {
      case true:
        context.root.addEventListener("mouseover", event.addControllerState);
        context.root.addEventListener("mouseleave", event.removeControllerState);
        break;

      case false:
        context.root.removeEventListener("mouseover", event.addControllerState);
        context.root.removeEventListener("mouseleave", event.removeControllerState);
        break;
    }
  }
  /**
   * Creates a new `Disclosure` instance and initializes several events through each available controller
   * @param context Flyout
   */
  ;

  Flyout.initializeDisclosure = function initializeDisclosure(context) {
    var _this3 = this;

    var disclosure = new Shared_ts_utils_disclosure__WEBPACK_IMPORTED_MODULE_9__["default"](context.root);
    disclosure.controllers = Array.from(context.root.querySelectorAll("." + context.namespace + "__button"));
    this.disclosureMap.set(context, disclosure);
    disclosure.controllers.forEach(function (controller) {
      _this3.setElementEventsByController(context, controller, disclosure);

      _this3.initializeEventListeners(controller, disclosure);

      _this3.initializeControllerCapture(context, controller, disclosure);

      _this3.initializeFocusNavigation(context);
    });
    this.initializeVisibilityState(context, disclosure);
  }
  /**
   * Assigns a new `FocusNavigator` instance to the root container
   * @param context Flyout
   */
  ;

  Flyout.initializeFocusNavigation = function initializeFocusNavigation(context) {
    this.focusNavigatorRepository.set(context.root, new Shared_ts_utils_focus_navigator__WEBPACK_IMPORTED_MODULE_10__["default"](context.root));
  }
  /**
   * Allows the controller to toggle the container's visibility state with the `click` event
   * @param controller HTMLElement
   * @param disclosure Disclosure
   */
  ;

  Flyout.initializeEventListeners = function initializeEventListeners(controller, disclosure) {
    var _this4 = this;

    controller.addEventListener("click", function (event) {
      _this4.manageDisclosureMap(disclosure);

      disclosure.toggleElementsByController(controller);
    });
  }
  /**
   * Manages the state of all available `Disclosure` references in order to remove the controller states from all except the current `Disclosure` instance.
   * @param disclosure Disclosure
   */
  ;

  Flyout.manageDisclosureMap = function manageDisclosureMap(disclosure) {
    this.disclosureMap.forEach(function (reference) {
      if (reference === disclosure) return;
      reference.controllers.forEach(function (controller) {
        reference.removeControllerState(controller);
      });
    });
  }
  /**
   * Captures the controller element for the `aria-expanded` attribute change and processes the element events based on the controller's expanded state
   * @param context Flyout
   * @param controller HTMLElement
   * @param disclosure Disclosure
   */
  ;

  Flyout.initializeControllerCapture = function initializeControllerCapture(context, controller, disclosure) {
    var _this5 = this;

    var captureController = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_8__["default"](controller);
    captureController.subscribe("attributes", function (record) {
      if (record.attributeName !== "aria-expanded") return;

      _this5.setElementEventsByController(context, controller, disclosure);
    });
  }
  /**
   * Controls the focus navigation and visibility of the container based on the controller's expanded state
   * @param context Flyout
   * @param controller Element
   * @param disclosure Disclosure
   */
  ;

  Flyout.setElementEventsByController = function setElementEventsByController(context, controller, disclosure) {
    var isExpanded = disclosure.isControllerExpanded(controller);
    var focusNavigator = this.focusNavigatorRepository.get(context.root);

    if (focusNavigator) {
      focusNavigator.updateElements();
      isExpanded ? focusNavigator.on() : focusNavigator.off();
    }

    if (isExpanded) {
      context.root.classList.remove(context.namespace + "--is-disabled");
    }

    if (!context.content && !isExpanded) {
      context.root.classList.add(context.namespace + "--is-disabled");
    }

    isExpanded ? context.root.classList.remove(context.namespace + "--is-hidden") : context.root.classList.add(context.namespace + "--is-hidden");
  };

  return Flyout;
}();

Flyout.focusNavigatorRepository = new WeakMap();
Flyout.disclosureMap = new Map();
Flyout.eventManager = new WeakMap();


/***/ }),

/***/ "../../Shared-International/ts/utils/focus-manager.ts":
/*!************************************************************!*\
  !*** ../../Shared-International/ts/utils/focus-manager.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FocusManager; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");








var FocusManager = /*#__PURE__*/function () {
  /**
   * Represents the internal root WeakMap interface that communicates with the public root accessor.
   */

  /**
   * Uses the FocusManager instance as a key to return the root HTMLElement.
   * @param key FocusManager
   * @returns HTMLElement
   */
  FocusManager.getRoot = function getRoot(key) {
    return this.root.get(key);
  }
  /**
   * Represents all focusable elements within the root context.
   */
  ;

  /**
   * Uses a root element to determine all of the focusable elements that exist within the root context. All focusable elements are returned as a new array and can be accessed. Support includes operations to enable and disable focus trap navigation.
   * @param root HTMLElement
   */
  function FocusManager(root) {
    if (root === void 0) {
      root = document.querySelector("body");
    }

    this.focusElements = [];

    if (!(0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_6__.elementExists)(root)) {
      throw new Error("FocusManager failed to determine if the passed element exists.");
    }

    FocusManager.root.set(this, root);
    this.updateElements();
  }
  /**
   * Queries the document to fetch all focusable elements within the root context. The returned NodeList will be converted into an array and be accessible through the "HTMLElements" property.
   */


  var _proto = FocusManager.prototype;

  _proto.updateElements = function updateElements() {
    var root = FocusManager.root.get(this);

    if (root) {
      this.focusElements = this.getElements();
    }
  };

  _proto.getElements = function getElements() {
    var root = FocusManager.root.get(this);
    return root ? Array.from(root.querySelectorAll("button, [href]:not(link):not(base):not(use), input, select, textarea, [tabindex]:not([data-root-boundary])")) : [];
  }
  /**
   * Returns the first focusable element within the root context.
   * @returns Element
   */
  ;

  _proto.firstElement = function firstElement() {
    return this.focusElements[0];
  }
  /**
   * Returns the last focusable element within the root context.
   * @returns Element
   */
  ;

  _proto.lastElement = function lastElement() {
    return this.focusElements[this.focusElements.length - 1];
  }
  /**
   * Returns the next element or the first element from the focus element array
   * @param element HTMLElement
   * @returns HTMLElement
   */
  ;

  _proto.nextElement = function nextElement(element) {
    var index = this.focusElements.indexOf(element) + 1;
    return index <= this.focusElements.length - 1 ? this.focusElements[index] : this.firstElement();
  }
  /**
   * Returns the previous element or the last element from the focus element array
   * @param element HTMLElement
   * @returns HTMLElement
   */
  ;

  _proto.previousElement = function previousElement(element) {
    var index = this.focusElements.indexOf(element) - 1;
    return index >= 0 ? this.focusElements[index] : this.lastElement();
  };

  return FocusManager;
}();

FocusManager.root = new WeakMap();


/***/ }),

/***/ "../../Shared-International/ts/utils/focus-navigator.ts":
/*!**************************************************************!*\
  !*** ../../Shared-International/ts/utils/focus-navigator.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FocusNavigator; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var Shared_ts_utils_focus_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/ts/utils/focus-manager */ "../../Shared-International/ts/utils/focus-manager.ts");
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Shared-International/ts/utils/capture-element.ts");






function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FocusNavigator = /*#__PURE__*/function (_FocusManager) {
  _inheritsLoose(FocusNavigator, _FocusManager);

  /**
   * Bounding function to the `navigateElementEvent` method.
   */

  /**
   * An extension of the `FocusManager` class where the `focusElements` available can be accessed using the `UP`, `DOWN`, `LEFT`, `RIGHT`, `HOME` and `END` keys
   * @param root HTMLElement | null
   */
  function FocusNavigator(root) {
    var _this;

    _this = _FocusManager.call(this, root) || this;
    _this.handleNavigateElementEvent = void 0;

    _this.considerElements = function () {
      return [];
    };

    if (root) {
      var _root$id;

      root.setAttribute("data-focus-navigator", (_root$id = root.id) != null ? _root$id : "default");
    }

    _this.handleNavigateElementEvent = _this.navigateElementEvent.bind(_assertThisInitialized(_this));
    FocusNavigator.updateElementsByAttributeModification(_assertThisInitialized(_this));
    return _this;
  }
  /**
   *
   * @param context FocusNavigator
   * @returns void
   */


  FocusNavigator.updateElementsByAttributeModification = function updateElementsByAttributeModification(context) {
    var root = this.root.get(context);
    if (!root) return;
    var captureElement = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_6__["default"](root);
    captureElement.subscribe("attributes", function (record) {
      requestAnimationFrame(function () {
        context.off();
        context.updateElements();
        context.on();
      });
    });
  }
  /**
   * Queries the document to fetch all focusable elements within the root context. The returned NodeList will be converted into an array and be accessible through the "HTMLElements" property.
   */
  ;

  var _proto = FocusNavigator.prototype;

  _proto.updateElements = function updateElements() {
    var _this2 = this;

    var root = FocusNavigator.root.get(this);

    if (root) {
      this.focusElements = this.getElements().filter(function (element) {
        var candidate = element;

        while (candidate && candidate.nodeType === 1) {
          if (_this2.isElementInvisible(candidate)) {
            return false;
          }

          candidate = candidate.parentNode;
        }

        var closestRoot = element.closest("[data-focus-navigator]");
        return closestRoot === root;
      });
    }
  }
  /**
   * Determines if an element is considered an invisible element
   * @param element HTMLElement
   * @returns boolean
   */
  ;

  _proto.isElementInvisible = function isElementInvisible(element) {
    var style = window.getComputedStyle(element);
    return element.hasAttribute("hidden") || element.getAttribute("aria-hidden") === "true" || style.display === "none" || style.visibility === "hidden";
  }
  /**
   * Adds the `keydown` event listener to all focusable elements
   */
  ;

  _proto.on = function on() {
    var _this3 = this;

    this.focusElements.forEach(function (element) {
      element.addEventListener("keydown", _this3.handleNavigateElementEvent);
    });
  }
  /**
   * Removes the `keydown` event listener from all focusable elements
   */
  ;

  _proto.off = function off() {
    var _this4 = this;

    this.focusElements.forEach(function (element) {
      element.removeEventListener("keydown", _this4.handleNavigateElementEvent);
    });
  }
  /**
   * Controls the navigation order based on the key. For example, the `UP` or `LEFT` keys will advance to the previous element while the `DOWN` or `RIGHT` keys will advance to the next element. The `HOME` key will advance to the first element and the `END` key will advance to the last element.
   * @param event KeyboardEvent
   */
  ;

  _proto.navigateElementEvent = function navigateElementEvent(event) {
    var element = event.target;

    if (FocusNavigator.isKeyup(event) || FocusNavigator.isKeyleft(event)) {
      event.preventDefault();
      this.previousElement(element).focus();
    }

    if (FocusNavigator.isKeydown(event) || FocusNavigator.isKeyright(event)) {
      event.preventDefault();
      this.nextElement(element).focus();
    }

    if (event.key.match(/home/i)) {
      event.preventDefault();
      this.firstElement().focus();
    }

    if (event.key.match(/end/i)) {
      event.preventDefault();
      this.lastElement().focus();
    }
  }
  /**
   * Determines if the key pressed was either the Up key or Control Key + Page Up
   * @param event KeyboardEvent
   * @returns boolean
   */
  ;

  FocusNavigator.isKeyup = function isKeyup(event) {
    var key = event.key.toLowerCase();
    return event.ctrlKey && key === "pageup" || key === "arrowup" || key === "up";
  }
  /**
   * Determines if the key pressed was either the Down key or Control Key + Page Down
   * @param event KeyboardEvent
   * @returns boolean
   */
  ;

  FocusNavigator.isKeydown = function isKeydown(event) {
    var key = event.key.toLowerCase();
    return event.ctrlKey && key === "pagedown" || key === "arrowdown" || key === "down";
  }
  /**
   * Determines if the key pressed was the left key
   * @param event KeyboardEvent
   * @returns boolean
   */
  ;

  FocusNavigator.isKeyleft = function isKeyleft(event) {
    var key = event.key.toLowerCase();
    return key === "arrowleft" || key === "left";
  }
  /**
   * Determines if the key pressed was the left key
   * @param event KeyboardEvent
   * @returns boolean
   */
  ;

  FocusNavigator.isKeyright = function isKeyright(event) {
    var key = event.key.toLowerCase();
    return key === "arrowright" || key === "right";
  };

  return FocusNavigator;
}(Shared_ts_utils_focus_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "../../Shared-International/ts/utils/focus-trap.ts":
/*!*********************************************************!*\
  !*** ../../Shared-International/ts/utils/focus-trap.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FocusTrap; }
/* harmony export */ });
/* harmony import */ var Shared_ts_utils_focus_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Shared/ts/utils/focus-manager */ "../../Shared-International/ts/utils/focus-manager.ts");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var FocusTrap = /*#__PURE__*/function (_FocusManager) {
  _inheritsLoose(FocusTrap, _FocusManager);

  /**
   * Represents the current FocusTrap interface. It should be noted that one FocusTrap should be accessible where it's properties can be mapped to the active user-interface.
   */

  /**
   * Extends the base functionality of the FocusManager interface by providing support to enable/disable focus trap navigation.
   * @param root HTMLElement
   */
  function FocusTrap(root) {
    var _this;

    if (root === void 0) {
      root = document.querySelector("body");
    }

    _this = _FocusManager.call(this, root) || this;
    FocusTrap.setRootBoundaries(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Fetches the root boundary element by an id.
   * @param id string
   * @returns HTMLElement
   */


  FocusTrap.getRootBoundaryElement = function getRootBoundaryElement(id, context) {
    var root = this.getRoot(context);
    return root ? root.querySelector("[data-root-boundary=\"" + id + "\"]") : null;
  }
  /**
   * Manages the focus event listeners based on a switch. The switch defaults to true meaning, the first and last focusable elements will add an event listener. Switching to false will remove the event listeners from the first and last focusable elements.
   * @param self FocusTrap
   * @param eventOn boolean
   */
  ;

  FocusTrap.manageFocusEvents = function manageFocusEvents(context, eventOn) {
    if (eventOn === void 0) {
      eventOn = true;
    }

    this.context = context;
    var first = this.getRootBoundaryElement("first", context);
    var last = this.getRootBoundaryElement("last", context);

    if (first && eventOn) {
      first.addEventListener("focus", this.handleFirstFocusEvent);
    }

    if (last && eventOn) {
      last.addEventListener("focus", this.handleLastFocusEvent);
    }

    if (first && !eventOn) {
      first.removeEventListener("focus", this.handleFirstFocusEvent);
    }

    if (last && !eventOn) {
      last.removeEventListener("focus", this.handleLastFocusEvent);
    }
  }
  /**
   * Signature event listener callback function that handles the first focusable element. This will set focus back to the last focusable element.
   * @param event FocusEvent
   */
  ;

  FocusTrap.handleFirstFocusEvent = function handleFirstFocusEvent(event) {
    var focusElement = FocusTrap.context.lastElement();
    focusElement.focus();
  }
  /**
   * Signature event listener callback function that handles the last focusable element. This will set focus back to the first focusable element.
   * @param event FocusEvent
   */
  ;

  FocusTrap.handleLastFocusEvent = function handleLastFocusEvent(event) {
    var focusElement = FocusTrap.context.firstElement();
    focusElement.focus();
  }
  /**
   * Creates a tabindex boundary within the modal to manage focus trap.
   * @param root HTMLElement
   */
  ;

  FocusTrap.setRootBoundaries = function setRootBoundaries(context) {
    var root = FocusTrap.root.get(context);
    if (!root) return;
    var first = this.getRootBoundaryElement("first", context);

    if (!first) {
      root.insertAdjacentElement("afterbegin", this.createBoundaryElement("first"));
    }

    var last = this.getRootBoundaryElement("last", context);

    if (!last) {
      root.insertAdjacentElement("beforeend", this.createBoundaryElement("last"));
    }
  }
  /**
   * Creates a new focusable element that can be provided to Modal.setRootBoundaries.
   * @returns HTMLElement
   */
  ;

  FocusTrap.createBoundaryElement = function createBoundaryElement(id) {
    if (id === void 0) {
      id = "";
    }

    var element = document.createElement("div");
    element.setAttribute("data-root-boundary", id);
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("tabindex", "0");
    return element;
  }
  /**
   * Enables support for focus trap navigation between the first and last focusable elements.
   */
  ;

  var _proto = FocusTrap.prototype;

  _proto.on = function on() {
    FocusTrap.manageFocusEvents(this, true);
  }
  /**
   * Disables support for focus trap navigation between the first and last focusable elements.
   */
  ;

  _proto.off = function off() {
    FocusTrap.manageFocusEvents(this, false);
  };

  return FocusTrap;
}(Shared_ts_utils_focus_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

FocusTrap.context = void 0;


/***/ }),

/***/ "../../Shared-International/ts/utils/html.ts":
/*!***************************************************!*\
  !*** ../../Shared-International/ts/utils/html.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": function() { return /* binding */ createElement; },
/* harmony export */   "setElementAttributes": function() { return /* binding */ setElementAttributes; },
/* harmony export */   "renderTemplate": function() { return /* binding */ renderTemplate; },
/* harmony export */   "elementExists": function() { return /* binding */ elementExists; },
/* harmony export */   "enumerateElements": function() { return /* binding */ enumerateElements; }
/* harmony export */ });
/* unused harmony exports convertFragmentToHTMLElement, appendElement, getJSONByElementAttribute */
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "../../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/utils/data */ "../../Shared-International/ts/utils/data.ts");





var div = document.createElement("div");
/**
 * createElement takes a string tag name along with an optional object of attributes and returns a new HTMLElement.
 * @param tag string
 * @param attributes object
 * @return HTMLElement
 */

var createElement = function createElement(tag, attributes) {
  var element = document.createElement(tag);
  return setElementAttributes(element, attributes);
};
/**
 * Takes an object representing an attribute key-value pair and assigns it to an HTMLElement. The HTMLElement will be returned.
 * @param element HTMLElement
 * @param attributes T
 * @returns HTMLElement
 */

var setElementAttributes = function setElementAttributes(element, attributes) {
  if (attributes && Shared_ts_utils_data__WEBPACK_IMPORTED_MODULE_4__.isObject(attributes)) {
    Object.keys(attributes).forEach(function (attribute) {
      element.setAttribute(attribute, attributes[attribute]);
    });
  }

  return element;
};
/**
 * Takes a string representing an HTML template and converts it into a document fragment. The document fragment is returned.
 * @param template string
 * @returns DocumentFragment
 */

var renderTemplate = function renderTemplate(template) {
  var range = document.createRange();
  return range.createContextualFragment(template);
};
/**
 * Takes a document fragment and converts it into an HTML element. The Element is returned.
 * @param fragment DocumentFragment
 * @returns Element | null
 */

var convertFragmentToHTMLElement = function convertFragmentToHTMLElement(fragment) {
  div.appendChild(fragment);
  return div.lastElementChild;
};
/**
 * appendElement takes an HTMLElement and appends it to the document body. The same element is then returned.
 * @param element HTMLElement
 * @return HTMLElement
 */

var appendElement = function appendElement(element) {
  document.body.appendChild(element);
  return element;
};
/**
 * elementExists takes an HTMLItem and will return true if the item exists either in the document body or in the document head.
 * @param element HTMLItem
 * @return boolean
 */

var elementExists = function elementExists(element) {
  return document.body.contains(element) || document.head.contains(element);
};
/**
 * enumerateElements takes an HTMLList and returns an element array.
 * @param elements HTMLList
 * @return Element[]
 */

var enumerateElements = function enumerateElements(elements) {
  var ar = [].slice.call(elements);
  return ar;
};
/**
 * Attempts to convert a JSON string value of an HTML attribute into JSON format.
 * @param element Element | null
 * @param attribute string
 * @returns JSON object
 */

var getJSONByElementAttribute = function getJSONByElementAttribute(element, attribute) {
  var json = {};
  if (!element || !attribute) return json;

  try {
    var value = element.getAttribute(attribute);
    json = value !== null ? JSON.parse(value) : json;
  } catch (e) {
    var message = e instanceof Error ? e.message : String(e);
    console.debug(message);
  }

  return json;
};

/***/ }),

/***/ "../../Shared-International/ts/utils/inert.ts":
/*!****************************************************!*\
  !*** ../../Shared-International/ts/utils/inert.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.math.sign.js */ "../../node_modules/core-js/modules/es.math.sign.js");
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_0__);


// @ts-nocheck

/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
var enableInertSupport = function enableInertSupport() {
  if (!("inert" in HTMLElement.prototype)) {
    Object.defineProperty(HTMLElement.prototype, "inert", {
      enumerable: true,

      /**
       * @return {boolean}
       * @this {Element}
       */
      get: function get() {
        return this.hasAttribute("inert");
      },

      /**
       * @param {boolean} inert
       * @this {Element}
       */
      set: function set(inert) {
        if (inert) {
          this.setAttribute("inert", "");
        } else {
          this.removeAttribute("inert");
        }
      }
    });
    window.addEventListener("load", function () {
      function applyStyle(css) {
        var style = document.createElement("style");
        style.type = "text/css"; // @ts-ignore: Unreachable code error

        if (style.styleSheet) {
          // @ts-ignore: Unreachable code error
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
      }

      var css = "/*[inert]*/*[inert]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}";
      applyStyle(css);
      /**
       * Sends a fake tab event. This is only supported by some browsers.
       *
       * @param {boolean=} opt_shiftKey whether to send this tab with shiftKey
       */

      var dispatchTabEvent = function dispatchTabEvent(opt_shiftKey) {
        var ev = null;

        try {
          ev = new KeyboardEvent("keydown", {
            keyCode: 9,
            // @ts-ignore: Unreachable code error
            which: 9,
            key: "Tab",
            code: "Tab",
            // @ts-ignore: Unreachable code error
            keyIdentifier: "U+0009",
            shiftKey: !!opt_shiftKey,
            bubbles: true
          });
        } catch (e) {
          try {
            // Internet Explorer
            ev = document.createEvent("KeyboardEvent");
            ev.initKeyboardEvent("keydown", true, true, window, "Tab", 0, opt_shiftKey ? "Shift" : "", false, "en");
          } catch (e) {}
        }

        if (ev) {
          try {
            Object.defineProperty(ev, "keyCode", {
              value: 9
            });
          } catch (e) {}

          document.dispatchEvent(ev);
        }
      };
      /**
       * Determines whether the specified element is inert, and returns the element
       * which caused this state. This is limited to, but may include, the body
       * element.
       *
       * @param {Element} e to check
       * @return {Element} element is made inert by, if any
       */


      var madeInertBy = function madeInertBy(e) {
        while (e && e !== document.documentElement) {
          if (e.hasAttribute("inert")) {
            return e;
          }

          e = e.parentElement;
        }

        return null;
      };
      /**
       * Finds the nearest shadow root from an element that's within said shadow root.
       *
       * TODO(samthor): We probably want to find the highest shadow root.
       *
       * @param {Element} e to check
       * @return {Node} shadow root, if any
       */


      var findShadowRoot = function findShadowRoot(e) {
        return null;
      };

      if (window.ShadowRoot) {
        findShadowRoot = function findShadowRoot(e) {
          while (e && e !== document.documentElement) {
            if (e instanceof window.ShadowRoot) {
              return e;
            }

            e = e.parentNode;
          }

          return null;
        };
      }
      /**
       * Returns the target of the passed event. If there's a path (shadow DOM only), then prefer it.
       *
       * @param {!Event} event
       * @return {Element} target of event
       */


      var targetForEvent = function targetForEvent(event) {
        var p = event.path;
        return (
          /** @type {Element} */
          p && p[0] || event.target
        );
      }; // Hold onto the last tab direction: next (tab) or previous (shift-tab). This
      // can be used to step over inert elements in the correct direction. Mouse
      // or non-tab events should reset this and inert events should focus nothing.


      var lastTabDirection = 0;
      document.addEventListener("keydown", function (ev) {
        if (ev.keyCode === 9) {
          lastTabDirection = ev.shiftKey ? -1 : +1;
        } else {
          lastTabDirection = 0;
        }
      });
      document.addEventListener("mousedown", function (ev) {
        lastTabDirection = 0;
      }); // Retain the currently focused shadowRoot.

      var focusedShadowRoot = null;

      var updateFocusedShadowRoot = function updateFocusedShadowRoot(root) {
        if (root == focusedShadowRoot) {
          return;
        }

        if (focusedShadowRoot) {
          if (!(focusedShadowRoot instanceof window.ShadowRoot)) {
            throw new Error("not shadow root: " + focusedShadowRoot);
          }

          focusedShadowRoot.removeEventListener("focusin", shadowFocusHandler, true); // remove
        }

        if (root) {
          root.addEventListener("focusin", shadowFocusHandler, true); // add
        }

        focusedShadowRoot = root;
      };
      /**
       * Focus handler on a Shadow DOM host. This traps focus events within that root.
       *
       * @param {!Event} ev
       */


      var shadowFocusHandler = function shadowFocusHandler(ev) {
        // ignore "direct" focus, we only want shadow root focus
        var last = ev.path[ev.path.length - 1];

        if (last ===
        /** @type {*} */
        window) {
          return;
        }

        sharedFocusHandler(targetForEvent(ev));
        ev.preventDefault();
        ev.stopPropagation();
      };
      /**
       * Called indirectly by both the regular focus handler and Shadow DOM host focus handler. This
       * is the bulk of the polyfill which prevents focus.
       *
       * @param {Element} target focused on
       */


      var sharedFocusHandler = function sharedFocusHandler(target) {
        var inertElement = madeInertBy(target);

        if (!inertElement) {
          return;
        } // If the page has been tabbed recently, then focus the next element
        // in the known direction (if available).


        if (document.hasFocus() && lastTabDirection !== 0) {
          var getFocused = function getFocused() {
            return (focusedShadowRoot || document).activeElement;
          }; // Send a fake tab event to enumerate through the browser's view of
          // focusable elements. This is supported in some browsers (not Firefox).


          var previous = getFocused();
          dispatchTabEvent(lastTabDirection < 0 ? true : false);

          if (previous != getFocused()) {
            return;
          } // Otherwise, enumerate through adjacent elements to find the next
          // focusable element. This won't respect any custom tabIndex.


          var filter =
          /** @type {NodeFilter} */
          {
            /**
             * @param {Node} node
             * @return {number}
             */
            acceptNode: function acceptNode(node) {
              if (!node || !node.focus || node.tabIndex < 0) {
                return NodeFilter.FILTER_SKIP; // look at descendants
              }

              var contained = inertElement.contains(node);
              return contained ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
            }
          };
          var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, filter);
          walker.currentNode = inertElement;
          var nextFunc = Math.sign(lastTabDirection) === -1 ? walker.previousNode : walker.nextNode;
          var next = nextFunc.bind(walker);

          for (var candidate; candidate = next();) {
            candidate.focus();

            if (getFocused() !== previous) {
              return;
            }
          } // FIXME: If a focusable element can't be found here, it's likely to mean
          // that this is the start or end of the page. Blurring is then not quite
          // right, as it prevents access to the browser chrome.

        } // Otherwise, immediately blur the targeted element. Technically, this
        // still generates focus and blur events on the element. This is (probably)
        // the price to pay for this polyfill.


        target.blur();
      }; // The 'focusin' event bubbles, but instead, use 'focus' with useCapture set
      // to true as this is supported in Firefox. Additionally, target the body so
      // this doesn't generate superfluous events on document itself.


      document.body.addEventListener("focus", function (ev) {
        var target = targetForEvent(ev);
        updateFocusedShadowRoot(target == ev.target ? null : findShadowRoot(target));
        sharedFocusHandler(target); // either real DOM node or shadow node
      }, true); // Use a capturing click listener as both a safety fallback where pointer-events is not
      // available (IE10 and below), and to prevent accessKey access to inert elements.
      // TODO(samthor): Note that pointer-events polyfills trap more mouse events, e.g.-
      //   https://github.com/kmewhort/pointer_events_polyfill

      document.addEventListener("click", function (ev) {
        var target = targetForEvent(ev);

        if (madeInertBy(target)) {
          ev.preventDefault();
          ev.stopPropagation();
        }
      }, true);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (enableInertSupport);

/***/ }),

/***/ "../../Shared-International/ts/utils/load-item.ts":
/*!********************************************************!*\
  !*** ../../Shared-International/ts/utils/load-item.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoadItem; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "../../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Shared/ts/utils/html */ "../../Shared-International/ts/utils/html.ts");












var LoadItem = /*#__PURE__*/function () {
  /**
   * Represents the placeholder element
   */

  /**
   * Represents the name of the HTML element
   */

  /**
   * Represents the name of the source value
   */

  /**
   * Represents the name of the loading strategy
   */

  /**
   * Represents the name of the error handling strategy
   */

  /**
   * Represents the key-value pair of attribute names and values that will be mapped to the current element
   */

  /**
   * Represents the key-value pair collection of additional HTML elements and attributes
   */

  /**
   * Represents the key-value pair relationship between the LoadItem instance and the controller task array
   */

  /**
   * Using an existing HTML element as a placeholder container, a new HTML element can be created and customized through the config interface. The new element will be inserted into the placeholder afterwards. Depending on the network response, either a success or failure status will be assigned to the placeholder and the new element.
   * @param placeholder Element
   * @param config ILoadItemConfig
   */
  function LoadItem(placeholder, config) {
    var _config$tag, _config$src, _config$onloadname, _config$onerrorname, _JSON$parse, _placeholder$getAttri, _JSON$parse2, _placeholder$getAttri2;

    this.placeholder = void 0;
    this.tag = void 0;
    this.src = void 0;
    this.onloadname = void 0;
    this.onerrorname = void 0;
    this.attributes = void 0;
    this.tagsGroup = void 0;
    this.placeholder = placeholder;
    this.tag = (_config$tag = config == null ? void 0 : config.tag) != null ? _config$tag : "img";
    this.src = placeholder.getAttribute((_config$src = config == null ? void 0 : config.src) != null ? _config$src : "data-src-img");
    this.onloadname = (_config$onloadname = config == null ? void 0 : config.onloadname) != null ? _config$onloadname : "onload";
    this.onerrorname = (_config$onerrorname = config == null ? void 0 : config.onerrorname) != null ? _config$onerrorname : "onerror";
    this.attributes = (_JSON$parse = JSON.parse((_placeholder$getAttri = placeholder.getAttribute("data-attr")) != null ? _placeholder$getAttri : "{}")) != null ? _JSON$parse : {};
    this.tagsGroup = (_JSON$parse2 = JSON.parse((_placeholder$getAttri2 = placeholder.getAttribute("data-tag")) != null ? _placeholder$getAttri2 : "{}")) != null ? _JSON$parse2 : {};

    if (!LoadItem.isRendered(this)) {
      LoadItem.initalize(this);
    }
  }

  LoadItem.isRendered = function isRendered(context) {
    return context.placeholder.classList.contains("load-item--success");
  }
  /**
   * Gets the current element and performs the setup work on the placeholder, the element and optionally other elements defined in the 'data-tag' attribute
   * @param context LoadItem
   */
  ;

  LoadItem.initalize = function initalize(context) {
    var element = this.getElement(context);
    this.processPlaceholder(context);
    this.processElement(element, context.attributes, context);
    this.processTags(context);
    this.controller.set(context, []);
  }
  /**
   * Returns the controller's task array
   * @param context LoadItem
   * @returns ILoadItemController[]
   */
  ;

  LoadItem.getController = function getController(context) {
    return this.controller.get(context);
  }
  /**
   * Determines if the current element already exists and applies additional attributes defined in the 'data-attr' attribute. Otherwise, the current element will be created along with the attributes. The current element is returned.
   * @param context LoadItem
   * @returns HTMLElement
   */
  ;

  LoadItem.getElement = function getElement(context) {
    var element = this.getElementByPlaceholder(context);
    element = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_10__.elementExists)(element) ? (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_10__.setElementAttributes)(element, {
      src: context.src,
      class: "load-item__progress"
    }) : this.addElement(this.preloadElement(context), context);
    return element;
  }
  /**
   * Takes the element and loads it into the document. Depending on the network response, the element is rendered on screen or error handling is applied.
   * @param element HTMLElement
   * @param attributes {}
   * @param context LoadItem
   */
  ;

  LoadItem.processElement = function processElement(element, attributes, context) {
    var _this = this;

    element = (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_10__.setElementAttributes)(element, attributes);
    this.loadElement(element, context).then(function () {
      return _this.renderElement(element, context);
    }).catch(function (error) {
      return _this.handleError(element, context);
    });
  }
  /**
   * Uses the tag property as a selector from the placeholder and returns the element.
   * @param context LoadItem
   * @returns HTMLElement
   */
  ;

  LoadItem.getElementByPlaceholder = function getElementByPlaceholder(context) {
    return context.placeholder.querySelector(context.tag);
  }
  /**
   * A new element is created using the tag property along with the source property. The element is returned.
   * @param context LoadItem
   * @returns HTMLElement
   */
  ;

  LoadItem.preloadElement = function preloadElement(context) {
    return (0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_10__.createElement)(context.tag, {
      src: context.src,
      alt: "",
      class: "load-item__progress"
    });
  }
  /**
   * Assigns the failure status to the placeholder and the element. A warning will be reported to the browser console providing the source that triggered the network response along with the HTML element that it would be applied to.
   * @param element HTMLElement
   * @param context LoadItem
   */
  ;

  LoadItem.handleError = function handleError(element, context) {
    context.placeholder.classList.add("load-item--failure");
    element.classList.remove("load-item__progress");
    console.error("Cound not load the resource", {
      src: context.src,
      for: element
    });
    var controller = this.getController(context);

    if (controller) {
      var response = controller.find(function (control) {
        return control.name === "error";
      });
      response == null ? void 0 : response.task();
    }
  }
  /**
   * Inserts the current element into the placeholder in the document.
   * @param element HTMLElement
   * @param context LoadItem
   * @returns HTMLElement
   */
  ;

  LoadItem.addElement = function addElement(element, context) {
    context.placeholder.insertAdjacentElement("afterbegin", element);
    return element;
  }
  /**
   * Takes the current element and assigns the loading strategy properties to it. A promise is returned where it will resolve on a successful network response and it will reject on a failed network response.
   * @param element HTMLElement
   * @param context LoadItem
   * @returns Promise<HTMLElement>
   */
  ;

  LoadItem.loadElement = function loadElement(element, context) {
    return new Promise(function (resolve, reject) {
      element.onload = function () {
        return resolve(element);
      };

      element.onerror = function () {
        return reject(element);
      };
    });
  }
  /**
   * Assigns the success status on the placeholder element and the current element
   * @param element HTMLElement
   * @param context LoadItem
   */
  ;

  LoadItem.renderElement = function renderElement(element, context) {
    context.placeholder.classList.add("load-item--success");
    element.classList.add("load-item__success");
    var controller = this.getController(context);

    if (controller) {
      var response = controller.find(function (control) {
        return control.name === "load";
      });
      response == null ? void 0 : response.task(element);
    }
  }
  /**
   * Constructs a new object and pushes it into the controller's task array
   * @param name string
   * @param task LoadItemTask
   * @param context LoadItem
   */
  ;

  LoadItem.pushTask = function pushTask(name, task, context) {
    var controller = this.getController(context);

    if (controller) {
      controller.push({
        name: name,
        task: task
      });
    }
  }
  /**
   * The load-item class is assigned to the placeholder element
   * @param context LoadItem
   */
  ;

  LoadItem.processPlaceholder = function processPlaceholder(context) {
    context.placeholder.classList.add("load-item");
  }
  /**
   * Reads through the 'data-tag' attribute and generates new HTML elements along with attributes. Each new element will then be prepended into the placeholder element.
   * @param context LoadItem
   */
  ;

  LoadItem.processTags = function processTags(context) {
    var _this2 = this;

    Object.keys(context.tagsGroup).forEach(function (tags) {
      var tag = context.tagsGroup[tags];
      tag.forEach(function (attributes) {
        return _this2.processElement(_this2.addElement((0,Shared_ts_utils_html__WEBPACK_IMPORTED_MODULE_10__.createElement)(tags), context), attributes, context);
      });
    });
  }
  /**
   * Adds a new task to the queue stack to be called when the item has succeeded to load
   * @param task LoadItemTask
   * @returns LoadItem
   */
  ;

  var _proto = LoadItem.prototype;

  _proto.load = function load(task) {
    LoadItem.pushTask("load", task, this);
    return this;
  }
  /**
   * Adds a new task to the "error" queue stack to be called when the item has failed to load
   * @param task LoadItemTask
   * @returns LoadItem
   */
  ;

  _proto.error = function error(task) {
    LoadItem.pushTask("error", task, this);
    return this;
  };

  return LoadItem;
}();

LoadItem.controller = new WeakMap();


/***/ }),

/***/ "../../Shared-International/ts/utils/upsell-action-quantity-reloactor.ts":
/*!*******************************************************************************!*\
  !*** ../../Shared-International/ts/utils/upsell-action-quantity-reloactor.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UpsellActionQuantityRelocator; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "../../node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);











var UpsellActionQuantityRelocator = /*#__PURE__*/function () {
  function UpsellActionQuantityRelocator(form) {
    this.form = void 0;
    this.actionQuantities = [];
    this.form = form;
    this.actionQuantities = this.captureActionQuantities();
    this.processActionQuantities();
  }

  UpsellActionQuantityRelocator.reportUIError = function reportUIError(message, element) {
    console.error({
      message: message,
      element: element
    });
  };

  var _proto = UpsellActionQuantityRelocator.prototype;

  _proto.captureActionQuantities = function captureActionQuantities() {
    var comboboxes = Array.from(this.form.querySelectorAll("select[name^=\"ActionQuantity\"]"));
    comboboxes.forEach(function (combobox) {
      var _combobox$getAttribut;

      var index = (_combobox$getAttribut = combobox.getAttribute("name")) == null ? void 0 : _combobox$getAttribut.replace("ActionQuantity", "").trim();
      var actionType = document.querySelector("input[id=\"ActionType" + index + "\"]");
      var actionCode = document.querySelector("input[id=\"ActionCode" + index + "\"]");

      if (actionType && actionCode) {
        UpsellActionQuantityRelocator.actionCodeTypeRepository.set(combobox, {
          actionCode: actionCode,
          actionType: actionType
        });
      }
    });
    return comboboxes;
  };

  _proto.processActionQuantities = function processActionQuantities() {
    var _this = this;

    this.actionQuantities.forEach(function (actionQuantity) {
      var placeholder = _this.getPlaceholderByActionQuantity(actionQuantity);

      if (!placeholder) return;

      _this.handlePlaceholderCombobox(placeholder, actionQuantity);

      _this.handlePlaceholderLabels(placeholder, actionQuantity);

      _this.handleHiddenInputs(placeholder, actionQuantity);

      _this.removeOriginalContainer(actionQuantity);
    });
  };

  _proto.getPlaceholderByActionQuantity = function getPlaceholderByActionQuantity(actionQuantity) {
    var placeholder = document.querySelector("[data-action-quantity-placeholder-id=\"" + actionQuantity.id + "\"]");

    if (!placeholder) {
      UpsellActionQuantityRelocator.reportUIError("No placeholder element is available for " + actionQuantity.id, actionQuantity);
      return;
    }

    return placeholder;
  };

  _proto.handlePlaceholderLabels = function handlePlaceholderLabels(placeholder, actionQuantity) {
    var labels = Array.from(placeholder.querySelectorAll("label"));
    labels.forEach(function (label) {
      return label.setAttribute("for", actionQuantity.id);
    });

    if (labels.length === 0) {
      UpsellActionQuantityRelocator.reportUIError("No label elements are available for " + actionQuantity.id, placeholder);
    }
  };

  _proto.handlePlaceholderCombobox = function handlePlaceholderCombobox(placeholder, actionQuantity) {
    var combobox = placeholder.querySelector("select");

    if (!combobox) {
      UpsellActionQuantityRelocator.reportUIError("No select element is available to replace with " + actionQuantity.id, placeholder);
      return;
    }

    var classList = combobox.getAttribute("class");

    if (classList) {
      actionQuantity.setAttribute("class", classList);
    }

    combobox.replaceWith(actionQuantity);
  };

  _proto.handleHiddenInputs = function handleHiddenInputs(placeholder, actionQuantity) {
    var repo = UpsellActionQuantityRelocator.actionCodeTypeRepository.get(actionQuantity);
    if (!repo) return;
    placeholder.insertAdjacentElement("beforeend", repo.actionCode);
    placeholder.insertAdjacentElement("beforeend", repo.actionType);
  };

  _proto.removeOriginalContainer = function removeOriginalContainer(actionQuantity) {
    var repo = UpsellActionQuantityRelocator.actionCodeTypeRepository.get(actionQuantity);
    if (!repo) return;
    var container = this.form.querySelector("[id$=\"" + repo.actionCode.value + "\"]");
    if (!container) return;
    container.remove();
  };

  return UpsellActionQuantityRelocator;
}();

UpsellActionQuantityRelocator.actionCodeTypeRepository = new WeakMap();


/***/ }),

/***/ "../../Shared-International/ts/utils/validate-event.ts":
/*!*************************************************************!*\
  !*** ../../Shared-International/ts/utils/validate-event.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ValidateEvent; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Shared/ts/utils/capture-element */ "../../Shared-International/ts/utils/capture-element.ts");
/* harmony import */ var Shared_ts_utils_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Shared/ts/utils/validate */ "../../Shared-International/ts/utils/validate.ts");





function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ValidateEvent = /*#__PURE__*/function (_Validate) {
  _inheritsLoose(ValidateEvent, _Validate);

  /**
   * Represents a list of event types that can be assigned to perform validation on the HTMLInputElement type
   */

  /**
   * Represets a list of event types that can be assigned to perform validation on the HTMLInputElement type when invalid
   */

  /**
   * Represents a list of event types that can be assigned to perform validation on the HTMLSelectElement type
   */

  /**
   * Represets a list of event types that can be assigned to perform validation on the HTMLSelectElement type when invalid
   */

  /**
   * Represents a list of event types that can be assigned to perform validation on the HTMLTextAreaElement type
   */

  /**
   * Represets a list of event types that can be assigned to perform validation on the HTMLTextAreaElement type when invalid
   */

  /**
   * Reference name to the input event handler method that can be added and removed from the input element
   */

  /**
   * Reference name to the combobox event handler method that can be added and removed from the combobox element
   */

  /**
   * Reference name to the textarea event handler method that can be added and removed from the textarea element
   */

  /**
   * Provides the ability to apply validation rules from common.js through the Validate interface. Inheriting from the Validate interface, configuration settings include the ability to provide a specific element to represent the form to validate for, a CSS namespace to customize the presentation and an attribute to discern which form controls are required. Additionally, event type mapping can be provided to customize the validation experience.
   * @param config IValidateEventConfig
   */
  function ValidateEvent(config) {
    var _config$inputEvents, _config$comboboxEvent, _config$textareaEvent, _config$invalidInputE, _config$invalidCombob, _config$invalidTextar;

    var _this;

    _this = _Validate.call(this, config) || this;
    _this.inputEvents = void 0;
    _this.invalidInputEvents = void 0;
    _this.comboboxEvents = void 0;
    _this.invalidComboboxEvents = void 0;
    _this.textareaEvents = void 0;
    _this.invalidTextareaEvents = void 0;
    _this.validateInputEvent = void 0;
    _this.validateComboboxEvent = void 0;
    _this.validateTextareaEvent = void 0;
    _this.inputEvents = (_config$inputEvents = config == null ? void 0 : config.inputEvents) != null ? _config$inputEvents : [];
    _this.comboboxEvents = (_config$comboboxEvent = config == null ? void 0 : config.comboboxEvents) != null ? _config$comboboxEvent : [];
    _this.textareaEvents = (_config$textareaEvent = config == null ? void 0 : config.textareaEvents) != null ? _config$textareaEvent : [];
    _this.invalidInputEvents = (_config$invalidInputE = config == null ? void 0 : config.invalidInputEvents) != null ? _config$invalidInputE : _this.inputEvents;
    _this.invalidComboboxEvents = (_config$invalidCombob = config == null ? void 0 : config.invalidComboboxEvents) != null ? _config$invalidCombob : _this.comboboxEvents;
    _this.invalidTextareaEvents = (_config$invalidTextar = config == null ? void 0 : config.invalidTextareaEvents) != null ? _config$invalidTextar : _this.textareaEvents;

    _this.validateInputEvent = function (event) {
      _this.validateControl(event.target);
    };

    _this.validateComboboxEvent = function (event) {
      _this.validateControl(event.target);
    };

    _this.validateTextareaEvent = function (event) {
      _this.validateControl(event.target);
    };

    ValidateEvent.initializeCapture(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Establishes a mutation observer on the form element and observes attribute changes on all required controls. Changes to the attributes will determine the flow control of valid/invalid event mapping.
   * @param context ValidateEvent
   * @returns void
   */


  ValidateEvent.initializeCapture = function initializeCapture(context) {
    if (!context.form) return;
    var captureForm = new Shared_ts_utils_capture_element__WEBPACK_IMPORTED_MODULE_4__["default"](context.form);
    var controls = context.getRequiredControls();
    captureForm.subscribe("attributes", function (record) {
      var control = record.target;
      if (!controls.includes(control)) return;
      var nodeName = control.nodeName.toLowerCase();

      if (context.isInvalidControl(control)) {
        switch (nodeName) {
          case "input":
            ValidateEvent.assignInvalidInputEvents(control, context);
            break;

          case "select":
            ValidateEvent.assignInvalidComboEvents(control, context);
            break;

          case "textarea":
            ValidateEvent.assignInvalidTextareaEvents(control, context);
            break;
        }
      }
    });
  }
  /**
   * Enable direct validation
   */
  ;

  var _proto = ValidateEvent.prototype;

  _proto.validateOnDemand = function validateOnDemand() {
    this.setFocusOnInvalidControl();
    this.processControlEvents();
  }
  /**
   * Enable validation based on the form's submit element's "click" event
   */
  ;

  _proto.validateOnSubmit = function validateOnSubmit() {
    var _this$submit,
        _this2 = this;

    (_this$submit = this.submit) == null ? void 0 : _this$submit.addEventListener("click", function () {
      _this2.validateOnDemand();
    });
  }
  /**
   * Enable validation based on whether the captured element is the submit element
   */
  ;

  _proto.validateOnSubmitDelegation = function validateOnSubmitDelegation() {
    var _this$form,
        _this3 = this;

    (_this$form = this.form) == null ? void 0 : _this$form.addEventListener("click", function (event) {
      var target = event.target;

      if (target === _this3.submit) {
        _this3.validateOnDemand();
      }
    });
  }
  /**
   * Enable event listeners mapping to each of the provided event types on input, combobox and textarea elements
   */
  ;

  _proto.processControlEvents = function processControlEvents() {
    this.processInputEvents();
    this.processComboboxEvents();
    this.processTextareaEvents();
  }
  /**
   * Removes all invalid input events and adds all valid input events to the control
   * @param input HTMLInputElement
   * @param context ValidateEvent
   */
  ;

  ValidateEvent.assignValidInputEvents = function assignValidInputEvents(input, context) {
    context.invalidInputEvents.forEach(function (event) {
      input.removeEventListener(event, context.validateInputEvent);
    });
    context.inputEvents.forEach(function (event) {
      input.removeEventListener(event, context.validateInputEvent);
      input.addEventListener(event, context.validateInputEvent);
    });
  }
  /**
   * Removes all valid input events and adds all invalid input events to the control
   * @param input HTMLInputElement
   * @param context ValidateEvent
   */
  ;

  ValidateEvent.assignInvalidInputEvents = function assignInvalidInputEvents(input, context) {
    context.inputEvents.forEach(function (event) {
      input.removeEventListener(event, context.validateInputEvent);
    });
    context.invalidInputEvents.forEach(function (event) {
      input.removeEventListener(event, context.validateInputEvent);
      input.addEventListener(event, context.validateInputEvent);
    });
  }
  /**
   * Removes all invalid combobox events and adds all valid combobox events to the control
   * @param combobox HTMLSelectElement
   * @param context ValidateEvent
   */
  ;

  ValidateEvent.assignValidComboboxEvents = function assignValidComboboxEvents(combobox, context) {
    context.invalidComboboxEvents.forEach(function (event) {
      combobox.removeEventListener(event, context.validateInputEvent);
    });
    context.comboboxEvents.forEach(function (event) {
      combobox.removeEventListener(event, context.validateInputEvent);
      combobox.addEventListener(event, context.validateInputEvent);
    });
  }
  /**
   * Removes all valid combobox events and adds all invalid combobox events to the control
   * @param combobox HTMLSelectElement
   * @param context ValidateEvent
   */
  ;

  ValidateEvent.assignInvalidComboEvents = function assignInvalidComboEvents(combobox, context) {
    context.comboboxEvents.forEach(function (event) {
      combobox.removeEventListener(event, context.validateInputEvent);
    });
    context.invalidComboboxEvents.forEach(function (event) {
      combobox.removeEventListener(event, context.validateInputEvent);
      combobox.addEventListener(event, context.validateInputEvent);
    });
  }
  /**
   * Removes all invalid textarea events and adds all valid textarea events to the control
   * @param textarea HTMLTextAreaElement
   * @param context ValidateEvent
   */
  ;

  ValidateEvent.assignValidTextareaEvents = function assignValidTextareaEvents(textarea, context) {
    context.invalidTextareaEvents.forEach(function (event) {
      textarea.removeEventListener(event, context.validateTextareaEvent);
    });
    context.textareaEvents.forEach(function (event) {
      textarea.removeEventListener(event, context.validateTextareaEvent);
      textarea.addEventListener(event, context.validateTextareaEvent);
    });
  }
  /**
   * Removes all valid textarea events and adds all invalid textarea events to the control
   * @param textarea HTMLTextAreaElement
   * @param context ValidateEvent
   */
  ;

  ValidateEvent.assignInvalidTextareaEvents = function assignInvalidTextareaEvents(textarea, context) {
    context.invalidTextareaEvents.forEach(function (event) {
      textarea.removeEventListener(event, context.validateTextareaEvent);
    });
    context.textareaEvents.forEach(function (event) {
      textarea.removeEventListener(event, context.validateTextareaEvent);
      textarea.addEventListener(event, context.validateTextareaEvent);
    });
  }
  /**
   * Enable event listeners mapping to each of the provided event types on input elements
   */
  ;

  _proto.processInputEvents = function processInputEvents() {
    var _this4 = this;

    this.getValidRequiredInputs().forEach(function (input) {
      return ValidateEvent.assignValidInputEvents(input, _this4);
    });
    this.getInvalidRequiredInputs().forEach(function (input) {
      return ValidateEvent.assignInvalidInputEvents(input, _this4);
    });
  }
  /**
   * Enable event listeners mapping to each of the provided event types on combobox elements
   */
  ;

  _proto.processComboboxEvents = function processComboboxEvents() {
    var _this5 = this;

    this.getValidRequiredComboboxes().forEach(function (combobox) {
      return ValidateEvent.assignValidComboboxEvents(combobox, _this5);
    });
    this.getInvalidRequiredComboboxes().forEach(function (combobox) {
      return ValidateEvent.assignInvalidComboEvents(combobox, _this5);
    });
  }
  /**
   * Enable event listeners mapping to each of the provided event types on textarea elements
   */
  ;

  _proto.processTextareaEvents = function processTextareaEvents() {
    var _this6 = this;

    this.getValidRequiredTextareas().forEach(function (textarea) {
      return ValidateEvent.assignValidTextareaEvents(textarea, _this6);
    });
    this.getInvalidRequiredTextareas().forEach(function (textarea) {
      return ValidateEvent.assignInvalidTextareaEvents(textarea, _this6);
    });
  };

  return ValidateEvent;
}(Shared_ts_utils_validate__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "../../Shared-International/ts/utils/validate.ts":
/*!*******************************************************!*\
  !*** ../../Shared-International/ts/utils/validate.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Validate; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var element_closest_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! element-closest/browser */ "../../node_modules/element-closest/browser.js");
/* harmony import */ var element_closest_browser__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(element_closest_browser__WEBPACK_IMPORTED_MODULE_8__);










var Validate = /*#__PURE__*/function () {
  /**
   * Represents the form element
   */

  /**
   * Represents an array of all combobox (select) controls
   */

  /**
   * Represents an array of all input controls
   */

  /**
   * Represents an array of all textarea elements
   */

  /**
   * Represents an array of controls that are neither combobox nor input controls
   */

  /**
   * Represents the current form submit button
   */

  /**
   * Represents the CSS namespace that is responsible for rendering each controls valid and invalid state. Defaults to *message*
   */

  /**
   * Represents the HTML attribute that will determine when a control is considered valid or invalid. Defaults to *required*
   */
  function Validate(config) {
    var _config$form, _config$submit, _this$form, _config$namespace, _config$attribute;

    this.form = void 0;
    this.comboboxes = [];
    this.inputs = [];
    this.textareas = [];
    this.controlTargets = [];
    this.submit = void 0;
    this.namespace = void 0;
    this.attribute = void 0;
    this.form = (_config$form = config == null ? void 0 : config.form) != null ? _config$form : document.querySelector("form");
    this.submit = (_config$submit = config == null ? void 0 : config.submit) != null ? _config$submit : (_this$form = this.form) == null ? void 0 : _this$form.querySelector("[type=\"submit\"]");
    this.captureComboboxes();
    this.captureInputs();
    this.captureTextareas();
    this.namespace = (_config$namespace = config == null ? void 0 : config.namespace) != null ? _config$namespace : "message";
    this.attribute = (_config$attribute = config == null ? void 0 : config.attribute) != null ? _config$attribute : "required";
    this.getRequiredControls().filter(function (control) {
      return !control.hasAttribute("required");
    }).forEach(function (control) {
      control.setAttribute("aria-required", "true");
      control.setAttribute("aria-invalid", "true");
    });
  }
  /**
   * Takes an element and updates the CSS rules in order to render the valid state
   * @param control Element
   */


  var _proto = Validate.prototype;

  _proto.setControlToValid = function setControlToValid(control) {
    control.classList.remove(this.namespace + "__is-invalid");
    control.classList.add(this.namespace + "__is-valid");
  }
  /**
   * Takes an element and updates the CSS rules in order to render the invalid state
   * @param control Element
   */
  ;

  _proto.setControlToInvalid = function setControlToInvalid(control) {
    control.classList.remove(this.namespace + "__is-valid");
    control.classList.add(this.namespace + "__is-invalid");
  }
  /**
   * Takes an element and removes the CSS rules in order to render the default state
   * @param control Element
   */
  ;

  _proto.setControlToDefault = function setControlToDefault(control) {
    control.classList.remove(this.namespace + "__is-valid");
    control.classList.remove(this.namespace + "__is-invalid");
  }
  /**
   * Refreshes the combobox array with a new array containing all combobox (select) controls in the current form
   */
  ;

  _proto.captureComboboxes = function captureComboboxes() {
    if (!this.form) return;
    this.comboboxes = Array.from(this.form.querySelectorAll("select"));
  }
  /**
   * Refreshes the input array with a new array containing all input controls in the current form
   */
  ;

  _proto.captureInputs = function captureInputs() {
    if (!this.form) return;
    this.inputs = Array.from(this.form.querySelectorAll("input"));
  }
  /**
   * Refreshes the textarea array with a new array containing all textarea controls in the current form
   */
  ;

  _proto.captureTextareas = function captureTextareas() {
    if (!this.form) return;
    this.textareas = Array.from(this.form.querySelectorAll("textarea"));
  }
  /**
   * Accesses the first invalid control and attempts to set focus to it
   */
  ;

  _proto.setFocusOnInvalidControl = function setFocusOnInvalidControl() {
    var _this = this;

    var control = this.getRequiredControls().find(function (control) {
      return _this.getTargetByControl(control).classList.contains(_this.namespace + "__is-invalid");
    });

    if (control) {
      control.focus();
      control.scrollIntoView();
    }
  }
  /**
   * Takes either an input or combobox element and determines the nearest element that can handle rendering the control's valid and invalid state via CSS
   * @param control HTMLInputElement or HTMLSelectElement
   */
  ;

  _proto.validateControl = function validateControl(control, predicate) {
    var target = this.getTargetByControl(control);
    var checkValidity = typeof predicate === "function" ? predicate(control) : control.checkValidity();
    checkValidity ? this.setControlToValid(target) : this.setControlToInvalid(target);
    var isRequiredControl = this.getRequiredControls().find(function (requiredControl) {
      return requiredControl === control;
    });

    if (isRequiredControl && !control.hasAttribute("required")) {
      control.setAttribute("aria-invalid", checkValidity ? "false" : "true");
    }
  };

  _proto.validateControlTarget = function validateControlTarget(controlTarget, predicate) {
    var hasPredicate = typeof predicate === "function";
    if (!hasPredicate) return;
    predicate(controlTarget) ? this.setControlToValid(controlTarget) : this.setControlToInvalid(controlTarget);
  }
  /**
   * Takes an input or combobox element and determines if the control is invalid
   * @param control HTMLInputElement | HTMLSelectElement
   * @returns boolean
   */
  ;

  _proto.isValidControl = function isValidControl(control) {
    var target = this.getTargetByControl(control);
    return target.classList.contains(this.namespace + "__is-valid") || !this.isInvalidControl(control);
  }
  /**
   * Takes an input or combobox element and determines if the control is valid
   * @param control HTMLInputElement | HTMLSelectElement
   * @returns boolean
   */
  ;

  _proto.isInvalidControl = function isInvalidControl(control) {
    var target = this.getTargetByControl(control);
    return this.isInvalidControlTarget(target);
  }
  /**
   * Determines if the control is valid based on the class name match from the control target element
   * @param target ValidateControlTarget
   * @returns boolean
   */
  ;

  _proto.isValidControlTarget = function isValidControlTarget(target) {
    return !this.isInvalidControlTarget(target);
  }
  /**
   * Determines if the control is invalid based on the class name match from the control target element
   * @param target ValidateControlTarget
   * @returns boolean
   */
  ;

  _proto.isInvalidControlTarget = function isInvalidControlTarget(target) {
    return target.classList.contains(this.namespace + "__is-invalid");
  }
  /**
   * Returns the closest element that matches the CSS class namespace or defaults to the control itself
   * @param control HTMLInputElement or HTMLSelectElement
   * @returns Element | T
   */
  ;

  _proto.getTargetByControl = function getTargetByControl(control) {
    var _control$closest;

    return (_control$closest = control.closest("." + this.namespace + "__select")) != null ? _control$closest : control;
  }
  /**
   * Returns a new array containing both input and combobox elements that contain the attribute that represents the required state
   * @returns ValidateControl[]
   */
  ;

  _proto.getRequiredControls = function getRequiredControls() {
    if (!this.form) return [];
    return Array.from(this.form.querySelectorAll("[" + this.attribute + "], [data-group-required]"));
  }
  /**
   * Returns all invalid and required controls
   * @returns ValidateControl[]
   */
  ;

  _proto.getInvalidRequiredControls = function getInvalidRequiredControls() {
    var _this2 = this;

    return this.getRequiredControls().filter(function (control) {
      return _this2.isInvalidControl(control);
    });
  }
  /**
   * Returns all valid and required controls
   * @returns ValidateControl[]
   */
  ;

  _proto.getValidRequiredControls = function getValidRequiredControls() {
    var _this3 = this;

    return this.getRequiredControls().filter(function (control) {
      return _this3.isValidControl(control);
    });
  }
  /**
   * Returns all invalid and required target elements
   * @returns ValidateControlTarget[]
   */
  ;

  _proto.getInvalidRequiredTargets = function getInvalidRequiredTargets() {
    var _this4 = this;

    return this.getInvalidRequiredControls().map(function (control) {
      return _this4.getTargetByControl(control);
    });
  }
  /**
   * Returns all valid and required target elements
   * @returns ValidateControlTarget[]
   */
  ;

  _proto.getValidRequiredTargets = function getValidRequiredTargets() {
    var _this5 = this;

    return this.getValidRequiredControls().map(function (control) {
      return _this5.getTargetByControl(control);
    });
  }
  /**
   * Returns a new array of input elements that contain the attribute that represents the required state
   * @returns HTMLInputElement[]
   */
  ;

  _proto.getRequiredInputs = function getRequiredInputs() {
    var _this6 = this;

    var inputs = this.inputs.filter(function (input) {
      return input.hasAttribute(_this6.attribute) || input.hasAttribute("data-group-required");
    });
    inputs.filter(function (input) {
      return input.type === "radio";
    }).forEach(function (radio) {
      return _this6.inputs.filter(function (input) {
        return input.name === radio.name && input !== radio;
      }).forEach(function (input) {
        return inputs.push(input);
      });
    });
    inputs.filter(function (input) {
      return input.type === "checkbox";
    }).forEach(function (checkbox) {
      var group = _this6.inputs.filter(function (input) {
        return input.name === checkbox.name;
      });

      group.filter(function (input) {
        return input !== checkbox;
      }).forEach(function (input) {
        return inputs.push(input);
      });

      if (group.length > 1 && _this6.attribute === "required") {
        group.forEach(function (input) {
          input.removeAttribute("required");
          input.setAttribute("data-group-required", input.name);
        });
      }
    });
    var uniqueInputs = inputs.filter(function (item, pos) {
      return inputs.indexOf(item) == pos;
    });
    return uniqueInputs;
  }
  /**
   * Returns all invalid and required input controls
   * @returns HTMLInputElement[]
   */
  ;

  _proto.getInvalidRequiredInputs = function getInvalidRequiredInputs() {
    var _this7 = this;

    return this.getRequiredInputs().filter(function (input) {
      return _this7.isInvalidControl(input);
    });
  }
  /**
   * Returns all valid and required input controls
   * @returns HTMLInputElement[]
   */
  ;

  _proto.getValidRequiredInputs = function getValidRequiredInputs() {
    var _this8 = this;

    return this.getRequiredInputs().filter(function (input) {
      return _this8.isValidControl(input);
    });
  }
  /**
   * Returns a new array of combobox elements that contain the attribute that represents the required state
   * @returns HTMLSelectElement[]
   */
  ;

  _proto.getRequiredComboboxes = function getRequiredComboboxes() {
    var _this9 = this;

    return this.comboboxes.filter(function (combobox) {
      return combobox.hasAttribute(_this9.attribute);
    });
  }
  /**
   * Returns all invalid and required combobox controls
   * @returns HTMLSelectElement[]
   */
  ;

  _proto.getInvalidRequiredComboboxes = function getInvalidRequiredComboboxes() {
    var _this10 = this;

    return this.getRequiredComboboxes().filter(function (combobox) {
      return _this10.isInvalidControl(combobox);
    });
  }
  /**
   * Returns all valid and required combobox controls
   * @returns HTMLSelectElement[]
   */
  ;

  _proto.getValidRequiredComboboxes = function getValidRequiredComboboxes() {
    var _this11 = this;

    return this.getRequiredComboboxes().filter(function (combobox) {
      return _this11.isValidControl(combobox);
    });
  }
  /**
   * Returns a new array of textarea elements that contain the attribute that represents the required state
   * @returns HTMLTextAreaElement[]
   */
  ;

  _proto.getRequiredTextareas = function getRequiredTextareas() {
    var _this12 = this;

    return this.textareas.filter(function (textarea) {
      return textarea.hasAttribute(_this12.attribute);
    });
  }
  /**
   * Returns all invalid and required textarea controls
   * @returns HTMLTextAreaElement[]
   */
  ;

  _proto.getInvalidRequiredTextareas = function getInvalidRequiredTextareas() {
    var _this13 = this;

    return this.getRequiredTextareas().filter(function (textarea) {
      return _this13.isInvalidControl(textarea);
    });
  }
  /**
   * Returns all valid and required textarea controls
   * @returns HTMLTextAreaElement[]
   */
  ;

  _proto.getValidRequiredTextareas = function getValidRequiredTextareas() {
    var _this14 = this;

    return this.getRequiredTextareas().filter(function (textarea) {
      return _this14.isValidControl(textarea);
    });
  }
  /**
   * Iterates through all required combobox elements and validates each combobox
   */
  ;

  _proto.validateComboboxes = function validateComboboxes(predicate) {
    var _this15 = this;

    this.getRequiredComboboxes().forEach(function (combobox) {
      return _this15.validateControl(combobox, predicate);
    });
  }
  /**
   * Iterates through all required controllers elements and validates each combobox
   */
  ;

  _proto.validateControls = function validateControls(predicate) {
    var _this16 = this;

    this.getRequiredControls().forEach(function (control) {
      _this16.validateControl(control, predicate);
    });
  }
  /**
   * Iterates through all required control target elements and validates each combobox
   */
  ;

  _proto.validateControlTargets = function validateControlTargets(predicate) {
    var _this17 = this;

    this.controlTargets.forEach(function (controlTarget) {
      _this17.validateControlTarget(controlTarget, predicate);
    });
  }
  /**
   * Iterates through all required input elements and validates each input
   */
  ;

  _proto.validateInputs = function validateInputs(predicate) {
    var _this18 = this;

    this.getRequiredInputs().forEach(function (input) {
      return _this18.validateControl(input, predicate);
    });
  }
  /**
   * Iterates through all required textarea elements and validates each textarea
   */
  ;

  _proto.validateTextareas = function validateTextareas(predicate) {
    var _this19 = this;

    this.getRequiredTextareas().forEach(function (textarea) {
      return _this19.validateControl(textarea, predicate);
    });
  }
  /**
   * Iterates through all required combobox and input elements and validates each element
   */
  ;

  _proto.validateAll = function validateAll(predicate) {
    this.validateInputs(predicate);
    this.validateComboboxes(predicate);
    this.validateTextareas(predicate);
    this.validateControlTargets(predicate);
  }
  /**
   * Determines if the entire form is considered valid
   * @returns boolean
   */
  ;

  _proto.isValidForm = function isValidForm() {
    return this.getInvalidRequiredControls().length === 0;
  };

  return Validate;
}();



/***/ }),

/***/ "../../node_modules/core-js/internals/a-callable.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/a-callable.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../../node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "../../node_modules/core-js/internals/a-constructor.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/a-constructor.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "../../node_modules/core-js/internals/is-constructor.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../../node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),

/***/ "../../node_modules/core-js/internals/a-possible-prototype.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/a-possible-prototype.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");

var String = global.String;
var TypeError = global.TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw TypeError("Can't set " + String(argument) + ' as a prototype');
};


/***/ }),

/***/ "../../node_modules/core-js/internals/add-to-unscopables.js":
/*!******************************************************************!*\
  !*** ../../node_modules/core-js/internals/add-to-unscopables.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/advance-string-index.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/advance-string-index.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "../../node_modules/core-js/internals/string-multibyte.js").charAt);

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/an-instance.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/an-instance.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../node_modules/core-js/internals/object-is-prototype-of.js");

var TypeError = global.TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw TypeError('Incorrect invocation');
};


/***/ }),

/***/ "../../node_modules/core-js/internals/an-object.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/an-object.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "../../node_modules/core-js/internals/array-buffer-non-extensible.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "../../node_modules/core-js/internals/array-for-each.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-for-each.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "../../node_modules/core-js/internals/array-from.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/array-from.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "../../node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../../node_modules/core-js/internals/is-array-iterator-method.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "../../node_modules/core-js/internals/is-constructor.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "../../node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../node_modules/core-js/internals/get-iterator-method.js");

var Array = global.Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/array-includes.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-includes.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../../node_modules/core-js/internals/array-iteration.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-iteration.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "../../node_modules/core-js/internals/array-method-has-species-support.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-method-has-species-support.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../../node_modules/core-js/internals/array-method-is-strict.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-method-is-strict.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "../../node_modules/core-js/internals/array-slice-simple.js":
/*!******************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-slice-simple.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/array-slice.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/array-slice.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "../../node_modules/core-js/internals/array-species-constructor.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-species-constructor.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "../../node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/array-species-create.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/array-species-create.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "../../node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../../node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/classof-raw.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/classof-raw.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/classof.js":
/*!*******************************************************!*\
  !*** ../../node_modules/core-js/internals/classof.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/collection-strong.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/collection-strong.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f);
var create = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../node_modules/core-js/internals/redefine-all.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../node_modules/core-js/internals/define-iterator.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var fastKey = (__webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js").fastKey);
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(Prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/collection-weak.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/collection-weak.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../node_modules/core-js/internals/redefine-all.js");
var getWeakData = (__webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js").getWeakData);
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../node_modules/core-js/internals/an-instance.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../node_modules/core-js/internals/iterate.js");
var ArrayIterationModule = __webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;
var find = ArrayIterationModule.find;
var findIndex = ArrayIterationModule.findIndex;
var splice = uncurryThis([].splice);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (store) {
  return store.frozen || (store.frozen = new UncaughtFrozenStore());
};

var UncaughtFrozenStore = function () {
  this.entries = [];
};

var findUncaughtFrozen = function (store, key) {
  return find(store.entries, function (it) {
    return it[0] === key;
  });
};

UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.entries.push([key, value]);
  },
  'delete': function (key) {
    var index = findIndex(this.entries, function (it) {
      return it[0] === key;
    });
    if (~index) splice(this.entries, index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        id: id++,
        frozen: undefined
      });
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var data = getWeakData(anObject(key), true);
      if (data === true) uncaughtFrozenStore(state).set(key, value);
      else data[state.id] = value;
      return that;
    };

    redefineAll(Prototype, {
      // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
      // https://tc39.es/ecma262/#sec-weakset.prototype.delete
      'delete': function (key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
        return data && hasOwn(data, state.id) && delete data[state.id];
      },
      // `{ WeakMap, WeakSet }.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-weakmap.prototype.has
      // https://tc39.es/ecma262/#sec-weakset.prototype.has
      has: function has(key) {
        var state = getInternalState(this);
        if (!isObject(key)) return false;
        var data = getWeakData(key);
        if (data === true) return uncaughtFrozenStore(state).has(key);
        return data && hasOwn(data, state.id);
      }
    });

    redefineAll(Prototype, IS_MAP ? {
      // `WeakMap.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.get
      get: function get(key) {
        var state = getInternalState(this);
        if (isObject(key)) {
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).get(key);
          return data ? data[state.id] : undefined;
        }
      },
      // `WeakMap.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-weakmap.prototype.set
      set: function set(key, value) {
        return define(this, key, value);
      }
    } : {
      // `WeakSet.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-weakset.prototype.add
      add: function add(value) {
        return define(this, value, true);
      }
    });

    return Constructor;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/collection.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/collection.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../node_modules/core-js/internals/an-instance.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../../node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/copy-constructor-properties.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/correct-prototype-getter.js":
/*!************************************************************************!*\
  !*** ../../node_modules/core-js/internals/correct-prototype-getter.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../../node_modules/core-js/internals/create-iterator-constructor.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IteratorPrototype = (__webpack_require__(/*! ../internals/iterators-core */ "../../node_modules/core-js/internals/iterators-core.js").IteratorPrototype);
var create = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/create-property-descriptor.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/core-js/internals/create-property-descriptor.js ***!
  \**************************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../../node_modules/core-js/internals/create-property.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/create-property.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/define-iterator.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/define-iterator.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
var FunctionName = __webpack_require__(/*! ../internals/function-name */ "../../node_modules/core-js/internals/function-name.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../../node_modules/core-js/internals/iterators-core.js");

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          redefine(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    redefine(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/descriptors.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/descriptors.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/internals/document-create-element.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/core-js/internals/document-create-element.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../../node_modules/core-js/internals/dom-iterables.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/dom-iterables.js ***!
  \*************************************************************/
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../../node_modules/core-js/internals/dom-token-list-prototype.js":
/*!************************************************************************!*\
  !*** ../../node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "../../node_modules/core-js/internals/engine-is-browser.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-is-browser.js ***!
  \*****************************************************************/
/***/ (function(module) {

module.exports = typeof window == 'object';


/***/ }),

/***/ "../../node_modules/core-js/internals/engine-is-ios-pebble.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-is-ios-pebble.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../node_modules/core-js/internals/engine-user-agent.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),

/***/ "../../node_modules/core-js/internals/engine-is-ios.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-is-ios.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "../../node_modules/core-js/internals/engine-is-node.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-is-node.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "../../node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../node_modules/core-js/internals/engine-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "../../node_modules/core-js/internals/engine-user-agent.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-user-agent.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../../node_modules/core-js/internals/engine-v8-version.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/engine-v8-version.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "../../node_modules/core-js/internals/enum-bug-keys.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/enum-bug-keys.js ***!
  \*************************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../../node_modules/core-js/internals/export.js":
/*!******************************************************!*\
  !*** ../../node_modules/core-js/internals/export.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/fails.js":
/*!*****************************************************!*\
  !*** ../../node_modules/core-js/internals/fails.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "../../node_modules/core-js/modules/es.regexp.exec.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../../node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');
var RegExpPrototype = RegExp.prototype;

module.exports = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/freezing.js":
/*!********************************************************!*\
  !*** ../../node_modules/core-js/internals/freezing.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "../../node_modules/core-js/internals/function-apply.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/function-apply.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../../node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "../../node_modules/core-js/internals/function-bind-context.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/core-js/internals/function-bind-context.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../../node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/internals/function-bind-native.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/function-bind-native.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "../../node_modules/core-js/internals/function-call.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/function-call.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../../node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/function-name.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/function-name.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "../../node_modules/core-js/internals/function-uncurry-this.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/core-js/internals/function-uncurry-this.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "../../node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "../../node_modules/core-js/internals/get-built-in.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/get-built-in.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../../node_modules/core-js/internals/get-iterator-method.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/core-js/internals/get-iterator-method.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "../../node_modules/core-js/internals/classof.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../node_modules/core-js/internals/get-method.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../../node_modules/core-js/internals/get-iterator.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/get-iterator.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../node_modules/core-js/internals/a-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../../node_modules/core-js/internals/try-to-string.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../node_modules/core-js/internals/get-iterator-method.js");

var TypeError = global.TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),

/***/ "../../node_modules/core-js/internals/get-method.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/get-method.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../node_modules/core-js/internals/a-callable.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/get-substitution.js":
/*!****************************************************************!*\
  !*** ../../node_modules/core-js/internals/get-substitution.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice(str, 0, position);
      case "'": return stringSlice(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "../../node_modules/core-js/internals/global.js":
/*!******************************************************!*\
  !*** ../../node_modules/core-js/internals/global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "../../node_modules/core-js/internals/has-own-property.js":
/*!****************************************************************!*\
  !*** ../../node_modules/core-js/internals/has-own-property.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/hidden-keys.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/hidden-keys.js ***!
  \***********************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/core-js/internals/host-report-errors.js":
/*!******************************************************************!*\
  !*** ../../node_modules/core-js/internals/host-report-errors.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/html.js":
/*!****************************************************!*\
  !*** ../../node_modules/core-js/internals/html.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../../node_modules/core-js/internals/ie8-dom-define.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/ie8-dom-define.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../../node_modules/core-js/internals/indexed-object.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/indexed-object.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../../node_modules/core-js/internals/inherit-if-required.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/core-js/internals/inherit-if-required.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/inspect-source.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/inspect-source.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../../node_modules/core-js/internals/internal-metadata.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/internal-metadata.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f);
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "../../node_modules/core-js/internals/object-get-own-property-names-external.js");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "../../node_modules/core-js/internals/object-is-extensible.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "../../node_modules/core-js/internals/freezing.js");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "../../node_modules/core-js/internals/internal-state.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/internal-state.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../../node_modules/core-js/internals/is-array-iterator-method.js":
/*!************************************************************************!*\
  !*** ../../node_modules/core-js/internals/is-array-iterator-method.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/is-array.js":
/*!********************************************************!*\
  !*** ../../node_modules/core-js/internals/is-array.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "../../node_modules/core-js/internals/is-callable.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/is-callable.js ***!
  \***********************************************************/
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "../../node_modules/core-js/internals/is-constructor.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/is-constructor.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../../node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "../../node_modules/core-js/internals/is-forced.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/is-forced.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../../node_modules/core-js/internals/is-object.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/is-object.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/is-pure.js":
/*!*******************************************************!*\
  !*** ../../node_modules/core-js/internals/is-pure.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "../../node_modules/core-js/internals/is-regexp.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/is-regexp.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "../../node_modules/core-js/internals/is-symbol.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/is-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../node_modules/core-js/internals/use-symbol-as-uid.js");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "../../node_modules/core-js/internals/iterate.js":
/*!*******************************************************!*\
  !*** ../../node_modules/core-js/internals/iterate.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "../../node_modules/core-js/internals/try-to-string.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../../node_modules/core-js/internals/is-array-iterator-method.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../node_modules/core-js/internals/length-of-array-like.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../node_modules/core-js/internals/object-is-prototype-of.js");
var getIterator = __webpack_require__(/*! ../internals/get-iterator */ "../../node_modules/core-js/internals/get-iterator.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../../node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../../node_modules/core-js/internals/iterator-close.js");

var TypeError = global.TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/iterator-close.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/iterator-close.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../node_modules/core-js/internals/get-method.js");

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/iterators-core.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/internals/iterators-core.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../../node_modules/core-js/internals/object-get-prototype-of.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  redefine(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../../node_modules/core-js/internals/iterators.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/iterators.js ***!
  \*********************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "../../node_modules/core-js/internals/length-of-array-like.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/length-of-array-like.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/math-sign.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/math-sign.js ***!
  \*********************************************************/
/***/ (function(module) {

// `Math.sign` method implementation
// https://tc39.es/ecma262/#sec-math.sign
// eslint-disable-next-line es/no-math-sign -- safe
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/microtask.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/microtask.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var macrotask = (__webpack_require__(/*! ../internals/task */ "../../node_modules/core-js/internals/task.js").set);
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../../node_modules/core-js/internals/engine-is-ios.js");
var IS_IOS_PEBBLE = __webpack_require__(/*! ../internals/engine-is-ios-pebble */ "../../node_modules/core-js/internals/engine-is-ios-pebble.js");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ "../../node_modules/core-js/internals/engine-is-webos-webkit.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../node_modules/core-js/internals/engine-is-node.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/native-promise-constructor.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/core-js/internals/native-promise-constructor.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "../../node_modules/core-js/internals/native-symbol.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/native-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "../../node_modules/core-js/internals/native-weak-map.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/native-weak-map.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../../node_modules/core-js/internals/new-promise-capability.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/core-js/internals/new-promise-capability.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../node_modules/core-js/internals/a-callable.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/not-a-regexp.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/not-a-regexp.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../../node_modules/core-js/internals/is-regexp.js");

var TypeError = global.TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-create.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-create.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "../../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-define-properties.js":
/*!************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-define-properties.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "../../node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-define-property.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-define-property.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "../../node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../node_modules/core-js/internals/to-property-key.js");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "../../node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../../node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
var $getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "../../node_modules/core-js/internals/object-get-own-property-names.js").f);
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "../../node_modules/core-js/internals/array-slice-simple.js");

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-get-own-property-names.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../../node_modules/core-js/internals/object-get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-get-prototype-of.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var Object = global.Object;
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-is-extensible.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-is-extensible.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ "../../node_modules/core-js/internals/array-buffer-non-extensible.js");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


/***/ }),

/***/ "../../node_modules/core-js/internals/object-is-prototype-of.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-is-prototype-of.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "../../node_modules/core-js/internals/object-keys-internal.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-keys-internal.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "../../node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../../node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-keys.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/object-keys.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "../../node_modules/core-js/internals/object-set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-set-prototype-of.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../../node_modules/core-js/internals/object-to-string.js":
/*!****************************************************************!*\
  !*** ../../node_modules/core-js/internals/object-to-string.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../../node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "../../node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../../node_modules/core-js/internals/own-keys.js":
/*!********************************************************!*\
  !*** ../../node_modules/core-js/internals/own-keys.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/perform.js":
/*!*******************************************************!*\
  !*** ../../node_modules/core-js/internals/perform.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/promise-resolve.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/promise-resolve.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "../../node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/queue.js":
/*!*****************************************************!*\
  !*** ../../node_modules/core-js/internals/queue.js ***!
  \*****************************************************/
/***/ (function(module) {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),

/***/ "../../node_modules/core-js/internals/redefine-all.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/redefine-all.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/redefine.js":
/*!********************************************************!*\
  !*** ../../node_modules/core-js/internals/redefine.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../../node_modules/core-js/internals/function-name.js").CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../../node_modules/core-js/internals/regexp-exec-abstract.js":
/*!********************************************************************!*\
  !*** ../../node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../../node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../../node_modules/core-js/internals/regexp-exec.js");

var TypeError = global.TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (isCallable(exec)) {
    var result = call(exec, R, S);
    if (result !== null) anObject(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call(regexpExec, R, S);
  throw TypeError('RegExp#exec called on incompatible receiver');
};


/***/ }),

/***/ "../../node_modules/core-js/internals/regexp-exec.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/regexp-exec.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "../../node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "../../node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../node_modules/core-js/internals/shared.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../../node_modules/core-js/internals/object-create.js");
var getInternalState = (__webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js").get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "../../node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "../../node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "../../node_modules/core-js/internals/regexp-flags.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/regexp-flags.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "../../node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "../../node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "../../node_modules/core-js/internals/require-object-coercible.js":
/*!************************************************************************!*\
  !*** ../../node_modules/core-js/internals/require-object-coercible.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/set-global.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/set-global.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/set-species.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/set-species.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/set-to-string-tag.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/set-to-string-tag.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f);
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn(target, TO_STRING_TAG)) {
    defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/shared-key.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/internals/shared-key.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../../node_modules/core-js/internals/shared-store.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/shared-store.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../../node_modules/core-js/internals/shared.js":
/*!******************************************************!*\
  !*** ../../node_modules/core-js/internals/shared.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.21.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.21.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "../../node_modules/core-js/internals/species-constructor.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/core-js/internals/species-constructor.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var aConstructor = __webpack_require__(/*! ../internals/a-constructor */ "../../node_modules/core-js/internals/a-constructor.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/string-multibyte.js":
/*!****************************************************************!*\
  !*** ../../node_modules/core-js/internals/string-multibyte.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../node_modules/core-js/internals/to-integer-or-infinity.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "../../node_modules/core-js/internals/string-trim-forced.js":
/*!******************************************************************!*\
  !*** ../../node_modules/core-js/internals/string-trim-forced.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../../node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../../node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "../../node_modules/core-js/internals/string-trim.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/string-trim.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../../node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "../../node_modules/core-js/internals/task.js":
/*!****************************************************!*\
  !*** ../../node_modules/core-js/internals/task.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "../../node_modules/core-js/internals/function-apply.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../../node_modules/core-js/internals/function-bind-context.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var html = __webpack_require__(/*! ../internals/html */ "../../node_modules/core-js/internals/html.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "../../node_modules/core-js/internals/array-slice.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../../node_modules/core-js/internals/document-create-element.js");
var validateArgumentsLength = __webpack_require__(/*! ../internals/validate-arguments-length */ "../../node_modules/core-js/internals/validate-arguments-length.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../../node_modules/core-js/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../node_modules/core-js/internals/engine-is-node.js");

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "../../node_modules/core-js/internals/to-absolute-index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/to-absolute-index.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/to-indexed-object.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/to-indexed-object.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../../node_modules/core-js/internals/to-integer-or-infinity.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \**********************************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/to-length.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/to-length.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../../node_modules/core-js/internals/to-object.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/to-object.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../../node_modules/core-js/internals/to-primitive.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/internals/to-primitive.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "../../node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/to-property-key.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/internals/to-property-key.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../../node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "../../node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "../../node_modules/core-js/internals/to-string-tag-support.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/core-js/internals/to-string-tag-support.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "../../node_modules/core-js/internals/to-string.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/internals/to-string.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../../node_modules/core-js/internals/classof.js");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/try-to-string.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/internals/try-to-string.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "../../node_modules/core-js/internals/uid.js":
/*!***************************************************!*\
  !*** ../../node_modules/core-js/internals/uid.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "../../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../../node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "../../node_modules/core-js/internals/validate-arguments-length.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/core-js/internals/validate-arguments-length.js ***!
  \*************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw TypeError('Not enough arguments');
  return passed;
};


/***/ }),

/***/ "../../node_modules/core-js/internals/well-known-symbol.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/internals/well-known-symbol.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../../node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../../node_modules/core-js/internals/whitespaces.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/internals/whitespaces.js ***!
  \***********************************************************/
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.concat.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.concat.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
var TypeError = global.TypeError;

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.filter.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.filter.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.find.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.find.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.from.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.from.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "../../node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.includes.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.includes.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var $includes = (__webpack_require__(/*! ../internals/array-includes */ "../../node_modules/core-js/internals/array-includes.js").includes);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.iterator.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.iterator.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "../../node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../../node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f);
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../node_modules/core-js/internals/define-iterator.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.join.js":
/*!***********************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.join.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../../node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../../node_modules/core-js/internals/array-method-is-strict.js");

var un$Join = uncurryThis([].join);

var ES3_STRINGS = IndexedObject != Object;
var STRICT_METHOD = arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
  join: function join(separator) {
    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.map.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.map.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var $map = (__webpack_require__(/*! ../internals/array-iteration */ "../../node_modules/core-js/internals/array-iteration.js").map);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.slice.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.slice.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../../node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "../../node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../node_modules/core-js/internals/length-of-array-like.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../../node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");
var un$Slice = __webpack_require__(/*! ../internals/array-slice */ "../../node_modules/core-js/internals/array-slice.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.array.splice.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.array.splice.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../../node_modules/core-js/internals/to-absolute-index.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../node_modules/core-js/internals/to-integer-or-infinity.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "../../node_modules/core-js/internals/length-of-array-like.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../../node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../../node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../../node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var TypeError = global.TypeError;
var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.function.name.js":
/*!**************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.function.name.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "../../node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "../../node_modules/core-js/modules/es.map.js":
/*!****************************************************!*\
  !*** ../../node_modules/core-js/modules/es.map.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "../../node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "../../node_modules/core-js/internals/collection-strong.js");

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "../../node_modules/core-js/modules/es.math.sign.js":
/*!**********************************************************!*\
  !*** ../../node_modules/core-js/modules/es.math.sign.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var sign = __webpack_require__(/*! ../internals/math-sign */ "../../node_modules/core-js/internals/math-sign.js");

// `Math.sign` method
// https://tc39.es/ecma262/#sec-math.sign
$({ target: 'Math', stat: true }, {
  sign: sign
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.object.keys.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.object.keys.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../../node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "../../node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.object.to-string.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.object.to-string.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../../node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "../../node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "../../node_modules/core-js/modules/es.promise.finally.js":
/*!****************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.promise.finally.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../../node_modules/core-js/internals/native-promise-constructor.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../../node_modules/core-js/internals/species-constructor.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../../node_modules/core-js/internals/promise-resolve.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromise && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromise.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromise)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromise.prototype['finally'] !== method) {
    redefine(NativePromise.prototype, 'finally', method, { unsafe: true });
  }
}


/***/ }),

/***/ "../../node_modules/core-js/modules/es.promise.js":
/*!********************************************************!*\
  !*** ../../node_modules/core-js/modules/es.promise.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../../node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../../node_modules/core-js/internals/get-built-in.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../../node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../node_modules/core-js/internals/redefine-all.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../../node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../node_modules/core-js/internals/set-species.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "../../node_modules/core-js/internals/a-callable.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../../node_modules/core-js/internals/an-instance.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../../node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../../node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../../node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../../node_modules/core-js/internals/species-constructor.js");
var task = (__webpack_require__(/*! ../internals/task */ "../../node_modules/core-js/internals/task.js").set);
var microtask = __webpack_require__(/*! ../internals/microtask */ "../../node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../../node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "../../node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../../node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../../node_modules/core-js/internals/perform.js");
var Queue = __webpack_require__(/*! ../internals/queue */ "../../node_modules/core-js/internals/queue.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var IS_BROWSER = __webpack_require__(/*! ../internals/engine-is-browser */ "../../node_modules/core-js/internals/engine-is-browser.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../../node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';

var getInternalState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var NativePromisePrototype = NativePromise && NativePromise.prototype;
var PromiseConstructor = NativePromise;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var SUBCLASSING = false;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromisePrototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    // eslint-disable-next-line unicorn/no-thenable -- safe
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function () {
        callReaction(reaction, state);
      });
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });

      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
      redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.regexp.constructor.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.regexp.constructor.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../../node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../../node_modules/core-js/internals/is-forced.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../../node_modules/core-js/internals/inherit-if-required.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "../../node_modules/core-js/internals/object-define-property.js").f);
var getOwnPropertyNames = (__webpack_require__(/*! ../internals/object-get-own-property-names */ "../../node_modules/core-js/internals/object-get-own-property-names.js").f);
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../node_modules/core-js/internals/object-is-prototype-of.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../../node_modules/core-js/internals/is-regexp.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "../../node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "../../node_modules/core-js/internals/regexp-sticky-helpers.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "../../node_modules/core-js/internals/has-own-property.js");
var enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js").enforce);
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../../node_modules/core-js/internals/set-species.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "../../node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "../../node_modules/core-js/internals/regexp-unsupported-ncg.js");

var MATCH = wellKnownSymbol('match');
var NativeRegExp = global.RegExp;
var RegExpPrototype = NativeRegExp.prototype;
var SyntaxError = global.SyntaxError;
var getFlags = uncurryThis(regExpFlags);
var exec = uncurryThis(RegExpPrototype.exec);
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);
// TODO: Use only propper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      result += chr + charAt(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt(string, index);
    if (chr === '\\') {
      chr = chr + charAt(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString(pattern);
    flags = flags === undefined ? '' : toString(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf(flags, 's') > -1;
      if (dotAll) flags = replace(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  var proxy = function (key) {
    key in RegExpWrapper || defineProperty(RegExpWrapper, key, {
      configurable: true,
      get: function () { return NativeRegExp[key]; },
      set: function (it) { NativeRegExp[key] = it; }
    });
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxy(keys[index++]);
  }

  RegExpPrototype.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype;
  redefine(global, 'RegExp', RegExpWrapper);
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');


/***/ }),

/***/ "../../node_modules/core-js/modules/es.regexp.exec.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.regexp.exec.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "../../node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.regexp.to-string.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.regexp.to-string.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "../../node_modules/core-js/internals/function-name.js").PROPER);
var redefine = __webpack_require__(/*! ../internals/redefine */ "../../node_modules/core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "../../node_modules/core-js/internals/object-is-prototype-of.js");
var $toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var regExpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "../../node_modules/core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var n$ToString = RegExpPrototype[TO_STRING];
var getFlags = uncurryThis(regExpFlags);

var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = $toString(R.source);
    var rf = R.flags;
    var f = $toString(rf === undefined && isPrototypeOf(RegExpPrototype, R) && !('flags' in RegExpPrototype) ? getFlags(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "../../node_modules/core-js/modules/es.string.includes.js":
/*!****************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.string.includes.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "../../node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "../../node_modules/core-js/internals/correct-is-regexp-logic.js");

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.string.iterator.js":
/*!****************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.string.iterator.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var charAt = (__webpack_require__(/*! ../internals/string-multibyte */ "../../node_modules/core-js/internals/string-multibyte.js").charAt);
var toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../../node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.string.match.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.string.match.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../node_modules/core-js/internals/get-method.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../../node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../../node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = toString(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.string.replace.js":
/*!***************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.string.replace.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "../../node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "../../node_modules/core-js/internals/is-callable.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "../../node_modules/core-js/internals/to-integer-or-infinity.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../../node_modules/core-js/internals/advance-string-index.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../node_modules/core-js/internals/get-method.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "../../node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../../node_modules/core-js/internals/regexp-exec-abstract.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);


/***/ }),

/***/ "../../node_modules/core-js/modules/es.string.split.js":
/*!*************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.string.split.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var apply = __webpack_require__(/*! ../internals/function-apply */ "../../node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "../../node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "../../node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../../node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../../node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../../node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../../node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../../node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "../../node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "../../node_modules/core-js/internals/get-method.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "../../node_modules/core-js/internals/array-slice-simple.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../../node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../../node_modules/core-js/internals/regexp-exec.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "../../node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../../node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var $push = [].push;
var exec = uncurryThis(/./.exec);
var push = uncurryThis($push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = toString(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return call(nativeSplit, string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = call(regexpExec, separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          push(output, stringSlice(string, lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) apply($push, output, arraySlice(match, 1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !exec(separatorCopy, '')) push(output, '');
      } else push(output, stringSlice(string, lastLastIndex));
      return output.length > lim ? arraySlice(output, 0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);

      if (res.done) return res.value;

      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "../../node_modules/core-js/modules/es.string.trim.js":
/*!************************************************************!*\
  !*** ../../node_modules/core-js/modules/es.string.trim.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../../node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "../../node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "../../node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "../../node_modules/core-js/modules/es.weak-map.js":
/*!*********************************************************!*\
  !*** ../../node_modules/core-js/modules/es.weak-map.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "../../node_modules/core-js/internals/function-uncurry-this.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../../node_modules/core-js/internals/redefine-all.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "../../node_modules/core-js/internals/internal-metadata.js");
var collection = __webpack_require__(/*! ../internals/collection */ "../../node_modules/core-js/internals/collection.js");
var collectionWeak = __webpack_require__(/*! ../internals/collection-weak */ "../../node_modules/core-js/internals/collection-weak.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../../node_modules/core-js/internals/is-object.js");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "../../node_modules/core-js/internals/object-is-extensible.js");
var enforceInternalState = (__webpack_require__(/*! ../internals/internal-state */ "../../node_modules/core-js/internals/internal-state.js").enforce);
var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../../node_modules/core-js/internals/native-weak-map.js");

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var InternalWeakMap;

var wrapper = function (init) {
  return function WeakMap() {
    return init(this, arguments.length ? arguments[0] : undefined);
  };
};

// `WeakMap` constructor
// https://tc39.es/ecma262/#sec-weakmap-constructor
var $WeakMap = collection('WeakMap', wrapper, collectionWeak);

// IE11 WeakMap frozen keys fix
// We can't use feature detection because it crash some old IE builds
// https://github.com/zloirock/core-js/issues/485
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
  InternalMetadataModule.enable();
  var WeakMapPrototype = $WeakMap.prototype;
  var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
  var nativeHas = uncurryThis(WeakMapPrototype.has);
  var nativeGet = uncurryThis(WeakMapPrototype.get);
  var nativeSet = uncurryThis(WeakMapPrototype.set);
  redefineAll(WeakMapPrototype, {
    'delete': function (key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeDelete(this, key) || state.frozen['delete'](key);
      } return nativeDelete(this, key);
    },
    has: function has(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) || state.frozen.has(key);
      } return nativeHas(this, key);
    },
    get: function get(key) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
      } return nativeGet(this, key);
    },
    set: function set(key, value) {
      if (isObject(key) && !isExtensible(key)) {
        var state = enforceInternalState(this);
        if (!state.frozen) state.frozen = new InternalWeakMap();
        nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
      } else nativeSet(this, key, value);
      return this;
    }
  });
}


/***/ }),

/***/ "../../node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "../../node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../../node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "../../node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../../node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "../../node_modules/core-js/internals/dom-token-list-prototype.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "../../node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../../node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');


/***/ }),

/***/ "../../node_modules/element-closest/browser.js":
/*!*****************************************************!*\
  !*** ../../node_modules/element-closest/browser.js ***!
  \*****************************************************/
/***/ (function() {

!function(e){var t=e.Element.prototype;"function"!=typeof t.matches&&(t.matches=t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=0;t[o]&&t[o]!==this;)++o;return Boolean(t[o])}),"function"!=typeof t.closest&&(t.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window);


/***/ }),

/***/ "../../node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************!*\
  !*** ../../node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = "object" === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ "./ts/applications/navigation.ts":
/*!***************************************!*\
  !*** ./ts/applications/navigation.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigateToPageSectionOnLoad": function() { return /* binding */ navigateToPageSectionOnLoad; }
/* harmony export */ });
/* unused harmony export navigateToPageSection */
var navigateToPageSection = function navigateToPageSection() {
    var hash = window.location.hash;
    if (hash === "")
        return;
    var element = document.querySelector(hash);
    if (!element)
        return;
    element.scrollIntoView();
};
var navigateToPageSectionOnLoad = function navigateToPageSectionOnLoad() {
    addEventListener("load", function () {
        return navigateToPageSection();
    });
};


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./js/Site2/app.ts ***!
  \*************************/
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "../../node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var Shared_ts_applications_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Shared/ts/applications/form */ "../../Shared-International/ts/applications/form.ts");
/* harmony import */ var Shared_ts_applications_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Shared/ts/applications/navigation */ "../../Shared-International/ts/applications/navigation.ts");
/* harmony import */ var Shared_ts_applications_template__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Shared/ts/applications/template */ "../../Shared-International/ts/applications/template.ts");
/* harmony import */ var ts_applications_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ts/applications/navigation */ "./ts/applications/navigation.ts");
/* harmony import */ var Shared_ts_components_status_screen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Shared/ts/components/status-screen */ "../../Shared-International/ts/components/status-screen.ts");
/* harmony import */ var Shared_ts_components_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Shared/ts/components/accordion */ "../../Shared-International/ts/components/accordion.ts");







// applications



 // components

 // utils
(0,Shared_ts_applications_template__WEBPACK_IMPORTED_MODULE_9__.initializeToolTip)();
(0,Shared_ts_applications_navigation__WEBPACK_IMPORTED_MODULE_8__.initializeNavById)("nav");
var testPasswordValidation = function testPasswordValidation(password, confirmPassword) {
    return confirmPassword.value === password.value;
};
var getValidationMessageByControl = function getValidationMessageByControl(control) {
    var _control$closest, _invalidText$textCont;
    var scope = (_control$closest = control.closest(".message")) != null ? _control$closest : control;
    if (!scope)
        return;
    var invalidText = scope.querySelector(".message__invalid");
    if (!invalidText)
        return;
    return (_invalidText$textCont = invalidText.textContent) == null ? void 0 : _invalidText$textCont.trim();
};
var validatePasswords = function validatePasswords(validateEvent) {
    var password = validateEvent.inputs.find(function (input) {
        return input.id === "Password";
    });
    if (!password)
        return;
    var confirmPassword = validateEvent.inputs.find(function (input) {
        return input.id === "ConfirmPassword";
    });
    if (!confirmPassword)
        return;
    confirmPassword.addEventListener("keyup", function (event) {
        testPasswordValidation(password, confirmPassword) ? validateEvent.setControlToValid(confirmPassword) : validateEvent.setControlToInvalid(confirmPassword);
    });
    window.onFormPostValidation = function (event) {
        var errors = [];
        if (!password.validity.valid) {
            var _getValidationMessage;
            errors.push({
                element: $(password),
                message: (_getValidationMessage = getValidationMessageByControl(password)) != null ? _getValidationMessage : "Password is required"
            });
        }
        if (!confirmPassword.validity.valid || !testPasswordValidation(password, confirmPassword)) {
            var _getValidationMessage2;
            errors.push({
                element: $(confirmPassword),
                message: (_getValidationMessage2 = getValidationMessageByControl(confirmPassword)) != null ? _getValidationMessage2 : "Passwords do not match"
            });
        }
        return errors;
    };
};
var initializeValidateEventWithStatusScreen = function initializeValidateEventWithStatusScreen() {
    var _validateEvent$submit;
    var form = document.querySelector("form");
    if (!form)
        return;
    var submit = form.querySelector('[type="submit"]');
    if (!submit)
        return;
    var validateEvent = (0,Shared_ts_applications_form__WEBPACK_IMPORTED_MODULE_7__.initializeValidateEvent)(form, submit, "required");
    validateEvent.inputs.filter(function (input) {
        return input.id === "Email";
    }).forEach(function (input) {
        return input.addEventListener("focusout", function (event) {
            input.value = input.value.toLowerCase();
        });
    });
    var statusScreen = new Shared_ts_components_status_screen__WEBPACK_IMPORTED_MODULE_11__["default"]();
    (_validateEvent$submit = validateEvent.submit) == null ? void 0 : _validateEvent$submit.addEventListener("click", function (event) {
        validateEvent.validateAll();
        validateEvent.setFocusOnInvalidControl();
        if (!validateEvent.isValidForm()) {
            event.preventDefault();
            return;
        }
        statusScreen.busy("Please wait...");
    });
    validatePasswords(validateEvent);
};
initializeValidateEventWithStatusScreen();
var initializeAccordions = function initializeAccordions() {
    var accordions = Array.from(document.querySelectorAll(".accordion"));
    accordions.forEach(function (accordion) {
        return new Shared_ts_components_accordion__WEBPACK_IMPORTED_MODULE_12__["default"](accordion);
    });
};
initializeAccordions();
(0,ts_applications_navigation__WEBPACK_IMPORTED_MODULE_10__.navigateToPageSectionOnLoad)();

}();
/******/ })()
;
//# sourceMappingURL=app.es5.js.map