import Image from "next/image";

export default function Home() {
  return (
  
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">
        <div className="text-center times-new-roman">
          <Image 
            src="/Sonwel_logo.png" 
            alt="Sonwel Logo" 
            width={300} 
            height={300} 
            className="mb-4"
          />
          
          <a 
            href="https://www.linkedin.com/in/kamalsonikgp/" 
            className="linkedin-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            By Kamal Soni
          </a>
         
        </div>
      </main>

  );
}
