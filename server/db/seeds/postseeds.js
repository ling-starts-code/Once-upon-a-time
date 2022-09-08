exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('post')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {
          id: 1,
          post: 'there was a hungry Aaron who would not tell us how old he was even tho he just had his birthday so we all think he is mysteriously not aging aka benjamin button Next person types their sentence from the last words',
        },
      ])
    })
}
