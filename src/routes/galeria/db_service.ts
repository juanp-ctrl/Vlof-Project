// db_service.ts
import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('/home/pablo/Vlof-Proyect/Vlof/data/gallery.db');

export async function getGalleryData() {
  return new Promise<any[]>((resolve, reject) => {
    const query = 'SELECT * FROM gallery';
    db.all(query, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

