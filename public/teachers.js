axios.get('http://192.168.88.240:3000/admins')
  .then(response => {
    const data = response.data;
    const users = data.filter(user => user.category === 'Student' || user.category === 'Teacher');
    
    users.forEach(user => {
      const allTeacherAndStudents = document.getElementById('allTeacherAndStudents');
      const studentsDiv = document.createElement('div');

      const name_teacher = document.createElement('p');
      name_teacher.textContent = user.name;

      const category_teacher = document.createElement('p');
      category_teacher.textContent = user.category;

      const class_teacher = document.createElement('p');
      class_teacher.textContent = user.class;

      studentsDiv.append(name_teacher, category_teacher, class_teacher);
      allTeacherAndStudents.appendChild(studentsDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching user data:', error);
  });
