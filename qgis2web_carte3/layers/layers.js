var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ContourIRIS_3 = new ol.format.GeoJSON();
var features_ContourIRIS_3 = format_ContourIRIS_3.readFeatures(json_ContourIRIS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContourIRIS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourIRIS_3.addFeatures(features_ContourIRIS_3);
var lyr_ContourIRIS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ContourIRIS_3, 
                style: style_ContourIRIS_3,
                popuplayertitle: 'Contour-IRIS',
                interactive: true,
                title: '<img src="styles/legend/ContourIRIS_3.png" /> Contour-IRIS'
            });
var format_Carreauxpopulation15minespacevert_4 = new ol.format.GeoJSON();
var features_Carreauxpopulation15minespacevert_4 = format_Carreauxpopulation15minespacevert_4.readFeatures(json_Carreauxpopulation15minespacevert_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carreauxpopulation15minespacevert_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreauxpopulation15minespacevert_4.addFeatures(features_Carreauxpopulation15minespacevert_4);
var lyr_Carreauxpopulation15minespacevert_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carreauxpopulation15minespacevert_4, 
                style: style_Carreauxpopulation15minespacevert_4,
                popuplayertitle: 'Carreaux population-15min-espace vert',
                interactive: true,
                title: '<img src="styles/legend/Carreauxpopulation15minespacevert_4.png" /> Carreaux population-15min-espace vert'
            });
var format_Carreauxpopulation10minespacevert_5 = new ol.format.GeoJSON();
var features_Carreauxpopulation10minespacevert_5 = format_Carreauxpopulation10minespacevert_5.readFeatures(json_Carreauxpopulation10minespacevert_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carreauxpopulation10minespacevert_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreauxpopulation10minespacevert_5.addFeatures(features_Carreauxpopulation10minespacevert_5);
var lyr_Carreauxpopulation10minespacevert_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carreauxpopulation10minespacevert_5, 
                style: style_Carreauxpopulation10minespacevert_5,
                popuplayertitle: 'Carreaux population-10min-espace vert',
                interactive: true,
                title: '<img src="styles/legend/Carreauxpopulation10minespacevert_5.png" /> Carreaux population-10min-espace vert'
            });
var format_Carreauxpopulation5minespacevert_6 = new ol.format.GeoJSON();
var features_Carreauxpopulation5minespacevert_6 = format_Carreauxpopulation5minespacevert_6.readFeatures(json_Carreauxpopulation5minespacevert_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carreauxpopulation5minespacevert_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreauxpopulation5minespacevert_6.addFeatures(features_Carreauxpopulation5minespacevert_6);
var lyr_Carreauxpopulation5minespacevert_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carreauxpopulation5minespacevert_6, 
                style: style_Carreauxpopulation5minespacevert_6,
                popuplayertitle: 'Carreaux population-5min-espace vert',
                interactive: true,
                title: '<img src="styles/legend/Carreauxpopulation5minespacevert_6.png" /> Carreaux population-5min-espace vert'
            });

