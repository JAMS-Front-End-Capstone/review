
db.auth('root', 'mypassword');
db.createUser(
  {
    user: 'student',
    pwd: 'student',
    roles: [
      {
        role: 'readWrite',
        db: 'practice'
      }
    ]
  }
);