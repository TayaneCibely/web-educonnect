import http from "@/common/http";

class DocenteService {

  async create(data) {
    return http.post("docente", data);
  }
  async list() {
    return http.get("docentes");
  }
  async delete(id) {
    return http.delete(`docente/${id}`);
  }
  async update(id, data) {
    return http.patch(`docente/${id}`, data);
  }
  async load(id) {
    return http.get(`docente/${id}`);
  }

}

export default new DocenteService();