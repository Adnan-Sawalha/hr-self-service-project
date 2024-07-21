from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '0000'
app.config['MYSQL_DB'] = 'hr'
app.config['SECRET_KEY'] = '12345'


mysql = MySQL(app)

id =''

@app.route('/')
def name():

    cur = mysql.connection.cursor()
    print("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL", id)
    cur.execute('SELECT name FROM users where idUsers = %s', (str( id),))
    users = cur.fetchone()
    cur.close()
    if users:
        return jsonify(users)

@app.route('/login', methods=['POST'])
def login():
    
    data = request.get_json()
    e = data.get('email') 
    p = data.get('password')
    cur = mysql.connection.cursor()
    print("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL" + e + "LLLLLLLLL" + p)
    cur.execute('SELECT idUsers FROM users WHERE email = %s and password = %s',  (e, p) )
    isUser = cur.fetchone()
    cur.close()
    print("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL", isUser[0])
    print(type(isUser[0]))
    global id 
    id = str(isUser[0])
    return jsonify(isUser[0])
    

if __name__ == '__main__':
    app.run(debug=True)