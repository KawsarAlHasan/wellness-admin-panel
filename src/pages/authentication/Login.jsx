import React, { useState } from "react";
import { Input, Button } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import logo from "../../assets/mainlogo.png";
import loginImage from "../../assets/loginImage.png";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Login:", { email, password });
    navigate("/");
  };

  return (
    <div className="flex h-screen lg:mx-[200px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full overflow-hidden">
        <div className="lg:col-span-7 bg-[#f5f3f0] hidden lg:block ">
          <img src={loginImage} className="w-full" alt="login-image" />

          <div className="text-center">
            {/* Text */}
            <div className="mt-8 ">
              <h2 className="text-3xl font-bold mb-3">
                Find Your Life Balance
              </h2>
              <p className="">
                Book spa sessions & wellness rituals
                <br />
                with ease
              </p>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-8">
              <div className="w-8 h-2 bg-black "></div>
              <div className="w-2 h-2 bg-white rounded"></div>
              <div className="w-2 h-2 bg-white rounded"></div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 ">
          <div className="flex h-screen justify-center items-center mx-2 lg:mx-0">
            <div className="w-full max-w-md">
              {/* Logo */}
              <div className="mb-12">
                <div className="w-12 h-12 mb-8">
                  <img src={logo} alt="logo" />
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-bold mb-2">Get started now</h1>
              <p className="text-gray-600 mb-8">
                Find calm, every day — just for you.
              </p>

              {/* Inputs */}
              <div className="space-y-4">
                <Input
                  size="large"
                  placeholder="Your email"
                  prefix={<MailOutlined className="text-gray-400" />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg py-3"
                />

                <Input.Password
                  size="large"
                  placeholder="Create password"
                  prefix={<LockOutlined className="text-gray-400" />}
                  iconRender={(visible) =>
                    visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-lg py-3"
                />

                <Button
                  type="primary"
                  size="large"
                  onClick={handleSubmit}
                  className="w-full !bg-black !hover:bg-gray-800 !rounded-full !h-12 text-base font-medium mt-6"
                >
                  Continue
                </Button>
              </div>

              {/* Divider */}
              <div className="text-center mt-8 mb-6">
                <span className="text-gray-500 text-sm">
                  Already a member?{" "}
                  <a href="#" className="text-black hover:underline">
                    Log in here
                  </a>
                </span>
              </div>

              {/* Social Login */}
              <div className="flex justify-center gap-4">
                <Button
                  size="large"
                  icon={
                    <FcGoogle style={{ fontSize: "20px", color: "#4285F4" }} />
                  }
                  className="w-14 h-14 rounded-full border border-gray-200 hover:border-gray-300 flex items-center justify-center"
                />
                <Button
                  size="large"
                  icon={
                    <FaFacebook
                      style={{ fontSize: "20px", color: "#1877F2" }}
                    />
                  }
                  className="w-14 h-14 rounded-full border border-gray-200 hover:border-gray-300 flex items-center justify-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
