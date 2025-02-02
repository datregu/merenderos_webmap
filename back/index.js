const express = require('express');
const { Client } = require('pg');
const app = express();
const cors = require('cors');
app.use(cors());

const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'merenderos_webmap',
  password: '1234',
  port: 5432,
});

client.connect();
/*
app.get('/api/puntos_interes', async (req, res) => {
  const result = await client.query('SELECT jsonb_build_object(\'type\', \'FeatureCollection\', \'features\', jsonb_agg(ST_AsGeoJSON(puntos_interes.*))) FROM puntos_interes');
  res.json(result.rows[0].jsonb_build_object);
});
*/

app.get('/api/puntos_interes', async (req, res) => {
  const result = await client.query(
      `SELECT jsonb_build_object(
      'type', 'FeatureCollection',
      'features', jsonb_agg(ST_AsGeoJSON(puntos_interes.*)::jsonb)
  ) 
  FROM puntos_interes`
  );
  res.json(result.rows[0].jsonb_build_object);
});

app.get('/api/heatmap', async (req, res) => {
  const result = await client.query('SELECT ST_X(geom) AS lon, ST_Y(geom) AS lat FROM puntos_interes');
  res.json(result.rows.map(row => [row.lon, row.lat]));
});

app.listen(3000, () => {
    console.log('Backend running on http://localhost:3000');
});

