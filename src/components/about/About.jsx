import './about.scss';

export default function About() {
	return (
		<div className="about" id="about">
			<div className="wrapper">
				<div className="left">
					<div className="content">
						<h1>About Me</h1>
						<div className="aboutContainer">
							<p>
								I’m a recent Computer Science graduate with a
								Second Upper-Class degree from the University of
								Westminster, UK, driven by a passion for
								building impactful software solutions and
								solving complex problems through technology. I
								thrive in dynamic environments, constantly
								exploring new technologies to create efficient
								and scalable applications.
							</p>
							<img src="assets/KoshilaImage.png" alt="My Photo" />
						</div>

						<h5>◆ Technical Skills</h5>
						<ul>
							<li>
								💻
								<strong>
									Programming Languages & Frameworks: &nbsp;
								</strong>
								Java, Node.js, JavaScript, Python, PHP, React
							</li>
							<li>
								📊 <strong>Databases:</strong> &nbsp;MySQL,
								MongoDB
							</li>
							<li>
								🧑‍💻 <strong>Web Technologies:</strong>{' '}
								&nbsp;HTML, CSS
							</li>
							<li>
								🔒 <strong>Version Control: </strong>&nbsp;Git
								and GitHub
							</li>
							<li>
								🧠 <strong>Other Expertise:</strong> &nbsp;Web
								scraping (experienced on a project) & Machine
								Learning (explored and experienced in a project)
							</li>
						</ul>

						<h5>◆ Work Experience</h5>
						<ul>
							<li>
								🚀 <strong>Internship at Emojot</strong> (6
								months)
								<ul>
									<li>
										💻 Contributed to the development and
										maintenance of the MERN stack-based
										platform.
									</li>
									<li>
										🔧 Worked with the research team on
										implementing new features, including
										platform improvements.
									</li>
									<li>
										🐞 Utilized Node.js to resolve software
										bugs and enhance platform stability.
									</li>
									<li>
										📡 Collaborated on the development of a
										Social Media Listening platform, using
										web scraping to gather data and analyze
										APIs.
									</li>
									<li>
										⚙️ Focused on improving both front-end
										and back-end functionality.
									</li>
								</ul>
							</li>
						</ul>

						<h5>◆ What I’m Working On</h5>
						<ul>
							<li>
								📚 Developing an e-library application with
								features like browsing, adding books to
								different bookshelves (currently reading,
								wishlist, completed), reviewing books, and plans
								to add ratings and personalized recommendations.
							</li>
							<li>
								📚 Expanding my knowledge in software
								architecture & full-stack development
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
