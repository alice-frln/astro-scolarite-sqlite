INSERT INTO formations (code, name, level, description) VALUES
('INFO', 'Informatique', 'Licence', 'Formation en informatique'),
('GEST', 'Gestion', 'Licence', 'Formation en gestion'),
('MATH', 'Mathematiques', 'Licence', 'Formation en mathematiques');

INSERT INTO students (student_number, first_name, last_name, email, birth_date) VALUES
('S001', 'Alice', 'Martin', 'alice.martin@email.com', '2002-05-10'),
('S002', 'Paul', 'Bernard', 'paul.bernard@email.com', '2001-11-18'),
('S003', 'Sophie', 'Dubois', 'sophie.dubois@email.com', '2003-01-22');

INSERT INTO teachers (first_name, last_name, email, specialty) VALUES
('Jean', 'Petit', 'jean.petit@email.com', 'Algorithmique'),
('Amelie', 'Lemoine', 'amelie.lemoine@email.com', 'Bases de donnees'),
('Karim', 'Nacer', 'karim.nacer@email.com', 'Reseaux');

INSERT INTO courses (code, name, semester, formation_id) VALUES
('C101', 'Programmation', 1, 1),
('C102', 'SQL', 2, 1),
('C201', 'Comptabilite', 1, 2),
('C202', 'Marketing', 2, 2);

INSERT INTO registrations (student_id, formation_id, academic_year) VALUES
(1, 1, '2024-2025'),
(2, 1, '2024-2025'),
(3, 2, '2024-2025');
