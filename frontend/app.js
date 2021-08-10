var app = new Vue({
  el: "#app",
  data: {
    todos: [],
    id_todos: null,
    name_todos: "",
    showFormTodos: false,
    is_edit_todos: false,

    activities: [],
    id_activities: null,
    name_activities: "",
    check_activities: false,
    is_show_activity: false,
    showFormActivity: false,
    is_edit_activities: false,
    score: null,
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      var self = this;
      axios
        .get("http://localhost:3000/todo")
        .then(function (response) {
          self.todos = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    createTodos() {
      this.showFormTodos = !this.showFormTodos;
      this.is_edit_todos = false;
    },
    editTodos(id, name) {
      this.showFormTodos = true;
      this.is_edit_todos = true;
      this.id_todos = id;
      this.name_todos = name;
    },
    saveTodos() {
      var self = this;
      let data = JSON.stringify({
        name: this.name_todos,
      });
      if (this.is_edit_todos) {
        console.log("edit");
        axios
          .put("http://localhost:3000/todo/" + this.id_todos, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(function (response) {
            self.resetTodos();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("baru");
        axios
          .post("http://localhost:3000/todo", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(function (response) {
            self.resetTodos();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    destroyTodos(id) {
      var self = this;
      axios
        .delete("http://localhost:3000/todo/" + id)
        .then(function (response) {
          self.resetTodos();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    resetTodos() {
      this.getTodos();
      this.id_todos = null;
      this.name_todos = "";
      this.showFormTodos = false;
      this.is_edit_todos = false;
    },

    showActivities(todo_id) {
      var self = this;
      this.is_show_activity = true;
      this.id_todos = todo_id;
      axios
        .get("http://localhost:3000/activity/" + todo_id + "/todo")
        .then(function (response) {
          var data = response.data;
          self.activities = data;
          var score = 0;
          data.forEach((element) => {
            if (element.check) {
              score++;
            }
          });
          self.score = Math.trunc((score / data.length) * 100) + "%";
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    createActivities() {
      this.showFormActivity = !this.showFormActivity;
      this.is_edit_activities = false;
    },
    editActivities(id, name) {
      this.showFormActivity = true;
      this.is_edit_activities = true;
      this.id_activities = id;
      this.name_activities = name;
    },
    saveActivities() {
      var self = this;
      let data = JSON.stringify({
        name: this.name_activities,
        todoId: this.id_todos,
      });
      if (this.is_edit_activities) {
        axios
          .put("http://localhost:3000/activity/" + this.id_activities, data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(function (response) {
            self.resetActivity();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:3000/activity", data, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(function (response) {
            self.resetActivity();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    destroyActivity(id) {
      var self = this;
      axios
        .delete("http://localhost:3000/activity/" + id)
        .then(function (response) {
          self.resetActivity();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    updateCheckActivity(id, value) {
      var self = this;
      let data = JSON.stringify({
        check: !value,
      });
      axios
        .put("http://localhost:3000/activity/" + id, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          self.resetActivity();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    resetActivity() {
      this.showActivities(this.id_todos);
      this.id_activities = null;
      this.name_activities = "";
      this.showFormActivity = false;
      this.is_edit_activities = false;
    },
  },
});
