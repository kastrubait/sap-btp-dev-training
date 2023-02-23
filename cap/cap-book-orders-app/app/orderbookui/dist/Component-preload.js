//@ui5-bundle orderbookui/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"orderbookui/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("orderbookui.Component",{metadata:{manifest:"json"}})});
},
	"orderbookui/i18n/i18n.properties":'# This is the resource bundle for orderbookui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Book Orders\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"orderbookui/manifest.json":'{"_version":"1.49.0","sap.app":{"id":"orderbookui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.9.0","toolsId":"a2c3900d-b472-4834-b92a-d37f93e404d1"},"dataSources":{"mainService":{"uri":"order-book/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.111.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"orderbookui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"BookOrdersList","target":"BookOrdersList"},{"pattern":"BookOrders({key}):?query:","name":"BookOrdersObjectPage","target":"BookOrdersObjectPage"}],"targets":{"BookOrdersList":{"type":"Component","id":"BookOrdersList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"BookOrders","variantManagement":"Page","navigation":{"BookOrders":{"detail":{"route":"BookOrdersObjectPage"}}}}}},"BookOrdersObjectPage":{"type":"Component","id":"BookOrdersObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"BookOrders"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
}});
