CREATE DATABASE merenderos_webmap;
\c merenderos_webmap

CREATE EXTENSION postgis;

CREATE TABLE puntos_interes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    geom GEOMETRY(Point, 4326)
);

