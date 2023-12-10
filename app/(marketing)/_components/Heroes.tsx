import Image from 'next/image'

const Heroes = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
        <div className='flex items-center'>
            <div className='relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]'>
                <Image
                    src="/documents.png"
                    fill
                    className='object-contain dark:hidden'
                    alt="Documents" 
                />
                <Image
                    src="/documents-dark.png"
                    fill
                    className='object-contain hidden dark:block'
                    alt="Documents" 
                />
            </div>
            <div className='relative h-[350px] w-[350px] hidden md:block'>
                <Image 
                    src="/reading.png"
                    fill
                    className='object-contain dark:hidden'
                    alt="Reading"
                />
                <Image 
                    src="/reading-dark.png"
                    fill
                    className='object-contain hidden dark:block'
                    alt="Reading"
                />
            </div>
        </div>
    </div>
  )
}

export default Heroes;