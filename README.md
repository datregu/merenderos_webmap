# 🗺️ Merenderos Web Map

**Aplicación en línea**: [https://datregu-webmap-leaflet.netlify.app/](https://datregu-webmap-leaflet.netlify.app/)

Merenderos Web Map es una aplicación web interactiva que muestra puntos de interés utilizando **React**, **Leaflet** y un archivo **GeoJSON** local. El proyecto está containerizado con **Docker** y puede desplegarse fácilmente usando `docker-compose`.


## ✨ Features

- **Interactive Map**: 🖱️ Displays points of interest with intuitive navigation using Leaflet.
- **Heatmap Visualization**: 🔥 Implements `leaflet.heat` to render density-based visualizations, providing insights into data distribution.
- **Local GeoJSON Support**: 📂 Efficiently loads and processes geographic data from a local GeoJSON file.
- **Dockerized Deployment**: 🐳 Ensures consistent and reproducible environments using Docker and `docker-compose`.

## 🛠️ Prerequisites

Ensure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## 🚀 Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/datregu/merenderos_webmap.git
   cd merenderos_webmap
   ```

2. **Build and run the project using Docker Compose**:

   ```sh
   docker-compose up --build
   ```

3. **Access the application**:

   Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## 🗂️ Project Structure

```
merenderos_webmap/
├── front/              # React frontend with Leaflet
│   ├── src/            # Source code
│   ├── public/         # Static files (GeoJSON, icons, etc.)
│   ├── Dockerfile      # Dockerfile for frontend
├── docker-compose.yml  # Docker Compose configuration
└── README.md           # Project documentation
```

## ⚙️ Environment Variables

Configure the application using an `.env` file as needed.

## 🤝 Contributing

We welcome contributions! Feel free to fork this repository and submit pull requests to enhance the project.

## 📜 License

This project is licensed under the MIT License.
