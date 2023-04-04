import prisma from '../prisma';
import shortid from 'shortid';

export async function createUrl(url) {
  // Creating shorId and checking if it's avaiable
  const createId = async () => {
    const shortId = shortid.generate();
    const existingUrlId = await prisma.urlLink.findUnique({
      where: {
        shortId,
      },
    });
    if (existingUrlId) createId();
    return shortId;
  };

  try {
    // Check if the URL exists
    const existingUrl = await prisma.urlLink.findUnique({
      where: {
        fullUrl: url,
      },
    });
    if (!existingUrl) {
      // Url doesn't exist
      const shortId = await createId();
      const newUrl = await prisma.urlLink.create({
        data: {
          fullUrl: url,
          shortId,
        },
      });
      return { resUrl: newUrl };
    }
    // Url exists
    return { resUrl: existingUrl };
  } catch (error) {
    console.log(error);
  }
}
