import http from "@/common/http";

class DiscenteService {

  async create(data) {
    return http.post("discente", data);
  }
  async list() {
    return http.get("discentes");
  }
  async delete(id) {
    return http.delete(`discente/${id}`);
  }
  async update(id, data) {
    return http.put(`discente/${id}`, data);
  }
  async load(id) {
    return http.get(`discente/${id}`);
  }

}

export default new DiscenteService();