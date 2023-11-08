from flask import Flask, request, render_template, jsonify
from pytube import YouTube, Playlist

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download', methods=['POST'])
def download():
    link = request.form['link']
    download_type = request.form['download_type']

    if download_type == 'video':
        error_message = download_video(link)
    elif download_type == 'playlist':
        error_message = download_playlist(link)

    if error_message:
        return jsonify({'error': error_message})

    return jsonify({'success': 'Download started. Check your downloads folder.'})

def download_video(vlink):
    try:
        v = YouTube(vlink)
        v.streams.get_highest_resolution().download()
    except Exception as e:
        return 'Sorry! This Video is Unavailable'

def download_playlist(plink):
    try:
        p = Playlist(plink)
        for video in p.videos:
            video.streams.get_highest_resolution().download()
    except Exception as e:
        return 'An error occurred while downloading the playlist'

if __name__ == '__main__':
    app.run()