lyr_OpenTopoMap_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_ContourIRIS_3.setVisible(true);lyr_Carreauxpopulation15minespacevert_4.setVisible(true);lyr_Carreauxpopulation10minespacevert_5.setVisible(true);lyr_Carreauxpopulation5minespacevert_6.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_OpenStreetMap_1,lyr_OpenStreetMap_2,lyr_ContourIRIS_3,lyr_Carreauxpopulation15minespacevert_4,lyr_Carreauxpopulation10minespacevert_5,lyr_Carreauxpopulation5minespacevert_6];
lyr_ContourIRIS_3.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'CODE_TXT': 'CODE_TXT', 'surf_tot': 'surf_tot', 'pop nice — Feuil2_Population en 2021 (princ)': 'pop nice — Feuil2_Population en 2021 (princ)', 'surf_km2': 'surf_km2', 'densité': 'densité', });
lyr_Carreauxpopulation15minespacevert_4.set('fieldAliases', {'fid': 'fid', 'Idcar_200m': 'Idcar_200m', 'I_est_200': 'I_est_200', 'Idcar_1km': 'Idcar_1km', 'I_est_1km': 'I_est_1km', 'Idcar_nat': 'Idcar_nat', 'Groupe': 'Groupe', 'Ind': 'Ind', 'Men_1ind': 'Men_1ind', 'Men_5ind': 'Men_5ind', 'Men_prop': 'Men_prop', 'Men_fmp': 'Men_fmp', 'Ind_snv': 'Ind_snv', 'Men_surf': 'Men_surf', 'Men_coll': 'Men_coll', 'Men_mais': 'Men_mais', 'Log_av45': 'Log_av45', 'Log_45_70': 'Log_45_70', 'Log_70_90': 'Log_70_90', 'Log_ap90': 'Log_ap90', 'Log_inc': 'Log_inc', 'Log_soc': 'Log_soc', 'Ind_0_3': 'Ind_0_3', 'Ind_4_5': 'Ind_4_5', 'Ind_6_10': 'Ind_6_10', 'Ind_11_17': 'Ind_11_17', 'Ind_18_24': 'Ind_18_24', 'Ind_25_39': 'Ind_25_39', 'Ind_40_54': 'Ind_40_54', 'Ind_55_64': 'Ind_55_64', 'Ind_65_79': 'Ind_65_79', 'Ind_80p': 'Ind_80p', 'Ind_inc': 'Ind_inc', 'Men_pauv': 'Men_pauv', 'Men': 'Men', 'lcog_geo': 'lcog_geo', });
lyr_Carreauxpopulation10minespacevert_5.set('fieldAliases', {'fid': 'fid', 'Idcar_200m': 'Idcar_200m', 'I_est_200': 'I_est_200', 'Idcar_1km': 'Idcar_1km', 'I_est_1km': 'I_est_1km', 'Idcar_nat': 'Idcar_nat', 'Groupe': 'Groupe', 'Ind': 'Ind', 'Men_1ind': 'Men_1ind', 'Men_5ind': 'Men_5ind', 'Men_prop': 'Men_prop', 'Men_fmp': 'Men_fmp', 'Ind_snv': 'Ind_snv', 'Men_surf': 'Men_surf', 'Men_coll': 'Men_coll', 'Men_mais': 'Men_mais', 'Log_av45': 'Log_av45', 'Log_45_70': 'Log_45_70', 'Log_70_90': 'Log_70_90', 'Log_ap90': 'Log_ap90', 'Log_inc': 'Log_inc', 'Log_soc': 'Log_soc', 'Ind_0_3': 'Ind_0_3', 'Ind_4_5': 'Ind_4_5', 'Ind_6_10': 'Ind_6_10', 'Ind_11_17': 'Ind_11_17', 'Ind_18_24': 'Ind_18_24', 'Ind_25_39': 'Ind_25_39', 'Ind_40_54': 'Ind_40_54', 'Ind_55_64': 'Ind_55_64', 'Ind_65_79': 'Ind_65_79', 'Ind_80p': 'Ind_80p', 'Ind_inc': 'Ind_inc', 'Men_pauv': 'Men_pauv', 'Men': 'Men', 'lcog_geo': 'lcog_geo', });
lyr_Carreauxpopulation5minespacevert_6.set('fieldAliases', {'fid': 'fid', 'Idcar_200m': 'Idcar_200m', 'I_est_200': 'I_est_200', 'Idcar_1km': 'Idcar_1km', 'I_est_1km': 'I_est_1km', 'Idcar_nat': 'Idcar_nat', 'Groupe': 'Groupe', 'Ind': 'Ind', 'Men_1ind': 'Men_1ind', 'Men_5ind': 'Men_5ind', 'Men_prop': 'Men_prop', 'Men_fmp': 'Men_fmp', 'Ind_snv': 'Ind_snv', 'Men_surf': 'Men_surf', 'Men_coll': 'Men_coll', 'Men_mais': 'Men_mais', 'Log_av45': 'Log_av45', 'Log_45_70': 'Log_45_70', 'Log_70_90': 'Log_70_90', 'Log_ap90': 'Log_ap90', 'Log_inc': 'Log_inc', 'Log_soc': 'Log_soc', 'Ind_0_3': 'Ind_0_3', 'Ind_4_5': 'Ind_4_5', 'Ind_6_10': 'Ind_6_10', 'Ind_11_17': 'Ind_11_17', 'Ind_18_24': 'Ind_18_24', 'Ind_25_39': 'Ind_25_39', 'Ind_40_54': 'Ind_40_54', 'Ind_55_64': 'Ind_55_64', 'Ind_65_79': 'Ind_65_79', 'Ind_80p': 'Ind_80p', 'Ind_inc': 'Ind_inc', 'Men_pauv': 'Men_pauv', 'Men': 'Men', 'lcog_geo': 'lcog_geo', });
lyr_ContourIRIS_3.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'CODE_TXT': 'TextEdit', 'surf_tot': 'TextEdit', 'pop nice — Feuil2_Population en 2021 (princ)': 'TextEdit', 'surf_km2': 'TextEdit', 'densité': 'TextEdit', });
lyr_Carreauxpopulation15minespacevert_4.set('fieldImages', {'fid': 'TextEdit', 'Idcar_200m': 'TextEdit', 'I_est_200': 'Range', 'Idcar_1km': 'TextEdit', 'I_est_1km': 'Range', 'Idcar_nat': 'TextEdit', 'Groupe': 'Range', 'Ind': 'TextEdit', 'Men_1ind': 'TextEdit', 'Men_5ind': 'TextEdit', 'Men_prop': 'TextEdit', 'Men_fmp': 'TextEdit', 'Ind_snv': 'TextEdit', 'Men_surf': 'TextEdit', 'Men_coll': 'TextEdit', 'Men_mais': 'TextEdit', 'Log_av45': 'TextEdit', 'Log_45_70': 'TextEdit', 'Log_70_90': 'TextEdit', 'Log_ap90': 'TextEdit', 'Log_inc': 'TextEdit', 'Log_soc': 'TextEdit', 'Ind_0_3': 'TextEdit', 'Ind_4_5': 'TextEdit', 'Ind_6_10': 'TextEdit', 'Ind_11_17': 'TextEdit', 'Ind_18_24': 'TextEdit', 'Ind_25_39': 'TextEdit', 'Ind_40_54': 'TextEdit', 'Ind_55_64': 'TextEdit', 'Ind_65_79': 'TextEdit', 'Ind_80p': 'TextEdit', 'Ind_inc': 'TextEdit', 'Men_pauv': 'TextEdit', 'Men': 'TextEdit', 'lcog_geo': 'TextEdit', });
lyr_Carreauxpopulation10minespacevert_5.set('fieldImages', {'fid': 'TextEdit', 'Idcar_200m': 'TextEdit', 'I_est_200': 'Range', 'Idcar_1km': 'TextEdit', 'I_est_1km': 'Range', 'Idcar_nat': 'TextEdit', 'Groupe': 'Range', 'Ind': 'TextEdit', 'Men_1ind': 'TextEdit', 'Men_5ind': 'TextEdit', 'Men_prop': 'TextEdit', 'Men_fmp': 'TextEdit', 'Ind_snv': 'TextEdit', 'Men_surf': 'TextEdit', 'Men_coll': 'TextEdit', 'Men_mais': 'TextEdit', 'Log_av45': 'TextEdit', 'Log_45_70': 'TextEdit', 'Log_70_90': 'TextEdit', 'Log_ap90': 'TextEdit', 'Log_inc': 'TextEdit', 'Log_soc': 'TextEdit', 'Ind_0_3': 'TextEdit', 'Ind_4_5': 'TextEdit', 'Ind_6_10': 'TextEdit', 'Ind_11_17': 'TextEdit', 'Ind_18_24': 'TextEdit', 'Ind_25_39': 'TextEdit', 'Ind_40_54': 'TextEdit', 'Ind_55_64': 'TextEdit', 'Ind_65_79': 'TextEdit', 'Ind_80p': 'TextEdit', 'Ind_inc': 'TextEdit', 'Men_pauv': 'TextEdit', 'Men': 'TextEdit', 'lcog_geo': 'TextEdit', });
lyr_Carreauxpopulation5minespacevert_6.set('fieldImages', {'fid': 'TextEdit', 'Idcar_200m': 'TextEdit', 'I_est_200': 'Range', 'Idcar_1km': 'TextEdit', 'I_est_1km': 'Range', 'Idcar_nat': 'TextEdit', 'Groupe': 'Range', 'Ind': 'TextEdit', 'Men_1ind': 'TextEdit', 'Men_5ind': 'TextEdit', 'Men_prop': 'TextEdit', 'Men_fmp': 'TextEdit', 'Ind_snv': 'TextEdit', 'Men_surf': 'TextEdit', 'Men_coll': 'TextEdit', 'Men_mais': 'TextEdit', 'Log_av45': 'TextEdit', 'Log_45_70': 'TextEdit', 'Log_70_90': 'TextEdit', 'Log_ap90': 'TextEdit', 'Log_inc': 'TextEdit', 'Log_soc': 'TextEdit', 'Ind_0_3': 'TextEdit', 'Ind_4_5': 'TextEdit', 'Ind_6_10': 'TextEdit', 'Ind_11_17': 'TextEdit', 'Ind_18_24': 'TextEdit', 'Ind_25_39': 'TextEdit', 'Ind_40_54': 'TextEdit', 'Ind_55_64': 'TextEdit', 'Ind_65_79': 'TextEdit', 'Ind_80p': 'TextEdit', 'Ind_inc': 'TextEdit', 'Men_pauv': 'TextEdit', 'Men': 'TextEdit', 'lcog_geo': 'TextEdit', });
lyr_ContourIRIS_3.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_insee': 'hidden field', 'nom_commune': 'hidden field', 'iris': 'header label - always visible', 'code_iris': 'hidden field', 'nom_iris': 'inline label - visible with data', 'type_iris': 'hidden field', 'CODE_TXT': 'hidden field', 'surf_tot': 'hidden field', 'pop nice — Feuil2_Population en 2021 (princ)': 'inline label - visible with data', 'surf_km2': 'hidden field', 'densité': 'hidden field', });
lyr_Carreauxpopulation15minespacevert_4.set('fieldLabels', {'fid': 'hidden field', 'Idcar_200m': 'inline label - visible with data', 'I_est_200': 'hidden field', 'Idcar_1km': 'hidden field', 'I_est_1km': 'hidden field', 'Idcar_nat': 'hidden field', 'Groupe': 'hidden field', 'Ind': 'header label - always visible', 'Men_1ind': 'hidden field', 'Men_5ind': 'hidden field', 'Men_prop': 'hidden field', 'Men_fmp': 'hidden field', 'Ind_snv': 'hidden field', 'Men_surf': 'hidden field', 'Men_coll': 'hidden field', 'Men_mais': 'hidden field', 'Log_av45': 'hidden field', 'Log_45_70': 'hidden field', 'Log_70_90': 'hidden field', 'Log_ap90': 'hidden field', 'Log_inc': 'hidden field', 'Log_soc': 'hidden field', 'Ind_0_3': 'hidden field', 'Ind_4_5': 'hidden field', 'Ind_6_10': 'hidden field', 'Ind_11_17': 'hidden field', 'Ind_18_24': 'hidden field', 'Ind_25_39': 'hidden field', 'Ind_40_54': 'hidden field', 'Ind_55_64': 'hidden field', 'Ind_65_79': 'hidden field', 'Ind_80p': 'hidden field', 'Ind_inc': 'hidden field', 'Men_pauv': 'hidden field', 'Men': 'hidden field', 'lcog_geo': 'hidden field', });
lyr_Carreauxpopulation10minespacevert_5.set('fieldLabels', {'fid': 'no label', 'Idcar_200m': 'inline label - visible with data', 'I_est_200': 'hidden field', 'Idcar_1km': 'hidden field', 'I_est_1km': 'hidden field', 'Idcar_nat': 'hidden field', 'Groupe': 'hidden field', 'Ind': 'header label - always visible', 'Men_1ind': 'hidden field', 'Men_5ind': 'hidden field', 'Men_prop': 'hidden field', 'Men_fmp': 'hidden field', 'Ind_snv': 'hidden field', 'Men_surf': 'hidden field', 'Men_coll': 'hidden field', 'Men_mais': 'hidden field', 'Log_av45': 'hidden field', 'Log_45_70': 'hidden field', 'Log_70_90': 'hidden field', 'Log_ap90': 'hidden field', 'Log_inc': 'hidden field', 'Log_soc': 'hidden field', 'Ind_0_3': 'hidden field', 'Ind_4_5': 'hidden field', 'Ind_6_10': 'hidden field', 'Ind_11_17': 'hidden field', 'Ind_18_24': 'hidden field', 'Ind_25_39': 'hidden field', 'Ind_40_54': 'hidden field', 'Ind_55_64': 'hidden field', 'Ind_65_79': 'hidden field', 'Ind_80p': 'hidden field', 'Ind_inc': 'hidden field', 'Men_pauv': 'hidden field', 'Men': 'hidden field', 'lcog_geo': 'hidden field', });
lyr_Carreauxpopulation5minespacevert_6.set('fieldLabels', {'fid': 'hidden field', 'Idcar_200m': 'inline label - visible with data', 'I_est_200': 'hidden field', 'Idcar_1km': 'hidden field', 'I_est_1km': 'hidden field', 'Idcar_nat': 'hidden field', 'Groupe': 'hidden field', 'Ind': 'header label - always visible', 'Men_1ind': 'hidden field', 'Men_5ind': 'hidden field', 'Men_prop': 'hidden field', 'Men_fmp': 'hidden field', 'Ind_snv': 'hidden field', 'Men_surf': 'hidden field', 'Men_coll': 'hidden field', 'Men_mais': 'hidden field', 'Log_av45': 'hidden field', 'Log_45_70': 'hidden field', 'Log_70_90': 'hidden field', 'Log_ap90': 'hidden field', 'Log_inc': 'hidden field', 'Log_soc': 'hidden field', 'Ind_0_3': 'hidden field', 'Ind_4_5': 'hidden field', 'Ind_6_10': 'hidden field', 'Ind_11_17': 'hidden field', 'Ind_18_24': 'hidden field', 'Ind_25_39': 'hidden field', 'Ind_40_54': 'hidden field', 'Ind_55_64': 'hidden field', 'Ind_65_79': 'hidden field', 'Ind_80p': 'hidden field', 'Ind_inc': 'hidden field', 'Men_pauv': 'hidden field', 'Men': 'hidden field', 'lcog_geo': 'hidden field', });
lyr_Carreauxpopulation5minespacevert_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});