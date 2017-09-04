DROP TABLE IF EXISTS superheroes;

CREATE TABLE IF NOT EXISTS superheroes (
    id SERIAL PRIMARY KEY,
    name TEXT,
    power TEXT
);

INSERT INTO superheroes (name, power)
VALUES  ('Ash', 'Breaching Round'),
        ('Jager', 'ADS'),
        ('Bandit', 'Battery'),
        ('Hibana', 'XKAIROS');