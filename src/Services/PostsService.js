import axios from "axios";
class PostsService {
  constructor() {
    const instance = axios.create({
      baseURL: "http://localhost:8000",
    });

    this.client = instance;
  }
  async getAll() {
    try {
      const { data } = await this.client.get("api/posts");
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
  async get(id) {
    try {
      const { data } = await this.client.get(`api/posts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}
export default new PostsService();
