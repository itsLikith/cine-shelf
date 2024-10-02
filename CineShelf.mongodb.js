use("cineshelf");
db.Cine.find({})

db.Cine.insertOne({
  "movieName": "Animal",
  "director": "Sandeep Reddy Vanga",
  "musicDirector": "Harshavardhan Rameshwar",
  "cast": {
    "actor": "Ranbir Kapoor",
    "actress": "Rashmika Mandanna"
  },
  "productionBanner": "T-Series Films",
  "genre": ["Action", "Drama", "Thriller"],
  "duration": "2h 30m",
  "ageRating": "A",
  "description": "Animal is a 2023 Indian Hindi-language action drama film directed by Sandeep Reddy Vanga.",
  "views": 0,
  "rating": 4.1,
  "tags": ["Hindi", "Action", "Drama"],
  "awards": ["Filmfare Award for Best Actor"]
})