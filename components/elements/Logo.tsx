import Image from "next/image";

const Logo = () => {
    return (
        <div className="flex justify-center my-10">
            <Image
                src="/images/logo.png"
                alt="logo metin2"
                width={1000}
                height={1000}
                className="w-72 animate-pulse duration-300"
            />
        </div>
    );
};

export default Logo;
