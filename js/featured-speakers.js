const speakers = [
	{
		photo: './images/speaker1.png',
		photo_alt: 'Yochai Benkler',
		name: 'Yochai Benkler',
		role: 'Berkman Professor of Entrepreneurial Legal Studies at Havard Law School',
		description: 'Benkler studies commons-based peer production, and published his seminal book. The Wealth of Networks in 2006.'
	},
	{
		photo: './images/speaker3.png',
		photo_alt: 'SohYeong Noh',
		name: 'SohYeong Noh',
		role: 'Director of Art Conter Nabi and a board of CC Korea',
		description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.'
	},
	{
		photo: './images/speaker5.png',
		photo_alt: 'Lila Tretikov',
		name: 'Lila Tretikov',
		role: 'Executive Director of the Wikimedia Foundation',
		description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people arond the world every month.'
	},
	{
		photo: './images/speaker2.png',
		photo_alt: 'Kilnam Chon',
		name: 'Kilnam Chon',
		role: '',
		description: 'Kilnam Chon helped bring the internet to asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOC) Internet Hall of Fame.'
	},
	{
		photo: './images/speaker4.png',
		photo_alt: 'Julia Leda',
		name: 'Julia Leda',
		role: 'President of Young Pirates of Europe',
		description: 'European ingetration, political democracy and participation of youth throughnonline as her major condern, Reda\'s report outlining potential changes to EU copyright law was approved by the Parliament in July.'
	},
	{
		photo: './images/speaker6.png',
		photo_alt: 'Ryan Merkley',
		name: 'Ryan Merkley',
		role: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
		description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.'
	}
]

const speaker = document.querySelector('.speaker-contents');
for (let i = 0; i < speakers.length; i += 1) {
	speaker.innerHTML += `
					<div id="speaker-content" class="speaker-content">
						<div class="speaker-image">
							<img src="${speakers[i].photo}" alt="${speakers[i].photo_alt}" width="130">
						</div>
						<div class="speaker-desc">
							<h2>${speakers[i].name}</h2>
							<h5>${speakers[i].role}</h5>
							<div class="trait"></div>
							<p>${speakers[i].description}</p>
						</div>
					</div>
`;
}