const tape = require('tape');
const runDbBuild = require("../src/database/db_build");
const getData = require("../src/queries/getData");
const postData = require("../src/queries/postData");


tape("Tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape('db_build test ', (t) => {
  runDbBuild(function(err, res) {
    t.error(err);
    getData((err, data) => {
      t.error(err);
      let actual = data;
      let expected = [ { id: 1,
        name: 'Linux is a nutshell',
        author: 'AbuSalma',
        year: 2009 },
      { id: 2,
        name: 'Linux is a not nutshell',
        author: 'Abu-Salma',
        year: 2011 },
      { id: 3,
        name: 'Linux is a nothing',
        author: 'AbuSalma1',
        year: 1999 },
      { id: 4,
        name: 'Windows is a nutshell',
        author: 'Abu',
        year: 1965 } ];
      t.deepEquals(actual, expected, "alice is in the wonder world");
      t.end();
    });
  });
});

tape('posting the data', (t) => {
    runDbBuild(function (err, res) {
        t.error(err);
        postData('JS basics', 'Cristiano ronaldo',2005, (err, data) => {
            getData((err, data) => {
                t.error(err);
                let actual = data;
                let expected = [ { id: 1,
                  name: 'Linux is a nutshell',
                  author: 'AbuSalma',
                  year: 2009 },
                { id: 2,
                  name: 'Linux is a not nutshell',
                  author: 'Abu-Salma',
                  year: 2011 },
                { id: 3,
                  name: 'Linux is a nothing',
                  author: 'AbuSalma1',
                  year: 1999 },
                { id: 4,
                  name: 'Windows is a nutshell',
                  author: 'Abu',
                  year: 1965 },
                  { id: 5,
                    name: 'JS basics',
                    author: 'Cristiano ronaldo',
                    year: 2005 }
                ]
                t.deepEquals(actual, expected, "Post data working");
                t.end();
            });
        });
    });
});
