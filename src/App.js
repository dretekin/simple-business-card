import photo from "./img/photo.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header>
				<img className="photo" src={photo} />
			</header>
			<main>
				<h1 className="name">Laura Smith</h1>
				<h2 className="job-title">Frontend Developer</h2>
				<a className="website" href="laurasmith.website">
					laurasmith.website
				</a>
				<section className="contact-links">
					<a className="email" href="mailto: laura@smith.com">
						<i class="fa-solid fa-envelope"></i> Email
					</a>
					<a class="linkedin" href="linkedin.com">
						<i class="fa-brands fa-linkedin"></i> LinkedIn
					</a>
				</section>
				<section className="info">
					<div className="texts">
						<h3 className="about">About</h3>
						<p>
							I am a frontend developer with a particular interest in making
							things simple and automating daily tasks. I try to keep up with
							security and best practices, and am always looking for new things
							to learn.
						</p>
					</div>
					<div className="texts">
						<h3 className="interests">Interests</h3>
						<p>
							I am a frontend developer with a particular interest in making
							things simple and automating daily tasks. I try to keep up with
							security and best practices, and am always looking for new things
							to learn.
						</p>
					</div>
				</section>
			</main>
			<footer>
				<ul className="social-links">
					<li>
						<a href="#">
							<i class="fa-brands fa-square-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#">
							{" "}
							<i class="fa-brands fa-square-facebook"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa-brands fa-square-instagram"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i class="fa-brands fa-square-github"></i>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
}

export default App;
