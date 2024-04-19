import "./ExamplePage2.sass";
import Dog from "../../Components/Images/dog.svg";

function ExamplePage2() {
  return (
    <div className="examplepage2_toplevel">
      <div className="examplepage2">
        <div className="examplepage2_text">
          <div style={{ fontWeight: "bold" }}>
            This page is dedicated to this cute doggo!
          </div>
          Add your stuff down below.
        </div>
      </div>
      <img src={Dog} className="examplepage2_image" />
    </div>
  );
}

export default ExamplePage2;
