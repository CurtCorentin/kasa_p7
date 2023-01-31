import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import aboutArray from "../../datas/aboutArray.json"; // j'ai créé un fichier JSON avec les données des collapses

export default function About() {
	return (
		<>
			<AboutBanner />
			{aboutArray.map((rule, index) => (
				<Collapse
					key={index}
					aboutTitle={rule.aboutTitle}
					aboutText={rule.aboutText}
					aboutStyle="about-style"
				/>
			))}
		</>
	);
}
