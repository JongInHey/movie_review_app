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
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export const FindUsername = () => {
  useScrollTop();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [logging, setLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const loginHandler = (data) => {
    const { email } = data;
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData && userData.email === email) {
      setUsername(userData.username);
      setError("");
      setLogging(true);
    } else {
      setError("등록된 이메일이 없습니다.");
      setUsername("");
      setLogging(false);
    }
  };

  return (
    <>
      <PageTitle titleName={"Login"} />
      <Container>
        <BackBg />
        <Form onSubmit={handleSubmit(loginHandler)}>
          <h3>FIND ID</h3>
          <input
            {...register("email", {
              required: "이메일은 필수 입니다.",
              pattern: {
                value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "이메일 형식에 맞게 작성해주세요.",
              },
            })}
            type="text"
            placeholder="email"
          />
          <MdEmail />
          <UserErrorMessage message={errors?.email?.message} />
          {error && <UserErrorMessage message={error} />}
          <Button $isBtnActive={isValid}>아이디 찾기</Button>
        </Form>

        <TextWrap>
          <p>
            <Link to={"/login"}>로그인 하러 가기</Link>
            <Link to={"/findpassword"}>비밀번호 찾기</Link>
          </p>
        </TextWrap>

        <Alret $logging={logging}>
          {username && <p>찾은 아이디: {username}</p>}
        </Alret>
      </Container>
    </>
  );
};
