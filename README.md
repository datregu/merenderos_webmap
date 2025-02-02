# Merenderos Web Map

Merenderos Web Map is a static web mapping project built with **React** and **Leaflet**, designed to display points of interest (POIs) from a local **GeoJSON** file. The project does not require a backend server, making it lightweight and easy to deploy on platforms like **Netlify** or **GitHub Pages**.

## Features
- 📌 Displays POIs from a **local GeoJSON file**.
- 🗺️ Uses **Leaflet** to render the interactive map.
- 🔥 Includes a **heatmap** visualization with `leaflet.heat`.
- 🎨 Uses **OpenStreetMap** and **MapTiler** tiles for the basemap.
- ⚡ Built with **React** for component-based development.

## Installation & Setup
To run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/datregu/merenderos_webmap.git
cd merenderos_webmap

# Install dependencies
npm install

# Start the development server
npm start
```

The application will be available at `http://localhost:3000/`.

## Deployment
Since this is a static project, it can be deployed to **Netlify**, **Vercel**, or **GitHub Pages**. To create a production build, run:

```bash
npm run build
```

Upload the contents of the `build/` folder to your preferred hosting service.

## Project Structure
```
merenderos_webmap/
├── public/               # Static assets (icons, images, etc.)
│   ├── puntos_interes.geojson  # Local GeoJSON file
│   ├── restaurant.png    # Custom marker icon
│   ├── index.html        # Main HTML file
├── src/                  # React application source code
│   ├── components/       # Reusable React components
│   ├── Map.jsx           # Leaflet map component
│   ├── Heatmap.jsx       # Heatmap component
│   ├── App.js            # Main App entry
│   ├── index.js          # ReactDOM render file
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
└── .gitignore            # Files to ignore in Git
```

## Technologies Used
- **React** (Front-end framework)
- **Leaflet** (Mapping library)
- **PostgreSQL/PostGIS** (Data processing, optional)
- **GeoJSON** (Data format for geographic features)
- **MapTiler / OpenStreetMap** (Basemap providers)

## License
This project is licensed under the MIT License.

---

🚀 Happy mapping! If you have any questions, feel free to open an issue or contribute. 😊
