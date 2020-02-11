exports.seed = function(knex, Promise) {
  return knex('project').insert([   
    { project_name: 'cooking', completed: true },
    { project_name: 'rowing', completed: true }
  ]);
};