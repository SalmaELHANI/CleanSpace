import request from 'supertest';
import app from '../app.js';
import {createToken} from '../middleware/adminMiddleware.js'

describe('Routes de contact', () => {
  let contactId;
  let token;

  it('should create a new contact', async () => {
    const newContact = {
      email: 'test@example.com',
      question: 'Test question',
    };

    const response = await request(app)
      .post('/api/contacts')
      .send(newContact);

    expect(response.status).toBe(201);
    expect(response.body.email).toBe('test@example.com');
    expect(response.body.question).toBe('Test question');

    contactId = response.body._id;
  });

  beforeAll(() => {
    const admin = {
      _id: '66057ced552d20430ca79b50', 
    };
    token = createToken(admin);
  });

  it('should get all contacts', async () => {
    const response = await request(app)
      .get('/api/contacts')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should get a contact by ID', async () => {
    const response = await request(app)
      .get(`/api/contacts/${contactId}`)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body._id).toBe(contactId);
  });

  it('should update a contact by ID', async () => {
    const updatedContact = {
      email: 'updated@example.com',
      question: 'Updated question',
    };

    const response = await request(app)
      .put(`/api/contacts/${contactId}`)
      .set('Authorization', `Bearer ${token}`)
      .send(updatedContact);

    expect(response.status).toBe(200);
    expect(response.body.email).toBe('updated@example.com');
    expect(response.body.question).toBe('Updated question');
  });

  it('should delete a contact by ID', async () => {
    const response = await request(app)
    .delete(`/api/contacts/${contactId}`)
    .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    
  });
});