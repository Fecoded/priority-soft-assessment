export type ValidationError = {
  code: string;
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: ValidationError[];
  warnings?: ValidationError[];
  suggestions?: {
    userId: string;
    name: string;
  }[];
};
