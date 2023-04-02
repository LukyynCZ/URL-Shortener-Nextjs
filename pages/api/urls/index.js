import { createUrl } from '../../../lib/prisma/urls';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { url } = req.body;
    try {
      const { resUrl } = await createUrl(url);
      return res.json({ resUrl });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
