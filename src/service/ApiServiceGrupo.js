import axios from 'axios';

let base = 'http://localhost:8080/grupos/';

class ApiGrupoService {

    salvar(grupo){
        if(grupo.id === null || grupo.id === undefined){
            return axios.post(base + 'inserir', grupo);
        } else {
            return axios.put(base + '/alterar/' + grupo.id, grupo);
        }
    }

    todos() {
        return axios.get(base + '/todos');
    }

    pesquisar(grupo) {
        return axios.post(base + '/listar', grupo);
    }

    excluir(grupo) {
        return axios.delete(base + '/' + grupo);
    }

    buscarPorId(grupo) {
        return axios.get(base + '/' + grupo);
    }
}

export default new ApiGrupoService();