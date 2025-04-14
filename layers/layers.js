var wms_layers = [];


        var lyr_googlemaps_0 = new ol.layer.Tile({
            'title': 'googlemaps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_sumaterabarat_1 = new ol.format.GeoJSON();
var features_sumaterabarat_1 = format_sumaterabarat_1.readFeatures(json_sumaterabarat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumaterabarat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumaterabarat_1.addFeatures(features_sumaterabarat_1);
var lyr_sumaterabarat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumaterabarat_1, 
                style: style_sumaterabarat_1,
                popuplayertitle: 'sumatera barat',
                interactive: true,
                title: '<img src="styles/legend/sumaterabarat_1.png" /> sumatera barat'
            });
var format_Padangadm_2 = new ol.format.GeoJSON();
var features_Padangadm_2 = format_Padangadm_2.readFeatures(json_Padangadm_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padangadm_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padangadm_2.addFeatures(features_Padangadm_2);
var lyr_Padangadm_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Padangadm_2, 
                style: style_Padangadm_2,
                popuplayertitle: 'Padang adm',
                interactive: true,
                title: '<img src="styles/legend/Padangadm_2.png" /> Padang adm'
            });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_databanjirkelompok_4 = new ol.format.GeoJSON();
var features_databanjirkelompok_4 = format_databanjirkelompok_4.readFeatures(json_databanjirkelompok_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_databanjirkelompok_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_databanjirkelompok_4.addFeatures(features_databanjirkelompok_4);
var lyr_databanjirkelompok_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_databanjirkelompok_4, 
                style: style_databanjirkelompok_4,
                popuplayertitle: 'data banjir kelompok',
                interactive: true,
                title: '<img src="styles/legend/databanjirkelompok_4.png" /> data banjir kelompok'
            });

lyr_googlemaps_0.setVisible(true);lyr_sumaterabarat_1.setVisible(true);lyr_Padangadm_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_databanjirkelompok_4.setVisible(true);
var layersList = [lyr_googlemaps_0,lyr_sumaterabarat_1,lyr_Padangadm_2,lyr_Sungai_3,lyr_databanjirkelompok_4];
lyr_sumaterabarat_1.set('fieldAliases', {'No': 'No', 'Kode_Prov': 'Kode_Prov', 'Provinsi': 'Provinsi', });
lyr_Padangadm_2.set('fieldAliases', {'Id': 'Id', 'kecamatan': 'kecamatan', 'pd_Lk_2022': 'pd_Lk_2022', 'Pd_Pr_2022': 'Pd_Pr_2022', 'Total_Pd': 'Total_Pd', });
lyr_Sungai_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_databanjirkelompok_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'kecamatan': 'kecamatan', 'path': 'path', });
lyr_sumaterabarat_1.set('fieldImages', {'No': '', 'Kode_Prov': '', 'Provinsi': '', });
lyr_Padangadm_2.set('fieldImages', {'Id': 'Range', 'kecamatan': 'TextEdit', 'pd_Lk_2022': 'TextEdit', 'Pd_Pr_2022': 'TextEdit', 'Total_Pd': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_databanjirkelompok_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'kecamatan': '', 'path': 'TextEdit', });
lyr_sumaterabarat_1.set('fieldLabels', {'No': 'no label', 'Kode_Prov': 'no label', 'Provinsi': 'no label', });
lyr_Padangadm_2.set('fieldLabels', {'Id': 'no label', 'kecamatan': 'no label', 'pd_Lk_2022': 'no label', 'Pd_Pr_2022': 'no label', 'Total_Pd': 'no label', });
lyr_Sungai_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_databanjirkelompok_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'kecamatan': 'no label', 'path': 'no label', });
lyr_databanjirkelompok_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});