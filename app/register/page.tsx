// app/register/page.tsx

"use client"; // クライアントコンポーネントとしてマーク

import React from "react";
import RegisterForm from "../../components/RegisterForm";
import { Typography, Box } from "@mui/material";

// TODO: 新規登録ページを実装し、RegisterFormコンポーネントを使用する
const RegisterPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography id="title" variant="h5" gutterBottom>
        新規ユーザー登録
      </Typography>
      <RegisterForm />
    </Box>
  );
};
export default RegisterPage;
