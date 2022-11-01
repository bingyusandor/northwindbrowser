/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"nworders/NorthwindOrderBrowser/test/integration/NavigationJourneyPhone",
		"nworders/NorthwindOrderBrowser/test/integration/NotFoundJourneyPhone",
		"nworders/NorthwindOrderBrowser/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});