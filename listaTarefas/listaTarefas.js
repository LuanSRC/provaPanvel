class Tarefa {
  id;
  titulo;
  descricao;
  status;
  constructor(id, titulo, descricao) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = false;
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
    if (indice <= this.lista.length) {
      this.lista = this.lista.splice(indice, 1);
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
      this.lista[
        indice
      ].descricao = `${this.lista[indice].descricao} CONCLUÍDA`;
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
  lista.marcar_concluida(1);
  lista.listar();
}

teste();
