exports.up = function(knex) {
  return knex.schema
    .createTable("project", tbl => {
      tbl.increments();
      tbl.text("project_name", 128).notNullable()
      tbl.boolean("completed").defaultTo(false).notNullable();
    })
    .createTable("resource", tbl => {
      tbl.increments();
      tbl.text("resource_name", 128);
      tbl.text("resource_description", 128);
      tbl.integer("project_id").unsigned().notNullable().references("project.id").onDelete('CASCADE').onUpdate('CASCADE');
    })
    .createTable("task", tbl => {
      tbl.increments();
      tbl.text("task_name", 128).notNullable();
      tbl.integer("project_id").unsigned().notNullable().references("project.id").onDelete('CASCADE').onUpdate('CASCADE');
      tbl.boolean("completed").defaultTo(false).notNullable();
    })
    .createTable("resource_tasks", tbl => {
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("task")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        tbl.foreign('task_id').references('task.id');
        tbl.primary(['resource_id','task_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("resource_tasks")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
