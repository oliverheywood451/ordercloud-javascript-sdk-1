/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Sdk', 'model/VariantInventory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'), require('./VariantInventory'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Variant = factory(root.OrderCloud.Sdk, root.OrderCloud.VariantInventory);
  }
}(this, function(Sdk, VariantInventory) {
  'use strict';




  /**
   * The Variant model module.
   * @module model/Variant
   */

  /**
   * Constructs a new <code>Variant</code>.
   * @alias module:model/Variant
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Variant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Variant} obj Optional instance to populate.
   * @return {module:model/Variant} The populated <code>Variant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = Sdk.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = Sdk.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = Sdk.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Active')) {
        obj['Active'] = Sdk.convertToType(data['Active'], 'Boolean');
      }
      if (data.hasOwnProperty('ShipWeight')) {
        obj['ShipWeight'] = Sdk.convertToType(data['ShipWeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipHeight')) {
        obj['ShipHeight'] = Sdk.convertToType(data['ShipHeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipWidth')) {
        obj['ShipWidth'] = Sdk.convertToType(data['ShipWidth'], 'Number');
      }
      if (data.hasOwnProperty('ShipLength')) {
        obj['ShipLength'] = Sdk.convertToType(data['ShipLength'], 'Number');
      }
      if (data.hasOwnProperty('Inventory')) {
        obj['Inventory'] = VariantInventory.constructFromObject(data['Inventory']);
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = Sdk.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Boolean} Active
   */
  exports.prototype['Active'] = undefined;
  /**
   * @member {Number} ShipWeight
   */
  exports.prototype['ShipWeight'] = undefined;
  /**
   * @member {Number} ShipHeight
   */
  exports.prototype['ShipHeight'] = undefined;
  /**
   * @member {Number} ShipWidth
   */
  exports.prototype['ShipWidth'] = undefined;
  /**
   * @member {Number} ShipLength
   */
  exports.prototype['ShipLength'] = undefined;
  /**
   * @member {module:model/VariantInventory} Inventory
   */
  exports.prototype['Inventory'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


