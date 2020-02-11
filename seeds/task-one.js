exports.seed = function(knex, Promise) {
  return knex('task').insert([   
    { task_name: 'cooking', project_id: 2, completed: true },
    { task_name: 'rowing', project_id: 1, completed: false }
  ]);
};
