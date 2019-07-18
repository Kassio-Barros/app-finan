const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiUuid = require('chai-uuid');
const chaiDateString = require('chai-date-string');

chai.use(chaiUuid);
chai.use(chaiHttp);
chai.use(chaiDateString);

const app = require('../app');

const { expect } = chai;

describe('Crud', () => {
  describe('Moviment', () => {
    context('Routes', () => {
      it('Get start /', async () => {
        const response = await chai
          .request(app)
          .get('/moviment')
          .send();
        const expected = { success: true };
        expect(response).to.have.status(200);
        expect(expected).to.deep.equal(response.body);
      });
    });
  });
});
