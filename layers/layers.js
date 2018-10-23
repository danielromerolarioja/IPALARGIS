var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_Tenencia_Agua_FueradelTerreno_0 = new ol.format.GeoJSON();
var features_Tenencia_Agua_FueradelTerreno_0 = format_Tenencia_Agua_FueradelTerreno_0.readFeatures(json_Tenencia_Agua_FueradelTerreno_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tenencia_Agua_FueradelTerreno_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tenencia_Agua_FueradelTerreno_0.addFeatures(features_Tenencia_Agua_FueradelTerreno_0);var lyr_Tenencia_Agua_FueradelTerreno_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tenencia_Agua_FueradelTerreno_0, 
                style: style_Tenencia_Agua_FueradelTerreno_0,
    title: 'Tenencia_Agua_Fuera del Terreno<br />\
    <img src="styles/legend/Tenencia_Agua_FueradelTerreno_0_0.png" />  0 - 12 <br />\
    <img src="styles/legend/Tenencia_Agua_FueradelTerreno_0_1.png" />  12 - 24 <br />\
    <img src="styles/legend/Tenencia_Agua_FueradelTerreno_0_2.png" />  24 - 36 <br />\
    <img src="styles/legend/Tenencia_Agua_FueradelTerreno_0_3.png" />  36 - 48 <br />\
    <img src="styles/legend/Tenencia_Agua_FueradelTerreno_0_4.png" />  48 - 60 <br />'
        });var format_Tenencia_Agua_FueradelaVivienda_1 = new ol.format.GeoJSON();
var features_Tenencia_Agua_FueradelaVivienda_1 = format_Tenencia_Agua_FueradelaVivienda_1.readFeatures(json_Tenencia_Agua_FueradelaVivienda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tenencia_Agua_FueradelaVivienda_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tenencia_Agua_FueradelaVivienda_1.addFeatures(features_Tenencia_Agua_FueradelaVivienda_1);var lyr_Tenencia_Agua_FueradelaVivienda_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tenencia_Agua_FueradelaVivienda_1, 
                style: style_Tenencia_Agua_FueradelaVivienda_1,
    title: 'Tenencia_Agua_Fuera de la Vivienda<br />\
    <img src="styles/legend/Tenencia_Agua_FueradelaVivienda_1_0.png" />  0 - 16 <br />\
    <img src="styles/legend/Tenencia_Agua_FueradelaVivienda_1_1.png" />  16 - 32 <br />\
    <img src="styles/legend/Tenencia_Agua_FueradelaVivienda_1_2.png" />  32 - 48 <br />\
    <img src="styles/legend/Tenencia_Agua_FueradelaVivienda_1_3.png" />  48 - 64 <br />\
    <img src="styles/legend/Tenencia_Agua_FueradelaVivienda_1_4.png" />  64 - 80 <br />'
        });var format_Tenencia_Agua_En_Vivienda_2 = new ol.format.GeoJSON();
var features_Tenencia_Agua_En_Vivienda_2 = format_Tenencia_Agua_En_Vivienda_2.readFeatures(json_Tenencia_Agua_En_Vivienda_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tenencia_Agua_En_Vivienda_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tenencia_Agua_En_Vivienda_2.addFeatures(features_Tenencia_Agua_En_Vivienda_2);var lyr_Tenencia_Agua_En_Vivienda_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tenencia_Agua_En_Vivienda_2, 
                style: style_Tenencia_Agua_En_Vivienda_2,
    title: 'Tenencia_Agua_En_Vivienda<br />\
    <img src="styles/legend/Tenencia_Agua_En_Vivienda_2_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Tenencia_Agua_En_Vivienda_2_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Tenencia_Agua_En_Vivienda_2_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Tenencia_Agua_En_Vivienda_2_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Tenencia_Agua_En_Vivienda_2_4.png" />  80 - 100 <br />'
        });

