const name_input = document.getElementById('name_input');
const password_input = document.getElementById('password_input');
const confirm_password_input = document.getElementById('confirm_password_input');
const class_input = document.getElementById('class_input');
const category_input = document.getElementById('category_input');
const submit_btn = document.getElementById('submit_btn');
const class_div = document.querySelector('.class_div');
// Show or hide class input based on category
category_input.addEventListener('change', function() {
    if (category_input.value === 'Student') {
        class_div.style.display = 'block';
    } else {
        class_div.style.display = 'none';
    }
});

function registerANewUser() {
    event.preventDefault();

    if (password_input.value === confirm_password_input.value) {
        let obj = {
            category: category_input.value,
            name: name_input.value,
            password: password_input.value,
            class: category_input.value === 'Student' ? class_input.value : null
        };

        axios.post('http://192.168.88.240:3000/admins', obj, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            if (response.status !== 201 && response.status !== 200) {
              throw new Error('Failed to register the user.');
            }
            if (obj.category === 'Student') {
              document.location = "students.html";
              localStorage.setItem('name', obj.name);
              localStorage.setItem('category', obj.category);
              localStorage.setItem('class', obj.class);
            } else if (obj.category === 'Teacher') {
              document.location = "teachers.html";
            } else {
              document.location = "admin.html";
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
          
            //  else if (obj.category === 'Teacher') {
            //     document.location = "teacher.html";
            //     // Additional logic for teachers can go here
            // } else if (obj.category === 'Admin') {
            //     document.location = "admin.html";
            //     // Additional logic for admins can go here
            // }
        
    }
}
