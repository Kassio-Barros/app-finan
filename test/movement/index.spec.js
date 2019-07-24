const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiUuid = require('chai-uuid');
const chaiDateString = require('chai-date-string');
const chaiInteger = require('chai-integer');

const { successPostRequest, errorNameRequest } = require('./create/create');
const { succesDeleteResponse } = require('./delete/delete');
const { successUpdateRequest } = require('./update/update');

chai.use(chaiUuid);
chai.use(chaiHttp);
chai.use(chaiDateString);
chai.use(chaiInteger);

const app = require('../../app');

const { expect } = chai;

describe('Movements', () => {
  context('create', () => {
    // it('Error POST / missing name', async () => {
    //   const response = await chai
    //     .request(app)
    //     .post('/movement')
    //     .send(errorNameRequest);
    //   expect(response).to.have.status(422);
    //   expect(response.body.data).to.be.equal(null);
    //   expect(response.body.errors).to.be.a('array');
    //   expect(response.body.errors[0].field).to.have.equal('name');
    //   expect(response.body.errors[0].message).to.be.a.equal(
    //     'Este campo é obrigatório!'
    //   );
    // });

    let createId;
    it('Success POST /', async () => {
      const response = await chai
        .request(app)
        .post('/movement')
        .send(successPostRequest);

      createId = response.body.data.id;

      expect(response).to.have.status(200);
      expect(response.body.success).to.have.equal(true);
      expect(response.body.data.id).to.be.a.uuid('v4');
      expect(response.body.data.amount).to.be.an.integer();
      expect(response.body.data.expiryDate).to.be.a.dateString();
    });
    it('Success GET by Id /', async () => {
      const response = await chai
        .request(app)
        .get(`/movement/${createId}`)
        .send();
      expect(response).to.have.status(200);
      expect(response.body.success).to.have.equal(true);
      expect(response.body.data.id).to.be.a.uuid('v4');
      expect(response.body.data.amount).to.be.an.integer();
      expect(response.body.data.expiryDate).to.be.a.dateString();
    });
    // it('Error GET by error Id /', async () => {
    //   const response = await chai
    //     .request(app)
    //     .get('/movement/errorId2132312442342342')
    //     .send();
    //   expect(response).to.have.status(404);
    //   expect(response.body.success).to.have.equal(false);
    //   expect(response.body.error).to.have.equal('Registro não encontrado!');
    // });
    // it('Success GET /', async () => {
    //   const response = await chai
    //     .request(app)
    //     .get('/movement')
    //     .send();

    //   expect(response).to.have.status(200);
    //   expect(response.body.success).to.have.equal(true);
    //   expect(response.body.data.result[0].id).to.be.a.uuid('v4');
    //   expect(response.body.data.result[0].name).to.be.a('string');
    //   expect(response.body.data.result[0].amount).to.be.an.integer();
    //   expect(response.body.data.result[0].createdAt).to.be.a.dateString();
    //   expect(response.body.data.result[0].updatedAt).to.be.a.dateString();
    // });
    // it('Success PUT /', async () => {
    //   const response = await chai
    //     .request(app)
    //     .put(`/movement/${createId}`)
    //     .send(successUpdateRequest);
    //   expect(response).to.have.status(200);
    //   expect(response.body.success).to.have.equal(true);
    //   expect(response.body.data.name).to.be.a('string');
    //   expect(response.body.data.name).to.be.equal(successUpdateRequest.name);

    //   const getById = await chai
    //     .request(app)
    //     .get(`/movement/${createId}`)
    //     .send();
    //   expect(getById).to.have.status(200);
    //   expect(getById.body.success).to.have.equal(true);
    //   expect(getById.body.data.id).to.be.a.uuid('v4');
    //   expect(getById.body.data.name).to.be.a('string');
    //   expect(getById.body.data.amount).to.be.an.integer();
    //   expect(getById.body.data.createdAt).to.be.a.dateString();
    //   expect(getById.body.data.updatedAt).to.be.a.dateString();
    // });
    // it('Success DELETE /', async () => {
    //   const response = await chai
    //     .request(app)
    //     .delete(`/movement/${createId}`)
    //     .send();
    //   expect(succesDeleteResponse).to.deep.equal(response.body);
    // });
  });
});
