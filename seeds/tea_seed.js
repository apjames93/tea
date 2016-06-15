exports.seed = function(knex, Promise) {
        return knex('tea_table').del()
            .then(function() {
                    return Promise.all([

                        // Inserts seed entries
                        knex('tea_table').insert({
                            id: 1,
                            name: 'earlgrey',
                            type: 'black',
                            caffine: true
                        }),

                        knex('tea_table').insert({
                            id: 2,
                            name: 'breakfast',
                            type: 'black',
                            caffine: true
                        }),
                        knex('tea_table').insert({
                            id: 3,
                            name: 'macha',
                            type: 'green',
                            caffine: true
                    })
                  ]);
                })
              };
