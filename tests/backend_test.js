const tape = require('tape');
const supertest = require('supertest');
const router = require('../src/router');


tape("Tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape('Home route returns a status code of 200', (t) => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);

      t.equal(res.statusCode, 200, 'Should return 200');
      t.end()

    });
});


tape('unkown route returns a status code of 404', (t) => {
    supertest(router)
        .get("/sdksd")
        .expect(404)
        .expect('Content-Type', /html/)
        .end((err, res) => {
            t.error(err);

      t.equal(res.statusCode, 404, 'Should return 404');
      t.end()

    });
});
