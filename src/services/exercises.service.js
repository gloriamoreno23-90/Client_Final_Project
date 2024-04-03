import AxiosConfig from "./axios"

class ExerciseService extends AxiosConfig {
  constructor() {
    super("exercises")
  }

  async getAllExercises() {
    const response = await this.axios.get("/list")
    return response.data
  }

  async getOneExercise(id) {
    const response = await this.axios.get(`/getOne/${id}`)
    return response.data
  }

  async creatExercise(data) {
    data.location = {
      type: "Point",
      coordinates: [12, -43],
    }
    const response = await this.axios.post("/create", data)
    return response.data
  }

  async editExercise(id, data) {
    const response = await this.axios.put(`/edit/${id}`, data)
    return response.data
  }
}

export default new ExerciseService()
