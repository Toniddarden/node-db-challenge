const db = require('../db-config');


// PROJECTS
function find() {
    return db('project')
 }

function addProject(pj) {
    return db('project')
      .insert(pj, 'id')
      .then(ids => ({ id: ids[0] }));
  }
// RESOURCE
function findResource() {
    return db('resource')
}
 function addResource(source) {
    return db('resource').insert(source, 'id').then(sources => ({id: sources[0]}))
}
// TASK
function findTask() {
    return db('task')
}
function addTask(tasks) {
    return db('task').insert(tasks, 'id').then(tasks => ({id: tasks[0]}))
}



module.exports = { 
    addProject,
    addResource,
    addTask,
    find,
    findTask,
    findResource
}