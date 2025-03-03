import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className=" text-center">
      {session?.user && (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <p className="my-4">Email: {session?.user?.email}</p>
          <Image
            src={
              session?.user?.image ||
              "https://bookshop-frontend-six.vercel.app/assets/admin-BDCeUw0Y.webp"
            }
            width={100}
            height={100}
            className="rounded-full mx-auto"
            alt="user image"
          />
        </>
      )}
    </div>
  );
};

export default DashboardPage;
