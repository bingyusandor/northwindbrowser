/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Orders in the list
// * All 3 Orders have at least one Order_Details

sap.ui.require([
	"sap/ui/test/Opa5",
	"nworders/NorthwindOrderBrowser/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"nworders/NorthwindOrderBrowser/test/integration/pages/App",
	"nworders/NorthwindOrderBrowser/test/integration/pages/Browser",
	"nworders/NorthwindOrderBrowser/test/integration/pages/Master",
	"nworders/NorthwindOrderBrowser/test/integration/pages/Detail",
	"nworders/NorthwindOrderBrowser/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "nworders.NorthwindOrderBrowser.view."
	});

	sap.ui.require([
		"nworders/NorthwindOrderBrowser/test/integration/MasterJourney",
		"nworders/NorthwindOrderBrowser/test/integration/NavigationJourney",
		"nworders/NorthwindOrderBrowser/test/integration/NotFoundJourney",
		"nworders/NorthwindOrderBrowser/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});