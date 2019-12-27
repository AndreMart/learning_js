const options = [{
    "id": 6,
    "book_unit_question_id": 2,
    "description": "get",
    "image_sound": null,
    "correct": true,
    "status": false,
    "user_id": 1,
    "created_at": "2019-12-27 16:06:27",
    "updated_at": "2019-12-27 16:06:27"
  },
  {
    "id": 5,
    "book_unit_question_id": 2,
    "description": "are",
    "image_sound": null,
    "correct": false,
    "status": false,
    "user_id": 1,
    "created_at": "2019-12-27 16:06:21",
    "updated_at": "2019-12-27 16:06:33"
  },
  {
    "id": 7,
    "book_unit_question_id": 2,
    "description": "go to",
    "image_sound": null,
    "correct": false,
    "status": false,
    "user_id": 1,
    "created_at": "2019-12-27 16:06:39",
    "updated_at": "2019-12-27 16:06:39"
  },
  {
    "id": 8,
    "book_unit_question_id": 2,
    "description": "move",
    "image_sound": null,
    "correct": false,
    "status": false,
    "user_id": 1,
    "created_at": "2019-12-27 16:06:43",
    "updated_at": "2019-12-27 16:06:43"
  }
]

radom = (max, min) => { 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(radom(options.length,0))