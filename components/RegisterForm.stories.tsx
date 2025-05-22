// components/RegisterForm.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import RegisterForm from "./RegisterForm";

// TODO: メタデータ
const meta: Meta<typeof RegisterForm> = {
  title: "Components/RegisterForm",
  component: RegisterForm,
};
export default meta;

// TODO: ストーリーの定義
type Story = StoryObj<typeof RegisterForm>;

// TODO: デフォルトストーリーの設定
export const Default: Story = {
  args: {
    formData: {
      name: "test user",
      email: "test-user@example.com",
      role: "user",
    },
  },
};
