sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ui5app/model/Service",
	"sap/m/MessageBox"
], function (Controller, Service, MessageBox) {

	return Controller.extend("ui5app.controller.Main", {

		onInit: function (evt) {
			Service._ODataModel = this.getOwnerComponent().getModel("OData");
		},
		onContextMenu:function(event){
			console.log("right click fired" + event);
		},
		fetchNorthwindData: function (event) {
			Service.readCustomers(function(data){
                MessageBox.show(data.Country, {
                    icon: MessageBox.Icon.SUCCESS,
                    title: data.CompanyName,
                    details: data.Address + ', '+ data.City,
                    actions: [MessageBox.Action.OK]
                });
            },function(error){
                console.log(error);
            });
		}

	});

});