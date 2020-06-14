const studentList=['Joel', 'Adam', 'Aaron'];

for (i=0; i<3; i++) {
    const name=prompt('enter a name');
    studentList.push(name)
}

for (i=0; i<studentList.length; i++) {
    console.log(studentList[i]);
}