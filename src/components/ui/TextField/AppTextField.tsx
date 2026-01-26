import React from "react";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";

export type AppTextFieldProps = TextFieldProps & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: theme.shape.borderRadius,
    transition: "all 0.2s ease-in-out",
    backgroundColor: "transparent",

    "& fieldset": { borderColor: theme.palette.divider },
    "&:hover fieldset": { borderColor: theme.palette.text.primary },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  },
  "& .MuiInputLabel-root": { fontWeight: 500 },
}));

export const AppTextField = React.forwardRef<HTMLDivElement, AppTextFieldProps>(
  (props, ref) => {
    const { startIcon, endIcon, slotProps, InputProps, ...otherProps } = props;

    const startAdornment = startIcon ? (
      <InputAdornment position="start" sx={{ color: "action.active", mr: 1 }}>
        {startIcon}
      </InputAdornment>
    ) : (
      InputProps?.startAdornment
    );

    const endAdornment = endIcon ? (
      <InputAdornment position="end" sx={{ color: "action.active", ml: 1 }}>
        {endIcon}
      </InputAdornment>
    ) : (
      InputProps?.endAdornment
    );

    return (
      <StyledTextField
        fullWidth
        variant="outlined"
        {...otherProps} 
        ref={ref}
        
        slotProps={{
          ...slotProps, 
          input: {
            ...InputProps,
            ...slotProps?.input,
            startAdornment: startAdornment,
            endAdornment: endAdornment,
          },
        }}
      />
    );
  }
);

AppTextField.displayName = "AppTextField";