lyr_Tenencia_Agua_FueradelTerreno_0.setVisible(true);lyr_Tenencia_Agua_FueradelaVivienda_1.setVisible(true);lyr_Tenencia_Agua_En_Vivienda_2.setVisible(true);
var layersList = [baseLayer,lyr_Tenencia_Agua_FueradelTerreno_0,lyr_Tenencia_Agua_FueradelaVivienda_1,lyr_Tenencia_Agua_En_Vivienda_2];
lyr_Tenencia_Agua_FueradelTerreno_0.set('fieldAliases', {'toponimo_i': 'toponimo_i', 'link': 'link', 'Dentro_Viv': 'Dentro_Viv', 'En_Terreno': 'En_Terreno', 'Fuera_Terr': 'Fuera_Terr', 'Total': 'Total', 'Por_Den_Vi': 'Por_Den_Vi', 'Por_En_Ter': 'Por_En_Ter', 'Por_Fue_Te': 'Por_Fue_Te', });
lyr_Tenencia_Agua_FueradelaVivienda_1.set('fieldAliases', {'toponimo_i': 'toponimo_i', 'link': 'link', 'Dentro_Viv': 'Dentro_Viv', 'En_Terreno': 'En_Terreno', 'Fuera_Terr': 'Fuera_Terr', 'Total': 'Total', 'Por_Den_Vi': 'Por_Den_Vi', 'Por_En_Ter': 'Por_En_Ter', 'Por_Fue_Te': 'Por_Fue_Te', });
lyr_Tenencia_Agua_En_Vivienda_2.set('fieldAliases', {'toponimo_i': 'toponimo_i', 'link': 'link', 'Dentro_Viv': 'Dentro_Viv', 'En_Terreno': 'En_Terreno', 'Fuera_Terr': 'Fuera_Terr', 'Total': 'Total', 'Por_Den_Vi': 'Por_Den_Vi', 'Por_En_Ter': 'Por_En_Ter', 'Por_Fue_Te': 'Por_Fue_Te', });
lyr_Tenencia_Agua_FueradelTerreno_0.set('fieldImages', {'toponimo_i': 'TextEdit', 'link': 'TextEdit', 'Dentro_Viv': 'TextEdit', 'En_Terreno': 'TextEdit', 'Fuera_Terr': 'TextEdit', 'Total': 'TextEdit', 'Por_Den_Vi': 'TextEdit', 'Por_En_Ter': 'TextEdit', 'Por_Fue_Te': 'TextEdit', });
lyr_Tenencia_Agua_FueradelaVivienda_1.set('fieldImages', {'toponimo_i': 'TextEdit', 'link': 'TextEdit', 'Dentro_Viv': 'TextEdit', 'En_Terreno': 'TextEdit', 'Fuera_Terr': 'TextEdit', 'Total': 'TextEdit', 'Por_Den_Vi': 'TextEdit', 'Por_En_Ter': 'TextEdit', 'Por_Fue_Te': 'TextEdit', });
lyr_Tenencia_Agua_En_Vivienda_2.set('fieldImages', {'toponimo_i': 'TextEdit', 'link': 'TextEdit', 'Dentro_Viv': 'TextEdit', 'En_Terreno': 'TextEdit', 'Fuera_Terr': 'TextEdit', 'Total': 'TextEdit', 'Por_Den_Vi': 'TextEdit', 'Por_En_Ter': 'TextEdit', 'Por_Fue_Te': 'TextEdit', });
lyr_Tenencia_Agua_FueradelTerreno_0.set('fieldLabels', {'toponimo_i': 'no label', 'link': 'no label', 'Dentro_Viv': 'no label', 'En_Terreno': 'no label', 'Fuera_Terr': 'no label', 'Total': 'no label', 'Por_Den_Vi': 'no label', 'Por_En_Ter': 'no label', 'Por_Fue_Te': 'no label', });
lyr_Tenencia_Agua_FueradelaVivienda_1.set('fieldLabels', {'toponimo_i': 'no label', 'link': 'no label', 'Dentro_Viv': 'no label', 'En_Terreno': 'no label', 'Fuera_Terr': 'no label', 'Total': 'no label', 'Por_Den_Vi': 'no label', 'Por_En_Ter': 'no label', 'Por_Fue_Te': 'no label', });
lyr_Tenencia_Agua_En_Vivienda_2.set('fieldLabels', {'toponimo_i': 'no label', 'link': 'no label', 'Dentro_Viv': 'no label', 'En_Terreno': 'no label', 'Fuera_Terr': 'no label', 'Total': 'no label', 'Por_Den_Vi': 'no label', 'Por_En_Ter': 'no label', 'Por_Fue_Te': 'no label', });
lyr_Tenencia_Agua_En_Vivienda_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});