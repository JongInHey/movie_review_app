import { PageTitle } from "../../components/PageTitle";
import { useForm } from "react-hook-form";
import { UserErrorMessage } from "./components/UserErrorMessage";
import {
  Container,
  BackBg,
  Form,
  Button,
  TextWrap,
  Alret,
} from "./components/LoginStyle";
import { useState } from "react";
import { useScrollTop } from "../../lib/useScrollTop";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export const FindPassword = () => {
  useScrollTop();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [logging, setLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = (data) => {
    const { username } = data;
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && userData.username === username) {
      setPassword(userData.password);
      setError("");
      setLogging(true);
    } else {
      setError("등록된 아이디가 없습니다.");
      setPassword("");
      setLogging(false);
    }
  };

  return (
    <>
      <PageTitle titleName={"Login"} />
      <Container>
        <BackBg />
        <Form onSubmit={handleSubmit(loginHandler)}>
          <h3>FIND Password</h3>
          <input
            {...register("username", {
              required: "아이디는 필수 입니다.",
              minLength: {
                value: 2,
                message: "아이디는 2자리 이상 입력 해주세요.",
              },
            })}
            type="text"
            placeholder="Username"
          />
          <FaUser />
          <UserErrorMessage message={errors?.username?.message} />
          {error && <UserErrorMessage message={error} />}
          <Button $isBtnActive={isValid}>비밀번호 찾기</Button>
        </Form>

        <TextWrap>
          <p>
            <Link to={"/login"}>로그인 하러 가기</Link>
            <Link to={"/findusername"}>아이디 찾기</Link>
          </p>
        </TextWrap>

        <Alret $logging={logging}>
          {password && <p>찾은 비밀번호: {password}</p>}
        </Alret>
      </Container>
    </>
  );
};
