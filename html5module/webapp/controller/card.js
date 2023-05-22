sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";
	return Control.extend("ui5app.controller.card", {
		metadata : {

			properties : {
				title: {type: "string"},
				href: 	{type : "string"}
			},
			events : {
				contextMenu : {
					parameters : {
						event : {type : "string"}
					}
				}
			}
		},
		_onContextMenu : function(event){
			this.fireEvent("contextMenu", {
				event: event
			});

		},
		init : function () {
		},
		renderer : function (oRm, oControl) {
            oRm.openStart("div", oControl);
			oRm.class("prevent-select");
			oRm.openEnd();

			oRm.openStart("a");
			oRm.attr("href",oControl.getHref())
			oRm.attr("contextMenu",oControl._onContextMenu())
			oRm.attr("tabindex", -1);
			oRm.class("wrappedAnchor")
			oRm.openEnd();
			
			oRm.openStart("div");
			oRm.class("card")
			oRm.attr("tabindex", -1);
			oRm.openEnd();
			oRm.text(oControl.getTitle())
			oRm.close("div")

			oRm.close("a")
			oRm.close("div");
		}
	});
});


