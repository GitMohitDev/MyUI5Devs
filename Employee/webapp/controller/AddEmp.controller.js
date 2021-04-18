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

	return Controller.extend("empmasterdata.controller.AddEmp", {
		onInit: function () {
			// set data model on view
			var oData = {
				employee: {
					"uname": "",
					"email": "",
					"gender": "",
					"empType": "",
					"dob": "",
					"doj": ""
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

		},
		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (!sPreviousHash) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}
		},

		onSave: function (oEvent) {
			debugger;
			var modelData = this.getView().getModel().getData().employee;
			var uname = modelData.uname;
			var email = modelData.email;
			var gender = modelData.gender;
			var empType = modelData.empType;
			var dob = modelData.dob;
			var doj = modelData.doj;

			var oData = {
				"empid": "2",
				"uname": uname,
				"email": email,
				"gender": gender,
				"empType": empType,
				"dob": dob,
				"doj": doj
			};

			var oModelSave = this.getView().getModel("employees");
			oModelSave.getData().Employees.push(oData);
		}
	});
});