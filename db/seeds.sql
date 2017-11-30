INSERT INTO authors (name) VALUES ('Dr. Book');
INSERT INTO authors (name) VALUES ('Bob');
INSERT INTO authors (name) VALUES ('Jack');
INSERT INTO authors (name) VALUES ('Simon');
INSERT INTO authors (name) VALUES ('Tom');

INSERT INTO stories (title, snippet, author, authorID, genre) VALUE ('Chicken Crossing the Road', 'The chicken runs wherever he goes.', 'Dr. Book', 1, 'Mystery');
INSERT INTO stories (title, snippet, author, authorID, genre) VALUE ('Yankee Doodle', 'Yankee Doodle Came To Town', 'Simon', 4, 'Funny');
INSERT INTO stories (title, snippet, author, authorID, genre) VALUE ('The Very Confused Dog', 'A dog saw a spoon. This was very confusing to him.', 'Jack', 3, 'Fiction');
INSERT INTO stories (title, snippet, author, authorID, genre) VALUE ('The epic tale of Frugu McGee', 'One morning Frugu was eating breakfast but he knew that something was wrong.', 'Bob', 2, 'Fiction');
INSERT INTO stories (title, snippet, author, authorID, genre) VALUE ('Revenge of the little Lamb', 'Mary had a little Lamb, but all that was about to change.', 'Tom', 5, 'Fiction');
INSERT INTO stories (title, snippet, author, authorID, genre) VALUE ('I write too much', 'Help there are too many stories', 'Dr. Book', 3, 'SOS');

INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (1, 1, 'Bob', 2, 'During every red light, he still second guesses himself.');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (1, 1, 'Jack', 3, 'When the going gets tough, he is also able to fly.');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (1, 2, 'Simon', 4, 'However, the chicken is still in one piece.');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (1, 2, 'Tom', 5, 'This is so that he ca avoid becoming a meal.');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (2, 1, 'Simon', 4, 'Riding on a pony.');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (2, 1, 'Dr. Book', 1, 'In his monster truck');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (2, 2, 'Simon', 4, 'Stuck a feather in his cap');
INSERT INTO snippets (parentID, level, author, authorID, text) VALUE (2, 2, 'Bob', 2, 'Stuck a fidget spinner in his cap');