from boggle import Boggle

boggle_game = Boggle()
from flask import Flask,request,render_template,redirect,session
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "this_is_secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/')
def home_page():
    return render_template('home.html')