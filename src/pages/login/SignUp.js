import { PageTitle } from "../../components/PageTitle";
import { UserErrorMessage } from "./components/UserErrorMessage";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Container,
  BackBg,
  Form,
  Button,
  TextWrap,
} from "./components/LoginStyle";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiUserSmileFill } from "react-icons/ri";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const navi = useNavigate();

  const loginHandler = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));

    alert("회원가입 되었습니다!");
    navi("/login");
  };

  return (
    <>
      <PageTitle titleName={"SignUp"} />
      <Container>
        <BackBg />
        <Form onSubmit={handleSubmit(loginHandler)}>
          <h3>SIGN UP</h3>
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

          <input
            {...register("name", {
              required: "이름은 필수 입니다.",
            })}
            type="text"
            placeholder="name"
          />
          <RiUserSmileFill />
          <UserErrorMessage message={errors?.name?.message} />

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

          <Button $isBtnActive={isValid}>SIGN UP</Button>
        </Form>

        <TextWrap>
          <p>
            이미 회원이 이신가요? <Link to={"/login"}>로그인 하러가기</Link>
          </p>
        </TextWrap>
      </Container>
    </>
  );
};
