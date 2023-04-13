import http from "@/common/http";

class CursoService {

  async create(data) {
    return http.post("curso", data);
  }
  async list() {
    return http.get("cursos");
  }
  async delete(id) {
    return http.delete(`curso/${id}`);
  }
  async update(id, data) {
    return http.patch('curso/' + id, data);
  }
  async load(id) {
    return http.get(`curso/${id}`);
  }

}

export default new CursoService();