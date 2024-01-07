import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

export default async function Nav() {
	const session = await getServerSession(options)
	return (
		<header className='bg-gray-600 text-gray-100'>
			<nav className='flex justify-between items-center w full px-10 py-4'>
				<div>
					<Link href='/' className='no-underline'>
						My Site
					</Link>
				</div>
				<div className='flex gap-10'>
					<Link href='/create-user'>Create User</Link>
					<Link href='/client-member'>Client Member</Link>
					<Link href='/member'>Member</Link>
					<Link href='/public'>Public</Link>
					{session ? (
						<Link href='/api/auth/signout?callbackUrl=/'>Logout</Link>
					) : (
						<Link href='/api/auth/signin?callbackUrl=/'>Login</Link>
					)}
				</div>
			</nav>
		</header>
	)
}
