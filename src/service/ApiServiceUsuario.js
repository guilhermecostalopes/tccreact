import axios from 'axios';

const base = 'http://localhost:8080/usuarios/';

class ApiUsuarioService {

    salvar(usuario){
        if(grupo.id === null || grupo.id === undefined){
            return axios.post(base + 'inserir', usuario);
        } else {
            return axios.put(base + '/alterar/' + usuario.id, usuario);
        }
    }

    pesquisar(grupo) {
        return axios.post(base + '/listar', usuario);
    }

    excluir(grupo) {
        return axios.delete(base + '/' + usuario);
    }

    buscarPorId(grupo) {
        return axios.get(base + '/' + usuario);
    }
}

export default new ApiUsuarioService();