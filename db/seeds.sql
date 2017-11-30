INSERT INTO authors (name) VALUES ('Dr. Book');
INSERT INTO authors (name) VALUES ('Bob');
INSERT INTO authors (name) VALUES ('Jack');
INSERT INTO authors (name) VALUES ('Simon');
INSERT INTO authors (name) VALUES ('Tom');

INSERT INTO stories (title, snippet, author, authorID, genre) VALUE ('Chicken Crossing the Road', 'The chicken runs wherever he goes.', 'Dr. Book', 1, 'Mystery');

INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (1, 1, 'Bob', 2, 'During every red light, he still second guesses himself.');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (1, 1, 'Jack', 3, 'When the going gets tough, he is also able to fly.');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (1, 2, 'Simon', 4, 'However, the chicken is still in one piece.');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (1, 2, 'Tom', 5, 'This is so that he ca avoid becoming a meal.');