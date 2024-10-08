import { PageTitle } from "../../components/PageTitle";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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
import { FaLock, FaUser } from "react-icons/fa";
import { useScrollTop } from "../../lib/useScrollTop";

export const Login = ({ onLogin }) => {
  useScrollTop();
  const [loginError, setLoginError] = useState();
  const [localname, setLocalname] = useState();
  const [logging, setLogging] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navi = useNavigate();

  const loginHandler = (data) => {
    const { username, password } = data;
    const localData = JSON.parse(localStorage.getItem("userData"));
    setLocalname(localData?.name);
    if (
      localData &&
      localData.username === username &&
      localData.password === password
    ) {
      onLogin();
      setLoginError("");
      setTimeout(() => {
        setLogging(true);
      }, 100);

      setTimeout(() => {
        setLogging(false);
      }, 1000);

      setTimeout(() => {
        navi("/");
      }, 1600);
    } else {
      setLogging(false);
      setLoginError("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <>
      <PageTitle titleName={"Login"} />
      <Container>
        <BackBg />
        <Form onSubmit={handleSubmit(loginHandler)}>
          <h3>LOGIN</h3>
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

          <input
            {...register("password", {
              required: "패스워드는 필수 입니다.",
              minLength: {
                value: 8,
                message: "영문, 숫자, 특수기호 조합 8자리 이상 15자리 이하",
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                message: "영문, 숫자, 특수기호 조합 8자리 이상 15자리 이하",
              },
            })}
            type="password"
            placeholder="Password"
          />
          <FaLock />
          <UserErrorMessage message={errors?.password?.message} />

          {loginError && <UserErrorMessage message={loginError} />}
          <Button $isBtnActive={isValid}>LOGIN</Button>
        </Form>

        <TextWrap>
          <p>
            아직 회원이 아니신가요?
            <Link to={"/signup"}>회원가입 하러 가기</Link>
          </p>
          <p>
            비밀번호를 잊으셨나요?
            <Link to={"/findpassword"}>비밀번호 찾기</Link>
          </p>
        </TextWrap>

        <Alret $logging={logging}>
          <p>
            {localname}님 환영 합니다!
            <br />
            로그인 되었습니다!!
          </p>
        </Alret>
      </Container>
    </>
  );
};
