import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image
        src="https://i.ibb.co/s6qyp7H/logo.jpg"
        // src="/public/logo.jpg"
        alt="profile"
        width={200}
        height={200}

      />
      Arpit Sarkar Portfolio
    </div>
  );
}
