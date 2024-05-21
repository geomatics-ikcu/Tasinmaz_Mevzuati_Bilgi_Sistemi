var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_almaalan_1 = new ol.format.GeoJSON();
var features_almaalan_1 = format_almaalan_1.readFeatures(json_almaalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_almaalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_almaalan_1.addFeatures(features_almaalan_1);
var lyr_almaalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_almaalan_1, 
                style: style_almaalan_1,
                popuplayertitle: "Çalışma alanı",
                interactive: false,
                    title: '<img src="styles/legend/almaalan_1.png" /> Çalışma alanı'
                });
var format_Parsel_2 = new ol.format.GeoJSON();
var features_Parsel_2 = format_Parsel_2.readFeatures(json_Parsel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parsel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parsel_2.addFeatures(features_Parsel_2);
var lyr_Parsel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parsel_2, 
                style: style_Parsel_2,
                popuplayertitle: "Parsel",
                interactive: true,
                    title: '<img src="styles/legend/Parsel_2.png" /> Parsel'
                });
var format_Yapi_3 = new ol.format.GeoJSON();
var features_Yapi_3 = format_Yapi_3.readFeatures(json_Yapi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yapi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yapi_3.addFeatures(features_Yapi_3);
var lyr_Yapi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yapi_3, 
                style: style_Yapi_3,
                popuplayertitle: "Yapi",
                interactive: true,
                    title: '<img src="styles/legend/Yapi_3.png" /> Yapı'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_almaalan_1.setVisible(true);lyr_Parsel_2.setVisible(true);lyr_Yapi_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_almaalan_1,lyr_Parsel_2,lyr_Yapi_3];
lyr_almaalan_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ADINUMARAS': 'ADINUMARAS', 'Area': 'Area', 'area_ha': 'area_ha', 'Area_km2': 'Area_km2', 'Area_last': 'Area_last', 'area_last_': 'area_last_', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Parsel_2.set('fieldAliases', {'fid': 'fid', 'Öznitelik bilgisi': 'Öznitelik bilgisi', 'Taşınmazın maliki': 'Taşınmazın maliki', 'Malik mevzuatı': 'Malik mevzuatı', 'Taşınmazın konumu': 'Taşınmazın konumu', 'Konum mevzuatı': 'Konum mevzuatı', 'Taşınmazın türü': 'Taşınmazın türü', 'Tür mevzuatı': 'Tür mevzuatı', 'Taşınmazın kullanım amacı': 'Taşınmazın kullanım amacı', 'Kullanım amacı mevzuatı ': 'Kullanım amacı mevzuatı ', 'Taşınmazın edinim şekli': 'Taşınmazın edinim şekli', 'Edinim şekli mevzuatı': 'Edinim şekli mevzuatı', 'Taşınmazın yükü': 'Taşınmazın yükü', 'Yük mevzuatı': 'Yük mevzuatı', });
lyr_Yapi_3.set('fieldAliases', {'fid': 'fid', 'Öznitelik bilgisi': 'Öznitelik bilgisi', 'Taşınmazın maliki': 'Taşınmazın maliki', 'Malik mevzuatı': 'Malik mevzuatı', 'Taşınmazın konumu': 'Taşınmazın konumu', 'Konum mevzuatı': 'Konum mevzuatı', 'Taşınmazın türü': 'Taşınmazın türü', 'Tür mevzuatı': 'Tür mevzuatı', 'Taşınmazın kullanım amacı': 'Taşınmazın kullanım amacı', 'Kullanım amacı mevzuatı': 'Kullanım amacı mevzuatı', 'Taşınmazın edinim şekli': 'Taşınmazın edinim şekli', 'Edinim şekli mevzuatı': 'Edinim şekli mevzuatı', 'Taşınmazın yükü': 'Taşınmazın yükü', 'Yük mevzuatı': 'Yük mevzuatı', });
lyr_almaalan_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ADINUMARAS': 'TextEdit', 'Area': 'TextEdit', 'area_ha': 'TextEdit', 'Area_km2': 'TextEdit', 'Area_last': 'TextEdit', 'area_last_': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parsel_2.set('fieldImages', {'fid': 'TextEdit', 'Öznitelik bilgisi': 'TextEdit', 'Taşınmazın maliki': 'TextEdit', 'Malik mevzuatı': 'TextEdit', 'Taşınmazın konumu': 'TextEdit', 'Konum mevzuatı': 'TextEdit', 'Taşınmazın türü': 'TextEdit', 'Tür mevzuatı': 'TextEdit', 'Taşınmazın kullanım amacı': 'TextEdit', 'Kullanım amacı mevzuatı ': 'TextEdit', 'Taşınmazın edinim şekli': 'TextEdit', 'Edinim şekli mevzuatı': 'TextEdit', 'Taşınmazın yükü': 'TextEdit', 'Yük mevzuatı': 'TextEdit', });
lyr_Yapi_3.set('fieldImages', {'fid': 'TextEdit', 'Öznitelik bilgisi': 'TextEdit', 'Taşınmazın maliki': 'TextEdit', 'Malik mevzuatı': 'TextEdit', 'Taşınmazın konumu': 'TextEdit', 'Konum mevzuatı': 'TextEdit', 'Taşınmazın türü': 'TextEdit', 'Tür mevzuatı': 'TextEdit', 'Taşınmazın kullanım amacı': 'TextEdit', 'Kullanım amacı mevzuatı': 'TextEdit', 'Taşınmazın edinim şekli': 'TextEdit', 'Edinim şekli mevzuatı': 'TextEdit', 'Taşınmazın yükü': 'TextEdit', 'Yük mevzuatı': 'TextEdit', });
lyr_almaalan_1.set('fieldLabels', {'fid': 'inline label - always visible', 'OBJECTID': 'inline label - always visible', 'ADINUMARAS': 'inline label - always visible', 'Area': 'inline label - always visible', 'area_ha': 'inline label - always visible', 'Area_km2': 'inline label - always visible', 'Area_last': 'inline label - always visible', 'area_last_': 'inline label - always visible', 'Shape_Length': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_Parsel_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Öznitelik bilgisi': 'inline label - always visible', 'Taşınmazın maliki': 'inline label - always visible', 'Malik mevzuatı': 'inline label - always visible', 'Taşınmazın konumu': 'inline label - always visible', 'Konum mevzuatı': 'inline label - always visible', 'Taşınmazın türü': 'inline label - always visible', 'Tür mevzuatı': 'inline label - always visible', 'Taşınmazın kullanım amacı': 'inline label - always visible', 'Kullanım amacı mevzuatı ': 'inline label - always visible', 'Taşınmazın edinim şekli': 'inline label - always visible', 'Edinim şekli mevzuatı': 'inline label - always visible', 'Taşınmazın yükü': 'inline label - always visible', 'Yük mevzuatı': 'inline label - always visible', });
lyr_Yapi_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Öznitelik bilgisi': 'inline label - always visible', 'Taşınmazın maliki': 'inline label - always visible', 'Malik mevzuatı': 'inline label - always visible', 'Taşınmazın konumu': 'inline label - always visible', 'Konum mevzuatı': 'inline label - always visible', 'Taşınmazın türü': 'inline label - always visible', 'Tür mevzuatı': 'inline label - always visible', 'Taşınmazın kullanım amacı': 'inline label - always visible', 'Kullanım amacı mevzuatı': 'inline label - always visible', 'Taşınmazın edinim şekli': 'inline label - always visible', 'Edinim şekli mevzuatı': 'inline label - always visible', 'Taşınmazın yükü': 'inline label - always visible', 'Yük mevzuatı': 'inline label - always visible', });
lyr_Yapi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});