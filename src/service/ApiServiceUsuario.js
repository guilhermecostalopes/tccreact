import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/usuarios/';

class ApiUsuarioService {

    salvar(usuario){
        return axios.post(""+USER_API_BASE_URL, usuario);
    }

    alterar(usuario) {
        return axios.put(USER_API_BASE_URL + '/' + usuario.id, usuario);
    }

    pesquisar(usuario) {
        return axios.post(""+USER_API_BASE_URL, usuario);
    }

    excluir(usuario) {
        return axios.delete(USER_API_BASE_URL + '/' + usuario);
    }

    buscarPorId(usuario) {
        return axios.get(BASE_SISTEMA + this.base + '/' + usuario);
    }
}

export default new ApiUsuarioService();