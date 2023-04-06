import http from "@/common/http";

class DisciplinaService {

  async create(data) {
    return http.post("disciplina", data);
  }
  async list() {
    return http.get("disciplinas");
  }
  async delete(id) {
    return http.delete(`disciplina/${id}`);
  }
  async update(id, data) {
    return http.put(`disciplina/${id}`, data);
  }
  async load(id) {
    return http.get(`disciplina/${id}`);
  }

}

export default new DisciplinaService();