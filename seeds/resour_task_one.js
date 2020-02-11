
exports.seed = function(knex, Promise) {
  return knex('resource_tasks').insert([
    { resource_id: 1, task_id: 1 },
    { resource_id: 1, task_id: 2 },
    { resource_id: 1, task_id: 3 },
    { resource_id: 1, task_id: 4 },
    { resource_id: 1, task_id: 5 },
    { resource_id: 1, task_id: 8 },
    { resource_id: 2, task_id: 3 },
    { resource_id: 2, task_id: 5 },
    { resource_id: 2, task_id: 6 },
    { resource_id: 2, task_id: 7 },
    { resource_id: 2, task_id: 8 },
    { resource_id: 2, task_id: 9 },
    { resource_id: 2, task_id: 10 },
    { resource_id: 2, task_id: 11 }
  ]);
};