#!/bin/bash

# Convertir el archivo KML a GeoJSON
ogr2ogr -f "GeoJSON" /data/merenderos.geojson /data/merenderos.kml -lco COORDINATE_PRECISION=6 -select "Name"

# Insertar los puntos en la base de datos PostGIS
ogr2ogr -f "PostgreSQL" PG:"dbname=merenderos_webmap user=postgres password=1234" \
-nln puntos_interes -append -nlt POINT \
-sql "SELECT Name AS nombre FROM \"Restaurantes y bares\"" /data/merenderos.geojson

