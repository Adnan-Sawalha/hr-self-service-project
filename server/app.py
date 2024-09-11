from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
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
            'userId': user[16],
            
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
    
@app.route('/req')
def req():
    cur = mysql.connection.cursor()
    cur.execute('''
        SELECT idapply_leave, type, sDay, sMonth, sYear, eDay, eMonth, eYear, status
        FROM apply_leave 
        WHERE idUser = %s
    ''', (id,))
    
    reqs = cur.fetchall()  
    cur.close()
    
    if reqs:  
        req_list = []
        for req in reqs:
            req_info = {
                'id': req[0],
                'type': req[1],
                'sDay': req[2],
                'sMonth': req[3],
                'sYear': req[4],
                'eDay': req[5],
                'eMonth': req[6],
                'eYear': req[7],
                'status': req[8]
            }
            req_list.append(req_info)
        
        return jsonify(req_list)
    else:
        return jsonify({'error': 'No leave requests found'}), 404


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    cur = mysql.connection.cursor()
    
    cur.execute('SELECT idUsers, password FROM users WHERE email = %s', (email,))
    user = cur.fetchone()

    if user is None:
        cur.close()
        return jsonify({'error': 'Email not found'}), 400

    if user[1] != password:
        cur.close()
        return jsonify({'error': 'Incorrect password'}), 400

    global id
    id = str(user[0])
    cur.close()
    return jsonify({'id': id})


@app.route('/reques', methods=['POST'])
def reques():
    data = request.get_json()
    ttype = data.get('ttype')
    sDay = 0
    sMonth = data.get('sMonth')
    sYear = 0
    eDay = 0
    eMonth = data.get('eMonth')
    eYear = 0
    status = data.get('status')

    cur = mysql.connection.cursor()
    
    cur.execute('INSERT INTO apply_leave (idUser, type, sDay, sMonth, sYear, eDay, eMonth, eYear, status) VALUES (%s, %s, 0, %s, 0, 0, %s, 0, %s)', (id, ttype, sMonth, eMonth, status))

    mysql.connection.commit()

    cur.close()

    return jsonify("Done")

if __name__ == '__main__':
    app.run(debug=True)
