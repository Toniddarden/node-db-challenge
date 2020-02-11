const db = require('../db-config');


// PROJECTS
function find() {
    return db('project')
 }

 function addProject(projects) {
    return db('project').insert(projects)
}
// RESOURCE
function findResource() {
    return db('resource')
}
 function addResource(Resources) {
    return db('resource').insert(Resources)

}
// TASK
function findTask() {
    return db('task')
}
function addTask(tasks) {
    return db('task').insert(tasks)
}



module.exports = { 
    addProject,
    addResource,
    addTask,
    find,
    findTask,
    findResource
}