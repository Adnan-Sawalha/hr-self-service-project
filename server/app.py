from flask import Flask, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'ucv&73'
app.config['MYSQL_DB'] = 'hr'


mysql = MySQL(app)

@app.route('/')
def name():
    cur = mysql.connection.cursor()
    cur.execute('SELECT name FROM users where idUsers = 113')
    users = cur.fetchall()
    cur.close()
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)