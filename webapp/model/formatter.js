sap.ui.define([
	"sap/ui/core/format/NumberFormat",
	"sap/ui/core/format/DateFormat"
	], function (NumberFormat, DateFormat) {
		"use strict";

		return {
			/**
			 * Rounds the currency value to 2 digits
			 *
			 * @public
			 * @param {string} sValue value to be formatted
			 * @returns {string} formatted currency value with 2 digits
			 */
			currencyValue : function (sValue) {
				if (!sValue) {
					return "";
				}

				return parseFloat(sValue).toFixed(2);
			},
			
			/* ----------------------------------------------------------------------------------
				date conversion
			---------------------------------------------------------------------------------- */
			convertDate : function(oDate) {
				if (oDate !== null) {
					var oDateInstance = DateFormat.getDateInstance({style: 'full'});
					return oDateInstance.format(oDate);
				}
			},
			/* ----------------------------------------------------------------------------------
				percent conversion
			---------------------------------------------------------------------------------- */
			convertPercent : function(oPercent) {
				if ((oPercent !== null) && (oPercent !== 0)) {
					return oPercent * 100 + "%";
				} else {
					return "-";
				}
			}
		};

	}
);