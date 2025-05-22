// components/RegisterForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { createUser } from "../utils/api";

// 必要に応じて利用する
interface RegisterFormInputs {
  name: string;
  email: string;
  role: string;
}

interface RegisterFormProps {
  onSuccess?: () => void;
  onError?: (error: any) => void;
  disabled?: boolean;
}

// TODO: 新規登録フォームコンポーネントを実装する
const RegisterForm: React.FC = () => {
  // 必要に応じて利用する
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  function regist(formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const role = formData.get("role");

    alert(`Registing for '${name}'`);
  }

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        新規登録
      </Typography>
      <form action={regist}>
        <input name="name" />
        <input name="email" />
        <input name="role" />
        <button type="submit">登録</button>
      </form>
    </Box>
  );
};

export default RegisterForm;
