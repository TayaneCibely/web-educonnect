import http from "@/common/http";

class UniversidadeService {

  async create(data) {
    return http.post("universidade", data);
  }
  async delete(id) {
    return http.delete(`universidade/${id}`);
  }
  async update(id, data) {
    return http.patch('universidade/' + id, data);
  }
  async load(id) {
    return http.get(`universidade/${id}`);
  }
  async list() {
    return http.get("universidades");
  }
}

export default new UniversidadeService();