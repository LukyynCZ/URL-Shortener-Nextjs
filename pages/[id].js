import prisma from '@/lib/prisma';

export async function getServerSideProps(context) {
  const shortId = context.params.id;
  const urlData = await prisma.urlLink.findUnique({
    where: {
      shortId: shortId,
    },
  });

  if (!urlData) {
    return {
      notFound: true,
    };
  } else
    return {
      redirect: {
        destination: urlData.fullUrl,
        permanent: false,
      },
    };
}

const RedirectingPage = () => {
  return <></>;
};

export default RedirectingPage;
