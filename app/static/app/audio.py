
import subprocess
from moviepy.editor import *





command = "ffmpeg -i D:\\Py Task\\Candi Doc\\New folder\\tv.mp4 -ab 160k -ac 2 -ar 44100 -vn audio.wav"

subprocess.call(command, shell=True)
    