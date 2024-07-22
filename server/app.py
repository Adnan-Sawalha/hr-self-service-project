from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'ucv&73'
app.config['MYSQL_DB'] = 'hr'
app.config['SECRET_KEY'] = '12345'


mysql = MySQL(app)

id =''

@app.route('/')
def name():

    cur = mysql.connection.cursor()
    cur.execute('''
        SELECT email, name, password, position, city, country, day, month, year,
               hDay, hMonth, hYear, web, linkedIn, mobile, role, idUsers
        FROM users 
        WHERE idUsers = %s
    ''', (id,))
    user = cur.fetchone()
    cur.close()
    if user: 
        user_details = {
            'email': user[0],
            'name': user[1],
            'password': user[2],
            'position': user[3],
            'city': user[4],
            'country': user[5],
            'day': user[6],
            'month': user[7],
            'year': user[8],
            'hDay': user[9],
            'hMonth': user[10],
            'hYear': user[11],
            'web': user[12],
            'linkedIn': user[13],
            'mobile': user[14],
            'role': user[15],
            'userId': user[16]
        }
        return jsonify(user_details)
    

@app.route('/leave')
def leave():

    cur = mysql.connection.cursor()
    cur.execute('''
        SELECT casual, sick, unpaid, courtesy, paternity, pto
        FROM leaves 
        WHERE idEmployee = %s
    ''', (id,))
    leaves = cur.fetchone()
    cur.close()
    if leaves: 
        leaves_number = {
            'casual': leaves[0],
            'sick': leaves[1],
            'unpaid': leaves[2],
            'courtesy': leaves[3],
            'paternity': leaves[4],
            'pto': leaves[5]
            
        }
        return jsonify(leaves_number)

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