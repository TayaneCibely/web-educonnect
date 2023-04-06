import http from "@/common/http";

class MatriculaService {

  async create(data, idDiscente, idTurma) {
    return http.post(`discente/${idDiscente}/matricula/${idTurma}`, data);
  }
  async list() {
    return http.get("matriculas");
  }
  async delete(idDiscente, idMat) {
    return http.delete(`discente/${idDiscente}/matricula/${idMat}`);
  }
  async listMatriculasDiscente() {
    return http.get(`discente/${idDiscente}/matriculas`);
  }
  //falta implementar no backend
  async update(id, data) {
    return http.put(`docente/${id}`, data);
  }
  async load(id) {
    return http.get(`matricula/${id}`);
  }

}

export default new MatriculaService();