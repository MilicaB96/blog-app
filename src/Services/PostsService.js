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
  async add(post) {
    try {
      const { data } = await this.client.post("api/posts", post);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
  async edit(id, post) {
    try {
      const { data } = await this.client.put(`api/posts/${id}`, post);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
  async delete(id) {
    try {
      const { data } = await this.client.delete(`api/posts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
    return [];
  }
}
export default new PostsService();
