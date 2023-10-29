def criptografia(rotacaoCriptografia, palavraCriptografia):
    alfabeto = "abcdefghijklmnopqrstuvwxyz"
    palavra = palavraCriptografia.lower()
    rotacao = rotacaoCriptografia

    caracteres_ignorados = " ,.!?"

    print("Alfabeto:", alfabeto)
    print("Palavra:", palavra)
    print("Rotação:", rotacao)
    print("Resultado: ", end="")

    for i in range(len(palavra)):
        if (palavra[i] in caracteres_ignorados):
            print(palavra[i], end="")
            continue

        indice_alfabeto = alfabeto.index(palavra[i])
        novo_indice = (indice_alfabeto + rotacao) % len(alfabeto)
        print(alfabeto[novo_indice], end="")

criptografia(7, "Ola, meu nome eh Carlos! e o Seu?")