import { TextField, InputAdornment } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

type AuthEmailProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function AuthEmailField({ value, onChange }: AuthEmailProps) {
  return (
    <TextField
      label="Email address"
      type="email"
      value={value}
      onChange={onChange}
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlinedIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
