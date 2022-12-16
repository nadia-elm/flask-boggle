from boggle import Boggle

boggle_game = Boggle()
from flask import Flask,request,render_template,redirect,session,jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "this_is_secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/')
def home_page():
    board = boggle_game.make_board()
    session['board'] = board
    return render_template('board.html',board = board)

# @app.route('/start_Game', methods=["POST"])
# def display_board():
#     board= boggle_game.make_board()
#     session['board']= board 
#     return render_template('board.html',board= board)

@app.route('/check-guess')
def check_guess():
    guess = request.args['guess']
    board = session['board']
    res = boggle_game.check_valid_word(board,guess)
    # return jsonify({'result' : res})
    return "<h1>hello {guess} </h1>"