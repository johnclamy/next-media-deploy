import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { UserAuth } from "../../firebase/auth";

const AuthButton = () => {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  if (user) {
    return (
      <Button className="text-capitalize" variant="link" onClick={() => logout()}>
        sign out
      </Button>
    );
  }

  return (
    <Button className="text-capitalize" variant="link" onClick={() => navigate('/signup')}>
      sign up
    </Button>
  );
};

export default AuthButton;