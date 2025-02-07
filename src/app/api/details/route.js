import { connectToDatabase } from '@/lib/mongodb';
import MyModel from '@/models/myModel';
import { put } from '@vercel/blob';
import formidable from 'formidable';
import fs from 'fs/promises';
import { Readable } from 'stream';


export const config = {
  api: {
    bodyParser: false, // Required for Formidable
  },
};

// async function readStreamToBuffer(stream) {
//     const chunks = [];
//     for await (const chunk of stream) {
//       chunks.push(chunk);
//     }
//     return Buffer.concat(chunks);
//   }

// GET All Details
export async function GET() {
  await connectToDatabase();
  try {
    const details = await MyModel.find();
    return Response.json(details, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch details' }, { status: 500 });
  }
}

// POST a New Entry (File Upload)
// const blob = new Blob({
//   token: process.env.BLOB_READ_WRITE_TOKEN,
// });

export async function POST(req, res) {
  await connectToDatabase();

  // Handle incoming form data manually
  const formData = await req.formData();
  const name = formData.get('name');
  const siteLink = formData.get('siteLink');
  const gitLink = formData.get('gitLink');
  const tools = formData.get('tools');
  const file = formData.get('image');

  if (!file) {
    return Response.json({ error: 'No image uploaded' },{status: 400});
  }

  try {
  
    const blob = await put(file.name, file, { access: "public" });

 
    // Save the entry to the database
    const newEntry = await MyModel.create({ name, siteLink, gitLink, tools, image: blob.url });

    

    return Response.json(newEntry,{ message: 'File uploaded and saved' },{status: 201});

  } catch (error) {
    return Response.json({ error: 'Error saving to database or uploading file' },{status: 500});

    // return res.status(500).json({ error: 'Error saving to database or uploading file' });
  }
}