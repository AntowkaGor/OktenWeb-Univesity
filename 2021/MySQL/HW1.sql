--1) найти всех студентов
select * from students;
--2)найти всех женщин
select * from students where gender like 'f%';
--3)найти всех мужчин в возрасте от 25 до 40
select * from students where gender like 'm%' and age between 25 and 40;
--4)найти всех женщин старше 30 и у которых в имени вторая и последняя буква "а"
select * from students where gender like 'f%' and name=('%a' and '__a');
--5) найти среднее арифметическое возрастов всех мужчин
select  avg(age) from students where gender='male';
--6)найти самую старую студентку
select max(age) from students;
--7)выбрать 3 последние записки в БД

--8)посчитать количество мужчин и женщин
select count(age) from students where gender like 'f%';
select count(age) from students where gender like 'm%';
--9)всем мужчинам у которых имя начинается на "а" поменять пол на женский
update students set gender='f%'  where gender = 'm%';
--10)Антона переименовать в Антонину
update students set name='Antonina'  where name = 'Anton';
--11) установить возраст девушек в 10 лет у кого имя не заканчивается на "А"

--12) удалить всех кто не входит в возрастную группу 25-40
delete from students  where age between
