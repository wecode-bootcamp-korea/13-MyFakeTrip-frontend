/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line prettier/prettier
import React, { useState, useEffect } from "react";
// eslint-disable-next-line prettier/prettier
import { Link } from "react-router-dom";
// eslint-disable-next-line prettier/prettier
import { useForm } from "react-hook-form";
import styled from "styled-components";
const SignupEmail = () => {
  const handleSocialLogiIn = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log(JSON.stringify(authObj));
        fetch("http://10.58.7.186:8000/account/login/kakao", {
          method: "GET",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.access_token);
            localStorage.setItem("Kakao_token", res.access_token);
            if (res.access_token) {
              alert("Successfully logged in!");
              this.props.history.push("/");
              window.location.reload();
            }
          });
      },
      fail: function (error) {
        alert(JSON.stringify(error));
      },
    });
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  useEffect(() => {
    console.log(email, password);
  }, [email, password]);
  function handleInputEmail(e) {
    setEmail(e.target.value);
  }
  function handleInputPassword(e) {
    setPassword(e.target.value);
  }
  const isLogin = () => {
    fetch("http://10.58.7.186:8000/account/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log("결과:", result));
  };
  // eslint-disable-next-line prettier/prettier
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Wrapper>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <InputBox>
            이름 *
            <NameBox
              autoComplete="off"
              name="name"
              type="text"
              placeholder="이름을 입력해주세요."
              onChange={handleInputEmail}
              ref={register({
                required: "❗️Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "이메일 주소가 맞나요?",
                },
              })}
            />
          </InputBox>
          {errors.name && <Required> {errors.name.message}</Required>} */}
          <InputBox>
            이메일 *
            <EmailBox
              autoComplete="off"
              name="email"
              type="email"
              placeholder="ID@example.com"
              onChange={handleInputEmail}
              ref={register({
                required: "❗️Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "이메일 주소가 맞나요?",
                },
              })}
            />
          </InputBox>
          {errors.email && <Required> {errors.email.message}</Required>}
          <InputBox>
            비밀번호 *
            <PwBox
              autoComplete="off"
              name="password"
              type="password"
              placeholder="영문, 숫자, 특수문자 2가지 조합 6~15자"
              onChange={handleInputPassword}
              ref={register({
                required: "❗️Password is required",
                pattern: {
                  value: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%-&*]).*$/,
                  message: "비밀번호가 너무 짧습니다. (6자 이상)",
                },
              })}
            />
          </InputBox>
          {errors.password && <Required>{errors.password.message} </Required>}
          {/* <InputBox>
            비밀번호 확인*
            <PwBox
              autoComplete="off"
              name="password"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
              onChange={handleInputPassword}
              ref={register({
                required: "❗️Password is required",
                pattern: {
                  value: /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%-&*]).*$/,
                  message: "비밀번호가 너무 짧습니다. (6자 이상)",
                },
              })}
            />
          </InputBox>
          {errors.password && <Required>{errors.password.message} </Required>} */}
          <p>*선택 항목을 동의하지 않아도 서비스를 이용하실 수 있습니다.</p>
          <p>*회원 가입 시 본인이 만 14세 이상임에 동의하게 됩니다.</p>
          <Button type="submit" onClick={isLogin}>
            회원가입
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 430px;
  height: 430px;
  border: 1px solid #e9ecef;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const EmailBox = styled.input`
  width: 332px;
  height: 45px;
  font-size: 14px;
  padding: 5.5px 0 11.5px 14px;
  margin: 5px 0 20px 0;
  border: 1px solid #c1cac8;
  background-color: #fafafa;
  border-radius: 2px;
  ::placeholder {
    color: #a5adab;
  }
  :focus {
    outline: 1px solid #ff8000;
    border-color: #ff8000;
  }
`;
const PwBox = styled.input`
  width: 332px;
  height: 45px;
  font-size: 14px;
  padding: 5.5px 0 11.5px 14px;
  margin: 5px 0 20px 0;
  border: 1px solid #c1cac8;
  background-color: #fafafa;
  border-radius: 2px;
  ::placeholder {
    color: #a5adab;
  }
  :focus {
    outline: 1px solid #ff8000;
    border-color: #ff8000;
  }
`;
const Required = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #ff8000;
`;
const Button = styled.button`
  width: 332px;
  height: 48px;
  color: #ffffff;
  background-color: #cbe7fd;
  border: 1px solid #cbe7fd;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
`;
export default SignupEmail;
