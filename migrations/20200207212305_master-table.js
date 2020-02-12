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
    .createTable("project_resource", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        tbl.foreign('project_id').references('project_id');
        tbl.primary(['project_id','resource_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resource")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
