class TodoAPI {
  static baseUrl = "https://dummyjson.com/todos";
  static baseUrlLimit = "https://dummyjson.com/todos?limit=5&skip=10";

  static async getAllTodos() {
    try {
      const response = await fetch(`${TodoAPI.baseUrlLimit}`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching todos:", error);
      return [];
    }
  }

  static async getTodoById(id = 1) {
    try {
      const response = await fetch(`${TodoAPI.baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching todo by ID:", error);
      return null;
    }
  }

  static async addTodo(data) {
    try {
      const response = await fetch(`${TodoAPI.baseUrl}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error adding todo:", error);
      return null;
    }
  }

  static async updateTodo(id, data) {
    try {
      const response = await fetch(`${TodoAPI.baseUrl}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error updating todo:", error);
      return null;
    }
  }

  static async deleteTodo(id) {
    try {
      const response = await fetch(`${TodoAPI.baseUrl}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return response.ok;
    } catch (error) {
      console.error("Error deleting todo:", error);
      return false;
    }
  }
}

export default TodoAPI;
