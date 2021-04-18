sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
], function (
	Controller,
	History,
	JSONModel
) {
	"use strict";

	return Controller.extend("empmasterdata.controller.employees", {
		onInit: function() {
			//set data model
			// var oModel = new JSONModel();
			// oModel.loadData("model/Employees.json")
			// this.getView().setModel(oModel);
		},
		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (!sPreviousHash) {
				window.history.go(-1);
			}
			else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}
		},

		onPressEmployee: function(oEvent) {
			
		},

		onDisplay: function(oEvent) {
			
		},

		onEdit: function(oEvent) {
			
		},

		onDelete: function(oEvent) {
			
		}
	});
});