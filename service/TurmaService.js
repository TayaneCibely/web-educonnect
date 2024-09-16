import http from "@/common/http";

class TurmaService {

  async create(data, idDocente, idDisciplina) {
    return http.post(`docente/${idDocente}/turma/${idDisciplina}`, data);
  }
  async list() {
    return http.get("turmas");
  }
  async delete(idDocente, idTurma) {
    return http.delete(`docente/${idDocente}/turma/${idTurma}`);
  }
  async listTurmasDocente(idDocente) {
    return http.get(`docente/${idDocente}/turmas`);
  }
  //falta implementar no backend
  async update(id, data) {
    return http.put(`docente/${id}`, data);
  }
  async load(idTurma) {
    return http.get(`turma/${idTurma}`);
  }

}

export default new TurmaService();