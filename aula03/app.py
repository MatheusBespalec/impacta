from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/') 
def main():
    resultado = None
    media = None

    primeira = float(request.args.get('first'))
    segunda = float(request.args.get('second'))

    if primeira and segunda:
        media = (primeira + segunda) / 2
        if media >= 7:
            resultado = 'Aprovado'
        elif media >= 4:
            resultado = 'Recuperação'
        else:
            resultado = 'Reprovado'

    return render_template('index.html', media=media, resultado=resultado)

if __name__ == '__main__':
  app.run(debug=True)