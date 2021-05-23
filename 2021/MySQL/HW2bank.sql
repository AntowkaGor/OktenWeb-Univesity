USE bank;


SELECT *
FROM client;


SELECT *
FROM application;


SELECT *
FROM department;

-- 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.

SELECT *
FROM client
WHERE length(FirstName) < 6;

-- 2. +Вибрати львівські відділення банку.+

SELECT *
FROM department
WHERE departmentcity = 'Lviv';

-- 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.

SELECT *
FROM client
WHERE education = 'high'
ORDER BY lastname ;

-- 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.

SELECT *
FROM application
ORDER BY idApplication DESC
LIMIT 5 ;

-- 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.

SELECT *
FROM client
WHERE lastname LIKE '%iv'
  OR lastname LIKE '%iva';

-- 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.

SELECT *
FROM client
JOIN department ON department_iddepartment = iddepartment
WHERE departmentcity = 'kyiv';

-- 7. +Вивести імена клієнтів та їхній паспорт, погрупувавши їх за іменами.

SELECT count(firstname),
       firstname,
       passport
FROM client
GROUP BY firstname;

-- 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.

SELECT *
FROM client
JOIN application ON client.idClient = application.client_idClient
WHERE SUM > 5000
  AND creditState = 'not returned'
  AND currency = 'Gryvnia';

-- 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.

SELECT idDepartment,
       DepartmentCity,
       count(idClient)
FROM client
JOIN department ON department_iddepartment= iddepartment
GROUP BY iddepartment;


SELECT idDepartment,
       DepartmentCity,
       count(idClient)
FROM client
JOIN department ON department_iddepartment= iddepartment
WHERE departmentCity ='Lviv'
GROUP BY iddepartment ;

-- 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.

SELECT max(SUM)
FROM client
JOIN application ON idClient=Client_idClient
GROUP BY Client_idClient;

-- 11. Визначити кількість заявок на крдеит для кожного клієнта.

SELECT client_idClient,
       count(idApplication)
FROM application
GROUP BY client_idClient;

-- 12. Визначити найбільший та найменший кредити.

SELECT max(SUM) AS maxSum,
       min(SUM) AS minSum
FROM application;

-- 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.

SELECT idclient,
       firstname,
       education,
       count(idApplication)
FROM client
JOIN application ON idClient = client_idClient
WHERE education = 'high'
GROUP BY idclient;

-- 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.

SELECT client.*,
       avg(SUM) AS avgSum
FROM client
JOIN application ON client.idClient = application.client_idClient
GROUP BY idClient
ORDER BY avgSum DESC
LIMIT 1;

-- 15. Вивести відділення, яке видало в кредити найбільше грошей

SELECT department.*,
       sum(SUM)
FROM department
JOIN client ON department_idDepartment = idDepartment
JOIN application ON client_idClient = idClient
GROUP BY iddepartment
LIMIT 1;

-- 16. Вивести відділення, яке видало найбільший кредит.

SELECT department.*,
       max(SUM)
FROM department
JOIN client ON department_idDepartment = idDepartment
JOIN application ON client_idClient = idClient
GROUP BY iddepartment
LIMIT 1;

-- 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.

UPDATE application
JOIN client ON idclient = client_idClient
SET SUM = 6000,
          currency = "UAH"
WHERE education = 'high';

-- 18. Усіх клієнтів київських відділень пересилити до Києва.

UPDATE client
JOIN department ON department_idDepartment = idDepartment
SET city = 'Kyiv'
WHERE departmentCity = 'kyiv';

-- 19. Видалити усі кредити, які є повернені.

DELETE
FROM application
WHERE creditstate = 'returned';

-- 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.

DELETE application
FROM application
JOIN client ON idClient = client_idClient
WHERE lower(lastname) RLIKE '^.[aeiou]';

-- Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
 -- Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
 --  Знайти максимальний неповернений кредит.
 -- Знайти клієнта, сума кредиту якого найменша
 -- Знайти кредити, сума яких більша за середнє значення усіх кредитів
 -- Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
 --  -- #місто чувака який набрав найбільше кредитів
 --  -- set sql_safe_updates = 0;
 -- set sql_safe_updates = 1;
