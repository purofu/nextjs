
import Image from 'next/image';
import ShowcasePage from './ShowcasePage'; // Importing ShowcasePage

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Existing content... */}
      
      {/* Rendering ShowcasePage */}
      <ShowcasePage />

      {/* ... More existing content */}
    </main>
  )
}
