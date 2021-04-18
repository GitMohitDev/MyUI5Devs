sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(
	Controller
) {
	"use strict";

	return Controller.extend("empmasterdata.controller.MainView", {
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			
		},
		onPressAddEmployee:function(){			
			this.oRouter.navTo("addEmp");
		},

		onPressManageEmp: function(oEvent) {
			this.oRouter.navTo("employees");
		}
	});
});