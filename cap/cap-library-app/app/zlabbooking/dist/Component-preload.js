//@ui5-bundle zlab/zlabbooking/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"zlab/zlabbooking/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("zlab.zlabbooking.Component",{metadata:{manifest:"json"}})});
},
	"zlab/zlabbooking/i18n/i18n.properties":'# This is the resource bundle for zlab.zlabbooking\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Bookings\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"zlab/zlabbooking/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"zlab.zlabbooking","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.8.6","toolsId":"82a69e87-81a6-4014-b8a2-f2403d18b5c6"},"dataSources":{"mainService":{"uri":"library/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"zlab-zlabbooking-inbound":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"Booking","action":"manage","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","icon":"sap-icon://course-book","indicatorDataSource":{"dataSource":"mainService","path":"Booking/$count","refresh":10}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.110.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"zlab.zlabbooking.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"BookingList","target":"BookingList"},{"pattern":"Booking({key}):?query:","name":"BookingObjectPage","target":"BookingObjectPage"}],"targets":{"BookingList":{"type":"Component","id":"BookingList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Booking","variantManagement":"Page","navigation":{"Booking":{"detail":{"route":"BookingObjectPage"}}}}}},"BookingObjectPage":{"type":"Component","id":"BookingObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Booking"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"caplibraty"}}'
}});
