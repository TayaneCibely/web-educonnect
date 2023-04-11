import http from "@/common/http";

class CampusService {

  async create(data) {
    return http.post("campus", data);
  }
  async list() {
    return http.get("campus");
  }
  async delete(id) {
    return http.delete(`campus/${id}`);
  }
  async update(id, data) {
    return http.patch('campus/' + id, data);
  }
  async load(id) {
    return http.get(`campus/${id}`);
  }

}

export default new CampusService();