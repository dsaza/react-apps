import FollowCardItem from './FollowCardItem'

const users = [
	{
		name: 'Dayron Daza',
		userName: 'dsaza',
		isFollowing: false,
	},
	{
		name: 'Miguel Ángel Durán',
		userName: 'midudev',
		isFollowing: true,
	},
	{
		name: 'Andrés Cruz',
		userName: 'andrescruzn',
		isFollowing: false,
	},
]

export default function FollowCard() {
	return (
		<section className='tw-followCard'>
			<h3 className='tw-followCard-title'>A quién seguir</h3>
			{users.map(({ name, userName, isFollowing }) => (
				<FollowCardItem
					key={userName}
					name={name}
					userName={userName}
					initialIsFollowing={isFollowing}
				/>
			))}
		</section>
	)
}