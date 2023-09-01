// pages/api/getUrlData.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { url } = req.body;
      
      if (!url) {
        return res.status(400).json({ error: 'URL not provided' });
      }

      // You can now process the URL or perform any desired actions here
      // For simplicity, let's just echo back the received URL
      return res.status(200).json({ message: `Received URL: ${url}` });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
