// lib/firebaseAdmin.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "euphoria-262f2",
      clientEmail: "princeowire131@gmail.com",
      privateKey: "AIzaSyAYxYn3kB3yh5LYmdDenrbB4Bv6l6Zm2fo".replace(/\\n/g, '\n'),
    }),
  });
}

export const verifyIdToken = async (token) => {
  return admin.auth().verifyIdToken(token);
};
