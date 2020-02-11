exports.seed = function(knex, Promise) {
  return knex('resource').insert([   
    { resource_name: 'online', resource_description: "www.example.com", project_id: 1 },
    { resource_name: 'book', resource_description: "49th library", project_id: 2 }
  ]);
};