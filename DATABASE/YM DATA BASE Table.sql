CREATE TABLE people( 
id SERIAL PRIMARY KEY,
full_name TEXT,
email TEXT UNIQUE,
region TEXT,
consent_at TIMESTAMP,
created_at TIMESTAMP DEFAULT now()
);