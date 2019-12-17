from flask import Flask, render_template
from flask_socketio import SocketIO, emit

global elapsedTime

app = Flask(__name__)
app.logger.disabled = True
socketio = SocketIO()
socketio.init_app(app, cors_allowed_origins="*")

@socketio.on('message')
def test_message(data):
    try:
        print(data)
    except:
        print('message')


@socketio.on('pause_timelapse')
def pause_timelapse(data):
        try:
            print(data)
        except:
            print('pause_timelapse')

@socketio.on('launch_timelapse')
def launch_timelapse(data):
        try:
            print(data)
        except:
            print('launch_timelapse')

@socketio.on('cancel_recording')
def cancel_recording(data):
        try:
            print(data)
        except:
            print('cancel_recording')

@socketio.on('resume_recording')
def resume_recording(data):
        try:
            print(data)
        except:
            print('resume_recording')

@socketio.on('start_spin')
def pause_timelapse(data):
        try:
            print(data)
        except:
            print('start_spin')

@socketio.on('stop_spin')
def pause_timelapse(data):
        try:
            print(data)
        except:
            print('stop_spin')


if __name__ == '__main__':
    socketio.run(app, host="127.0.0.1")
