const my_information = document.getElementById('my_information');





const get_Class = localStorage.getItem('class');
const get_Name = localStorage.getItem('name');


const get_Category = localStorage.getItem('category');
const name_value= document.createElement('p');

name_value.textContent=get_Name;

const category_value= document.createElement('p');
category_value.textContent=get_Category;
const class_value= document.createElement('p');

class_value.textContent=get_Class;

my_information.append(name_value,category_value,class_value);





