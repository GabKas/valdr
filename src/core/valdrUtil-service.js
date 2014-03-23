angular.module('valdr')

  /**
   * Exposes util functions for dependency injection.
   */
  .factory('valdrUtil', function () {
    return {

      /**
       * @param value the value
       * @returns (boolean) true if the given value is not null, not undefined, not an empty string and not NaN
       */
      notEmpty: function (value) {
        return angular.isDefined(value) && value !== '' && value !== null && !this.isNaN(value);
      },

      /**
       * Creates a validation result.
       * @param valid validity of field
       * @param message the message key
       * @param messageParams the message parameters
       */
      result: function (valid, message, messageParams) {
        return {
          valid: valid,
          message: message,
          messageParams: messageParams
        };
      },

      isNaN: function (value) {
        // `NaN` as a primitive is the only value that is not equal to itself
        // (perform the [[Class]] check first to avoid errors with some host objects in IE)
        return this.isNumber(value) && value !== +value;
      },

      isNumber: function (value) {
        var type = typeof value;
        return type === 'number' ||
          value && type === 'object' && Object.prototype.toString.call(value) === '[object Number]' || false;
      },

      has: function (object, key) {
        return object ? Object.prototype.hasOwnProperty.call(object, key) : false;
      }
    };
  })
;