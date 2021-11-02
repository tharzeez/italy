  var objConfFormOnlineNearestCenter = {
    "form_id": "927dffc0-f00f-4236-b77d-6c9f92187059",
    "init_selector":"region",
    "nearest_center_label": "Seleziona il centro/città più vicino", 
    "nearest_center_placeholder": "Seleziona il centro/città più vicino",
    "nearest_center_hidden": "nearest_center", 
    "placeholder_center_empty_region" : "Seleziona prima una regione",
    "region_label": "Regione",
    "region_placeholder": "Digita e seleziona la tua regione",
    "region_hidden": "region", 
    "form_group_hidden" : "form_group", 
    
  }


hbspt.forms.create({
    region: "na1",
    portalId: "1982274",
    formId: "927dffc0-f00f-4236-b77d-6c9f92187059",
    redirectUrl: "http:\/\/info.wallstreet.it\/thankyou",
    // deactivateSmartForm: true,
    target: '#wse-regions-form',    
    // formData: {
    //     cssClass: 'hs-form stacked hs-custom-form'
    // }
});