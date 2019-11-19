import api from '../service/api'


let base = 'http://localhost:8080/grupos/';

class ApiGrupoService {

    salvar(grupo){
        if(grupo.id === undefined || grupo.id === ""){
            return api.post(""+base + 'inserir', grupo);
        } else {
            return api.put(base + '/alterar/' + grupo.id, grupo);
        }
    }

    pesquisar(grupo) {
        return api.post(""+base + '/listar', grupo);
    }

    excluir(grupo) {
        return api.delete(base + '/' + grupo);
    }

    buscarPorId(grupo) {
        return api.get(base + '/' + grupo);
    }
}

export default new ApiGrupoService();