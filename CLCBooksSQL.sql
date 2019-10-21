CREATE TABLE [Books] ( 
        [Order] INTEGER PRIMARY KEY AUTOINCREMENT,
	[ISBN] INTEGER NOT NULL, 
	[Title] VARCHAR(50)  NOT NULL,
	[Author] VARCHAR(50) NOT NULL 
); 

INSERT INTO Books (ISBN, Title, Author) 
Values 
('9781514828144', 'A Byte of Python', 'Swaroop C H'), 
('9781108171021', 'Artificial Intelligence: Foundations of Computational Agents', 'David Poole and Alan Mackworth'), 
('9781441419057', 'How to Think Like a Computer Scientist: C ++', 'Allen B. Downey'), 
('9787308040365', 'How to Think Like a Computer Scientist: Java', 'Allen B. Downey'), 
('9781563249914', 'Philosophy of Computer Science', 'William J. Rapaport');

CREATE TABLE [Availability] (  
	[ISBN] INTEGER PRIMARY KEY NOT NULL,
	[Available] CHARACTER(1) NOT NULL
);  

INSERT INTO Availability (ISBN, Available)
VALUES ('9781514828144', 'Y'), ('9781108171021', 'N'), 
('9781441419057', 'N'), ('9787308040365', 'Y'), ('9781563249914', 'N');
