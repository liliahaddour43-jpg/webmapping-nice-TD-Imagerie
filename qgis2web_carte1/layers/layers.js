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
var format_Isochrones15minespacevert_4 = new ol.format.GeoJSON();
var features_Isochrones15minespacevert_4 = format_Isochrones15minespacevert_4.readFeatures(json_Isochrones15minespacevert_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones15minespacevert_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones15minespacevert_4.addFeatures(features_Isochrones15minespacevert_4);
var lyr_Isochrones15minespacevert_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrones15minespacevert_4, 
                style: style_Isochrones15minespacevert_4,
                popuplayertitle: 'Isochrones-15min-espace-vert',
                interactive: true,
                title: '<img src="styles/legend/Isochrones15minespacevert_4.png" /> Isochrones-15min-espace-vert'
            });
var format_Isochrones10minespacevert_5 = new ol.format.GeoJSON();
var features_Isochrones10minespacevert_5 = format_Isochrones10minespacevert_5.readFeatures(json_Isochrones10minespacevert_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones10minespacevert_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones10minespacevert_5.addFeatures(features_Isochrones10minespacevert_5);
var lyr_Isochrones10minespacevert_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrones10minespacevert_5, 
                style: style_Isochrones10minespacevert_5,
                popuplayertitle: 'Isochrones-10min-espace-vert',
                interactive: true,
                title: '<img src="styles/legend/Isochrones10minespacevert_5.png" /> Isochrones-10min-espace-vert'
            });
var format_Isochrones5minespacevert_6 = new ol.format.GeoJSON();
var features_Isochrones5minespacevert_6 = format_Isochrones5minespacevert_6.readFeatures(json_Isochrones5minespacevert_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isochrones5minespacevert_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isochrones5minespacevert_6.addFeatures(features_Isochrones5minespacevert_6);
var lyr_Isochrones5minespacevert_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isochrones5minespacevert_6, 
                style: style_Isochrones5minespacevert_6,
                popuplayertitle: 'Isochrones-5min-espace-vert',
                interactive: true,
                title: '<img src="styles/legend/Isochrones5minespacevert_6.png" /> Isochrones-5min-espace-vert'
            });
var format_LesespacesvertsParcetJardin_7 = new ol.format.GeoJSON();
var features_LesespacesvertsParcetJardin_7 = format_LesespacesvertsParcetJardin_7.readFeatures(json_LesespacesvertsParcetJardin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LesespacesvertsParcetJardin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LesespacesvertsParcetJardin_7.addFeatures(features_LesespacesvertsParcetJardin_7);
var lyr_LesespacesvertsParcetJardin_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LesespacesvertsParcetJardin_7, 
                style: style_LesespacesvertsParcetJardin_7,
                popuplayertitle: 'Les espaces verts -Parc et Jardin',
                interactive: true,
                title: '<img src="styles/legend/LesespacesvertsParcetJardin_7.png" /> Les espaces verts -Parc et Jardin'
            });

