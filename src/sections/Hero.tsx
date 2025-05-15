import SocialButtons from "../components/SocialButtonds";

// Hero.tsx (exemplo)
const Hero = () => {
    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-start">
            <h1 className="text-6xl font-extrabold mb-5">Olá, eu sou Ladislau</h1>
            <p className="text-lg max-w-xl">
                Desenvolvedor full-stack apaixonado por criar
                soluções simples e eficientes. Tenho experiência com React, TypeScript,
                Node.js e banco de dados MySQL.
            </p>
            <SocialButtons />
        </div>
    );
};

export default Hero;
