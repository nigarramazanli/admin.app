updateUserList()
function updateUserList() {
  // Clear the current list
  users_div.innerHTML = '';

  // Fetch and display updated data
  axios.get('http://192.168.88.240:3000/admins')
    .then(response => {
      const data = response.data;
      data.forEach(user => {
        const user_div = document.createElement('div');

        const name_user = document.createElement('p');
        name_user.textContent = user.name;

        const category_user = document.createElement('p');
        category_user.textContent = user.category;

        const class_user = document.createElement('p');
        class_user.textContent = user.class;

        const button_delete = document.createElement('button');
        button_delete.textContent = 'Delete';

        button_delete.addEventListener('click', () => {
          axios.delete(`http://192.168.88.240:3000/admins/${user.id}`)
            .then(response => {
              updateUserList(); // Refresh the list after deletion
            })
            .catch(error => {
              console.error('Error deleting user:', error);
            });
        });

        user_div.append(name_user, category_user, class_user, button_delete);
        users_div.appendChild(user_div);
      }); 
    })
    .catch(error => {
      console.error('Error fetching admin data:', error);
    });
  }