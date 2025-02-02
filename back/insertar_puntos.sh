#!/bin/bash
echo "Importando datos de merenderos.geojson a PostgreSQL..."

ogr2ogr -f "PostgreSQL" PG:"dbname=merenderos_webmap user=postgres password=1234" \
-nln puntos_interes -overwrite -nlt POINT /data/merenderos.geojson

echo "Importación completada."

