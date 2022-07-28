import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Suggestion() {
  const tabsugg = [
    {
      video: "https://www.youtube.com/watch?v=m7OWXtbiXX8",
      titre: "ReactJS Tutorial - 9 - Props",
      nbvue: "455vues",
      time: "ilya 2 ans",
    },
    {
      video: "https://www.youtube.com/watch?v=m7OWXtbiXX8",
      titre: "ReactJS Tutorial - 10 - State",
      nbvue: "55vues",
      time: "ilya 8ans",
    },
    {
      video: "https://www.youtube.com/watch?v=m7OWXtbiXX8",
      titre: "ReactJS Tutorial - 8- react",
      nbvue: "585vues",
      time: "ilya 4 ans",
    },
    {
      video: "https://www.youtube.com/watch?v=m7OWXtbiXX8",
      titre: "ReactJS Tutorial - 5 - compontes",
      nbvue: "7455vues",
      time: "ilya 9 ans",
    },
  ];
  return (
    <div>
      {tabsugg.map((elment,j)=>
      <div key={j}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/m7OWXtbiXX8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <h2>ReactJS Tutorial - 9 - Props</h2>
        <h1> 1000 vues</h1>
        <p> il ya 3 ans </p>
      </div>
      )}
    </div>
  );
}
export default Suggestion;
export function Comments() {
  const tabComments = [
    {
      img: "https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg ",
      nom: "Flen el foulani",
      date: "il y un 3 min",
      desc: "Video ",
    },
    {
      img: "https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg ",
      nom: "Flen el foulani2",
      date: "il y un ans",
      desc: "Video ",
    },
    {
      img: "https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg ",
      nom: "Flen el foulani3",
      date: "il y un ans",
      desc: "Video ",
    },
    {
      img: "https://mpng.subpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg ",
      nom: "Flen el foulani5",
      date: "il y un ans",
      desc: "Video ",
    },
  ];
  return (
    <div>
      {tabComments.map((el, i) => (
        <div key={i}>
          <img style={{ borderRadius: "50%" }} className="logo" src={el.img} />
          <h2>{el.nom}</h2>
          <p>{el.date}</p>
          <p>{el.desc}</p>
        </div>
      ))}
    </div>
  );
}
export function Footery() {
  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>youtyube</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
