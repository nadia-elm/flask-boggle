from boggle import Boggle

boggle_game = Boggle()
from flask import Flask,request,render_template,redirect,session,jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "this_is_secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

@app.route('/')
def game_page():
    current_board = boggle_game.make_board()
    session['board']= current_board
    return render_template('board.html', board = current_board)


@app.route('/check_word')
def check():
    
        current_board = session['board']
        word = request.args.get('guess')
        result = boggle_game. check_valid_word(current_board, word)
        response =  jsonify ({ word : result})
        return response
        # return jsonify({'result' : result})
        