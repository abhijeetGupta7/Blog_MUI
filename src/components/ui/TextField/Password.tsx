import { TextField, InputAdornment } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

type AuthPassProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AuthPasswordField({ value, onChange }: AuthPassProps) {
  return (
    <TextField
      label="Password"
      type="password"
      value={value}
      onChange={onChange}
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <LockOutlinedIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