lyr_OpenTopoMap_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_ContourIRIS_3.setVisible(true);lyr_Isochrones15minespacevert_4.setVisible(true);lyr_Isochrones10minespacevert_5.setVisible(true);lyr_Isochrones5minespacevert_6.setVisible(true);lyr_LesespacesvertsParcetJardin_7.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_OpenStreetMap_1,lyr_OpenStreetMap_2,lyr_ContourIRIS_3,lyr_Isochrones15minespacevert_4,lyr_Isochrones10minespacevert_5,lyr_Isochrones5minespacevert_6,lyr_LesespacesvertsParcetJardin_7];
lyr_ContourIRIS_3.set('fieldAliases', {'fid': 'fid', 'cleabs': 'cleabs', 'code_insee': 'code_insee', 'nom_commune': 'nom_commune', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'type_iris': 'type_iris', 'CODE_TXT': 'CODE_TXT', 'surf_tot': 'surf_tot', 'pop nice — Feuil2_Population en 2021 (princ)': 'pop nice — Feuil2_Population en 2021 (princ)', 'surf_km2': 'surf_km2', 'densité': 'densité', });
lyr_Isochrones15minespacevert_4.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', 'NOM_ANCIEN': 'NOM_ANCIEN', 'TYPE': 'TYPE', 'SOUS_TYPE': 'SOUS_TYPE', 'IDENT': 'IDENT', 'NOM_CARTO': 'NOM_CARTO', 'surface_m2': 'surface_m2', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_Isochrones10minespacevert_5.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', 'NOM_ANCIEN': 'NOM_ANCIEN', 'TYPE': 'TYPE', 'SOUS_TYPE': 'SOUS_TYPE', 'IDENT': 'IDENT', 'NOM_CARTO': 'NOM_CARTO', 'surface_m2': 'surface_m2', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_Isochrones5minespacevert_6.set('fieldAliases', {'fid': 'fid', 'NOM': 'NOM', 'NOM_ANCIEN': 'NOM_ANCIEN', 'TYPE': 'TYPE', 'SOUS_TYPE': 'SOUS_TYPE', 'IDENT': 'IDENT', 'NOM_CARTO': 'NOM_CARTO', 'surface_m2': 'surface_m2', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_LesespacesvertsParcetJardin_7.set('fieldAliases', {'NOM': 'NOM', 'NOM_ANCIEN': 'NOM_ANCIEN', 'TYPE': 'TYPE', 'SOUS_TYPE': 'SOUS_TYPE', 'IDENT': 'IDENT', 'NOM_CARTO': 'NOM_CARTO', 'surface_m2': 'surface_m2', });
lyr_ContourIRIS_3.set('fieldImages', {'fid': 'TextEdit', 'cleabs': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commune': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'type_iris': 'TextEdit', 'CODE_TXT': 'TextEdit', 'surf_tot': 'TextEdit', 'pop nice — Feuil2_Population en 2021 (princ)': 'TextEdit', 'surf_km2': 'TextEdit', 'densité': 'TextEdit', });
lyr_Isochrones15minespacevert_4.set('fieldImages', {'fid': 'TextEdit', 'NOM': 'TextEdit', 'NOM_ANCIEN': 'TextEdit', 'TYPE': 'TextEdit', 'SOUS_TYPE': 'TextEdit', 'IDENT': 'TextEdit', 'NOM_CARTO': 'TextEdit', 'surface_m2': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Isochrones10minespacevert_5.set('fieldImages', {'fid': 'TextEdit', 'NOM': 'TextEdit', 'NOM_ANCIEN': 'TextEdit', 'TYPE': 'TextEdit', 'SOUS_TYPE': 'TextEdit', 'IDENT': 'TextEdit', 'NOM_CARTO': 'TextEdit', 'surface_m2': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Isochrones5minespacevert_6.set('fieldImages', {'fid': 'TextEdit', 'NOM': 'TextEdit', 'NOM_ANCIEN': 'TextEdit', 'TYPE': 'TextEdit', 'SOUS_TYPE': 'TextEdit', 'IDENT': 'TextEdit', 'NOM_CARTO': 'TextEdit', 'surface_m2': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_LesespacesvertsParcetJardin_7.set('fieldImages', {'NOM': 'TextEdit', 'NOM_ANCIEN': 'TextEdit', 'TYPE': 'TextEdit', 'SOUS_TYPE': 'TextEdit', 'IDENT': 'TextEdit', 'NOM_CARTO': 'TextEdit', 'surface_m2': 'TextEdit', });
lyr_ContourIRIS_3.set('fieldLabels', {'fid': 'hidden field', 'cleabs': 'hidden field', 'code_insee': 'hidden field', 'nom_commune': 'hidden field', 'iris': 'header label - always visible', 'code_iris': 'hidden field', 'nom_iris': 'inline label - visible with data', 'type_iris': 'hidden field', 'CODE_TXT': 'hidden field', 'surf_tot': 'hidden field', 'pop nice — Feuil2_Population en 2021 (princ)': 'inline label - visible with data', 'surf_km2': 'hidden field', 'densité': 'hidden field', });
lyr_Isochrones15minespacevert_4.set('fieldLabels', {'fid': 'hidden field', 'NOM': 'inline label - visible with data', 'NOM_ANCIEN': 'hidden field', 'TYPE': 'inline label - visible with data', 'SOUS_TYPE': 'hidden field', 'IDENT': 'hidden field', 'NOM_CARTO': 'hidden field', 'surface_m2': 'inline label - always visible', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Isochrones10minespacevert_5.set('fieldLabels', {'fid': 'hidden field', 'NOM': 'inline label - visible with data', 'NOM_ANCIEN': 'hidden field', 'TYPE': 'inline label - visible with data', 'SOUS_TYPE': 'hidden field', 'IDENT': 'hidden field', 'NOM_CARTO': 'hidden field', 'surface_m2': 'header label - always visible', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Isochrones5minespacevert_6.set('fieldLabels', {'fid': 'hidden field', 'NOM': 'inline label - visible with data', 'NOM_ANCIEN': 'hidden field', 'TYPE': 'inline label - visible with data', 'SOUS_TYPE': 'hidden field', 'IDENT': 'hidden field', 'NOM_CARTO': 'hidden field', 'surface_m2': 'inline label - always visible', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_LesespacesvertsParcetJardin_7.set('fieldLabels', {'NOM': 'inline label - visible with data', 'NOM_ANCIEN': 'hidden field', 'TYPE': 'inline label - visible with data', 'SOUS_TYPE': 'hidden field', 'IDENT': 'hidden field', 'NOM_CARTO': 'hidden field', 'surface_m2': 'inline label - always visible', });
lyr_LesespacesvertsParcetJardin_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});