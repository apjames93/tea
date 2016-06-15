exports.seed = function(knex, Promise) {
        return knex('tea_table').del()
            .then(function() {
                    return Promise.all([

                        // Inserts seed entries
                        knex('tea_table').insert({
                            name: 'earlgrey',
                            type: 'black',
                            caffine: true
                        }),

                        knex('tea_table').insert({
                            name: 'breakfast',
                            type: 'black',
                            caffine: true
                        }),
                        knex('tea_table').insert({
                            name: 'macha',
                            type: 'green',
                            caffine: true
                    })
                  ]);
                })
              };
