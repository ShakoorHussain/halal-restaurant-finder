# Verdant Halal - Restaurant Finder Finland 🍽️🕌

A modern, interactive React web application that helps users find Halal restaurants across Finland. Built as a frontend-only task, this application fetches data directly from a public Google Sheet (CSV) and displays it on a dynamic map with custom filtering.

## ✨ Features

* **Interactive Map:** Built with React Leaflet, featuring custom SVG map pins that change color based on Halal status (Certified/Verified vs. Halal Friendly).
* **"Near Me" Geolocation:** Uses the browser's native geolocation API to fly the map to the user's current location.
* **Live Search & Filtering:** Filter restaurants by typing a name/city or by clicking category pills (e.g., Turkish, Arab, Syrian). The map and list update instantly.
* **Modern UI/UX:** Fully responsive design built with Tailwind CSS, featuring smooth animations, custom scrollbars, and high-quality Lucide vector icons.
* **No Backend Needed:** Parses CSV data directly from a published Google Sheet URL using the native Fetch API.

## 🛠️ Tech Stack

* **Framework:** React + Vite
* **Styling:** Tailwind CSS
* **Map:** React Leaflet & Leaflet Core
* **Icons:** Lucide React
* **Data Fetching:** Native JavaScript Fetch API & custom CSV Parser

## 🚀 How to Run Locally

To get this project up and running on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/ShakoorHussain/halal-restaurant-finder.git](https://github.com/ShakoorHussain/halal-restaurant-finder.git)