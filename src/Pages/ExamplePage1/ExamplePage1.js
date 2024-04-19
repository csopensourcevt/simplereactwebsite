import "./ExamplePage1.sass";
import DrinkingCoffeeMale from "../../Components/Images/drinking_coffee_male.svg";

function ExamplePage1() {
  return (
    <div className="examplepage1_toplevel">
      <div className="examplepage1">
        <div className="examplepage1_text">
          <div style={{ fontWeight: "bold" }}>
            Hey everyone! Welcome to this React introduction!
          </div>
          Make something new that everyone can see.
        </div>
      </div>
      <img src={DrinkingCoffeeMale} className="examplepage1_image" />
    </div>
  );
}

export default ExamplePage1;
