import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        // The button is in the form so preventDefault is needed to
        // prevent the form submitting and reloading
        e.preventDefault();
        // Go back 1 step in browser's history
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}
