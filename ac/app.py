from flask import Flask, jsonify, request,json
from flask_cors import CORS
import mysql.connector

app= Flask(__name__)
database = mysql.connector.connect(host="localhost",user="root",password="root",database="db_ac")

CORS(app)

@app.route('/api/client', methods=['GET'])
def get_client():
    query = f"select * from tb_client"

    cursor = database.cursor()
    cursor.execute(query)

    clientes = cursor.fetchall()

    return jsonify(clientes)

@app.route('/api/client', methods=['POST'])
def create_client():
    dados = json.loads(request.data)

    nome = dados.get("nome", None)
    email = dados.get("email", None)
    telefone = dados.get("telefone", None)

    query = "INSERT INTO tb_client (nome, email,telefone) VALUES (%s, %s, %s)"
    valores = (nome, email, telefone)

    cursor = database.cursor()
    cursor.execute(query, valores)

    database.commit()
    
    return 'Cliente criado!', 201

if __name__ == '__main__':
    app.run(debug=True)
