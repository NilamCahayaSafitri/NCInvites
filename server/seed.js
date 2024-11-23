import 'dotenv/config';
import { db } from './configs/db.js';

const users = [
  {
    id: '1',
    nama: 'Nathan Doe',
    email: 'nathan@mail.com',
    password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
    nohp: '081234567890',
    role: 'admin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    nama: 'Jane Smith',
    email: 'jane@mail.com',
    password: '$2b$10$vD5yRWdxLp1j6riuSi/Ozu71x145viXeGC7AHT5R0WcycGalmYTae',
    nohp: '081234567891',
    role: 'pengantin',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const tamu = [
  {
    id_tamu: '1',
    nama: 'Nathan Doe',
    email: 'nathan@mail.com',
    nohp: '081234567890',
    url_undangan: 'https://example.com/undangan/nathan',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id_tamu: '2',
    nama: 'Jane Smith',
    email: 'jane@mail.com',
    nohp: '081234567891',
    url_undangan: 'https://example.com/undangan/jane',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const undangan = [
  {
    id_undangan: '1',
    id_admin: '1',
    id_pengantin: '1',
    tanggal_pernikahan: new Date('2024-12-01').toISOString(),
    alamat: 'Jl. Mawar No. 1, Jakarta',
    musik: 'Jazz',
    foto: 'https://example.com/foto-pernikahan.jpg',
    deskripsi: 'Selamat datang di pernikahan kami!',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const rsvp = [
  {
    id_rsvp: '1',
    id_undangan: '1',
    id_tamu: '1',
    status_kehadiran: 'Hadir',
    url_undangan: `https://example.com/konfirmasi-kehadiran/1/1`,
    catatan: 'Akan membawa hadiah',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id_rsvp: '2',
    id_undangan: '1',
    id_tamu: '2',
    status_kehadiran: 'Tidak Hadir',
    catatan: 'Sedang di luar kota',
    url_undangan: `https://example.com/konfirmasi-kehadiran/1/1`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

try {
  // Seeding Users
  let collection = db.collection('users');
  console.log('[seed]', 'Seeding Users...');
  const usersResult = await collection.insertMany(users);
  console.log(usersResult.insertedIds);
  console.log('[seed]', 'Seeding Users Done');

  // Seeding Tamu
  collection = db.collection('tamu');
  console.log('[seed]', 'Seeding Tamu...');
  const tamuResult = await collection.insertMany(tamu);
  console.log(tamuResult.insertedIds);
  console.log('[seed]', 'Seeding Tamu Done');

  // Seeding Undangan
  collection = db.collection('undangan');
  console.log('[seed]', 'Seeding Undangan...');
  const undanganResult = await collection.insertMany(undangan);
  console.log(undanganResult.insertedIds);
  console.log('[seed]', 'Seeding Undangan Done');

  // Seeding RSVP
  collection = db.collection('rsvp');
  console.log('[seed]', 'Seeding RSVP...');
  await collection.insertMany(rsvp);
  console.log('[seed]', 'Seeding RSVP Done');

  console.log('[seed]', 'All Done');
} catch (error) {
  console.log('[seed]', 'Error: ', error);
}

process.exit();
