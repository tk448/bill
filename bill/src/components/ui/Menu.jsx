import Link from 'next/link'

export default function Menu() {
    return (
        <div className='capitalize flex flex-col justify-center gap-4 px-4 py-2 md:flex-row md:items-center md:py-1 lg:gap-12 lg:px-8 lg:py-2'>

            <Link
                href='/'
                className='font-semibold hover:bg-txt-muted py-1 px-2 rounded'
            >home</Link>
            <Link
                href='/'
                className='font-semibold hover:bg-txt-muted py-1 px-2 rounded'
            >list</Link>
            <Link
                href='/'
                className='font-semibold hover:bg-txt-muted py-1 px-2 rounded'
            >about</Link>
            <Link
                href='/'
                className='font-semibold hover:bg-txt-muted py-1 px-2 rounded'
            >contact</Link>

        </div>
    )
}
