import http from "@/common/http";

class EmentaService {

  async create(data) {
    return http.post("ementa", data);
  }
  async list() {
    return http.get("ementas");
  }
  async delete(id) {
    return http.delete(`ementa/${id}`);
  }
  async update(id, data) {
    return http.patch('ementa/' + id, data);
  }
  async load(id) {
    return http.get(`ementa/${id}`);
  }

}

export default new EmentaService();