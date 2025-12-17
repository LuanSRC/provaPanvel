class Tarefa {
  id;
  titulo;
  descricao;
  concluida;
  constructor(id, titulo, descricao) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.concluida = false;
  }
}

class ListaTarefas {
  lista = [];
  adicionar(titulo, descricao) {
    let id = this.lista.length + 1;
    let novaTarefa = new Tarefa(id, titulo, descricao);
    this.lista.push(novaTarefa);
  }
  remover(indice) {
    if (indice > 0 && indice <= this.lista.length) {
      const posicao = indice - 1;
      this.lista.splice(posicao, 1);
    } else {
      throw new Error("Índice inválido");
    }
  }

  listar() {
    this.lista.forEach((tarefa) => {
      console.log(`${tarefa.id}: ${tarefa.titulo} - ${tarefa.descricao}`);
    });
  }
  marcar_concluida(indice) {
    if (indice <= this.lista.length) {
      let idDeletar = indice - 1;
      this.lista[
        idDeletar
      ].descricao = `${this.lista[idDeletar].descricao} CONCLUÍDA`;
      this.lista[idDeletar].concluida = true;
    } else {
      throw new Error("Índice inválido");
    }
  }
  total() {
    return `Existem ${this.lista.length} tarefa(s) cadastrada(s).`;
  }
}

function teste() {
  const lista = new ListaTarefas();

  lista.adicionar("Comer carne", "Preciso comer carne");
  lista.adicionar("Limpar casa", "Limpar a casa para o final de semana");
  lista.adicionar("Mercado", "Comprar arroz, feijão, salada e 12 ovos");
  lista.adicionar(
    "Trabalho faculdade",
    "Finalizar trabalho de Desenvolvimento Full Stack"
  );
  lista.marcar_concluida(1);
  lista.remover(1);
  lista.listar();
  lista.marcar_concluida(2);
  lista.listar();
}

teste();
