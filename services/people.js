const Person = require('../models/person');

module.exports = {
  getPeople: getPeople
}

const people = [
  new Person(1, 'Shayne Boyer', '@spboyer'),
  new Person(2, 'Ruth Yakubu', '@ruthieyakubu'),
  new Person(3, 'Allison Krug', '@allinison'),
  new Person(4, 'Abel Wang', '@AbelSquidHead'),
  new Person(5, 'Brian Clark', '@_clarkio'),
  new Person(6, 'Bernd Verst', '@BerndVerst'),
  new Person(7, 'Bridget Kromhout', '@bridgetkromhout'),
  new Person(8, 'Lena Hall', '@lenadroid'),
  new Person(9, 'Sarah Drasner', '@sarah_edo'),
  new Person(10, 'Jasmine Greenaway', '@paladique'),
  new Person(11, 'Asim Hussain', '@jawache'),
  new Person(12, 'Jess Frazelle', '@jessfraz'),
  new Person(13, 'Anthony Chu', '@nthonychu'),
  new Person(14, 'Golnaz Alibeigi', '@Golnaz89'),
  new Person(15, 'Aaron', '@as_w'),
  new Person(16, 'Donovan Brown', '@donovanbrown'),
  new Person(17, 'Jeremy Likness', '@jeremylikness'),
  new Person(18, 'Damian Brady', '@damovisa'),
  new Person(19, 'Jessica Deen', '@jldeen'),
  new Person(20, 'Maxime Rouiller', '@MaximRouiller'),
  new Person(21, 'Brian Benz', '@bbenz'),
  new Person(22, '@DynamicWebPaige', '@DynamicWebPaige'),
  new Person(23, 'Vadim Karpusenko', '@Vadi'),
  new Person(24, 'Zachary Deptawa', '@zdeptawa'),
  new Person(25, 'Seth Juarez', '@sethjuarez'),
  new Person(26, 'John Papa', '@John_Papa'),
  new Person(27, 'Brian Peek', '@BrianPeek'),
  new Person(28, 'Simona Cotin', '@simona_cotin'),
  new Person(29, 'Cecil L. Phillip', '@cecilphillip'),
  new Person(30, 'Bryan Liston', '@listonb'),
  new Person(31, 'Matthew Soucoup', '@CodeMillMatt'),
  new Person(32, 'Steven Murawski', '@StevenMurawski'),
  new Person(33, 'Ashley McNamara', '@AshleyMcNamara'),
  new Person(34, 'Brian Ketelsen', '@bketelsen'),
  new Person(35, 'Matthew Soucoup', '@CodeMillMatt'),
  new Person(36, 'Laurent Bugnion', '@LBugnion'),
  new Person(37, 'Christina Warren', '@film_girl'),
  new Person(38, 'Suz Hinton', '@noopkat'),
  new Person(39, 'Prashant', '@coolasspuppy'),
  new Person(40, 'Tim Heuer', '@timheuer'),
  new Person(41, 'Jeff Sandquist', '@jeffsand')
]

function getPeople() {
  return {
    count: people.length,
    results: people
  };
}