import { useState } from 'react'

export default function FollowCardItem({ userName, name, initialIsFollowing }) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

	const cardClassname = isFollowing ? 'tw-followCard-item tw-isFollowing' : 'tw-followCard-item'
	const buttonText = isFollowing ? 'Siguiendo' : 'Seguir'

	const handleClick = () => {
		setIsFollowing(!isFollowing)
	}

	return (
		<div role='button' className={cardClassname}>
			<header>
				<img src={`https://unavatar.io/${userName}`} alt="El avatar de dsaza" />
				<div>
					<a href="#" role='link'>{name}</a>
					<span>@{userName}</span>
				</div>
			</header>
			<aside>
				<button type='button' onClick={handleClick}>{buttonText}</button>
			</aside>
		</div>
	)
}