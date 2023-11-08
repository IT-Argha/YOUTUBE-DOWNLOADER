# YouTube Downloader Web Application

This is a simple web application built with Flask that allows users to download YouTube videos and playlists. Users can enter a YouTube video or playlist link, select the download type, and initiate the download process. The application provides a download progress bar and error popups for a seamless user experience.

## Features

- Download YouTube videos and playlists.
- Real-time download progress display.
- Error handling and informative popups for users.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Python installed on your local machine.
- `pip` package manager installed.
- Internet connection to download YouTube videos and playlists.
- Modern web browser to access the web application.

## Installation and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/youtube-downloader.git
   ```

2. Navigate to the project directory:

   ```bash
   cd youtube-downloader
   ```

3. Install the project dependencies using `pip`:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask application:

   ```bash
   python app.py
   ```

5. Access the application in your web browser:

   ```
   http://127.0.0.1:5000/
   ```

6. Enter a YouTube video or playlist link, select the download type, and click "Download" to initiate the download process.

## Project Structure

The project structure is organized as follows:

- `app.py`: Main Flask application file.
- `static/`: Directory containing static files (CSS and JavaScript).
  - `css/`: CSS stylesheets.
  - `js/`: JavaScript files.
- `templates/`: HTML templates used by Flask.
  - `index.html`: Main HTML template for the web application.
- `downloads/`: Directory to store downloaded videos and playlists.
- `venv/`: Virtual environment directory (create this using a virtual environment tool).
- `requirements.txt`: List of project dependencies.
- `README.md`: Project documentation (you are reading this file).

## Contributing

If you want to contribute to this project and make it better, feel free to fork the repository and submit a pull request. Contributions are always welcome!
