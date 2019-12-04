import axios from 'axios';

let base = 'http://localhost:8080/usuarios/';

class ApiUsuarioService {

    salvar(usuario){
        if(usuario.id === null || usuario.id === undefined){
            return axios.post(base + 'inserir', usuario);
        } else {
            return axios.put(base + '/alterar/' + usuario.id, usuario);
        }
    }

    todos() {
        return axios.get(base + '/todos');
    }

    pesquisar(usuario) {
        return axios.post(base + '/listar', usuario);
    }

    excluir(usuario) {
        return axios.delete(base + '/' + usuario);
    }

    buscarPorId(usuario) {
        return axios.get(base + '/' + usuario);
    }
}

export default new ApiUsuarioService();