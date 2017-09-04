INSERT INTO Superheroes (name, power)
VALUES ($1,$2)
RETURNING *;