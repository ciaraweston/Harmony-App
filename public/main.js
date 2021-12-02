var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

const app = new function () {
  this.el = document.getElementById('ideas');
  this.ideas = []

  this.FetchAll = function () {
    let data = '';
    console.log(ideas)

    if (this.ideas.length > 0) {
      for (i = 0; i < this.ideas.length; i++) {
        data += '<tr>';
        data += '<td>' + (i + 1) + '. ' + this.ideas[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')" class="btn btn-warning">Edit</button></td> ';
        data += '<td><button onclick="app.Delete(' + i + ')" class="btn btn-danger">Delete</button></td> ';
      }
    }
    this.Count(this.ideas.length);
    return this.el.innerHTML = data
  };

  this.Add = function () {
    el = document.getElementById('add-idea');
    let idea = el.value;
    if (idea) {
      this.ideas.push(idea.trim());
      el.value = '';
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    el = document.getElementById('edit-idea');
    el.value = this.ideas[item]
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function () {
      let idea = el.value;
      if (idea) {
        self.ideas.splice(item, 1, idea.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    this.ideas.splice(item, 1)
    this.FetchAll();
  };

  this.Count = function (data) {
    const el = document.getElementById('counter');
    let name = 'Ideas';
    if (data) {
      if (data == 1) {
        name = 'Idea';
      }
      el.innerHTML = data + ' ' + name;
    }
    else {
      el.innerHTML = "No " + name;
    }
  };
}

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}

